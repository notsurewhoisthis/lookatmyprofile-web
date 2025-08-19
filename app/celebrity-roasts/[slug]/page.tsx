import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';

interface RoastPage {
  slug: string;
  title: string;
  celebrity: string;
  handle: string;
  followers: string;
  category: string;
  niche: string;
  roastType: string;
  description: string;
  keywords: string[];
  content: {
    intro: string;
    profileAnalysis: string;
    postingPatterns: string;
    audienceProfile: string;
    roastSummary: string;
  };
  traits: string[];
  relatedCelebs: Array<{
    name: string;
    handle: string;
    slug: string;
  }>;
  roastExamples: string[];
  funFacts: string[];
  schema: any;
}

// Generate static params for all celebrity roast pages
export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'data', 'celebrity-roasts.json');
  const content = await fs.readFile(dataPath, 'utf-8');
  const roastPages: RoastPage[] = JSON.parse(content);
  
  return roastPages.map(page => ({
    slug: page.slug
  }));
}

// Get roast page data
async function getRoastPageData(slug: string): Promise<RoastPage | null> {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'celebrity-roasts.json');
    const content = await fs.readFile(dataPath, 'utf-8');
    const pages: RoastPage[] = JSON.parse(content);
    
    return pages.find(p => p.slug === slug) || null;
  } catch {
    return null;
  }
}

// Generate metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const page = await getRoastPageData(resolvedParams.slug);
  
  if (!page) {
    return {
      title: 'Celebrity Roast Not Found',
      description: 'The requested celebrity roast could not be found.'
    };
  }
  
  return {
    title: `${page.title} | Roast a Profile`,
    description: page.description,
    keywords: page.keywords.join(', '),
    alternates: {
      canonical: `https://www.lookatmyprofile.org/celebrity-roasts/${resolvedParams.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://www.lookatmyprofile.org/celebrity-roasts/${resolvedParams.slug}`,
      type: 'article'
    }
  };
}

const roastTypeEmojis: Record<string, string> = {
  savage: '🔥',
  funny: '😂',
  'gen-z': '💀',
  friendly: '😊'
};

const roastTypeColors: Record<string, string> = {
  savage: 'from-red-600 to-orange-600',
  funny: 'from-blue-600 to-purple-600',
  'gen-z': 'from-purple-600 to-pink-600',
  friendly: 'from-green-600 to-blue-600'
};

export default async function CelebrityRoastPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const page = await getRoastPageData(resolvedParams.slug);
  
  if (!page) {
    notFound();
  }
  
  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    ...page.schema
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-4">
            <Link href="/celebrity-roasts" className="hover:text-purple-400 transition">All Celebrities</Link>
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
          <Link href="/celebrity-roasts" className="hover:text-purple-400">Celebrity Roasts</Link>
          <span>/</span>
          <span className="text-white">{page.celebrity}</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 inline-block">{roastTypeEmojis[page.roastType]}</span>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${roastTypeColors[page.roastType]} bg-clip-text text-transparent`}>
              {page.title}
            </h1>
            <div className="flex gap-4 justify-center mb-6">
              <span className="px-4 py-2 bg-purple-600/20 rounded-full">
                @{page.handle}
              </span>
              <span className="px-4 py-2 bg-pink-600/20 rounded-full">
                {page.followers} followers
              </span>
              <span className="px-4 py-2 bg-blue-600/20 rounded-full capitalize">
                {page.niche} {page.category}
              </span>
            </div>
            <p className="text-xl text-gray-300">
              {page.description}
            </p>
          </div>
          
          {/* Roast Type Selector */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {['savage', 'funny', 'gen-z', 'friendly'].map(type => {
              const isActive = type === page.roastType;
              const typeSlug = `${page.handle}-instagram-roast-${type}`;
              
              return (
                <Link
                  key={type}
                  href={`/celebrity-roasts/${typeSlug}`}
                  className={`py-3 px-4 rounded-lg text-center transition ${
                    isActive 
                      ? `bg-gradient-to-r ${roastTypeColors[type]} text-white font-bold` 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{roastTypeEmojis[type]}</span>
                  <span className="capitalize">{type === 'gen-z' ? 'Gen-Z' : type}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Introduction */}
          <div className="mb-12 p-6 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-xl">
            <p className="text-lg">{page.content.intro}</p>
          </div>
          
          {/* Profile Analysis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">📊 Profile Analysis</h2>
            <div className="p-6 bg-gray-800/50 rounded-xl">
              <p className="text-lg mb-4">{page.content.profileAnalysis}</p>
              <div className="flex flex-wrap gap-2">
                {page.traits.map(trait => (
                  <span key={trait} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </section>
          
          {/* Roast Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">🎯 Best Roasts</h2>
            <div className="space-y-4">
              {page.roastExamples.map((roast, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-r from-red-800/20 to-orange-800/20 rounded-lg">
                  <p className="text-lg italic">"{roast}"</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Posting Patterns */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">📱 Posting Patterns</h2>
            <div className="p-6 bg-gray-800/50 rounded-xl">
              <p className="text-lg">{page.content.postingPatterns}</p>
            </div>
          </section>
          
          {/* Audience Profile */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">👥 Their Audience</h2>
            <div className="p-6 bg-gray-800/50 rounded-xl">
              <p className="text-lg">{page.content.audienceProfile}</p>
            </div>
          </section>
          
          {/* Fun Facts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">💡 Fun Facts</h2>
            <ul className="space-y-3">
              {page.funFacts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-purple-400">→</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Roast Summary */}
          <section className="mb-12">
            <div className="p-6 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">🏆 The Final Roast</h2>
              <p className="text-lg">{page.content.roastSummary}</p>
            </div>
          </section>
          
          {/* Related Celebrities */}
          {page.relatedCelebs && page.relatedCelebs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">🌟 More Celebrity Roasts</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {page.relatedCelebs.map(celeb => (
                  <Link 
                    key={celeb.handle}
                    href={`/celebrity-roasts/${celeb.slug}`}
                    className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition text-center"
                  >
                    <p className="font-semibold">{celeb.name}</p>
                    <p className="text-sm text-gray-400">@{celeb.handle}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
          
          {/* CTA Section */}
          <section className="mb-12 text-center py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Want to Roast Any Profile?</h2>
            <p className="text-lg mb-6 text-gray-300">
              Get personalized AI roasts of any Instagram profile - not just celebrities!
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
        </div>
      </section>
      
      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p>© 2025 Roast a Profile - Celebrity Instagram Roasts</p>
        </div>
      </footer>
    </div>
  );
}