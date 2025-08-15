'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';

interface EngagementData {
  followers: number;
  posts: number;
  totalLikes: number;
  totalComments: number;
  avgLikes: number;
  avgComments: number;
}

interface EngagementResult {
  rate: number;
  rating: string;
  benchmark: string;
  advice: string;
  color: string;
}

const calculateEngagement = (data: EngagementData): EngagementResult => {
  // Calculate engagement rate: ((likes + comments) / followers) * 100
  const engagementRate = ((data.avgLikes + data.avgComments) / data.followers) * 100;
  
  let rating, benchmark, advice, color;
  
  if (engagementRate >= 6) {
    rating = "Excellent";
    benchmark = "Top 10% of Instagram";
    advice = "Your engagement is outstanding! Keep doing what you're doing.";
    color = "text-green-400";
  } else if (engagementRate >= 3) {
    rating = "Good";
    benchmark = "Above average";
    advice = "Great engagement! Consider posting more consistently to boost it further.";
    color = "text-blue-400";
  } else if (engagementRate >= 1) {
    rating = "Average";
    benchmark = "Industry standard";
    advice = "Your engagement is decent. Try more interactive content like polls and questions.";
    color = "text-yellow-400";
  } else {
    rating = "Below Average";
    benchmark = "Needs improvement";
    advice = "Focus on creating more engaging content and interacting with your audience.";
    color = "text-orange-400";
  }
  
  return {
    rate: engagementRate,
    rating,
    benchmark,
    advice,
    color
  };
};

export default function InstagramEngagementCalculator() {
  const [data, setData] = useState<EngagementData>({
    followers: 0,
    posts: 0,
    totalLikes: 0,
    totalComments: 0,
    avgLikes: 0,
    avgComments: 0
  });
  
  const [calculationMethod, setCalculationMethod] = useState<'average' | 'total'>('average');
  const [result, setResult] = useState<EngagementResult | null>(null);
  const [showBenchmarks, setShowBenchmarks] = useState(false);

  const handleCalculate = () => {
    if (data.followers <= 0) return;
    
    let calcData = { ...data };
    
    if (calculationMethod === 'total' && data.posts > 0) {
      calcData.avgLikes = data.totalLikes / data.posts;
      calcData.avgComments = data.totalComments / data.posts;
    }
    
    const engagementResult = calculateEngagement(calcData);
    setResult(engagementResult);
  };

  const resetCalculator = () => {
    setData({
      followers: 0,
      posts: 0,
      totalLikes: 0,
      totalComments: 0,
      avgLikes: 0,
      avgComments: 0
    });
    setResult(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Instagram Engagement Calculator
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Calculate your engagement rate and see how you stack up against industry benchmarks. 
              Get personalized tips to boost your Instagram performance.
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <div>📊 Instant Results</div>
              <div>🎯 Industry Benchmarks</div>
              <div>💡 Growth Tips</div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {!result ? (
              <>
                {/* Calculation Method Toggle */}
                <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Choose Calculation Method</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setCalculationMethod('average')}
                      className={`p-4 rounded-lg border-2 transition ${
                        calculationMethod === 'average'
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="font-bold mb-1">Average Per Post</div>
                      <div className="text-sm text-gray-400">I know my average likes/comments</div>
                    </button>
                    <button
                      onClick={() => setCalculationMethod('total')}
                      className={`p-4 rounded-lg border-2 transition ${
                        calculationMethod === 'total'
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="font-bold mb-1">Total Stats</div>
                      <div className="text-sm text-gray-400">I'll enter total likes/comments</div>
                    </button>
                  </div>
                </div>

                {/* Input Form */}
                <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">Enter Your Stats</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Followers</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white"
                        placeholder="e.g., 5000"
                        value={data.followers || ''}
                        onChange={(e) => setData({...data, followers: parseInt(e.target.value) || 0})}
                      />
                    </div>
                    
                    {calculationMethod === 'total' && (
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Total Posts</label>
                        <input
                          type="number"
                          className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white"
                          placeholder="e.g., 100"
                          value={data.posts || ''}
                          onChange={(e) => setData({...data, posts: parseInt(e.target.value) || 0})}
                        />
                      </div>
                    )}
                    
                    {calculationMethod === 'average' ? (
                      <>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Average Likes per Post</label>
                          <input
                            type="number"
                            className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white"
                            placeholder="e.g., 150"
                            value={data.avgLikes || ''}
                            onChange={(e) => setData({...data, avgLikes: parseInt(e.target.value) || 0})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Average Comments per Post</label>
                          <input
                            type="number"
                            className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white"
                            placeholder="e.g., 10"
                            value={data.avgComments || ''}
                            onChange={(e) => setData({...data, avgComments: parseInt(e.target.value) || 0})}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Total Likes (all posts)</label>
                          <input
                            type="number"
                            className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white"
                            placeholder="e.g., 15000"
                            value={data.totalLikes || ''}
                            onChange={(e) => setData({...data, totalLikes: parseInt(e.target.value) || 0})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Total Comments (all posts)</label>
                          <input
                            type="number"
                            className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white"
                            placeholder="e.g., 1000"
                            value={data.totalComments || ''}
                            onChange={(e) => setData({...data, totalComments: parseInt(e.target.value) || 0})}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  
                  <button
                    onClick={handleCalculate}
                    disabled={data.followers <= 0}
                    className={`w-full mt-6 py-4 rounded-xl font-semibold text-lg transition ${
                      data.followers <= 0
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50'
                    }`}
                  >
                    Calculate Engagement Rate
                  </button>
                </div>

                {/* Quick Benchmark Reference */}
                <div className="text-center">
                  <button
                    onClick={() => setShowBenchmarks(!showBenchmarks)}
                    className="text-purple-400 hover:text-purple-300 transition"
                  >
                    {showBenchmarks ? 'Hide' : 'Show'} Industry Benchmarks →
                  </button>
                </div>
              </>
            ) : (
              /* Results */
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold mb-2">
                      <span className={result.color}>{result.rate.toFixed(2)}%</span>
                    </div>
                    <div className="text-2xl font-semibold mb-2">{result.rating}</div>
                    <div className="text-gray-400">{result.benchmark}</div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {data.followers.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">Followers</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        {(calculationMethod === 'average' ? data.avgLikes : data.totalLikes / data.posts).toFixed(0)}
                      </div>
                      <div className="text-sm text-gray-400">Avg Likes</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-pink-400">
                        {(calculationMethod === 'average' ? data.avgComments : data.totalComments / data.posts).toFixed(0)}
                      </div>
                      <div className="text-sm text-gray-400">Avg Comments</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">💡 Recommendation</h3>
                    <p className="text-gray-300">{result.advice}</p>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={resetCalculator}
                      className="flex-1 bg-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
                    >
                      Calculate Again
                    </button>
                    <Link
                      href="/roast-generator"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition"
                    >
                      Get Profile Roasted 🔥
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Benchmarks Table */}
            {(showBenchmarks || result) && (
              <div className="mt-8 bg-gray-900/50 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Industry Benchmarks</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                    <span className="font-medium">Excellent</span>
                    <span className="text-green-400">6%+ engagement rate</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
                    <span className="font-medium">Good</span>
                    <span className="text-blue-400">3-6% engagement rate</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg">
                    <span className="font-medium">Average</span>
                    <span className="text-yellow-400">1-3% engagement rate</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-500/10 rounded-lg">
                    <span className="font-medium">Below Average</span>
                    <span className="text-orange-400">&lt;1% engagement rate</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Note: Engagement rates vary by follower count. Accounts with fewer followers typically have higher rates.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Tips Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Boost Your Engagement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">📸 Content Tips</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Post consistently at optimal times</li>
                  <li>• Use high-quality, eye-catching visuals</li>
                  <li>• Create carousel posts for higher engagement</li>
                  <li>• Share behind-the-scenes content</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-pink-400">💬 Interaction Tips</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Ask questions in your captions</li>
                  <li>• Respond to comments quickly</li>
                  <li>• Use polls and quizzes in Stories</li>
                  <li>• Engage with your followers' content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">More Instagram Tools</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/instagram-bio-generator" className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg hover:from-purple-900/70 hover:to-pink-900/70 transition">
              <h3 className="text-xl font-bold mb-2">✨ Bio Generator</h3>
              <p className="text-gray-300 text-sm">Create the perfect bio</p>
            </Link>
            <Link href="/my-insta-personality" className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-6 rounded-lg hover:from-yellow-900/70 hover:to-orange-900/70 transition">
              <h3 className="text-xl font-bold mb-2">🎭 Personality Test</h3>
              <p className="text-gray-300 text-sm">Discover your Instagram personality</p>
            </Link>
            <Link href="/instagram-growth-hacks-2025" className="bg-gradient-to-br from-green-900/50 to-blue-900/50 p-6 rounded-lg hover:from-green-900/70 hover:to-blue-900/70 transition">
              <h3 className="text-xl font-bold mb-2">📈 Growth Hacks</h3>
              <p className="text-gray-300 text-sm">Proven strategies to grow</p>
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