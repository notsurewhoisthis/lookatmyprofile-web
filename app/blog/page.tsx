import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Blog | LookAtMyProfile | Roast a Profile - AI Instagram Roaster',
  description: 'Insights on Instagram culture, social media trends, and digital humor',
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  author: {
    name: string;
  };
  tags: string[];
  metrics: {
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
          return JSON.parse(fileContent);
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

// Static blog posts (original ones that don't have JSON files)
const staticPosts = [
  {
    slug: 'psychology-of-instagram-roasting',
    title: 'The Psychology Behind Instagram Roasting',
    excerpt: 'Why we love to roast and be roasted in the digital age',
    publishedAt: '2024-03-15',
    author: { name: 'Roast Team' },
    metrics: { readingTime: 5 },
    tags: ['Psychology', 'Social Media', 'Humor']
  },
  {
    slug: 'gen-z-humor-explained',
    title: 'Gen Z Humor: A Scientific Analysis',
    excerpt: "Breaking down why your jokes don't land with younger audiences",
    publishedAt: '2024-03-10',
    author: { name: 'Roast Team' },
    metrics: { readingTime: 7 },
    tags: ['Humor', 'Gen Z', 'Culture']
  },
  {
    slug: 'instagram-personality-types',
    title: '7 Types of Instagram Personalities',
    excerpt: 'Which one are you? A comprehensive breakdown',
    publishedAt: '2024-03-05',
    author: { name: 'Roast Team' },
    metrics: { readingTime: 6 },
    tags: ['Instagram', 'Personality', 'Social Media']
  },
  {
    slug: 'roasting-etiquette-101',
    title: 'Roasting Etiquette 101: How to Be Funny Without Being Mean',
    excerpt: 'The fine line between humor and harassment',
    publishedAt: '2024-02-28',
    author: { name: 'Roast Team' },
    metrics: { readingTime: 4 },
    tags: ['Etiquette', 'Humor', 'Social Media']
  },
  {
    slug: 'ai-humor-evolution',
    title: 'How AI is Changing Online Humor',
    excerpt: 'From meme generators to roast bots: The future of digital comedy',
    publishedAt: '2024-02-20',
    author: { name: 'Roast Team' },
    metrics: { readingTime: 8 },
    tags: ['AI', 'Technology', 'Humor']
  },
  {
    slug: 'ultimate-guide-roast-battles',
    title: 'The Ultimate Guide to Online Roast Battles',
    excerpt: 'Win every verbal sparring match with these proven strategies',
    publishedAt: '2024-02-15',
    author: { name: 'Roast Team' },
    metrics: { readingTime: 10 },
    tags: ['Guide', 'Roasting', 'Strategy']
  }
];

export default async function BlogPage() {
  const dynamicPosts = await getBlogPosts();
  
  // Separate recent (from JSON) and classic posts
  const recentPosts = dynamicPosts.slice(0, 10); // Show up to 10 recent posts
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Insights on Instagram culture, social media trends, and digital humor
          </p>

          {/* Recent Posts from JSON files */}
          {recentPosts.length > 0 && (
            <div className="space-y-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Latest Posts</h2>
              {recentPosts.map((post) => (
                <article key={post.slug} className="border-b border-gray-800 pb-8">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {post.excerpt || post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                      <span>By {post.author.name}</span>
                      <span>{post.metrics.readingTime} min read</span>
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
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
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Classic Posts */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Classic Posts</h2>
            {staticPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-800 pb-8">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <span>{post.metrics.readingTime} min read</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}