interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Example usage for different page types
export function HomeBreadcrumb() {
  return (
    <BreadcrumbSchema 
      items={[
        { name: "Home", url: "https://www.lookatmyprofile.org" }
      ]}
    />
  );
}

export function RoastGeneratorBreadcrumb() {
  return (
    <BreadcrumbSchema 
      items={[
        { name: "Home", url: "https://www.lookatmyprofile.org" },
        { name: "Roast Generator", url: "https://www.lookatmyprofile.org/roast-generator" }
      ]}
    />
  );
}

export function RoastStyleBreadcrumb({ style }: { style: string }) {
  return (
    <BreadcrumbSchema 
      items={[
        { name: "Home", url: "https://www.lookatmyprofile.org" },
        { name: "Roast Styles", url: "https://www.lookatmyprofile.org/roast-styles" },
        { name: style, url: `https://www.lookatmyprofile.org/roast-styles/${style.toLowerCase().replace(' ', '-')}` }
      ]}
    />
  );
}

export function BlogBreadcrumb() {
  return (
    <BreadcrumbSchema 
      items={[
        { name: "Home", url: "https://www.lookatmyprofile.org" },
        { name: "Blog", url: "https://www.lookatmyprofile.org/blog" }
      ]}
    />
  );
}

export function BlogPostBreadcrumb({ title, slug }: { title: string; slug: string }) {
  return (
    <BreadcrumbSchema 
      items={[
        { name: "Home", url: "https://www.lookatmyprofile.org" },
        { name: "Blog", url: "https://www.lookatmyprofile.org/blog" },
        { name: title, url: `https://www.lookatmyprofile.org/blog/${slug}` }
      ]}
    />
  );
}