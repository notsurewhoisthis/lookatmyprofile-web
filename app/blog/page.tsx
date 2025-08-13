import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { FAQSchema, commonFAQs } from '@/components/SEO/FAQSchema';

export const metadata: Metadata = {
  title: 'Blog - Instagram Roasting Tips, Social Media Trends & Gen Z Humor',
  description: 'Expert insights on Instagram roasting, AI profile analysis, social media psychology, and Gen Z humor. Learn the art of the perfect roast with data-driven guides.',
  keywords: 'Instagram roasting blog, social media trends, Gen Z humor, AI profile analysis, Instagram psychology, roasting tips, social media marketing',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/blog'
  },
  openGraph: {
    title: 'Blog - Instagram Roasting & Social Media Insights',
    description: 'Expert guides on Instagram roasting, profile analysis, and social media trends',
    type: 'website',
    url: 'https://www.lookatmyprofile.org/blog',
    siteName: 'LookAtMyProfile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Instagram Roasting & Social Media Insights',
    description: 'Expert guides on Instagram roasting, profile analysis, and social media trends',
  }
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt?: string;
  publishedAt: string;
  author: {
    name: string;
  };
  tags?: string[];
  keywords?: string[];
  metrics?: {
    readingTime: number;
  };
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDataDir = path.join(process.cwd(), 'public', 'blog-data');
    const files = fs.readdirSync(blogDataDir);
    
    const posts = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        try {
          const filePath = path.join(blogDataDir, file);
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const post = JSON.parse(fileContent);
          
          // Ensure slug exists (use filename if not in JSON)
          if (!post.slug) {
            post.slug = file.replace('.json', '');
          }
          
          return post;
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
          return null;
        }
      })
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function BlogPage() {
  const allPosts = await getBlogPosts();
  const totalPosts = allPosts.length;
  
  // Generate structured data for blog listing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'LookAtMyProfile Blog',
    description: 'Expert insights on Instagram roasting, social media trends, and Gen Z humor',
    url: 'https://www.lookatmyprofile.org/blog',
    publisher: {
      '@type': 'Organization',
      name: 'LookAtMyProfile',
      url: 'https://www.lookatmyprofile.org'
    },
    blogPost: allPosts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description || post.excerpt,
      datePublished: post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author.name
      },
      url: `https://www.lookatmyprofile.org/blog/${post.slug}`
    }))
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FAQSchema faqs={commonFAQs.blog} pageTitle="Blog" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            ← Back to Home
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Insights on Instagram culture, social media trends, and digital humor
            </p>
            
            {/* Post count and categories */}
            <div className="flex flex-wrap gap-4 p-4 bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-gray-300">
                  <span className="text-purple-400 font-bold">{totalPosts}</span> articles
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-gray-300">Topics: Instagram, TikTok, Gen Z, AI, Social Media</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <span className="text-gray-300">Updated daily with trending insights</span>
              </div>
            </div>
          </header>

          {/* All Blog Posts */}
          {allPosts.length > 0 ? (
            <div className="space-y-8">
              {allPosts.map((post) => (
                <article 
                  key={post.slug} 
                  className="border-b border-gray-800 pb-8 hover:border-purple-800/50 transition-colors"
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.description || post.excerpt || 'Click to read more...'}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                      <span>•</span>
                      <span>By {post.author.name}</span>
                      {post.metrics?.readingTime && (
                        <>
                          <span>•</span>
                          <span>{post.metrics.readingTime} min read</span>
                        </>
                      )}
                    </div>
                    {(post.tags || post.keywords) && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {(post.tags || post.keywords || []).slice(0, 5).map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-purple-800/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No blog posts available yet.</p>
              <p className="text-gray-500 mt-2">Check back soon for fresh content!</p>
            </div>
          )}

          {/* SEO Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-800">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-100">
                Stay Updated on Instagram Trends
              </h3>
              <p className="text-gray-400 mb-6">
                New articles on social media psychology, roasting techniques, and Gen Z culture posted regularly.
              </p>
              <Link 
                href="/download"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Get the Roast App →
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}