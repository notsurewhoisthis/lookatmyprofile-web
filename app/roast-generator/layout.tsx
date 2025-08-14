import { FAQSchema, commonFAQs } from '@/components/SEO/FAQSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Roast Generator - Generate Hilarious Roasts Instantly',
  description: 'Use our AI-powered Instagram roast generator to create savage, funny, or friendly roasts. Choose your style and get instant roast results!',
  keywords: 'instagram roast generator, ai roast generator, profile roaster, instagram analyzer, roast my instagram',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-generator'
  },
  openGraph: {
    title: 'Instagram Roast Generator - Roast Any Profile',
    description: 'Generate hilarious AI-powered roasts for any Instagram profile. Choose from savage, friendly, Shakespearean, or Gen-Z styles!',
    type: 'website',
    url: 'https://www.lookatmyprofile.org/roast-generator',
  }
};

export default function RoastGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FAQSchema faqs={commonFAQs.roastGenerator} pageTitle="Roast Generator" />
      {children}
    </>
  );
}