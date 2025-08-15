import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Engagement Rate Calculator - Free Tool with Benchmarks',
  description: 'Calculate your Instagram engagement rate instantly. Compare with industry benchmarks, get personalized growth tips, and boost your Instagram performance.',
  keywords: 'instagram engagement calculator, engagement rate calculator, instagram analytics, engagement rate formula, instagram metrics, social media calculator, influencer engagement rate',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/instagram-engagement-calculator'
  },
  openGraph: {
    title: 'Instagram Engagement Rate Calculator - Check Your Performance',
    description: 'Free tool to calculate your Instagram engagement rate and compare with industry standards',
    type: 'website',
    url: 'https://www.lookatmyprofile.org/instagram-engagement-calculator',
    siteName: 'LookAtMyProfile',
    images: [{
      url: 'https://www.lookatmyprofile.org/og-engagement-calc.jpg',
      width: 1200,
      height: 630,
      alt: 'Instagram Engagement Calculator'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculate Your Instagram Engagement Rate',
    description: 'Free calculator with industry benchmarks and growth tips',
    images: ['https://www.lookatmyprofile.org/og-engagement-calc.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}