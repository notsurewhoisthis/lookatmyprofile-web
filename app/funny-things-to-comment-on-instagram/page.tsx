import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Funny Things to Comment on Instagram - 500+ Hilarious Ideas',
  description: 'Discover 500+ funny things to comment on Instagram posts. From witty one-liners to savage roasts, get AI-generated comments that will make everyone laugh.',
  keywords: 'funny Instagram comments, funny things to comment, Instagram comment ideas, witty comments, funny replies Instagram',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/funny-things-to-comment-on-instagram'
  },
  openGraph: {
    title: '500+ Funny Things to Comment on Instagram Posts',
    description: 'Never run out of hilarious Instagram comments. Get witty replies, savage roasts, and funny reactions for any post.',
    url: 'https://www.lookatmyprofile.org/funny-things-to-comment-on-instagram',
    type: 'article',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Funny Instagram Comments'
    }]
  }
};

const commentFAQs = [
  {
    question: "What are the funniest things to comment on Instagram?",
    answer: "The funniest comments are unexpected, clever, and match the post's vibe. Use wordplay, pop culture references, or observational humor. Our AI generator creates personalized funny comments based on any post type."
  },
  {
    question: "How do I make my Instagram comments funnier?",
    answer: "Use timing, be specific to the post, add unexpected twists, use current memes, and match the poster's energy. Avoid generic comments like 'LOL' - be creative and original."
  },
  {
    question: "What should I comment on my friend's selfie?",
    answer: "Try playful roasts like 'Dropped your crown, king/queen' or 'This pic just raised the bar for everyone else (the bar was on the floor but still)'. Keep it friendly but memorable."
  },
  {
    question: "Can AI help me write funny Instagram comments?",
    answer: "Yes! Our AI roast generator analyzes posts and creates hilarious, contextual comments in different styles - from savage roasts to friendly jokes."
  },
  {
    question: "What are good funny comments for food posts?",
    answer: "Try 'This meal looks better than my future' or 'My mouth just filed a restraining order against my diet'. Food posts are perfect for exaggerated reactions."
  }
];

export default function FunnyCommentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.lookatmyprofile.org" },
          { name: "Content Ideas", url: "https://www.lookatmyprofile.org/content" },
          { name: "Funny Instagram Comments", url: "https://www.lookatmyprofile.org/funny-things-to-comment-on-instagram" }
        ]}
      />
      <FAQSchema faqs={commentFAQs} pageTitle="Funny Things to Comment on Instagram" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            500+ Funny Things to Comment on Instagram
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Never Run Out of Hilarious Comments Again
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 justify-center mb-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span>500+ Comment Ideas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>15 Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span>AI-Powered Generator</span>
            </div>
          </div>

          {/* Quick Generator CTA */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl">
            <p className="text-lg mb-4">
              Get instant personalized comments with AI
            </p>
            <Link 
              href="/roast-generator"
              className="inline-block px-6 py-3 bg-white text-purple-900 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Generate Funny Comments →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Jump to Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <a href="#selfies" className="text-purple-400 hover:text-purple-300">📸 Selfie Comments</a>
              <a href="#food" className="text-purple-400 hover:text-purple-300">🍕 Food Posts</a>
              <a href="#gym" className="text-purple-400 hover:text-purple-300">💪 Gym & Fitness</a>
              <a href="#travel" className="text-purple-400 hover:text-purple-300">✈️ Travel Photos</a>
              <a href="#couples" className="text-purple-400 hover:text-purple-300">💑 Couple Posts</a>
              <a href="#pets" className="text-purple-400 hover:text-purple-300">🐕 Pet Pictures</a>
              <a href="#fashion" className="text-purple-400 hover:text-purple-300">👗 Fashion & OOTD</a>
              <a href="#throwback" className="text-purple-400 hover:text-purple-300">📅 Throwback Posts</a>
              <a href="#motivational" className="text-purple-400 hover:text-purple-300">💭 Motivational Quotes</a>
            </div>
          </div>
        </div>
      </section>

      {/* Selfie Comments */}
      <section id="selfies" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            📸 Funny Comments for Selfies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Friendly Roasts</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"This pic just crashed Instagram's servers 🔥"</li>
                <li>"Excuse me, this level of beauty should be illegal"</li>
                <li>"I showed this to my plants and now they're growing faster"</li>
                <li>"NASA called, they can see your glow from space"</li>
                <li>"This energy could power a small city"</li>
                <li>"Main character energy detected 📈"</li>
                <li>"The algorithm is shaking"</li>
                <li>"Serving looks and destroying lives"</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Savage Mode</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"Which filter is carrying this team?"</li>
                <li>"Your camera roll: 📸📸📸📸📸 This one: 📸"</li>
                <li>"The 47 rejected selfies are crying rn"</li>
                <li>"This angle doing more work than you at the gym"</li>
                <li>"Even FaceTune said 'good luck'"</li>
                <li>"Your confidence is writing checks your pixels can't cash"</li>
                <li>"This pic has more layers than an onion"</li>
                <li>"The lighting is doing charity work here"</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-900/20 rounded-lg">
            <p className="text-sm text-gray-300">
              💡 <strong>Pro Tip:</strong> Match the energy of your relationship. Save savage comments for close friends who appreciate the humor!
            </p>
          </div>
        </div>
      </section>

      {/* Food Comments */}
      <section id="food" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🍕 Funny Comments for Food Posts
          </h2>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
              <li>"This meal looks better than my entire future"</li>
              <li>"My mouth just filed a lawsuit against my eyes"</li>
              <li>"This is food porn and I'm calling the cops"</li>
              <li>"I can feel my abs disappearing just looking at this"</li>
              <li>"Relationship status: In love with this plate"</li>
              <li>"This meal has more layers than my personality"</li>
              <li>"BRB, licking my screen"</li>
              <li>"My diet looked at this and packed its bags"</li>
              <li>"This is why I have trust issues with salad"</li>
              <li>"Reported for making me hungry at 2am"</li>
              <li>"This food has better lighting than my selfies"</li>
              <li>"Gordon Ramsay found dead in a ditch"</li>
              <li>"My instant noodles are filing for divorce"</li>
              <li>"This meal could solve world peace"</li>
              <li>"Calories don't count if I'm just looking, right?"</li>
              <li>"This is giving main course energy"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gym & Fitness Comments */}
      <section id="gym" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            💪 Funny Comments for Gym Posts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Supportive Humor</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"Meanwhile I got winded opening this app"</li>
                <li>"This is why I keep you around - motivation from my couch"</li>
                <li>"Your gym membership is getting its money's worth"</li>
                <li>"Muscles loading... 99% complete"</li>
                <li>"Weird flex but okay (literally)"</li>
                <li>"The gym's favorite child"</li>
                <li>"Making the rest of us look like potatoes"</li>
                <li>"This is your sign to skip leg day"</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Playful Roasts</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"The gym bathroom mirror's favorite customer"</li>
                <li>"How many gym selfies until you get abs?"</li>
                <li>"Your personality needs this workout too"</li>
                <li>"Plot twist: This is the parking lot"</li>
                <li>"Same gym outfit since 2019, respect"</li>
                <li>"The weights are just props at this point"</li>
                <li>"January 1st energy in December"</li>
                <li>"This is the 'before' picture, right?"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Comments */}
      <section id="travel" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ✈️ Funny Comments for Travel Photos
          </h2>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
              <li>"My bank account is crying looking at this"</li>
              <li>"Meanwhile I'm traveling from my bed to the fridge"</li>
              <li>"This view is almost as good as my screensaver"</li>
              <li>"Weird way to make us all jealous but okay"</li>
              <li>"My passport is gathering dust rn"</li>
              <li>"Living everyone else's dream casually"</li>
              <li>"Google Earth found shaking"</li>
              <li>"The travel blogger energy is strong"</li>
              <li>"Your credit card company loves you"</li>
              <li>"This is why I follow you (for free trips)"</li>
              <li>"National Geographic wants their photo back"</li>
              <li>"Making my backyard look bad"</li>
              <li>"Wanderlust or trust fund?"</li>
              <li>"My vacation is scrolling through yours"</li>
              <li>"Plot twist: This is just good Photoshop"</li>
              <li>"Living that Windows wallpaper life"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Couple Posts Comments */}
      <section id="couples" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            💑 Funny Comments for Couple Posts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-900/20 p-6 rounded-lg border border-pink-500/30">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Sweet & Funny</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"This is disgusting. More please"</li>
                <li>"My future therapist will hear about this"</li>
                <li>"Get a room (and invite us, we're bored)"</li>
                <li>"This level of cute should require a permit"</li>
                <li>"Y'all hiring a third wheel?"</li>
                <li>"Couple goals or my emotional damage?"</li>
                <li>"Netflix and chill evolved into this"</li>
                <li>"The algorithm said 'make them feel single'"</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Playful Teasing</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"Which one of you lost a bet?"</li>
                <li>"Hostage situation or relationship?"</li>
                <li>"Someone check if they're blinking SOS"</li>
                <li>"This is why I have trust issues"</li>
                <li>"Happy 3-month anniversary again"</li>
                <li>"Who forced who into this photo?"</li>
                <li>"The Notebook called, they want their scene back"</li>
                <li>"PDA police have been notified"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Comments */}
      <section id="pets" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🐕 Funny Comments for Pet Pictures
          </h2>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
              <li>"This is the only influencer I trust"</li>
              <li>"Better dressed than me honestly"</li>
              <li>"Tell them I would die for them"</li>
              <li>"This good boy/girl is carrying your whole account"</li>
              <li>"The real star of this profile"</li>
              <li>"I'm only here for the pet content"</li>
              <li>"CEO of being adorable"</li>
              <li>"This energy cured my depression"</li>
              <li>"Reporting for excessive cuteness"</li>
              <li>"Can they run for president?"</li>
              <li>"Better hair day than me"</li>
              <li>"Living their best life while we suffer"</li>
              <li>"The only valid content on this app"</li>
              <li>"Protect at all costs"</li>
              <li>"This is why the internet was invented"</li>
              <li>"Main character and we're all NPCs"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fashion Comments */}
      <section id="fashion" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            👗 Funny Comments for Fashion/OOTD Posts
          </h2>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
              <li>"Fashion Nova shaking in their boots"</li>
              <li>"This outfit costs more than my rent"</li>
              <li>"Meanwhile I'm in the same hoodie for day 4"</li>
              <li>"The mannequin wants its job back"</li>
              <li>"Serving looks and bankruptcy"</li>
              <li>"This fit goes harder than my finals"</li>
              <li>"Dressed like you own the place (do you?)"</li>
              <li>"The mirror's favorite customer"</li>
              <li>"This is why I follow fashion week from bed"</li>
              <li>"Even the clothes look confident"</li>
              <li>"My sweatpants are offended"</li>
              <li>"This outfit has more personality than me"</li>
              <li>"Vogue editors found unemployed"</li>
              <li>"The drip is drowning us"</li>
              <li>"Outfit repeating could never"</li>
              <li>"This is giving main character in a rom-com"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Comment Generator */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Quick Comment Formulas That Always Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">The Exaggeration</h3>
              <p className="text-gray-300 mb-3">Take something small and blow it up:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• "This [thing] could solve world hunger"</li>
                <li>• "NASA called about [observation]"</li>
                <li>• "[Subject] found dead in a ditch"</li>
                <li>• "The UN wants to discuss this [thing]"</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">The Comparison</h3>
              <p className="text-gray-300 mb-3">Compare to something unexpected:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• "This has more [X] than [Y]"</li>
                <li>• "Looking like a [random thing]"</li>
                <li>• "[Thing] wants their [thing] back"</li>
                <li>• "This is giving [vibe] energy"</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">The Self-Deprecation</h3>
              <p className="text-gray-300 mb-3">Make it about your reaction:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• "Meanwhile I'm [doing less impressive thing]"</li>
                <li>• "This is why I [self-roast]"</li>
                <li>• "My [thing] could never"</li>
                <li>• "And I'm over here [struggling]"</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">The Pop Culture</h3>
              <p className="text-gray-300 mb-3">Reference current trends:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• "[Celebrity] is shaking"</li>
                <li>• "This is giving [TV show] vibes"</li>
                <li>• "[Movie quote] but make it fashion"</li>
                <li>• "Tell me you're [X] without telling me"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Generator CTA */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-8 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Run Out of Funny Comments
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              Generate unlimited personalized comments with our AI roast generator. 
              Perfect for any post, any style, any mood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/roast-generator"
                className="px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
              >
                Try AI Comment Generator
              </Link>
              <Link 
                href="/download"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full text-lg font-semibold transition"
              >
                Get Mobile App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">More Instagram Content Ideas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/how-to-roast-someone-on-instagram" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">How to Roast on Instagram</h3>
              <p className="text-sm text-gray-400">Master the art of Instagram roasting</p>
            </Link>
            <Link href="/ultimate-guide-instagram-roasting" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Ultimate Roasting Guide</h3>
              <p className="text-sm text-gray-400">8-chapter comprehensive guide</p>
            </Link>
            <Link href="/ai-roast-generator" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">AI Roast Generator</h3>
              <p className="text-sm text-gray-400">Instant personalized roasts</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}