interface SpeakableSchemaProps {
  headlines?: string[];
  summary?: string;
  url: string;
}

export function SpeakableSchema({ headlines, summary, url }: SpeakableSchemaProps) {
  const speakableContent = [];
  
  if (headlines && headlines.length > 0) {
    speakableContent.push({
      "@type": "WebPageElement",
      "name": "headlines",
      "xpath": headlines.map(h => `//*[contains(text(), '${h.replace(/'/g, "\\'")}')]`)
    });
  }
  
  if (summary) {
    speakableContent.push({
      "@type": "WebPageElement", 
      "name": "summary",
      "xpath": `//*[contains(@class, 'summary') or contains(@class, 'description')]`
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#speakable`,
    "speakable": speakableContent.length > 0 ? speakableContent : {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        "[class*='headline']",
        "[class*='summary']",
        "[class*='description']",
        "[role='main'] p:first-of-type"
      ]
    },
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}