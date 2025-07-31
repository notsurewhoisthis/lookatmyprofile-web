import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Roasting Etiquette 101: How to Be Funny Without Being Mean | Roast a Profile',
  description: 'Master the art of respectful roasting. Learn the unwritten rules that separate clever humor from hurtful comments.',
  keywords: 'roasting etiquette, how to roast respectfully, funny vs mean, social media humor rules',
  openGraph: {
    title: 'Roasting Etiquette 101: The Art of Respectful Burns',
    description: 'Learn how to deliver devastating roasts while keeping your friendships intact.',
    url: 'https://www.lookatmyprofile.org/blog/roasting-etiquette-101',
    type: 'article',
    publishedTime: '2025-01-20',
    authors: ['Emily Chen'],
    tags: ['Etiquette', 'Humor', 'Social Media', 'Guides']
  }
};

export default function RoastingEtiquettePost() {
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
              <span className="bg-purple-600/20 px-3 py-1 rounded-full">Etiquette</span>
              <span>6 min read</span>
              <span>January 20, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Roasting Etiquette 101: How to Be Funny Without Being Mean
            </h1>
            <p className="text-xl text-gray-300">
              Master the art of respectful roasting. Learn the unwritten rules that separate 
              clever humor from hurtful comments.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-sm">
                <p className="font-semibold">Emily Chen</p>
                <p className="text-gray-400">Digital Etiquette Expert & Humor Coach</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              Roasting has become a digital art form, but with great power comes great responsibility. 
              The difference between a clever roast and cyberbullying is thinner than your friend's 
              hairline (see what I did there?). This guide will help you navigate the delicate 
              balance between being hilariously savage and remaining a decent human being.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Golden Rule of Roasting</h2>
            <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg mb-8">
              <p className="text-xl font-semibold text-center">
                "Punch up, never down. Roast the choices, not the circumstances."
              </p>
            </div>
            <p className="mb-8">
              This principle should guide every roast you deliver. Make fun of someone's decision 
              to post 47 gym selfies, not their body. Mock their pretentious coffee order, not 
              their financial situation. The best roasts target behaviors and choices, not 
              immutable characteristics or genuine struggles.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Anatomy of a Respectful Roast</h2>
            <p className="mb-6">
              A good roast has three essential components:
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-3">
              <li><strong>Truth:</strong> Based on observable behavior or choices</li>
              <li><strong>Exaggeration:</strong> Takes that truth to an absurd level</li>
              <li><strong>Affection:</strong> Underlying warmth that shows you're joking</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Green Zone: Always Safe to Roast</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-400">Social Media Habits</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Posting frequency and patterns</li>
                  <li>• Filter and editing choices</li>
                  <li>• Caption crimes and hashtag abuse</li>
                  <li>• Story oversharing</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-400">Lifestyle Choices</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Fashion decisions (that they chose)</li>
                  <li>• Hobby obsessions</li>
                  <li>• Music taste and guilty pleasures</li>
                  <li>• Food photography addiction</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-400">Online Personas</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Bio clichés and quotes</li>
                  <li>• Profile picture choices</li>
                  <li>• Attempts at being influencers</li>
                  <li>• Digital personality quirks</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-400">Pop Culture Takes</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Fandoms and obsessions</li>
                  <li>• Hot takes and opinions</li>
                  <li>• Meme usage and references</li>
                  <li>• Entertainment preferences</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Red Zone: Never Roast These</h2>
            <div className="bg-red-900/20 border border-red-600/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-red-400">Off-Limits Topics:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <div>
                    <strong>Physical Features They Can't Change:</strong> Height, facial features, 
                    disabilities, skin conditions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <div>
                    <strong>Mental Health:</strong> Depression, anxiety, therapy, medication, 
                    any psychological struggles
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <div>
                    <strong>Family Situations:</strong> Divorce, loss, family dynamics, 
                    childhood trauma
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <div>
                    <strong>Financial Hardship:</strong> Job loss, debt, inability to afford things
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <div>
                    <strong>Identity:</strong> Race, ethnicity, sexual orientation, gender identity, 
                    religion
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Art of Reading the Room</h2>
            <p className="mb-6">
              Context is everything in roasting. What works in one situation might be 
              completely inappropriate in another. Consider these factors:
            </p>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Before You Roast, Ask Yourself:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li><strong>What's your relationship?</strong> Close friends can handle more than acquaintances</li>
                <li><strong>What's the setting?</strong> Public roasts need more care than private ones</li>
                <li><strong>What's their current state?</strong> Someone going through a rough time needs support, not roasts</li>
                <li><strong>What's the audience?</strong> Consider who else will see or hear the roast</li>
                <li><strong>What's the intent?</strong> Are you trying to entertain or actually hurt?</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Delivery Makes the Difference</h2>
            <p className="mb-6">
              The same roast can be hilarious or hurtful depending on how it's delivered:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-900/20 border border-green-600/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-400">Good Delivery ✅</h3>
                <ul className="space-y-2">
                  <li>• Include emojis to show playfulness</li>
                  <li>• Use exaggeration to show you're joking</li>
                  <li>• Follow up with something positive</li>
                  <li>• Make yourself the butt of jokes too</li>
                  <li>• Check in if they seem upset</li>
                </ul>
              </div>
              <div className="bg-red-900/20 border border-red-600/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-red-400">Bad Delivery ❌</h3>
                <ul className="space-y-2">
                  <li>• Deadpan text that seems serious</li>
                  <li>• Piling on when others are roasting</li>
                  <li>• Bringing up old wounds</li>
                  <li>• Roasting when they're vulnerable</li>
                  <li>• Refusing to apologize if it lands wrong</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Consent Factor</h2>
            <p className="mb-6">
              Not everyone enjoys being roasted, and that's okay. Look for these signs:
            </p>
            <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Green Lights 🟢</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>They roast themselves frequently</li>
                <li>They engage in roast battles with others</li>
                <li>They laugh and roast back</li>
                <li>They share their own roasts</li>
              </ul>
              
              <h3 className="text-xl font-bold mb-4">Red Lights 🔴</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>They go quiet after roasts</li>
                <li>They change the subject</li>
                <li>They've asked people to stop before</li>
                <li>They don't engage with humor generally</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Recovery Protocol: When a Roast Goes Wrong</h2>
            <p className="mb-6">
              Even the best roasters occasionally cross a line. Here's how to recover gracefully:
            </p>
            <ol className="list-decimal pl-6 mb-8 space-y-3">
              <li><strong>Recognize immediately:</strong> Don't wait for them to say something</li>
              <li><strong>Apologize sincerely:</strong> "I'm sorry, that was too far. I didn't mean to hurt you."</li>
              <li><strong>Don't minimize:</strong> Avoid "It was just a joke" or "You're too sensitive"</li>
              <li><strong>Give them space:</strong> Let them process without pressuring for forgiveness</li>
              <li><strong>Learn from it:</strong> Mental note for future roasting boundaries</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">Platform-Specific Etiquette</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">Instagram Comments:</p>
                <p>Keep it light and emoji-heavy. Public space = extra careful</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">Twitter/X:</p>
                <p>Quick wit wins, but quote tweets can feel like public shaming</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">Group Chats:</p>
                <p>Know your audience. What flies with friends might not with coworkers</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="font-bold mb-2">TikTok:</p>
                <p>Duets and stitches for roasting need extra consent consideration</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Ultimate Roasting Checklist</h2>
            <div className="bg-purple-900/20 border border-purple-600/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Before You Hit Send:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Is it targeting a choice, not a circumstance?</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Would I be okay receiving this roast?</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Is the timing appropriate?</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Does it come from a place of affection?</span>
                </li>
                <li className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span>Am I prepared to apologize if it lands wrong?</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-purple-400">The Power of Self-Roasting</h2>
            <p className="mb-6">
              Sometimes the best way to show good roasting etiquette is to roast yourself first. 
              It shows you can take it as well as dish it out, and it creates a safe space for 
              mutual roasting. Plus, no one can roast you harder than you can roast yourself.
            </p>

            <p className="text-xl leading-relaxed mt-8">
              Remember, the goal of roasting isn't to wound—it's to create moments of shared 
              laughter and connection. The best roasts are the ones where everyone, including 
              the target, ends up laughing. When done right, roasting strengthens bonds rather 
              than breaking them. So go forth and roast responsibly, because a world without 
              playful teasing would be boring, but a world where teasing turns cruel is even worse.
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-gray-800/50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">About the Author</h3>
            <p className="text-gray-300">
              Emily Chen is a digital etiquette expert who specializes in online communication 
              and humor. She has written extensively about maintaining healthy relationships in 
              the digital age and runs workshops on "Humor Without Harm." When she's not teaching 
              people how to be funny responsibly, she's probably getting roasted by her teenage 
              daughter for using outdated memes.
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
          <Link href="/blog/ultimate-guide-roast-battles" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">⚔️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Ultimate Guide to Roast Battles</h3>
              <p className="text-gray-400">Win with style and grace.</p>
            </div>
          </Link>
          <Link href="/blog/psychology-of-instagram-roasting" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">🧠</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">The Psychology Behind Roasting</h3>
              <p className="text-gray-400">Why we love friendly burns.</p>
            </div>
          </Link>
          <Link href="/blog/gen-z-humor-explained" className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-6xl opacity-50">💯</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Gen Z Humor Explained</h3>
              <p className="text-gray-400">Modern roasting decoded.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Roast responsibly.</p>
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