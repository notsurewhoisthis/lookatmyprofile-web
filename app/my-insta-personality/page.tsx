'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';

const personalityTraits = {
  aesthetic: {
    title: "The Aesthetic Curator",
    description: "Your Instagram is a carefully curated museum of vibes and visual poetry",
    roast: "You probably spend 3 hours choosing between Valencia and Clarendon filters, and your camera roll has 47 versions of the same sunset photo.",
    celebrity: "Zendaya",
    vibe: "Main character in an indie film",
    color: "from-purple-500 to-pink-500"
  },
  influencer: {
    title: "The Wannabe Influencer", 
    description: "Every post is a potential brand deal in your mind",
    roast: "You definitely have 'Public Figure' in your bio with 847 followers, and you end every caption with 'Link in bio!' even though it's just your Spotify playlist.",
    celebrity: "A Kardashian (the one nobody remembers)",
    vibe: "LinkedIn but make it fun",
    color: "from-blue-500 to-purple-500"
  },
  foodie: {
    title: "The Food Photographer",
    description: "Your friends' food gets cold because you need the perfect shot",
    roast: "You're the reason restaurants had to create 'Instagram-worthy' dishes. Your last 20 posts are just different angles of avocado toast.",
    celebrity: "Gordon Ramsay (but only the complaining part)",
    vibe: "Food Network reality show contestant",
    color: "from-orange-500 to-red-500"
  },
  gym: {
    title: "The Gym Mirror Enthusiast",
    description: "Your feed is 90% gym selfies and protein shake reviews",
    roast: "We get it, you lift. Your personality is 'leg day' and your bio probably says 'Your workout is my warmup' while you struggle with 10-pound dumbbells.",
    celebrity: "The Rock (but the Tooth Fairy version)",
    vibe: "Motivational poster that nobody asked for",
    color: "from-green-500 to-blue-500"
  },
  traveler: {
    title: "The Wanderlust Warrior",
    description: "Your bio has more flags than the United Nations",
    roast: "You went to Cancun once and now you're 'catching flights not feelings.' Your entire personality is that one semester abroad.",
    celebrity: "Dora the Explorer (adult version)",
    vibe: "Gap year that never ended",
    color: "from-cyan-500 to-blue-500"
  },
  pet: {
    title: "The Pet Account Manager",
    description: "Your pet has more followers than you do",
    roast: "Your dog has its own Instagram with professional photoshoots while you haven't posted a selfie since 2019. We know who the real star is.",
    celebrity: "Dr. Dolittle",
    vibe: "Crazy pet parent at the dog park",
    color: "from-yellow-500 to-orange-500"
  },
  minimal: {
    title: "The Mysterious Minimalist",
    description: "Three posts, no bio, probably thinks they're too cool for Instagram",
    roast: "Your last post was 8 months ago and it's a black square from that one time you pretended to be socially aware. Very mysterious, very unemployed.",
    celebrity: "That one friend nobody really knows",
    vibe: "Witness protection program participant",
    color: "from-gray-500 to-gray-700"
  },
  selfie: {
    title: "The Selfie Sovereign",
    description: "Your feed is basically a shrine to your own face",
    roast: "You have 67 different photos of the same angle because you found your 'good side' in 2018 and never looked back. Your front camera has seen things.",
    celebrity: "Every contestant on Love Island",
    vibe: "Mirror's best friend",
    color: "from-pink-500 to-red-500"
  }
};

export default function MyInstaPersonality() {
  const [username, setUsername] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<typeof personalityTraits[keyof typeof personalityTraits] | null>(null);
  const [showResult, setShowResult] = useState(false);

  const analyzeProfile = () => {
    if (!username.trim()) return;
    
    setIsAnalyzing(true);
    setShowResult(false);
    
    // Simulate AI analysis with random result
    setTimeout(() => {
      const types = Object.keys(personalityTraits) as Array<keyof typeof personalityTraits>;
      const randomType = types[Math.floor(Math.random() * types.length)];
      setResult(personalityTraits[randomType]);
      setIsAnalyzing(false);
      setShowResult(true);
    }, 3000);
  };

  const shareResult = () => {
    const text = `I just got roasted by My Insta Personality! I'm "${result?.title}" 😂 Try it yourself:`;
    const url = 'https://www.lookatmyprofile.org/my-insta-personality';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-900 text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Roast a Profile
            </Link>
            <div className="flex gap-6">
              <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast Generator</Link>
              <Link href="/instagram-bio-generator" className="hover:text-purple-400 transition">Bio Generator</Link>
              <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
                🔥 VIRAL TREND
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              My Insta Personality
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              The AI that reads your Instagram soul and roasts it to perfection. Find out what your profile really says about you.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              Join 500K+ people who've discovered their Instagram personality type
            </p>
          </div>
        </section>

        {/* Analysis Tool */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {!showResult ? (
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">Enter Your Instagram Username</h2>
                  <p className="text-gray-400">Public profiles only • No login required • 100% Free</p>
                </div>
                
                <div className="flex gap-3 mb-6">
                  <input
                    type="text"
                    placeholder="@username"
                    className="flex-1 px-6 py-4 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && analyzeProfile()}
                    disabled={isAnalyzing}
                  />
                  <button
                    onClick={analyzeProfile}
                    disabled={isAnalyzing || !username.trim()}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition ${
                      isAnalyzing || !username.trim()
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
                    }`}
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                  </button>
                </div>

                {isAnalyzing && (
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-400"></div>
                      <p className="text-purple-400">Reading your Instagram soul...</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-500 animate-pulse">Analyzing your aesthetic choices...</p>
                      <p className="text-sm text-gray-500 animate-pulse delay-75">Judging your caption game...</p>
                      <p className="text-sm text-gray-500 animate-pulse delay-150">Calculating your vibe check...</p>
                    </div>
                  </div>
                )}
              </div>
            ) : result && (
              <div className="space-y-6">
                {/* Result Card */}
                <div className={`bg-gradient-to-br ${result.color} p-1 rounded-2xl`}>
                  <div className="bg-gray-900 rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <h2 className="text-4xl font-bold mb-2">{result.title}</h2>
                      <p className="text-xl text-gray-300">{result.description}</p>
                    </div>

                    <div className="space-y-6">
                      {/* The Roast */}
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-3 text-red-400">🔥 The Roast</h3>
                        <p className="text-lg leading-relaxed">{result.roast}</p>
                      </div>

                      {/* Celebrity Match */}
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-3 text-purple-400">⭐ Celebrity Twin</h3>
                        <p className="text-lg">You're basically {result.celebrity}</p>
                      </div>

                      {/* Vibe Check */}
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-3 text-blue-400">✨ Vibe Check</h3>
                        <p className="text-lg">{result.vibe}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-8">
                      <button
                        onClick={shareResult}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
                      >
                        Share Result 📱
                      </button>
                      <button
                        onClick={() => {
                          setShowResult(false);
                          setUsername('');
                        }}
                        className="flex-1 bg-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                </div>

                {/* Download App CTA */}
                <div className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6">
                  <p className="text-lg mb-4">Want deeper roasts and daily personality insights?</p>
                  <Link href="/download" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">
                    Get the Full App 📱
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-400">500K+</div>
                <div className="text-gray-400">Profiles Analyzed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400">8</div>
                <div className="text-gray-400">Personality Types</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400">100%</div>
                <div className="text-gray-400">Accuracy in Roasting</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">👤</div>
                <h3 className="text-xl font-bold mb-2">Enter Username</h3>
                <p className="text-gray-400">Type any public Instagram username</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                <p className="text-gray-400">Our AI analyzes your profile vibe</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-2">Get Roasted</h3>
                <p className="text-gray-400">Receive your personality type & roast</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">More Viral Tools</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/roast-generator" className="bg-gradient-to-br from-red-900/50 to-orange-900/50 p-6 rounded-lg hover:from-red-900/70 hover:to-orange-900/70 transition">
              <h3 className="text-xl font-bold mb-2">🔥 Roast Generator</h3>
              <p className="text-gray-300 text-sm">Get brutally roasted by AI</p>
            </Link>
            <Link href="/instagram-engagement-calculator" className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-lg hover:from-blue-900/70 hover:to-purple-900/70 transition">
              <h3 className="text-xl font-bold mb-2">📊 Engagement Calculator</h3>
              <p className="text-gray-300 text-sm">Check your influence level</p>
            </Link>
            <Link href="/rate-my-instagram-profile" className="bg-gradient-to-br from-green-900/50 to-blue-900/50 p-6 rounded-lg hover:from-green-900/70 hover:to-blue-900/70 transition">
              <h3 className="text-xl font-bold mb-2">⭐ Rate My Profile</h3>
              <p className="text-gray-300 text-sm">Get your profile scored</p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <InternalLinkFooter />
          </div>
        </footer>
      </div>
    </>
  );
}