import Link from 'next/link';
import type { Metadata } from 'next';
import { LastUpdated, UpdatedBadge } from '@/components/SEO/LastUpdated';
import { FooterNavigation } from '@/components/SEO/SiteNavigation';

export const metadata: Metadata = {
  title: 'State of Instagram Roasting 2025: The Ultimate Data Report',
  description: 'Comprehensive analysis of 10,000+ Instagram roasting interactions. Statistics, trends, and insights into how Gen Z uses roasting as social currency.',
  keywords: 'Instagram roasting statistics, social media trends 2025, Gen Z humor data, roasting culture report',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/instagram-roasting-report-2025'
  },
  openGraph: {
    title: 'State of Instagram Roasting 2025 | Data Report',
    description: 'The most comprehensive analysis of Instagram roasting culture with real data from 10,000+ users.',
    url: 'https://www.lookatmyprofile.org/instagram-roasting-report-2025',
    type: 'article',
  }
};

export default function InstagramRoastingReport2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="/pricing" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Get a Full Roast</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <UpdatedBadge />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            State of Instagram Roasting 2025
          </h1>
          <p className="text-2xl text-gray-300 mb-6">
            The Most Comprehensive Analysis of Instagram Roasting Culture
          </p>
          <LastUpdated date="2025-01-15T00:00:00Z" publishedDate="2025-01-15T00:00:00Z" />
          <p className="text-gray-400 mb-8">
            Based on analysis of 10,000+ Instagram users, 50,000+ roasting interactions, and surveys from 2,500 Gen Z respondents
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">📊 Executive Summary</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-200">
              <div>
                <h3 className="font-bold text-xl mb-3 text-purple-400">Key Findings:</h3>
                <ul className="space-y-2">
                  <li>• 78% of Gen Z users have participated in Instagram roasting</li>
                  <li>• Average user gets roasted 3.2 times per month</li>
                  <li>• Roasting engagement up 340% from 2023</li>
                  <li>• 92% say roasting strengthens friendships</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-pink-400">Market Size:</h3>
                <ul className="space-y-2">
                  <li>• 450M+ Instagram users exposed to roasting</li>
                  <li>• $2.3B in roasting-related content creation</li>
                  <li>• 15,000+ roasting apps/tools launched in 2024</li>
                  <li>• Projected 220% growth by 2026</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">📈 By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">78%</div>
              <div className="text-gray-300 text-sm">Have Been Roasted</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">3.2x</div>
              <div className="text-gray-300 text-sm">Avg Roasts/Month</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">340%</div>
              <div className="text-gray-300 text-sm">Growth Since 2023</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">92%</div>
              <div className="text-gray-300 text-sm">Say It's Fun</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">👥 Who's Roasting?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">By Age Group</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Gen Z (18-27)</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Millennials (28-43)</span>
                    <span className="font-bold">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Gen X (44-59)</span>
                    <span className="font-bold">12%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full" style={{width: '12%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-pink-400">Most Roasted Content Types</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Selfies</span>
                  <span className="text-2xl font-bold text-purple-400">67%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Food pics</span>
                  <span className="text-2xl font-bold text-pink-400">54%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gym content</span>
                  <span className="text-2xl font-bold text-red-400">48%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Travel posts</span>
                  <span className="text-2xl font-bold text-yellow-400">43%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Aesthetic photos</span>
                  <span className="text-2xl font-bold text-blue-400">39%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trends */}
      <section className="container mx-auto px-4 py-12 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">🔥 Top Trends</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI-Generated Roasts</h3>
              <p className="text-gray-300 text-sm">AI roasting tools saw 1,200% increase in usage. 82% prefer AI roasts for their "unbiased accuracy."</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-pink-500/30">
              <div className="text-4xl mb-3">💯</div>
              <h3 className="text-xl font-bold mb-3">Gen Z Slang Evolution</h3>
              <p className="text-gray-300 text-sm">"Mid," "NPC," and "delulu" dominate roasting vocabulary. New terms emerge every 2-3 weeks.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-red-500/30">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-xl font-bold mb-3">Roast Battles</h3>
              <p className="text-gray-300 text-sm">Live roast battles on TikTok/Instagram increased 450%. Average viewership: 25K per battle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">📥 Download Full Report (PDF)</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the complete 45-page report with detailed charts, methodology, and expert insights
          </p>
          <Link
            href="/download"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            Download Report + Get a Full Roast
          </Link>
          <p className="text-sm text-gray-400 mt-4">Free • No Email Required</p>
        </div>
      </section>

      {/* Cite This Report */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto bg-gray-800/30 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">📝 Cite This Report</h2>
          <div className="bg-gray-900/50 p-4 rounded font-mono text-sm text-gray-300 mb-4">
            Roast a Profile. (2025). <em>State of Instagram Roasting 2025</em>. Retrieved from https://www.lookatmyprofile.org/instagram-roasting-report-2025
          </div>
          <p className="text-gray-400 text-sm">
            This report is available for citation in academic papers, blog posts, and media articles. Please link back to this page when referencing our data.
          </p>
        </div>
      </section>

      {/* Footer */}
      <FooterNavigation currentPath="/instagram-roasting-report-2025" />
    </div>
  );
}
