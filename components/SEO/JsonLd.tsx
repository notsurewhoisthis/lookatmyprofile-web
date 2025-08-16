interface JsonLdProps {
  data: Record<string, any>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Enhanced HowTo Schema for roast generator
export const HowToRoastSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Your Instagram Profile Roasted by AI",
    "description": "Step-by-step guide to generate hilarious AI-powered roasts of your Instagram profile using Roast a Profile app.",
    "image": "https://www.lookatmyprofile.org/howto-roast-instagram.jpg",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Roast a Profile App"
      },
      {
        "@type": "HowToTool",
        "name": "Instagram Account"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download the App",
        "text": "Download Roast a Profile from the App Store or Google Play Store.",
        "image": "https://www.lookatmyprofile.org/step1-download.jpg",
        "url": "https://www.lookatmyprofile.org/download"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Instagram Username",
        "text": "Open the app and enter your Instagram username or the username you want to roast.",
        "image": "https://www.lookatmyprofile.org/step2-username.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Select Roast Style",
        "text": "Choose from various roast styles like Savage, Witty, Sarcastic, or Friendly.",
        "image": "https://www.lookatmyprofile.org/step3-style.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Generate Roast",
        "text": "Tap the 'Roast Me!' button and wait for AI to analyze the profile and generate a hilarious roast.",
        "image": "https://www.lookatmyprofile.org/step4-generate.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Share or Save",
        "text": "Share your roast on social media or save it to your device.",
        "image": "https://www.lookatmyprofile.org/step5-share.jpg"
      }
    ]
  };

  return <JsonLd data={schema} />;
};

// Enhanced FAQ Schema with more questions
export const EnhancedFAQSchema = () => {
  const faqs = [
    {
      question: "What is Roast a Profile?",
      answer: "Roast a Profile is an AI-powered app that generates hilarious, personalized roasts of Instagram profiles by analyzing posts, captions, and overall aesthetic."
    },
    {
      question: "Is Roast a Profile free to use?",
      answer: "Yes, Roast a Profile offers free roasts with basic features. Premium features are available for users who want more detailed analysis and unlimited roasts."
    },
    {
      question: "How does the AI roast generator work?",
      answer: "Our AI analyzes publicly available Instagram content including posts, captions, hashtags, and profile information to create funny, personalized roasts based on patterns and themes it identifies."
    },
    {
      question: "Is my Instagram data safe?",
      answer: "Absolutely. We only access publicly available information and never store personal data. All analysis is done in real-time and immediately discarded after generating your roast."
    },
    {
      question: "Can I roast someone else's profile?",
      answer: "Yes, you can roast any public Instagram profile. However, we encourage using the app responsibly and in good fun."
    },
    {
      question: "What roast styles are available?",
      answer: "We offer multiple roast styles including Savage, Witty, Sarcastic, Friendly, Corporate, Gen-Z, and Shakespearean for different humor preferences."
    },
    {
      question: "Can I customize the roast intensity?",
      answer: "Yes, you can adjust the roast intensity from mild to extra spicy depending on how brutal you want the AI to be."
    },
    {
      question: "Does it work with private Instagram accounts?",
      answer: "No, the app only works with public Instagram profiles as we respect privacy settings and only analyze publicly available content."
    }
  ];

  const schema = {
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

  return <JsonLd data={schema} />;
};

// Local Business Schema for app presence
export const LocalAppSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Roast a Profile",
    "image": [
      "https://www.lookatmyprofile.org/app-icon.png",
      "https://www.lookatmyprofile.org/app-banner.jpg"
    ],
    "operatingSystem": "iOS, Android",
    "applicationCategory": "EntertainmentApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "2834"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.lookatmyprofile.org/download",
      "seller": {
        "@type": "Organization",
        "name": "Roast a Profile"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "merchantReturnDays": 0,
        "returnMethod": "https://schema.org/ReturnNotPermitted",
        "returnFees": "https://schema.org/ReturnNotPermitted"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 0,
            "unitCode": "DAY"
          }
        }
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Roast a Profile",
      "url": "https://www.lookatmyprofile.org"
    }
  };

  return <JsonLd data={schema} />;
};

// WebPage Schema with breadcrumbs
export const WebPageSchema = ({ 
  title, 
  description, 
  url,
  breadcrumbs 
}: { 
  title: string; 
  description: string; 
  url: string;
  breadcrumbs?: Array<{ label: string; href: string }>;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `https://www.lookatmyprofile.org${url}`,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Roast a Profile",
      "url": "https://www.lookatmyprofile.org"
    },
    "breadcrumb": breadcrumbs ? {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://www.lookatmyprofile.org${item.href}`
      }))
    } : undefined
  };

  return <JsonLd data={schema} />;
};