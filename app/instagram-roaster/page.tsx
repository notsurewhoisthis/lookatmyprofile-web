import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { HowToRoastSchema, EnhancedFAQSchema, WebPageSchema } from '@/components/SEO/JsonLd';
import { InlineRoastCTA, PopularRoastStyles } from '@/components/SEO/InternalLinking';
import { Zap, Shield, Smartphone, Star, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instagram Roaster - AI-Powered Profile Roasting Tool | Roast a Profile',
  description: 'The ultimate Instagram roaster tool. Get hilarious AI-generated roasts of any Instagram profile. Safe, anonymous, and incredibly funny. Try the best Instagram roasting app today!',
  keywords: 'instagram roaster, instagram roast generator, roast instagram profile, ai instagram roaster, instagram profile roaster, instagram roasting tool, roast my instagram',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/instagram-roaster'
  },
  openGraph: {
    title: 'Instagram Roaster - Get Your Profile Roasted by AI',
    description: 'The most savage Instagram roaster on the internet. Our AI analyzes profiles and delivers hilarious roasts that will leave you crying with laughter.',
    url: 'https://www.lookatmyprofile.org/instagram-roaster',
    images: [
      {
        url: '/og-instagram-roaster.jpg',
        width: 1200,
        height: 630,
        alt: 'Instagram Roaster - AI Profile Roasting Tool'
      }
    ]
  }
};

export default function InstagramRoasterPage() {
  const breadcrumbs = [
    { label: 'Instagram Roaster', href: '/instagram-roaster' }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Roasts',
      description: 'Get roasted in seconds with our lightning-fast AI analysis'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '100% Safe',
      description: 'We never store your data or access private information'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Ready',
      description: 'Works perfectly on iPhone, Android, and web browsers'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Multiple Styles',
      description: 'Choose from savage, witty, friendly, or Gen-Z roast styles'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Viral Ready',
      description: 'Share your roasts and watch them go viral on social media'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '1M+ Users',
      description: 'Join millions getting roasted and loving every second of it'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Influencer',
      content: 'The Instagram roaster had me crying with laughter! It noticed things about my profile I never even realized.',
      rating: 5
    },
    {
      name: 'Mike T.',
      role: 'Content Creator',
      content: 'Best roasting app ever! The AI is scary accurate and absolutely hilarious.',
      rating: 5
    },
    {
      name: 'Jessica L.',
      role: 'Social Media Manager',
      content: 'Used this Instagram roaster for team building. Everyone was roasted equally and we all had a blast!',
      rating: 5
    }
  ];

  return (
    <>
      <WebPageSchema 
        title="Instagram Roaster - AI-Powered Profile Roasting Tool"
        description="The ultimate Instagram roaster tool. Get hilarious AI-generated roasts of any Instagram profile."
        url="/instagram-roaster"
        breadcrumbs={breadcrumbs}
      />
      <HowToRoastSchema />
      <EnhancedFAQSchema />
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Header */}
        <header className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={breadcrumbs} />
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Ultimate <span className="text-indigo-600">Instagram Roaster</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get absolutely destroyed by our AI-powered Instagram roaster. 
              We analyze your profile and deliver savage roasts that hit different.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-lg"
              >
                Download Instagram Roaster
              </Link>
              <Link
                href="/roast-generator"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors text-lg"
              >
                Try Web Version
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              ⭐ Rated 4.8/5 by 50,000+ users • 100% Free to try
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why We're the Best Instagram Roaster
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How Our Instagram Roaster Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enter Instagram Username</h3>
                    <p className="text-gray-600">
                      Simply enter any public Instagram username you want to roast. 
                      No login required, no passwords needed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI Analyzes Profile</h3>
                    <p className="text-gray-600">
                      Our Instagram roaster AI scans posts, captions, hashtags, and overall aesthetic 
                      to understand the profile's vibe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Get Roasted!</h3>
                    <p className="text-gray-600">
                      Receive a personalized, hilarious roast that's so accurate it hurts. 
                      Share it or keep it as a reality check!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roast Styles */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Instagram Roast Style
          </h2>
          <div className="max-w-4xl mx-auto">
            <PopularRoastStyles />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What People Say About Our Instagram Roaster
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
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
            The Best Instagram Roaster Online
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Looking for the perfect Instagram roaster to destroy your friends' profiles? 
              You've found it! Our AI-powered Instagram roasting tool is the most advanced 
              profile roaster on the internet, analyzing everything from your cringy captions 
              to your try-hard aesthetic.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Why Choose Our Instagram Roaster?
            </h3>
            <p>
              Unlike basic roast generators, our Instagram roaster uses advanced AI to 
              understand the nuances of your profile. We don't just throw random insults – 
              we craft personalized roasts that are so accurate, you'll wonder if we've 
              been stalking your profile for years.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Safe and Anonymous Instagram Roasting
            </h3>
            <p>
              Privacy is our priority. Our Instagram roaster never stores your data, 
              requires no login, and works only with public profiles. You can roast 
              yourself or your friends without anyone knowing – unless you share the 
              hilarious results!
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Perfect for Content Creators
            </h3>
            <p>
              Content creators love our Instagram roaster for creating viral content. 
              Whether you're making TikToks, Instagram Reels, or YouTube videos, our 
              roasts provide endless entertainment that your audience will love.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}