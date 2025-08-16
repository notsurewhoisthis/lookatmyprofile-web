import { Metadata } from 'next';
import Link from 'next/link';
import { getAllAuthors } from '@/lib/authors';
import { getAllBlogPosts } from '@/lib/blogPosts';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';

export const metadata: Metadata = {
  title: 'Our Authors - Expert Writers at Roast a Profile',
  description: 'Meet the expert team behind Roast a Profile. Our writers specialize in social media psychology, AI technology, and digital humor.',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/authors'
  },
  openGraph: {
    title: 'Our Authors - Roast a Profile',
    description: 'Meet the expert team creating hilarious AI-powered Instagram roasts.',
    url: 'https://www.lookatmyprofile.org/authors',
  }
};

export default async function AuthorsPage() {
  const authors = getAllAuthors();
  const allPosts = await getAllBlogPosts();

  const authorsWithStats = authors.map(author => {
    const authorPosts = allPosts.filter(post => 
      post.author?.name?.toLowerCase() === author.name.toLowerCase() ||
      (post.author?.name === 'Roast Master' && author.slug === 'roast-master')
    );
    
    return {
      ...author,
      postCount: authorPosts.length
    };
  });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Roast a Profile",
    "url": "https://www.lookatmyprofile.org",
    "logo": "https://www.lookatmyprofile.org/logo.png",
    "member": authors.map(author => ({
      "@type": "Person",
      "@id": `https://www.lookatmyprofile.org/authors/${author.slug}#author`,
      "name": author.name,
      "jobTitle": author.role,
      "url": `https://www.lookatmyprofile.org/authors/${author.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Authors', url: '/authors' }
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">
                Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expert Team</span>
              </h1>
              <p className="text-xl text-gray-300">
                The brilliant minds behind your favorite Instagram roasts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {authorsWithStats.map((author) => (
                <Link
                  key={author.slug}
                  href={`/authors/${author.slug}`}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:scale-105"
                >
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1 mx-auto mb-4">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">{author.name}</h2>
                    <p className="text-purple-400 mb-3">{author.role}</p>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{author.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {author.expertise.slice(0, 3).map(skill => (
                      <span key={skill} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                    <span className="text-sm text-gray-400">
                      {author.postCount} Articles
                    </span>
                    <span className="text-sm text-purple-400">
                      View Profile →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-gray-800/30 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Team of Writers
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Are you an expert in social media, AI, or digital humor? We're always looking for talented writers to join our team and help create the best roasting content on the internet.
              </p>
              <Link
                href="/support"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <InternalLinkFooter />
      </main>
    </>
  );
}