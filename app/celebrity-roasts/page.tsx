import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

export const metadata: Metadata = {
  title: 'Celebrity Instagram Roasts - Top 100 Celebrities | Roast a Profile',
  description: 'Hilarious roasts of the top 100 Instagram celebrities. From Cristiano Ronaldo to MrBeast, get savage, funny, and Gen-Z roasts of your favorite stars.',
  keywords: 'celebrity roasts, instagram celebrities, celebrity instagram, roast celebrities, funny celebrity roasts',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/celebrity-roasts'
  }
};

interface Celebrity {
  name: string;
  handle: string;
  followers: string;
  category: string;
  niche: string;
  traits: string[];
}

interface CelebIndex {
  categories: Record<string, Celebrity[]>;
  topFollowers: Celebrity[];
  byNiche: Record<string, Celebrity[]>;
}

async function getCelebIndex(): Promise<CelebIndex> {
  const indexPath = path.join(process.cwd(), 'data', 'celebrity-index.json');
  const content = await fs.readFile(indexPath, 'utf-8');
  return JSON.parse(content);
}

const categoryEmojis: Record<string, string> = {
  athlete: '⚽',
  celebrity: '⭐',
  influencer: '📱',
  model: '📸'
};

const categoryColors: Record<string, string> = {
  athlete: 'from-green-600 to-blue-600',
  celebrity: 'from-purple-600 to-pink-600',
  influencer: 'from-pink-600 to-red-600',
  model: 'from-blue-600 to-purple-600'
};

export default async function CelebrityRoastsIndexPage() {
  const celebIndex = await getCelebIndex();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-4">
            <Link href="/tools" className="hover:text-purple-400 transition">Tools</Link>
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
            Celebrity Instagram Roasts 🔥
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Savage, funny, and Gen-Z roasts of the top 100 Instagram celebrities. 
            From athletes to influencers, no one is safe from our AI roaster!
          </p>
          <div className="flex gap-4 justify-center">
            <span className="px-4 py-2 bg-purple-600/20 rounded-full">
              🌟 100 Celebrities
            </span>
            <span className="px-4 py-2 bg-pink-600/20 rounded-full">
              🎭 4 Roast Styles
            </span>
            <span className="px-4 py-2 bg-blue-600/20 rounded-full">
              🔥 400 Unique Roasts
            </span>
          </div>
        </div>
      </section>
      
      {/* Top Celebrities Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">🏆 Most Followed Celebrities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {celebIndex.topFollowers.slice(0, 12).map(celeb => (
            <div key={celeb.handle} className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/70 transition">
              <h3 className="font-bold text-lg mb-2">{celeb.name}</h3>
              <p className="text-gray-400 text-sm mb-2">@{celeb.handle}</p>
              <p className="text-purple-400 text-sm mb-3">{celeb.followers} followers</p>
              <div className="grid grid-cols-2 gap-2">
                <Link 
                  href={`/celebrity-roasts/${celeb.handle}-instagram-roast-savage`}
                  className="text-center py-2 bg-red-600/20 rounded-lg hover:bg-red-600/30 transition text-sm"
                >
                  🔥 Savage
                </Link>
                <Link 
                  href={`/celebrity-roasts/${celeb.handle}-instagram-roast-funny`}
                  className="text-center py-2 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition text-sm"
                >
                  😂 Funny
                </Link>
                <Link 
                  href={`/celebrity-roasts/${celeb.handle}-instagram-roast-gen-z`}
                  className="text-center py-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition text-sm"
                >
                  💀 Gen-Z
                </Link>
                <Link 
                  href={`/celebrity-roasts/${celeb.handle}-instagram-roast-friendly`}
                  className="text-center py-2 bg-green-600/20 rounded-lg hover:bg-green-600/30 transition text-sm"
                >
                  😊 Friendly
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(celebIndex.categories).map(([category, celebs]) => (
            <div key={category} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition">
              <div className="text-4xl mb-4">{categoryEmojis[category]}</div>
              <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent capitalize`}>
                {category}s
              </h3>
              <p className="text-gray-400 mb-4">{celebs.length} celebrities</p>
              <div className="space-y-2">
                {celebs.slice(0, 5).map(celeb => (
                  <Link 
                    key={celeb.handle}
                    href={`/celebrity-roasts/${celeb.handle}-instagram-roast-savage`}
                    className="block text-sm text-gray-300 hover:text-purple-400 transition"
                  >
                    → {celeb.name}
                  </Link>
                ))}
              </div>
              {celebs.length > 5 && (
                <p className="text-sm text-purple-400 mt-3">
                  + {celebs.length - 5} more {category}s
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Niche Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Browse by Niche</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(celebIndex.byNiche).map(([niche, celebs]) => (
            <div key={niche} className="px-6 py-3 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-full">
              <span className="capitalize">{niche}</span>
              <span className="ml-2 text-purple-400">({celebs.length})</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* All Celebrities Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">All Celebrities A-Z</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
          {celebIndex.topFollowers.map(celeb => (
            <Link 
              key={celeb.handle}
              href={`/celebrity-roasts/${celeb.handle}-instagram-roast-savage`}
              className="p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition text-center"
            >
              <p className="font-semibold text-sm">{celeb.name}</p>
              <p className="text-xs text-gray-400">@{celeb.handle}</p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Roast Your Own Profile?</h2>
          <p className="text-lg mb-6 text-gray-300">
            Get personalized AI roasts of any Instagram profile with our app
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/roast-generator" className="bg-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
              Try Online Generator →
            </Link>
            <Link href="/download" className="border border-purple-400 px-8 py-4 rounded-full text-lg hover:bg-purple-400/10 transition">
              Get a Full Roast
            </Link>
          </div>
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
