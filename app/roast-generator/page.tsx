'use client';

import Link from "next/link";
import { useState } from "react";

export default function RoastGeneratorPage() {
  const [username, setUsername] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('savage');
  const [isLoading, setIsLoading] = useState(false);
  const [roastResult, setRoastResult] = useState('');
  const [error, setError] = useState('');

  const roastStyles = [
    { id: 'savage', name: 'Savage Mode', emoji: '🔥', color: 'from-red-600 to-orange-600' },
    { id: 'friendly', name: 'Friendly Fire', emoji: '😊', color: 'from-green-600 to-blue-600' },
    { id: 'shakespearean', name: 'Shakespearean', emoji: '🎭', color: 'from-purple-600 to-indigo-600' },
    { id: 'gen-z', name: 'Gen Z', emoji: '💯', color: 'from-pink-600 to-purple-600' }
  ];

  const handleGenerateRoast = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter an Instagram username');
      return;
    }

    setIsLoading(true);
    setError('');
    setRoastResult('');

    // Simulate API call - in production, this would call your backend
    setTimeout(() => {
      const sampleRoasts = {
        savage: `Oh look, another wannabe influencer with 237 followers thinking they're the next big thing. Your aesthetic is as original as a pumpkin spice latte in October. Those filtered selfies aren't hiding your desperation for validation, bestie. 🔥`,
        friendly: `Hey there, social media enthusiast! I see you're really committed to documenting every meal and sunset. Your dedication to the "living my best life" caption game is admirable, even if we've seen that exact beach pose 47 times before. Keep shining! 😊`,
        shakespearean: `Hark! What vanity through yonder Instagram breaks? 'Tis the profile of one who doth post too much, methinks. Thy carefully curated feed speaketh volumes of thy need for digital applause. Forsooth, thy selfies are but shadows dancing on the wall of social approval. 🎭`,
        'gen-z': `Not the millennial pause in your reels 💀 Your whole vibe is giving "I just discovered TikTok trends from 2021." The way you use hashtags like it's 2015... I can't. This is why we can't have nice things. Touch grass immediately bestie. 💯`
      };

      setRoastResult(sampleRoasts[selectedStyle as keyof typeof sampleRoasts]);
      setIsLoading(false);
    }, 2000);
  };

  const handleShare = () => {
    if (navigator.share && roastResult) {
      navigator.share({
        title: 'Check out this AI roast!',
        text: roastResult,
        url: window.location.href
      });
    }
  };

  const handleCopyRoast = () => {
    if (roastResult) {
      navigator.clipboard.writeText(roastResult);
      alert('Roast copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-styles" className="hover:text-purple-400 transition">Roast Styles</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            AI Instagram Roast Generator
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Enter any Instagram username and watch our AI deliver the perfect roast
          </p>
        </div>
      </section>

      {/* Generator Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleGenerateRoast} className="space-y-6">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Instagram Username
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">@</span>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full pl-8 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={isLoading}
                />
              </div>
              {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
            </div>

            {/* Style Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Choose Your Roast Style
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {roastStyles.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-4 rounded-lg border-2 transition ${
                      selectedStyle === style.id
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                    disabled={isLoading}
                  >
                    <span className="text-2xl block mb-1">{style.emoji}</span>
                    <span className="text-sm">{style.name}</span>
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-400">
                <Link href="/roast-styles" className="hover:text-purple-400 transition">
                  Learn more about each style →
                </Link>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition ${
                isLoading
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating Roast...
                </span>
              ) : (
                'Generate Roast 🔥'
              )}
            </button>
          </form>

          {/* Roast Result */}
          {roastResult && (
            <div className="mt-12 animate-fade-in">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Your Roast is Ready! 🔥</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyRoast}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      title="Copy roast"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                      title="Share roast"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a3 3 0 10-5.432-2.684m5.432 2.684l-3.716-2.684m0 0a3 3 0 00-5.432 0m5.432 0l-3.716 2.684m-3.716 0a3 3 0 01-5.432 2.684" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-lg text-gray-300 italic mb-6">
                  "{roastResult}"
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setRoastResult('');
                      setUsername('');
                    }}
                    className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition"
                  >
                    Roast Another Profile
                  </button>
                  <button
                    onClick={() => handleGenerateRoast(new Event('submit') as any)}
                    className="px-6 py-2 border border-purple-400 rounded-full hover:bg-purple-400/10 transition"
                  >
                    Try Different Style
                  </button>
                  <Link
                    href="/download"
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition"
                  >
                    Get the App for More
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Mini Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">⭐ Loved By Thousands</h2>
          <p className="text-gray-400">Join 15,000+ users who got roasted</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 text-sm">"This roast had me DYING 😂 Accuracy level: 💯 My friends couldn't stop laughing!"</p>
            <p className="font-semibold text-white text-sm">Sarah M.</p>
            <p className="text-gray-500 text-xs">App Store</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 text-sm">"Best app ever! The savage mode absolutely destroyed my profile and I loved every second of it 🔥"</p>
            <p className="font-semibold text-white text-sm">Mike Johnson</p>
            <p className="text-gray-500 text-xs">App Store</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-300 mb-4 text-sm">"I can't believe how accurate this AI is. It roasted my aesthetic pics and called me out perfectly 💀"</p>
            <p className="font-semibold text-white text-sm">Jessica L.</p>
            <p className="text-gray-500 text-xs">Twitter</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-black/30">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">1️⃣</div>
            <h3 className="text-xl font-bold mb-2">Enter Username</h3>
            <p className="text-gray-400">Type any public Instagram username - no login required</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">2️⃣</div>
            <h3 className="text-xl font-bold mb-2">Pick Your Style</h3>
            <p className="text-gray-400">Choose from savage, friendly, Shakespearean, or Gen Z</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">3️⃣</div>
            <h3 className="text-xl font-bold mb-2">Get Roasted</h3>
            <p className="text-gray-400">Our AI analyzes the profile and delivers the perfect roast</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Want More Features?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Download our app for unlimited roasts, battle mode, custom styles, and more!
        </p>
        <Link href="/download" className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition inline-block">
          Get the Full Experience →
        </Link>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. All roasts reserved.</p>
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