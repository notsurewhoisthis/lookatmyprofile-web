import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blogPosts';

interface RelatedPostsProps {
  currentSlug: string;
  tags?: string[];
  category?: string;
  maxPosts?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags?: string[];
  category?: string;
  author?: any;
}

export async function RelatedPosts({ 
  currentSlug, 
  tags = [], 
  category,
  maxPosts = 4 
}: RelatedPostsProps) {
  const allPosts = await getAllBlogPosts();
  
  // Filter out current post
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  // Score posts based on relevance
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    
    // Tag matching (highest priority)
    if (post.tags && tags.length > 0) {
      const matchingTags = post.tags.filter(tag => 
        tags.some(currentTag => 
          tag.toLowerCase().includes(currentTag.toLowerCase()) ||
          currentTag.toLowerCase().includes(tag.toLowerCase())
        )
      );
      score += matchingTags.length * 3;
    }
    
    // Category matching
    if (post.category && category && post.category === category) {
      score += 2;
    }
    
    // Title keyword matching
    const currentWords = currentSlug.split('-');
    const postWords = post.slug.split('-');
    const matchingWords = postWords.filter(word => 
      currentWords.includes(word) && word.length > 3
    );
    score += matchingWords.length;
    
    // Boost recent posts slightly
    if (post.date) {
      const postDate = new Date(post.date);
      const daysSincePublished = (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24);
      if (daysSincePublished < 30) score += 1;
      if (daysSincePublished < 7) score += 1;
    }
    
    return { ...post, score };
  });
  
  // Sort by score and take top posts
  const relatedPosts = scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPosts)
    .filter(post => post.score > 0); // Only show posts with some relevance
  
  // If we don't have enough related posts, add recent posts
  if (relatedPosts.length < maxPosts) {
    const recentPosts = otherPosts
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, maxPosts - relatedPosts.length)
      .filter(post => !relatedPosts.find(rp => rp.slug === post.slug))
      .map(post => ({ ...post, score: 0 })); // Add score property
    
    relatedPosts.push(...recentPosts);
  }
  
  if (relatedPosts.length === 0) return null;
  
  return (
    <section className="mt-16 pt-8 border-t border-gray-800">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {relatedPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link 
              href={`/blog/${post.slug}`}
              className="block p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.readTime}</span>
                <span>{post.date ? new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                }) : 'Recent'}</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
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
      
      {/* SEO-friendly internal linking section */}
      <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg">
        <p className="text-sm text-gray-300">
          <span className="font-semibold">Explore More:</span> Check out our{' '}
          <Link href="/blog" className="text-purple-400 hover:underline">
            complete blog archive
          </Link>{' '}
          for more insights on Instagram roasting, social media trends, and Gen Z humor. Ready to roast?{' '}
          <Link href="/download" className="text-pink-400 hover:underline">
            Download our app
          </Link>{' '}
          and start generating hilarious roasts today!
        </p>
      </div>
    </section>
  );
}

// Static version for pages that don't need async data
export function RelatedPostsStatic({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) return null;
  
  return (
    <section className="mt-16 pt-8 border-t border-gray-800">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link 
              href={`/blog/${post.slug}`}
              className="block p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.readTime}</span>
                <span>{post.date ? new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                }) : 'Recent'}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}