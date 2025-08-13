import Link from "next/link";
import { FAQSchema, commonFAQs } from '@/components/SEO/FAQSchema';

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
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast Generator</Link>
            <Link href="/roast-styles" className="hover:text-purple-400 transition">Roast Styles</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Download App</Link>
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

      {/* Roast Styles Preview */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Roast Style</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Link href="/roast-styles/savage" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2 text-red-400">🔥 Savage Mode</h3>
            <p className="text-gray-400">Brutal burns that leave marks</p>
          </Link>
          <Link href="/roast-styles/friendly" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2 text-green-400">😊 Friendly Fire</h3>
            <p className="text-gray-400">Playful jokes for friends</p>
          </Link>
          <Link href="/roast-styles/shakespearean" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2 text-purple-400">🎭 Shakespearean</h3>
            <p className="text-gray-400">Eloquent burns in old English</p>
          </Link>
          <Link href="/roast-styles/gen-z" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-bold mb-2 text-pink-400">💯 Gen Z</h3>
            <p className="text-gray-400">No cap, straight bussin' roasts</p>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-gray-900/50">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">1️⃣</div>
            <h3 className="text-xl font-bold mb-2">Enter Username</h3>
            <p className="text-gray-400">Just type in any Instagram username</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">2️⃣</div>
            <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
            <p className="text-gray-400">Our AI analyzes posts, captions, and vibes</p>
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
        <Link href="/roast-generator" className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition inline-block">
          Start Roasting Now →
        </Link>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}