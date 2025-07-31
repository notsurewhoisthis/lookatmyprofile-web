export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.lookatmyprofile.org/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow specific paths if needed
# Disallow: /api/
`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}