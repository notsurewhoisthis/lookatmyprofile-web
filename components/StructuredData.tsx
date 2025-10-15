export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Roast a Profile",
    "url": "https://www.lookatmyprofile.org",
    "logo": "https://www.lookatmyprofile.org/logo.png",
    "description": "AI-powered Instagram profile roasting and analysis tool that generates hilarious roasts and insights about social media profiles.",
    "founder": {
      "@type": "Person",
      "name": "Roast a Profile Team"
    },
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/roastaprofile",
      "https://instagram.com/roastaprofile",
      "https://www.linkedin.com/company/roast-a-profile"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@lookatmyprofile.org"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.lookatmyprofile.org/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Instagram Roast Generator",
        "url": "https://www.lookatmyprofile.org/roast-generator"
      },
      {
        "@type": "WebPage",
        "name": "Blog",
        "url": "https://www.lookatmyprofile.org/blog"
      },
      {
        "@type": "WebPage",
        "name": "Editorial Standards",
        "url": "https://www.lookatmyprofile.org/editorial-standards"
      },
      {
        "@type": "WebPage",
        "name": "Download App",
        "url": "https://www.lookatmyprofile.org/download"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const WebsiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LookAtMyProfile',
    url: 'https://www.lookatmyprofile.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.lookatmyprofile.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const SoftwareApplicationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Roast a Profile",
    "description": "AI Instagram profile roaster and analyzer that generates funny roasts and provides personality insights based on your social media activity.",
    "image": [
      "https://www.lookatmyprofile.org/app-icon.png",
      "https://www.lookatmyprofile.org/screenshots/screenshot-1.jpg",
      "https://www.lookatmyprofile.org/screenshots/screenshot-2.jpg"
    ],
    "operatingSystem": "iOS, Android",
    "applicationCategory": "SocialNetworkingApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1247"
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
        "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility"
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
    "downloadUrl": "https://apps.apple.com/us/app/roast-a-profile/id6749272485",
    "screenshot": [
      "https://www.lookatmyprofile.org/screenshots/screenshot-1.jpg",
      "https://www.lookatmyprofile.org/screenshots/screenshot-2.jpg"
    ],
    "featureList": [
      "AI-powered Instagram profile roasting",
      "Personality analysis based on posts",
      "Funny comment generation",
      "Social media behavior insights",
      "Privacy-focused analysis"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const FAQSchema = ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) => {
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const ArticleSchema = ({ article }: { 
  article: {
    title: string;
    description: string;
    featuredImage: string;
    author: string;
    authorSlug: string;
    publishedDate: string;
    modifiedDate: string;
    slug: string;
    wordCount: number;
    keywords: string[];
  }
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.featuredImage,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": `https://www.lookatmyprofile.org/author/${article.authorSlug}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Roast a Profile",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lookatmyprofile.org/logo.png"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.lookatmyprofile.org/blog/${article.slug}`
    },
    "wordCount": article.wordCount,
    "keywords": article.keywords
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const BreadcrumbSchema = ({ items }: { 
  items: Array<{ label: string; href: string }> 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": {
        "@type": "WebPage",
        "@id": `https://www.lookatmyprofile.org${item.href}`,
        "url": `https://www.lookatmyprofile.org${item.href}`,
        "name": item.label
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
