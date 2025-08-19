import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';

// Type definitions
interface PageData {
  slug: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
  content: any;
  relatedPages: string[];
  examples?: string[];
  templates?: string[];
  collections?: any;
  traits?: any;
}

// Generate static params for all pages
export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'data');
  const files = await fs.readdir(dataDir);
  const params: { category: string; slug: string }[] = [];
  
  for (const file of files) {
    if (file.endsWith('-pages.json')) {
      const content = await fs.readFile(path.join(dataDir, file), 'utf-8');
      const pages: PageData[] = JSON.parse(content);
      
      pages.forEach(page => {
        params.push({
          category: page.category,
          slug: page.slug
        });
      });
    }
  }
  
  return params;
}

// Get page data
async function getPageData(category: string, slug: string): Promise<PageData | null> {
  try {
    const dataPath = path.join(process.cwd(), 'data', `${category}-pages.json`);
    const content = await fs.readFile(dataPath, 'utf-8');
    const pages: PageData[] = JSON.parse(content);
    
    return pages.find(p => p.slug === slug) || null;
  } catch (error) {
    return null;
  }
}

// Generate metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const page = await getPageData(resolvedParams.category, resolvedParams.slug);
  
  if (!page) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }
  
  return {
    title: `${page.title} | Roast a Profile`,
    description: page.description,
    keywords: page.tags.join(', '),
    alternates: {
      canonical: `https://www.lookatmyprofile.org/tools/${resolvedParams.category}/${resolvedParams.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://www.lookatmyprofile.org/tools/${resolvedParams.category}/${resolvedParams.slug}`,
      type: 'article'
    }
  };
}

// Category display names
const categoryNames: Record<string, string> = {
  'username-generator': 'Username Ideas',
  'bio-generator': 'Bio Templates',
  'caption-generator': 'Caption Ideas',
  'hashtag-generator': 'Hashtag Collections',
  'roast-generator': 'Roast Collection',
  'personality-analyzer': 'Personality Analysis'
};

// Page component
export default async function ToolPage({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}) {
  const resolvedParams = await params;
  const page = await getPageData(resolvedParams.category, resolvedParams.slug);
  
  if (!page) {
    notFound();
  }
  
  const categoryName = categoryNames[resolvedParams.category] || resolvedParams.category;
  
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
              Get App
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
          <Link href={`/tools/${resolvedParams.category}`} className="hover:text-purple-400">{categoryName}</Link>
          <span>/</span>
          <span className="text-white">{page.subcategory}</span>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            {page.title}
          </h1>
          
          <p className="text-xl mb-8 text-gray-300">
            {page.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {page.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Introduction */}
          {page.content.intro && (
            <div className="mb-12 p-6 bg-gray-800/50 rounded-lg">
              <p className="text-lg">{page.content.intro}</p>
            </div>
          )}
          
          {/* Examples/Templates Section */}
          {page.examples && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Examples</h2>
              <div className="grid gap-4">
                {page.examples.map((example, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg">
                    <p className="font-mono">{example}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {page.templates && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Templates</h2>
              <div className="grid gap-4">
                {page.templates.map((template, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-blue-800/20 to-purple-800/20 rounded-lg">
                    <p>{template}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Hashtag Collections */}
          {page.collections && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Hashtag Collections</h2>
              <div className="space-y-6">
                {Object.entries(page.collections).map(([type, hashtags]: [string, any]) => (
                  <div key={type} className="p-4 bg-gray-800/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 capitalize">{type.replace(/([A-Z])/g, ' $1')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {hashtags.map((tag: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Tips Section */}
          {page.content.tips && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Pro Tips</h2>
              <ul className="space-y-3">
                {page.content.tips.map((tip: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-400">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          
          {/* Strategy Section */}
          {page.content.strategy && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Strategy Guide</h2>
              <ol className="space-y-3">
                {page.content.strategy.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}
          
          {/* CTA Section */}
          <section className="mb-12 text-center py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Want AI-Powered Results?</h2>
            <p className="text-lg mb-6 text-gray-300">
              Get personalized {categoryName.toLowerCase()} with our AI generator
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/roast-generator" className="bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700 transition">
                Try Generator →
              </Link>
              <Link href="/download" className="border border-purple-400 px-8 py-3 rounded-full hover:bg-purple-400/10 transition">
                Get the App
              </Link>
            </div>
          </section>
          
          {/* Related Pages */}
          {page.relatedPages && page.relatedPages.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {page.relatedPages.map((related, idx) => (
                  <Link key={idx} href={related} className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                    <p className="text-purple-400">→ {related.split('/').pop()?.replace(/-/g, ' ')}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>© 2025 Roast a Profile - AI Instagram Tools</p>
        </div>
      </footer>
    </div>
  );
}