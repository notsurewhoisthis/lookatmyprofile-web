import Link from "next/link";
import type { Metadata } from "next";
import { QASchema } from '@/components/SEO/QASchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Savage Mode - Brutal Instagram Roasts | Roast a Profile',
  description: 'Get the most brutal, savage AI roasts for Instagram profiles. Our Savage Mode delivers burns that leave marks. Not for the faint-hearted.',
  keywords: 'savage instagram roast, brutal profile roaster, harsh social media burns, savage mode AI',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-styles/savage'
  },
  openGraph: {
    title: 'Savage Mode - Brutal Instagram Roasts That Hurt',
    description: 'Experience the most savage AI roasts that will make you question everything about your Instagram.',
    url: 'https://www.lookatmyprofile.org/roast-styles/savage',
  }
};

export default function SavageRoastPage() {
  const savageQA = [
    {
      question: "What makes Savage Mode different from other roast styles?",
      answer: "Savage Mode delivers brutally honest, no-holds-barred roasts that cut deep. Unlike friendly or witty styles, Savage Mode focuses on maximum impact with zero sugar-coating, targeting your Instagram persona's deepest insecurities."
    },
    {
      question: "Is Savage Mode appropriate for everyone?",
      answer: "No, Savage Mode is designed for those who can handle intense humor and brutal honesty. It's perfect for roast battles and thick-skinned users, but not recommended for sensitive individuals or professional contexts."
    },
    {
      question: "How harsh are Savage Mode roasts really?",
      answer: "Savage Mode roasts are intentionally harsh, targeting everything from your filtered selfies to your life choices. They're designed to be memorable burns that make you reconsider your entire social media presence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-black text-white">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Roast Styles', url: '/roast-styles' },
          { name: 'Savage Mode', url: '/roast-styles/savage' }
        ]}
      />
      <QASchema qaItems={savageQA} pageName="Savage Roast Style" />
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-red-400 transition">Roast Generator</Link>
            <Link href="/roast-styles" className="hover:text-red-400 transition">All Styles</Link>
            <Link href="/blog" className="hover:text-red-400 transition">Blog</Link>
            <Link href="/download" className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Savage Mode: No Mercy Instagram Roasts
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            When friendly jokes aren't enough. Our Savage AI analyzes every cringe post, 
            every failed aesthetic, and delivers burns that'll make you delete your account.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/roast-generator?style=savage" className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
              Activate Savage Mode 🔥
            </Link>
            <Link href="/roast-styles" className="border border-red-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-400/10 transition">
              Compare Styles
            </Link>
          </div>
        </div>
      </section>

      {/* Example Roasts */}
      <section className="container mx-auto px-4 py-20 bg-black/50">
        <h2 className="text-4xl font-bold text-center mb-12">Sample Savage Roasts</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 rounded-lg border border-red-600/30">
            <h3 className="text-xl font-bold mb-3 text-red-400">The Gym Selfie Addict</h3>
            <p className="text-gray-300 italic">
              "Your gym selfies scream 'I peaked in high school' louder than your 
              receding hairline. That protein powder won't fix your personality, Chad."
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 rounded-lg border border-red-600/30">
            <h3 className="text-xl font-bold mb-3 text-red-400">The Wannabe Influencer</h3>
            <p className="text-gray-300 italic">
              "87 followers and you're posting 'link in bio'? The only thing you're 
              influencing is your parents' disappointment levels."
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 rounded-lg border border-red-600/30">
            <h3 className="text-xl font-bold mb-3 text-red-400">The Food Photographer</h3>
            <p className="text-gray-300 italic">
              "Your food pics are so blurry, Gordon Ramsay would roast you harder 
              than you roast your overcooked pasta. Stick to ordering takeout."
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Makes Savage Mode Different</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">🎯 Precision Targeting</h3>
            <p className="text-gray-300">
              Our AI doesn't just roast - it performs a surgical dissection of your 
              Instagram persona, finding flaws you didn't even know existed.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">💀 No Sugar Coating</h3>
            <p className="text-gray-300">
              While other modes play nice, Savage Mode tells it like it is. Your 
              filtered selfies and fake lifestyle? We see right through them.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">🧠 Psychological Warfare</h3>
            <p className="text-gray-300">
              Combines behavioral analysis with brutal honesty. We don't just roast 
              your posts - we roast your life choices.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">⚡ Instant Regret</h3>
            <p className="text-gray-300">
              Perfect for roast battles, sending to friends, or when you need a 
              reality check about your social media presence.
            </p>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-red-900/10 to-orange-900/10">
        <h2 className="text-4xl font-bold text-center mb-12">Survivors of Savage Mode</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <blockquote className="bg-black/30 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "I asked for savage and it delivered. Currently in therapy but at least 
              I know my Instagram aesthetic is trash now."
            </p>
            <cite className="text-red-400">- @broken_but_aware</cite>
          </blockquote>
          <blockquote className="bg-black/30 p-6 rounded-lg">
            <p className="text-lg mb-4">
              "The AI roasted me so hard I actually deleted 47 posts and reconsidered 
              my entire online presence. 10/10 would cry again."
            </p>
            <cite className="text-red-400">- @reformed_poster</cite>
          </blockquote>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-3xl font-bold mb-6">The Psychology Behind Savage Roasts</h2>
          <p className="text-gray-300 mb-4">
            Savage Mode isn't just about harsh words - it's a carefully crafted psychological 
            experience designed to cut through the curated facade of social media. Our AI 
            analyzes posting patterns, caption choices, filter usage, and engagement metrics 
            to deliver roasts that hit where it hurts most: the truth.
          </p>
          <h3 className="text-2xl font-bold mb-4">Why People Love Getting Roasted</h3>
          <p className="text-gray-300 mb-4">
            Studies show that humor, even harsh humor, can be a powerful tool for self-reflection. 
            Savage Mode users report feeling more authentic and less pressured to maintain a 
            perfect online image after experiencing our brutal honesty.
          </p>
          <h3 className="text-2xl font-bold mb-4">Perfect for Roast Battles</h3>
          <p className="text-gray-300 mb-4">
            Whether you're competing with friends or just need ammunition for friendly banter, 
            Savage Mode provides the ultimate roasting material. Our AI-generated burns are 
            original, personalized, and guaranteed to leave an impression.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Face the Heat?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Warning: Savage Mode may cause existential crisis, sudden urge to delete Instagram, 
          or uncontrollable laughter. Proceed with caution.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/roast-generator?style=savage" className="bg-gradient-to-r from-red-600 to-orange-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition inline-block">
            Enter Savage Mode 🔥
          </Link>
          <Link href="/download" className="border border-red-400 px-12 py-5 rounded-full text-xl font-semibold hover:bg-red-400/10 transition inline-block">
            Get the App
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-red-800/50">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. Feelings may be hurt.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/roast-styles" className="text-gray-400 hover:text-white transition">All Styles</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}