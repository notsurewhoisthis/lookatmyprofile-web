import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Gen Z Mode - No Cap Instagram Roasts | Roast a Profile',
  description: 'Get roasted in Gen Z slang that hits different. Our AI speaks fluent TikTok and delivers burns that are straight bussin fr fr.',
  keywords: 'gen z instagram roast, no cap roaster, bussin profile burns, tiktok slang roasts, fr fr roasting',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-styles/gen-z'
  },
  openGraph: {
    title: 'Gen Z Mode - Instagram Roasts That Hit Different',
    description: 'No cap, these roasts are bussin. Get dragged in the language of TikTok and Twitter.',
    url: 'https://www.lookatmyprofile.org/roast-styles/gen-z',
  }
};

export default function GenZRoastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-pink-400 transition">Roast Generator</Link>
            <Link href="/roast-styles" className="hover:text-pink-400 transition">All Styles</Link>
            <Link href="/blog" className="hover:text-pink-400 transition">Blog</Link>
            <Link href="/download" className="bg-pink-600 px-4 py-2 rounded-full hover:bg-pink-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">💯</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Gen Z Mode: Roasts That Are Bussin' Fr Fr
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            No cap, your Instagram is giving cringe energy. Our AI speaks fluent TikTok 
            and will drag your profile with the most unhinged, chronically online roasts. It's giving main character syndrome tbh.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/roast-generator?style=gen-z" className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition">
              Let's Get This Bread 💅
            </Link>
            <Link href="/roast-styles" className="border border-pink-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-400/10 transition">
              That's Mid, Show Others
            </Link>
          </div>
        </div>
      </section>

      {/* Example Roasts */}
      <section className="container mx-auto px-4 py-20 bg-black/40">
        <h2 className="text-4xl font-bold text-center mb-12">Roasts That Hit Different</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-6 rounded-lg border border-pink-600/30">
            <h3 className="text-xl font-bold mb-3 text-pink-400">The Try-Hard Aesthetic</h3>
            <p className="text-gray-300 italic">
              "Bestie, the beige aesthetic is giving millennial energy. Your whole feed 
              screams 'I discovered Pinterest in 2019' - it's not giving what you think it's giving 💀"
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-6 rounded-lg border border-pink-600/30">
            <h3 className="text-xl font-bold mb-3 text-pink-400">The Crypto Bro</h3>
            <p className="text-gray-300 italic">
              "Sir, this is a Wendy's. Your NFT profile pic is cheugy af and your 
              'entrepreneur' bio is giving unemployed. Touch grass immediately 🌱"
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-6 rounded-lg border border-pink-600/30">
            <h3 className="text-xl font-bold mb-3 text-pink-400">The Fake Deep Posts</h3>
            <p className="text-gray-300 italic">
              "Not you posting Rupi Kaur quotes like it's 2016 😭 Your 'deep thoughts' 
              have the depth of a kiddie pool. This is why we can't have nice things."
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Gen Z Mode Slaps</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">✨ Chronically Online Energy</h3>
            <p className="text-gray-300">
              Our AI has consumed every TikTok trend, Twitter discourse, and cursed meme. 
              It understands internet culture on a molecular level. No cap.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">🗣️ Fluent in Brain Rot</h3>
            <p className="text-gray-300">
              From "it's giving" to "slay the house down boots," we speak the language 
              of the extremely online. Your roast will be unhinged in the best way.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">📱 TikTok Approved</h3>
            <p className="text-gray-300">
              These roasts are made for screen recording and going viral. Perfect for 
              your FYP, story times, and getting those sweet, sweet internet points.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">🎭 Unfiltered Chaos</h3>
            <p className="text-gray-300">
              Why be normal when you can be absolutely feral? Our Gen Z mode embraces 
              the chaos and delivers roasts that are delightfully unhinged.
            </p>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-pink-900/10 to-purple-900/10">
        <h2 className="text-4xl font-bold text-center mb-12">The Girls Are Gagging</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <blockquote className="bg-black/30 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "PLSSSS I'M DECEASED 💀 The AI really said 'you're built different... 
              built wrong' and I've never recovered. 10/10 would get dragged again"
            </p>
            <cite className="text-pink-400">- @y2k_baddie</cite>
          </blockquote>
          <blockquote className="bg-black/30 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "bestie really woke up and chose violence. the way it clocked my entire 
              feed... i'm shook. this is my villain origin story fr"
            </p>
            <cite className="text-pink-400">- @main_character_syndrome</cite>
          </blockquote>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold mb-6">Understanding Gen Z Humor</h2>
          <p className="text-gray-300 mb-4">
            Gen Z humor is characterized by its self-awareness, irony, and rapid evolution. 
            Our AI stays updated with the latest slang, memes, and cultural references that 
            define this generation's unique communication style. From "bussin" to "no cap," 
            we ensure every roast feels authentically Gen Z.
          </p>
          <h3 className="text-2xl font-bold mb-4">The Language of TikTok</h3>
          <p className="text-gray-300 mb-4">
            Our Gen Z mode incorporates trending audio references, popular phrases, and 
            the kind of chaotic energy that makes TikTok comments sections legendary. 
            Each roast is crafted to feel like it came straight from your FYP.
          </p>
          <h3 className="text-2xl font-bold mb-4">Internet Culture Mastery</h3>
          <p className="text-gray-300 mb-4">
            By analyzing millions of social media interactions, our AI understands the 
            nuances of online communication. It knows when to use "bestie" ironically, 
            how to deploy "it's giving" effectively, and why adding "✨" makes everything 
            more passive-aggressive.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Absolutely Dragged?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Your Instagram is about to get read for filth in the most chronically online way possible. 
          Are you ready for this? Because we're not holding back, bestie 💅
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/roast-generator?style=gen-z" className="bg-gradient-to-r from-pink-600 to-purple-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition inline-block">
            Slay Me (Respectfully) 💯
          </Link>
          <Link href="/download" className="border border-pink-400 px-12 py-5 rounded-full text-xl font-semibold hover:bg-pink-400/10 transition inline-block">
            Get the App Bestie
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-pink-800/50">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. It's giving copyright vibes.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/roast-styles" className="text-gray-400 hover:text-white transition">All Styles</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}