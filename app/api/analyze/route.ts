import { NextRequest, NextResponse } from 'next/server'
import { fetchInstagramProfile, downloadAsBase64 } from '@/lib/apify'
import { openai, buildMessages, parseSections } from '@/lib/openai'
import { verifyOneTimePayment, markSessionUsed } from '@/lib/payments'

export const runtime = 'nodejs'

function badRequest(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(req: NextRequest) {
  try {
    const { username, language = 'en', style = 'savage' } = await req.json()
    if (!username || typeof username !== 'string') return badRequest('username is required')

    // Gating: require a paid single-roast session (one-time)
    const sessionId = req.headers.get('x-stripe-session') || req.cookies.get('stripe_session')?.value
    const allowDev = process.env.ALLOW_FREE_TRIALS === '1'
    if (!allowDev) {
      const ok = await verifyOneTimePayment(sessionId || '')
      if (!ok) {
        return NextResponse.json({
          error: 'payment_required',
          message: 'Payment required ($1.99 per roast).',
        }, { status: 402 })
      }
    }

    // Fetch IG profile via Apify
    const profile = await fetchInstagramProfile(username.replace(/^@/, ''))
    if (!profile) return badRequest('profile_not_found', 404)
    if (profile.isPrivate) return badRequest('cannot_analyze_private_profiles', 404)

    // Optional image for multimodal
    const base64 = profile.profilePicUrl ? await downloadAsBase64(profile.profilePicUrl) : null

    if (!process.env.OPENAI_API_KEY) {
      return badRequest('OPENAI_API_KEY not configured', 500)
    }

    const messages = buildMessages({ language, style, profile, base64Image: base64 || undefined })
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.9,
      max_tokens: 900,
    })
    const content = completion.choices?.[0]?.message?.content || 'Overview: Unable to generate roast right now.\nSummary: Try again later.'
    const sections = parseSections(content)

    // Mark session as used only after successful generation
    if (!allowDev && sessionId) {
      markSessionUsed(sessionId)
    }

    return NextResponse.json({
      profile: {
        username: profile.username,
        followersCount: profile.followersCount,
        followsCount: profile.followsCount,
        postsCount: profile.postsCount,
        imageUrl: profile.profilePicUrl,
        isVerified: profile.isVerified,
      },
      sections,
      createdAt: new Date().toISOString(),
    })
  } catch (err: any) {
    console.error('Analyze error', err)
    return NextResponse.json({ error: 'internal_error', details: err?.message }, { status: 500 })
  }
}
