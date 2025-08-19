import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';
import { SpeakableSchema } from '@/components/SEO/SpeakableSchema';

export const metadata: Metadata = {
  title: 'Instagram Psychology Hub - Understanding Social Media Behavior',
  description: 'Comprehensive guide to Instagram psychology, user behavior patterns, and the science behind social media addiction, validation seeking, and digital personas.',
  keywords: 'Instagram psychology, social media behavior, Instagram addiction, validation seeking, digital identity, social media mental health',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/topics/instagram-psychology'
  },
  openGraph: {
    title: 'Instagram Psychology - Complete Guide to Social Media Behavior',
    description: 'Explore the psychology behind Instagram behavior, from validation seeking to digital personas.',
    url: 'https://www.lookatmyprofile.org/topics/instagram-psychology',
    type: 'website'
  }
};

const topicClusters = [
  {
    category: "Core Psychology",
    description: "Understanding the fundamental psychological drivers behind Instagram behavior",
    topics: [
      {
        title: "Validation Seeking & Dopamine",
        slug: "/blog/psychology-of-instagram-roasting",
        description: "How likes and comments trigger our brain's reward system",
        readTime: "7 min"
      },
      {
        title: "Digital Identity Construction",
        slug: "/blog/instagram-personality-types",
        description: "How we craft our online personas vs. real selves",
        readTime: "6 min"
      },
      {
        title: "FOMO and Social Comparison",
        slug: "/blog/gen-z-humor-explained",
        description: "Why we constantly compare ourselves to others online",
        readTime: "5 min"
      }
    ]
  },
  {
    category: "Behavioral Patterns",
    description: "Common Instagram behaviors and what they reveal about users",
    topics: [
      {
        title: "The Psychology of Selfies",
        slug: "/roast-styles/savage",
        description: "What your selfie style says about your personality",
        readTime: "4 min"
      },
      {
        title: "Story vs. Feed Behavior",
        slug: "/roast-generator",
        description: "Why we share differently in stories vs. permanent posts",
        readTime: "5 min"
      },
      {
        title: "Engagement Patterns",
        slug: "/blog/ultimate-guide-roast-battles",
        description: "Understanding lurkers, likers, and commenters",
        readTime: "8 min"
      }
    ]
  },
  {
    category: "Social Dynamics",
    description: "How Instagram shapes our social interactions and relationships",
    topics: [
      {
        title: "Instagram & Relationships",
        slug: "/roast-my-ex",
        description: "How social media affects modern relationships",
        readTime: "6 min"
      },
      {
        title: "Influencer Psychology",
        slug: "/blog/ai-humor-evolution",
        description: "The psychology of influence and parasocial relationships",
        readTime: "7 min"
      },
      {
        title: "Group Dynamics & Trends",
        slug: "/roast-glossary",
        description: "How viral trends and memes spread psychologically",
        readTime: "5 min"
      }
    ]
  },
  {
    category: "Mental Health Impact",
    description: "The psychological effects of Instagram use on mental wellbeing",
    topics: [
      {
        title: "Instagram & Self-Esteem",
        slug: "/blog/roasting-etiquette-101",
        description: "How constant comparison affects self-worth",
        readTime: "6 min"
      },
      {
        title: "Digital Detox Psychology",
        slug: "/faq",
        description: "Why breaks from social media improve mental health",
        readTime: "4 min"
      },
      {
        title: "Healthy Instagram Habits",
        slug: "/support",
        description: "Building a positive relationship with social media",
        readTime: "5 min"
      }
    ]
  }
];

const relatedTools = [
  {
    title: "Profile Analyzer",
    description: "AI-powered psychological analysis of any Instagram profile",
    link: "/analyzer",
    icon: "🧠"
  },
  {
    title: "Personality Roaster",
    description: "Discover your Instagram personality type through roasts",
    link: "/roast-generator",
    icon: "🎭"
  },
  {
    title: "Behavior Decoder",
    description: "Understand what your Instagram habits say about you",
    link: "/download",
    icon: "🔍"
  }
];

export default function InstagramPsychologyHub() {
  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.lookatmyprofile.org/topics/instagram-psychology#hub",
    "name": "Instagram Psychology Hub",
    "description": "Comprehensive guide to Instagram psychology and social media behavior",
    "url": "https://www.lookatmyprofile.org/topics/instagram-psychology",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": topicClusters.reduce((acc, cluster) => acc + cluster.topics.length, 0),
      "itemListElement": topicClusters.flatMap((cluster, clusterIndex) =>
        cluster.topics.map((topic, topicIndex) => ({
          "@type": "ListItem",
          "position": clusterIndex * 3 + topicIndex + 1,
          "url": `https://www.lookatmyprofile.org${topic.slug}`,
          "name": topic.title
        }))
      )
    },
    "about": {
      "@type": "Thing",
      "name": "Instagram Psychology",
      "description": "The study of psychological patterns and behaviors on Instagram"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />
      
      <SpeakableSchema 
        url="https://www.lookatmyprofile.org/topics/instagram-psychology"
        headlines={["Instagram Psychology Hub - Understanding Social Media Behavior"]}
        summary="Comprehensive guide to Instagram psychology and user behavior patterns."
      />

      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Topics', url: 'https://www.lookatmyprofile.org/topics' },
          { name: 'Instagram Psychology', url: 'https://www.lookatmyprofile.org/topics/instagram-psychology' }
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Instagram <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Psychology</span> Hub
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your complete guide to understanding the psychology behind Instagram behavior, 
                from validation seeking to digital identity construction
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">2.4B</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-400">95M</div>
                  <div className="text-sm text-gray-400">Posts Daily</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">53min</div>
                  <div className="text-sm text-gray-400">Avg. Daily Use</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">71%</div>
                  <div className="text-sm text-gray-400">Under 35</div>
                </div>
              </div>
            </div>

            {/* Topic Clusters */}
            <div className="space-y-12 mb-16">
              {topicClusters.map((cluster, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{cluster.category}</h2>
                    <p className="text-gray-400">{cluster.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {cluster.topics.map((topic, topicIndex) => (
                      <Link
                        key={topicIndex}
                        href={topic.slug}
                        className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-all hover:scale-105"
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{topic.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-purple-400">{topic.readTime} read</span>
                          <span className="text-purple-400">→</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Insights Section */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Key Psychological Insights
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">📱 The Dopamine Loop</h3>
                  <p className="text-gray-300">
                    Instagram's variable reward schedule triggers the same neural pathways as gambling, 
                    creating an addictive cycle of checking, posting, and seeking validation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">🎭 Curated Reality</h3>
                  <p className="text-gray-300">
                    Users present idealized versions of themselves, leading to a disconnect between 
                    online personas and authentic identity, affecting both creators and viewers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">🔄 Social Proof</h3>
                  <p className="text-gray-300">
                    Likes and followers serve as social currency, influencing behavior through 
                    conformity bias and the human need for belonging and acceptance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">⚖️ Comparison Trap</h3>
                  <p className="text-gray-300">
                    Constant exposure to others' highlight reels triggers upward social comparison, 
                    impacting self-esteem and life satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Explore Your Instagram Psychology
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedTools.map((tool, index) => (
                  <Link
                    key={index}
                    href={tool.link}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{tool.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                    <span className="text-purple-400 font-semibold">Try Now →</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Understand Your Instagram Behavior?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Get a personalized psychological analysis of your Instagram profile
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/roast-generator"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  Analyze My Profile
                </Link>
                <Link 
                  href="/blog"
                  className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-all"
                >
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>

        <InternalLinkFooter />
      </main>
    </>
  );
}