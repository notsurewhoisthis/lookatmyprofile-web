import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';

interface PageData {
  slug: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
}

const categoryInfo: Record<string, { title: string; description: string; emoji: string }> = {
  'username-generator': {
    title: 'Instagram Username Ideas Generator',
    description: 'Discover 120+ unique username ideas for your Instagram profile. Aesthetic, funny, creative, and more.',
    emoji: '✨'
  },
  'bio-generator': {
    title: 'Instagram Bio Templates & Ideas',
    description: '250+ Instagram bio templates for every niche. Perfect bios for fitness, travel, business, and more.',
    emoji: '📝'
  },
  'caption-generator': {
    title: 'Instagram Caption Ideas',
    description: '50+ caption templates for every occasion. Never run out of engaging caption ideas.',
    emoji: '💬'
  },
  'hashtag-generator': {
    title: 'Instagram Hashtag Collections',
    description: '30+ curated hashtag sets for maximum reach. Trending hashtags for 2025.',
    emoji: '#️⃣'
  },
  'roast-generator': {
    title: 'Instagram Roast Collections',
    description: '40+ savage roast templates. Perfect comebacks for every situation.',
    emoji: '🔥'
  },
  'personality-analyzer': {
    title: 'Instagram Personality Types',
    description: 'Discover your Instagram personality type. Complete analysis and roasts.',
    emoji: '🎭'
  }
};

export async function generateStaticParams() {
  return Object.keys(categoryInfo).map(category => ({
    category
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const info = categoryInfo[resolvedParams.category];
  
  if (!info) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.'
    };
  }
  
  return {
    title: `${info.title} | Roast a Profile`,
    description: info.description,
    alternates: {
      canonical: `https://www.lookatmyprofile.org/tools/${resolvedParams.category}`
    }
  };
}

async function getCategoryPages(category: string): Promise<PageData[]> {
  try {
    const dataPath = path.join(process.cwd(), 'data', `${category}-pages.json`);
    const content = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const resolvedParams = await params;
  const info = categoryInfo[resolvedParams.category];
  
  if (!info) {
    notFound();
  }
  
  const pages = await getCategoryPages(resolvedParams.category);
  
  // Group pages by subcategory
  const pagesBySubcategory = pages.reduce((acc, page) => {
    if (!acc[page.subcategory]) {
      acc[page.subcategory] = [];
    }
    acc[page.subcategory].push(page);
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
            <Link href="/tools" className="hover:text-purple-400 transition">All Tools</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">
              Get a Full Roast
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-purple-400">Tools</Link>
          <span>/</span>
          <span className="text-white">{info.title}</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">{info.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            {info.title}
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            {info.description}
          </p>
          <div className="flex gap-4 justify-center">
            <span className="px-4 py-2 bg-purple-600/20 rounded-full">
              {pages.length} Tools Available
            </span>
            <span className="px-4 py-2 bg-pink-600/20 rounded-full">
              AI-Powered
            </span>
          </div>
        </div>
      </section>
      
      {/* Pages by Subcategory */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {Object.entries(pagesBySubcategory).map(([subcategory, subPages]) => (
            <div key={subcategory} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 capitalize">
                {subcategory.replace(/-/g, ' ')} ({subPages.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subPages.map(page => (
                  <Link
                    key={page.slug}
                    href={`/tools/${resolvedParams.category}/${page.slug}`}
                    className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition group"
                  >
                    <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition line-clamp-2">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {page.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {page.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-purple-600/20 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want Personalized Results?</h2>
          <p className="text-lg mb-6 text-gray-300">
            Get AI-powered {info.title.toLowerCase()} tailored just for you
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/roast-generator" className="bg-purple-600 px-8 py-4 rounded-full hover:bg-purple-700 transition">
              Try AI Generator →
            </Link>
            <Link href="/download" className="border border-purple-400 px-8 py-4 rounded-full hover:bg-purple-400/10 transition">
              Get a Full Roast
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>© 2025 Roast a Profile - Instagram Tools & Generators</p>
        </div>
      </footer>
    </div>
  );
}
