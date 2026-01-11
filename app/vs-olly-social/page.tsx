import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Roast a Profile vs Olly Social - Instagram Roaster Comparison 2025',
  description: 'Compare Roast a Profile with Olly Social. See intensity controls, personalization features, pricing, and discover which Instagram roast generator suits you best.',
  keywords: 'Roast a Profile vs Olly Social, Olly Social alternative, Instagram roast generator comparison, customizable roasts, best roast app',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/vs-olly-social'
  },
  openGraph: {
    title: 'Roast a Profile vs Olly Social - Which Roaster is Better?',
    description: 'Complete comparison of Roast a Profile and Olly Social roast generators. Features, customization, and pricing compared.',
    url: 'https://www.lookatmyprofile.org/vs-olly-social',
    type: 'article',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Roast a Profile vs Olly Social'
    }]
  }
};

const comparisonFAQs = [
  {
    question: "What's the key difference between Roast a Profile and Olly Social?",
    answer: "Roast a Profile offers 4 distinct roast styles with no signup required and is completely free. Olly Social features intensity sliders and name personalization but requires account creation and has paid tiers."
  },
  {
    question: "Which platform has better customization?",
    answer: "Olly Social offers intensity sliders (1-10 scale) for fine-tuning roasts. Roast a Profile provides 4 pre-set styles (Savage, Friendly, Gen-Z, Shakespearean) for different moods."
  },
  {
    question: "Is Olly Social free like Roast a Profile?",
    answer: "No. Roast a Profile is 100% free forever. Olly Social offers 5 free roasts daily, then requires a $7.99/month subscription for unlimited access."
  },
  {
    question: "Which generates roasts faster?",
    answer: "Roast a Profile generates roasts in 2-3 seconds with no login. Olly Social takes 4-7 seconds after account setup."
  },
  {
    question: "Can I personalize roasts with names?",
    answer: "Olly Social allows adding custom names to roasts. Roast a Profile focuses on profile-based personalization without manual name input."
  }
];

export default function VsOllySocialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.lookatmyprofile.org" },
          { name: "Comparisons", url: "https://www.lookatmyprofile.org/comparisons" },
          { name: "vs Olly Social", url: "https://www.lookatmyprofile.org/vs-olly-social" }
        ]}
      />
      <FAQSchema faqs={comparisonFAQs} pageTitle="Roast a Profile vs Olly Social" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Roast a Profile vs Olly Social
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The Ultimate Instagram Roast Generator Showdown (2025)
          </p>
          
          {/* Quick Winner Badge */}
          <div className="inline-block bg-green-900 bg-opacity-30 border border-green-500 rounded-lg px-6 py-3 mb-8">
            <p className="text-green-400 font-semibold">
              🏆 Winner: Roast a Profile - Free, No Signup, More Styles
            </p>
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Complete Feature Comparison
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
                    <div className="text-orange-400 font-bold">Olly Social</div>
                    <div className="text-sm text-gray-400">(Competitor)</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {/* Pricing */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Pricing Model</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">✅ 100% Free</span>
                    <div className="text-sm text-gray-400">Forever unlimited</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Freemium</span>
                    <div className="text-sm text-gray-400">5 free/day, then $7.99/mo</div>
                  </td>
                </tr>
                
                {/* Account Required */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Account Required</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">✅ No Account</span>
                    <div className="text-sm text-gray-400">Instant access</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-red-400">❌ Sign Up Required</span>
                    <div className="text-sm text-gray-400">Email + password</div>
                  </td>
                </tr>
                
                {/* Customization */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Customization Options</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">4 Unique Styles</span>
                    <div className="text-sm text-gray-400">Pre-crafted perfection</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Intensity Slider</span>
                    <div className="text-sm text-gray-400">1-10 scale control</div>
                  </td>
                </tr>
                
                {/* Name Personalization */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Name Personalization</td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Auto-detected</span>
                    <div className="text-sm text-gray-400">From profile</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-green-400">Manual Input</span>
                    <div className="text-sm text-gray-400">Custom names</div>
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
                    <span className="text-yellow-400">4-7 seconds</span>
                    <div className="text-sm text-gray-400">After login</div>
                  </td>
                </tr>
                
                {/* Roast Quality */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Roast Quality</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">✅ Hilarious</span>
                    <div className="text-sm text-gray-400">Gen-Z optimized</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-green-400">✅ Good</span>
                    <div className="text-sm text-gray-400">Adjustable intensity</div>
                  </td>
                </tr>
                
                {/* Mobile Experience */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Mobile App</td>
                  <td className="text-center p-4">
                    <span className="text-green-400">✅ iOS App</span>
                    <div className="text-sm text-gray-400">Native experience</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Web Only</span>
                    <div className="text-sm text-gray-400">PWA support</div>
                  </td>
                </tr>
                
                {/* Data Privacy */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Data Privacy</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">✅ Zero Storage</span>
                    <div className="text-sm text-gray-400">Complete anonymity</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">Stores User Data</span>
                    <div className="text-sm text-gray-400">Account history</div>
                  </td>
                </tr>
                
                {/* Total Roasts */}
                <tr className="hover:bg-gray-750">
                  <td className="p-4 font-medium">Total Generated</td>
                  <td className="text-center p-4">
                    <span className="text-green-400 font-bold">2M+ Roasts</span>
                    <div className="text-sm text-gray-400">Proven track record</div>
                  </td>
                  <td className="text-center p-4">
                    <span className="text-yellow-400">500K+ Roasts</span>
                    <div className="text-sm text-gray-400">Growing platform</div>
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
                    <span className="text-yellow-400">4.3/5 ⭐</span>
                    <div className="text-sm text-gray-400">687 reviews</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Unique Features Comparison */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unique Features Face-Off
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Roast a Profile Unique */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Roast a Profile Exclusives</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✨</span>
                  <div>
                    <strong>Shakespearean Mode:</strong> Classical roasts with Elizabethan flair
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✨</span>
                  <div>
                    <strong>Gen-Z Style:</strong> Trendy slang and TikTok-era humor
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✨</span>
                  <div>
                    <strong>Zero Friction:</strong> No signup, email, or any barriers
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✨</span>
                  <div>
                    <strong>iOS App:</strong> Native mobile experience
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Olly Social Unique */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Olly Social Exclusives</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">🎚️</span>
                  <div>
                    <strong>Intensity Control:</strong> Fine-tune roast severity (1-10)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">🎚️</span>
                  <div>
                    <strong>Name Input:</strong> Add custom names to personalize
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">🎚️</span>
                  <div>
                    <strong>History Tracking:</strong> Save and view past roasts
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">🎚️</span>
                  <div>
                    <strong>Favorites:</strong> Bookmark best roasts
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roast Style Comparison */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Roast Style Comparison
          </h2>
          
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Example: Roasting a Fitness Influencer Profile</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-purple-400 mb-2">Roast a Profile (Savage Mode):</h4>
                <p className="text-gray-300 italic">
                  "Another gym selfie? Your personality has less depth than your ab definition. 
                  Those protein shakes can't fill the void where your personality should be. 
                  Your entire feed screams 'I peaked in high school PE class.' 🔥"
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-semibold text-orange-400 mb-2">Olly Social (Intensity 8/10):</h4>
                <p className="text-gray-300 italic">
                  "[Name], your gym posts are more repetitive than your workout routine. 
                  We get it, you lift. But your captions have the creativity of a barbell - 
                  heavy and one-dimensional."
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-purple-400 mb-2">Roast a Profile (Gen-Z Mode):</h4>
                <p className="text-gray-300 italic">
                  "Not the gym bro aesthetic giving NPC energy 💀 The way you caption 
                  every post with 'grinding' - bestie that's not a personality trait, 
                  it's a red flag. Touch grass immediately, no cap fr fr 💯"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience Comparison */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            User Experience Breakdown
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Roast a Profile Journey</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <span>Land on site → Start roasting (0 seconds)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <span>Enter username → Choose style (5 seconds)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <span>Get roast → Share with friends (8 seconds total)</span>
                </li>
              </ol>
              <p className="mt-4 text-green-400 font-semibold">⏱️ Total: 8 seconds to roast</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Olly Social Journey</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold">1.</span>
                  <span>Sign up → Verify email (2-3 minutes)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold">2.</span>
                  <span>Login → Navigate to generator (30 seconds)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold">3.</span>
                  <span>Input details → Adjust intensity (20 seconds)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold">4.</span>
                  <span>Generate → View result (7 seconds)</span>
                </li>
              </ol>
              <p className="mt-4 text-yellow-400 font-semibold">⏱️ Total: 4+ minutes first time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real User Reviews */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Real Users Say
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "I tried Olly Social first but the signup process killed the vibe. 
                    Roast a Profile lets me roast my friends instantly. The Shakespearean 
                    mode is genius - nobody else has that!"
                  </p>
                  <p className="text-sm text-gray-500">- Alex K., Content Creator</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "The intensity slider on Olly is nice, but honestly, Roast a Profile's 
                    pre-set styles are perfect. Why adjust a slider when you can just pick 
                    'Savage' and get comedy gold?"
                  </p>
                  <p className="text-sm text-gray-500">- Sam T., Social Media Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "5 free roasts per day on Olly? That's nothing! My friend group goes 
                    through 20+ roasts in one session. Roast a Profile being unlimited 
                    and free is why we switched."
                  </p>
                  <p className="text-sm text-gray-500">- Jordan M., College Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              The Verdict: Roast a Profile Takes the Crown
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Choose Roast a Profile If:</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>✅ You want instant roasts without signup</li>
                  <li>✅ You value variety in roast styles</li>
                  <li>✅ You prefer free, unlimited access</li>
                  <li>✅ You care about privacy</li>
                  <li>✅ You want a mobile app</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Choose Olly Social If:</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>✅ You want fine-tuned intensity control</li>
                  <li>✅ You need to save roast history</li>
                  <li>✅ You want to add custom names</li>
                  <li>✅ You don't mind creating an account</li>
                  <li>✅ You're okay with daily limits</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl mb-6">
                While Olly Social offers intensity customization, Roast a Profile wins with 
                its zero-friction approach, diverse styles, and completely free model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/roast-generator"
                  className="px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
                >
                  Try Roast a Profile Free →
                </Link>
                <Link 
                  href="/roast-styles"
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full text-lg font-semibold transition-colors"
                >
                  Explore Our 4 Styles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Internal Links */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Complete Roasting Platform</h2>
          
          {/* Primary Tools */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link href="/ai-roast-generator" className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg hover:from-purple-900/50 hover:to-pink-900/50 transition">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold mb-1 text-purple-400">AI Roast Generator</h3>
              <p className="text-sm text-gray-400">Advanced AI technology</p>
            </Link>
            <Link href="/instagram-profile-analyzer" className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg hover:from-blue-900/50 hover:to-purple-900/50 transition">
              <div className="text-3xl mb-2">📋</div>
              <h3 className="font-semibold mb-1 text-blue-400">Profile Analyzer</h3>
              <p className="text-sm text-gray-400">Deep insights</p>
            </Link>
            <Link href="/free-instagram-roast-generator-no-signup" className="text-center p-4 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-lg hover:from-green-900/50 hover:to-blue-900/50 transition">
              <div className="text-3xl mb-2">🆓</div>
              <h3 className="font-semibold mb-1 text-green-400">Free Generator</h3>
              <p className="text-sm text-gray-400">No signup needed</p>
            </Link>
            <Link href="/gen-z-roast-generator-online" className="text-center p-4 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-lg hover:from-pink-900/50 hover:to-purple-900/50 transition">
              <div className="text-3xl mb-2">💅</div>
              <h3 className="font-semibold mb-1 text-pink-400">Gen Z Generator</h3>
              <p className="text-sm text-gray-400">It's giving slay</p>
            </Link>
          </div>
          
          {/* More Comparisons */}
          <h3 className="text-xl font-semibold mb-4 text-center text-purple-400">Platform Comparisons</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link href="/vs-cleve-ai" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-blue-400 mb-1">vs Cleve AI</h4>
              <p className="text-xs text-gray-400">Professional analyzer comparison</p>
            </Link>
            <Link href="/comparisons" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-yellow-400 mb-1">vs Roast Master</h4>
              <p className="text-xs text-gray-400">Classic roaster battle</p>
            </Link>
            <Link href="/instagram-roaster" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-red-400 mb-1">Instagram Roaster</h4>
              <p className="text-xs text-gray-400">Premium roasting features</p>
            </Link>
          </div>
          
          {/* Roast Styles Grid */}
          <h3 className="text-xl font-semibold mb-4 text-center text-purple-400">Choose Your Style</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Link href="/roast-styles/savage" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-red-400 mb-1">🔥 Savage Mode</h4>
              <p className="text-xs text-gray-400">No mercy roasts</p>
            </Link>
            <Link href="/roast-styles/friendly" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-green-400 mb-1">😊 Friendly Fire</h4>
              <p className="text-xs text-gray-400">Gentle teasing</p>
            </Link>
            <Link href="/roast-styles/gen-z" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-pink-400 mb-1">💯 Gen Z Style</h4>
              <p className="text-xs text-gray-400">No cap fr fr</p>
            </Link>
            <Link href="/roast-styles/shakespearean" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h4 className="font-semibold text-purple-400 mb-1">🎭 Shakespearean</h4>
              <p className="text-xs text-gray-400">Classical burns</p>
            </Link>
          </div>
          
          {/* Learning Resources */}
          <h3 className="text-xl font-semibold mb-4 text-center text-purple-400">Master the Art</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link href="/ultimate-guide-instagram-roasting" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">📚 Ultimate Guide</h4>
              <p className="text-sm text-gray-400">8-chapter masterclass</p>
            </Link>
            <Link href="/how-to-roast-someone-on-instagram" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">🎯 How to Roast</h4>
              <p className="text-sm text-gray-400">Beginner tutorial</p>
            </Link>
            <Link href="/savage-instagram-roasts-examples" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">💀 Savage Examples</h4>
              <p className="text-sm text-gray-400">100+ brutal burns</p>
            </Link>
            <Link href="/funny-things-to-comment-on-instagram" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">💬 Funny Comments</h4>
              <p className="text-sm text-gray-400">500+ witty ideas</p>
            </Link>
            <Link href="/roast-examples" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">📝 More Examples</h4>
              <p className="text-sm text-gray-400">Generated roasts</p>
            </Link>
            <Link href="/what-is-instagram-roasting" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
              <h4 className="font-semibold mb-2">❓ Roasting 101</h4>
              <p className="text-sm text-gray-400">History & culture</p>
            </Link>
          </div>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link href="/roast-generator" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm">Main Generator</Link>
            <Link href="/blog" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm">Blog</Link>
            <Link href="/faq" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm">FAQ</Link>
            <Link href="/ai-profile-analyzer" className="px-4 py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm">AI Analyzer</Link>
            <Link href="/download" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition text-sm font-semibold">Get App</Link>
          </div>
          
          {/* Footer Links */}
          <div className="text-center text-sm text-gray-400">
            <p>
              <Link href="/" className="hover:text-purple-400 transition">Home</Link> • 
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
