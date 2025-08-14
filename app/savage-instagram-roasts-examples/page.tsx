import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { ReviewSchema } from '@/components/SEO/ReviewSchema';

export const metadata: Metadata = {
  title: 'Savage Instagram Roasts Examples - 100+ Brutal Burns That Destroyed',
  description: 'The most savage Instagram roast examples that left people speechless. Copy these brutal burns or generate your own with our AI roast generator. Warning: Absolutely ruthless.',
  keywords: 'savage Instagram roasts, brutal roast examples, savage burns Instagram, ruthless Instagram roasts, devastating roasts',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/savage-instagram-roasts-examples'
  },
  openGraph: {
    title: 'Savage Instagram Roasts That Actually Destroyed People',
    description: '100+ brutal Instagram roast examples. These savage burns are so devastating they should come with a warning label.',
    url: 'https://www.lookatmyprofile.org/savage-instagram-roasts-examples',
    type: 'article',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Savage Instagram Roasts Examples'
    }]
  }
};

const savageFAQs = [
  {
    question: "What makes a roast truly savage?",
    answer: "A savage roast hits personal truths with surgical precision. It's unexpected, clever, and cuts deep while still being funny. The best savage roasts make everyone go 'Ooooh!' because they're so accurate it hurts."
  },
  {
    question: "How savage is too savage for Instagram?",
    answer: "Stay away from appearance shaming, serious personal issues, or anything that could cause real emotional damage. Savage should be funny-brutal, not genuinely hurtful. Know your audience and their boundaries."
  },
  {
    question: "Can I use these savage roast examples on my friends?",
    answer: "Only if your friendship can handle it! These examples are brutal - make sure your relationship has that level of roast tolerance. When in doubt, start with our 'Friendly' roasts instead."
  },
  {
    question: "How do I respond if someone roasts me savagely?",
    answer: "Own it and laugh, roast yourself harder, or hit back with equal energy. Never get genuinely angry - that means they won. The best response to a savage roast is an even more savage comeback."
  },
  {
    question: "What's the difference between savage and mean?",
    answer: "Savage roasts are clever, creative, and ultimately funny. Mean comments are just hurtful without humor. A good savage roast makes even the victim laugh (eventually). Being mean is just being a jerk."
  }
];

export default function SavageRoastsExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.lookatmyprofile.org" },
          { name: "Examples", url: "https://www.lookatmyprofile.org/examples" },
          { name: "Savage Roasts", url: "https://www.lookatmyprofile.org/savage-instagram-roasts-examples" }
        ]}
      />
      <ReviewSchema />
      <FAQSchema faqs={savageFAQs} pageTitle="Savage Instagram Roasts Examples" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
              ⚠️ WARNING: ABSOLUTELY BRUTAL CONTENT AHEAD
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
              Savage Instagram Roasts
            </span>
            <span className="block text-3xl md:text-4xl mt-2 text-gray-300">
              Examples That Actually Destroyed People
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            100+ Brutal Burns That Left No Survivors
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 justify-center mb-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <span>100+ Examples</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💀</span>
              <span>Maximum Brutality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Instant Generator</span>
            </div>
          </div>
          
          {/* Quick Generator CTA */}
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-6 rounded-xl">
            <p className="text-lg mb-4 text-red-300">
              Generate your own savage roasts instantly
            </p>
            <Link 
              href="/roast-generator"
              className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Create Savage Roast →
            </Link>
          </div>
        </div>
      </section>

      {/* Hall of Fame Roasts */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🏆 Hall of Fame: Most Savage Roasts Ever
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-lg border border-red-500/30">
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm text-red-400">@wannabemodel</span>
                <span className="text-xs text-gray-500">Brutality: 10/10</span>
              </div>
              <p className="text-lg text-gray-200 italic mb-3">
                "Your bio says 'model' but your face says 'before picture'. The only runway 
                you belong on is at the airport, and that's just to leave."
              </p>
              <div className="text-sm text-gray-400">💀 Casualties: Self-esteem</div>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-lg border border-red-500/30">
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm text-red-400">@gymbro247</span>
                <span className="text-xs text-gray-500">Brutality: 9.5/10</span>
              </div>
              <p className="text-lg text-gray-200 italic mb-3">
                "You have the personality of a protein shake and the depth of a gym mirror. 
                Your entire identity can be summed up in three words: Lift, Post, Repeat."
              </p>
              <div className="text-sm text-gray-400">💀 Casualties: Ego gains</div>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-lg border border-red-500/30">
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm text-red-400">@influencer</span>
                <span className="text-xs text-gray-500">Brutality: 10/10</span>
              </div>
              <p className="text-lg text-gray-200 italic mb-3">
                "Calling yourself an influencer with 2K followers is like calling yourself 
                a chef because you can make cereal. You influence nothing except your mom's 
                data plan."
              </p>
              <div className="text-sm text-gray-400">💀 Casualties: Career aspirations</div>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-lg border border-red-500/30">
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm text-red-400">@foodie</span>
                <span className="text-xs text-gray-500">Brutality: 9/10</span>
              </div>
              <p className="text-lg text-gray-200 italic mb-3">
                "You take more photos of food than a health inspector. The only difference 
                is the health inspector has a purpose and gets paid."
              </p>
              <div className="text-sm text-gray-400">💀 Casualties: Foodie credibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category-Based Examples */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Savage Roasts by Category
          </h2>
          
          {/* Selfie Roasts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-red-400">📸 Savage Selfie Roasts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "This selfie has more filters than a water treatment plant and still couldn't clean up this mess."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "47 selfies to get this one and it still looks like you're being held hostage by your own face."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "Your camera roll is 98% rejected selfies and 2% this, which should also be rejected."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "Even your phone's AI is tired of looking at you. It keeps suggesting landscape mode."
                </p>
              </div>
            </div>
          </div>
          
          {/* Gym Roasts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">💪 Savage Gym Roasts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "You go to the gym more for the WiFi than the workout. Your muscles are as fake as your commitment."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "The only thing you're lifting is your phone for selfies. The weights are just expensive props."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "Your gym membership is the most expensive photography studio subscription ever."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "You have the body of someone who counts walking to the gym as cardio."
                </p>
              </div>
            </div>
          </div>
          
          {/* Couple Roasts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-pink-400">💑 Savage Couple Roasts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "You two are proof that loneliness makes people do desperate things."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "This relationship has more red flags than a communist parade."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "You're each other's participation trophy in the game of love."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "Together you make a perfect 10. A 3 and a 7, but still a 10."
                </p>
              </div>
            </div>
          </div>
          
          {/* Travel Roasts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">✈️ Savage Travel Roasts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "Your travel posts scream 'daddy's credit card' louder than a spoiled kid at Toys R Us."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "You travel the world but still have the cultural awareness of a tourist menu."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "The only journey you need is one of self-discovery, but you keep booking flights instead."
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  "You collect passport stamps like they're personality traits. Spoiler: they're not."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Savage Formulas */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Anatomy of a Savage Roast
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">The False Compliment</h3>
              <p className="text-gray-300 mb-3">Start positive, end devastating:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• "You're pretty... pretty delusional"</li>
                <li>• "Nice photo... of whoever that's supposed to be"</li>
                <li>• "You look great... from really, really far away"</li>
                <li>• "Impressive... how confident you are posting this"</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">The Brutal Truth</h3>
              <p className="text-gray-300 mb-3">Just pure honesty:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• "Your personality is a solid 404 error"</li>
                <li>• "You peaked at birth announcement"</li>
                <li>• "Even your shadow leaves when it gets dark"</li>
                <li>• "You're the human equivalent of a participation trophy"</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">The Comparison</h3>
              <p className="text-gray-300 mb-3">Compare to something worse:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• "Like a dollar store version of a person"</li>
                <li>• "Great Value brand human"</li>
                <li>• "Wish.com celebrity lookalike"</li>
                <li>• "Kirkland Signature personality"</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">The Observation</h3>
              <p className="text-gray-300 mb-3">Point out the obvious:</p>
              <ul className="space-y-2 text-gray-400">
                <li>• "This is why people invented the block button"</li>
                <li>• "Your feed is where creativity goes to die"</li>
                <li>• "This post is giving unseasoned chicken energy"</li>
                <li>• "Main character syndrome with NPC energy"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Most Brutal One-Liners */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            💀 Nuclear-Level One-Liner Roasts
          </h2>
          
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-8 rounded-2xl">
            <div className="grid gap-4">
              <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-red-500">
                "You're the reason they put instructions on shampoo bottles."
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-orange-500">
                "If you were a spice, you'd be flour."
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-red-500">
                "You're about as useful as a screen door on a submarine."
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-orange-500">
                "Your birth certificate is an apology letter from the condom factory."
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-red-500">
                "You bring everyone so much joy... when you leave the room."
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-orange-500">
                "I'd agree with you but then we'd both be wrong."
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-red-500">
                "You're not stupid; you just have bad luck thinking."
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-orange-500">
                "Somewhere out there, a tree is working hard to replace the oxygen you waste."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Deliver */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Deliver a Savage Roast
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-400">1. Timing is Everything</h3>
                <p className="text-gray-300">
                  Wait for the perfect moment. Right after they post something they're proud of. 
                  Maximum devastation requires perfect timing.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-400">2. Keep It Short</h3>
                <p className="text-gray-300">
                  The most savage roasts are concise. Don't write paragraphs - a single 
                  sentence can destroy more effectively than an essay.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-400">3. Act Casual</h3>
                <p className="text-gray-300">
                  Deliver it like you're stating a fact, not trying to roast. The casual 
                  delivery makes it 10x more savage.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">4. Hit the Truth</h3>
                <p className="text-gray-300">
                  The most savage roasts are the ones that are undeniably true. If they 
                  can't argue with it, they're truly destroyed.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">5. No Emoji Needed</h3>
                <p className="text-gray-300">
                  A truly savage roast doesn't need 😂 or 💀. The words alone should 
                  carry the brutality. Let others add the reactions.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">6. Know When to Stop</h3>
                <p className="text-gray-300">
                  One perfect roast is better than five mediocre ones. Drop the bomb 
                  and walk away. Don't dilute the impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-900/20 border border-red-500/50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              ⚠️ Savage Roast Guidelines
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Remember:</strong> With great roasting power comes great responsibility.
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Only roast people who can handle it</li>
                <li>• Never attack real insecurities or trauma</li>
                <li>• Keep it funny, not genuinely hurtful</li>
                <li>• Know when someone's had enough</li>
                <li>• Be ready to get roasted back</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                If someone gets genuinely upset, apologize. A good roaster knows the difference 
                between a burn and actual damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Generator CTA */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-900 to-orange-900 p-8 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Destroy Someone?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Generate personalized savage roasts that are guaranteed to leave marks. 
              Our AI analyzes profiles and creates devastation in seconds.
            </p>
            
            <div className="bg-black/30 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-400">2M+</div>
                  <div className="text-sm text-gray-400">People Destroyed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400">10/10</div>
                  <div className="text-sm text-gray-400">Brutality Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400">2-3s</div>
                  <div className="text-sm text-gray-400">To Devastation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400">100%</div>
                  <div className="text-sm text-gray-400">Savage Guaranteed</div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/roast-generator"
              className="inline-block px-12 py-5 bg-white text-red-900 rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Generate Savage Roast Now →
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Free • No signup • Maximum brutality
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">More Roasting Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roast-styles/savage" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Savage Style Guide</h3>
              <p className="text-sm text-gray-400">Master the art of savage roasting</p>
            </Link>
            <Link href="/how-to-roast-someone-on-instagram" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Roasting Tutorial</h3>
              <p className="text-sm text-gray-400">Learn proper roasting technique</p>
            </Link>
            <Link href="/gen-z-roast-generator-online" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Gen Z Roasts</h3>
              <p className="text-sm text-gray-400">Roasts that hit different</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}