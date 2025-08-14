export function ProfileAnalyzerSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Instagram Profile Analyzer",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "description": "AI-powered Instagram profile analyzer providing instant insights, personality analysis, and engagement metrics for any public profile.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1847",
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
      "Personality analysis",
      "Content pattern recognition",
      "Engagement metrics",
      "Hashtag analysis",
      "Caption analysis",
      "AI-generated roasts",
      "No login required",
      "Free to use"
    ],
    "url": "https://www.lookatmyprofile.org/instagram-profile-analyzer"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}