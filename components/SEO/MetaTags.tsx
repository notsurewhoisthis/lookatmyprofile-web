import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  article?: boolean;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords,
  author = 'Roast a Profile Team',
  publishedTime,
  modifiedTime,
  noindex = false,
  article = false,
}) => {
  const siteUrl = 'https://www.lookatmyprofile.org';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : ogType} />
      <meta property="og:url" content={fullCanonicalUrl || siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Roast a Profile" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific */}
      {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {article && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {article && author && <meta property="article:author" content={author} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullCanonicalUrl || siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      <meta property="twitter:site" content="@roastaprofile" />
      <meta property="twitter:creator" content="@roastaprofile" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="apple-mobile-web-app-title" content="Roast a Profile" />
      <meta name="application-name" content="Roast a Profile" />
    </Head>
  );
};

// Helper function to generate optimized title
export const generateTitle = (pageTitle: string, includeTemplate = true): string => {
  const template = 'AI Instagram Roaster & Analyzer | Roast a Profile';
  if (!includeTemplate) return pageTitle;
  return `${pageTitle} | ${template}`;
};

// Helper function to generate optimized description
export const generateDescription = (content: string, maxLength = 155): string => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength - 3) + '...';
};