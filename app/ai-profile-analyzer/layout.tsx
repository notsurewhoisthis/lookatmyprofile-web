import { FAQSchema, commonFAQs } from '@/components/SEO/FAQSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Instagram Profile Analyzer - Deep Personality Insights',
  description: 'Get AI-powered insights about any Instagram profile. Analyze posting patterns, personality traits, and get detailed profile breakdowns.',
  keywords: 'ai profile analyzer, instagram analyzer, profile insights, instagram personality test, social media analyzer',
  openGraph: {
    title: 'AI Instagram Profile Analyzer - Deep Insights',
    description: 'Discover hidden patterns and personality traits in any Instagram profile with our advanced AI analyzer.',
    type: 'website',
    url: 'https://www.lookatmyprofile.org/ai-profile-analyzer',
  }
};

export default function AIProfileAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FAQSchema faqs={commonFAQs.aiAnalyzer} pageTitle="AI Profile Analyzer" />
      {children}
    </>
  );
}