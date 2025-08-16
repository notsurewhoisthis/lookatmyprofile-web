import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Best Instagram Roast Videos - TikTok & YouTube Compilations',
  description: 'Watch the funniest Instagram roast videos from TikTok and YouTube. Viral roast compilations, savage burns, and hilarious profile takedowns.',
  keywords: 'instagram roast videos, tiktok roasts, youtube roast compilations, viral instagram burns, funny profile roasts',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-videos'
  },
  openGraph: {
    title: 'Viral Instagram Roast Videos - Must-Watch Compilations',
    description: 'The internet\'s best collection of Instagram roast videos. Watch and learn from the masters of digital burns.',
    url: 'https://www.lookatmyprofile.org/roast-videos',
    type: 'website',
    images: [{
      url: 'https://www.lookatmyprofile.org/api/og?title=Instagram%20Roast%20Videos',
      width: 1200,
      height: 630,
      alt: 'Instagram Roast Videos'
    }]
  }
};

interface VideoItem {
  id: string;
  title: string;
  platform: 'tiktok' | 'youtube';
  embedId: string;
  description: string;
  category: string;
}

const videoContent: VideoItem[] = [
  {
    id: '1',
    title: 'Savage Instagram Bio Roasts Compilation',
    platform: 'youtube',
    embedId: 'dQw4w9WgXcQ', // Example ID - replace with actual
    description: 'The most brutal Instagram bio roasts that went viral. Learn how to craft the perfect burn.',
    category: 'Bio Roasts'
  },
  {
    id: '2',
    title: 'Gen Z Roasting Millennials on Instagram',
    platform: 'tiktok',
    embedId: '7287682434524605698', // Example ID - replace with actual
    description: 'When Gen Z discovers millennial Instagram habits. Pure comedy gold.',
    category: 'Generational Roasts'
  },
  {
    id: '3',
    title: 'AI Roast Generator Goes Too Far',
    platform: 'youtube',
    embedId: 'dQw4w9WgXcQ', // Example ID - replace with actual
    description: 'Watch people react to AI-generated roasts of their profiles. Some tears were shed.',
    category: 'AI Roasts'
  }
];

export default function RoastVideosPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGallery",
    "name": "Instagram Roast Videos Collection",
    "description": "Curated collection of the best Instagram roast videos from TikTok and YouTube",
    "url": "https://www.lookatmyprofile.org/roast-videos",
    "video": videoContent.map(video => ({
      "@type": "VideoObject",
      "name": video.title,
      "description": video.description,
      "embedUrl": video.platform === 'youtube' 
        ? `https://www.youtube.com/embed/${video.embedId}`
        : `https://www.tiktok.com/embed/${video.embedId}`,
      "thumbnailUrl": video.platform === 'youtube'
        ? `https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`
        : "https://www.lookatmyprofile.org/tiktok-thumb.jpg"
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Roast Videos', url: '/roast-videos' }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Try Generator</Link>
            <Link href="/roast-styles" className="hover:text-purple-400 transition">Roast Styles</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Get App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Viral Instagram Roast Videos
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Watch and learn from the internet's most savage Instagram roasts. 
            From TikTok burns to YouTube compilations, we've collected the best.
          </p>
        </div>
      </section>

      {/* Video Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition">
            All Videos
          </button>
          <button className="px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            Bio Roasts
          </button>
          <button className="px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            Selfie Roasts
          </button>
          <button className="px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            Influencer Roasts
          </button>
          <button className="px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            AI Generated
          </button>
        </div>
      </section>

      {/* Video Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videoContent.map((video) => (
            <div key={video.id} className="bg-gray-800/50 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-900 relative">
                {video.platform === 'youtube' ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-gray-400">TikTok: @{video.embedId}</p>
                      <a 
                        href={`https://www.tiktok.com/@roastprofile/video/${video.embedId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 mt-2 inline-block"
                      >
                        Watch on TikTok →
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs text-purple-400 uppercase tracking-wide">
                  {video.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
                <div className="flex gap-3 mt-4">
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    Share →
                  </button>
                  <Link 
                    href="/roast-generator" 
                    className="text-purple-400 hover:text-purple-300 text-sm"
                  >
                    Try This Style →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 px-8 py-3 rounded-full hover:bg-gray-700 transition">
            Load More Videos
          </button>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Learn from the Pros</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">How to Film Roast Videos</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Keep it under 60 seconds for maximum impact</li>
                <li>• Use good lighting to show reactions clearly</li>
                <li>• Include the original profile for context</li>
                <li>• Add captions for accessibility</li>
                <li>• End with a memorable punchline</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Going Viral Tips</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Post during peak hours (7-9 PM)</li>
                <li>• Use trending audio and hashtags</li>
                <li>• Collaborate with other creators</li>
                <li>• Respond to comments quickly</li>
                <li>• Cross-post to multiple platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Create Your Own Roast Content</h2>
        <p className="text-xl text-gray-300 mb-8">
          Use our AI roast generator to create viral-worthy content for your videos
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/roast-generator" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            Generate Roasts →
          </Link>
          <Link 
            href="/download" 
            className="border border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition"
          >
            Get the App
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Video Roasting FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Can I use these videos in my content?</h3>
            <p className="text-gray-300">
              Always credit the original creator and follow platform guidelines. 
              Most creators appreciate shares and collaborations when properly attributed.
            </p>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">How do I submit my roast video?</h3>
            <p className="text-gray-300">
              Tag us @roastprofile on TikTok or Instagram with #RoastAProfile 
              and we might feature your video in our collection!
            </p>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">What makes a roast video go viral?</h3>
            <p className="text-gray-300">
              Timing, relatability, and delivery are key. The best viral roasts 
              are clever, quick, and tap into shared experiences everyone can relate to.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Watch responsibly.</p>
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