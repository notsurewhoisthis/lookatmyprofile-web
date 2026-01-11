import Link from 'next/link';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Comparisons - Roast a Profile',
  description: 'Compare Roast a Profile with other Instagram roast generators.',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/comparisons',
  },
};

const comparisons = [
  {
    href: '/vs-cleve-ai',
    title: 'Roast a Profile vs Cleve AI',
    description: 'Side-by-side features, pricing, roast quality, and speed.',
  },
  {
    href: '/vs-olly-social',
    title: 'Roast a Profile vs Olly Social',
    description: 'Customization options, pricing, and roast styles compared.',
  },
];

export default function ComparisonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Comparisons', url: 'https://www.lookatmyprofile.org/comparisons' },
        ]}
      />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Comparisons
          </h1>
          <p className="text-lg text-gray-300 mb-10">
            Pick the best roast generator by comparing features, pricing, and roast quality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {comparisons.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-gray-800/70 hover:bg-gray-800 rounded-xl p-6 transition"
            >
              <h2 className="text-2xl font-semibold mb-2 text-purple-400">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
              <span className="inline-flex items-center mt-4 text-sm text-purple-300">
                View comparison →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
