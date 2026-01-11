import { ApifyClient } from 'apify-client'
import axios from 'axios'

export async function fetchInstagramProfile(username: string) {
  const token = process.env.APIFY_API_TOKEN
  if (!token) throw new Error('APIFY_API_TOKEN not configured')
  const client = new ApifyClient({ token })
  const actor = process.env.APIFY_ACTOR_ID || 'apify/instagram-profile-scraper'
  const run = await client.actor(actor).call({
    usernames: [username],
    resultsLimit: 1,
    proxyConfiguration: { useApifyProxy: true },
  })
  const dataset = await client.dataset(run.defaultDatasetId).listItems({ limit: 1 })
  const item = dataset.items?.[0]
  if (!item) return null

  return {
    username: item.username || username,
    fullName: item.fullName,
    biography: item.biography,
    followersCount: item.followersCount ?? item.followers,
    followsCount: item.followsCount ?? item.following,
    postsCount: item.postsCount ?? item.posts,
    profilePicUrl: item.profilePicUrl || item.profilePicUrlHD,
    isPrivate: !!item.isPrivate,
    isVerified: !!item.isVerified,
    externalUrl: item.externalUrl,
    isBusinessAccount: !!item.isBusinessAccount,
  }
}

export async function downloadAsBase64(url: string): Promise<string | null> {
  try {
    const res = await axios.get(url, { responseType: 'arraybuffer' })
    return Buffer.from(res.data, 'binary').toString('base64')
  } catch {
    return null
  }
}
