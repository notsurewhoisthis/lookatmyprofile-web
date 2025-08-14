import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { ReviewSchema } from '@/components/SEO/ReviewSchema';

export const metadata: Metadata = {
  title: 'Free Instagram Roast Generator No Signup - Instant Roasts 2025',
  description: 'Get instant Instagram roasts 100% free with no signup, no email, no login required. Generate unlimited hilarious roasts in 4 different styles. Zero barriers, pure comedy.',
  keywords: 'free Instagram roast generator, no signup roast generator, no login Instagram roaster, free roast generator no email, instant roast generator',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/free-instagram-roast-generator-no-signup'
  },
  openGraph: {
    title: 'Free Instagram Roast Generator - No Signup Required',
    description: '100% free Instagram roasts with zero signup. No email, no login, no BS. Just instant hilarious roasts.',
    url: 'https://www.lookatmyprofile.org/free-instagram-roast-generator-no-signup',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Free Instagram Roast Generator No Signup'
    }]
  }
};

const freeFAQs = [
  {
    question: "Is this Instagram roast generator really free?",
    answer: "Yes! 100% free forever. No hidden costs, no premium tiers, no credit card required. We believe great roasts should be accessible to everyone."
  },
  {
    question: "Do I need to create an account or sign up?",
    answer: "Absolutely not! No signup, no login, no email required. Just enter an Instagram username and get instant roasts. We respect your privacy and time."
  },
  {
    question: "Are there any limits on free roasts?",
    answer: "No limits! Generate unlimited roasts, try all 4 styles, roast as many profiles as you want. Completely unrestricted access."
  },
  {
    question: "Why is it free when competitors charge?",
    answer: "We're supported by our iOS app downloads and believe in providing value first. While others gatekeep with paywalls, we keep roasting accessible."
  },
  {
    question: "What's the catch? This sounds too good to be true.",
    answer: "No catch! No ads, no spam, no data harvesting. We simply offer a free tool and hope you'll love it enough to download our app for extra features."
  }
];

export default function FreeNoSignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://www.lookatmyprofile.org" },
          { name: "Free Tools", url: "https://www.lookatmyprofile.org/free-tools" },
          { name: "No Signup Generator", url: "https://www.lookatmyprofile.org/free-instagram-roast-generator-no-signup" }
        ]}
      />
      <ReviewSchema />
      <FAQSchema faqs={freeFAQs} pageTitle="Free Instagram Roast Generator No Signup" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
              💯 100% FREE • NO SIGNUP • NO EMAIL • NO BS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Free Instagram Roast Generator
            <span className="block text-3xl md:text-4xl mt-2">No Signup Required</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            While Others Make You Sign Up, We Let You Roast Instantly
          </p>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No Email Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No Account Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No Hidden Costs</span>
            </div>
          </div>
          
          {/* Quick Generator */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 rounded-2xl">
            <input
              type="text"
              placeholder="Enter Instagram username (no @ needed)"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Link 
              href="/roast-generator"
              className="inline-block w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-lg font-semibold hover:scale-105 transition-transform"
            >
              Generate Free Roast Now →
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              2-3 second generation • 4 roast styles • Unlimited uses
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Everyone Else Makes You Sign Up (And Why We Don't)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-xl font-bold mb-4 text-red-400">❌ What Others Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Force email registration</li>
                <li>• Require account creation</li>
                <li>• Limit free uses (3-5 per day)</li>
                <li>• Hide best features behind paywall</li>
                <li>• Spam your inbox with marketing</li>
                <li>• Sell your data to advertisers</li>
                <li>• Make you verify email first</li>
                <li>• Require social media login</li>
              </ul>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-bold mb-4 text-green-400">✅ What We Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Zero registration required</li>
                <li>• No email needed ever</li>
                <li>• Unlimited free roasts</li>
                <li>• All 4 styles available free</li>
                <li>• No spam (we don't have your email!)</li>
                <li>• No data collection</li>
                <li>• Instant access, no verification</li>
                <li>• Complete privacy respected</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Get For Free (No Signup)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">4 Roast Styles</h3>
              <p className="text-gray-400">
                Savage, Friendly, Gen-Z, and Shakespearean - all unlocked
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">♾️</div>
              <h3 className="text-xl font-semibold mb-2">Unlimited Uses</h3>
              <p className="text-gray-400">
                No daily limits, no monthly caps, roast forever
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-400">
                2-3 second generation, no waiting in queues
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400">
                Advanced AI analyzes profiles for personalized roasts
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">100% Private</h3>
              <p className="text-gray-400">
                No data stored, no tracking, complete anonymity
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Works Everywhere</h3>
              <p className="text-gray-400">
                Mobile, desktop, tablet - no app download required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Use Our Free No-Signup Generator
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Open the Generator</h3>
                <p className="text-gray-400">
                  No signup page, no email popup, no account creation - just the tool ready to use
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enter Any Username</h3>
                <p className="text-gray-400">
                  Type any public Instagram username - no @ symbol needed, no verification required
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Style</h3>
                <p className="text-gray-400">
                  Pick from Savage, Friendly, Gen-Z, or Shakespearean - all free, all unlocked
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Get Your Roast</h3>
                <p className="text-gray-400">
                  Instant AI-generated roast in 2-3 seconds - copy, share, or generate another
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl mb-6 text-purple-400">
              Total Time: 8 Seconds • Total Cost: $0 • Emails Required: 0
            </p>
            <Link 
              href="/roast-generator"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
            >
              Start Roasting Free (No Signup) →
            </Link>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Free Roast Generators: Real Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-900">
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4 text-purple-400">Roast a Profile</th>
                  <th className="text-center p-4">Cleve AI</th>
                  <th className="text-center p-4">Olly Social</th>
                  <th className="text-center p-4">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="p-4 font-medium">Signup Required</td>
                  <td className="text-center p-4"><span className="text-green-400">✅ Never</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ Yes</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ Yes</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ Yes</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Email Required</td>
                  <td className="text-center p-4"><span className="text-green-400">✅ No</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ Yes</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ Yes</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ Yes</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Free Roasts/Day</td>
                  <td className="text-center p-4"><span className="text-green-400">∞ Unlimited</span></td>
                  <td className="text-center p-4"><span className="text-yellow-400">3</span></td>
                  <td className="text-center p-4"><span className="text-yellow-400">5</span></td>
                  <td className="text-center p-4"><span className="text-yellow-400">1-5</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">All Styles Free</td>
                  <td className="text-center p-4"><span className="text-green-400">✅ Yes</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ No</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ No</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ No</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Speed</td>
                  <td className="text-center p-4"><span className="text-green-400">2-3 sec</span></td>
                  <td className="text-center p-4"><span className="text-yellow-400">5-10 sec</span></td>
                  <td className="text-center p-4"><span className="text-yellow-400">4-7 sec</span></td>
                  <td className="text-center p-4"><span className="text-yellow-400">5-15 sec</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">No Ads</td>
                  <td className="text-center p-4"><span className="text-green-400">✅ Yes</span></td>
                  <td className="text-center p-4"><span className="text-yellow-400">Premium</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ No</span></td>
                  <td className="text-center p-4"><span className="text-red-400">❌ No</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why 2M+ Users Choose Our Free Generator
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "Finally! A roast generator that doesn't make me create an account. 
                    I just wanted to roast my friend, not marry the website."
                  </p>
                  <p className="text-sm text-gray-500">- Alex K., Daily User</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "Every other site wanted my email. This one just works. 
                    The roasts are fire and I didn't have to sell my soul."
                  </p>
                  <p className="text-sm text-gray-500">- Sam T., Content Creator</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "No signup, no spam, no BS. Just pure roasting goodness. 
                    This is how the internet should work."
                  </p>
                  <p className="text-sm text-gray-500">- Jordan M., Student</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="text-gray-300 mb-2">
                    "I've tried 5 other generators. They all wanted my email and limited me to 3 roasts. This is unlimited and free!"
                  </p>
                  <p className="text-sm text-gray-500">- Casey R., Influencer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-8 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Signing Up. Start Roasting.
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              While others collect your data, we deliver instant roasts. 
              No signup, no email, no catches - just pure comedy gold.
            </p>
            
            <div className="bg-black/30 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400">0</div>
                  <div className="text-sm text-gray-400">Emails Required</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">∞</div>
                  <div className="text-sm text-gray-400">Free Roasts</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">4</div>
                  <div className="text-sm text-gray-400">Roast Styles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">2M+</div>
                  <div className="text-sm text-gray-400">Happy Users</div>
                </div>
              </div>
            </div>
            
            <Link 
              href="/roast-generator"
              className="inline-block px-12 py-5 bg-white text-purple-900 rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Generate Free Roast Now →
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              No signup • No email • No credit card • Just roasts
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore More Free Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/ai-roast-generator" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">AI Roast Generator</h3>
              <p className="text-sm text-gray-400">Advanced AI-powered roasting</p>
            </Link>
            <Link href="/instagram-profile-analyzer" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Profile Analyzer</h3>
              <p className="text-sm text-gray-400">Deep profile insights</p>
            </Link>
            <Link href="/how-to-roast-someone-on-instagram" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <h3 className="font-semibold mb-2">Roasting Guide</h3>
              <p className="text-sm text-gray-400">Master the art of roasting</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}