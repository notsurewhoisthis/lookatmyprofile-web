import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAuthorBySlug, getAllAuthors } from '@/lib/authors';
import { getAllBlogPosts } from '@/lib/blogPosts';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  
  if (!author) {
    return {
      title: 'Author Not Found',
      description: 'The author you are looking for could not be found.'
    };
  }

  return {
    title: `${author.name} - ${author.role} at Roast a Profile`,
    description: author.bio,
    authors: [{ name: author.name }],
    alternates: {
      canonical: `https://www.lookatmyprofile.org/authors/${author.slug}`
    },
    openGraph: {
      title: `${author.name} - ${author.role}`,
      description: author.bio,
      type: 'profile',
      images: [author.avatar],
      url: `https://www.lookatmyprofile.org/authors/${author.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${author.name} - ${author.role}`,
      description: author.bio,
      images: [author.avatar],
    }
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  
  if (!author) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const authorPosts = allPosts.filter(post => 
    post.author?.name?.toLowerCase() === author.name.toLowerCase() ||
    post.author?.name === 'Roast Master' && author.slug === 'roast-master'
  );

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://www.lookatmyprofile.org/authors/${author.slug}#author`,
    "name": author.name,
    "url": `https://www.lookatmyprofile.org/authors/${author.slug}`,
    "image": author.avatar,
    "description": author.bio,
    "jobTitle": author.role,
    "worksFor": {
      "@type": "Organization",
      "name": "Roast a Profile",
      "url": "https://www.lookatmyprofile.org"
    },
    "knowsAbout": author.expertise,
    "sameAs": [
      author.social.twitter ? `https://twitter.com/${author.social.twitter.replace('@', '')}` : null,
      author.social.linkedin ? `https://linkedin.com/in/${author.social.linkedin}` : null,
      author.social.instagram ? `https://instagram.com/${author.social.instagram.replace('@', '')}` : null,
      author.social.website
    ].filter(Boolean),
    "alumniOf": author.credentials.filter(c => c.includes('B.A.') || c.includes('M.A.') || c.includes('Ph.D.')).map(c => ({
      "@type": "EducationalOrganization",
      "name": c
    })),
    "award": author.credentials,
    "memberOf": {
      "@type": "Organization",
      "name": "Roast a Profile Team"
    }
  };

  const authorFAQs = [
    {
      question: `Who is ${author.name}?`,
      answer: `${author.name} is the ${author.role} at Roast a Profile. ${author.bio}`
    },
    {
      question: `What is ${author.name}'s expertise?`,
      answer: `${author.name} specializes in ${author.expertise.join(', ')}. With credentials including ${author.credentials.slice(0, 2).join(' and ')}.`
    },
    {
      question: `How many articles has ${author.name} written?`,
      answer: `${author.name} has published ${authorPosts.length} articles on Roast a Profile, covering topics like Instagram roasting, social media trends, and AI-powered profile analysis.`
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Authors', url: 'https://www.lookatmyprofile.org/authors' },
          { name: author.name, url: `/authors/${author.slug}` }
        ]}
      />

      <FAQSchema faqs={authorFAQs} />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {author.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-white mb-2">{author.name}</h1>
                  <p className="text-xl text-purple-400 mb-4">{author.role}</p>
                  <p className="text-gray-300 mb-6">{author.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {author.expertise.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center md:justify-start">
                    {author.social.twitter && (
                      <a href={`https://twitter.com/${author.social.twitter.replace('@', '')}`} 
                         className="text-blue-400 hover:text-blue-300" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        Twitter
                      </a>
                    )}
                    {author.social.linkedin && (
                      <a href={`https://linkedin.com/in/${author.social.linkedin}`} 
                         className="text-blue-400 hover:text-blue-300" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    )}
                    {author.social.instagram && (
                      <a href={`https://instagram.com/${author.social.instagram.replace('@', '')}`} 
                         className="text-pink-400 hover:text-pink-300" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        Instagram
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">Credentials & Experience</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {author.credentials.map((credential, index) => (
                  <div key={index} className="bg-gray-800/30 p-4 rounded-lg">
                    <span className="text-purple-400">✓</span>
                    <span className="text-gray-300 ml-2">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Articles by {author.name} ({authorPosts.length})
              </h2>
              
              <div className="grid gap-6">
                {authorPosts.slice(0, 10).map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/blog/${post.slug}`}
                    className="bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.date || post.publishedAt || '').toLocaleDateString()}
                      </span>
                      <span className="text-sm text-purple-400">
                        {post.readTime || '5 min read'}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {authorPosts.length > 10 && (
                <div className="mt-8 text-center">
                  <Link 
                    href={`/blog?author=${author.slug}`}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    View All {authorPosts.length} Articles
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <InternalLinkFooter />
      </main>
    </>
  );
}