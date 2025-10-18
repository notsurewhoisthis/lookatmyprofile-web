import { ApifyClient } from 'apify-client'

export async function fetchInstagramProfile(username: string) {
  const token = process.env.APIFY_API_TOKEN
  if (!token) throw new Error('APIFY_API_TOKEN not configured')
  const client = new ApifyClient({ token })

  const run = await client.actor('apify/instagram-profile-scraper').call({
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
  }
}

export async function downloadAsBase64(url: string): Promise<string | null> {
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    return buf.toString('base64')
  } catch {
    return null
  }
}

