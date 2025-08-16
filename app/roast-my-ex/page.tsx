import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { HowToSchema } from '@/components/SEO/HowToSchema';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';
import { SpeakableSchema } from '@/components/SEO/SpeakableSchema';
import { FooterNavigation, InlineLinks, siteLinks } from '@/components/SEO/SiteNavigation';

export const metadata: Metadata = {
  title: 'Roast My Ex - Generate Savage Ex Boyfriend/Girlfriend Roasts',
  description: 'Get AI-generated roasts for your ex\'s Instagram profile. Savage, funny, and therapeutic roasts to help you move on with humor. 100% anonymous and free.',
  keywords: 'roast my ex, ex boyfriend roast, ex girlfriend roast, savage ex roasts, funny breakup roasts, Instagram ex roast, roast my ex boyfriend, roast my ex girlfriend',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-my-ex'
  },
  openGraph: {
    title: 'Roast My Ex - AI-Powered Ex Roast Generator',
    description: 'Turn your breakup into comedy gold. Get savage AI roasts for your ex\'s Instagram profile.',
    url: 'https://www.lookatmyprofile.org/roast-my-ex',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Roast My Ex - Instagram Roast Generator'
    }]
  }
};

const exRoastFAQs = [
  {
    question: "Is it okay to roast my ex on Instagram?",
    answer: "Our roast generator creates private, humorous content for personal entertainment and healing through humor. We recommend keeping roasts private for your own therapeutic laughter rather than posting them publicly."
  },
  {
    question: "How savage are the ex roasts?",
    answer: "You can choose your roast intensity from friendly banter to absolutely savage. Our AI analyzes their Instagram profile to create personalized, witty roasts that hit just right without crossing into harmful territory."
  },
  {
    question: "Will my ex know I roasted them?",
    answer: "No! Our service is 100% anonymous. We never notify the profile owner or store any data. The roasts are generated just for you to enjoy privately."
  },
  {
    question: "Can roasting my ex help me move on?",
    answer: "Humor is a powerful healing tool! Many users find that laughing about their past relationship helps them process emotions and move forward. It's like therapy, but funnier and cheaper."
  },
  {
    question: "What if we're still friends?",
    answer: "We have a 'Friendly Ex' mode that creates playful, lighthearted roasts perfect for exes who stayed friends. It's all in good fun without the savage burns."
  }
];

export default function RoastMyExPage() {
  const breakupRoastSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Ex Roast Generator",
    "description": "AI-powered roast generator for ex boyfriends and girlfriends Instagram profiles",
    "applicationCategory": "Entertainment",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "8453",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const exampleRoasts = [
    {
      style: "Savage",
      example: "Their Instagram aesthetic is 'I peaked in high school' meets 'still trying to make fetch happen.' Every post screams 'my ex upgraded' louder than their Spotify Wrapped."
    },
    {
      style: "Therapy Mode",
      example: "Looking at their feed is like watching a masterclass in 'How to Be Basic 101.' Thank you for helping me realize I deserve someone whose personality isn't copy-pasted from Pinterest quotes."
    },
    {
      style: "Friendly",
      example: "Their Instagram journey from 'us' to 'just me' is giving main character energy... if the main character was an NPC in everyone else's story."
    },
    {
      style: "Poetic",
      example: "Roses are red, violets are blue, their feed says 'living my best life' but their DMs say 'I miss you.'"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breakupRoastSchema) }}
      />
      
      <SpeakableSchema 
        url="https://www.lookatmyprofile.org/roast-my-ex"
        headlines={["Roast My Ex - Generate Savage Ex Roasts"]}
        summary="Get AI-generated roasts for your ex's Instagram profile. Therapeutic humor to help you move on."
      />

      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Roast Generator', url: '/roast-generator' },
          { name: 'Roast My Ex', url: '/roast-my-ex' }
        ]}
      />

      <HowToSchema />
      <FAQSchema faqs={exRoastFAQs} pageTitle="Roast My Ex" />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Roast My <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Ex</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Turn your breakup into comedy gold with AI-powered roasts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/download"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-semibold hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  Start Roasting Your Ex
                </Link>
                <Link 
                  href="/roast-generator"
                  className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-all"
                >
                  Try Web Version
                </Link>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-6 mb-12">
              <h3 className="text-yellow-400 font-semibold mb-2">⚠️ Therapeutic Humor Only</h3>
              <p className="text-gray-300">
                Our roasts are designed for private laughs and moving on with humor. 
                We encourage healing through laughter, not public shaming. Keep it classy, keep it private!
              </p>
            </div>

            {/* Roast Styles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Choose Your <span className="text-red-400">Revenge</span> Style
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-600/20">
                  <h3 className="text-xl font-bold text-red-400 mb-3">💔 The Savage Destroyer</h3>
                  <p className="text-gray-300 mb-4">
                    For when you need maximum emotional catharsis. These roasts are certified savage and guaranteed to make you feel better about the breakup.
                  </p>
                  <span className="text-sm text-red-500">Intensity: 🔥🔥🔥🔥🔥</span>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-600/20">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">😂 The Therapy Session</h3>
                  <p className="text-gray-300 mb-4">
                    Healing through humor. These roasts help you see why the breakup was actually a blessing in disguise.
                  </p>
                  <span className="text-sm text-pink-500">Intensity: 🔥🔥🔥</span>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-600/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">🤝 The Friendly Ex</h3>
                  <p className="text-gray-300 mb-4">
                    For exes who stayed friends. Playful teasing without the emotional damage. Keep it light and fun!
                  </p>
                  <span className="text-sm text-purple-500">Intensity: 🔥🔥</span>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600/20">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">📝 The Poetic Justice</h3>
                  <p className="text-gray-300 mb-4">
                    Shakespeare meets savagery. Eloquent burns that would make the Bard proud. Revenge, but make it art.
                  </p>
                  <span className="text-sm text-blue-500">Intensity: 🔥🔥🔥🔥</span>
                </div>
              </div>
            </div>

            {/* Example Roasts */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Example <span className="text-pink-400">Ex Roasts</span>
              </h2>
              <div className="space-y-6">
                {exampleRoasts.map((roast, index) => (
                  <div key={index} className="bg-gray-800/30 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-semibold text-red-400 bg-red-900/30 px-3 py-1 rounded-full">
                        {roast.style}
                      </span>
                    </div>
                    <p className="text-gray-300 italic">"{roast.example}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Why Roasting Your Ex <span className="text-red-400">Helps</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">😂</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Laughter Heals</h3>
                  <p className="text-gray-400">
                    Science proves laughter reduces stress and helps emotional recovery
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💪</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Empowerment</h3>
                  <p className="text-gray-400">
                    Take back your power by finding humor in the situation
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Closure</h3>
                  <p className="text-gray-400">
                    Sometimes a good roast is all you need to finally move on
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Roast Your Ex?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Join 500,000+ people who've turned their breakups into comedy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/download"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-semibold hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  Download Free App
                </Link>
                <Link 
                  href="/roast-generator"
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all"
                >
                  Try Online Now
                </Link>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                100% Anonymous • No Sign-up Required • Therapeutic Use Only
              </p>
            </div>
          </div>
        </div>

        <InlineLinks 
          links={[
            { href: '/roast-styles/savage', label: 'Savage Mode' },
            { href: '/roast-videos', label: 'Roast Videos' },
            { href: '/roast-glossary', label: 'Roast Dictionary' },
            { href: '/how-to-roast-someone-on-instagram', label: 'How to Roast' },
            { href: '/funny-things-to-comment-on-instagram', label: 'Funny Comments' },
            { href: '/topics/instagram-psychology', label: 'Instagram Psychology' }
          ]}
          title="More Roasting Resources"
        />
        
        <InternalLinkFooter />
        <FooterNavigation currentPath="/roast-my-ex" />
      </main>
    </>
  );
}