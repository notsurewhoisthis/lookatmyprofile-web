import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { ReviewSchema } from '@/components/SEO/ReviewSchema';

export const metadata: Metadata = {
  title: 'Gen Z Roast Generator Online - Slay with No Cap Fr Fr 🔥',
  description: 'The only Gen Z roast generator that actually slays. Get bussin roasts that hit different. No cap, bestie - these roasts are giving main character energy fr.',
  keywords: 'gen z roast generator, gen z roaster online, gen z insults generator, gen z slang roasts, zoomer roast generator',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/gen-z-roast-generator-online'
  },
  openGraph: {
    title: 'Gen Z Roast Generator - Roasts That Hit Different',
    description: 'Bestie got cooked 💀 Generate Gen Z roasts that actually understand the assignment. Its giving comedy, no cap.',
    url: 'https://www.lookatmyprofile.org/gen-z-roast-generator-online',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Gen Z Roast Generator'
    }]
  }
};

const genZFAQs = [
  {
    question: "What makes this a real Gen Z roast generator?",
    answer: "Unlike other generators that just add 'bestie' to everything, our AI actually understands Gen Z humor, TikTok references, and current slang. We're not cheugy millennials trying to be cool - we get the vibe fr fr."
  },
  {
    question: "Can boomers and millennials use this Gen Z roaster?",
    answer: "Respectfully, yes - but prepare to not understand half the references. We've got side parts and skinny jeans getting roasted left and right. It's giving educational content for the elderly (anyone over 25)."
  },
  {
    question: "Is this roast generator actually free no cap?",
    answer: "On god, it's 100% free. No signup, no email, no nothing. We're not trying to gatekeep the roasts. That would be giving pick-me energy and we don't do that here."
  },
  {
    question: "What Gen Z slang does the roaster use?",
    answer: "Everything from 'it's giving' to 'no cap', 'bussin', 'slays', 'hits different', 'rent free', 'main character', 'NPC energy', and whatever's trending on TikTok this week. We stay updated fr."
  },
  {
    question: "Why do Gen Z roasts hit different?",
    answer: "Gen Z roasts are unhinged in the best way. We roast with love but make it devastating. It's the perfect mix of therapy speak, internet brain rot, and chronically online energy."
  }
];

export default function GenZRoastGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.lookatmyprofile.org" },
          { name: "Generators", url: "https://www.lookatmyprofile.org/generators" },
          { name: "Gen Z Roast Generator", url: "https://www.lookatmyprofile.org/gen-z-roast-generator-online" }
        ]}
      />
      <ReviewSchema />
      <FAQSchema faqs={genZFAQs} pageTitle="Gen Z Roast Generator Online" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 rounded-full text-sm font-semibold">
              ✨ IT'S GIVING ROAST GENERATOR ✨ NO CAP FR FR
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Gen Z Roast Generator
            </span>
            <span className="block text-3xl md:text-4xl mt-2 text-gray-300">
              Roasts That Actually Slay 💅
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Bestie, This Ain't Your Millennial's Roast Generator
          </p>
          
          {/* Gen Z Vibes */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-gray-400">
            <span className="px-3 py-1 bg-gray-800 rounded-full">💀 Unhinged</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">✨ Main Character</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">🔥 Hits Different</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">😭 No Cap</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">💅 Slay</span>
          </div>
          
          {/* Quick Generator */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-lg mb-4 text-purple-300">
              bestie's about to get cooked fr 👨‍🍳
            </p>
            <input
              type="text"
              placeholder="drop the @ (no cap required)"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Link 
              href="/roast-generator"
              className="inline-block w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            >
              Generate Gen Z Roast (It's Giving Comedy) →
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              instant roasts • zero signup • chronically online energy
            </p>
          </div>
        </div>
      </section>

      {/* Gen Z Roast Examples */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Roasts That Understood The Assignment 💯
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/30">
              <div className="text-sm text-purple-400 mb-2">@basicinfluencer</div>
              <p className="text-gray-300 italic">
                "Not the beige aesthetic giving unseasoned chicken energy 💀 
                Bestie really said 'minimalism' and meant 'I have the personality of a CVS receipt.' 
                The way you're trying to be mysterious but it's giving NPC in the background fr fr"
              </p>
              <div className="mt-3 text-xs text-gray-500">— Gen Z Mode 🔥</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/30">
              <div className="text-sm text-purple-400 mb-2">@gymbroski</div>
              <p className="text-gray-300 italic">
                "The gym is your whole personality and it shows bestie 😭 
                Giving 'I count macros at parties' energy. 
                No cap, your pre-workout has more personality than your entire feed"
              </p>
              <div className="mt-3 text-xs text-gray-500">— Gen Z Mode 🔥</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/30">
              <div className="text-sm text-purple-400 mb-2">@wannabeinfluencer</div>
              <p className="text-gray-300 italic">
                "It's giving 'my mom still does my laundry' vibes no cap 💅 
                The delulu is the solulu but bestie you took it too far. 
                Living rent free in nobody's head fr"
              </p>
              <div className="mt-3 text-xs text-gray-500">— Gen Z Mode 🔥</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/30">
              <div className="text-sm text-purple-400 mb-2">@travelblogger</div>
              <p className="text-gray-300 italic">
                "Tell me you have generational wealth without telling me bestie 🤡 
                The trust fund is showing. It's giving 'gap year' but make it permanent. 
                We get it, you went to Europe once"
              </p>
              <div className="mt-3 text-xs text-gray-500">— Gen Z Mode 🔥</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gen Z Slang Dictionary */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Gen Z Roast Vocabulary (For The Elderly)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Core Slang</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><strong>No cap:</strong> No lie / for real</li>
                <li><strong>Fr fr:</strong> For real for real</li>
                <li><strong>Bussin:</strong> Really good</li>
                <li><strong>Slay:</strong> Do something well</li>
                <li><strong>Bestie:</strong> Anyone (sarcastic)</li>
                <li><strong>Hits different:</strong> Unique impact</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Roast Terms</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><strong>It's giving:</strong> It seems like</li>
                <li><strong>Rent free:</strong> Can't stop thinking</li>
                <li><strong>NPC energy:</strong> No personality</li>
                <li><strong>Main character:</strong> Self-centered</li>
                <li><strong>Delulu:</strong> Delusional</li>
                <li><strong>Cheugy:</strong> Outdated millennial</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Reactions</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><strong>I'm dead 💀:</strong> That's hilarious</li>
                <li><strong>Crying:</strong> Laughing hard</li>
                <li><strong>Screaming:</strong> Can't handle it</li>
                <li><strong>Not this:</strong> Disbelief</li>
                <li><strong>The way:</strong> Emphasis starter</li>
                <li><strong>Period/Purr:</strong> End of discussion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gen Z Roasts Different */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Gen Z Roasts Just Hit Different 💯
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">1. Chronically Online Energy</h3>
                <p className="text-gray-300">
                  We were raised by the internet. Our roasts reference TikTok trends, 
                  Twitter discourse, and memes that change every 3 days. It's giving 
                  "touch grass" but we refuse.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">2. Therapy Speak Weaponized</h3>
                <p className="text-gray-300">
                  We'll roast your attachment style, call out your trauma responses, 
                  and diagnose your narcissistic tendencies - all while being emotionally unavailable ourselves.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">3. Self-Aware Chaos</h3>
                <p className="text-gray-300">
                  We know we're broke, depressed, and addicted to our phones. 
                  We roast others while simultaneously roasting ourselves. It's called balance, bestie.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">4. Irony Levels: Maximum</h3>
                <p className="text-gray-300">
                  Everything is ironic. We say "slay" unironically while being ironic. 
                  We're post-post-ironic. The sincerity is the irony. Or is it?
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">5. Emoji Fluency Required</h3>
                <p className="text-gray-300">
                  A single 💀 can destroy someone. The 🤡 emoji is a full argument. 
                  We communicate in hieroglyphics and it's more effective than words.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">6. Collective Consciousness</h3>
                <p className="text-gray-300">
                  We all share the same 5 brain cells and TikTok FYP. Our roasts 
                  reference niche internet moments that somehow everyone understands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Millennial vs Gen Z Roasts */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Millennial Roasts vs Gen Z Roasts
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-900">
                <tr>
                  <th className="text-left p-4">Situation</th>
                  <th className="text-center p-4">Millennial Roast 👴</th>
                  <th className="text-center p-4 text-purple-400">Gen Z Roast 🔥</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="p-4">Bad Outfit</td>
                  <td className="p-4 text-center">"Did you get dressed in the dark?"</td>
                  <td className="p-4 text-center text-purple-300">"The fit is not fitting bestie 💀"</td>
                </tr>
                <tr>
                  <td className="p-4">Trying Too Hard</td>
                  <td className="p-4 text-center">"Someone's thirsty"</td>
                  <td className="p-4 text-center text-purple-300">"It's giving pick-me energy fr"</td>
                </tr>
                <tr>
                  <td className="p-4">Basic Photo</td>
                  <td className="p-4 text-center">"How original..."</td>
                  <td className="p-4 text-center text-purple-300">"NPC behavior no cap"</td>
                </tr>
                <tr>
                  <td className="p-4">Cringe Post</td>
                  <td className="p-4 text-center">"Delete this"</td>
                  <td className="p-4 text-center text-purple-300">"This ain't it chief, respectfully"</td>
                </tr>
                <tr>
                  <td className="p-4">Old Trend</td>
                  <td className="p-4 text-center">"So 2019"</td>
                  <td className="p-4 text-center text-purple-300">"The cheugy is showing bestie"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features for Gen Z */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Features That Actually Slap
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Internet Brain Rot</h3>
              <p className="text-gray-400">
                References memes from 3 hours ago. Understands the TikTok algorithm better than you.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💅</div>
              <h3 className="text-xl font-semibold mb-2">Slay or Be Slain</h3>
              <p className="text-gray-400">
                Every roast serves. No flops. It's giving comedy excellence.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">😭</div>
              <h3 className="text-xl font-semibold mb-2">Unhinged Energy</h3>
              <p className="text-gray-400">
                Chaotic good vibes. Will roast with love but make it devastating.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Main Character Mode</h3>
              <p className="text-gray-400">
                Every roast makes you the protagonist of your own roast story.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🤡</div>
              <h3 className="text-xl font-semibold mb-2">Self-Aware Mess</h3>
              <p className="text-gray-400">
                Roasts others while acknowledging we're all clowns here.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Chronically Online</h3>
              <p className="text-gray-400">
                Touch grass? Never heard of her. We live on the internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Use This Gen Z Roast Generator (Tutorial for Boomers)
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Find Your Victim (Respectfully)</h3>
                <p className="text-gray-400">
                  Pick someone with a public Instagram. Preferably someone who can handle 
                  the heat. We roast with love but it still burns fr.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enter Their @ (No Cap Required)</h3>
                <p className="text-gray-400">
                  Just type the username. No @ symbol needed. The AI will stalk— I mean, 
                  analyze their profile for maximum roast potential.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Select Gen Z Mode 💅</h3>
                <p className="text-gray-400">
                  Choose the Gen Z style for maximum chaos. Other styles are for millennials 
                  and their skinny jeans. We don't do that here.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Watch Them Get Cooked</h3>
                <p className="text-gray-400">
                  In 2-3 seconds, receive a roast that will live rent-free in their head. 
                  Screenshot for the group chat. It's giving viral potential.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl mb-6 text-purple-400">
              bestie, it's time to serve ✨
            </p>
            <Link 
              href="/roast-generator"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              Start Gen Z Roasting (No 🧢) →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-8 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Slay? It's Giving Main Character Energy
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join 2M+ bestis who understood the assignment. 
              Generate roasts that actually hit different. No cap fr fr.
            </p>
            
            <div className="bg-black/30 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400">2M+</div>
                  <div className="text-sm text-gray-400">Besties Roasted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">💀</div>
                  <div className="text-sm text-gray-400">Dead From Laughing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-gray-400">Chronically Online</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">✨</div>
                  <div className="text-sm text-gray-400">Pure Vibes</div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/roast-generator"
              className="inline-block px-12 py-5 bg-white text-purple-900 rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Generate Gen Z Roast Now →
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              it's free bestie • no signup • we're not like other generators
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">More Roasting Content (Chef's Kiss)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/free-instagram-roast-generator-no-signup" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Free Roast Generator</h3>
              <p className="text-sm text-gray-400">No signup, just vibes</p>
            </Link>
            <Link href="/funny-things-to-comment-on-instagram" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Funny Comments</h3>
              <p className="text-sm text-gray-400">500+ ideas that slap</p>
            </Link>
            <Link href="/ultimate-guide-instagram-roasting" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Roasting Guide</h3>
              <p className="text-sm text-gray-400">Become a roast master</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}