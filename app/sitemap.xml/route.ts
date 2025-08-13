import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = 'https://www.lookatmyprofile.org';
  
  // Static pages with priorities
  const staticPages: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [
    { url: '', priority: 1.0, changefreq: 'daily', lastmod: new Date().toISOString() },
    { url: '/roast-generator', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/instagram-roaster', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/ai-profile-analyzer', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-examples', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/savage', priority: 0.7, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/friendly', priority: 0.7, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/witty', priority: 0.7, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/sarcastic', priority: 0.7, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/shakespearean', priority: 0.7, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-styles/gen-z', priority: 0.7, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/what-is-instagram-roasting', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/download', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/blog', priority: 0.8, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/faq', priority: 0.6, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/privacy', priority: 0.5, changefreq: 'yearly' },
    { url: '/terms', priority: 0.5, changefreq: 'yearly' },
    { url: '/support', priority: 0.6, changefreq: 'weekly', lastmod: new Date().toISOString() },
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