'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Zap, TrendingUp, Users, Heart, MessageCircle, Bookmark, Share2, Clock, Target, Sparkles, Trophy } from 'lucide-react';

export default function InstagramGrowthHacks2025() {
  const [activeHack, setActiveHack] = useState<number | null>(null);
  const [checkedHacks, setCheckedHacks] = useState<Set<number>>(new Set());

  const growthHacks = [
    {
      id: 1,
      category: "Algorithm Mastery",
      title: "The 3-3-3 Strategy",
      difficulty: "Easy",
      impact: "High",
      description: "Post 3 times a week, use 3 hashtag categories, engage for 3 minutes after posting",
      details: "Instagram's algorithm prioritizes consistency and immediate engagement. By posting 3 times weekly at peak hours, using 3 types of hashtags (niche, medium, broad), and spending the first 3 minutes actively responding to comments, you signal high-quality content to the algorithm.",
      implementation: [
        "Schedule posts for Tuesday, Thursday, and Saturday at your audience's peak times",
        "Use 10 niche hashtags (under 50k posts), 10 medium (50k-500k), and 10 broad (500k+)",
        "Set a timer for 3 minutes post-publishing to respond to every comment immediately"
      ]
    },
    {
      id: 2,
      category: "Content Strategy",
      title: "The Carousel Hack",
      difficulty: "Medium",
      impact: "Very High",
      description: "10-slide carousels get 3.1x more engagement than single photos",
      details: "Carousels keep users on your post longer, sending positive signals to the algorithm. The key is making slide 1 irresistible and slide 10 valuable enough to screenshot.",
      implementation: [
        "Start with a bold claim or question on slide 1",
        "Use slides 2-9 to build value progressively",
        "End with a 'save-worthy' summary or checklist on slide 10",
        "Add 'swipe →' text on early slides to increase completion rate"
      ]
    },
    {
      id: 3,
      category: "Reels Optimization",
      title: "The 3-Second Hook",
      difficulty: "Medium",
      impact: "Critical",
      description: "You have 3 seconds to stop the scroll - make them count",
      details: "Instagram counts a view after 3 seconds, but retention is key. Opening with pattern interrupts, unexpected visuals, or bold text overlays can 10x your view-through rate.",
      implementation: [
        "Start with action, not introductions",
        "Use text hooks like 'Wait for it...' or 'You've been doing X wrong'",
        "Add captions for silent viewers (85% watch without sound)",
        "Keep videos under 30 seconds for maximum replay value"
      ]
    },
    {
      id: 4,
      category: "Engagement Tactics",
      title: "The DM Strategy",
      difficulty: "Easy",
      impact: "High",
      description: "DMs are the new engagement gold - they're weighted 5x more than comments",
      details: "Instagram's algorithm heavily favors accounts that generate DM conversations. Creating content that naturally encourages DMs can skyrocket your reach.",
      implementation: [
        "End posts with 'DM me [word] for the link/guide/list'",
        "Create shareable content with 'Send this to someone who...'",
        "Use polls and questions in Stories that require DM responses",
        "Set up auto-replies for common DM keywords"
      ]
    },
    {
      id: 5,
      category: "Hashtag Science",
      title: "The Ladder Method",
      difficulty: "Hard",
      impact: "High",
      description: "Climb from small to large hashtags as your post gains traction",
      details: "Start with ultra-niche hashtags where you can rank in 'Top Posts' quickly, then let momentum carry you to larger hashtags. This creates a compound effect.",
      implementation: [
        "First 10 hashtags: Under 10k posts (instant ranking potential)",
        "Next 10: 10k-100k posts (momentum builders)",
        "Final 10: 100k-1M posts (reach amplifiers)",
        "Track which hashtags you rank for and adjust accordingly"
      ]
    },
    {
      id: 6,
      category: "Story Hacks",
      title: "The Story Stacking",
      difficulty: "Easy",
      impact: "Medium",
      description: "Post 5-7 Stories daily to stay at the front of followers' Story bar",
      details: "Accounts that post multiple Stories daily get 2x more profile visits. The key is variety - mix content types to maintain interest.",
      implementation: [
        "Morning: Behind-the-scenes or morning routine",
        "Midday: Educational content or tips",
        "Afternoon: Interactive polls or questions",
        "Evening: User-generated content or testimonials",
        "Night: Next day teaser or reflection"
      ]
    },
    {
      id: 7,
      category: "Collaboration Tactics",
      title: "The Triangle Method",
      difficulty: "Medium",
      impact: "Very High",
      description: "Partner with 2 accounts your size for 3-way engagement pods",
      details: "Three accounts supporting each other's content within the first hour creates an algorithmic boost that can 5x your reach. The key is genuine, valuable interactions.",
      implementation: [
        "Find 2 accounts in complementary (not competing) niches",
        "Set up a DM group for coordination",
        "Engage authentically within 30 minutes of each other's posts",
        "Share each other's content to Stories weekly",
        "Do monthly 3-way collaborations or takeovers"
      ]
    },
    {
      id: 8,
      category: "Bio Optimization",
      title: "The Keyword Stack",
      difficulty: "Easy",
      impact: "Medium",
      description: "Your bio is SEO gold - optimize it for Instagram search",
      details: "Instagram search now works like a search engine. Having the right keywords in your name field and bio can drive 40% more discovery.",
      implementation: [
        "Add your main keyword to your name field (not just username)",
        "Use vertical bars | to separate keyword phrases in bio",
        "Include location keywords if relevant",
        "Add searchable emojis related to your niche",
        "Update keywords based on trending searches monthly"
      ]
    },
    {
      id: 9,
      category: "Timing Tactics",
      title: "The Golden Hours",
      difficulty: "Easy",
      impact: "High",
      description: "Post when your audience is scrolling, not when they're busy",
      details: "Posting at the right time can 3x your engagement. The secret is finding when your specific audience is most active AND most likely to engage.",
      implementation: [
        "Check Insights for your top 3 active hours",
        "Post 30 minutes before peak time to build momentum",
        "Test posting at 6am, 12pm, 5pm, and 8pm",
        "Track engagement rates, not just reach",
        "Adjust for time zones if you have global audience"
      ]
    },
    {
      id: 10,
      category: "Psychology Hacks",
      title: "The Curiosity Gap",
      difficulty: "Medium",
      impact: "High",
      description: "Create knowledge gaps that followers NEED to fill",
      details: "Humans can't resist unfinished stories. Creating strategic information gaps makes your content irresistible and shareable.",
      implementation: [
        "Tease results: 'I tried X for 30 days and...' (swipe for results)",
        "Number drops: 'The #1 mistake everyone makes with...'",
        "Before/after without immediate reveal",
        "Start stories in captions, finish in comments",
        "Use cliffhangers between carousel slides"
      ]
    }
  ];

  const toggleHack = (id: number) => {
    setActiveHack(activeHack === id ? null : id);
  };

  const toggleCheck = (id: number) => {
    const newChecked = new Set(checkedHacks);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedHacks(newChecked);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getImpactColor = (impact: string) => {
    switch(impact) {
      case 'Critical': return 'bg-red-600';
      case 'Very High': return 'bg-purple-600';
      case 'High': return 'bg-blue-600';
      case 'Medium': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <>
      <header className="bg-black border-b border-gray-800">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Roast My Profile
            </Link>
            <Link href="/download" className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:opacity-90 transition">
              Get the App
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm">2025 Algorithm Update Ready</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Instagram Growth Hacks 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              10 Proven Strategies to Explode Your Instagram Growth in 2025 - Based on Algorithm Changes, 
              Data from 10,000+ Accounts, and Insider Secrets
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-400" />
                <p className="text-2xl font-bold">347%</p>
                <p className="text-sm text-gray-400">Avg Growth Rate</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <Users className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-gray-400">Accounts Tested</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <Clock className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <p className="text-2xl font-bold">30 Days</p>
                <p className="text-sm text-gray-400">To First 10K</p>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="bg-gray-800/30 rounded-lg p-4 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Your Progress</span>
                <span className="text-sm text-purple-400">{checkedHacks.size}/10 Implemented</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(checkedHacks.size / 10) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Growth Hacks List */}
          <div className="space-y-4">
            {growthHacks.map((hack) => (
              <div 
                key={hack.id}
                className={`bg-gray-800/50 rounded-lg overflow-hidden transition-all duration-300 ${
                  activeHack === hack.id ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {/* Hack Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleHack(hack.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={checkedHacks.has(hack.id)}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleCheck(hack.id);
                          }}
                          className="w-6 h-6 rounded border-2 border-purple-500 text-purple-600 focus:ring-purple-500 focus:ring-2 cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xs bg-purple-600/30 text-purple-400 px-2 py-1 rounded">
                            {hack.category}
                          </span>
                          <span className={`text-xs ${getDifficultyColor(hack.difficulty)}`}>
                            {hack.difficulty}
                          </span>
                          <span className={`text-xs text-white px-2 py-1 rounded ${getImpactColor(hack.impact)}`}>
                            {hack.impact} Impact
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">
                          Hack #{hack.id}: {hack.title}
                        </h3>
                        <p className="text-gray-300">{hack.description}</p>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-6 h-6 text-gray-400 transition-transform ${
                        activeHack === hack.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Hack Details */}
                {activeHack === hack.id && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="pt-6">
                      <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-lg mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                          Why This Works
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{hack.details}</p>
                      </div>

                      <div className="bg-gray-900/50 rounded-lg p-6">
                        <h4 className="font-bold text-lg mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-green-400" />
                          Step-by-Step Implementation
                        </h4>
                        <ol className="space-y-3">
                          {hack.implementation.map((step, index) => (
                            <li key={index} className="flex items-start">
                              <span className="bg-purple-600 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                {index + 1}
                              </span>
                              <span className="text-gray-300">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="mt-6 flex justify-between items-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCheck(hack.id);
                          }}
                          className={`px-6 py-2 rounded-full transition ${
                            checkedHacks.has(hack.id)
                              ? 'bg-green-600 hover:bg-green-700'
                              : 'bg-purple-600 hover:bg-purple-700'
                          }`}
                        >
                          {checkedHacks.has(hack.id) ? '✓ Implemented' : 'Mark as Done'}
                        </button>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                            <Bookmark className="w-5 h-5" />
                          </button>
                          <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-8">
            <div className="text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h2 className="text-2xl font-bold mb-4">🎯 The Ultimate Growth Secret</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Want to know what REALLY separates accounts that explode from those that plateau? 
                It's not just tactics - it's having your profile roasted to identify your blind spots.
              </p>
              <p className="text-lg mb-6 text-purple-300">
                Get a brutally honest AI analysis of your Instagram profile and discover exactly 
                what's holding you back from viral growth.
              </p>
              <Link 
                href="/download" 
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition"
              >
                Get Your Profile Roasted →
              </Link>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-12 border-t border-gray-800 pt-8">
            <h3 className="text-xl font-bold mb-6">More Instagram Tools & Resources</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/instagram-bio-generator" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition">
                <h4 className="font-semibold mb-2">Bio Generator</h4>
                <p className="text-sm text-gray-400">Create the perfect Instagram bio</p>
              </Link>
              <Link href="/instagram-engagement-calculator" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition">
                <h4 className="font-semibold mb-2">Engagement Calculator</h4>
                <p className="text-sm text-gray-400">Check your engagement rate</p>
              </Link>
              <Link href="/my-insta-personality" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition">
                <h4 className="font-semibold mb-2">Personality Test</h4>
                <p className="text-sm text-gray-400">Discover your Insta personality</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Roast My Profile. Growing Instagram accounts one roast at a time.</p>
        </div>
      </footer>
    </>
  );
}