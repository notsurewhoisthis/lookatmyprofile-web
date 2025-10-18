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
Format with plain section titles:
Overview:
<2-4 short lines>
Profile Picture Analysis:
<2-4 short lines>
Summary:
<1-2 lines>
${style === 'poetic' ? 'All content must be in rhyming stanzas.' : ''}`

  const userText = `Roast this Instagram profile:\n` +
  `Username: @${profile.username}\n` +
  `Bio: ${profile.biography || 'No bio'}\n` +
  `Followers: ${profile.followersCount}\n` +
  `Following: ${profile.followsCount || 0}\n` +
  `Posts: ${profile.postsCount}\n` +
  `Verified: ${profile.isVerified ? 'Yes' : 'No'}`

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
    'profile picture analysis': '🖼️',
    'summary': '✅'
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

