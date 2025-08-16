export function RoastGeneratorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Roast Generator",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Web",
    "description": "Advanced AI-powered roast generator for Instagram profiles. Generate hilarious, personalized roasts instantly with no signup required.",
    "image": [
      "https://www.lookatmyprofile.org/roast-generator-preview.jpg",
      "https://www.lookatmyprofile.org/roast-generator-screenshot.jpg"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.lookatmyprofile.org/ai-roast-generator",
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