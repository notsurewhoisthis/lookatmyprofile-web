import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "../components/StructuredData";
import { GoogleAnalytics, WebVitalsTracking } from "../components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Roast a Profile - AI Instagram Roaster',
    default: 'Roast a Profile - AI Instagram Profile Roaster & Analyzer'
  },
  description: 'Get hilarious AI-generated roasts of Instagram profiles. Analyze posts, generate funny comments, and discover what your Instagram really says about you.',
  keywords: 'Instagram roast, profile roaster, AI Instagram analyzer, funny social media tool, Instagram comment generator',
  authors: [{ name: 'Roast a Profile Team' }],
  creator: 'Roast a Profile',
  publisher: 'Roast a Profile',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lookatmyprofile.org',
    siteName: 'Roast a Profile',
    title: 'AI Instagram Profile Roaster - Get Roasted!',
    description: 'Turn your Instagram into comedy gold with AI-powered roasts and profile analysis.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roast a Profile - AI Instagram Roaster'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@roastaprofile',
    creator: '@roastaprofile',
    title: 'AI Instagram Profile Roaster - Get Roasted!',
    description: 'Turn your Instagram into comedy gold with AI-powered roasts.',
    images: ['/twitter-card.jpg']
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#6366f1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource Hints for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Prefetch likely navigations */}
        <link rel="prefetch" href="/roast-generator" />
        <link rel="prefetch" href="/download" />
        <link rel="prefetch" href="/instagram-roaster" />
        
        {/* PWA and Mobile */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Additional SEO Meta */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Analytics - Lazy loaded for performance */}
        <GoogleAnalytics />
        <WebVitalsTracking />
        
        {/* Global Structured Data */}
        <OrganizationSchema />
        
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
