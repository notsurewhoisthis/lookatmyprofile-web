import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { FAQSchema } from '@/components/SEO/FAQSchema';

export const metadata: Metadata = {
  title: 'Instagram Username Generator - Creative Name Ideas for 2025',
  description: 'Generate unique Instagram usernames with our AI-powered tool. Find aesthetic, funny, creative, and trendy username ideas perfect for your profile.',
  keywords: 'instagram username generator, username ideas, instagram names, creative usernames, aesthetic usernames',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/username-generator'
  },
  openGraph: {
    title: 'Instagram Username Generator - Find Your Perfect Handle',
    description: 'Discover unique and creative Instagram username ideas with our comprehensive generator.',
    type: 'website',
    url: 'https://www.lookatmyprofile.org/username-generator',
  }
};

const usernameStyles = [
  {
    slug: 'aesthetic',
    title: 'Aesthetic Usernames',
    description: 'Soft, dreamy, and ethereal username ideas',
    emoji: '✨',
    examples: ['moonchildvibes', 'stardustsoul', 'etherealglow'],
    color: 'from-purple-400 to-pink-400'
  },
  {
    slug: 'funny',
    title: 'Funny Usernames',
    description: 'Hilarious and witty username ideas',
    emoji: '😂',
    examples: ['chaoticpotato', 'brokeasnugget', 'tiredpenguin'],
    color: 'from-yellow-400 to-orange-400'
  },
  {
    slug: 'creative',
    title: 'Creative Usernames',
    description: 'Artistic and innovative username ideas',
    emoji: '🎨',
    examples: ['pixelwave', 'neonpunk', 'digitalrealm'],
    color: 'from-blue-400 to-purple-400'
  },
  {
    slug: 'minimalist',
    title: 'Minimalist Usernames',
    description: 'Simple, clean, and straightforward names',
    emoji: '⚡',
    examples: ['justsarah', 'heyalex', 'simplelife'],
    color: 'from-gray-400 to-gray-600'
  },
  {
    slug: 'y2k',
    title: 'Y2K Usernames',
    description: 'Nostalgic 2000s-inspired username ideas',
    emoji: '💿',
    examples: ['xxangelbabexx', 'cyberprincess2000', 'glitterdreams'],
    color: 'from-pink-400 to-purple-600'
  }
];

const faqs = [
  {
    question: 'How do I choose the perfect Instagram username?',
    answer: 'Choose a username that reflects your personality or niche, is easy to remember and spell, and aligns with your content style. Consider your long-term brand and check availability across platforms.'
  },
  {
    question: 'Can I change my Instagram username later?',
    answer: 'Yes, you can change your Instagram username anytime through your profile settings. However, frequent changes might confuse your followers, so choose wisely.'
  },
  {
    question: 'What characters are allowed in Instagram usernames?',
    answer: 'Instagram usernames can contain letters, numbers, periods, and underscores. Spaces and other special characters are not allowed.'
  },
  {
    question: 'How long can an Instagram username be?',
    answer: 'Instagram usernames can be up to 30 characters long, but shorter usernames are generally easier to remember and share.'
  },
  {
    question: 'What if my desired username is already taken?',
    answer: 'Try variations with numbers, underscores, or periods. You can also add prefixes or suffixes that maintain your brand identity while making the username unique.'
  }
];

export default function UsernameGeneratorIndex() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Username Generator', url: 'https://www.lookatmyprofile.org/username-generator' }
        ]}
      />
      <FAQSchema faqs={faqs} pageTitle="Instagram Username Generator" />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Roast a Profile
            </Link>
            <div className="flex gap-4 items-center">
              <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast</Link>
              <Link href="/tools/bio-generator" className="hover:text-purple-400 transition">Bios</Link>
              <Link href="/tools/caption-generator" className="hover:text-purple-400 transition">Captions</Link>
              <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Instagram Username Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find the perfect Instagram username with our AI-powered generator. Choose from aesthetic, funny, creative, and more styles to match your vibe.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="bg-gray-800 px-6 py-3 rounded-full">
              <span className="text-purple-400 font-semibold">500+ Ideas</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full">
              <span className="text-pink-400 font-semibold">5 Unique Styles</span>
            </div>
            <div className="bg-gray-800 px-6 py-3 rounded-full">
              <span className="text-blue-400 font-semibold">2025 Trends</span>
            </div>
          </div>
        </section>

        {/* Username Style Cards */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Username Style</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usernameStyles.map((style) => (
              <Link 
                key={style.slug}
                href={`/username-generator/${style.slug}`}
                className="group"
              >
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{style.emoji}</span>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${style.color} bg-clip-text text-transparent`}>
                      {style.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{style.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Examples:</p>
                    <div className="flex flex-wrap gap-2">
                      {style.examples.map((example, idx) => (
                        <span key={idx} className="bg-gray-900 px-3 py-1 rounded-full text-sm font-mono">
                          @{example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300">
                    <span>Explore {style.title}</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Use Our Username Generator?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Targeted Styles</h3>
                <p className="text-gray-300">Username ideas tailored to specific aesthetics and personalities</p>
              </div>
              
              <div className="text-center">
                <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">2025 Trends</h3>
                <p className="text-gray-300">Stay ahead with the latest Instagram username trends</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Ideas</h3>
                <p className="text-gray-300">Get hundreds of unique username suggestions instantly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Pro Tips for Instagram Usernames</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Username Best Practices</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Keep it under 15 characters for memorability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Avoid excessive numbers unless they're meaningful</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Check pronunciation - it should be easy to say out loud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Consider SEO - include keywords related to your niche</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Common Mistakes to Avoid</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Using temporary trends that will age poorly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Making it too similar to existing popular accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Including personal information like birth year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Creating usernames that are hard to type on mobile</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-800 rounded-lg p-6 cursor-pointer">
                <summary className="text-xl font-semibold text-purple-400 hover:text-purple-300">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Stand Out on Instagram?</h2>
            <p className="text-xl mb-6">Start with the perfect username, then complete your profile with our suite of tools!</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/username-generator/aesthetic" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Start Generating
              </Link>
              <Link href="/tools/bio-generator" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
                Create Your Bio
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>© 2025 LookAtMyProfile.org - Your Complete Instagram Profile Toolkit</p>
          </div>
        </footer>
      </div>
    </>
  );
}
