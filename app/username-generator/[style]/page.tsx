import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { FAQSchema } from '@/components/SEO/FAQSchema';

interface UsernameData {
  slug: string;
  type: string;
  subtype: string;
  title: string;
  description: string;
  data: Array<{
    username: string;
    withModifier: string;
    withNumbers: string;
    withUnderscore: string;
    withDot: string;
  }>;
  metadata: {
    generated: string;
    version: string;
    totalItems: number;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonical: string;
  };
  relatedPages: Array<{
    title: string;
    url: string;
  }>;
}

async function getUsernameData(style: string): Promise<UsernameData | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'generated-data', 'username-generator', `${style}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error loading username data for ${style}:`, error);
    return null;
  }
}

export async function generateStaticParams() {
  const styles = ['aesthetic', 'funny', 'creative', 'minimalist', 'y2k'];
  return styles.map((style) => ({
    style: style,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ style: string }> }): Promise<Metadata> {
  const { style } = await params;
  const data = await getUsernameData(style);
  
  if (!data) {
    return {
      title: 'Username Generator Not Found',
      description: 'The username style you are looking for could not be found.'
    };
  }

  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
    keywords: data.seo.keywords.join(', '),
    alternates: {
      canonical: data.seo.canonical
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: data.seo.canonical,
    }
  };
}

export default async function UsernamePage({ params }: { params: Promise<{ style: string }> }) {
  const { style } = await params;
  const data = await getUsernameData(style);
  
  if (!data) {
    notFound();
  }

  const faqs = [
    {
      question: `What makes a good ${style} Instagram username?`,
      answer: `A good ${style} username should be memorable, reflect your personality, and be easy to spell. It should align with your content style and target audience.`
    },
    {
      question: 'Can I use special characters in my Instagram username?',
      answer: 'Instagram usernames can only contain letters, numbers, periods, and underscores. No spaces or other special characters are allowed.'
    },
    {
      question: 'How often can I change my Instagram username?',
      answer: 'You can change your Instagram username as often as you like, but frequent changes might confuse your followers.'
    },
    {
      question: 'What if my desired username is taken?',
      answer: 'Try adding numbers, underscores, or periods. You can also try variations with prefixes or suffixes that maintain your brand identity.'
    }
  ];

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Username Generator', url: 'https://www.lookatmyprofile.org/username-generator' },
          { name: data.title, url: data.seo.canonical }
        ]}
      />
      <FAQSchema faqs={faqs} pageTitle={data.title} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Roast a Profile
            </Link>
            <div className="flex gap-4 items-center">
              <Link href="/username-generator" className="hover:text-purple-400 transition">Generator</Link>
              <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {data.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            {data.description}
          </p>
        </section>

        {/* Username Examples Grid */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8">Generated Username Ideas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.data.slice(0, 30).map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Option {index + 1}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
                    <span className="text-gray-300">Basic:</span>
                    <span className="font-mono text-white">{item.username}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
                    <span className="text-gray-300">With Style:</span>
                    <span className="font-mono text-white">{item.withModifier}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
                    <span className="text-gray-300">Numbered:</span>
                    <span className="font-mono text-white">{item.withNumbers}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
                    <span className="text-gray-300">Underscore:</span>
                    <span className="font-mono text-white">{item.withUnderscore}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
                    <span className="text-gray-300">Dotted:</span>
                    <span className="font-mono text-white">{item.withDot}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                  Copy Username
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Tips for Choosing the Perfect Username</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Do's</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ Keep it short and memorable</li>
                  <li>✅ Make it easy to spell and pronounce</li>
                  <li>✅ Reflect your niche or personality</li>
                  <li>✅ Check availability on other platforms</li>
                  <li>✅ Consider your long-term brand</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Don'ts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>❌ Use too many numbers or underscores</li>
                  <li>❌ Copy someone else's username exactly</li>
                  <li>❌ Make it too complicated</li>
                  <li>❌ Use trendy terms that might age poorly</li>
                  <li>❌ Include personal information</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Styles */}
        {data.relatedPages && data.relatedPages.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-6">Explore Other Username Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {data.relatedPages.map((page, index) => (
                <Link 
                  key={index}
                  href={page.url}
                  className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition"
                >
                  <span className="text-purple-400 hover:text-purple-300">{page.title.split(' - ')[0]}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Profile?</h2>
            <p className="text-xl mb-6">Now that you have your username, complete your profile with our other tools!</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/tools/bio-generator" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Bio Generator
              </Link>
              <Link href="/tools/caption-generator" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Caption Ideas
              </Link>
              <Link href="/roast-generator" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Get Roasted
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>Generated on {new Date(data.metadata.generated).toLocaleDateString()}</p>
            <p className="mt-2">© 2025 LookAtMyProfile.org - Your Instagram Profile Companion</p>
          </div>
        </footer>
      </div>
    </>
  );
}
