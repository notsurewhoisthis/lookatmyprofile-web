import { FAQSchema, commonFAQs } from '@/components/SEO/FAQSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instagram Roast Examples - Best AI Generated Roasts',
  description: 'Browse hilarious examples of AI-generated Instagram roasts. See real roasts in different styles: savage, friendly, Shakespearean, and Gen-Z.',
  keywords: 'instagram roast examples, funny roasts, savage roasts, roast ideas, best instagram roasts',
  openGraph: {
    title: 'Instagram Roast Examples - Hilarious AI Roasts',
    description: 'Check out the funniest AI-generated Instagram roasts. Get inspired or just have a laugh!',
    type: 'website',
    url: 'https://www.lookatmyprofile.org/roast-examples',
  }
};

export default function RoastExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FAQSchema faqs={commonFAQs.roastExamples} pageTitle="Roast Examples" />
      {children}
    </>
  );
}