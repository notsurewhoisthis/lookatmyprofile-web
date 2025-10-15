export async function GET() {
  const robotsTxt = `# Robots.txt for Roast a Profile
# https://www.lookatmyprofile.org

# Allow all crawlers
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

# AI Service Crawlers - EXPLICITLY ALLOWED for maximum AI visibility
User-agent: GPTBot
Allow: /
Crawl-delay: 1

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 1

User-agent: OAI-SearchBot
Allow: /
Crawl-delay: 1

User-agent: ClaudeBot
Allow: /
Crawl-delay: 1

User-agent: Claude-User
Allow: /
Crawl-delay: 1

User-agent: Claude-Web
Allow: /
Crawl-delay: 1

User-agent: anthropic-ai
Allow: /
Crawl-delay: 1

User-agent: PerplexityBot
Allow: /
Crawl-delay: 1

User-agent: YouBot
Allow: /
Crawl-delay: 1

# Traditional Search Engine Crawlers
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Optional: Block AI training if you prefer (uncomment to activate)
# User-agent: Google-Extended
# Disallow: /

# Sitemap locations
Sitemap: https://www.lookatmyprofile.org/sitemap.xml
Sitemap: https://www.lookatmyprofile.org/image-sitemap.xml

# Cache control
# Cache for 24 hours
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}