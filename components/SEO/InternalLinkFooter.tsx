import Link from 'next/link';

export function InternalLinkFooter() {
  return (
    <section className="container mx-auto px-4 py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Explore All Our Tools & Resources</h2>
        
        {/* Main Tools */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center text-purple-400">🚀 Roast Generators</h3>
          <div className="grid md:grid-cols-5 gap-3">
            <Link href="/ai-roast-generator" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-purple-400 font-semibold">AI Generator</div>
            </Link>
            <Link href="/roast-generator" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-purple-400 font-semibold">Classic Generator</div>
            </Link>
            <Link href="/instagram-profile-analyzer" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-purple-400 font-semibold">Profile Analyzer</div>
            </Link>
            <Link href="/free-instagram-roast-generator-no-signup" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-purple-400 font-semibold">Free Generator</div>
            </Link>
            <Link href="/gen-z-roast-generator-online" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-purple-400 font-semibold">Gen Z Generator</div>
            </Link>
          </div>
        </div>

        {/* Roast Styles */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center text-purple-400">🎭 Roasting Styles</h3>
          <div className="grid md:grid-cols-4 gap-3">
            <Link href="/roast-styles/savage" className="text-center p-3 bg-red-900/20 rounded-lg hover:bg-red-900/30 transition text-sm">
              <div className="text-red-400 font-semibold">🔥 Savage</div>
            </Link>
            <Link href="/roast-styles/friendly" className="text-center p-3 bg-green-900/20 rounded-lg hover:bg-green-900/30 transition text-sm">
              <div className="text-green-400 font-semibold">😊 Friendly</div>
            </Link>
            <Link href="/roast-styles/gen-z" className="text-center p-3 bg-pink-900/20 rounded-lg hover:bg-pink-900/30 transition text-sm">
              <div className="text-pink-400 font-semibold">💯 Gen Z</div>
            </Link>
            <Link href="/roast-styles/shakespearean" className="text-center p-3 bg-purple-900/20 rounded-lg hover:bg-purple-900/30 transition text-sm">
              <div className="text-purple-400 font-semibold">🎭 Shakespearean</div>
            </Link>
          </div>
        </div>

        {/* Guides & Examples */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center text-purple-400">📚 Guides & Examples</h3>
          <div className="grid md:grid-cols-6 gap-3">
            <Link href="/ultimate-guide-instagram-roasting" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-gray-300">Ultimate Guide</div>
            </Link>
            <Link href="/how-to-roast-someone-on-instagram" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-gray-300">How to Roast</div>
            </Link>
            <Link href="/savage-instagram-roasts-examples" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-gray-300">Savage Examples</div>
            </Link>
            <Link href="/funny-things-to-comment-on-instagram" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-gray-300">Funny Comments</div>
            </Link>
            <Link href="/roast-examples" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-gray-300">More Examples</div>
            </Link>
            <Link href="/what-is-instagram-roasting" className="text-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition text-sm">
              <div className="text-gray-300">What is Roasting?</div>
            </Link>
          </div>
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Link href="/vs-cleve-ai" className="px-3 py-1 bg-purple-600/20 rounded hover:bg-purple-600/30 transition text-xs">vs Cleve AI</Link>
          <Link href="/vs-olly-social" className="px-3 py-1 bg-purple-600/20 rounded hover:bg-purple-600/30 transition text-xs">vs Olly Social</Link>
          <Link href="/instagram-roaster" className="px-3 py-1 bg-purple-600/20 rounded hover:bg-purple-600/30 transition text-xs">Instagram Roaster</Link>
          <Link href="/ai-profile-analyzer" className="px-3 py-1 bg-purple-600/20 rounded hover:bg-purple-600/30 transition text-xs">AI Analyzer</Link>
          <Link href="/roast-generator-seo" className="px-3 py-1 bg-purple-600/20 rounded hover:bg-purple-600/30 transition text-xs">SEO Generator</Link>
          <Link href="/blog" className="px-3 py-1 bg-purple-600/20 rounded hover:bg-purple-600/30 transition text-xs">Blog</Link>
          <Link href="/faq" className="px-3 py-1 bg-purple-600/20 rounded hover:bg-purple-600/30 transition text-xs">FAQ</Link>
          <Link href="/support" className="px-3 py-1 bg-purple-600/20 rounded hover:bg-purple-600/30 transition text-xs">Support</Link>
          <Link href="/download" className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded hover:shadow-lg hover:shadow-purple-500/50 transition text-xs font-semibold">Download App</Link>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-sm text-gray-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link> • 
          <Link href="/privacy" className="hover:text-purple-400 transition mx-2">Privacy</Link> • 
          <Link href="/terms" className="hover:text-purple-400 transition mx-2">Terms</Link> • 
          <Link href="/roast-styles" className="hover:text-purple-400 transition mx-2">All Styles</Link>
        </div>
      </div>
    </section>
  );
}