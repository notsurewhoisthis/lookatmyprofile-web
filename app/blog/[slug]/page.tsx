import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { FAQSchema, generateBlogFAQs } from '@/components/SEO/FAQSchema';
import { RelatedPosts } from '@/components/RelatedPosts';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  tags: string[];
  keywords: string[];
  metrics: {
    readingTime: number;
    wordCount: number;
  };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'blog-data', `${slug}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | LookAtMyProfile',
      description: 'The blog post you are looking for could not be found.'
    };
  }

  // Enhanced SEO metadata with all critical elements
  return {
    title: `${post.title} | LookAtMyProfile`,
    description: post.description,
    keywords: post.keywords?.join(', '),
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `https://www.lookatmyprofile.org/blog/${slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      url: `https://www.lookatmyprofile.org/blog/${slug}`,
      siteName: 'LookAtMyProfile',
      images: [{
        url: `https://www.lookatmyprofile.org/api/og?title=${encodeURIComponent(post.title)}`,
        width: 1200,
        height: 630,
        alt: post.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      site: '@lookatmyprofile',
      creator: '@lookatmyprofile',
      images: [`https://www.lookatmyprofile.org/api/og?title=${encodeURIComponent(post.title)}`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    }
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function renderMarkdown(content: string) {
  // Basic markdown to HTML conversion
  let html = content
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-8 mb-4 text-gray-100">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-10 mb-6 text-gray-100">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-12 mb-8 text-gray-100">$1</h1>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-100">$1</strong>')
    // Lists
    .replace(/^\* (.+)$/gm, '<li class="ml-6 mb-2">• $1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-6 mb-2">$1</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-purple-400 hover:text-purple-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="mb-6 text-gray-300 leading-relaxed">');
  
  // Wrap in paragraph tags
  html = `<p class="mb-6 text-gray-300 leading-relaxed">${html}</p>`;
  
  // Clean up empty paragraphs
  html = html.replace(/<p class="mb-6 text-gray-300 leading-relaxed"><\/p>/g, '');
  
  return html;
}

function extractDirectAnswer(content: string, title: string): string {
  // Extract a 30-50 word summary from the content for AI indexing
  // First, try to get the first paragraph after the introduction
  const introSection = content.split('## INTRODUCTION')[1];
  if (introSection) {
    const nextSection = introSection.split('##')[0];
    const paragraphs = nextSection.split('\n\n').filter(p => p.trim().length > 50);
    
    if (paragraphs.length > 0) {
      const firstPara = paragraphs[0].trim()
        .replace(/\*\*/g, '') // Remove bold markers
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // Remove link markup
      
      // Limit to approximately 30-50 words
      const words = firstPara.split(' ');
      if (words.length > 50) {
        return words.slice(0, 48).join(' ') + '...';
      }
      return firstPara;
    }
  }
  
  // Fallback: use the first content paragraph
  const paragraphs = content.split('\n\n').filter(p => 
    p.trim() && 
    !p.startsWith('#') && 
    p.length > 100
  );
  
  if (paragraphs.length > 0) {
    const firstPara = paragraphs[0]
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    const words = firstPara.split(' ');
    if (words.length > 50) {
      return words.slice(0, 48).join(' ') + '...';
    }
    return firstPara;
  }
  
  // Final fallback
  return `This article explores ${title.toLowerCase()} with comprehensive insights and practical guidance for Instagram users and social media enthusiasts.`;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author.name
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    publisher: {
      '@type': 'Organization',
      name: 'LookAtMyProfile',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lookatmyprofile.org/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.lookatmyprofile.org/blog/${slug}`
    },
    keywords: post.keywords?.join(', '),
    articleSection: 'Blog',
    wordCount: post.metrics?.wordCount
  };

  // Generate FAQs for this blog post
  const blogFAQs = generateBlogFAQs(post.title, post.excerpt || post.description, post.tags);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FAQSchema faqs={blogFAQs} pageTitle={post.title} />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>

          <article>
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span>•</span>
                <span>By {post.author.name}</span>
                <span>•</span>
                <span>{post.metrics.readingTime} min read</span>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Direct Answer Box for AI Indexing */}
            <div className="bg-gray-800 border-l-4 border-purple-500 p-6 mb-8 rounded-lg">
              <p className="text-lg font-medium">
                <strong>Quick Answer:</strong> {extractDirectAnswer(post.content, post.title)}
              </p>
            </div>

            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />

            <footer className="mt-16 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-gray-100">{post.author.name}</p>
                  {post.author.bio && (
                    <p className="text-sm text-gray-400">{post.author.bio}</p>
                  )}
                </div>
              </div>
            </footer>
            
            {/* Related Posts Section */}
            <RelatedPosts 
              currentSlug={slug} 
              tags={post.tags} 
              category={post.tags?.[0]} 
              maxPosts={4} 
            />
          </article>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const blogDataDir = path.join(process.cwd(), 'public', 'blog-data');
    const files = fs.readdirSync(blogDataDir);
    
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => ({
        slug: file.replace('.json', '')
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}