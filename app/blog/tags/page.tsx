import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blogPosts';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'All Tags - LookAtMyProfile Blog',
  description: 'Browse the LookAtMyProfile blog by tags. Explore topics like Instagram, TikTok, Gen Z, AI, and more.',
  alternates: { canonical: 'https://www.lookatmyprofile.org/blog/tags' }
};

function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default async function TagsIndexPage() {
  const posts = await getAllBlogPosts();

  const tagMap = new Map<string, { tag: string; slug: string; count: number }>();
  for (const p of posts) {
    const tags: string[] = (p.tags || p.keywords || []) as string[];
    for (const t of tags) {
      const key = slugifyTag(t);
      const current = tagMap.get(key);
      if (current) {
        current.count += 1;
      } else {
        tagMap.set(key, { tag: t, slug: key, count: 1 });
      }
    }
  }

  const tags = Array.from(tagMap.values()).sort((a, b) => b.count - a.count);

  // Structured data for tag collection
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog Tags',
    url: 'https://www.lookatmyprofile.org/blog/tags',
    hasPart: tags.slice(0, 200).map((t) => ({
      '@type': 'CollectionPage',
      name: t.tag,
      url: `https://www.lookatmyprofile.org/blog/tag/${t.slug}`,
      numberOfItems: t.count,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Blog', url: 'https://www.lookatmyprofile.org/blog' },
          { name: 'Tags', url: 'https://www.lookatmyprofile.org/blog/tags' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            All Tags
          </h1>
          <p className="text-gray-300 mb-8">Browse the most used topics on our blog.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {tags.map((t) => (
              <Link
                key={t.slug}
                href={`/blog/tag/${t.slug}`}
                className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition flex items-center justify-between"
              >
                <span className="text-gray-100">#{t.tag}</span>
                <span className="text-sm text-gray-400">{t.count} posts</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

