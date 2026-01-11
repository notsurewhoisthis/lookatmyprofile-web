import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

export const metadata: Metadata = {
  title: 'Instagram Tools Collection - 500+ Generators & Ideas | Roast a Profile',
  description: 'Discover 500+ Instagram tools: username generators, bio templates, caption ideas, hashtag collections, and more. All free and AI-powered.',
  keywords: 'instagram tools, username generator, bio templates, caption ideas, hashtag generator, instagram personality test',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/tools'
  }
};

interface PageData {
  slug: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
}

async function getAllPages(): Promise<PageData[]> {
  const dataPath = path.join(process.cwd(), 'data', 'generated-pages.json');
  try {
    const content = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

const categoryInfo = {
  'username-generator': {
    title: 'Username Generators',
    emoji: '✨',
    color: 'from-purple-600 to-pink-600',
    description: 'Create unique Instagram usernames'
  },
  'bio-generator': {
    title: 'Bio Templates',
    emoji: '📝',
    color: 'from-blue-600 to-purple-600',
    description: 'Perfect bio ideas for every niche'
  },
  'caption-generator': {
    title: 'Caption Ideas',
    emoji: '💬',
    color: 'from-pink-600 to-red-600',
    description: 'Never run out of caption ideas'
  },
  'hashtag-generator': {
    title: 'Hashtag Collections',
    emoji: '#️⃣',
    color: 'from-green-600 to-blue-600',
    description: 'Trending hashtags for 2025'
  },
  'roast-generator': {
    title: 'Roast Collections',
    emoji: '🔥',
    color: 'from-red-600 to-orange-600',
    description: 'Savage roasts for every situation'
  },
  'personality-analyzer': {
    title: 'Personality Types',
    emoji: '🎭',
    color: 'from-yellow-600 to-pink-600',
    description: 'Discover your Instagram personality'
  }
};

export default async function ToolsIndexPage() {
  const allPages = await getAllPages();
  
  // Group pages by category
  const pagesByCategory = allPages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, PageData[]>);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-4">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">
              Get a Full Roast
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            500+ Instagram Tools & Generators
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Everything you need to level up your Instagram game. Username ideas, bio templates, 
            captions, hashtags, and more - all powered by AI.
          </p>
          <div className="flex gap-4 justify-center">
            <span className="px-4 py-2 bg-purple-600/20 rounded-full">
              🚀 {allPages.length} Tools Available
            </span>
            <span className="px-4 py-2 bg-pink-600/20 rounded-full">
              ✨ AI-Powered
            </span>
            <span className="px-4 py-2 bg-blue-600/20 rounded-full">
              💯 100% Free
            </span>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categoryInfo).map(([category, info]) => {
            const pages = pagesByCategory[category] || [];
            return (
              <div key={category} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition">
                <div className={`text-4xl mb-4`}>{info.emoji}</div>
                <h2 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                  {info.title}
                </h2>
                <p className="text-gray-400 mb-4">{info.description}</p>
                <p className="text-sm text-purple-400 mb-4">{pages.length} tools available</p>
                
                {/* Show first 3 pages */}
                <div className="space-y-2 mb-4">
                  {pages.slice(0, 3).map(page => (
                    <Link 
                      key={page.slug} 
                      href={`/tools/${category}/${page.slug}`}
                      className="block text-sm text-gray-300 hover:text-purple-400 transition truncate"
                    >
                      → {page.title.substring(0, 40)}...
                    </Link>
                  ))}
                </div>
                
                <Link 
                  href={`/tools/${category}`}
                  className="inline-block text-purple-400 hover:text-purple-300 transition font-semibold"
                >
                  View All {info.title} →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Popular Tools Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">🔥 Trending Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allPages.slice(0, 12).map(page => (
            <Link 
              key={page.slug}
              href={`/tools/${page.category}/${page.slug}`}
              className="p-4 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg hover:scale-105 transition"
            >
              <h3 className="font-semibold mb-2 line-clamp-2">{page.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want Even More Powerful Tools?</h2>
          <p className="text-lg mb-6 text-gray-300">
            Get our iOS app for unlimited AI-powered roasts and analysis
          </p>
          <Link href="/download" className="bg-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition inline-block">
            Download App →
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>© 2025 Roast a Profile - Your Complete Instagram Toolkit</p>
        </div>
      </footer>
    </div>
  );
}
