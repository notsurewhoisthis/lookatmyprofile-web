import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Persona {
  slug: string;
  title: string;
  metaDescription: string;
  searchIntent: string;
  audienceSignals: string[];
  keywordTargets: string[];
}

async function loadPersonas(): Promise<Persona[]> {
  const filePath = path.join(process.cwd(), 'data', 'roast-personas.json');
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw) as Persona[];
}

export const metadata: Metadata = {
  title: 'Roast Persona Landing Pages',
  description:
    'Spin up SEO-ready AI roast landing pages tailored to gamers, dating app bios, office culture and more.',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-personas',
  },
};

export default async function RoastPersonaIndexPage() {
  const personas = await loadPersonas();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-600/20 text-pink-300 text-sm">
            <span className="text-lg">🧬</span>
            Persona Engine
          </span>
          <h1 className="text-4xl font-bold mt-6 mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent">
            Funnels for Every Roast Niche
          </h1>
          <p className="text-lg text-gray-300">
            Match Reels campaigns to persona landing pages to capture zero-click awareness and install-ready traffic.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {personas.map((persona) => (
            <article
              key={persona.slug}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/40 transition"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="text-2xl font-semibold text-white">{persona.title}</h2>
                <span className="text-xs uppercase tracking-wide text-gray-500">
                  {persona.keywordTargets[0]}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{persona.metaDescription}</p>

              <div className="grid gap-3 text-sm text-gray-300">
                <div>
                  <p className="uppercase text-xs text-gray-500 mb-1">Primary Intent</p>
                  <p>{persona.searchIntent}</p>
                </div>
                <div>
                  <p className="uppercase text-xs text-gray-500 mb-1">Signals</p>
                  <ul className="list-disc list-inside space-y-1">
                    {persona.audienceSignals.map((signal) => (
                      <li key={signal}>{signal}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/roast-personas/${persona.slug}`}
                  className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 font-semibold text-sm"
                >
                  Open Persona Page
                </Link>
                <Link
                  href="/reels-hub"
                  className="px-5 py-2 rounded-full border border-purple-500 text-purple-200 hover:bg-purple-600/20 font-semibold text-sm"
                >
                  Pair With Reels
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
