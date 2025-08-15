import Link from "next/link";
import { FAQSchema, commonFAQs } from '@/components/SEO/FAQSchema';
import { FooterLinks } from '@/components/SEO/InternalLinks';

export default function Home() {
  return (
    <>
      <FAQSchema faqs={commonFAQs.homepage} pageTitle="Home" />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/roast-generator" className="hover:text-purple-400 transition text-sm md:text-base">Roast</Link>
            <Link href="/instagram-bio-generator" className="hover:text-purple-400 transition text-sm md:text-base">Bio</Link>
            <Link href="/instagram-caption-generator" className="hover:text-purple-400 transition text-sm md:text-base">Captions</Link>
            <Link href="/my-insta-personality" className="hover:text-purple-400 transition text-sm md:text-base">Personality</Link>
            <Link href="/instagram-engagement-calculator" className="hover:text-purple-400 transition text-sm md:text-base">Calculator</Link>
            <Link href="/blog" className="hover:text-purple-400 transition text-sm md:text-base">Blog</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition text-sm md:text-base">Get App</Link>
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
            <Link href="/download" className="border border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition">
              Get the App
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
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <FooterLinks />
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Roast a Profile
                </Link>
                <p className="text-gray-400 text-sm mt-2">© 2025 Roast a Profile. All rights reserved.</p>
              </div>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</Link>
                <Link href="/support" className="text-gray-400 hover:text-white transition text-sm">Support</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}