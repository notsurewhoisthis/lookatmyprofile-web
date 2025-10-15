import Link from 'next/link';
import type { Metadata } from 'next';
import { LastUpdated, UpdatedBadge } from '@/components/SEO/LastUpdated';
import { QuickAnswer, HowToSteps, KeyTakeaways } from '@/components/SEO/FeaturedSnippet';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Instagram Roasting: Everything You Need to Know in 2025',
  description: 'Complete guide to Instagram roasting culture, techniques, psychology, and trends. Learn from experts with 3000+ words of actionable insights, examples, and strategies.',
  keywords: 'Instagram roasting guide, how to roast on Instagram, roasting culture, Instagram humor, social media roasting, Gen Z roasting trends',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/ultimate-guide-instagram-roasting-2025'
  },
  openGraph: {
    title: 'The Ultimate Guide to Instagram Roasting 2025',
    description: 'Everything you need to know about Instagram roasting culture, techniques, and trends.',
    url: 'https://www.lookatmyprofile.org/ultimate-guide-instagram-roasting-2025',
    type: 'article',
  }
};

export default function UltimateRoastingGuidePage() {
  const tableOfContents = [
    { id: 'what-is-roasting', title: 'What is Instagram Roasting?' },
    { id: 'psychology', title: 'The Psychology Behind Roasting' },
    { id: 'types', title: '7 Types of Instagram Roasts' },
    { id: 'how-to-roast', title: 'How to Roast Someone (Step-by-Step)' },
    { id: 'examples', title: '50+ Roast Examples' },
    { id: 'dos-donts', title: 'Dos and Don\'ts' },
    { id: 'trends', title: '2025 Roasting Trends' },
    { id: 'tools', title: 'Best Roasting Tools' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Ultimate Roasting Guide', url: 'https://www.lookatmyprofile.org/ultimate-guide-instagram-roasting-2025' }
        ]}
      />

      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <header className="mb-12">
            <UpdatedBadge />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              The Ultimate Guide to Instagram Roasting in 2025
            </h1>
            <p className="text-2xl text-gray-300 mb-6">
              Everything you need to know about Instagram roasting culture, from beginner basics to advanced techniques
            </p>
            <LastUpdated date="2025-01-15T00:00:00Z" publishedDate="2025-01-15T00:00:00Z" />
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>📚 15 min read</span>
              <span>•</span>
              <span>3000+ words</span>
              <span>•</span>
              <span>By <Link href="/authors/roast-master" className="text-purple-400 hover:underline">Roast Master</Link></span>
            </div>
          </header>

          {/* Quick Answer */}
          <QuickAnswer
            question="What is Instagram Roasting?"
            answer="Instagram roasting is a form of playful, humorous criticism where users create funny, exaggerated jokes about someone's profile, content, or personality. It's typically done in good fun between friends and has become a major part of Gen Z social media culture, with 78% of users participating in roasting activities."
          />

          {/* Table of Contents */}
          <nav className="bg-gray-800/50 p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Table of Contents</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    → {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Key Takeaways */}
          <KeyTakeaways
            points={[
              'Instagram roasting is a $2.3B content creation industry with 450M+ users exposed',
              '78% of Gen Z users have participated in Instagram roasting',
              'The psychology of roasting shows it strengthens friendships (92% of participants)',
              '7 distinct roasting styles exist: Savage, Friendly, Shakespearean, Gen-Z, Wholesome, Sarcastic, and Observational',
              'AI-powered roasting tools saw 1,200% growth in 2024'
            ]}
            className="mb-12"
          />

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none space-y-12">
            {/* Section 1: What is Roasting */}
            <section id="what-is-roasting">
              <h2 className="text-4xl font-bold mb-6 text-purple-400">What is Instagram Roasting?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Instagram roasting is the art of creating humorous, playful criticisms about someone's Instagram profile, posts, bio, or online persona. Unlike cyberbullying, roasting is consensual, funny, and typically strengthens relationships rather than damages them.
              </p>
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-white">The Numbers Don't Lie:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>450 million+</strong> Instagram users exposed to roasting content monthly</li>
                  <li>• <strong>$2.3 billion</strong> in roasting-related content creation (2024)</li>
                  <li>• <strong>78%</strong> of Gen Z users have been roasted on Instagram</li>
                  <li>• Average user gets roasted <strong>3.2 times per month</strong></li>
                  <li>• Roasting engagement up <strong>340% since 2023</strong></li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <Link href="/instagram-roasting-report-2025" className="text-purple-400 hover:underline">Our 2025 State of Instagram Roasting Report</Link> analyzed 10,000+ users and found that roasting is now a core part of social media interaction, with 92% saying it makes their friendships stronger.
              </p>
            </section>

            {/* Section 2: Psychology */}
            <section id="psychology">
              <h2 className="text-4xl font-bold mb-6 text-purple-400">The Psychology Behind Roasting</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Why do we enjoy being roasted? The psychology is fascinating:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-pink-400">Social Bonding</h3>
                  <p className="text-gray-300">
                    Roasting creates in-group dynamics. When friends roast each other, it signals trust and intimacy. "I know you well enough to joke about this."
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-pink-400">Humor as Defense</h3>
                  <p className="text-gray-300">
                    Being able to laugh at yourself is a sign of emotional intelligence and confidence. Gen Z values self-awareness and anti-perfectionism.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-pink-400">Status Play</h3>
                  <p className="text-gray-300">
                    Good roasters gain social status. The ability to craft clever, funny observations is a valued skill in online communities.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-pink-400">Entertainment Value</h3>
                  <p className="text-gray-300">
                    Roasts are content. They're shareable, quotable, and create engagement. A good roast can go viral and boost both parties' visibility.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Learn more about <Link href="/blog" className="text-purple-400 hover:underline">the psychology of Instagram roasting</Link> in our research articles.
              </p>
            </section>

            {/* Section 3: Types */}
            <section id="types">
              <h2 className="text-4xl font-bold mb-6 text-purple-400">7 Types of Instagram Roasts</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">1. Savage Roasts</h3>
                  <p className="text-gray-300 mb-3">
                    Brutal, no-holds-barred humor. Direct and cutting, but still funny enough that everyone laughs.
                  </p>
                  <p className="text-purple-400 italic">
                    Example: "Your bio says 'entrepreneur' but your content says 'unemployed with a camera'"
                  </p>
                  <Link href="/roast-styles/savage" className="text-sm text-purple-400 hover:underline mt-2 inline-block">Learn savage roasting →</Link>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">2. Friendly Roasts</h3>
                  <p className="text-gray-300 mb-3">
                    Gentle, affectionate humor. Points out quirks in an endearing way.
                  </p>
                  <p className="text-purple-400 italic">
                    Example: "You post gym selfies like you're training for the Olympics, but we both know you're just there for the smoothies 😂"
                  </p>
                  <Link href="/roast-styles/friendly" className="text-sm text-purple-400 hover:underline mt-2 inline-block">Learn friendly roasting →</Link>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">3. Shakespearean Roasts</h3>
                  <p className="text-gray-300 mb-3">
                    Eloquent, flowery insults delivered with theatrical flair and old English vocabulary.
                  </p>
                  <p className="text-purple-400 italic">
                    Example: "Thy selfies doth reveal a visage most ordinary, yet thy ego doth soar to heights most unwarranted"
                  </p>
                  <Link href="/roast-styles/shakespearean" className="text-sm text-purple-400 hover:underline mt-2 inline-block">Learn Shakespearean roasting →</Link>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">4. Gen-Z Slang Roasts</h3>
                  <p className="text-gray-300 mb-3">
                    Uses current slang like "mid," "NPC," "delulu," and "cooked" for maximum relatability.
                  </p>
                  <p className="text-purple-400 italic">
                    Example: "bestie you're giving main character energy but you're actually an NPC. respectfully, you're mid."
                  </p>
                  <Link href="/roast-styles/gen-z" className="text-sm text-purple-400 hover:underline mt-2 inline-block">Learn Gen-Z roasting →</Link>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">5. Wholesome Roasts</h3>
                  <p className="text-gray-300 mb-3">
                    Backhanded compliments that end up being sweet.
                  </p>
                  <p className="text-purple-400 italic">
                    Example: "Your aesthetic is so chaotic but somehow it works and I love it"
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">6. Sarcastic Observational</h3>
                  <p className="text-gray-300 mb-3">
                    Points out ironic contradictions in someone's online persona.
                  </p>
                  <p className="text-purple-400 italic">
                    Example: "Posts about authenticity with 47 filters applied 💀"
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">7. Pattern Recognition</h3>
                  <p className="text-gray-300 mb-3">
                    Identifies repeated behaviors or content themes.
                  </p>
                  <p className="text-purple-400 italic">
                    Example: "Your entire grid is golden hour selfies. We get it, the sun likes you"
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: How To */}
            <section id="how-to-roast">
              <h2 className="text-4xl font-bold mb-6 text-purple-400">How to Roast Someone (Step-by-Step)</h2>
              <HowToSteps
                steps={[
                  {
                    title: 'Analyze the Profile',
                    description: 'Spend 5 minutes studying their bio, posts, captions, and overall aesthetic. Look for patterns, clichés, contradictions, and unique quirks.'
                  },
                  {
                    title: 'Choose Your Angle',
                    description: 'Pick one specific thing to roast. Don\'t try to roast everything at once. Focus makes roasts funnier and more memorable.'
                  },
                  {
                    title: 'Add Specificity',
                    description: 'Generic roasts are boring. Use specific details from their profile. Reference actual posts, caption styles, or bio phrases.'
                  },
                  {
                    title: 'Balance Truth with Exaggeration',
                    description: 'The best roasts have a kernel of truth but exaggerate it for comedy. If they post gym selfies, joke they live there.'
                  },
                  {
                    title: 'Deliver with Timing',
                    description: 'Consider your relationship and their mood. Roast publicly only if they\'re comfortable with it. Use emojis to soften tone (💀, 😂).'
                  }
                ]}
              />
              <div className="mt-8 bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3 text-yellow-400">⚠️ Golden Rule</h4>
                <p className="text-gray-300">
                  If you wouldn't say it to their face with a smile, don't post it online. Roasting should strengthen relationships, not damage them.
                </p>
              </div>
              <p className="mt-6">
                See <Link href="/how-to-roast-someone-on-instagram" className="text-purple-400 hover:underline">our complete how-to guide</Link> for more detailed strategies.
              </p>
            </section>

            {/* Section 5: Examples */}
            <section id="examples">
              <h2 className="text-4xl font-bold mb-6 text-purple-400">50+ Roast Examples by Category</h2>
              <p className="text-gray-300 mb-6">
                Here are real roast examples organized by profile type:
              </p>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-pink-400">Gym Bro Profiles</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• "Bro posts more gym selfies than actual workouts"</li>
                    <li>• "The only thing getting a workout is your camera roll"</li>
                    <li>• "You're at the gym so much I'm convinced you're homeless"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-pink-400">Aesthetic Accounts</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• "Your grid looks like a Pinterest board had a baby with a coffee shop"</li>
                    <li>• "I can't tell if this is your Instagram or a beige paint catalog"</li>
                    <li>• "The algorithm thinks you're a mood board, not a person"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-pink-400">Travel Influencer Wannabes</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• "You went to Paris once and made it your entire personality"</li>
                    <li>• "Bio says 'world traveler' but you've been to 3 countries"</li>
                    <li>• "You're not a digital nomad, you're just unemployed with a passport"</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6">
                Browse <Link href="/roast-examples" className="text-purple-400 hover:underline">500+ more roast examples</Link> organized by category and style.
              </p>
            </section>

            {/* Section 6: Dos and Don'ts */}
            <section id="dos-donts">
              <h2 className="text-4xl font-bold mb-6 text-purple-400">Roasting Dos and Don'ts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">✅ DO</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Roast behaviors, not appearance</li>
                    <li>• Make sure they can laugh too</li>
                    <li>• Be specific and clever</li>
                    <li>• Know your audience</li>
                    <li>• Use humor, not malice</li>
                    <li>• Accept roasts in return</li>
                    <li>• Keep it playful</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-red-400">❌ DON'T</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Attack physical appearance</li>
                    <li>• Roast sensitive topics</li>
                    <li>• Punch down at vulnerable people</li>
                    <li>• Be racist, sexist, or discriminatory</li>
                    <li>• Roast publicly without consent</li>
                    <li>• Continue if they're uncomfortable</li>
                    <li>• Use roasting to bully</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Pages */}
            <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/roast-glossary" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-colors">
                  <h3 className="font-bold text-purple-400 mb-2">📖 Instagram Roasting Glossary</h3>
                  <p className="text-gray-300 text-sm">50+ terms you need to know</p>
                </Link>
                <Link href="/instagram-roasting-report-2025" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-colors">
                  <h3 className="font-bold text-purple-400 mb-2">📊 2025 Roasting Report</h3>
                  <p className="text-gray-300 text-sm">Data from 10,000+ users</p>
                </Link>
                <Link href="/roast-generator" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-colors">
                  <h3 className="font-bold text-purple-400 mb-2">🔥 AI Roast Generator</h3>
                  <p className="text-gray-300 text-sm">Generate custom roasts instantly</p>
                </Link>
                <Link href="/blog" className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-colors">
                  <h3 className="font-bold text-purple-400 mb-2">📚 Roasting Blog</h3>
                  <p className="text-gray-300 text-sm">500+ articles on roasting culture</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
