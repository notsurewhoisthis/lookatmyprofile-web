import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';
import { SpeakableSchema } from '@/components/SEO/SpeakableSchema';

export const metadata: Metadata = {
  title: 'Social Media Humor Hub - Memes, Roasts & Internet Comedy Guide',
  description: 'Master the art of social media humor. Complete guide to memes, roasting, internet comedy trends, and what makes content funny online.',
  keywords: 'social media humor, internet memes, roasting guide, online comedy, viral humor, Gen Z humor, meme culture, internet jokes',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/topics/social-media-humor'
  },
  openGraph: {
    title: 'Social Media Humor - Complete Guide to Internet Comedy',
    description: 'Everything you need to know about memes, roasts, and making people laugh online.',
    url: 'https://www.lookatmyprofile.org/topics/social-media-humor',
    type: 'website'
  }
};

const humorClusters = [
  {
    category: "Roasting Mastery",
    description: "Learn the art and science of crafting the perfect roast",
    topics: [
      {
        title: "Ultimate Guide to Roast Battles",
        slug: "/blog/ultimate-guide-roast-battles",
        description: "Master the techniques used by professional roasters",
        readTime: "8 min"
      },
      {
        title: "Roasting Etiquette 101",
        slug: "/blog/roasting-etiquette-101",
        description: "The unwritten rules of roasting without crossing lines",
        readTime: "5 min"
      },
      {
        title: "Roast Styles Explained",
        slug: "/roast-styles/savage",
        description: "From savage burns to friendly banter - find your style",
        readTime: "6 min"
      }
    ]
  },
  {
    category: "Meme Culture",
    description: "Understanding how memes work and why they go viral",
    topics: [
      {
        title: "Gen Z Humor Explained",
        slug: "/blog/gen-z-humor-explained",
        description: "Decode the chaotic genius of Gen Z comedy",
        readTime: "5 min"
      },
      {
        title: "Roasting Dictionary",
        slug: "/roast-glossary",
        description: "Master the slang and terms used in modern roasting",
        readTime: "4 min"
      },
      {
        title: "AI Humor Evolution",
        slug: "/blog/ai-humor-evolution",
        description: "How AI is changing the comedy landscape",
        readTime: "7 min"
      }
    ]
  },
  {
    category: "Comedy Formats",
    description: "Different types of humor that work on social media",
    topics: [
      {
        title: "Shakespearean Roasts",
        slug: "/roast-styles/shakespearean",
        description: "Eloquent insults worthy of the Bard himself",
        readTime: "5 min"
      },
      {
        title: "Friendly Roast Guide",
        slug: "/roast-styles/friendly",
        description: "How to tease without hurting feelings",
        readTime: "4 min"
      },
      {
        title: "Gen-Z Style Roasting",
        slug: "/roast-styles/gen-z",
        description: "No cap, this slaps - modern roasting techniques",
        readTime: "5 min"
      }
    ]
  },
  {
    category: "Viral Humor Strategies",
    description: "What makes content funny and shareable online",
    topics: [
      {
        title: "Psychology of Instagram Roasting",
        slug: "/blog/psychology-of-instagram-roasting",
        description: "Why we find roasts funny - the science explained",
        readTime: "7 min"
      },
      {
        title: "Instagram Personality Types",
        slug: "/blog/instagram-personality-types",
        description: "Roast different personality types effectively",
        readTime: "6 min"
      },
      {
        title: "Roast My Ex Guide",
        slug: "/roast-my-ex",
        description: "Therapeutic humor for moving on",
        readTime: "5 min"
      }
    ]
  }
];

const humorStyles = [
  {
    name: "Savage",
    emoji: "🔥",
    description: "No holds barred, maximum burn",
    intensity: 5
  },
  {
    name: "Witty",
    emoji: "🧠",
    description: "Clever wordplay and smart humor",
    intensity: 3
  },
  {
    name: "Absurd",
    emoji: "🤪",
    description: "Random, chaotic, Gen Z energy",
    intensity: 4
  },
  {
    name: "Wholesome",
    emoji: "💝",
    description: "Funny but with love",
    intensity: 2
  },
  {
    name: "Sarcastic",
    emoji: "😏",
    description: "Dry wit and ironic observations",
    intensity: 3
  },
  {
    name: "Poetic",
    emoji: "📜",
    description: "Shakespearean eloquence meets savagery",
    intensity: 4
  }
];

const trendingFormats = [
  {
    format: "Ratio + L",
    description: "The ultimate combo for maximum impact",
    example: "L + ratio + no bitches + touch grass"
  },
  {
    format: "POV Memes",
    description: "Point of view format for relatable humor",
    example: "POV: You're trying to take a good selfie"
  },
  {
    format: "It's Giving...",
    description: "Comparison roasts that hit different",
    example: "Your feed is giving 2016 Facebook energy"
  },
  {
    format: "Tell Me Without Telling Me",
    description: "Subtle roasts through implication",
    example: "Tell me you peaked in high school without telling me"
  }
];

export default function SocialMediaHumorHub() {
  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.lookatmyprofile.org/topics/social-media-humor#hub",
    "name": "Social Media Humor Hub",
    "description": "Complete guide to social media humor, memes, and internet comedy",
    "url": "https://www.lookatmyprofile.org/topics/social-media-humor",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": humorClusters.reduce((acc, cluster) => acc + cluster.topics.length, 0),
      "itemListElement": humorClusters.flatMap((cluster, clusterIndex) =>
        cluster.topics.map((topic, topicIndex) => ({
          "@type": "ListItem",
          "position": clusterIndex * 3 + topicIndex + 1,
          "url": `https://www.lookatmyprofile.org${topic.slug}`,
          "name": topic.title
        }))
      )
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />
      
      <SpeakableSchema 
        url="https://www.lookatmyprofile.org/topics/social-media-humor"
        headlines={["Social Media Humor Hub - Master Internet Comedy"]}
        summary="Complete guide to memes, roasting, and what makes content funny online."
      />

      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Topics', url: 'https://www.lookatmyprofile.org/topics' },
          { name: 'Social Media Humor', url: 'https://www.lookatmyprofile.org/topics/social-media-humor' }
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Social Media <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Humor</span> Hub
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your ultimate resource for mastering memes, roasts, and the art of making 
                the internet laugh. From savage burns to wholesome humor.
              </p>
              
              {/* Humor Styles Grid */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
                {humorStyles.map((style, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">{style.emoji}</div>
                    <div className="text-xs text-gray-300">{style.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Clusters */}
            <div className="space-y-12 mb-16">
              {humorClusters.map((cluster, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{cluster.category}</h2>
                    <p className="text-gray-400">{cluster.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {cluster.topics.map((topic, topicIndex) => (
                      <Link
                        key={topicIndex}
                        href={topic.slug}
                        className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-all hover:scale-105"
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{topic.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-purple-400">{topic.readTime} read</span>
                          <span className="text-purple-400">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Trending Formats Section */}
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Trending Humor Formats
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {trendingFormats.map((format, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-pink-400 mb-2">{format.format}</h3>
                    <p className="text-gray-300 mb-3">{format.description}</p>
                    <div className="bg-gray-800/50 rounded p-3">
                      <p className="text-sm text-purple-300 italic">"{format.example}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Humor Theory Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                The Science of Being Funny Online
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-4 text-center">⏱️</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Timing is Everything</h3>
                  <p className="text-gray-400 text-sm">
                    The best roasts are immediate and relevant. Strike while the meme is hot.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-4 text-center">🎯</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Know Your Audience</h3>
                  <p className="text-gray-400 text-sm">
                    Gen Z humor hits different than millennial jokes. Match the vibe.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-4 text-center">🎭</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Punch Up, Not Down</h3>
                  <p className="text-gray-400 text-sm">
                    The best humor challenges power, not vulnerable people.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Tools */}
            <div className="bg-gray-800/30 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Practice Your Humor Skills
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                <Link href="/roast-generator" className="bg-purple-600/20 rounded-lg p-4 text-center hover:bg-purple-600/30 transition-all">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm text-white font-semibold">AI Roast Generator</div>
                </Link>
                <Link href="/roast-examples" className="bg-pink-600/20 rounded-lg p-4 text-center hover:bg-pink-600/30 transition-all">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-sm text-white font-semibold">Example Library</div>
                </Link>
                <Link href="/roast-glossary" className="bg-blue-600/20 rounded-lg p-4 text-center hover:bg-blue-600/30 transition-all">
                  <div className="text-2xl mb-2">📖</div>
                  <div className="text-sm text-white font-semibold">Slang Dictionary</div>
                </Link>
                <Link href="/download" className="bg-green-600/20 rounded-lg p-4 text-center hover:bg-green-600/30 transition-all">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm text-white font-semibold">Mobile App</div>
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400">500K+</div>
                <div className="text-gray-400">Roasts Generated</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-pink-400">50+</div>
                <div className="text-gray-400">Humor Styles</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">4.9★</div>
                <div className="text-gray-400">App Rating</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-gray-400">Instant Roasts</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Become a Roast Master?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Start generating hilarious roasts with our AI-powered tools
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/roast-generator"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  Start Roasting Now
                </Link>
                <Link 
                  href="/roast-glossary"
                  className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-all"
                >
                  Learn the Lingo
                </Link>
              </div>
            </div>
          </div>
        </div>

        <InternalLinkFooter />
      </main>
    </>
  );
}