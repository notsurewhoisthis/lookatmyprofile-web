import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blogPosts';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Search - LookAtMyProfile',
  description: 'Search LookAtMyProfile blog posts and guides.',
  alternates: { canonical: 'https://www.lookatmyprofile.org/search' },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const query = (q || '').toString().trim();
  const all = await getAllBlogPosts();

  const results = query
    ? all.filter((p) => {
        const hay = [p.title, p.description, p.excerpt, (p.tags || []).join(' '), (p.keywords || []).join(' ')].join(' ').toLowerCase();
        return hay.includes(query.toLowerCase());
      })
    : [];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: `Search results for ${query}`,
    url: `https://www.lookatmyprofile.org/search?q=${encodeURIComponent(query)}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: results.length,
      itemListElement: results.slice(0, 50).map((p, i) => ({
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
          { name: 'Search', url: 'https://www.lookatmyprofile.org/search' },
        ]}
      />
      {query && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <form action="/search" method="get" className="mb-8">
            <div className="flex gap-2">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search articles, e.g. Instagram roast, TikTok trends, Gen Z"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-4 py-3 bg-purple-600 rounded-lg hover:bg-purple-700">Search</button>
            </div>
          </form>

          {!query && <p className="text-gray-400">Type a query above to search the blog.</p>}

          {query && (
            <>
              <h1 className="text-2xl font-bold mb-6">Search results for “{query}”</h1>
              {results.length === 0 ? (
                <p className="text-gray-400">No results found.</p>
              ) : (
                <div className="space-y-6">
                  {results.map((p) => (
                    <article key={p.slug} className="border-b border-gray-800 pb-6">
                      <Link href={`/blog/${p.slug}`} className="group block">
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-400">{p.title}</h2>
                        <p className="text-gray-400 line-clamp-2">{p.description || p.excerpt}</p>
                        <div className="mt-2 text-xs text-gray-500">
                          {p.publishedAt && new Date(p.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          {p.metrics?.readingTime ? ` • ${p.metrics.readingTime} min read` : ''}
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
