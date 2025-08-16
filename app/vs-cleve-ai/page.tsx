import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { ComparisonTable } from '@/components/SEO/ComparisonTable';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';

export const metadata: Metadata = {
  title: 'Roast a Profile vs Cleve AI - Complete Comparison 2025',
  description: 'Compare Roast a Profile and Cleve AI side-by-side. See features, pricing, roast quality, and find out which Instagram roast generator is best for you.',
  keywords: 'Roast a Profile vs Cleve AI, Instagram roast generator comparison, Cleve AI alternative, best roast generator, AI roaster comparison',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/vs-cleve-ai'
  },
  openGraph: {
    title: 'Roast a Profile vs Cleve AI - Which Roast Generator is Better?',
    description: 'Detailed comparison of Roast a Profile and Cleve AI. Features, pricing, and roast quality compared.',
    url: 'https://www.lookatmyprofile.org/vs-cleve-ai',
    type: 'article',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Roast a Profile vs Cleve AI Comparison'
    }]
  }
};

const comparisonFAQs = [
  {
    question: "What's the main difference between Roast a Profile and Cleve AI?",
    answer: "Roast a Profile focuses on entertainment with 4 distinct roast styles and no login required, while Cleve AI targets professionals with multi-platform support but requires registration."
  },
  {
    question: "Which roast generator is free?",
    answer: "Roast a Profile is completely free with unlimited roasts and no signup. Cleve AI offers limited free roasts before requiring a paid subscription."
  },
  {
    question: "Which has better roast quality?",
    answer: "Roast a Profile excels at humorous, Gen-Z focused roasts with 4 style options. Cleve AI provides more professional-oriented content analysis."
  },
  {
    question: "Can both analyze private profiles?",
    answer: "No, both Roast a Profile and Cleve AI only work with public Instagram profiles for privacy reasons."
  },
  {
    question: "Which is faster?",
    answer: "Roast a Profile generates roasts in 2-3 seconds with no login. Cleve AI requires signup and takes 5-10 seconds per roast."
  }
];

export default function VsCleveAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.lookatmyprofile.org" },
          { name: "Comparisons", url: "https://www.lookatmyprofile.org/comparisons" },
          { name: "vs Cleve AI", url: "https://www.lookatmyprofile.org/vs-cleve-ai" }
        ]}
      />
      <FAQSchema faqs={comparisonFAQs} pageTitle="Roast a Profile vs Cleve AI" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Roast a Profile vs Cleve AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Complete Comparison of Instagram Roast Generators (2025)
          </p>
          
          {/* Quick Winner Badge */}
          <div className="inline-block bg-green-900 bg-opacity-30 border border-green-500 rounded-lg px-6 py-3 mb-8">
            <p className="text-green-400 font-semibold">
              🏆 Winner: Roast a Profile - Free, Faster, More Fun
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Feature-by-Feature Comparison
          </h2>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-900">
                <tr>
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4">
                    <div className="text-purple-400 font-bold">Roast a Profile</div>
                    <div className="text-sm text-gray-400">(Our Platform)</div>
                  </th>
                  <th className="text-center p-4">
                    <div className="text-blue-400 font-bold">Cleve AI</div>
                    <div className="text-sm text-gray-400">(Competitor)</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {/* Pricing */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Pricing</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">✅ 100% Free</span>
                    <div className="text-sm text-gray-400">Unlimited roasts</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Freemium</span>
                    <div className="text-sm text-gray-400">$9.99/month pro</div>
                  </td>
                </tr>
                
                {/* Login Required */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Login Required</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">✅ No Login</span>
                    <div className="text-sm text-gray-400">Instant access</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-400">❌ Registration Required</span>
                    <div className="text-sm text-gray-400">Email verification</div>
                  </td>
                </tr>
                
                {/* Roast Styles */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Roast Styles</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">4 Styles</span>
                    <div className="text-sm text-gray-400">Savage, Friendly, Gen-Z, Shakespearean</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">2 Styles</span>
                    <div className="text-sm text-gray-400">Professional, Casual</div>
                  </td>
                </tr>
                
                {/* Speed */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Generation Speed</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">2-3 seconds</span>
                    <div className="text-sm text-gray-400">Lightning fast</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">5-10 seconds</span>
                    <div className="text-sm text-gray-400">After login</div>
                  </td>
                </tr>
                
                {/* Platform Support */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Platform Support</td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Instagram Only</span>
                    <div className="text-sm text-gray-400">Specialized focus</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-green-400">Multi-Platform</span>
                    <div className="text-sm text-gray-400">Instagram, LinkedIn, Twitter</div>
                  </td>
                </tr>
                
                {/* AI Quality */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">AI Quality</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">✅ Advanced</span>
                    <div className="text-sm text-gray-400">2M+ roasts generated</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-green-400">✅ Advanced</span>
                    <div className="text-sm text-gray-400">Good quality</div>
                  </td>
                </tr>
                
                {/* Mobile App */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Mobile App</td>
                  <td className="text-center p-4">
                    <span className="text-green-400">✅ iOS App</span>
                    <div className="text-sm text-gray-400">Native experience</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Web Only</span>
                    <div className="text-sm text-gray-400">Mobile responsive</div>
                  </td>
                </tr>
                
                {/* Privacy */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Privacy</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">✅ No Data Storage</span>
                    <div className="text-sm text-gray-400">Complete anonymity</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Account Required</span>
                    <div className="text-sm text-gray-400">Stores user data</div>
                  </td>
                </tr>
                
                {/* User Rating */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">User Rating</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">4.8/5 ⭐</span>
                    <div className="text-sm text-gray-400">2,384 reviews</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">4.2/5 ⭐</span>
                    <div className="text-sm text-gray-400">432 reviews</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Roast a Profile Over Cleve AI?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">🎯 Entertainment Focused</h3>
              <p className="text-gray-300">
                While Cleve AI targets professionals, we're all about fun! Our roasts are designed to make you laugh, not analyze your professional presence.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">🚀 Zero Friction</h3>
              <p className="text-gray-300">
                No signup, no email, no hassle. Cleve AI's registration process takes longer than generating 10 roasts on our platform!
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">💰 Always Free</h3>
              <p className="text-gray-300">
                Unlike Cleve AI's $9.99/month premium tier, we believe great roasts should be free for everyone, always.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">🎭 More Variety</h3>
              <p className="text-gray-300">
                4 unique roast styles vs Cleve AI's 2. From Shakespearean elegance to Gen-Z chaos, we've got every mood covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Each Platform */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            When to Use Each Platform
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Choose Roast a Profile If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>You want instant roasts without signup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>You're looking for entertainment and humor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>You value privacy and anonymity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>You want multiple roast style options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>You prefer a free service</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Choose Cleve AI If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>You need multi-platform analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>You want professional insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>You don't mind creating an account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>You need LinkedIn/Twitter analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>You're okay with paid features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Users Say About Both Platforms
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "Tried both platforms. Roast a Profile is way more fun and the fact it's free with no signup makes it a no-brainer. Cleve AI feels too corporate."
                  </p>
                  <p className="text-sm text-gray-500">- Jessica M., verified user</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "Cleve AI has more platforms but for Instagram roasting specifically, Roast a Profile wins. The Gen-Z mode is hilarious!"
                  </p>
                  <p className="text-sm text-gray-500">- Tyler K., Instagram influencer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "I use Roast a Profile for fun with friends and considered Cleve AI for work, but honestly, Roast a Profile does both better and it's free."
                  </p>
                  <p className="text-sm text-gray-500">- Maria G., social media manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-8 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Verdict: Roast a Profile Wins
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              For Instagram roasting, Roast a Profile offers a superior experience with no barriers, 
              more variety, and completely free access. While Cleve AI has its place for professional 
              multi-platform analysis, we're the clear winner for entertainment and ease of use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/roast-generator"
                className="px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
              >
                Try Roast a Profile Free →
              </Link>
              <Link 
                href="/comparisons"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full text-lg font-semibold transition-colors"
              >
                See More Comparisons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Internal Links */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Complete Roasting Platform</h2>
          
          {/* Main Tools */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link href="/ai-roast-generator" className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg hover:from-purple-900/50 hover:to-pink-900/50 transition">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold mb-1 text-purple-400">AI Roast Generator</h3>
              <p className="text-sm text-gray-400">Advanced AI roasting</p>
            </Link>
            <Link href="/instagram-profile-analyzer" className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg hover:from-blue-900/50 hover:to-purple-900/50 transition">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold mb-1 text-blue-400">Profile Analyzer</h3>
              <p className="text-sm text-gray-400">Deep profile insights</p>
            </Link>
            <Link href="/free-instagram-roast-generator-no-signup" className="text-center p-4 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-lg hover:from-green-900/50 hover:to-blue-900/50 transition">
              <div className="text-3xl mb-2">🆓</div>
              <h3 className="font-semibold mb-1 text-green-400">Free Generator</h3>
              <p className="text-sm text-gray-400">No signup required</p>
            </Link>
            <Link href="/gen-z-roast-generator-online" className="text-center p-4 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-lg hover:from-pink-900/50 hover:to-purple-900/50 transition">
              <div className="text-3xl mb-2">💅</div>
              <h3 className="font-semibold mb-1 text-pink-400">Gen Z Generator</h3>
              <p className="text-sm text-gray-400">Modern slang roasts</p>
            </Link>
          </div>
          
          {/* Comparisons */}
          <h3 className="text-xl font-semibold mb-4 text-center text-purple-400">Platform Comparisons</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link href="/vs-olly-social" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-orange-400 mb-1">vs Olly Social</h4>
              <p className="text-xs text-gray-400">Intensity controls comparison</p>
            </Link>
            <Link href="/vs-roast-master" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-yellow-400 mb-1">vs Roast Master</h4>
              <p className="text-xs text-gray-400">Classic roaster battle</p>
            </Link>
            <Link href="/instagram-roaster" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-red-400 mb-1">Instagram Roaster</h4>
              <p className="text-xs text-gray-400">Premium roasting tool</p>
            </Link>
          </div>
          
          {/* Roast Styles */}
          <h3 className="text-xl font-semibold mb-4 text-center text-purple-400">Roasting Styles</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link href="/roast-styles/savage" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-red-400 mb-1">🔥 Savage</h4>
              <p className="text-xs text-gray-400">Brutal burns</p>
            </Link>
            <Link href="/roast-styles/friendly" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-green-400 mb-1">😊 Friendly</h4>
              <p className="text-xs text-gray-400">Playful teasing</p>
            </Link>
            <Link href="/roast-styles/gen-z" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-pink-400 mb-1">💯 Gen Z</h4>
              <p className="text-xs text-gray-400">Modern slang</p>
            </Link>
            <Link href="/roast-styles/shakespearean" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-purple-400 mb-1">🎭 Shakespearean</h4>
              <p className="text-xs text-gray-400">Eloquent burns</p>
            </Link>
          </div>
          
          {/* Resources */}
          <h3 className="text-xl font-semibold mb-4 text-center text-purple-400">Learn & Explore</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link href="/ultimate-guide-instagram-roasting" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">📚 Ultimate Guide</h4>
              <p className="text-sm text-gray-400">Complete roasting guide</p>
            </Link>
            <Link href="/how-to-roast-someone-on-instagram" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">🎯 How to Roast</h4>
              <p className="text-sm text-gray-400">Step-by-step tutorial</p>
            </Link>
            <Link href="/savage-instagram-roasts-examples" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">💀 Savage Examples</h4>
              <p className="text-sm text-gray-400">100+ brutal roasts</p>
            </Link>
            <Link href="/funny-things-to-comment-on-instagram" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">💬 Funny Comments</h4>
              <p className="text-sm text-gray-400">500+ comment ideas</p>
            </Link>
            <Link href="/roast-examples" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">📝 Roast Examples</h4>
              <p className="text-sm text-gray-400">Real generator results</p>
            </Link>
            <Link href="/what-is-instagram-roasting" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">❓ What is Roasting?</h4>
              <p className="text-sm text-gray-400">Culture and history</p>
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link href="/blog" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm">Blog</Link>
            <Link href="/faq" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm">FAQ</Link>
            <Link href="/ai-profile-analyzer" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm">AI Analyzer</Link>
            <Link href="/download" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition text-sm font-semibold">Download App</Link>
          </div>
          
          {/* Footer Navigation */}
          <div className="text-center text-sm text-gray-400">
            <p>
              <Link href="/" className="hover:text-purple-400 transition">Home</Link> • 
              <Link href="/roast-generator" className="hover:text-purple-400 transition mx-2">Roast Generator</Link> • 
              <Link href="/support" className="hover:text-purple-400 transition mx-2">Support</Link> • 
              <Link href="/privacy" className="hover:text-purple-400 transition mx-2">Privacy</Link> • 
              <Link href="/terms" className="hover:text-purple-400 transition mx-2">Terms</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}