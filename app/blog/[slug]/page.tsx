import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'

interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  tags: string[]
  keywords: string[]
  categories: string[]
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: string
    canonical: string
    structuredData: any
  }
  metrics: {
    readingTime: number
    wordCount: number
    characterCount: number
  }
  tableOfContents: Array<{
    title: string
    anchor: string
  }>
  status: string
  featured: boolean
  contentType: string
  version: string
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'blog-data', `${slug}.json`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent).blogPost || JSON.parse(fileContent)
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | LookAtMyProfile',
      description: 'The blog post you are looking for could not be found.'
    }
  }

  return {
    title: post.seo?.metaTitle || `${post.title} | LookAtMyProfile`,
    description: post.seo?.metaDescription || post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: post.seo?.ogImage ? [post.seo.ogImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: post.seo?.canonical || `https://www.lookatmyprofile.org/blog/${params.slug}`
    }
  }
}

function formatContent(content: string): JSX.Element[] {
  const elements: JSX.Element[] = []
  const lines = content.split('\n')
  let currentList: string[] = []
  let listType: 'ul' | 'ol' | null = null
  let elementKey = 0

  const flushList = () => {
    if (currentList.length > 0 && listType) {
      const ListTag = listType
      elements.push(
        <ListTag key={elementKey++} className={listType === 'ul' ? 'list-disc' : 'list-decimal'} style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
          {currentList.map((item, idx) => (
            <li key={idx} className="mb-2 text-gray-300">{item}</li>
          ))}
        </ListTag>
      )
      currentList = []
      listType = null
    }
  }

  for (const line of lines) {
    const trimmed = line.trim()

    if (!trimmed) {
      flushList()
      continue
    }

    // Headers
    if (trimmed.startsWith('# ')) {
      flushList()
      elements.push(
        <h1 key={elementKey++} className="text-4xl font-bold text-purple-400 mt-8 mb-4">
          {trimmed.substring(2).replace(/\*\*/g, '')}
        </h1>
      )
    } else if (trimmed.startsWith('## ')) {
      flushList()
      elements.push(
        <h2 key={elementKey++} className="text-3xl font-bold text-white mt-8 mb-4">
          {trimmed.substring(3).replace(/\*\*/g, '')}
        </h2>
      )
    } else if (trimmed.startsWith('### ')) {
      flushList()
      elements.push(
        <h3 key={elementKey++} className="text-2xl font-semibold text-white mt-6 mb-3">
          {trimmed.substring(4).replace(/\*\*/g, '')}
        </h3>
      )
    } else if (trimmed.startsWith('#### ')) {
      flushList()
      elements.push(
        <h4 key={elementKey++} className="text-xl font-semibold text-gray-200 mt-4 mb-2">
          {trimmed.substring(5).replace(/\*\*/g, '')}
        </h4>
      )
    }
    // Bullet lists
    else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (listType !== 'ul') {
        flushList()
        listType = 'ul'
      }
      currentList.push(trimmed.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'))
    }
    // Numbered lists
    else if (/^\d+\.\s/.test(trimmed)) {
      if (listType !== 'ol') {
        flushList()
        listType = 'ol'
      }
      currentList.push(trimmed.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'))
    }
    // Regular paragraphs
    else {
      flushList()
      const processedText = trimmed
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
      
      elements.push(
        <p key={elementKey++} className="text-gray-300 mb-4 leading-relaxed" 
           dangerouslySetInnerHTML={{ __html: processedText }} />
      )
    }
  }

  flushList()
  return elements
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const formattedContent = formatContent(post.content)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back to Blog Link */}
        <nav className="mb-8">
          <a href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">
            ← Back to Blog
          </a>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-400 mb-6">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.author.name}</span>
            <span>•</span>
            <span>{post.metrics.readingTime} min read</span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <nav className="mb-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h2 className="text-xl font-bold text-purple-400 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {post.tableOfContents.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.anchor} 
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-2">
            {formattedContent}
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <p className="font-semibold text-white">{post.author.name}</p>
              <p className="text-gray-400 text-sm">{post.author.bio}</p>
            </div>
          </div>
          
          <a href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors">
            ← Back to Blog
          </a>
        </footer>
      </div>
    </div>
  )
}