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

  // Blog posts
  const blogPosts = [
    '/blog/psychology-of-instagram-roasting',
    '/blog/ultimate-guide-roast-battles',
    '/blog/ai-humor-evolution',
    '/blog/instagram-personality-types',
    '/blog/gen-z-humor-explained',
    '/blog/roasting-etiquette-101',
  ];

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