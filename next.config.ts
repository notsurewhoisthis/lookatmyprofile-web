import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    domains: ['www.lookatmyprofile.org', 'apps.apple.com', 'play.google.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Experimental performance features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Security and SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com *.googletagmanager.com https://www.google-analytics.com *.google-analytics.com *.analytics.google.com https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com *.google-analytics.com *.analytics.google.com *.googletagmanager.com https://api.openai.com https://api.anthropic.com;"
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Cache control for static assets
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      // Specific cache control for HTML pages
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=31536000, stale-while-revalidate'
          }
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'lookatmyprofile.org',
          },
        ],
        destination: 'https://www.lookatmyprofile.org/:path*',
        permanent: true,
      },
      // Legacy tool paths
      {
        source: '/bio-templates/:path*',
        destination: '/tools/bio-generator',
        permanent: true,
      },
      {
        source: '/caption-generator/:path*',
        destination: '/tools/caption-generator',
        permanent: true,
      },
      {
        source: '/rate-my-instagram-profile',
        destination: '/instagram-profile-analyzer',
        permanent: true,
      },
      {
        source: '/vs-roast-master',
        destination: '/comparisons',
        permanent: true,
      },
      {
        source: '/instagram-hashtag-generator',
        destination: '/tools/hashtag-generator',
        permanent: true,
      },
      {
        source: '/instagram-roast-generator',
        destination: '/roast-generator',
        permanent: true,
      },
      {
        source: '/instagram-personality-generator',
        destination: '/my-insta-personality',
        permanent: true,
      },
      // Related page fallbacks
      {
        source: '/caption-ideas-:slug*',
        destination: '/tools/caption-generator',
        permanent: true,
      },
      {
        source: '/best-caption-:slug*',
        destination: '/tools/caption-generator',
        permanent: true,
      },
      {
        source: '/bio-ideas-:slug*',
        destination: '/tools/bio-generator',
        permanent: true,
      },
      {
        source: '/best-bio-:slug*',
        destination: '/tools/bio-generator',
        permanent: true,
      },
      {
        source: '/hashtag-ideas-:slug*',
        destination: '/tools/hashtag-generator',
        permanent: true,
      },
      {
        source: '/best-hashtag-:slug*',
        destination: '/tools/hashtag-generator',
        permanent: true,
      },
      {
        source: '/roast-ideas-:slug*',
        destination: '/roast-generator',
        permanent: true,
      },
      {
        source: '/best-roast-:slug*',
        destination: '/roast-generator',
        permanent: true,
      },
      {
        source: '/personality-ideas-:slug*',
        destination: '/my-insta-personality',
        permanent: true,
      },
      {
        source: '/best-personality-:slug*',
        destination: '/my-insta-personality',
        permanent: true,
      },
    ]
  },

  // Rewrites for cleaner URLs
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    }
  },
};;

export default nextConfig;
