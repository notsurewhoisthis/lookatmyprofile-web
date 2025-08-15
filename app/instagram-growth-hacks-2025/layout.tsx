import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Growth Hacks 2025: 10 Proven Strategies to Explode Your Following',
  description: 'Discover 10 data-backed Instagram growth hacks for 2025. Learn algorithm secrets, engagement tactics, and viral strategies that helped 10,000+ accounts achieve 347% growth.',
  keywords: 'instagram growth hacks 2025, instagram algorithm 2025, grow instagram followers, instagram engagement tips, instagram viral strategies, instagram growth secrets',
  openGraph: {
    title: 'Instagram Growth Hacks 2025: 10 Proven Strategies',
    description: 'Master the 2025 Instagram algorithm with these 10 proven growth hacks. Real data from 10,000+ accounts.',
    url: 'https://www.lookatmyprofile.org/instagram-growth-hacks-2025',
    siteName: 'Roast My Profile',
    images: [
      {
        url: 'https://www.lookatmyprofile.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Instagram Growth Hacks 2025'
      }
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Growth Hacks 2025: 10 Proven Strategies',
    description: 'Explode your Instagram growth with these 10 data-backed strategies for 2025.',
    images: ['https://www.lookatmyprofile.org/twitter-card.jpg'],
  },
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/instagram-growth-hacks-2025',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function InstagramGrowthHacksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}