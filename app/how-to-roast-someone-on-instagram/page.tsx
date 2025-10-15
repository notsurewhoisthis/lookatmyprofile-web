import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { HowToSchema } from '@/components/SEO/HowToSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { QuickAnswer, HowToSteps } from '@/components/SEO/FeaturedSnippet';
import { LastUpdated } from '@/components/SEO/LastUpdated';

export const metadata: Metadata = {
  title: 'How to Roast Someone on Instagram - Complete Guide 2025',
  description: 'Learn how to roast someone on Instagram with style and humor. From savage burns to friendly teasing, master the art of Instagram roasting with our AI-powered tools and expert tips.',
  keywords: 'how to roast someone on Instagram, Instagram roasting guide, roasting tips, funny Instagram roasts, roast techniques',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/how-to-roast-someone-on-instagram'
  },
  openGraph: {
    title: 'How to Roast Someone on Instagram - Master the Art',
    description: 'Complete guide to roasting on Instagram. Learn techniques, styles, and get AI-powered roasts instantly.',
    url: 'https://www.lookatmyprofile.org/how-to-roast-someone-on-instagram',
    type: 'article',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'How to Roast Someone on Instagram'
    }]
  }
};

const howToFAQs = [
  {
    question: "What's the best way to roast someone on Instagram?",
    answer: "The best approach combines humor with observation. Look at their posts, bio, and patterns, then craft a roast that's clever but not cruel. Our AI roast generator analyzes profiles to create perfect roasts in seconds."
  },
  {
    question: "How do I roast without being mean?",
    answer: "Use friendly roasting style - focus on playful observations rather than personal attacks. Point out funny patterns or harmless quirks. Always consider if the person would laugh along."
  },
  {
    question: "What should I avoid when roasting on Instagram?",
    answer: "Avoid personal attacks, body shaming, mental health topics, family issues, or anything genuinely hurtful. Good roasts are clever and funny, not cruel or damaging."
  },
  {
    question: "Can I use AI to generate Instagram roasts?",
    answer: "Yes! Our AI roast generator creates personalized roasts based on public Instagram profiles. Choose from 4 styles (Savage, Friendly, Gen-Z, Shakespearean) for the perfect tone."
  },
  {
    question: "What makes a roast go viral on Instagram?",
    answer: "Viral roasts are clever, timely, and relatable. They use current trends, reference popular culture, and have perfect comedic timing. The best roasts make everyone laugh, including the target."
  }
];

export default function HowToRoastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.lookatmyprofile.org" },
          { name: "Guides", url: "https://www.lookatmyprofile.org/guides" },
          { name: "How to Roast on Instagram", url: "https://www.lookatmyprofile.org/how-to-roast-someone-on-instagram" }
        ]}
      />
      <HowToSchema />
      <FAQSchema faqs={howToFAQs} pageTitle="How to Roast Someone on Instagram" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            How to Roast Someone on Instagram
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Master the Art of Instagram Roasting in 2025
          </p>
          <LastUpdated date="2025-01-15T00:00:00Z" publishedDate="2024-08-13T00:00:00Z" />

          {/* Quick Answer for Featured Snippet */}
          <QuickAnswer
            question="How do you roast someone on Instagram?"
            answer="To roast someone on Instagram: (1) Study their profile for patterns and clichés, (2) Choose a specific roasting style (savage, friendly, Gen-Z, or Shakespearean), (3) Focus on behaviors not appearance, (4) Be clever and specific, not cruel, (5) Use current references and slang. Always keep it funny, not hurtful."
            className="my-8"
          />

          {/* Quick Action Box */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl mb-8">
            <p className="text-lg mb-4">
              Want instant roasts? Skip the learning curve!
            </p>
            <Link 
              href="/roast-generator"
              className="inline-block px-6 py-3 bg-white text-purple-900 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Generate AI Roast Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Quick Navigation</h2>
            <ul className="space-y-2">
              <li><a href="#basics" className="text-purple-400 hover:text-purple-300">→ Roasting Basics</a></li>
              <li><a href="#styles" className="text-purple-400 hover:text-purple-300">→ Different Roasting Styles</a></li>
              <li><a href="#techniques" className="text-purple-400 hover:text-purple-300">→ Advanced Techniques</a></li>
              <li><a href="#dos-donts" className="text-purple-400 hover:text-purple-300">→ Do's and Don'ts</a></li>
              <li><a href="#examples" className="text-purple-400 hover:text-purple-300">→ Real Examples</a></li>
              <li><a href="#tools" className="text-purple-400 hover:text-purple-300">→ AI Tools & Resources</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Roasting Basics */}
      <section id="basics" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            The Fundamentals of Instagram Roasting
          </h2>

          <HowToSteps
            steps={[
              {
                title: "Study the Profile Thoroughly",
                description: "Before roasting, analyze their profile for patterns. Look for bio clichés ('Living my best life', 'Wanderlust'), post patterns (all selfies, food pics), caption style (inspirational quotes, emoji overload), filter abuse, and follower-to-following ratio. The best roasts are specific and observational."
              },
              {
                title: "Find Recurring Patterns",
                description: "Great roasts identify recurring themes and behaviors. Does every photo have the same pose? Do they post motivational quotes every Monday? Are all their captions novels? Do they use 50 hashtags per post? These patterns are comedy gold for roasting material."
              },
              {
                title: "Choose Your Roasting Style",
                description: "Select from Savage (brutal burns), Friendly (playful teasing), Gen-Z (current slang), or Shakespearean (eloquent insults). Match your style to your audience and relationship with the target. Consider their humor threshold."
              },
              {
                title: "Focus on One Specific Angle",
                description: "Pick one specific aspect to roast rather than trying to roast everything. Targeting their most roastable trait (excessive filters, caption clichés, posting frequency) creates maximum impact and keeps your roast sharp and memorable."
              },
              {
                title: "Deliver with Perfect Timing",
                description: "Timing is everything. Roast right after they post something particularly roastable, use current trends and references, and ensure your audience is online and engaged. A well-timed roast can go viral, while a late roast falls flat."
              }
            ]}
            className="mb-8"
          />
        </div>
      </section>

      {/* Roasting Styles */}
      <section id="styles" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Choose Your Roasting Style
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-2xl font-bold mb-3 text-red-400">🔥 Savage Style</h3>
              <p className="text-gray-300 mb-3">
                No mercy, maximum burn. For thick-skinned friends only.
              </p>
              <p className="text-sm italic text-gray-400">
                Example: "Your feed has more filters than a cigarette factory. Even your 
                personality comes with Valencia preset."
              </p>
              <Link href="/roast-styles/savage" className="inline-block mt-3 text-red-400 hover:underline">
                Learn Savage Roasting →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-2xl font-bold mb-3 text-green-400">😊 Friendly Fire</h3>
              <p className="text-gray-300 mb-3">
                Playful teasing that everyone can laugh at.
              </p>
              <p className="text-sm italic text-gray-400">
                Example: "I love how you take 47 selfies to post one. Your camera roll has 
                more faces than Mount Rushmore."
              </p>
              <Link href="/roast-styles/friendly" className="inline-block mt-3 text-green-400 hover:underline">
                Master Friendly Roasting →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-6 rounded-lg border border-pink-500/30">
              <h3 className="text-2xl font-bold mb-3 text-pink-400">💯 Gen-Z Mode</h3>
              <p className="text-gray-300 mb-3">
                Using current slang and TikTok references.
              </p>
              <p className="text-sm italic text-gray-400">
                Example: "The way you use hashtags is giving millennial energy. This whole 
                vibe is not it, bestie. Touch grass immediately."
              </p>
              <Link href="/roast-styles/gen-z" className="inline-block mt-3 text-pink-400 hover:underline">
                Gen-Z Roasting Guide →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/30 to-purple-900/30 p-6 rounded-lg border border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">🎭 Shakespearean</h3>
              <p className="text-gray-300 mb-3">
                Eloquent insults with classical flair.
              </p>
              <p className="text-sm italic text-gray-400">
                Example: "Thy vanity doth overflow like wine from a broken cask. Methinks 
                thou art more filtered than the Thames itself."
              </p>
              <Link href="/roast-styles/shakespearean" className="inline-block mt-3 text-yellow-400 hover:underline">
                Classical Roasting →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Techniques */}
      <section id="techniques" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Advanced Roasting Techniques
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">The Comparison Roast</h3>
              <p className="text-gray-300 mb-3">
                Compare their profile to something unexpected but accurate.
              </p>
              <p className="text-sm bg-gray-900 p-3 rounded italic">
                "Your Instagram aesthetic is like a clearance rack at Target - trying to be 
                trendy but somehow always a season behind."
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">The Statistical Burn</h3>
              <p className="text-gray-300 mb-3">
                Use numbers and data for precision roasting.
              </p>
              <p className="text-sm bg-gray-900 p-3 rounded italic">
                "237 followers but following 4,832 people? Your follow-back rate has worse 
                odds than winning the lottery."
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">The Timeline Roast</h3>
              <p className="text-gray-300 mb-3">
                Reference their posting history for deeper burns.
              </p>
              <p className="text-sm bg-gray-900 p-3 rounded italic">
                "Still posting gym selfies from that one week you worked out in January? 
                That New Year's resolution aged like milk."
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">The Caption Call-Out</h3>
              <p className="text-gray-300 mb-3">
                Target their caption game specifically.
              </p>
              <p className="text-sm bg-gray-900 p-3 rounded italic">
                "Your captions read like a fortune cookie had a mental breakdown. 
                'Live, Laugh, Love' called - they want their originality back."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section id="dos-donts" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Roasting Etiquette: Do's and Don'ts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-2xl font-bold mb-4 text-green-400">✅ DO's</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Keep it clever and witty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Target behaviors, not appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Know your audience's humor threshold</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Use current references and trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Make it specific to their profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Time your roasts for maximum impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span>Be ready to receive roasts back</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-2xl font-bold mb-4 text-red-400">❌ DON'Ts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Never body shame or appearance attack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Avoid mental health topics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Don't bring up family issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Skip financial struggles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Never use racist/sexist content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Don't roast strangers without context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">→</span>
                  <span>Avoid repetitive or stale jokes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section id="examples" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Real Roasting Examples by Profile Type
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">The Fitness Influencer</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">Profile traits: Gym selfies, protein shakes, "no pain no gain"</p>
                <p className="italic bg-gray-900 p-3 rounded">
                  "Your personality has less depth than your ab definition. Those protein shakes 
                  can't fill the void where your conversation skills should be."
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">The Travel Blogger</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">Profile traits: "Wanderlust", airplane emojis, sunset photos</p>
                <p className="italic bg-gray-900 p-3 rounded">
                  "Your bio says 'wanderlust' but your last 10 posts are from the same Starbucks. 
                  That passport has seen less action than a library card."
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">The Foodie</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">Profile traits: Restaurant tags, food pics, "foodie" bio</p>
                <p className="italic bg-gray-900 p-3 rounded">
                  "You've photographed more meals than a health inspector. Your food gets more 
                  likes than your selfies - even your followers know what's more interesting."
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">The Aspiring Influencer</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">Profile traits: #blessed, "CEO", discount codes</p>
                <p className="italic bg-gray-900 p-3 rounded">
                  "CEO of what? Bad lighting and desperate hashtags? Your discount code has been 
                  used less than a gym membership in February."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="tools" className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Level Up with AI Roasting Tools
          </h2>
          
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Use AI for Roasting?</h3>
            <ul className="space-y-3 text-gray-200 mb-6">
              <li>✨ Instant roast generation in 2-3 seconds</li>
              <li>✨ Analyzes entire profiles for deeper burns</li>
              <li>✨ 4 different styles to match any situation</li>
              <li>✨ Never run out of creative roasts</li>
              <li>✨ Perfect timing and delivery every time</li>
            </ul>
            <Link 
              href="/roast-generator"
              className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              Try Our AI Roast Generator →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ai-roast-generator" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2">AI Roast Generator</h3>
              <p className="text-gray-400">
                Our flagship tool that analyzes Instagram profiles and generates personalized roasts
              </p>
            </Link>
            
            <Link href="/instagram-profile-analyzer" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2">Profile Analyzer</h3>
              <p className="text-gray-400">
                Deep dive into any Instagram profile for roasting ammunition
              </p>
            </Link>

            <Link href="/ultimate-guide-instagram-roasting" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2">Ultimate Roasting Guide</h3>
              <p className="text-gray-400">
                8-chapter comprehensive guide to mastering Instagram roasting
              </p>
            </Link>

            <Link href="/download" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
              <p className="text-gray-400">
                Get our iOS app for roasting on the go with exclusive features
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become a Roasting Master?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join over 2 million users who've elevated their Instagram roasting game
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/roast-generator"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
            >
              Start Roasting Now
            </Link>
            <Link 
              href="/blog"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full text-lg font-semibold transition"
            >
              Read More Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}