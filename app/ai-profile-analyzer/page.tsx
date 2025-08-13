import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/SEO/Breadcrumbs';
import { WebPageSchema, LocalAppSchema } from '@/components/SEO/JsonLd';
import { InlineRoastCTA } from '@/components/SEO/InternalLinking';
import { Brain, BarChart3, Eye, MessageSquare, Heart, Target, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Profile Analyzer - Deep Instagram Personality Analysis | Roast a Profile',
  description: 'Advanced AI profile analyzer for Instagram. Get deep personality insights, behavioral patterns, and psychological analysis of any Instagram profile. Free AI-powered social media analysis tool.',
  keywords: 'ai profile analyzer, instagram profile analyzer, ai instagram analysis, personality analyzer, social media analyzer, profile analysis tool, instagram ai analyzer, behavioral analysis',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/ai-profile-analyzer'
  },
  openGraph: {
    title: 'AI Profile Analyzer - Decode Any Instagram Personality',
    description: 'Discover what Instagram profiles really reveal. Our AI analyzes posts, patterns, and behaviors to provide deep personality insights.',
    url: 'https://www.lookatmyprofile.org/ai-profile-analyzer',
    images: [
      {
        url: '/og-ai-analyzer.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Profile Analyzer Tool'
      }
    ]
  }
};

export default function AIProfileAnalyzerPage() {
  const breadcrumbs = [
    { label: 'AI Profile Analyzer', href: '/ai-profile-analyzer' }
  ];

  const analysisTypes = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Personality Analysis',
      description: 'Decode personality traits based on posting patterns, content choices, and interaction styles',
      features: ['Big 5 personality traits', 'Communication style', 'Emotional patterns', 'Social tendencies']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Behavioral Patterns',
      description: 'Understand posting habits, peak activity times, and content preferences',
      features: ['Posting frequency', 'Engagement patterns', 'Content themes', 'Hashtag strategy']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Style Analysis',
      description: 'Analyze aesthetic choices, color preferences, and visual storytelling',
      features: ['Color psychology', 'Filter preferences', 'Composition style', 'Visual consistency']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Language & Tone',
      description: 'Examine writing style, vocabulary choices, and emotional expression',
      features: ['Sentiment analysis', 'Vocabulary richness', 'Emoji usage', 'Caption length patterns']
    }
  ];

  const insights = [
    {
      icon: <Target className="w-6 h-6" />,
      stat: '95%',
      label: 'Accuracy Rate',
      description: 'Our AI achieves industry-leading accuracy in profile analysis'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      stat: '100%',
      label: 'Privacy Safe',
      description: 'No data storage, no login required, completely anonymous'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      stat: '50+',
      label: 'Analysis Points',
      description: 'Comprehensive analysis covering every aspect of the profile'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      stat: '2M+',
      label: 'Profiles Analyzed',
      description: 'Trusted by millions for accurate personality insights'
    }
  ];

  const useCases = [
    {
      title: 'For Individuals',
      description: 'Understand your online persona and how others perceive you',
      benefits: ['Self-awareness', 'Personal branding', 'Content strategy improvement']
    },
    {
      title: 'For Marketers',
      description: 'Analyze influencer authenticity and audience alignment',
      benefits: ['Influencer vetting', 'Audience insights', 'Campaign optimization']
    },
    {
      title: 'For HR & Recruiters',
      description: 'Gain insights into candidate personality and cultural fit',
      benefits: ['Personality assessment', 'Cultural fit analysis', 'Communication style evaluation']
    },
    {
      title: 'For Researchers',
      description: 'Study social media behavior and psychological patterns',
      benefits: ['Behavioral research', 'Trend analysis', 'Psychological studies']
    }
  ];

  return (
    <>
      <WebPageSchema 
        title="AI Profile Analyzer - Deep Instagram Personality Analysis"
        description="Advanced AI profile analyzer for Instagram. Get deep personality insights and behavioral analysis."
        url="/ai-profile-analyzer"
        breadcrumbs={breadcrumbs}
      />
      <LocalAppSchema />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={breadcrumbs} />
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
              <Brain className="w-10 h-10 text-indigo-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Profile Analyzer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlock deep personality insights from any Instagram profile. 
              Our advanced AI analyzes patterns, behaviors, and content to reveal 
              what social media really says about someone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-lg"
              >
                Start Analyzing Profiles
              </Link>
              <Link
                href="/roast-generator"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors text-lg"
              >
                Try Demo Analysis
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              🔒 No login required • 🚀 Results in seconds • 📊 50+ data points analyzed
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {insights.map((insight, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-3 text-indigo-600">
                  {insight.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{insight.stat}</div>
                <div className="text-sm font-medium text-gray-600 mb-1">{insight.label}</div>
                <div className="text-xs text-gray-500">{insight.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Analysis Types */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Comprehensive AI Profile Analysis
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our AI profile analyzer examines every aspect of an Instagram profile 
              to provide deep, actionable insights about personality and behavior.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {analysisTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-indigo-600 mb-4">{type.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who Uses Our AI Profile Analyzer?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How Our AI Profile Analyzer Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Data Collection</h3>
                      <p className="text-gray-600">AI scans public Instagram posts, captions, and interactions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Pattern Recognition</h3>
                      <p className="text-gray-600">Advanced algorithms identify behavioral and personality patterns</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Psychological Analysis</h3>
                      <p className="text-gray-600">AI applies psychological frameworks to interpret patterns</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Insight Generation</h3>
                      <p className="text-gray-600">Comprehensive report with actionable personality insights</p>
                    </div>
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
            Advanced AI Profile Analysis Technology
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Our AI profile analyzer represents the cutting edge of social media analysis technology. 
              By combining machine learning, natural language processing, and psychological frameworks, 
              we provide insights that go far beyond surface-level observations.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              The Science Behind Profile Analysis
            </h3>
            <p>
              Every Instagram profile tells a story through patterns invisible to the human eye. 
              Our AI profile analyzer processes thousands of data points – from posting times to 
              emoji usage, filter choices to hashtag patterns – creating a comprehensive psychological 
              profile that reveals authentic personality traits and behavioral tendencies.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Privacy-First AI Analysis
            </h3>
            <p>
              Unlike other profile analyzers, we prioritize user privacy. Our AI analyzes only 
              publicly available information, never stores personal data, and provides results 
              instantly without requiring any login or authentication. This makes our tool perfect 
              for both personal insights and professional use cases.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Applications Across Industries
            </h3>
            <p>
              From marketing agencies vetting influencers to individuals seeking self-awareness, 
              our AI profile analyzer serves diverse needs. HR professionals use it for candidate 
              insights, researchers study social media behavior, and content creators optimize 
              their online presence based on our analysis.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">
              Continuous Learning and Improvement
            </h3>
            <p>
              Our AI profile analyzer continuously evolves, learning from millions of profiles 
              to improve accuracy and discover new patterns. Regular updates ensure our analysis 
              stays relevant with changing social media trends and behaviors, providing you with 
              the most current and accurate insights available.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}