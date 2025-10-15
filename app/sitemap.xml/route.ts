import fs from 'fs';
import path from 'path';

function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

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
    { url: '/instagram-growth-hacks-2025', priority: 0.95, changefreq: 'weekly', lastmod: new Date().toISOString() },
    
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
    
    // Content hub pages (Added Jan 16, 2025)
    { url: '/roast-glossary', priority: 0.85, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/roast-my-ex', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/topics', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/topics/instagram-psychology', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/topics/social-media-humor', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/authors', priority: 0.75, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/authors/roast-master', priority: 0.7, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/authors/alex-morgan', priority: 0.7, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/authors/sam-rivera', priority: 0.7, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/reels-hub', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-personas', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-challenges', priority: 0.85, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/roast-intel', priority: 0.8, changefreq: 'monthly', lastmod: new Date().toISOString() },

    // NEW: E-E-A-T and Authority Pages (Added Jan 15, 2025)
    { url: '/editorial-standards', priority: 0.7, changefreq: 'yearly', lastmod: new Date().toISOString() },
    { url: '/ultimate-guide-instagram-roasting-2025', priority: 0.95, changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/instagram-roasting-report-2025', priority: 0.9, changefreq: 'monthly', lastmod: new Date().toISOString() },
    
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

  // Dynamically get celebrity roast pages
  const celebrityPages: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [];
  try {
    const celebDataPath = path.join(process.cwd(), 'data', 'celebrity-roasts.json');
    if (fs.existsSync(celebDataPath)) {
      const content = fs.readFileSync(celebDataPath, 'utf-8');
      const celebRoasts = JSON.parse(content);
      
      // Add main celebrity roasts index page
      celebrityPages.push({
        url: '/celebrity-roasts',
        priority: 0.9,
        changefreq: 'weekly',
        lastmod: new Date().toISOString()
      });
      
      // Add individual celebrity roast pages
      celebRoasts.forEach((roast: any) => {
        celebrityPages.push({
          url: `/celebrity-roasts/${roast.slug}`,
          priority: 0.85,
          changefreq: 'weekly',
          lastmod: new Date().toISOString()
        });
      });
    }
  } catch (error) {
    console.error('Error reading celebrity roast pages:', error);
  }

  // Dynamically get tool pages
  const toolPages: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [];
  try {
    const toolDataPath = path.join(process.cwd(), 'data', 'generated-pages.json');
    if (fs.existsSync(toolDataPath)) {
      const content = fs.readFileSync(toolDataPath, 'utf-8');
      const tools = JSON.parse(content);
      
      // Add main tools index page
      toolPages.push({
        url: '/tools',
        priority: 0.9,
        changefreq: 'weekly',
        lastmod: new Date().toISOString()
      });
      
      // Add category pages
      const categories = ['username-generator', 'bio-generator', 'caption-generator', 'hashtag-generator', 'roast-generator', 'personality-analyzer'];
      categories.forEach(category => {
        toolPages.push({
          url: `/tools/${category}`,
          priority: 0.85,
          changefreq: 'weekly',
          lastmod: new Date().toISOString()
        });
      });
      
      // Add individual tool pages
      tools.forEach((tool: any) => {
        toolPages.push({
          url: `/tools/${tool.category}/${tool.slug}`,
          priority: 0.8,
          changefreq: 'monthly',
          lastmod: new Date().toISOString()
        });
      });
    }
  } catch (error) {
    console.error('Error reading tool pages:', error);
  }

  // Dynamically add persona landing pages
  const personaPages: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [];
  try {
    const personaPath = path.join(process.cwd(), 'data', 'roast-personas.json');
    if (fs.existsSync(personaPath)) {
      const raw = fs.readFileSync(personaPath, 'utf-8');
      const personas = JSON.parse(raw);
      personas.forEach((persona: any) => {
        personaPages.push({
          url: `/roast-personas/${persona.slug}`,
          priority: 0.8,
          changefreq: 'weekly',
          lastmod: new Date().toISOString()
        });
      });
    }
  } catch (error) {
    console.error('Error reading persona pages:', error);
  }

  // Dynamically get blog posts from JSON files
  const blogPosts: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [];
  const tagSet: Map<string, { slug: string; lastmod: string }> = new Map();
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

          const tags: string[] = (blogData.tags || blogData.keywords || []) as string[];
          const lm = blogData.updatedAt || blogData.publishedAt || new Date().toISOString();
          tags.forEach((t: string) => {
            const tg = slugifyTag(t);
            const prev = tagSet.get(tg);
            if (!prev || new Date(lm).getTime() > new Date(prev.lastmod).getTime()) {
              tagSet.set(tg, { slug: tg, lastmod: lm });
            }
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

  // Build tag pages and tag index
  const tagPages: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [
    { url: '/blog/tags', priority: 0.6, changefreq: 'weekly', lastmod: new Date().toISOString() }
  ];
  for (const { slug, lastmod } of tagSet.values()) {
    tagPages.push({ url: `/blog/tag/${slug}`, priority: 0.6, changefreq: 'weekly', lastmod });
  }

  // Build paginated blog pages
  const paginatedBlogPages: Array<{ url: string; priority: number; changefreq: string; lastmod?: string }> = [];
  const totalBlogPages = Math.ceil(blogPosts.length / 20); // 20 posts per page
  for (let i = 2; i <= totalBlogPages; i++) {
    paginatedBlogPages.push({
      url: `/blog/page/${i}`,
      priority: 0.7,
      changefreq: 'daily',
      lastmod: new Date().toISOString()
    });
  }

  const allPages = [...staticPages, ...celebrityPages, ...toolPages, ...personaPages, ...blogPosts, ...tagPages, ...paginatedBlogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${allPages.map(page => {
  const isBlog = page.url.startsWith('/blog/') && !page.url.startsWith('/blog/tag');
  let imageBlock = '';
  if (isBlog) {
    const slug = page.url.replace('/blog/', '');
    const og = `${baseUrl}/api/og?title=${encodeURIComponent(slug.replace(/-/g, ' '))}`;
    imageBlock = `\n    <image:image>\n      <image:loc>${og}</image:loc>\n    </image:image>`;
  }
  return `  <url>\n    <loc>${baseUrl}${page.url}</loc>\n    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>${imageBlock}\n  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
