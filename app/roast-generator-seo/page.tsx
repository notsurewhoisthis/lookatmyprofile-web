import { Metadata } from 'next';
import Link from 'next/link';
import { RoastGeneratorBreadcrumb } from '@/components/SEO/BreadcrumbSchema';
import { ReviewSchema } from '@/components/SEO/ReviewSchema';
import { HowToSchema } from '@/components/SEO/HowToSchema';
import { FAQSchema } from '@/components/SEO/FAQSchema';

export const metadata: Metadata = {
  title: 'Roast Generator - Free AI Instagram Profile Roaster',
  description: 'Generate hilarious AI-powered roasts of any Instagram profile instantly. Choose from Savage, Friendly, Gen-Z, or Shakespearean styles. Free, no login required!',
  keywords: 'roast generator, Instagram roaster, AI roast generator, profile roaster, funny Instagram tool',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-generator-seo'
  },
  openGraph: {
    title: 'AI Roast Generator - Get Instant Instagram Roasts',
    description: 'Generate personalized AI roasts for any Instagram profile in seconds!',
    url: 'https://www.lookatmyprofile.org/roast-generator-seo',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'AI Roast Generator'
    }]
  }
};

const roastFAQs = [
  {
    question: "How does the AI roast generator work?",
    answer: "Our AI analyzes public Instagram profiles, examining posts, captions, and patterns to generate personalized, humorous roasts in your chosen style."
  },
  {
    question: "Is the roast generator free to use?",
    answer: "Yes! Our roast generator is completely free with no signup, login, or credit card required. Generate unlimited roasts instantly."
  },
  {
    question: "What roast styles are available?",
    answer: "Choose from four styles: Savage (brutal humor), Friendly (playful teasing), Gen-Z (trendy slang), or Shakespearean (classical wit)."
  },
  {
    question: "Can I roast private Instagram profiles?",
    answer: "No, our roast generator only works with public Instagram profiles to respect user privacy."
  },
  {
    question: "How accurate are the AI roasts?",
    answer: "Our AI has generated over 2 million roasts with high accuracy, using advanced pattern recognition to create relevant, contextual humor."
  }
];

export default function RoastGeneratorSEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Schema Markup */}
      <RoastGeneratorBreadcrumb />
      <ReviewSchema />
      <HowToSchema />
      <FAQSchema faqs={roastFAQs} pageTitle="AI Roast Generator" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            AI Roast Generator
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Generate Instant, Hilarious Roasts for Any Instagram Profile
          </p>
          
          {/* Roast Generator UI */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-12">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter Instagram username (without @)"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* Style Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button className="p-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg hover:scale-105 transition-transform">
                <span className="text-2xl mb-2 block">🔥</span>
                <span className="font-semibold">Savage</span>
              </button>
              <button className="p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg hover:scale-105 transition-transform">
                <span className="text-2xl mb-2 block">😊</span>
                <span className="font-semibold">Friendly</span>
              </button>
              <button className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:scale-105 transition-transform">
                <span className="text-2xl mb-2 block">🎭</span>
                <span className="font-semibold">Shakespearean</span>
              </button>
              <button className="p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:scale-105 transition-transform">
                <span className="text-2xl mb-2 block">💯</span>
                <span className="font-semibold">Gen-Z</span>
              </button>
            </div>
            
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
              Generate Roast 🔥
            </button>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>2M+ Roasts Generated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>No Login Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Use Our AI Roast Generator
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enter Username</h3>
                <p className="text-gray-400">
                  Type any public Instagram username without the @ symbol
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Style</h3>
                <p className="text-gray-400">
                  Select from Savage, Friendly, Gen-Z, or Shakespearean roast styles
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Generate & Enjoy</h3>
                <p className="text-gray-400">
                  Click generate and get your personalized AI roast in 2-3 seconds!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roast Styles Detailed */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your Roast Style
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-red-500">🔥 Savage Mode</h3>
              <p className="text-gray-300 mb-4">
                Our most brutal roast style. No mercy, no survivors. These burns leave a mark and are perfect for those who can handle the heat.
              </p>
              <p className="text-sm text-gray-500 italic">
                "Your feed has more filters than a water treatment plant..."
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-blue-400">😊 Friendly Fire</h3>
              <p className="text-gray-300 mb-4">
                Playful teasing that everyone can laugh at. Perfect for roasting friends without hurting feelings.
              </p>
              <p className="text-sm text-gray-500 italic">
                "Your selfie game is so consistent, I could set my watch to it..."
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-pink-400">💯 Gen-Z Mode</h3>
              <p className="text-gray-300 mb-4">
                Trendy roasts using the latest slang. No cap, these hit different with that bussin' energy fr fr.
              </p>
              <p className="text-sm text-gray-500 italic">
                "The way you use hashtags is giving millennial energy..."
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">🎭 Shakespearean</h3>
              <p className="text-gray-300 mb-4">
                Eloquent insults worthy of the Bard himself. For when you want to roast with class and sophistication.
              </p>
              <p className="text-sm text-gray-500 italic">
                "Thy feed doth overflow with vanity most grievous..."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Our AI Roast Generator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Advanced AI</h3>
              <p className="text-gray-400">
                Powered by cutting-edge machine learning for contextually relevant roasts
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-400">
                Get your personalized roast in just 2-3 seconds
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-400">
                No login required, no data stored, completely anonymous
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Roasted?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join over 2 million users who've experienced our AI roast generator
          </p>
          <Link 
            href="/roast-generator"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
          >
            Try the Roast Generator Now →
          </Link>
        </div>
      </section>
    </div>
  );
}