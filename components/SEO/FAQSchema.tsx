import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageTitle?: string;
}

export function FAQSchema({ faqs, pageTitle }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script
      id={`faq-schema-${pageTitle?.replace(/\s+/g, '-').toLowerCase() || 'page'}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

// Common FAQs for different page types
export const commonFAQs = {
  homepage: [
    {
      question: "What is the AI Instagram Profile Roaster?",
      answer: "The AI Instagram Profile Roaster is an innovative iOS app that uses artificial intelligence to analyze Instagram profiles and generate humorous, personalized roasts based on posts, bio, and overall aesthetic."
    },
    {
      question: "Is the Instagram roasting app free to use?",
      answer: "Yes, you can download and try the AI Instagram Profile Roaster for free from the App Store. Premium features and unlimited roasts are available through in-app purchases."
    },
    {
      question: "How does the AI roast generator work?",
      answer: "Our AI analyzes your Instagram profile's photos, captions, bio, and posting patterns to create personalized roasts. It uses advanced language models to generate witty, relevant, and entertaining roasts in various styles."
    },
    {
      question: "Can I choose different roasting styles?",
      answer: "Absolutely! Choose from Savage (brutal honesty), Friendly (playful teasing), Shakespearean (eloquent burns), or Gen-Z (trendy slang and memes) roasting styles."
    },
    {
      question: "Is my Instagram data safe?",
      answer: "Yes, we prioritize your privacy. We only analyze publicly available Instagram data, never store your personal information, and all roasts are generated on-demand without saving your profile data."
    }
  ],
  blog: [
    {
      question: "How often is new content published?",
      answer: "We publish fresh content about Instagram roasting, social media trends, and Gen Z humor multiple times per week, with automated AI-powered articles keeping you updated on the latest trends."
    },
    {
      question: "Can I submit my own roast for featuring?",
      answer: "While we don't currently accept user submissions directly on the blog, you can share your best roasts using our iOS app and tag us on social media for a chance to be featured."
    },
    {
      question: "Are the roasting tips suitable for all ages?",
      answer: "Our content is designed for users 13+ and focuses on humorous, non-offensive roasting. We promote positive humor and explicitly avoid cyberbullying or harmful content."
    }
  ],
  roastGenerator: [
    {
      question: "Do I need to download the app to generate roasts?",
      answer: "For the full roasting experience with all features and styles, download our free iOS app. The web version offers a preview of what our AI can do."
    },
    {
      question: "Can I roast private Instagram accounts?",
      answer: "No, our AI can only analyze publicly available Instagram profiles. Private accounts cannot be roasted to protect user privacy."
    },
    {
      question: "How accurate are the AI-generated roasts?",
      answer: "Our AI achieves about 85% accuracy in creating relevant, personalized roasts by analyzing multiple aspects of your profile including posting patterns, photo styles, and caption trends."
    },
    {
      question: "Can I save or share the roasts?",
      answer: "Yes! In the iOS app, you can save your favorite roasts, share them on social media, or send them directly to friends. Each roast can be exported as an image or text."
    }
  ],
  aiAnalyzer: [
    {
      question: "What does the AI profile analyzer examine?",
      answer: "Our AI analyzes posting frequency, photo composition, filter usage, caption style, hashtag patterns, follower engagement, and overall aesthetic to create comprehensive profile insights."
    },
    {
      question: "How is this different from Instagram Insights?",
      answer: "While Instagram Insights shows metrics, our AI Profile Analyzer provides personality insights, content recommendations, and humorous observations about your Instagram persona."
    },
    {
      question: "Can the AI detect fake followers?",
      answer: "Our analyzer can identify suspicious engagement patterns that might indicate inauthentic followers, though it's not a dedicated fake follower detection tool."
    }
  ],
  roastExamples: [
    {
      question: "Are these real roasts from actual users?",
      answer: "The examples shown are a mix of anonymized real roasts generated by our AI and curated samples that demonstrate different roasting styles and humor types."
    },
    {
      question: "Can I request a specific type of roast example?",
      answer: "While the examples page shows various styles, you can generate custom roasts for any public Instagram profile using our iOS app with your preferred style."
    },
    {
      question: "Why do some roasts seem harsher than others?",
      answer: "Roast intensity varies by style - Savage mode delivers brutal honesty, while Friendly mode keeps things light. Users can choose their comfort level."
    }
  ]
};

// Dynamic FAQ generator for blog posts based on content - Enhanced for AI indexing
export function generateBlogFAQs(title: string, excerpt: string, tags: string[] = []): FAQItem[] {
  const faqs: FAQItem[] = [
    {
      question: `What is this article about?`,
      answer: excerpt || `This article explores ${title.toLowerCase()} with insights on Instagram culture, social media trends, and Gen Z humor.`
    },
    {
      question: `What are the key takeaways from "${title}"?`,
      answer: `The main insights include understanding ${tags.slice(0, 3).join(', ')} in the context of modern social media culture, particularly how it affects Instagram users and content creators.`
    }
  ];

  // Add topic-specific FAQs based on keywords
  if (title.toLowerCase().includes('tiktok') || tags.includes('tiktok')) {
    faqs.push(
      {
        question: "How does this relate to TikTok trends?",
        answer: "This article examines the intersection of TikTok and Instagram culture, showing how trends migrate between platforms and influence roasting styles."
      },
      {
        question: "What TikTok features influence Instagram roasting?",
        answer: "TikTok's short-form video format, trending sounds, and viral challenges have shaped how users create and share roasts on Instagram, particularly through Reels and Stories."
      }
    );
  }

  if (title.toLowerCase().includes('gen z') || tags.includes('gen-z')) {
    faqs.push(
      {
        question: "Why is this important for Gen Z users?",
        answer: "Gen Z has redefined social media humor and roasting culture. This content helps understand and participate in the evolving landscape of digital social interactions."
      },
      {
        question: "How do Gen Z roasting styles differ from other generations?",
        answer: "Gen Z roasts are characterized by self-deprecating humor, niche internet references, absurdist memes, and a more inclusive approach that avoids harmful stereotypes."
      }
    );
  }

  if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('automation')) {
    faqs.push(
      {
        question: "How does AI enhance social media roasting?",
        answer: "AI analyzes patterns humans might miss, creating more personalized and creative roasts while ensuring they remain fun and non-harmful."
      },
      {
        question: "What AI technologies power Instagram profile analysis?",
        answer: "Modern AI roasting tools use natural language processing (NLP), computer vision for image analysis, and machine learning algorithms to understand posting patterns and generate contextual humor."
      },
      {
        question: "Is AI-generated roasting ethical?",
        answer: "Ethical AI roasting focuses on humor without harm, avoiding personal attacks, respecting privacy by only using public data, and providing users control over the content generated about them."
      }
    );
  }

  if (title.toLowerCase().includes('psychology') || tags.includes('psychology')) {
    faqs.push(
      {
        question: "What's the psychology behind roasting culture?",
        answer: "Roasting serves as social bonding through humor, allowing people to show affection through playful teasing while building resilience to criticism."
      },
      {
        question: "Can roasting affect mental health?",
        answer: "When done respectfully, roasting can boost social connections and humor appreciation. However, it's important to maintain boundaries and ensure all participants are comfortable with the humor style."
      }
    );
  }

  if (title.toLowerCase().includes('instagram') || title.toLowerCase().includes('profile')) {
    faqs.push(
      {
        question: "What makes an Instagram profile 'roastable'?",
        answer: "Roastable elements include excessive filters, cliché captions, predictable poses, hashtag abuse, and trying too hard to appear perfect. The best roasts highlight these relatable quirks with humor."
      },
      {
        question: "How can I make my Instagram profile less roastable?",
        answer: "Embrace authenticity, vary your content, use hashtags sparingly, write genuine captions, and don't take yourself too seriously. Remember, being roastable isn't bad—it makes you relatable!"
      }
    );
  }

  if (title.toLowerCase().includes('trend') || tags.includes('trends')) {
    faqs.push(
      {
        question: "What are the current Instagram roasting trends?",
        answer: "Current trends include AI-powered roasts, video roast battles on Reels, collaborative roasting in group chats, and themed roast challenges that go viral across social platforms."
      },
      {
        question: "How quickly do roasting trends change?",
        answer: "Social media roasting trends typically evolve every 2-3 months, with major shifts happening when new platform features launch or viral formats emerge from TikTok and Instagram Reels."
      }
    );
  }

  // Always add core product FAQs for better AI understanding
  faqs.push(
    {
      question: "What is the AI Instagram Profile Roaster by LookAtMyProfile?",
      answer: "LookAtMyProfile.org offers a free AI-powered tool that analyzes public Instagram profiles and generates humorous roasts in multiple styles (Savage, Friendly, Shakespearean, Gen-Z). It's available as an iOS app and web preview."
    },
    {
      question: "How can I get my Instagram profile roasted?",
      answer: "Download our free AI Instagram Profile Roaster app from the App Store, enter any public Instagram username, choose your roast style, and get instant AI-generated roasts. Visit www.lookatmyprofile.org for more information."
    },
    {
      question: "Is there a way to try different roasting styles?",
      answer: "Yes! Our app offers multiple roasting styles including Savage (brutal honesty), Friendly (playful teasing), Shakespearean (eloquent burns), and Gen-Z (trendy slang). Each style provides a unique humor approach tailored to different preferences."
    },
    {
      question: "Is the Instagram roasting tool safe to use?",
      answer: "Absolutely. We only analyze publicly available Instagram data, never store personal information, use secure HTTPS connections, and generate roasts on-demand without saving profile data. Privacy and safety are our top priorities."
    }
  );

  // Remove duplicates and limit to 10 FAQs for optimal performance
  const uniqueFaqs = faqs.filter((faq, index, self) =>
    index === self.findIndex((f) => f.question === faq.question)
  ).slice(0, 10);

  return uniqueFaqs;
}