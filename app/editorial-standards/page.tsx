import Link from 'next/link';
import type { Metadata } from 'next/metadata';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Editorial Standards & Ethics | Roast a Profile',
  description: 'Our commitment to accuracy, transparency, and quality in Instagram roasting content. Learn about our editorial process, fact-checking methods, and content guidelines.',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/editorial-standards'
  }
};

export default function EditorialStandardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Editorial Standards', url: 'https://www.lookatmyprofile.org/editorial-standards' }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Editorial Standards & Ethics
            </h1>
            <p className="text-xl text-gray-300">
              Our commitment to providing accurate, helpful, and trustworthy content about Instagram roasting and social media trends.
            </p>
          </header>

          <div className="space-y-12">
            {/* Core Principles */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Core Principles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-white">Accuracy</h3>
                  <p className="text-gray-300">
                    All content is fact-checked and verified before publication. We cite reputable sources and update articles when new information emerges.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-white">Transparency</h3>
                  <p className="text-gray-300">
                    We clearly disclose our methodologies, data sources, and any potential conflicts of interest. Our AI-generated content is clearly labeled.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-white">Expertise</h3>
                  <p className="text-gray-300">
                    Content is created by experts with credentials in social media, psychology, AI, and content strategy. See our <Link href="/authors" className="text-purple-400 hover:underline">author bios</Link>.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-white">User Value</h3>
                  <p className="text-gray-300">
                    Every article is designed to provide practical, actionable insights that help users understand Instagram culture and improve their social media presence.
                  </p>
                </div>
              </div>
            </section>

            {/* Editorial Process */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Editorial Process</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-white">1. Research & Ideation</h3>
                  <p className="text-gray-300">
                    Topics are selected based on search trends, user questions, and emerging social media phenomena. We analyze data from Google Trends, Reddit, Twitter, and TikTok.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-white">2. Expert Writing</h3>
                  <p className="text-gray-300">
                    Content is written by subject matter experts with relevant credentials. Each article includes the author's bio and expertise.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-white">3. Fact-Checking</h3>
                  <p className="text-gray-300">
                    All statistics, claims, and examples are verified against primary sources. We link to original research, studies, and authoritative sources.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-white">4. Editorial Review</h3>
                  <p className="text-gray-300">
                    Articles undergo editorial review for clarity, accuracy, and adherence to our style guide before publication.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold mb-2 text-white">5. Regular Updates</h3>
                  <p className="text-gray-300">
                    Content is reviewed quarterly and updated with new data, examples, and trends. Update dates are clearly displayed.
                  </p>
                </div>
              </div>
            </section>

            {/* Content Guidelines */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Content Guidelines</h2>
              <div className="bg-gray-800/30 p-8 rounded-xl space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-gray-300"><strong>Evidence-Based:</strong> Claims supported by data, research, or expert opinion</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-gray-300"><strong>Original Insights:</strong> Unique perspectives and original research</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-gray-300"><strong>Practical Value:</strong> Actionable advice and real-world examples</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-gray-300"><strong>Respectful Tone:</strong> Humorous but never cruel, discriminatory, or offensive</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <p className="text-gray-300"><strong>Current & Relevant:</strong> Up-to-date with 2025 trends and platform changes</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">✗</span>
                  <p className="text-gray-300"><strong>No Clickbait:</strong> Headlines accurately reflect content</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">✗</span>
                  <p className="text-gray-300"><strong>No Harmful Content:</strong> No bullying, harassment, or personal attacks</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">✗</span>
                  <p className="text-gray-300"><strong>No Plagiarism:</strong> All content is original or properly attributed</p>
                </div>
              </div>
            </section>

            {/* Data & Research */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Data & Research Standards</h2>
              <p className="text-gray-300 mb-6">
                Our research follows rigorous standards to ensure credibility:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>Sample Sizes:</strong> We clearly state sample sizes and methodology for any proprietary research (e.g., our 2025 Instagram Roasting Report analyzed 10,000+ users)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>Source Citations:</strong> All statistics link to original sources within 1 click</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>Recency:</strong> Data is dated and sourced from the last 12-24 months when possible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">•</span>
                  <span><strong>Transparency:</strong> Methodologies are explained in detail in our research reports</span>
                </li>
              </ul>
            </section>

            {/* AI Disclosure */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">AI-Assisted Content</h2>
              <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl">
                <p className="text-gray-300 mb-4">
                  Some articles use AI assistance for research, outlining, or drafting. However:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• All AI-generated content is reviewed and edited by human experts</li>
                  <li>• Final articles are fact-checked and validated</li>
                  <li>• AI cannot replace human judgment, creativity, and expertise</li>
                  <li>• We prioritize original insights over AI regurgitation</li>
                </ul>
              </div>
            </section>

            {/* Corrections Policy */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Corrections & Updates</h2>
              <p className="text-gray-300 mb-4">
                We take accuracy seriously. If you find an error:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Email us at <a href="mailto:editorial@lookatmyprofile.org" className="text-purple-400 hover:underline">editorial@lookatmyprofile.org</a></li>
                <li>• We will investigate and correct errors within 48 hours</li>
                <li>• Significant corrections are noted at the top of articles</li>
                <li>• Minor typos are corrected silently</li>
              </ul>
              <p className="text-gray-400 text-sm italic">
                Last updated: January 15, 2025
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Questions About Our Standards?</h3>
              <p className="text-gray-300 mb-6">
                We're committed to transparency and accountability. Reach out anytime.
              </p>
              <Link
                href="/support"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
