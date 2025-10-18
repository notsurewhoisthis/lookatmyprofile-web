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
    const base64 = profile.profilePicUrl ? await downloadAsBase64(String(profile.profilePicUrl)) : null

    if (!process.env.OPENAI_API_KEY) {
      return badRequest('OPENAI_API_KEY not configured', 500)
    }

    const messages = buildMessages({ language, style, profile, base64Image: base64 || undefined })
    const preferred = process.env.OPENAI_PAID_MODEL || 'gpt-5-mini-2025-08-07'
    const fallbacks = [preferred, 'gpt-4o', 'gpt-4o-mini']
    let content = ''
    let lastErr: any = null
    for (const mdl of fallbacks) {
      try {
        const completion = await openai.chat.completions.create({
          model: mdl,
          messages,
          temperature: 0.9,
          max_tokens: 1600,
        })
        content = completion.choices?.[0]?.message?.content || ''
        if (content) break
      } catch (e) {
        lastErr = e
        continue
      }
    }
    if (!content) {
      console.error('OpenAI generation failed:', lastErr?.message || lastErr)
      return NextResponse.json({ error: 'internal_error', details: 'openai_failed' }, { status: 500 })
    }
    const sections = parseSections(content)

    // Mark session as used only after successful generation
    const res = NextResponse.json({
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
    if (!allowDev && sessionId) {
      markSessionUsed(sessionId)
      try { res.cookies.set('stripe_session','', { maxAge: 0, path: '/' }) } catch {}
    }
    return res
  } catch (err: any) {
    console.error('Analyze error', err)
    return NextResponse.json({ error: 'internal_error', details: err?.message }, { status: 500 })
  }
}
