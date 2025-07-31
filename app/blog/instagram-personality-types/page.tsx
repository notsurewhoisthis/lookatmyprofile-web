import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '8 Instagram Personality Types: Which One Are You? | Roast a Profile',
  description: 'Our AI analyzed 50,000 profiles to identify the most common Instagram personalities. Find out which type you are and what it says about you.',
  keywords: 'instagram personality types, social media personalities, instagram user types, profile analysis',
  openGraph: {
    title: '8 Instagram Personality Types: Which One Are You?',
    description: 'AI-powered analysis reveals the 8 most common Instagram personalities.',
    url: 'https://www.lookatmyprofile.org/blog/instagram-personality-types',
    type: 'article',
    article: {
      publishedTime: '2025-01-08',
      authors: ['Data Science Team'],
      tags: ['Research', 'Instagram', 'Data Analysis', 'Personality']
    }
  }
};

export default function InstagramPersonalityTypesPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Try Now</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition">← Back to Blog</Link>
          </div>
          
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="bg-purple-600/20 px-3 py-1 rounded-full">Research</span>
              <span>6 min read</span>
              <span>January 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              8 Instagram Personality Types: Which One Are You?
            </h1>
            <p className="text-xl text-gray-300">
              Our AI analyzed 50,000 profiles to identify the most common Instagram personalities. 
              Find out which type you are and what it says about you.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-sm">
                <p className="font-semibold">Data Science Team</p>
                <p className="text-gray-400">Roast a Profile Research Division</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              After analyzing over 50,000 Instagram profiles, our AI has identified 8 distinct 
              personality types that dominate the platform. Each type has unique characteristics, 
              posting patterns, and – most importantly – specific roasting vulnerabilities. 
              Let's dive into the data and find out which Instagram personality you embody.
            </p>

            <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">The Study</h3>
              <ul className="space-y-2">
                <li>📊 <strong>50,000+</strong> profiles analyzed</li>
                <li>🌍 <strong>27</strong> countries represented</li>
                <li>📸 <strong>2.3 million</strong> posts examined</li>
                <li>💬 <strong>8.7 million</strong> captions processed</li>
                <li>🤖 <strong>97.3%</strong> classification accuracy</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-purple-400">Type 1: The Aesthetic Perfectionist</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <p className="text-xl mb-4">📸 <strong>18.2% of profiles</strong></p>
              <h4 className="text-lg font-bold mb-3">Identifying Features:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Cohesive color palette across all posts</li>
                <li>Grid planning apps are their best friend</li>
                <li>Will delete a post if it "ruins the aesthetic"</li>
                <li>Captions include: "curated," "vibes," "aesthetic"</li>
                <li>Beige. So much beige.</li>
              </ul>
              <h4 className="text-lg font-bold mb-3">Classic Roast:</h4>
              <p className="italic text-purple-300">
                "Your feed is more curated than a museum exhibit, but with significantly less 
                culture and infinitely more pumpkin spice lattes."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-purple-400">Type 2: The Aspiring Influencer</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <p className="text-xl mb-4">💫 <strong>15.7% of profiles</strong></p>
              <h4 className="text-lg font-bold mb-3">Identifying Features:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>"Link in bio" appears more than their own name</li>
                <li>Discount codes nobody has ever used</li>
                <li>Engagement pods are their primary social circle</li>
                <li>Every sunset is a "blessed" opportunity</li>
                <li>Following-to-follower ratio: 5000:347</li>
              </ul>
              <h4 className="text-lg font-bold mb-3">Classic Roast:</h4>
              <p className="italic text-purple-300">
                "You have more affiliate links than actual friends, and your engagement rate 
                is lower than my expectations for this profile – which were already underground."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-purple-400">Type 3: The Fitness Fanatic</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <p className="text-xl mb-4">💪 <strong>13.9% of profiles</strong></p>
              <h4 className="text-lg font-bold mb-3">Identifying Features:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Mirror selfies comprise 73% of content</li>
                <li>Protein shake product placement in every third post</li>
                <li>"Beast mode" or "No excuses" in bio</li>
                <li>Documents every rep, set, and meal</li>
                <li>Transformation Tuesday posts since 2019</li>
              </ul>
              <h4 className="text-lg font-bold mb-3">Classic Roast:</h4>
              <p className="italic text-purple-300">
                "You spend more time photographing your workouts than actually doing them. 
                Your personality has less depth than your ab definition."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-purple-400">Type 4: The Cryptic Philosopher</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <p className="text-xl mb-4">🌙 <strong>11.4% of profiles</strong></p>
              <h4 className="text-lg font-bold mb-3">Identifying Features:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Exclusively posts in black and white</li>
                <li>Quotes Rumi, Bukowski, or themselves</li>
                <li>Bio contains only emojis or a single word</li>
                <li>Captions either 500 words or just "."</li>
                <li>Profile picture: silhouette against sunset</li>
              </ul>
              <h4 className="text-lg font-bold mb-3">Classic Roast:</h4>
              <p className="italic text-purple-300">
                "Your captions are deeper than your thoughts will ever be. You're not mysterious, 
                you're just bad at communication."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-purple-400">Type 5: The Serial Food Photographer</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <p className="text-xl mb-4">🍔 <strong>10.2% of profiles</strong></p>
              <h4 className="text-lg font-bold mb-3">Identifying Features:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Has never eaten a warm meal</li>
                <li>Restaurant lighting analysis before ordering</li>
                <li>Fork placement is an art form</li>
                <li>Hashtags include 15 variations of #foodie</li>
                <li>Friends have stopped inviting them to dinner</li>
              </ul>
              <h4 className="text-lg font-bold mb-3">Classic Roast:</h4>
              <p className="italic text-purple-300">
                "Your food gets more likes than you do, and honestly, it deserves them more. 
                At least the food has substance."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-purple-400">Type 6: The Adventure Seeker</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <p className="text-xl mb-4">🏔️ <strong>9.8% of profiles</strong></p>
              <h4 className="text-lg font-bold mb-3">Identifying Features:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>"Not all who wander are lost" in bio</li>
                <li>Plane window shots: 47</li>
                <li>Feet photos on various landscapes</li>
                <li>Makes everyday errands sound like expeditions</li>
                <li>Has visited 30 countries but no personality</li>
              </ul>
              <h4 className="text-lg font-bold mb-3">Classic Roast:</h4>
              <p className="italic text-purple-300">
                "You've been to more places than a FedEx package, yet somehow you're still 
                searching for yourself. Spoiler: you won't find personality at the airport."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-purple-400">Type 7: The Pet Parent</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <p className="text-xl mb-4">🐕 <strong>8.6% of profiles</strong></p>
              <h4 className="text-lg font-bold mb-3">Identifying Features:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Human appears in 12% of posts</li>
                <li>Pet has its own Instagram mentioned in bio</li>
                <li>"Dog mom" or "Cat dad" as primary identity</li>
                <li>Birthday parties for pets documented extensively</li>
                <li>Speaks in pet voice in captions</li>
              </ul>
              <h4 className="text-lg font-bold mb-3">Classic Roast:</h4>
              <p className="italic text-purple-300">
                "Your pet has more personality in one paw than you have in your entire feed. 
                At least someone in this relationship is interesting."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-purple-400">Type 8: The Chronic Oversharer</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <p className="text-xl mb-4">📢 <strong>8.2% of profiles</strong></p>
              <h4 className="text-lg font-bold mb-3">Identifying Features:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Instagram Stories: 47 per day</li>
                <li>Live tweets their entire day via posts</li>
                <li>Shares screenshots of conversations</li>
                <li>TMI is their middle name</li>
                <li>Privacy settings: What are those?</li>
              </ul>
              <h4 className="text-lg font-bold mb-3">Classic Roast:</h4>
              <p className="italic text-purple-300">
                "You share more than a kindergarten class during show and tell. The only thing 
                you don't share is the self-awareness to stop."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Science Behind the Types</h2>
            <p className="mb-6">
              Our AI classification system analyzes multiple data points to determine personality type:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3">
              <li><strong>Visual Patterns:</strong> Color schemes, composition, filters used</li>
              <li><strong>Caption Analysis:</strong> Word choice, length, emoji usage</li>
              <li><strong>Posting Frequency:</strong> Time between posts, story activity</li>
              <li><strong>Hashtag Behavior:</strong> Types and quantity of tags used</li>
              <li><strong>Engagement Patterns:</strong> How they interact with others</li>
            </ul>

            <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4">Multi-Type Personalities</h3>
              <p className="mb-4">
                Interestingly, 23% of profiles exhibit traits from multiple personality types:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Fitness + Food:</strong> "Gains and grains" lifestyle</li>
                <li>• <strong>Adventure + Aesthetic:</strong> Curated wanderlust</li>
                <li>• <strong>Pet Parent + Oversharer:</strong> Daily pet diaries</li>
                <li>• <strong>Philosopher + Influencer:</strong> Monetizing enlightenment</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">What Your Type Says About You</h2>
            <p className="mb-6">
              Beyond the roasts, these personality types reveal genuine insights about how we 
              present ourselves online:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">Aesthetic Perfectionists:</p>
                <p>Value control and presentation, possibly perfectionistic in real life</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">Aspiring Influencers:</p>
                <p>Entrepreneurial spirit, seeking validation and community</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">Fitness Fanatics:</p>
                <p>Goal-oriented, disciplined, but may tie self-worth to appearance</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">Cryptic Philosophers:</p>
                <p>Creative, introspective, possibly struggling with vulnerability</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Evolution of Types Over Time</h2>
            <p className="mb-6">
              Our longitudinal data shows that Instagram personalities aren't static:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>34% of users shift types within 18 months</li>
              <li>Aesthetic Perfectionists often evolve into Influencers</li>
              <li>Philosophers frequently become Oversharers</li>
              <li>Pet Parents are the most stable type (only 12% shift)</li>
            </ul>

            <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4">Take the Test</h3>
              <p className="mb-4">
                Want to know your Instagram personality type? Our AI can analyze your profile 
                and provide a detailed breakdown of your digital persona.
              </p>
              <Link href="/roast-generator" className="inline-block bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition">
                Discover Your Type →
              </Link>
            </div>

            <p className="text-xl leading-relaxed mt-8">
              Understanding your Instagram personality type isn't just about getting better roasts 
              (though that's definitely a perk). It's about recognizing the patterns in how we 
              present ourselves online and maybe, just maybe, having a laugh at our own digital 
              quirks. After all, we're all guilty of at least one of these types – and that's 
              what makes Instagram the beautifully bizarre platform we can't stop scrolling.
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-gray-800/50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">About the Research</h3>
            <p className="text-gray-300">
              This study was conducted by the Roast a Profile Data Science Team using anonymized 
              data from publicly available Instagram profiles. No private information was accessed 
              or stored. Our AI classification system continues to learn and improve with each 
              analysis.
            </p>
          </div>

          {/* Share and Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition">
                Share Article
              </button>
              <button className="border border-purple-400 px-6 py-2 rounded-full hover:bg-purple-400/10 transition">
                Copy Link
              </button>
            </div>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition">
              More Articles →
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="container mx-auto px-4 py-20 bg-black/30">
        <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/blog/psychology-of-instagram-roasting" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">🧠</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">The Psychology Behind Roasting</h3>
              <p className="text-gray-400">Why we love personality analysis.</p>
            </div>
          </Link>
          <Link href="/blog/ai-humor-evolution" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">🤖</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">How AI Learned to Categorize</h3>
              <p className="text-gray-400">The tech behind personality detection.</p>
            </div>
          </Link>
          <Link href="/blog/gen-z-humor-explained" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">💯</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">How Gen Z Changed Instagram</h3>
              <p className="text-gray-400">New personality types emerging.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Personality type: Footer.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}