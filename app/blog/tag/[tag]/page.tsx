import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blogPosts';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

function toDisplayTag(slug: string) {
  return decodeURIComponent(slug).replace(/-/g, ' ');
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const displayTag = toDisplayTag(tag);

  return {
    title: `#${displayTag} - LookAtMyProfile Blog`,
    description: `Explore LookAtMyProfile posts tagged ${displayTag}.`,
    alternates: { canonical: `https://www.lookatmyprofile.org/blog/tag/${tag}` },
  };
}

function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = await getAllBlogPosts();

  // Match posts that contain this tag (case-insensitive, slugified)
  const filtered = posts.filter((p) => {
    const tags: string[] = (p.tags || p.keywords || []) as string[];
    return tags.some((t) => slugifyTag(t) === tag.toLowerCase());
  });

  // Find original display case of the tag if possible
  const displayTag = filtered.length
    ? ((filtered[0].tags || filtered[0].keywords || []) as string[]).find((t) => slugifyTag(t) === tag) || tag
    : tag;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Posts tagged ${displayTag}`,
    url: `https://www.lookatmyprofile.org/blog/tag/${tag}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: filtered.length,
      itemListElement: filtered.slice(0, 50).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.lookatmyprofile.org/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Blog', url: 'https://www.lookatmyprofile.org/blog' },
          { name: `#${displayTag}`, url: `https://www.lookatmyprofile.org/blog/tag/${tag}` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog/tags" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
            ← All Tags
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            #{displayTag}
          </h1>
          <p className="text-gray-300 mb-8">{filtered.length} post{filtered.length === 1 ? '' : 's'}</p>

          {filtered.length === 0 ? (
            <p className="text-gray-400">No posts found for this tag.</p>
          ) : (
            <div className="space-y-8">
              {filtered.map((post) => (
                <article key={post.slug} className="border-b border-gray-800 pb-8 hover:border-purple-800/50 transition-colors">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-purple-400 transition-colors">{post.title}</h2>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.description || post.excerpt || 'Read more…'}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                      )}
                      {post.metrics?.readingTime && (<>
                        <span>•</span>
                        <span>{post.metrics.readingTime} min read</span>
                      </>)}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
