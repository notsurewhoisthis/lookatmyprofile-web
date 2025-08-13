import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  showHome = true,
  className = '' 
}) => {
  const allItems = showHome 
    ? [{ label: 'Home', href: '/' }, ...items]
    : items;

  // Generate schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.lookatmyprofile.org${item.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        {allItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index === 0 && showHome && (
              <Home className="w-4 h-4 mr-1" />
            )}
            {index === allItems.length - 1 ? (
              <span className="text-gray-600 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link 
                  href={item.href}
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {item.label}
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              </>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

// Pre-configured breadcrumbs for common pages
export const PageBreadcrumbs = {
  blog: [
    { label: 'Blog', href: '/blog' }
  ],
  blogPost: (title: string, slug: string) => [
    { label: 'Blog', href: '/blog' },
    { label: title, href: `/blog/${slug}` }
  ],
  roastGenerator: [
    { label: 'Roast Generator', href: '/roast-generator' }
  ],
  roastStyle: (style: string) => [
    { label: 'Roast Generator', href: '/roast-generator' },
    { label: style, href: `/roast-styles/${style.toLowerCase()}` }
  ],
  download: [
    { label: 'Download App', href: '/download' }
  ],
  faq: [
    { label: 'FAQ', href: '/faq' }
  ],
  privacy: [
    { label: 'Privacy Policy', href: '/privacy' }
  ],
  terms: [
    { label: 'Terms of Service', href: '/terms' }
  ],
  support: [
    { label: 'Support', href: '/support' }
  ]
};