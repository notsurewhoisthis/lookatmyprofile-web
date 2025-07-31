import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lookatmyprofile.org';
  
  // Static pages
  const staticPages = [
    '',
    '/roast-generator',
    '/roast-styles',
    '/roast-styles/savage',
    '/roast-styles/friendly',
    '/roast-styles/shakespearean',
    '/roast-styles/gen-z',
    '/download',
    '/blog',
    '/faq',
    '/privacy',
    '/terms',
    '/support',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogPosts = [
    '/blog/psychology-of-instagram-roasting',
    '/blog/ultimate-guide-roast-battles',
    '/blog/ai-humor-evolution',
    '/blog/instagram-personality-types',
    '/blog/gen-z-humor-explained',
    '/blog/roasting-etiquette-101',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}