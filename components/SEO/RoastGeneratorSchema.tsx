export function RoastGeneratorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Roast Generator",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Web",
    "description": "Advanced AI-powered roast generator for Instagram profiles. Generate hilarious, personalized roasts instantly with no signup required.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Roast a Profile",
      "url": "https://www.lookatmyprofile.org"
    },
    "screenshot": "https://www.lookatmyprofile.org/og-image.jpg",
    "featureList": [
      "AI-powered roast generation",
      "Multiple roast styles (Savage, Friendly, Gen-Z, Shakespearean)",
      "Instant results",
      "No login required",
      "Free to use",
      "Privacy-focused"
    ],
    "url": "https://www.lookatmyprofile.org/ai-roast-generator"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}