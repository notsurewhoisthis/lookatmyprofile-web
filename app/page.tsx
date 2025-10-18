import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, commonFAQs } from '@/components/SEO/FAQSchema';
import { FooterNavigation } from '@/components/SEO/SiteNavigation';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { QASchema, commonQA } from '@/components/SEO/QASchema';
import { Testimonials } from '@/components/Testimonials';
import { YouTubeEmbed, VideoEmbeds } from '@/components/SEO/VideoSchema';

export const metadata: Metadata = {
  title: 'Roast a Profile - AI Instagram Profile Roaster & Analyzer',
  description: 'Get hilarious AI-generated roasts of Instagram profiles. Analyze posts, generate funny comments, and discover what your Instagram really says about you.',
  keywords: 'Instagram roast, profile roaster, AI Instagram analyzer, funny social media tool, Instagram comment generator',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/'
  },
  openGraph: {
    title: 'AI Instagram Profile Roaster - Get Roasted!',
    description: 'Turn your Instagram into comedy gold with AI-powered roasts and profile analysis.',
    url: 'https://www.lookatmyprofile.org/',
    type: 'website',
  }
};

export default function Home() {
  // Structured data for celebrity roasts section
  const celebrityRoastsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Celebrity Instagram Roasts',
    description: 'Savage roasts of the top 100 Instagram celebrities',
    numberOfItems: 100,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        url: 'https://www.lookatmyprofile.org/celebrity-roasts/cristiano-instagram-roast-savage',
        name: 'Cristiano Ronaldo Instagram Roast'
      },
      {
        '@type': 'ListItem',
        position: 2,
        url: 'https://www.lookatmyprofile.org/celebrity-roasts/selenagomez-instagram-roast-funny',
        name: 'Selena Gomez Instagram Roast'
      },
      {
        '@type': 'ListItem',
        position: 3,
        url: 'https://www.lookatmyprofile.org/celebrity-roasts/therock-instagram-roast-gen-z',
        name: 'The Rock Instagram Roast'
      }
    ]
  };

  // Structured data for tools collection
  const toolsCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Instagram Tools Collection',
    description: '500+ Instagram tools including username generators, bio templates, captions, and hashtags',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '15420'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(celebrityRoastsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsCollectionSchema) }}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' }
        ]}
      />
      <FAQSchema faqs={commonFAQs.homepage} pageTitle="Home" />
      <QASchema qaItems={commonQA.homepage} pageName="Homepage" />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/roast-generator" className="hover:text-purple-400 transition text-sm md:text-base">Roast</Link>
            <Link href="/celebrity-roasts" className="hover:text-purple-400 transition text-sm md:text-base">Celebrities</Link>
            <Link href="/instagram-bio-generator" className="hover:text-purple-400 transition text-sm md:text-base">Bio</Link>
            <Link href="/instagram-caption-generator" className="hover:text-purple-400 transition text-sm md:text-base">Captions</Link>
            <Link href="/my-insta-personality" className="hover:text-purple-400 transition text-sm md:text-base">Personality</Link>
            <Link href="/instagram-engagement-calculator" className="hover:text-purple-400 transition text-sm md:text-base">Calculator</Link>
            <Link href="/blog" className="hover:text-purple-400 transition text-sm md:text-base">Blog</Link>
            <Link href="/pricing" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition text-sm md:text-base">Get a Full Roast</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            The Ultimate AI Instagram Roast Generator
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Turn your Instagram into comedy gold. Our AI analyzes your profile 
            and delivers hilarious roasts that'll make you laugh (and cry).
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Link href="/roast-generator" className="cta-primary bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
              Roast My Profile Now →
            </Link>
            <Link href="/pricing" className="border border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition">
              Get a Full Roast
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            100% Free • No Login Required • 2M+ Roasts Generated
          </p>
        </div>

        {/* Social Proof */}
        <div className="social-proof-banner mt-12 flex justify-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">2M+</div>
            <div className="text-sm">Roasts Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.8/5</div>
            <div className="text-sm">App Store Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-sm">5-Star Reviews</div>
          </div>
        </div>
      </section>

      {/* 🔥 NEW Featured Instagram Tools Section */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl my-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">🚀 New Instagram Tools</h2>
          <p className="text-center text-gray-400 mb-8">Trending tools used by millions</p>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/instagram-bio-generator" className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-6 rounded-xl hover:scale-105 transition-all group">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-lg font-bold mb-2">Bio Generator</h3>
              <p className="text-sm text-gray-300">Create perfect bios instantly</p>
              <p className="text-xs text-purple-400 mt-2 group-hover:text-purple-300">Try now →</p>
            </Link>
            <Link href="/my-insta-personality" className="bg-gradient-to-br from-yellow-800/50 to-orange-800/50 p-6 rounded-xl hover:scale-105 transition-all group relative">
              <div className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-xs rounded-full animate-pulse">VIRAL</div>
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-lg font-bold mb-2">My Insta Personality</h3>
              <p className="text-sm text-gray-300">AI personality test & roast</p>
              <p className="text-xs text-orange-400 mt-2 group-hover:text-orange-300">Take test →</p>
            </Link>
            <Link href="/instagram-engagement-calculator" className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 p-6 rounded-xl hover:scale-105 transition-all group">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold mb-2">Engagement Calculator</h3>
              <p className="text-sm text-gray-300">Check your influence level</p>
              <p className="text-xs text-blue-400 mt-2 group-hover:text-blue-300">Calculate →</p>
            </Link>
            <Link href="/instagram-caption-generator" className="bg-gradient-to-br from-pink-800/50 to-purple-800/50 p-6 rounded-xl hover:scale-105 transition-all group">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold mb-2">Caption Generator</h3>
              <p className="text-sm text-gray-300">Captions that get likes</p>
              <p className="text-xs text-pink-400 mt-2 group-hover:text-pink-300">Generate →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Links */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/ai-roast-generator" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm text-purple-300">AI Roast Generator</Link>
            <Link href="/instagram-profile-analyzer" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm text-purple-300">Profile Analyzer</Link>
            <Link href="/free-instagram-roast-generator-no-signup" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm text-purple-300">Free Generator</Link>
            <Link href="/what-is-instagram-roasting" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm text-purple-300">What is Roasting?</Link>
            <Link href="/ultimate-guide-instagram-roasting" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm text-purple-300">Ultimate Guide</Link>
            <Link href="/how-to-roast-someone-on-instagram" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm text-purple-300">How to Roast</Link>
            <Link href="/roast-examples" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm text-purple-300">Examples</Link>
            <Link href="/blog" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm text-purple-300">Blog</Link>
          </div>
        </div>
      </section>

      {/* Roast Styles Preview */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Roast Style</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Link href="/roast-styles/savage" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition group">
            <h3 className="text-xl font-bold mb-2 text-red-400 group-hover:scale-105 transition">🔥 Savage Mode</h3>
            <p className="text-gray-400">Brutal burns that leave marks</p>
            <p className="text-xs text-purple-400 mt-2">Try now →</p>
          </Link>
          <Link href="/roast-styles/friendly" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition group">
            <h3 className="text-xl font-bold mb-2 text-green-400 group-hover:scale-105 transition">😊 Friendly Fire</h3>
            <p className="text-gray-400">Playful jokes for friends</p>
            <p className="text-xs text-purple-400 mt-2">Try now →</p>
          </Link>
          <Link href="/roast-styles/shakespearean" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition group">
            <h3 className="text-xl font-bold mb-2 text-purple-400 group-hover:scale-105 transition">🎭 Shakespearean</h3>
            <p className="text-gray-400">Eloquent burns in old English</p>
            <p className="text-xs text-purple-400 mt-2">Try now →</p>
          </Link>
          <Link href="/roast-styles/gen-z" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition group">
            <h3 className="text-xl font-bold mb-2 text-pink-400 group-hover:scale-105 transition">💯 Gen Z</h3>
            <p className="text-gray-400">No cap, straight bussin' roasts</p>
            <p className="text-xs text-purple-400 mt-2">Try now →</p>
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link href="/roast-styles" className="text-purple-400 hover:text-purple-300 transition">
            View all roast styles →
          </Link>
        </div>
      </section>

      {/* 🌟 NEW Celebrity Roasts Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl my-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">🌟 Celebrity Instagram Roasts</h2>
          <p className="text-center text-gray-400 mb-8">Savage roasts of the top 100 Instagram celebrities</p>
          
          {/* Featured Celebrities */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link href="/celebrity-roasts/cristiano-instagram-roast-savage" className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition group">
              <h3 className="font-bold text-lg mb-1">Cristiano Ronaldo</h3>
              <p className="text-sm text-gray-400 mb-2">@cristiano • 662M followers</p>
              <p className="text-xs text-red-400 group-hover:text-red-300">Get roasted →</p>
            </Link>
            <Link href="/celebrity-roasts/selenagomez-instagram-roast-funny" className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition group">
              <h3 className="font-bold text-lg mb-1">Selena Gomez</h3>
              <p className="text-sm text-gray-400 mb-2">@selenagomez • 417M followers</p>
              <p className="text-xs text-pink-400 group-hover:text-pink-300">Get roasted →</p>
            </Link>
            <Link href="/celebrity-roasts/therock-instagram-roast-gen-z" className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition group">
              <h3 className="font-bold text-lg mb-1">Dwayne Johnson</h3>
              <p className="text-sm text-gray-400 mb-2">@therock • 392M followers</p>
              <p className="text-xs text-purple-400 group-hover:text-purple-300">Get roasted →</p>
            </Link>
            <Link href="/celebrity-roasts/mrbeast-instagram-roast-savage" className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition group relative">
              <span className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-xs rounded-full">HOT</span>
              <h3 className="font-bold text-lg mb-1">MrBeast</h3>
              <p className="text-sm text-gray-400 mb-2">@mrbeast • 60M followers</p>
              <p className="text-xs text-yellow-400 group-hover:text-yellow-300">Get roasted →</p>
            </Link>
          </div>
          
          {/* Categories */}
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/celebrity-roasts#athletes" className="bg-gradient-to-br from-green-800/30 to-blue-800/30 p-4 rounded-lg hover:from-green-800/50 hover:to-blue-800/50 transition">
              <h4 className="font-bold mb-1">⚽ Athletes</h4>
              <p className="text-xs text-gray-400">Ronaldo, Messi, LeBron & more</p>
            </Link>
            <Link href="/celebrity-roasts#celebrities" className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-4 rounded-lg hover:from-purple-800/50 hover:to-pink-800/50 transition">
              <h4 className="font-bold mb-1">⭐ Celebrities</h4>
              <p className="text-xs text-gray-400">Taylor Swift, Drake, Rihanna</p>
            </Link>
            <Link href="/celebrity-roasts#influencers" className="bg-gradient-to-br from-pink-800/30 to-red-800/30 p-4 rounded-lg hover:from-pink-800/50 hover:to-red-800/50 transition">
              <h4 className="font-bold mb-1">📱 Influencers</h4>
              <p className="text-xs text-gray-400">MrBeast, Charli, Khaby Lame</p>
            </Link>
            <Link href="/celebrity-roasts#models" className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 p-4 rounded-lg hover:from-blue-800/50 hover:to-purple-800/50 transition">
              <h4 className="font-bold mb-1">📸 Models</h4>
              <p className="text-xs text-gray-400">Kendall, Gigi, Bella Hadid</p>
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/celebrity-roasts" className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition inline-block">
              View All 100 Celebrities →
            </Link>
          </div>
        </div>
      </section>

      {/* 🛠️ NEW Instagram Tools Collection Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">🛠️ 500+ Instagram Tools</h2>
          <p className="text-center text-gray-400 mb-12">Everything you need to level up your Instagram game</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Username Generators */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">✨</span>
                <h3 className="text-xl font-bold">Username Generators</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">120+ unique username ideas by style</p>
              <div className="space-y-2">
                <Link href="/tools/username-generator/instagram-username-ideas-aesthetic-girls-teen" className="block text-sm text-purple-400 hover:text-purple-300">
                  → Aesthetic usernames for girls
                </Link>
                <Link href="/tools/username-generator/instagram-username-ideas-funny-boys-gen-z" className="block text-sm text-purple-400 hover:text-purple-300">
                  → Funny Gen-Z usernames
                </Link>
                <Link href="/tools/username-generator/instagram-username-ideas-creative-gender-neutral-millennial" className="block text-sm text-purple-400 hover:text-purple-300">
                  → Creative gender-neutral ideas
                </Link>
              </div>
              <Link href="/tools/username-generator" className="inline-block mt-4 text-purple-400 font-semibold hover:text-purple-300">
                View all 120 generators →
              </Link>
            </div>
            
            {/* Bio Templates */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📝</span>
                <h3 className="text-xl font-bold">Bio Templates</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">250+ bio ideas for every niche</p>
              <div className="space-y-2">
                <Link href="/tools/bio-generator/instagram-bio-ideas-fitness-sassy-short" className="block text-sm text-pink-400 hover:text-pink-300">
                  → Fitness bio templates
                </Link>
                <Link href="/tools/bio-generator/instagram-bio-ideas-travel-inspirational-aesthetic" className="block text-sm text-pink-400 hover:text-pink-300">
                  → Travel bio ideas
                </Link>
                <Link href="/tools/bio-generator/instagram-bio-ideas-business-professional-clever" className="block text-sm text-pink-400 hover:text-pink-300">
                  → Business bio templates
                </Link>
              </div>
              <Link href="/tools/bio-generator" className="inline-block mt-4 text-pink-400 font-semibold hover:text-pink-300">
                View all 250 templates →
              </Link>
            </div>
            
            {/* Caption & Hashtag Tools */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">#️⃣</span>
                <h3 className="text-xl font-bold">Captions & Hashtags</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">80+ caption ideas & hashtag sets</p>
              <div className="space-y-2">
                <Link href="/tools/caption-generator/instagram-captions-selfie-sassy" className="block text-sm text-blue-400 hover:text-blue-300">
                  → Selfie captions
                </Link>
                <Link href="/tools/hashtag-generator/instagram-hashtags-fashion-2025" className="block text-sm text-blue-400 hover:text-blue-300">
                  → Fashion hashtags 2025
                </Link>
                <Link href="/tools/hashtag-generator/instagram-hashtags-fitness-trending" className="block text-sm text-blue-400 hover:text-blue-300">
                  → Trending fitness tags
                </Link>
              </div>
              <Link href="/tools" className="inline-block mt-4 text-blue-400 font-semibold hover:text-blue-300">
                Browse all tools →
              </Link>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-5 gap-4 mt-8">
            <Link href="/tools/username-generator" className="bg-purple-600/20 p-4 rounded-lg text-center hover:bg-purple-600/30 transition">
              <div className="text-2xl font-bold">120</div>
              <div className="text-xs">Username Ideas</div>
            </Link>
            <Link href="/tools/bio-generator" className="bg-pink-600/20 p-4 rounded-lg text-center hover:bg-pink-600/30 transition">
              <div className="text-2xl font-bold">250</div>
              <div className="text-xs">Bio Templates</div>
            </Link>
            <Link href="/tools/caption-generator" className="bg-blue-600/20 p-4 rounded-lg text-center hover:bg-blue-600/30 transition">
              <div className="text-2xl font-bold">50</div>
              <div className="text-xs">Caption Ideas</div>
            </Link>
            <Link href="/tools/hashtag-generator" className="bg-green-600/20 p-4 rounded-lg text-center hover:bg-green-600/30 transition">
              <div className="text-2xl font-bold">30</div>
              <div className="text-xs">Hashtag Sets</div>
            </Link>
            <Link href="/tools/roast-generator" className="bg-red-600/20 p-4 rounded-lg text-center hover:bg-red-600/30 transition">
              <div className="text-2xl font-bold">40</div>
              <div className="text-xs">Roast Types</div>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW Content Hub Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">🔥 New Content & Features</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link href="/roast-my-ex" className="bg-gradient-to-br from-red-900/50 to-pink-900/50 p-6 rounded-lg hover:from-red-900/70 hover:to-pink-900/70 transition relative">
            <span className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-xs rounded-full animate-pulse">NEW</span>
            <h3 className="text-xl font-bold mb-2">💔 Roast My Ex</h3>
            <p className="text-gray-300 text-sm mb-3">Therapeutic roasts for your ex's profile</p>
            <p className="text-red-400 text-sm">Get revenge roasts →</p>
          </Link>
          <Link href="/roast-glossary" className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-lg hover:from-purple-900/70 hover:to-blue-900/70 transition">
            <h3 className="text-xl font-bold mb-2">📖 Roasting Dictionary</h3>
            <p className="text-gray-300 text-sm mb-3">Learn what "mid", "clapped" & more mean</p>
            <p className="text-purple-400 text-sm">Master the slang →</p>
          </Link>
          <Link href="/topics" className="bg-gradient-to-br from-green-900/50 to-teal-900/50 p-6 rounded-lg hover:from-green-900/70 hover:to-teal-900/70 transition">
            <h3 className="text-xl font-bold mb-2">🧠 Knowledge Hub</h3>
            <p className="text-gray-300 text-sm mb-3">Psychology & humor deep dives</p>
            <p className="text-green-400 text-sm">Explore topics →</p>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          <Link href="/topics/instagram-psychology" className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 rounded-lg hover:from-indigo-900/70 hover:to-purple-900/70 transition">
            <h3 className="text-xl font-bold mb-2">🎭 Instagram Psychology</h3>
            <p className="text-gray-300 text-sm mb-3">Why we post, like, and roast explained</p>
            <p className="text-indigo-400 text-sm">Learn the science →</p>
          </Link>
          <Link href="/authors" className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-6 rounded-lg hover:from-gray-800/70 hover:to-gray-700/70 transition">
            <h3 className="text-xl font-bold mb-2">✍️ Meet Our Authors</h3>
            <p className="text-gray-300 text-sm mb-3">Expert roasters and content creators</p>
            <p className="text-gray-400 text-sm">View profiles →</p>
          </Link>
        </div>
      </section>

      {/* Popular Tools Section - Updated with NEW tools */}
      <section className="container mx-auto px-4 py-20 bg-gray-900/50">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Instagram Tools</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link href="/my-insta-personality" className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-6 rounded-lg hover:from-yellow-900/70 hover:to-orange-900/70 transition relative">
            <span className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-xs rounded-full">TRENDING</span>
            <h3 className="text-xl font-bold mb-2">🎭 My Insta Personality</h3>
            <p className="text-gray-300 text-sm mb-3">Viral AI personality test that roasts you</p>
            <p className="text-yellow-400 text-sm">Take the test →</p>
          </Link>
          <Link href="/instagram-bio-generator" className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg hover:from-purple-900/70 hover:to-pink-900/70 transition">
            <h3 className="text-xl font-bold mb-2">✨ Bio Generator</h3>
            <p className="text-gray-300 text-sm mb-3">Perfect Instagram bios in seconds</p>
            <p className="text-purple-400 text-sm">Create bio →</p>
          </Link>
          <Link href="/instagram-engagement-calculator" className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-lg hover:from-blue-900/70 hover:to-purple-900/70 transition">
            <h3 className="text-xl font-bold mb-2">📊 Engagement Calculator</h3>
            <p className="text-gray-300 text-sm mb-3">Calculate your influence & engagement rate</p>
            <p className="text-blue-400 text-sm">Calculate now →</p>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          <Link href="/instagram-caption-generator" className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 p-6 rounded-lg hover:from-pink-900/70 hover:to-purple-900/70 transition">
            <h3 className="text-xl font-bold mb-2">📝 Caption Generator</h3>
            <p className="text-gray-300 text-sm mb-3">Engaging captions that get likes</p>
            <p className="text-pink-400 text-sm">Generate captions →</p>
          </Link>
          <Link href="/gen-z-roast-generator-online" className="bg-gradient-to-br from-green-900/50 to-blue-900/50 p-6 rounded-lg hover:from-green-900/70 hover:to-blue-900/70 transition">
            <h3 className="text-xl font-bold mb-2">💅 Gen Z Roast Generator</h3>
            <p className="text-gray-300 text-sm mb-3">Roasts that hit different fr fr no cap</p>
            <p className="text-green-400 text-sm">Generate Gen Z roast →</p>
          </Link>
          <Link href="/savage-instagram-roasts-examples" className="bg-gradient-to-br from-red-900/50 to-orange-900/50 p-6 rounded-lg hover:from-red-900/70 hover:to-orange-900/70 transition">
            <h3 className="text-xl font-bold mb-2">🔥 Savage Roast Examples</h3>
            <p className="text-gray-300 text-sm mb-3">100+ brutal roasts that destroyed people</p>
            <p className="text-orange-400 text-sm">See examples →</p>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">1️⃣</div>
            <h3 className="text-xl font-bold mb-2">Enter Username</h3>
            <p className="text-gray-400">Type any public Instagram username</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">2️⃣</div>
            <h3 className="text-xl font-bold mb-2">Choose Style</h3>
            <p className="text-gray-400">Pick from savage, friendly, or Gen Z</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">3️⃣</div>
            <h3 className="text-xl font-bold mb-2">Get Roasted</h3>
            <p className="text-gray-400">Receive your personalized roast instantly</p>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl my-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">🎥 See It In Action</h2>
          <p className="text-center text-gray-400 mb-8">Watch how our AI roasts Instagram profiles in real-time</p>
          <YouTubeEmbed
            videoId={VideoEmbeds.howItWorks.videoId}
            title={VideoEmbeds.howItWorks.title}
            description={VideoEmbeds.howItWorks.description}
            uploadDate={VideoEmbeds.howItWorks.uploadDate}
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">⭐ What Users Are Saying</h2>
        <p className="text-center text-gray-400 mb-12">Join 15,000+ happy users who got roasted</p>
        <div className="max-w-6xl mx-auto">
          <Testimonials limit={6} showSchema={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Roasted?</h2>
        <p className="text-xl text-gray-300 mb-8">Join millions getting their daily dose of humor</p>
        <div className="flex gap-4 justify-center mb-8">
          <Link href="/roast-generator" className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition inline-block">
            Start Roasting Now →
          </Link>
          <Link href="/free-instagram-roast-generator-no-signup" className="border border-purple-400 px-12 py-5 rounded-full text-xl font-semibold hover:bg-purple-400/10 transition inline-block">
            Try Free Version
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          Or explore: 
          <Link href="/vs-cleve-ai" className="text-purple-400 hover:text-purple-300 mx-2">vs Cleve AI</Link> • 
          <Link href="/vs-olly-social" className="text-purple-400 hover:text-purple-300 mx-2">vs Olly Social</Link> • 
          <Link href="/what-is-instagram-roasting" className="text-purple-400 hover:text-purple-300 mx-2">Learn More</Link>
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Roasting Tools</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/ai-roast-generator" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">AI Roast Generator</h3>
              <p className="text-gray-400 text-sm">Advanced AI-powered roasting with multiple styles</p>
            </Link>
            <Link href="/instagram-profile-analyzer" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Profile Analyzer</h3>
              <p className="text-gray-400 text-sm">Deep dive into any Instagram profile</p>
            </Link>
            <Link href="/free-instagram-roast-generator-no-signup" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Free Generator</h3>
              <p className="text-gray-400 text-sm">No signup, no email, just instant roasts</p>
            </Link>
            <Link href="/ultimate-guide-instagram-roasting" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Ultimate Guide</h3>
              <p className="text-gray-400 text-sm">Everything about Instagram roasting</p>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <Link href="/gen-z-roast-generator-online" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2 text-pink-400">Gen Z Generator</h3>
              <p className="text-gray-400 text-sm">Roasts that hit different fr fr</p>
            </Link>
            <Link href="/savage-instagram-roasts-examples" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2 text-pink-400">Savage Examples</h3>
              <p className="text-gray-400 text-sm">100+ brutal roasts that destroyed</p>
            </Link>
            <Link href="/funny-things-to-comment-on-instagram" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2 text-pink-400">Funny Comments</h3>
              <p className="text-gray-400 text-sm">500+ hilarious comment ideas</p>
            </Link>
            <Link href="/how-to-roast-someone-on-instagram" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2 text-pink-400">How to Roast</h3>
              <p className="text-gray-400 text-sm">Step-by-step roasting tutorial</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Comprehensive Links */}
      <FooterNavigation currentPath="/" />
    </div>
    </>
  );
}
