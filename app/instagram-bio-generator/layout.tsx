import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Bio Generator - Create Perfect Bios in Seconds | Free Tool',
  description: 'Generate creative Instagram bio ideas instantly. Choose from aesthetic, funny, professional, Gen Z, and minimalist styles. Free bio generator with 150+ templates.',
  keywords: 'instagram bio generator, bio ideas aesthetic, instagram bio ideas, funny bio generator, gen z bio, creative bio ideas, instagram profile bio, bio templates, aesthetic bio generator',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/instagram-bio-generator'
  },
  openGraph: {
    title: 'Instagram Bio Generator - Create Perfect Bios Instantly',
    description: 'Generate unique Instagram bios in seconds. Choose your style, add your details, get instant bio ideas that make your profile stand out.',
    type: 'website',
    url: 'https://www.lookatmyprofile.org/instagram-bio-generator',
    siteName: 'LookAtMyProfile',
    images: [{
      url: 'https://www.lookatmyprofile.org/og-bio-generator.jpg',
      width: 1200,
      height: 630,
      alt: 'Instagram Bio Generator Tool'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Bio Generator - Free Tool',
    description: 'Create the perfect Instagram bio in seconds with our AI-powered generator',
    images: ['https://www.lookatmyprofile.org/og-bio-generator.jpg']
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