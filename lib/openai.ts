import OpenAI from 'openai'

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export type RoastStyle = 'savage'|'friendly'|'poetic'|'genZ'

export function buildMessages({
  language,
  style,
  profile,
  base64Image,
}: {
  language: string
  style: RoastStyle
  profile: any
  base64Image?: string | null
}) {
  const styleMap: Record<RoastStyle, { description: string; example: string }> = {
    savage: {
      description: 'Brutally honest, sarcastic, savage but never hateful. Avoid slurs; target behaviors, not identity.',
      example: 'Your camera roll is 90% mirror selfies and 10% inspirational quotes you don\'t follow.'
    },
    friendly: {
      description: 'Supportive, upbeat, playful jabs, constructive tips. Light roast tone.',
      example: 'Big selfie energy; add some candid posts and you\'ll be unstoppable.'
    },
    poetic: {
      description: 'Rhyming stanzas; witty verse; consistent rhythm. No special characters in headers.',
      example: 'Your grid a quilt of sunset hues, but captions chase the trending news.'
    },
    genZ: {
      description: 'Extremely online, meme-savvy, short punches, no hate. Keep it PG-13.',
      example: 'Not the millennial pause on your Reels 💀'
    },
  }

  const s = styleMap[style] || styleMap.savage

  const system = `You are a professional Instagram roaster. Write in ${language}.
Style: ${s.description}
Example tone: ${s.example}
Safety: be funny but not offensive; avoid slurs and protected-class attacks; no PII beyond provided data.
Audience: paying user who expects a premium, long, highly detailed roast.
Length: target 1500–2000 words. Do not shorten; be concrete and specific.
Image policy: NEVER identify or guess the real person in any photo. Do not name them, do not say they are a celebrity. Only critique non-identifying aspects (composition, lighting, background, pose, vibe, color, framing, facial expression style without naming who it is). If unsure, refer to "the subject".
If an image is provided, explicitly analyze composition, facial expression style, crop, background, lighting, outfit, and the impression they create, without identifying the person.
Format with plain section titles (exact titles):
Overview:
Bio Deep Dive:
Posting Patterns:
Audience & Engagement:
Aesthetic & Grid Cohesion:
Profile Picture Analysis:
Strengths (Keep These):
Red Flags (Roast Them):
Recommendations:
Summary:
${style === 'poetic' ? 'All content must be in witty, rhyming stanzas with clear section headers.' : ''}`

  const userText = `Roast this Instagram profile (use every fact).\n` +
  `Username: @${profile.username}\n` +
  `Full name: ${profile.fullName || 'Unknown'}\n` +
  `Bio: ${profile.biography || 'No bio'}\n` +
  `Followers: ${profile.followersCount}\n` +
  `Following: ${profile.followsCount || 0}\n` +
  `Posts: ${profile.postsCount}\n` +
  `Verified: ${profile.isVerified ? 'Yes' : 'No'}\n` +
  `${profile.externalUrl ? `External link: ${profile.externalUrl}\n` : ''}` +
  `${profile.isBusinessAccount ? 'Business account: Yes\n' : ''}`

  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: 'system', content: system },
    { role: 'user', content: userText }
  ]

  if (base64Image) {
    messages.push({
      role: 'user',
      content: [
        { type: 'text', text: 'Here is their profile picture:' } as any,
        { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${base64Image}` } } as any,
      ] as any
    })
  }

  return messages
}

export function parseSections(text: string) {
  const sections: { title: string; content: string; icon: string }[] = []
  const map: Record<string, string> = {
    'overview': '🧠',
    'bio deep dive': '📝',
    'posting patterns': '📅',
    'audience & engagement': '📊',
    'aesthetic & grid cohesion': '🎨',
    'profile picture analysis': '🖼️',
    'strengths (keep these)': '✅',
    'red flags (roast them)': '🚩',
    'recommendations': '🔧',
    'summary': '🏁'
  }
  const parts = text.split(/\n(?=[A-Za-z ]+:)/).map(s => s.trim())
  for (const part of parts) {
    const m = part.match(/^([A-Za-z ]+):\s*[\r\n]?([\s\S]*)$/)
    if (m) {
      const title = m[1].trim()
      const content = m[2].trim()
      const icon = map[title.toLowerCase()] || '✨'
      sections.push({ title, content, icon })
    }
  }
  if (!sections.length) {
    sections.push({ title: 'Overview', content: text.trim(), icon: '🧠' })
  }
  return sections
}
