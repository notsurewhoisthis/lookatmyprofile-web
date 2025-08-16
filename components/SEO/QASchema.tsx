interface QAPair {
  question: string;
  answer: string;
}

interface QASchemaProps {
  qaItems: QAPair[];
  pageName?: string;
}

export function QASchema({ qaItems, pageName }: QASchemaProps) {
  const schemaData = qaItems.map(item => ({
    "@context": "https://schema.org",
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

// Common Q&A patterns for different page types
export const commonQA = {
  roastGenerator: [
    {
      question: "How does the Instagram roast generator work?",
      answer: "Our AI roast generator analyzes Instagram profiles using advanced algorithms to create personalized, funny roasts based on posts, bio, and overall aesthetic. Simply enter a username and choose your roast style."
    },
    {
      question: "Is the roast generator free to use?",
      answer: "Yes, our web roast generator is 100% free with no sign-up required. The mobile app offers additional premium features like unlimited roasts and exclusive styles."
    },
    {
      question: "Can the person see that I roasted them?",
      answer: "No, our roasting service is completely anonymous. The profile owner receives no notification and cannot see who generated a roast about their profile."
    }
  ],
  
  homepage: [
    {
      question: "What is an Instagram roast?",
      answer: "An Instagram roast is a humorous critique of someone's Instagram profile, analyzing their posts, bio, and overall aesthetic to create funny, lighthearted jokes. It's meant for entertainment, not harm."
    },
    {
      question: "How accurate are AI-generated roasts?",
      answer: "Our AI analyzes real profile data including post patterns, hashtag usage, and bio content to create surprisingly accurate and personalized roasts that capture the essence of each profile's unique quirks."
    },
    {
      question: "Is roasting someone's Instagram profile legal?",
      answer: "Yes, creating humorous commentary about public social media profiles is legal as it falls under free speech and parody. However, we encourage keeping roasts private and lighthearted."
    }
  ],
  
  downloadPage: [
    {
      question: "What's the difference between the app and web version?",
      answer: "The mobile app offers unlimited roasts, 12+ exclusive styles, battle mode, daily challenges, and offline access. The web version provides basic roasting features with some daily limits."
    },
    {
      question: "Is the app available for Android and iPhone?",
      answer: "Yes, Roast a Profile is available on both iOS App Store for iPhone/iPad and Google Play Store for Android devices. Both versions offer the same premium features."
    },
    {
      question: "How much does the roasting app cost?",
      answer: "The app is free to download with basic features. Premium features like unlimited roasts and exclusive styles are available through optional in-app purchases starting at $2.99."
    }
  ],
  
  roastStyles: [
    {
      question: "What's the difference between roast styles?",
      answer: "Each roast style has a unique tone: Savage is brutally honest, Friendly is playful teasing, Shakespearean uses eloquent language, and Gen-Z incorporates current slang and memes."
    },
    {
      question: "Which roast style is the funniest?",
      answer: "Humor is subjective, but 'Savage' mode is our most popular for maximum burns, while 'Gen-Z' resonates with younger audiences using current internet humor and slang."
    },
    {
      question: "Can I customize the roast intensity?",
      answer: "Yes, you can choose from multiple intensity levels within each style, from light teasing to absolutely ruthless roasts, ensuring the humor matches your comfort level."
    }
  ],
  
  blogPost: [
    {
      question: "How often is this content updated?",
      answer: "We update our blog content regularly to reflect the latest social media trends, roasting techniques, and platform changes. Check the 'Last Updated' date at the top of each article."
    },
    {
      question: "Can I share these roasting tips?",
      answer: "Yes! Feel free to share our articles and roasting guides. We just ask that you credit LookAtMyProfile.org and link back to the original article."
    },
    {
      question: "Who writes these roasting guides?",
      answer: "Our content is created by a team of social media experts, comedy writers, and AI specialists who understand both the technical and humorous aspects of Instagram roasting."
    }
  ]
};