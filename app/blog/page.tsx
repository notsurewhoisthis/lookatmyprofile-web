import { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: 'Blog | LookAtMyProfile',
  description: 'Insights on Instagram culture, social media trends, and digital humor',
}

interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt?: string
  publishedAt: string
  author?: {
    name: string
  }
  tags?: string[]
  metrics?: {
    readingTime: number
  }
}

// Get JSON blog posts
function getJSONBlogPosts(): BlogPost[] {
  try {
    const blogDataDir = path.join(process.cwd(), 'public', 'blog-data')
    if (!fs.existsSync(blogDataDir)) {
      return []
    }
    
    const files = fs.readdirSync(blogDataDir).filter(file => file.endsWith('.json'))
    
    return files.map(file => {
      const filePath = path.join(blogDataDir, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const data = JSON.parse(content)
      const post = data.blogPost || data
      
      return {
        slug: file.replace('.json', ''),
        title: post.title,
        description: post.description || post.excerpt,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        author: post.author,
        tags: post.tags,
        metrics: post.metrics
      }
    }).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.error('Error reading JSON posts:', error)
    return []
  }
}

// Legacy hardcoded posts (these will work with old TSX files)
const legacyPosts = [
  {
    slug: 'psychology-of-instagram-roasting',
    title: 'The Psychology Behind Instagram Roasting',
    description: 'Why we love to roast and be roasted in the digital age',
    date: '2024-03-15',
    tags: ['Psychology', 'Social Media', 'Humor'],
    readingTime: 5,
  },
  {
    slug: 'gen-z-humor-explained',
    title: 'Gen Z Humor: A Scientific Analysis',
    description: 'Breaking down why your jokes don\'t land with younger audiences',
    date: '2024-03-10',
    tags: ['Humor', 'Gen Z', 'Culture'],
    readingTime: 7,
  },
  {
    slug: 'instagram-personality-types',
    title: '7 Types of Instagram Personalities',
    description: 'Which one are you? A comprehensive breakdown',
    date: '2024-03-05',
    tags: ['Instagram', 'Personality', 'Social Media'],
    readingTime: 6,
  },
  {
    slug: 'roasting-etiquette-101',
    title: 'Roasting Etiquette 101',
    description: 'The unwritten rules of digital mockery',
    date: '2024-03-01',
    tags: ['Etiquette', 'Humor', 'Guide'],
    readingTime: 4,
  },
  {
    slug: 'ai-humor-evolution',
    title: 'How AI is Changing Comedy',
    description: 'From dad jokes to dank memes: AI\'s humor journey',
    date: '2024-02-25',
    tags: ['AI', 'Technology', 'Humor'],
    readingTime: 8,
  },
  {
    slug: 'ultimate-guide-roast-battles',
    title: 'The Ultimate Guide to Roast Battles',
    description: 'Winning strategies from professional roasters',
    date: '2024-02-20',
    tags: ['Guide', 'Competition', 'Humor'],
    readingTime: 10,
  },
]

export default function BlogPage() {
  // Get JSON posts
  const jsonPosts = getJSONBlogPosts()
  
  // Combine and sort all posts
  const allPosts = [
    ...jsonPosts,
    ...legacyPosts.map(post => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      publishedAt: post.date,
      tags: post.tags,
      metrics: { readingTime: post.readingTime }
    }))
  ].sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime()
    const dateB = new Date(b.publishedAt).getTime()
    return dateB - dateA
  })

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Insights on marketing, technology, and digital trends
          </p>

          <div className="space-y-8">
            {allPosts.map((post) => (
              <article 
                key={post.slug}
                className="group border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-400">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      {post.metrics?.readingTime && (
                        <>
                          <span>•</span>
                          <span>{post.metrics.readingTime} min read</span>
                        </>
                      )}
                      {post.author?.name && (
                        <>
                          <span>•</span>
                          <span>{post.author.name}</span>
                        </>
                      )}
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}