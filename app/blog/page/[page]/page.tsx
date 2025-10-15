import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FAQSchema, commonFAQs } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { getAllBlogPosts, getPaginatedPosts, getTotalPages } from '@/lib/blog-utils';
import { BlogList } from '@/components/BlogList';
import { Pagination, PaginationMeta } from '@/components/Pagination';

interface PageProps {
  params: Promise<{
    page: string;
  }>;
}

export async function generateStaticParams() {
  const allPosts = await getAllBlogPosts();
  const totalPages = getTotalPages(allPosts.length);

  // Generate params for pages 2 through totalPages
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params;
  const pageNum = parseInt(page, 10);

  const allPosts = await getAllBlogPosts();
  const totalPages = getTotalPages(allPosts.length);

  if (isNaN(pageNum) || pageNum < 2 || pageNum > totalPages) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `Blog - Page ${pageNum} | Instagram Roasting Tips & Social Media Insights`,
    description: `Browse page ${pageNum} of our blog. Expert insights on Instagram roasting, AI profile analysis, social media psychology, and Gen Z humor.`,
    keywords: 'Instagram roasting blog, social media trends, Gen Z humor, AI profile analysis, Instagram psychology, roasting tips',
    alternates: {
      canonical: `https://www.lookatmyprofile.org/blog/page/${pageNum}`,
    },
    openGraph: {
      title: `Blog - Page ${pageNum} | Instagram Roasting & Social Media Insights`,
      description: 'Expert guides on Instagram roasting, profile analysis, and social media trends',
      type: 'website',
      url: `https://www.lookatmyprofile.org/blog/page/${pageNum}`,
      siteName: 'LookAtMyProfile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Blog - Page ${pageNum} | Instagram Roasting & Social Media Insights`,
      description: 'Expert guides on Instagram roasting, profile analysis, and social media trends',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPagePaginated({ params }: PageProps) {
  const { page } = await params;
  const currentPage = parseInt(page, 10);

  const allPosts = await getAllBlogPosts();
  const totalPosts = allPosts.length;
  const totalPages = getTotalPages(totalPosts);

  // Validate page number
  if (isNaN(currentPage) || currentPage < 2 || currentPage > totalPages) {
    notFound();
  }

  const paginatedPosts = getPaginatedPosts(allPosts, currentPage);

  // Generate structured data for blog listing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'LookAtMyProfile Blog',
    description: 'Expert insights on Instagram roasting, social media trends, and Gen Z humor',
    url: `https://www.lookatmyprofile.org/blog/page/${currentPage}`,
    publisher: {
      '@type': 'Organization',
      name: 'LookAtMyProfile',
      url: 'https://www.lookatmyprofile.org',
    },
    blogPost: paginatedPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description || post.excerpt,
      datePublished: post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
      url: `https://www.lookatmyprofile.org/blog/${post.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <PaginationMeta currentPage={currentPage} totalPages={totalPages} baseUrl="/blog" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Blog', url: 'https://www.lookatmyprofile.org/blog' },
          { name: `Page ${currentPage}`, url: `https://www.lookatmyprofile.org/blog/page/${currentPage}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FAQSchema faqs={commonFAQs.blog} pageTitle={`Blog - Page ${currentPage}`} />

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
              Blog - Page {currentPage}
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
                <span className="text-2xl">📄</span>
                <span className="text-gray-300">
                  Page <span className="text-purple-400 font-bold">{currentPage}</span> of{' '}
                  <span className="text-purple-400 font-bold">{totalPages}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-gray-300">Topics: Instagram, TikTok, Gen Z, AI, Social Media</span>
              </div>
            </div>
          </header>

          {/* Blog Posts */}
          <BlogList posts={paginatedPosts} />

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/blog" />

          {/* SEO Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-800">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Stay Updated on Instagram Trends</h3>
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
