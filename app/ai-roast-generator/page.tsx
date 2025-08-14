import { Metadata } from 'next';
import Link from 'next/link';
import { RoastGeneratorSchema } from '@/components/SEO/RoastGeneratorSchema';
import { FAQSchema } from '@/components/SEO/FAQSchema';

export const metadata: Metadata = {
  title: 'AI Roast Generator - Free Instagram Profile Roaster | No Login Required',
  description: 'Generate hilarious AI-powered roasts for any Instagram profile instantly. Our advanced AI roast generator creates savage, funny, or friendly roasts with no signup needed. Try the best free roast generator online!',
  keywords: 'AI roast generator, free roast generator, Instagram roast generator, profile roaster AI, roast generator no login, automatic roast creator, funny roast generator, savage roast maker, AI insult generator, social media roaster',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/ai-roast-generator'
  },
  openGraph: {
    title: 'AI Roast Generator - Create Hilarious Instagram Roasts Instantly',
    description: 'Generate savage, funny, or friendly roasts for any Instagram profile using our advanced AI. Free, instant, no signup required!',
    url: 'https://www.lookatmyprofile.org/ai-roast-generator',
    type: 'website',
    images: [{
      url: 'https://www.lookatmyprofile.org/api/og?title=AI%20Roast%20Generator%20-%20Free%20Instagram%20Roaster',
      width: 1200,
      height: 630,
      alt: 'AI Roast Generator'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Roast Generator - Free Instagram Profile Roaster',
    description: 'Generate instant AI-powered roasts for any Instagram profile. No signup required!',
    images: ['https://www.lookatmyprofile.org/api/og?title=AI%20Roast%20Generator']
  }
};

const aiRoastFAQs = [
  {
    question: "What is an AI roast generator?",
    answer: "An AI roast generator is an advanced tool that uses artificial intelligence to create humorous, witty, and entertaining roasts based on Instagram profiles. Our AI analyzes profile content, posts, and patterns to generate personalized roasts in various styles."
  },
  {
    question: "How does the AI roast generator work?",
    answer: "Simply enter any Instagram username, choose your preferred roast style (savage, friendly, Gen-Z, or Shakespearean), and our AI instantly analyzes the profile to generate a unique, personalized roast. The entire process takes just seconds!"
  },
  {
    question: "Is the AI roast generator free to use?",
    answer: "Yes! Our AI roast generator is completely free to use with no signup, login, or credit card required. Generate unlimited roasts for any public Instagram profile instantly."
  },
  {
    question: "Can I choose different roast styles?",
    answer: "Absolutely! Our AI roast generator offers multiple styles including Savage (brutal humor), Friendly (playful teasing), Gen-Z (trendy slang), and Shakespearean (classical wit). Each style creates a unique roasting experience."
  },
  {
    question: "Is the AI roast generator safe to use?",
    answer: "Yes, our AI roast generator is completely safe. We don't store any personal data, don't require login credentials, and all roasts are generated for entertainment purposes only. We promote fun, not cyberbullying."
  },
  {
    question: "How accurate is the AI roast generator?",
    answer: "Our AI roast generator uses advanced machine learning to analyze profiles and create relevant, contextual roasts. With over 2 million roasts generated, our AI has been trained to deliver highly entertaining and personalized results."
  }
];

export default function AIRoastGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <RoastGeneratorSchema />
      <FAQSchema faqs={aiRoastFAQs} pageTitle="AI Roast Generator" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            AI Roast Generator
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Generate Hilarious Instagram Roasts in Seconds with Advanced AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/roast-generator"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              Try AI Roast Generator Free →
            </Link>
            <Link 
              href="/download"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full text-lg font-semibold transition-colors"
            >
              📱 Get Mobile App
            </Link>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>2M+ Roasts Generated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>No Login Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Our AI Roast Generator Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Username</h3>
              <p className="text-gray-400">
                Simply type any public Instagram username into our AI roast generator
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Style</h3>
              <p className="text-gray-400">
                Select from Savage, Friendly, Gen-Z, or Shakespearean roast styles
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Roasted</h3>
              <p className="text-gray-400">
                Our AI instantly generates a hilarious, personalized roast
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roast Styles Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            AI Roast Generator Styles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/roast-styles/savage" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-purple-400">🔥 Savage AI Roasts</h3>
              <p className="text-gray-300 mb-4">
                Our most brutal AI roast generator mode. Creates devastating burns that leave no survivors. Perfect for those who can handle the heat.
              </p>
              <p className="text-sm text-gray-500">Popular keywords: brutal roasts, savage burns, harsh insults</p>
            </Link>
            <Link href="/roast-styles/friendly" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-blue-400">😊 Friendly AI Roasts</h3>
              <p className="text-gray-300 mb-4">
                Playful teasing mode of our AI roast generator. Light-hearted jokes that everyone can laugh at without hurt feelings.
              </p>
              <p className="text-sm text-gray-500">Popular keywords: funny roasts, playful jokes, gentle teasing</p>
            </Link>
            <Link href="/roast-styles/gen-z" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-pink-400">💅 Gen-Z AI Roasts</h3>
              <p className="text-gray-300 mb-4">
                Trendy AI roast generator using the latest slang. No cap, these roasts hit different with that bussin' Gen-Z energy.
              </p>
              <p className="text-sm text-gray-500">Popular keywords: gen z humor, trendy roasts, modern slang</p>
            </Link>
            <Link href="/roast-styles/shakespearean" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">🎭 Shakespearean AI Roasts</h3>
              <p className="text-gray-300 mb-4">
                Classical wit from our AI roast generator. Thou shalt be roasted with the eloquence of the Bard himself!
              </p>
              <p className="text-sm text-gray-500">Popular keywords: classical roasts, sophisticated humor, witty insults</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our AI Roast Generator?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">🤖</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced AI Technology</h3>
                <p className="text-gray-400">
                  Our AI roast generator uses cutting-edge machine learning to analyze profiles and create contextually relevant, hilarious roasts every time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
                <p className="text-gray-400">
                  Get your AI-generated roasts in seconds. No waiting, no processing delays - just instant comedy gold.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Roasts</h3>
                <p className="text-gray-400">
                  Each roast is uniquely crafted based on the specific Instagram profile, ensuring relevant and targeted humor.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🔒</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-gray-400">
                  Our AI roast generator requires no login, stores no data, and respects user privacy completely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            AI Roast Generator vs Traditional Roasting
          </h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-900">
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4">Our AI Generator</th>
                  <th className="text-center p-4">Manual Roasting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="p-4">Speed</td>
                  <td className="text-center p-4 text-green-400">Instant (2-3 seconds)</td>
                  <td className="text-center p-4 text-gray-400">Minutes to hours</td>
                </tr>
                <tr>
                  <td className="p-4">Creativity</td>
                  <td className="text-center p-4 text-green-400">Unlimited variations</td>
                  <td className="text-center p-4 text-gray-400">Limited by individual</td>
                </tr>
                <tr>
                  <td className="p-4">Availability</td>
                  <td className="text-center p-4 text-green-400">24/7 instant access</td>
                  <td className="text-center p-4 text-gray-400">Depends on person</td>
                </tr>
                <tr>
                  <td className="p-4">Cost</td>
                  <td className="text-center p-4 text-green-400">Free</td>
                  <td className="text-center p-4 text-gray-400">Time investment</td>
                </tr>
                <tr>
                  <td className="p-4">Consistency</td>
                  <td className="text-center p-4 text-green-400">Always delivers</td>
                  <td className="text-center p-4 text-gray-400">Hit or miss</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Try the Best AI Roast Generator?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join over 2 million users generating hilarious roasts with our advanced AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/roast-generator"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              Start Generating AI Roasts →
            </Link>
            <Link 
              href="/blog"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full text-lg font-semibold transition-colors"
            >
              Learn More About AI Roasting
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-bold mb-6">The Ultimate AI Roast Generator Guide</h2>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">What Makes a Great AI Roast Generator?</h3>
          <p className="text-gray-300 mb-4">
            A superior AI roast generator combines advanced natural language processing with cultural awareness and humor algorithms. Our generator analyzes multiple data points from Instagram profiles including post patterns, caption styles, follower ratios, and visual elements to create contextually relevant roasts that actually land.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">The Technology Behind Our AI Roast Generator</h3>
          <p className="text-gray-300 mb-4">
            Our AI roast generator leverages state-of-the-art machine learning models trained on millions of social media interactions. The system understands context, subtext, and cultural references to generate roasts that are not only funny but also relevant to current trends and Gen-Z humor patterns.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">AI Roast Generator Best Practices</h3>
          <ul className="text-gray-300 space-y-2 mb-4">
            <li>• Always roast public profiles only</li>
            <li>• Choose the appropriate style for your audience</li>
            <li>• Remember it's all in good fun - keep it light</li>
            <li>• Share the best roasts with friends (they'll love it)</li>
            <li>• Try different styles to find your favorite</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Popular AI Roast Generator Searches</h3>
          <p className="text-gray-300 mb-4">
            Users often search for "free AI roast generator," "Instagram roast generator no login," "automatic roast creator," "savage roast generator online," and "funny AI insult generator." Our tool covers all these needs with a single, powerful platform that requires no signup and delivers instant results.
          </p>
        </div>
      </section>

      {/* Enhanced Internal Links */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Full Suite of Tools</h2>
          
          {/* Primary Tools */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link href="/instagram-profile-analyzer" className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="font-semibold mb-1">Profile Analyzer</h3>
              <p className="text-sm text-gray-400">Deep profile analysis</p>
            </Link>
            <Link href="/free-instagram-roast-generator-no-signup" className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-3xl mb-2">🆓</div>
              <h3 className="font-semibold mb-1">Free Generator</h3>
              <p className="text-sm text-gray-400">No signup required</p>
            </Link>
            <Link href="/gen-z-roast-generator-online" className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-3xl mb-2">💯</div>
              <h3 className="font-semibold mb-1">Gen Z Generator</h3>
              <p className="text-sm text-gray-400">Modern slang roasts</p>
            </Link>
            <Link href="/savage-instagram-roasts-examples" className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-3xl mb-2">🔥</div>
              <h3 className="font-semibold mb-1">Savage Examples</h3>
              <p className="text-sm text-gray-400">100+ brutal roasts</p>
            </Link>
          </div>
          
          {/* Roast Styles */}
          <h3 className="text-xl font-semibold mb-4 text-center">Choose Your Style</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link href="/roast-styles/savage" className="text-center p-4 bg-purple-900/30 rounded-lg hover:bg-purple-900/50 transition-colors">
              <h3 className="font-semibold text-red-400">Savage Mode</h3>
              <p className="text-sm text-gray-400">Maximum brutality</p>
            </Link>
            <Link href="/roast-styles/friendly" className="text-center p-4 bg-purple-900/30 rounded-lg hover:bg-purple-900/50 transition-colors">
              <h3 className="font-semibold text-green-400">Friendly Fire</h3>
              <p className="text-sm text-gray-400">Playful teasing</p>
            </Link>
            <Link href="/roast-styles/gen-z" className="text-center p-4 bg-purple-900/30 rounded-lg hover:bg-purple-900/50 transition-colors">
              <h3 className="font-semibold text-pink-400">Gen Z Style</h3>
              <p className="text-sm text-gray-400">No cap fr fr</p>
            </Link>
            <Link href="/roast-styles/shakespearean" className="text-center p-4 bg-purple-900/30 rounded-lg hover:bg-purple-900/50 transition-colors">
              <h3 className="font-semibold text-purple-400">Shakespearean</h3>
              <p className="text-sm text-gray-400">Classical wit</p>
            </Link>
          </div>
          
          {/* Learning Resources */}
          <h3 className="text-xl font-semibold mb-4 text-center">Master the Art</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link href="/ultimate-guide-instagram-roasting" className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold mb-1">Ultimate Guide</h3>
              <p className="text-sm text-gray-400">Complete roasting guide</p>
            </Link>
            <Link href="/how-to-roast-someone-on-instagram" className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold mb-1">How to Roast</h3>
              <p className="text-sm text-gray-400">Step-by-step tutorial</p>
            </Link>
            <Link href="/funny-things-to-comment-on-instagram" className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold mb-1">Funny Comments</h3>
              <p className="text-sm text-gray-400">500+ comment ideas</p>
            </Link>
          </div>
          
          {/* Comparisons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/vs-cleve-ai" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">Compare with Cleve AI</Link>
            <Link href="/vs-olly-social" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">Compare with Olly Social</Link>
            <Link href="/what-is-instagram-roasting" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">What is Roasting?</Link>
            <Link href="/roast-examples" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">See Examples</Link>
            <Link href="/blog" className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">Read Blog</Link>
            <Link href="/download" className="px-4 py-2 bg-purple-600/50 rounded-lg hover:bg-purple-600/70 transition text-sm">Get the App</Link>
          </div>
        </div>
      </section>
    </div>
  );
}