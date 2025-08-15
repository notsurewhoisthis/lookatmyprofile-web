import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = 'https://www.lookatmyprofile.org';
  
  // Static pages with priorities - Complete list of all pages
  const staticPages: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [
    // Core pages
    { url: '', priority: 1.0, changefreq: 'daily', lastmod: new Date().toISOString() },
    { url: '/roast-generator', priority: 0.95, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-generator-seo', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/instagram-roaster', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/ai-profile-analyzer', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-examples', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/what-is-instagram-roasting', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    
    // NEW HIGH-PRIORITY SEO PAGES (Added Jan 15, 2025)
    { url: '/instagram-bio-generator', priority: 0.95, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/my-insta-personality', priority: 0.95, changefreq: 'daily', lastmod: new Date().toISOString() },
    { url: '/instagram-engagement-calculator', priority: 0.95, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/instagram-caption-generator', priority: 0.95, changefreq: 'weekly', lastmod: new Date().toISOString() },
    
    // Roast styles pages
    { url: '/roast-styles', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/savage', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/friendly', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/shakespearean', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/gen-z', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    
    // High-volume keyword pages (SEO priority)
    { url: '/ai-roast-generator', priority: 0.95, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/instagram-profile-analyzer', priority: 0.95, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/ultimate-guide-instagram-roasting', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    
    // Long-tail keyword pages
    { url: '/free-instagram-roast-generator-no-signup', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/gen-z-roast-generator-online', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/savage-instagram-roasts-examples', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/how-to-roast-someone-on-instagram', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/funny-things-to-comment-on-instagram', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    
    // Competitor comparison pages
    { url: '/vs-cleve-ai', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/vs-olly-social', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    
    // Utility pages
    { url: '/download', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/blog', priority: 0.85, changefreq: 'daily', lastmod: new Date().toISOString() },
    { url: '/faq', priority: 0.7, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/support', priority: 0.7, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/privacy', priority: 0.5, changefreq: 'yearly' },
    { url: '/terms', priority: 0.5, changefreq: 'yearly' },
  ];

  // Dynamically get blog posts from JSON files
  const blogPosts: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [];
  try {
    const blogDataDir = path.join(process.cwd(), 'public', 'blog-data');
    const files = fs.readdirSync(blogDataDir);
    
    files
      .filter(file => file.endsWith('.json'))
      .forEach(file => {
        try {
          const filePath = path.join(blogDataDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const blogData = JSON.parse(content);
          const slug = file.replace('.json', '');
          
          blogPosts.push({
            url: `/blog/${slug}`,
            priority: 0.7,
            changefreq: 'monthly',
            lastmod: blogData.updatedAt || blogData.publishedAt || new Date().toISOString()
          });
        } catch (error) {
          console.error(`Error parsing blog file ${file}:`, error);
          // Fallback for unparseable files
          const slug = file.replace('.json', '');
          blogPosts.push({
            url: `/blog/${slug}`,
            priority: 0.7,
            changefreq: 'monthly',
            lastmod: new Date().toISOString()
          });
        }
      });
  } catch (error) {
    console.error('Error reading blog posts for sitemap:', error);
  }

  const allPages = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}