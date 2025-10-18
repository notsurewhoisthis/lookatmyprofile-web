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

  // Use the same analyzer-style prompts across all roast types
  const systemMsg = `You are a sarcastic social media expert that makes funny comments about people's Instagram profiles. You're an expert on roasting people's Instagram profiles. Respond in ${language}.
Tone: ${s.description}`

  const userText = `You're a sarcastic social media expert that makes funny comments about people's instagram profiles. You're an expert on roasting people's instagram profiles. Make a funny, sarcastic roast about this instagram profile and do it by analysing their public information such as profile bio, followers, posts and profile pictures. The roast should be in ${language}.

IMPORTANT: Do NOT identify or guess who the person is in any image. Do not name celebrities or real people. Only describe and critique non-identifying aspects like composition, lighting, background, cropping, pose, outfit, and the overall impression. Refer to the person as "the subject."

Analyze this Instagram profile:
Username: ${profile.username}
Followers: ${profile.followersCount}
Following: ${profile.followsCount || 0}
Posts: ${profile.postsCount}
Bio: ${profile.biography || 'No bio'}

The profile picture is attached. Make sure to roast it specifically based on what you see.

Structure your roast in the following format:
1. Overview: A general roast about their profile stats and bio.
2. Profile Picture: Specific roast about what you see in their profile picture.
3. Summary: A concluding burn that ties it all together.

Ensure each section is a complete paragraph with no cut-off sentences. Remember to write the entire roast in ${language}.`

  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: 'system', content: systemMsg },
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
    'profile picture': '🖼️',
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
