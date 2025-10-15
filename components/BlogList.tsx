import Link from 'next/link';
import { BlogPost, formatDate } from '@/lib/blog-utils';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No blog posts available yet.</p>
        <p className="text-gray-500 mt-2">Check back soon for fresh content!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
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
                {(post.tags || post.keywords || []).slice(0, 5).map((tag) => {
                  const tagSlug = tag
                    .toLowerCase()
                    .trim()
                    .replace(/&/g, 'and')
                    .replace(/[^a-z0-9\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-');
                  return (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
            )}
          </Link>
        </article>
      ))}
    </div>
  );
}
