import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'All Roast Styles - Choose Your Instagram Roasting Style | Roast a Profile',
  description: 'Explore all Instagram roasting styles: Savage Mode for brutal burns, Friendly Fire for playful jokes, Shakespearean for eloquent roasts, and Gen Z for chronically online humor.',
  keywords: 'instagram roast styles, roasting modes, AI roaster types, social media humor styles',
  openGraph: {
    title: 'Choose Your Roasting Style - From Friendly to Savage',
    description: 'Discover all the ways our AI can roast Instagram profiles. Pick your perfect roasting style.',
    url: 'https://www.lookatmyprofile.org/roast-styles',
  }
};

export default function RoastStylesPage() {
  const roastStyles = [
    {
      id: 'savage',
      name: 'Savage Mode',
      emoji: '🔥',
      tagline: 'Brutal burns that leave marks',
      description: 'No mercy, no filter. Our most brutal AI delivers devastating roasts that hit where it hurts.',
      color: 'from-red-600 to-orange-600',
      borderColor: 'border-red-600',
      hoverColor: 'hover:bg-red-600/10',
      href: '/roast-styles/savage'
    },
    {
      id: 'friendly',
      name: 'Friendly Fire',
      emoji: '😊',
      tagline: 'Playful jokes for friends',
      description: 'Light-hearted teasing that makes everyone laugh. Perfect for sharing with friends and family.',
      color: 'from-green-600 to-blue-600',
      borderColor: 'border-green-600',
      hoverColor: 'hover:bg-green-600/10',
      href: '/roast-styles/friendly'
    },
    {
      id: 'shakespearean',
      name: 'Shakespearean',
      emoji: '🎭',
      tagline: 'Eloquent burns in old English',
      description: 'Thy Instagram shall receive roasts most eloquent. Literary burns worthy of the Bard himself.',
      color: 'from-purple-600 to-indigo-600',
      borderColor: 'border-purple-600',
      hoverColor: 'hover:bg-purple-600/10',
      href: '/roast-styles/shakespearean'
    },
    {
      id: 'gen-z',
      name: 'Gen Z',
      emoji: '💯',
      tagline: 'No cap, straight bussin\' roasts',
      description: 'Chronically online energy with all the latest slang. Your feed is about to get dragged, bestie.',
      color: 'from-pink-600 to-purple-600',
      borderColor: 'border-pink-600',
      hoverColor: 'hover:bg-pink-600/10',
      href: '/roast-styles/gen-z'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast Generator</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Choose Your Roasting Style
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            From friendly teasing to savage burns, we've got a roasting style for every mood 
            and occasion. Pick your weapon and let the AI do its magic.
          </p>
        </div>
      </section>

      {/* Roast Styles Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roastStyles.map((style) => (
            <Link 
              key={style.id} 
              href={style.href}
              className={`group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border ${style.borderColor} ${style.hoverColor} transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-5xl mb-4 block">{style.emoji}</span>
                  <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${style.color} bg-clip-text text-transparent`}>
                    {style.name}
                  </h2>
                  <p className="text-lg text-gray-400">{style.tagline}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{style.description}</p>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition">
                <span>Explore {style.name}</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-20 bg-gray-900/50">
        <h2 className="text-4xl font-bold text-center mb-12">Compare Roasting Styles</h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4">Style</th>
                <th className="text-center p-4">Intensity</th>
                <th className="text-center p-4">Best For</th>
                <th className="text-center p-4">Shareable</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="p-4 font-semibold">🔥 Savage Mode</td>
                <td className="p-4 text-center">
                  <div className="flex justify-center">
                    <span className="text-red-500">●●●●●</span>
                  </div>
                </td>
                <td className="p-4 text-center">Roast battles, thick skin</td>
                <td className="p-4 text-center">⚠️ With caution</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4 font-semibold">😊 Friendly Fire</td>
                <td className="p-4 text-center">
                  <div className="flex justify-center">
                    <span className="text-green-500">●●</span>
                    <span className="text-gray-600">●●●</span>
                  </div>
                </td>
                <td className="p-4 text-center">Friends, family, work</td>
                <td className="p-4 text-center">✅ Always safe</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4 font-semibold">🎭 Shakespearean</td>
                <td className="p-4 text-center">
                  <div className="flex justify-center">
                    <span className="text-purple-500">●●●</span>
                    <span className="text-gray-600">●●</span>
                  </div>
                </td>
                <td className="p-4 text-center">Cultured crowds, theater fans</td>
                <td className="p-4 text-center">✅ Impressively</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">💯 Gen Z</td>
                <td className="p-4 text-center">
                  <div className="flex justify-center">
                    <span className="text-pink-500">●●●●</span>
                    <span className="text-gray-600">●</span>
                  </div>
                </td>
                <td className="p-4 text-center">TikTok, young audiences</td>
                <td className="p-4 text-center">🔥 Viral potential</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Can I switch between styles?</h3>
            <p className="text-gray-300">
              Absolutely! You can try any style as many times as you want. Each style 
              will generate a unique roast based on the same profile.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Which style is most popular?</h3>
            <p className="text-gray-300">
              Savage Mode and Gen Z are tied for most popular, but Friendly Fire is 
              the most shared on social media due to its universal appeal.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Can I create custom roast styles?</h3>
            <p className="text-gray-300">
              Custom roast styles are available in our mobile app! Download it to create 
              personalized roasting experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Pick Your Style?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Each style offers a unique roasting experience. Try them all to find your favorite!
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/roast-generator" className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition inline-block">
            Start Roasting Now →
          </Link>
          <Link href="/download" className="border border-purple-400 px-12 py-5 rounded-full text-xl font-semibold hover:bg-purple-400/10 transition inline-block">
            Get the App
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. All styles reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}