import fs from 'fs';
import path from 'path';

export async function GET() {
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
  ];

  // Dynamically get blog posts from JSON files
  const blogPosts: string[] = [];
  try {
    const blogDataDir = path.join(process.cwd(), 'public', 'blog-data');
    const files = fs.readdirSync(blogDataDir);
    
    files
      .filter(file => file.endsWith('.json'))
      .forEach(file => {
        const slug = file.replace('.json', '');
        blogPosts.push(`/blog/${slug}`);
      });
  } catch (error) {
    console.error('Error reading blog posts for sitemap:', error);
  }

  const allPages = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.includes('/blog/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/blog/') ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}