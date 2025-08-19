import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';
import { FooterNavigation, InlineLinks, siteLinks } from '@/components/SEO/SiteNavigation';

export const metadata: Metadata = {
  title: 'Topic Hubs - Instagram Roasting Knowledge Center',
  description: 'Explore comprehensive guides on Instagram psychology, social media humor, roasting techniques, and internet culture. Your complete resource center.',
  keywords: 'Instagram topics, social media guides, roasting resources, humor hub, psychology guides, internet culture',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/topics'
  },
  openGraph: {
    title: 'Knowledge Hub - Master Instagram Roasting',
    description: 'Deep dive into Instagram psychology, humor theory, and roasting mastery.',
    url: 'https://www.lookatmyprofile.org/topics',
    type: 'website'
  }
};

const topicHubs = [
  {
    slug: '/topics/instagram-psychology',
    title: 'Instagram Psychology',
    description: 'Understanding the psychological drivers behind Instagram behavior, from validation seeking to digital identity construction.',
    icon: '🧠',
    color: 'from-purple-600 to-blue-600',
    topics: ['Validation Seeking', 'Digital Identity', 'FOMO', 'Social Comparison'],
    articleCount: 12
  },
  {
    slug: '/topics/social-media-humor',
    title: 'Social Media Humor',
    description: 'Master the art of internet comedy, from savage roasts to viral memes. Learn what makes content funny online.',
    icon: '😂',
    color: 'from-pink-600 to-red-600',
    topics: ['Roasting Techniques', 'Meme Culture', 'Gen Z Humor', 'Viral Formats'],
    articleCount: 12
  },
  {
    slug: '/topics/roasting-techniques',
    title: 'Roasting Techniques',
    description: 'Comprehensive guide to different roasting styles, from friendly banter to savage burns. Find your roasting voice.',
    icon: '🔥',
    color: 'from-orange-600 to-red-600',
    topics: ['Savage Style', 'Friendly Roasts', 'Shakespearean', 'Gen Z Slang'],
    articleCount: 8
  },
  {
    slug: '/topics/digital-culture',
    title: 'Digital Culture',
    description: 'Explore the evolution of internet culture, social media trends, and how digital communication shapes modern humor.',
    icon: '🌐',
    color: 'from-blue-600 to-purple-600',
    topics: ['Internet Trends', 'Viral Content', 'Platform Culture', 'Digital Communication'],
    articleCount: 10
  }
];

export default function TopicsPage() {
  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Instagram Roasting Topic Hubs",
    "description": "Knowledge center for Instagram roasting, psychology, and humor",
    "url": "https://www.lookatmyprofile.org/topics",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": topicHubs.length,
      "itemListElement": topicHubs.map((hub, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.lookatmyprofile.org${hub.slug}`,
        "name": hub.title
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />

      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Topics', url: 'https://www.lookatmyprofile.org/topics' }
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Knowledge <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Hub</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Deep dive into comprehensive guides covering Instagram psychology, social media humor, 
                and everything you need to master the art of roasting
              </p>
            </div>

            {/* Topic Hubs Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {topicHubs.map((hub, index) => (
                <Link
                  key={index}
                  href={hub.slug}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all hover:scale-105 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`text-5xl p-3 rounded-xl bg-gradient-to-br ${hub.color} bg-opacity-20`}>
                      {hub.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {hub.title}
                      </h2>
                      <p className="text-gray-400 mb-4">{hub.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hub.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex} 
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {hub.articleCount} articles
                    </span>
                    <span className="text-purple-400 group-hover:translate-x-2 transition-transform">
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Links Section */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Popular Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/roast-glossary" className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all">
                  <div className="text-2xl mb-2">📖</div>
                  <h3 className="text-white font-semibold mb-1">Roasting Dictionary</h3>
                  <p className="text-xs text-gray-400">Learn the lingo</p>
                </Link>
                <Link href="/roast-my-ex" className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all">
                  <div className="text-2xl mb-2">💔</div>
                  <h3 className="text-white font-semibold mb-1">Ex Roasting Guide</h3>
                  <p className="text-xs text-gray-400">Therapeutic humor</p>
                </Link>
                <Link href="/blog" className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all">
                  <div className="text-2xl mb-2">📝</div>
                  <h3 className="text-white font-semibold mb-1">Latest Articles</h3>
                  <p className="text-xs text-gray-400">Fresh content</p>
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400">40+</div>
                <div className="text-gray-400">Articles</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-pink-400">4</div>
                <div className="text-gray-400">Topic Hubs</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">100+</div>
                <div className="text-gray-400">Terms Defined</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">Daily</div>
                <div className="text-gray-400">Updates</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Become a Roasting Expert?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Start exploring our comprehensive guides and master the art of Instagram roasting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/topics/instagram-psychology"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  Start Learning
                </Link>
                <Link 
                  href="/roast-generator"
                  className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-all"
                >
                  Practice Roasting
                </Link>
              </div>
            </div>
          </div>
        </div>

        <InlineLinks 
          links={[
            ...siteLinks.roastStyles,
            ...siteLinks.tools.slice(0, 3),
            ...siteLinks.content.filter(l => !l.href.includes('/topics'))
          ].slice(0, 10)}
          title="Explore Our Tools & Resources"
        />
        
        <InternalLinkFooter />
        <FooterNavigation currentPath="/topics" />
      </main>
    </>
  );
}