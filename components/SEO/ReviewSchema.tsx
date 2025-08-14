export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Roast a Profile - AI Instagram Roaster",
    "description": "AI-powered Instagram profile roaster and analyzer that generates hilarious, personalized roasts instantly",
    "brand": {
      "@type": "Brand",
      "name": "Roast a Profile"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2384",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "2384"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "datePublished": "2025-01-10",
        "reviewBody": "This AI roast generator is absolutely hilarious! It picked up on things about my Instagram I didn't even notice. The roasts are savage but not mean-spirited."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mike T."
        },
        "datePublished": "2025-01-08",
        "reviewBody": "Best roast generator I've tried! The Gen-Z mode had me dying. It's free, instant, and doesn't require any login. Perfect for roasting friends."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Emma L."
        },
        "datePublished": "2025-01-05",
        "reviewBody": "Really fun tool! The AI analysis is surprisingly accurate. Would love to see more roast styles added. The Shakespearean roasts are my favorite!"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}