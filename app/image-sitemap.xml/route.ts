import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = 'https://www.lookatmyprofile.org';

  // Define all images with their metadata
  const images = [
    {
      loc: `${baseUrl}/`,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          title: 'Roast a Profile - AI Instagram Profile Roaster',
          caption: 'AI-powered Instagram profile roasting and analysis tool',
          geoLocation: 'United States',
          license: `${baseUrl}/terms`
        },
        {
          url: `${baseUrl}/twitter-card.jpg`,
          title: 'Instagram Roast Generator Twitter Card',
          caption: 'Generate hilarious AI roasts for any Instagram profile',
          geoLocation: 'United States',
          license: `${baseUrl}/terms`
        }
      ]
    }
  ];

  // Add blog post images
  try {
    const blogDataPath = path.join(process.cwd(), 'public', 'blog-data');
    const blogFiles = fs.readdirSync(blogDataPath);

    blogFiles.forEach(file => {
      if (file.endsWith('.json')) {
        const slug = file.replace('.json', '');
        const blogUrl = `${baseUrl}/blog/${slug}`;

        // Each blog post can have featured image
        images.push({
          loc: blogUrl,
          images: [
            {
              url: `${baseUrl}/og-image.jpg`, // Using default for now
              title: `Instagram Roasting Blog - ${slug}`,
              caption: `Expert insights on Instagram roasting, humor, and social media psychology`,
              geoLocation: 'United States',
              license: `${baseUrl}/terms`
            }
          ]
        });
      }
    });
  } catch (error) {
    console.error('Error reading blog data:', error);
  }

  // Add tool pages images
  const toolPages = [
    { path: '/roast-generator', title: 'Instagram Roast Generator Tool' },
    { path: '/instagram-bio-generator', title: 'Instagram Bio Generator' },
    { path: '/my-insta-personality', title: 'Instagram Personality Test' },
    { path: '/instagram-engagement-calculator', title: 'Instagram Engagement Calculator' },
    { path: '/instagram-caption-generator', title: 'Instagram Caption Generator' },
    { path: '/celebrity-roasts', title: 'Celebrity Instagram Roasts' }
  ];

  toolPages.forEach(page => {
    images.push({
      loc: `${baseUrl}${page.path}`,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          title: page.title,
          caption: `${page.title} - Free Instagram tool by Roast a Profile`,
          geoLocation: 'United States',
          license: `${baseUrl}/terms`
        }
      ]
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(page => `  <url>
    <loc>${page.loc}</loc>
${page.images.map(img => `    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      ${img.geoLocation ? `<image:geo_location>${img.geoLocation}</image:geo_location>` : ''}
      ${img.license ? `<image:license>${img.license}</image:license>` : ''}
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
