export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate an AI Instagram Roast",
    "description": "Learn how to use our AI roast generator to create hilarious roasts of any Instagram profile in seconds",
    "image": "https://www.lookatmyprofile.org/og-image.jpg",
    "totalTime": "PT30S",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Web browser"
      },
      {
        "@type": "HowToTool",
        "name": "Instagram username"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Navigate to the roast generator",
        "text": "Go to the Roast a Profile website and click on 'Roast Generator' or navigate directly to the roast generator page",
        "url": "https://www.lookatmyprofile.org/roast-generator",
        "image": "https://www.lookatmyprofile.org/og-image.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Instagram username",
        "text": "Type the Instagram username (without the @ symbol) of the profile you want to roast into the input field",
        "url": "https://www.lookatmyprofile.org/roast-generator",
        "image": "https://www.lookatmyprofile.org/og-image.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Choose your roast style",
        "text": "Select from four roast styles: Savage (brutal burns), Friendly (playful teasing), Gen-Z (trendy slang), or Shakespearean (classical wit)",
        "url": "https://www.lookatmyprofile.org/roast-styles",
        "image": "https://www.lookatmyprofile.org/og-image.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Click Generate Roast",
        "text": "Hit the 'Generate Roast' button and wait 2-3 seconds for the AI to analyze the profile",
        "url": "https://www.lookatmyprofile.org/roast-generator",
        "image": "https://www.lookatmyprofile.org/og-image.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Enjoy and share your roast",
        "text": "Read your personalized AI-generated roast! You can copy it, share it on social media, or generate another one with a different style",
        "url": "https://www.lookatmyprofile.org/roast-generator",
        "image": "https://www.lookatmyprofile.org/og-image.jpg"
      }
    ],
    "performTime": "PT20S",
    "prepTime": "PT10S",
    "author": {
      "@type": "Organization",
      "name": "Roast a Profile",
      "url": "https://www.lookatmyprofile.org"
    },
    "datePublished": "2025-01-14",
    "dateModified": "2025-01-14"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}