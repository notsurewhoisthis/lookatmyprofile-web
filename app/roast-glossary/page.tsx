import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';
import { SpeakableSchema } from '@/components/SEO/SpeakableSchema';
import { FooterNavigation, InlineLinks, siteLinks } from '@/components/SEO/SiteNavigation';

export const metadata: Metadata = {
  title: 'Roasting Dictionary - Instagram Roast Terms & Slang Glossary',
  description: 'Complete glossary of roasting terms, Instagram slang, and Gen Z roast vocabulary. Learn what clapped, mid, ratio, and other roast terms mean.',
  keywords: 'roast dictionary, roasting terms, Instagram slang, Gen Z slang, roast glossary, what does mid mean, clapped meaning, ratio meaning',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-glossary'
  },
  openGraph: {
    title: 'Ultimate Roasting Dictionary - All Terms Explained',
    description: 'Master the art of roasting with our complete glossary of terms and slang.',
    url: 'https://www.lookatmyprofile.org/roast-glossary',
    type: 'website'
  }
};

const roastTerms = [
  {
    term: "Clapped",
    definition: "When someone or something looks terrible, ugly, or broken. Often used to roast someone's appearance or outfit.",
    example: "Your selfie game is absolutely clapped, bestie.",
    category: "appearance"
  },
  {
    term: "Mid",
    definition: "Average, mediocre, or unremarkable. The ultimate insult for someone trying to be special.",
    example: "Your whole Instagram aesthetic is just... mid.",
    category: "general"
  },
  {
    term: "Ratio",
    definition: "When a reply or comment gets more likes than the original post, indicating the original was bad.",
    example: "You got ratioed by your own mom in the comments.",
    category: "engagement"
  },
  {
    term: "No cap",
    definition: "No lie, for real, genuinely. Often used to emphasize the truth in a roast.",
    example: "No cap, your feed looks like a Pinterest board had a mental breakdown.",
    category: "emphasis"
  },
  {
    term: "Bussin",
    definition: "Really good or amazing. Used sarcastically in roasts to mean the opposite.",
    example: "Your photography skills are really bussin... said no one ever.",
    category: "sarcasm"
  },
  {
    term: "Cheugy",
    definition: "Outdated, trying too hard, or off-trend. The millennial trying to be Gen Z.",
    example: "The 'Live Laugh Love' energy in your posts is extremely cheugy.",
    category: "trends"
  },
  {
    term: "Salty",
    definition: "Bitter, upset, or angry about something. Often the reaction to being roasted.",
    example: "Don't get salty just because your aesthetic is giving 2016 vibes.",
    category: "reaction"
  },
  {
    term: "Pressed",
    definition: "Bothered, stressed, or upset about something insignificant.",
    example: "You're pressed about likes while your content is pressing everyone's unfollow button.",
    category: "reaction"
  },
  {
    term: "L + Ratio",
    definition: "Taking a loss plus getting ratioed. The ultimate combo roast.",
    example: "L + ratio + your feed is mid + touch grass.",
    category: "combo"
  },
  {
    term: "Touch grass",
    definition: "Go outside, get off the internet, experience real life.",
    example: "370 posts this month? Please touch grass immediately.",
    category: "lifestyle"
  },
  {
    term: "NPC Energy",
    definition: "Acting like a non-player character; basic, predictable, no original thoughts.",
    example: "Your captions are giving major NPC energy.",
    category: "personality"
  },
  {
    term: "Caught in 4K",
    definition: "Caught doing something embarrassing with clear evidence.",
    example: "Caught in 4K using the same caption for 12 different posts.",
    category: "exposed"
  },
  {
    term: "It's giving...",
    definition: "It resembles or reminds me of... Used to compare someone to something unflattering.",
    example: "Your profile pic is giving 2010 Facebook energy.",
    category: "comparison"
  },
  {
    term: "Rent free",
    definition: "Living in someone's head without paying; they can't stop thinking about you.",
    example: "Your ex viewing all your stories = you living rent free.",
    category: "psychology"
  },
  {
    term: "Down bad",
    definition: "Desperately wanting someone or something; extremely thirsty.",
    example: "Commenting '😍' on every post? You're down bad.",
    category: "thirsty"
  },
  {
    term: "Simping",
    definition: "Doing too much for someone who doesn't care about you.",
    example: "Stop simping in their comments, they don't even follow you back.",
    category: "thirsty"
  },
  {
    term: "Pick me",
    definition: "Someone who seeks validation by putting others down or being 'not like other girls/guys'.",
    example: "Your 'I hate drama' posts are giving pick me energy.",
    category: "personality"
  },
  {
    term: "Main character",
    definition: "Acting like life revolves around you. Can be positive or negative.",
    example: "You think you're the main character but you're barely an extra.",
    category: "personality"
  },
  {
    term: "Slaps",
    definition: "Something that's really good. Opposite when used in roasts.",
    example: "Your content definitely slaps... the unfollow button.",
    category: "sarcasm"
  },
  {
    term: "Vibe check",
    definition: "Checking someone's energy or mood; failing means bad vibes.",
    example: "Your whole profile failed the vibe check.",
    category: "energy"
  }
];

export default function RoastGlossaryPage() {
  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Instagram Roasting Terms Glossary",
    "description": "Complete dictionary of roasting terms and Instagram slang",
    "hasPart": roastTerms.map(term => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.definition
    }))
  };

  const categories = [...new Set(roastTerms.map(t => t.category))];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      
      <SpeakableSchema 
        url="https://www.lookatmyprofile.org/roast-glossary"
        headlines={["Roasting Dictionary - Instagram Roast Terms & Slang"]}
        summary="Complete glossary of roasting terms and Instagram slang explained."
      />

      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Roast Glossary', url: 'https://www.lookatmyprofile.org/roast-glossary' }
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Roasting <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dictionary</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Master the language of roasting with our complete glossary
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map(cat => (
                  <a 
                    key={cat}
                    href={`#${cat}`}
                    className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full hover:bg-purple-600/30 transition-colors"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400">{roastTerms.length}</div>
                <div className="text-gray-400">Terms</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-pink-400">{categories.length}</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">2025</div>
                <div className="text-gray-400">Updated</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">Gen Z</div>
                <div className="text-gray-400">Approved</div>
              </div>
            </div>

            {/* Terms Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {roastTerms.map((item, index) => (
                <div 
                  key={index} 
                  id={item.category}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold text-white">{item.term}</h2>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{item.definition}</p>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <p className="text-sm text-gray-400">Example:</p>
                    <p className="text-pink-400 italic">"{item.example}"</p>
                  </div>
                </div>
              ))}
            </div>

            {/* How to Use Section */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                How to Use These Terms
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Know Your Audience</h3>
                  <p className="text-gray-300 text-sm">
                    Gen Z terms work best with younger audiences
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">😂</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Keep It Light</h3>
                  <p className="text-gray-300 text-sm">
                    Roasting should be funny, not hurtful
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔥</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mix & Match</h3>
                  <p className="text-gray-300 text-sm">
                    Combine terms for maximum roast impact
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Roast Like a Pro?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Put your new vocabulary to use with our AI roast generator
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/roast-generator"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  Start Roasting
                </Link>
                <Link 
                  href="/roast-examples"
                  className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-all"
                >
                  See Examples
                </Link>
              </div>
            </div>
          </div>
        </div>

        <InlineLinks 
          links={[
            ...siteLinks.roastStyles,
            ...siteLinks.content.filter(l => l.href !== '/roast-glossary')
          ].slice(0, 8)}
          title="Explore More Roasting Content"
        />
        
        <InternalLinkFooter />
        <FooterNavigation currentPath="/roast-glossary" />
      </main>
    </>
  );
}