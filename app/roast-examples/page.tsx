import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { WebPageSchema } from '@/components/SEO/JsonLd';
import { InlineRoastCTA, PopularRoastStyles } from '@/components/SEO/InternalLinking';
import { Flame, Laugh, Share2, Trophy, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roast Examples - Hilarious AI Instagram Roasts | Roast a Profile',
  description: 'See real examples of AI-generated Instagram roasts. From savage burns to witty comebacks, discover what makes our roasts go viral. Warning: You might cry from laughing.',
  keywords: 'roast examples, instagram roast examples, funny roasts, ai roast examples, best instagram roasts, viral roasts, roast samples, hilarious roasts',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-examples'
  },
  openGraph: {
    title: 'Roast Examples - See Our Most Savage Instagram Roasts',
    description: 'Real examples of AI-generated roasts that left people speechless. See why millions use our app for the best Instagram roasts.',
    url: 'https://www.lookatmyprofile.org/roast-examples',
    images: [
      {
        url: '/og-roast-examples.jpg',
        width: 1200,
        height: 630,
        alt: 'Instagram Roast Examples'
      }
    ]
  }
};

export default function RoastExamplesPage() {
  const breadcrumbs = [
    { label: 'Roast Examples', href: '/roast-examples' }
  ];

  const roastExamples = [
    {
      category: 'Influencer Roast',
      style: 'Savage',
      username: '@fitnessguru2024',
      roast: `Your gym selfies have more filters than a water treatment plant. You post "no days off" with a timestamp showing you haven't been to the gym in 3 weeks. Your protein shake photos get more action than your dating life. The only thing you're influencing is people to unfollow.`,
      reactions: { likes: 15420, shares: 3200, comments: 890 }
    },
    {
      category: 'Foodie Roast',
      style: 'Witty',
      username: '@foodieparadise',
      roast: `You photograph your food more than paparazzi photograph celebrities. Your avocado toast has its own highlight reel. You've turned eating into a photoshoot where the food gets cold and your followers get bored. Gordon Ramsay would roast your food pics harder than your actual cooking.`,
      reactions: { likes: 12300, shares: 2100, comments: 567 }
    },
    {
      category: 'Travel Blogger',
      style: 'Sarcastic',
      username: '@wanderlust_soul',
      roast: `"Not all who wander are lost" - but your captions definitely are. You've been to 30 countries but can't find your personality. Your "authentic local experience" is taking the same photo everyone else does at tourist traps. You're basically a human postcard with commitment issues.`,
      reactions: { likes: 18900, shares: 4500, comments: 1230 }
    },
    {
      category: 'Couple Account',
      style: 'Gen-Z',
      username: '@couplegoals4ever',
      roast: `No cap, y'all giving major "we argue in the car after every photo" energy. The matching outfits are giving Target clearance rack. Your love language is apparently making single people nauseous. This whole account screams "we'll break up but keep the photos for the likes" fr fr.`,
      reactions: { likes: 22100, shares: 5600, comments: 2340 }
    },
    {
      category: 'Pet Account',
      style: 'Friendly',
      username: '@mr.fluffypaws',
      roast: `Your dog has more followers than you and honestly, they deserve it. You're basically your pet's unpaid social media manager. The dog food sponsorships pay your rent while you eat ramen. At least someone in that house has talent (hint: it's not you).`,
      reactions: { likes: 9800, shares: 1200, comments: 445 }
    },
    {
      category: 'Fashion Blogger',
      style: 'Shakespearean',
      username: '@hautecouture_daily',
      roast: `Methinks thou dost protest too much about being "obsessed" with every brand. Thy closet overfloweth, yet style remaineth absent. To thrift or not to thrift - that is the question thou claimest, yet everything cometh with tags. Verily, thou art but a walking advertisement in designer's clothing.`,
      reactions: { likes: 14500, shares: 3100, comments: 892 }
    }
  ];

  const stats = [
    { icon: <Flame className="w-6 h-6" />, value: '10M+', label: 'Roasts Generated' },
    { icon: <Trophy className="w-6 h-6" />, value: '98%', label: 'Accuracy Rate' },
    { icon: <Share2 className="w-6 h-6" />, value: '5M+', label: 'Times Shared' },
    { icon: <Laugh className="w-6 h-6" />, value: '100%', label: 'Laugh Guarantee' }
  ];

  const categories = [
    'Influencer Roasts',
    'Couple Roasts',
    'Foodie Roasts',
    'Travel Roasts',
    'Fashion Roasts',
    'Fitness Roasts',
    'Pet Account Roasts',
    'Artist Roasts'
  ];

  return (
    <>
      <WebPageSchema 
        title="Roast Examples - Hilarious AI Instagram Roasts"
        description="See real examples of AI-generated Instagram roasts. From savage burns to witty comebacks."
        url="/roast-examples"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Header */}
        <header className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={breadcrumbs} />
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
              <Flame className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Roast Examples That <span className="text-orange-600">Went Viral</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              These AI-generated roasts were so good, people couldn't stop sharing them. 
              Warning: Side effects include uncontrollable laughter and existential crisis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors text-lg"
              >
                Get Your Roast Now
              </Link>
              <Link
                href="/roast-generator"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-colors text-lg"
              >
                Try It Free
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Roasts */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Actual Roasts from Our AI
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These are real roasts generated by our AI. Names changed to protect the roasted.
          </p>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {roastExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mr-2">
                        {example.category}
                      </span>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
                        {example.style} Style
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{example.username}</span>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 italic border-l-4 border-orange-500 pl-4 my-4">
                    "{example.roast}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <div className="flex space-x-6 text-sm text-gray-500">
                      <span className="flex items-center">
                        ❤️ {(example.reactions.likes / 1000).toFixed(1)}k
                      </span>
                      <span className="flex items-center">
                        🔄 {(example.reactions.shares / 1000).toFixed(1)}k
                      </span>
                      <span className="flex items-center">
                        💬 {example.reactions.comments}
                      </span>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                      Share Example →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Roast Categories We Excel At
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <span className="text-gray-700 font-medium">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roast Styles Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Roast Style
          </h2>
          <PopularRoastStyles />
        </section>

        {/* Testimonials */}
        <section className="bg-orange-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What People Say About Their Roasts
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">
                  "I've never laughed and cried at the same time until I got roasted. 
                  It was so accurate it hurt, but I couldn't stop sharing it!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Alex M.</p>
                    <p className="text-sm text-gray-500">@alexlovesphoto</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">
                  "The AI noticed things about my profile I didn't even realize. 
                  The roast was brutal but hilarious. 10/10 would get destroyed again."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sam T.</p>
                    <p className="text-sm text-gray-500">@samtravels</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">
                  "My roast went viral on TikTok! Everyone wanted to know where I got it. 
                  Best app for creating content that actually gets engagement."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Jordan K.</p>
                    <p className="text-sm text-gray-500">@jordanfitness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <InlineRoastCTA variant="banner" />
        </section>

        {/* SEO Content */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">
            Why Our Roast Examples Go Viral
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              The roast examples you see here represent just a fraction of the hilarious content 
              our AI generates daily. Each roast is crafted with a perfect blend of observational 
              humor, cultural references, and personalized insights that make them impossible to ignore.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              The Art of the Perfect Roast
            </h3>
            <p>
              What makes our roast examples stand out? It's the combination of accuracy and humor. 
              Our AI doesn't just throw random insults – it analyzes patterns, identifies quirks, 
              and delivers roasts that are so specific and accurate that they become instantly shareable.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              From Mild to Wild
            </h3>
            <p>
              Our roast examples showcase the full spectrum of humor styles. Whether you prefer 
              friendly banter that makes everyone laugh or savage burns that leave people speechless, 
              our AI adapts to deliver exactly what you're looking for. The examples above show just 
              how versatile and creative our roasting algorithm can be.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Creating Viral Content
            </h3>
            <p>
              Many of our users have seen their roast examples go viral on TikTok, Instagram Reels, 
              and Twitter. The shareability factor is built into every roast – they're designed to 
              be screenshot, shared, and laughed at by millions. Content creators especially love 
              using our roast examples for reaction videos and social media content.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}