import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Insta Personality - AI Instagram Personality Test | Viral Trend 2024',
  description: 'Discover your Instagram personality type with the viral AI analyzer. Get roasted, find your celebrity twin, and share your results. Join 500K+ people who tried it!',
  keywords: 'my insta personality, instagram personality test, AI personality analyzer, instagram roast, viral instagram trend, personality quiz, instagram analyzer, social media personality',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/my-insta-personality'
  },
  openGraph: {
    title: 'My Insta Personality - The Viral AI Instagram Analyzer',
    description: 'Find out what your Instagram really says about you. Get roasted by AI and discover your personality type!',
    type: 'website',
    url: 'https://www.lookatmyprofile.org/my-insta-personality',
    siteName: 'LookAtMyProfile',
    images: [{
      url: 'https://www.lookatmyprofile.org/og-personality.jpg',
      width: 1200,
      height: 630,
      alt: 'My Insta Personality - Viral AI Test'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Insta Personality - What does your Instagram say about you?',
    description: 'The viral AI that reads your Instagram soul and roasts it to perfection',
    images: ['https://www.lookatmyprofile.org/og-personality.jpg']
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