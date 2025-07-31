import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Instagram Roast Battles | Roast a Profile',
  description: 'Learn how to win roast battles with friends, the best strategies for comebacks, and how to keep it fun without crossing the line.',
  keywords: 'instagram roast battles, roasting strategies, comeback guide, social media battles',
  openGraph: {
    title: 'The Ultimate Guide to Instagram Roast Battles',
    description: 'Master the art of roast battles and become the undisputed champion.',
    url: 'https://www.lookatmyprofile.org/blog/ultimate-guide-roast-battles',
    type: 'article',
    article: {
      publishedTime: '2025-01-12',
      authors: ['Mike Rodriguez'],
      tags: ['Guides', 'Roasting', 'Social Media', 'Strategy']
    }
  }
};

export default function RoastBattlesGuidePost() {
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
              <span className="bg-purple-600/20 px-3 py-1 rounded-full">Guides</span>
              <span>7 min read</span>
              <span>January 12, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              The Ultimate Guide to Instagram Roast Battles
            </h1>
            <p className="text-xl text-gray-300">
              Learn how to win roast battles with friends, the best strategies for comebacks, 
              and how to keep it fun without crossing the line.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-sm">
                <p className="font-semibold">Mike Rodriguez</p>
                <p className="text-gray-400">Comedy Writer & Roast Battle Champion</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              Welcome to the digital colosseum where wit is your weapon and humor is your shield. 
              Instagram roast battles have become the modern equivalent of rap battles, but instead 
              of bars, we're dropping burns. Whether you're a rookie or a seasoned roaster, this 
              guide will turn you into an unstoppable force of comedic destruction.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Anatomy of a Perfect Roast</h2>
            <p className="mb-6">
              Before diving into battle strategies, let's break down what makes a roast truly devastating:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3">
              <li><strong>Specificity:</strong> Generic insults are weak. Target unique aspects of their profile</li>
              <li><strong>Creativity:</strong> Avoid overused jokes. The unexpected hit hardest</li>
              <li><strong>Timing:</strong> Deploy your best roasts strategically, not all at once</li>
              <li><strong>Relatability:</strong> The audience should think "Oh, that's so true!"</li>
              <li><strong>The Kernel of Truth:</strong> The best roasts have just enough accuracy to sting</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Setting Up Your Roast Battle</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">The Official Rules:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Both participants agree to battle (consent is key!)</li>
                <li>Set a time limit (usually 5-10 rounds)</li>
                <li>No below-the-belt shots (family, serious issues, etc.)</li>
                <li>Judges or audience vote determines the winner</li>
                <li>Winner gets bragging rights (and maybe the loser changes their bio)</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Reconnaissance: Know Your Target</h2>
            <p className="mb-6">
              Sun Tzu said, "Know your enemy." In roast battles, this means doing your homework:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3">
              <li><strong>Bio Analysis:</strong> Every emoji and quote is ammunition</li>
              <li><strong>Photo Patterns:</strong> Same angle in every pic? That's gold</li>
              <li><strong>Caption Crimes:</strong> Inspirational quotes are roast magnets</li>
              <li><strong>Following Ratio:</strong> Following 5000, followed by 12? Yikes</li>
              <li><strong>Story Highlights:</strong> "Gym" highlight with one workout from 2019? Perfect</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Art of the Comeback</h2>
            <p className="mb-6">
              Defense wins championships. Here's how to turn their roasts against them:
            </p>
            <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Comeback Strategies:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <div>
                    <strong>The Redirect:</strong> "That's rich coming from someone who..."
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <div>
                    <strong>The Embrace:</strong> "You're right, but at least I don't..."
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <div>
                    <strong>The Escalation:</strong> Take their roast and make it worse for them
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <div>
                    <strong>The Plot Twist:</strong> Reveal information that flips their roast
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Battle Tactics by Profile Type</h2>
            
            <h3 className="text-2xl font-bold mb-3 text-pink-400">The Influencer Wannabe</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Target: Engagement rates, #blessed posts, discount codes nobody uses</li>
              <li>Example: "Your engagement rate is lower than my self-esteem after seeing your content"</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 text-pink-400">The Gym Bro/Fitness Queen</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Target: Protein powder obsession, mirror selfies, "journey" posts</li>
              <li>Example: "Your personality has less depth than your ab definition"</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 text-pink-400">The Philosopher</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Target: Pretentious quotes, black and white photos, "deep" captions</li>
              <li>Example: "Your captions are deeper than your thoughts will ever be"</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Advanced Techniques</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">The Callback</h3>
                <p className="text-gray-300">
                  Reference their earlier posts or stories. Shows you've done research and 
                  catches them off guard.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">The Compliment Sandwich</h3>
                <p className="text-gray-300">
                  Start nice, devastate in the middle, end nice. They won't know whether 
                  to thank you or cry.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">The Meta Roast</h3>
                <p className="text-gray-300">
                  Roast their roasting ability. "Your comebacks are like your feed - 
                  trying too hard and still missing."
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">The Statistical Burn</h3>
                <p className="text-gray-300">
                  Use actual numbers against them. "You post 47 times a day but get 
                  3 likes. Even your mom gave up."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Keeping It Fun: The Golden Rules</h2>
            <div className="bg-red-900/20 border border-red-600/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Never Cross These Lines:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Physical appearances they can't change</li>
                <li>Mental health struggles</li>
                <li>Family tragedies or serious life events</li>
                <li>Financial hardships</li>
                <li>Anything genuinely hurtful vs. playfully teasing</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Practice Arena: Sample Roasts</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">For the Serial Selfie Poster:</p>
                <p className="italic">"Your camera roll has more pictures of your face than a dermatology textbook"</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">For the Food Photographer:</p>
                <p className="italic">"Your food gets more attention than you do, and it deserves it"</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">For the Travel "Blogger":</p>
                <p className="italic">"You've been to 30 countries but still haven't found a personality"</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Victory Lap</h2>
            <p className="mb-6">
              When you win (and you will with these strategies), be gracious:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Compliment your opponent's best roasts</li>
              <li>Suggest a rematch to keep it fun</li>
              <li>Share the best moments (with permission)</li>
              <li>Don't gloat excessively (save that for your close friends)</li>
            </ul>

            <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4">Pro Tips from the Champions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">💡</span>
                  <span>Prepare 10 roasts but only use your best 5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">💡</span>
                  <span>Save your strongest roast for when they think they're winning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">💡</span>
                  <span>If a roast doesn't land, move on quickly - don't explain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">💡</span>
                  <span>Practice on AI first - use the app to test your material</span>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed mt-8">
              Remember, the goal of a roast battle isn't to destroy friendships - it's to strengthen 
              them through laughter. The best roast battles end with both participants laughing, 
              followers entertained, and everyone having a good time. Now get out there and 
              roast responsibly!
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-gray-800/50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">About the Author</h3>
            <p className="text-gray-300">
              Mike Rodriguez is a comedy writer and three-time Roast Battle champion at the 
              Comedy Store. He's written for Comedy Central Roasts and teaches workshops on 
              competitive humor. Follow him for daily roasting tips @RoastMasterMike.
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
          <Link href="/blog/roasting-etiquette-101" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">🤝</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Roasting Etiquette 101</h3>
              <p className="text-gray-400">How to be funny without being mean.</p>
            </div>
          </Link>
          <Link href="/blog/psychology-of-instagram-roasting" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">🧠</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">The Psychology Behind Roasting</h3>
              <p className="text-gray-400">Why we love to be teased.</p>
            </div>
          </Link>
          <Link href="/blog/instagram-personality-types" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">👥</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">8 Instagram Personality Types</h3>
              <p className="text-gray-400">Which one are you?</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Battle responsibly.</p>
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