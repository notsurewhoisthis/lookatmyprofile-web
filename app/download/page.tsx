import Link from "next/link";
import type { Metadata } from "next";
import OptimizedImage from "../../components/OptimizedImage";
import { SoftwareApplicationSchema } from "../../components/StructuredData";

export const metadata: Metadata = {
  title: 'Download Roast a Profile - AI Instagram Roaster App | iOS & Android',
  description: 'Get the Roast a Profile app for unlimited AI roasts, battle mode, daily challenges, and 12+ roasting styles. Available on iOS App Store and Google Play.',
  keywords: 'download roast app, instagram roaster app, AI roast generator app, iOS roast app, android roast app',
  openGraph: {
    title: 'Download Roast a Profile - The Ultimate AI Roasting App',
    description: 'Get unlimited roasts, battle friends, and unlock exclusive features. Download now!',
    url: 'https://www.lookatmyprofile.org/download',
  }
};

export default function DownloadPage() {
  const features = [
    {
      icon: '♾️',
      title: 'Unlimited Roasts',
      description: 'No daily limits. Roast as many profiles as you want.'
    },
    {
      icon: '⚔️',
      title: 'Battle Mode',
      description: 'Challenge friends to epic roast battles and crown the winner.'
    },
    {
      icon: '🎨',
      title: '12+ Roast Styles',
      description: 'Unlock exclusive styles like Corporate, Philosopher, and more.'
    },
    {
      icon: '📊',
      title: 'Profile Analysis',
      description: 'Deep insights into Instagram personality types and behaviors.'
    },
    {
      icon: '🏆',
      title: 'Daily Challenges',
      description: 'Complete roasting challenges and climb the leaderboard.'
    },
    {
      icon: '🔒',
      title: 'Private Mode',
      description: 'Roast profiles privately without anyone knowing.'
    }
  ];

  const testimonials = [
    {
      text: "This app is addictive! My friends and I can't stop roasting each other. The AI is scary accurate.",
      author: "@sarah_loves_tacos",
      rating: 5
    },
    {
      text: "The Shakespearean roasts are chef's kiss. I've never been insulted so eloquently.",
      author: "@mikethegreat",
      rating: 5
    },
    {
      text: "Battle mode is where it's at! Finally won against my sister after 47 attempts.",
      author: "@jessicaplays",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <SoftwareApplicationSchema />
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Try Online</Link>
            <Link href="/roast-styles" className="hover:text-purple-400 transition">Roast Styles</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Get the Full Roasting Experience
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Join 2 million users who've discovered the most entertaining way to analyze 
              Instagram profiles. Available on iOS and Android.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://apps.apple.com/app/roast-a-profile/id6747992467"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-black px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-600 transition flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              
              <a
                href="#"
                className="inline-block opacity-75 cursor-not-allowed"
              >
                <div className="bg-black px-6 py-3 rounded-lg border border-gray-700 flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Coming soon to</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 text-sm text-gray-400">
              <div>
                <span className="text-white font-semibold">2M+</span> Downloads
              </div>
              <div>
                <span className="text-white font-semibold">4.8★</span> Rating
              </div>
              <div>
                <span className="text-white font-semibold">10K+</span> Reviews
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-30"></div>
            <div className="relative bg-gray-900 rounded-[3rem] p-8 border border-gray-800">
              <div className="bg-black rounded-[2rem] p-4 h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-gray-400">App Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20 bg-black/30">
        <h2 className="text-4xl font-bold text-center mb-12">Premium Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-600/30">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-purple-400 font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-20 bg-gray-900/50">
        <h2 className="text-4xl font-bold text-center mb-12">Web vs App Features</h2>
        <div className="max-w-3xl mx-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4">Feature</th>
                <th className="text-center p-4">Web (Free)</th>
                <th className="text-center p-4">App (Free)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="p-4">Daily Roasts</td>
                <td className="text-center p-4">3 per day</td>
                <td className="text-center p-4 text-green-400">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4">Roast Styles</td>
                <td className="text-center p-4">4 basic</td>
                <td className="text-center p-4 text-green-400">12+ styles</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4">Battle Mode</td>
                <td className="text-center p-4 text-gray-500">✗</td>
                <td className="text-center p-4 text-green-400">✓</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4">Profile Analysis</td>
                <td className="text-center p-4 text-gray-500">✗</td>
                <td className="text-center p-4 text-green-400">✓</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4">Save Roasts</td>
                <td className="text-center p-4 text-gray-500">✗</td>
                <td className="text-center p-4 text-green-400">✓</td>
              </tr>
              <tr>
                <td className="p-4">Custom Styles</td>
                <td className="text-center p-4 text-gray-500">✗</td>
                <td className="text-center p-4 text-green-400">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Roast Like a Pro?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Download now and join millions having the time of their lives roasting Instagram profiles
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/app/roast-a-profile/id6747992467"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition inline-block"
          >
            Download for iOS →
          </a>
          <button
            className="border border-purple-400 px-12 py-5 rounded-full text-xl font-semibold hover:bg-purple-400/10 transition opacity-75 cursor-not-allowed"
            disabled
          >
            Android Coming Soon
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Available on iOS.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}