import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FAQSchema } from '@/components/SEO/FAQSchema';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';

interface ContentBlock {
  heading: string;
  summary: string;
}

interface Persona {
  slug: string;
  title: string;
  metaDescription: string;
  searchIntent: string;
  audienceSignals: string[];
  painPoints: string[];
  keywordTargets: string[];
  contentBlocks: ContentBlock[];
  samplePrompts: string[];
  recommendedCTAs: string[];
  relatedReels?: string[];
}

async function readPersonas(): Promise<Persona[]> {
  const filePath = path.join(process.cwd(), 'data', 'roast-personas.json');
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw) as Persona[];
}

async function findPersona(slug: string) {
  const personas = await readPersonas();
  return personas.find((persona) => persona.slug === slug);
}

export async function generateStaticParams() {
  const personas = await readPersonas();
  return personas.map((persona) => ({ slug: persona.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const persona = await findPersona(slug);

  if (!persona) {
    return {
      title: 'Persona Not Found',
      description: 'This roast generator persona could not be located.',
    };
  }

  return {
    title: `${persona.title} | Roast a Profile`,
    description: persona.metaDescription,
    alternates: {
      canonical: `https://www.lookatmyprofile.org/roast-personas/${persona.slug}`,
    },
    keywords: persona.keywordTargets,
  };
}

function buildFaqs(persona: Persona) {
  return [
    {
      question: `How is the ${persona.title} tuned for this audience?`,
      answer:
        'The persona loads niche vocabulary, meme references, and tone constraints so the AI output sounds native to the community while staying brand-safe.',
    },
    {
      question: 'How do I export these roasts for social?',
      answer:
        'Use the export buttons inside the generator to grab 9:16 captions, Story stickers, or carousel slides. Pair the link with the UTM builder for tracking.',
    },
    {
      question: 'Where should I drive traffic after the roast?',
      answer:
        'Embed the recommended CTAs on this page and in your Reels captions, then monitor assisted conversions inside the Roast Intelligence Observatory.',
    },
  ];
}

export default async function RoastPersonaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const persona = await findPersona(slug);

  if (!persona) {
    notFound();
  }

  const faqs = buildFaqs(persona);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Roast Personas', url: 'https://www.lookatmyprofile.org/roast-personas' },
          { name: persona.title, url: `/roast-personas/${persona.slug}` },
        ]}
      />
      <FAQSchema faqs={faqs} pageTitle={persona.title} />

      <div className="container mx-auto px-4 py-16">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm">
            <span className="text-lg">🎯</span>
            Persona Blueprint
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent">
            {persona.title}
          </h1>
          <p className="text-lg text-gray-300">{persona.metaDescription}</p>
        </header>

        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-900/70 border border-purple-700/40 rounded-2xl p-6 text-sm text-gray-200">
            <h2 className="text-lg font-semibold text-white mb-2">Quick Answer</h2>
            <p>
              {persona.title} bundles meme-ready copy, tone controls, and social exports so {persona.keywordTargets[0]} searches land on a page that
              converts Reel viewers into app installs within two clicks.
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-300 space-y-4">
            <div>
              <p className="uppercase text-xs text-gray-500 mb-1">Search Intent</p>
              <p>{persona.searchIntent}</p>
            </div>
            <div>
              <p className="uppercase text-xs text-gray-500 mb-1">Audience Signals</p>
              <ul className="list-disc list-inside space-y-1">
                {persona.audienceSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="uppercase text-xs text-gray-500 mb-1">Pain Points</p>
              <ul className="list-disc list-inside space-y-1">
                {persona.painPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-300">
            <p className="uppercase text-xs text-gray-500 mb-2">Keyword Priorities</p>
            <ul className="grid gap-2">
              {persona.keywordTargets.map((keyword) => (
                <li key={keyword} className="px-3 py-2 rounded-lg bg-black/50 border border-gray-800 text-purple-200">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">Landing Page Content Stack</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {persona.contentBlocks.map((block) => (
              <article key={block.heading} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{block.heading}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{block.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-200">
            <h2 className="text-2xl font-semibold text-white mb-4">Sample Prompts</h2>
            <ul className="space-y-4">
              {persona.samplePrompts.map((prompt) => (
                <li key={prompt} className="p-4 bg-gray-900/60 rounded-xl border border-gray-800">
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-200">
            <h2 className="text-2xl font-semibold text-white mb-4">Recommended CTAs</h2>
            <ul className="space-y-3">
              {persona.recommendedCTAs.map((cta) => (
                <li key={cta} className="px-4 py-3 bg-purple-600/20 border border-purple-700/40 rounded-xl">
                  {cta}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-400">
              Place one CTA above the fold and one after the first content block. Drive traffic to in-app purchase flows or newsletter onboarding.
            </p>
          </div>
        </section>

        {persona.relatedReels?.length ? (
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">Reel Campaign Pairings</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {persona.relatedReels.map((reelId) => (
                <Link
                  key={reelId}
                  href={`/reels-hub#${reelId}`}
                  className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/40 transition"
                >
                  <p className="text-sm uppercase text-gray-500 mb-2">Reel Hook</p>
                  <p className="text-lg text-purple-200">{reelId.replace(/-/g, ' ')}</p>
                  <p className="text-sm text-gray-400 mt-2">Jump to the Reels hub for scripts, audio, and UTM defaults.</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-700/40 rounded-3xl p-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Launch?</h2>
          <p className="text-gray-200 mb-6">
            Pair this persona with the Roast Me Royale challenge and the Intelligence report to capture backlinks and PR buzz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roast-challenges"
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold"
            >
              Join Roast Me Royale
            </Link>
            <Link
              href="/roast-intel"
              className="px-6 py-3 rounded-full border border-purple-500 text-purple-200 hover:bg-purple-600/20 transition font-semibold"
            >
              View Latest Report
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
