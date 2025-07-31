import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Gen Z Humor Explained: A Guide for Confused Millennials & Boomers | Roast a Profile',
  description: 'Decode the chaotic world of Gen Z humor. From "no cap" to "bussin," understand why the kids are laughing at things that make no sense.',
  keywords: 'gen z humor, gen z slang, tiktok humor, zoomer memes, generational humor differences',
  openGraph: {
    title: 'Gen Z Humor Explained: A Guide for the Confused',
    description: 'Finally understand why Gen Z thinks everything is "giving" something.',
    url: 'https://www.lookatmyprofile.org/blog/gen-z-humor-explained',
    type: 'article',
    publishedTime: '2025-01-18',
    authors: ['Taylor Swift (not that one)'],
    tags: ['Culture', 'Humor', 'Gen Z', 'Social Media']
  }
};

export default function GenZHumorExplainedPost() {
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
              <span className="bg-purple-600/20 px-3 py-1 rounded-full">Culture</span>
              <span>10 min read</span>
              <span>January 18, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Gen Z Humor Explained: A Guide for Confused Millennials & Boomers
            </h1>
            <p className="text-xl text-gray-300">
              Decode the chaotic world of Gen Z humor. From "no cap" to "bussin," understand 
              why the kids are laughing at things that make no sense.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-sm">
                <p className="font-semibold">Taylor Swift (not that one)</p>
                <p className="text-gray-400">Gen Z Culture Correspondent, Age 22</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              bestie if you're reading this article it's giving millennial energy no cap fr fr 💀 
              But don't worry, by the end of this guide, you'll understand why that sentence is 
              peak comedy to anyone born after 2000. Welcome to your crash course in Gen Z humor, 
              where nothing makes sense and that's literally the point.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Foundation: Why Is Everything "Giving"?</h2>
            <p className="mb-6">
              Let's start with the basics. Gen Z humor operates on several key principles that 
              would make traditional comedians cry into their setup-punchline notebooks:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3">
              <li><strong>Absurdism is King:</strong> The less sense it makes, the funnier it is</li>
              <li><strong>Irony Layers:</strong> Everything is ironic, including the irony itself</li>
              <li><strong>Speed Over Setup:</strong> If it takes more than 3 seconds, it's cringe</li>
              <li><strong>References Within References:</strong> It's memes all the way down</li>
              <li><strong>Self-Aware Chaos:</strong> We know it's stupid. That's why it's funny</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Dictionary You Didn't Know You Needed</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Essential Gen Z Vocabulary:</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-bold text-purple-400">No cap / Cap</dt>
                  <dd className="ml-4">No lie / A lie. "That's cap" = "That's false"</dd>
                </div>
                <div>
                  <dt className="font-bold text-purple-400">Fr fr (for real for real)</dt>
                  <dd className="ml-4">Super serious. The more "fr"s, the more serious</dd>
                </div>
                <div>
                  <dt className="font-bold text-purple-400">Bussin</dt>
                  <dd className="ml-4">Really good, usually about food but applicable to anything</dd>
                </div>
                <div>
                  <dt className="font-bold text-purple-400">It's giving...</dt>
                  <dd className="ml-4">It has the energy/vibe of... (e.g., "It's giving broke")</dd>
                </div>
                <div>
                  <dt className="font-bold text-purple-400">Slay</dt>
                  <dd className="ml-4">To do something well. Overused ironically now</dd>
                </div>
                <div>
                  <dt className="font-bold text-purple-400">Bet</dt>
                  <dd className="ml-4">Okay/Sure/I agree</dd>
                </div>
                <div>
                  <dt className="font-bold text-purple-400">Periodt</dt>
                  <dd className="ml-4">Period with emphasis. End of discussion</dd>
                </div>
                <div>
                  <dt className="font-bold text-purple-400">Rizz</dt>
                  <dd className="ml-4">Charisma, specifically romantic. "W rizz" = good at flirting</dd>
                </div>
              </dl>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Humor Categories That Define a Generation</h2>
            
            <h3 className="text-2xl font-bold mb-3 text-pink-400">1. The "I'm Baby" Era</h3>
            <p className="mb-6">
              Remember when everyone was just... baby? This represents Gen Z's embrace of 
              vulnerability through absurdity. "I'm baby" means "I cannot handle adult 
              responsibilities and I'm making it everyone's problem in the cutest way possible."
            </p>

            <h3 className="text-2xl font-bold mb-3 text-pink-400">2. Millennial Slander</h3>
            <p className="mb-6">
              Nothing unites Gen Z like roasting millennials. Side parts? Cheugy. Skinny jeans? 
              Jail. Using "adulting" unironically? Immediate cancellation. The "✨ aesthetic ✨" 
              sparkle emoji usage? That's a war crime, bestie.
            </p>
            <div className="bg-purple-900/20 border border-purple-600/30 p-4 rounded-lg mb-8">
              <p className="italic">"Millennials will be like 'I need coffee to function' and then 
              post a Harry Potter house quiz result. Like pick a struggle."</p>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-pink-400">3. The Niche Meme Economy</h3>
            <p className="mb-6">
              Gen Z memes are so specific they need a bibliography. It's not enough to reference 
              a movie; you need to reference a specific frame from a TikTok about a Twitter 
              screenshot of someone's reaction to that movie.
            </p>

            <h3 className="text-2xl font-bold mb-3 text-pink-400">4. Trauma Dumping But Make It Funny</h3>
            <p className="mb-6">
              "My therapist says I have abandonment issues anyway here's me doing the renegade 💃" 
              Gen Z has mastered the art of making deeply personal struggles into shareable content. 
              It's concerning but also kind of iconic?
            </p>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Platforms That Shape The Humor</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">TikTok</h3>
                <p className="text-gray-300">
                  The homeland. Where sounds become language and dances become personality 
                  traits. If you don't understand a Gen Z joke, it probably started here.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Twitter</h3>
                <p className="text-gray-300">
                  For when you need to drop a one-liner that will either get 100K likes 
                  or get you canceled. There's no in-between.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Instagram Reels</h3>
                <p className="text-gray-300">
                  TikTok's less cool cousin that we still use because our millennial 
                  friends refuse to download TikTok.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Discord</h3>
                <p className="text-gray-300">
                  Where the deep lore lives. If a meme has 47 layers of context, 
                  they were probably developed in someone's Discord server.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Understanding Gen Z Roasting Culture</h2>
            <p className="mb-6">
              Gen Z roasts different. We don't just insult; we create entire psychological 
              profiles based on your Instagram grid layout. Some examples:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>"Tell me you're a millennial without telling me you're a millennial" *posts brunch photo*</li>
              <li>"The way you use ellipses... it's giving passive aggressive email energy"</li>
              <li>"Not the skinny jeans and side part combo 😭"</li>
              <li>"This is why your FYP is just millennials doing chores"</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Evolution Timeline</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">How Gen Z Humor Evolved:</h3>
              <ul className="space-y-3">
                <li><strong>2016-2018:</strong> Vine dies, TikTok rises. "Hit or miss" era begins</li>
                <li><strong>2019:</strong> "Ok boomer" peaks. VSCO girls emerge and immediately become a meme</li>
                <li><strong>2020:</strong> Pandemic humor gets dark. "✨ trauma ✨" format is born</li>
                <li><strong>2021:</strong> Everything is "cheugy." Millennials confused and scared</li>
                <li><strong>2022:</strong> "It's giving" takes over. Corn kid unites all generations</li>
                <li><strong>2023:</strong> "Rizz" becomes Oxford word of the year. We've peaked</li>
                <li><strong>2024-2025:</strong> Post-ironic sincerity era. Being genuine is cool again (ironically)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">How to Speak Gen Z (A Practical Guide)</h2>
            <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Translation Exercise:</h3>
              <p className="mb-4"><strong>Millennial:</strong> "I'm having such a bad day. I need wine and Netflix."</p>
              <p className="mb-4"><strong>Gen Z Translation:</strong> "bestie im literally going through it rn no cap. its giving seasonal depression and im not even trying to hide it anymore fr. bout to rot in bed and watch tiktoks until my brain melts. thats on periodt 💀"</p>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Why This Matters for Roasting</h2>
            <p className="mb-6">
              Understanding Gen Z humor is crucial for modern roasting because we've revolutionized 
              the art form. We don't just make fun of what you post; we psychoanalyze the 
              cultural implications of your emoji choices. Our roasts hit different because 
              they're wrapped in seventeen layers of irony and delivered with a smile.
            </p>

            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Gen Z Roasting Starter Pack:</h3>
              <ul className="space-y-2">
                <li>• "The [blank] to [blank] pipeline is real"</li>
                <li>• "It's the [specific detail] for me"</li>
                <li>• "Bestie, this ain't it"</li>
                <li>• "Not you thinking [obvious thing]"</li>
                <li>• "The way I KNOW you [specific behavior]"</li>
                <li>• "Tell me you're [characteristic] without telling me"</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">A Final Word of Wisdom</h2>
            <p className="text-xl leading-relaxed mt-8">
              Look, if you made it this far, you're already doing better than most. Gen Z humor 
              isn't meant to be fully understood by outsiders – that's literally the point. It's 
              our secret language, our way of processing a chaotic world through equally chaotic 
              comedy. But now you have the decoder ring. Use it wisely. And please, for the love 
              of all that is holy, stop using the crying laughing emoji. It's giving boomer and 
              that's on what? That's on periodt. 💅
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-gray-800/50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">About the Author</h3>
            <p className="text-gray-300">
              Taylor Swift (not that one) is a 22-year-old content creator who specializes in 
              translating Gen Z culture for confused older generations. She has been quoted saying 
              "I'm basically a cultural ambassador but make it girlboss." Follow her on TikTok 
              @notactuallytaylorswift where she posts daily Gen Z vocabulary lessons.
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
          <Link href="/blog/instagram-personality-types" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">👥</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">8 Instagram Personality Types</h3>
              <p className="text-gray-400">Which Gen Z archetype are you?</p>
            </div>
          </Link>
          <Link href="/blog/ultimate-guide-roast-battles" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">⚔️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Ultimate Guide to Roast Battles</h3>
              <p className="text-gray-400">Gen Z edition: It's giving main character.</p>
            </div>
          </Link>
          <Link href="/blog/roasting-etiquette-101" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">🤝</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Roasting Etiquette 101</h3>
              <p className="text-gray-400">How to roast without being cheugy.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. No cap fr fr.</p>
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