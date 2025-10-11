import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import { UtmBuilder } from '@/components/Reels/UtmBuilder';

interface Campaign {
  id: string;
  title: string;
  hook: string;
  cta: string;
  publishingWindow: string;
  audioSuggestion: string;
  utm: {
    source: string;
    medium: string;
    campaign: string;
    content: string;
  };
}

interface PersonaMapEntry {
  slug: string;
  relatedReels?: string[];
}

async function loadCampaigns(): Promise<Campaign[]> {
  const filePath = path.join(process.cwd(), 'data', 'reels-campaigns.json');
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw) as Campaign[];
}

async function loadPersonaMap(): Promise<Record<string, string>> {
  const filePath = path.join(process.cwd(), 'data', 'roast-personas.json');
  const raw = await fs.readFile(filePath, 'utf-8');
  const personas = JSON.parse(raw) as PersonaMapEntry[];
  const map: Record<string, string> = {};
  personas.forEach((persona) => {
    persona.relatedReels?.forEach((reelId) => {
      map[reelId] = persona.slug;
    });
  });
  return map;
}

export const metadata: Metadata = {
  title: 'Instagram Roast Reels Hub',
  description:
    'Plan agile Instagram Reels campaigns with ready-made hooks, CTA scripts, and analytics tracking for the roast generator brand.',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/reels-hub',
  },
};

export default async function ReelsHubPage() {
  const campaigns = await loadCampaigns();
  const personaMap = await loadPersonaMap();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm">
            <span className="text-lg">🎬</span>
            Roast Reels Control Center
          </span>
          <h1 className="text-4xl font-bold mt-6 mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Launch a Viral Roast Reel Every Week
          </h1>
          <p className="text-lg text-gray-300">
            Pair hooks, captions, audio picks, and UTM tracking with persona landing pages so every Reel drives install-ready traffic.
          </p>
        </header>

        <section className="grid gap-8 max-w-5xl mx-auto mb-16">
          {campaigns.map((campaign) => (
            <article
              key={campaign.id}
              id={campaign.id}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex flex-wrap justify-between gap-4 mb-4">
                <h2 className="text-2xl font-semibold text-white">{campaign.title}</h2>
                <span className="px-3 py-1 rounded-full bg-purple-600/20 text-xs uppercase tracking-wide text-purple-200">
                  {campaign.publishingWindow}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Hook</p>
                  <p className="text-lg text-purple-200">{campaign.hook}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">CTA Script</p>
                  <p className="text-lg text-gray-200">{campaign.cta}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm text-gray-300">
                <div className="bg-black/40 border border-gray-800 rounded-xl p-4">
                  <p className="uppercase text-xs text-gray-500 mb-1">Suggested Audio</p>
                  <p className="text-white font-medium">{campaign.audioSuggestion}</p>
                </div>
                <div className="bg-black/40 border border-gray-800 rounded-xl p-4">
                  <p className="uppercase text-xs text-gray-500 mb-1">UTM Defaults</p>
                  <ul className="space-y-1">
                    <li>source: {campaign.utm.source}</li>
                    <li>medium: {campaign.utm.medium}</li>
                    <li>campaign: {campaign.utm.campaign}</li>
                    <li>content: {campaign.utm.content}</li>
                  </ul>
                </div>
                <div className="bg-black/40 border border-gray-800 rounded-xl p-4">
                  <p className="uppercase text-xs text-gray-500 mb-1">Persona Alignment</p>
                  {personaMap[campaign.id] ? (
                    <p>
                      Link to the matching{' '}
                      <Link
                        href={`/roast-personas/${personaMap[campaign.id]}`}
                        className="text-purple-300 underline"
                      >
                        persona landing page
                      </Link>
                      {' '}for consistent messaging.
                    </p>
                  ) : (
                    <p>Add this Reel to a persona page to capture post-view clicks.</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Track Every Swipe-Up</h2>
            <p className="text-sm text-gray-300 mb-6">
              Generate UTM-tagged links for link-in-bio, Story stickers, and QR codes. Feed the data straight into GA4 and the Roast Intelligence Observatory.
            </p>
            <UtmBuilder />
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-sm text-gray-300 space-y-4">
            <h3 className="text-xl font-semibold text-white">Reel Best Practices</h3>
            <p>• Lead with the spiciest line in the first three seconds.</p>
            <p>• Overlay CTA cards pointing to persona-specific offers.</p>
            <p>• Incentivise saves with caption freebies (templates, prompts).</p>
            <p>• Refresh UTM content values weekly to compare creatives.</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-700/40 rounded-3xl p-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Plug Into The Full System</h2>
          <p className="text-gray-200 mb-6">
            Sync this Reels flywheel with the Roast Me Royale challenge and the Intelligence report to win backlinks and zero-click visibility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roast-challenges"
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold"
            >
              View Roast Me Royale
            </Link>
            <Link
              href="/roast-intel"
              className="px-6 py-3 rounded-full border border-purple-500 text-purple-200 hover:bg-purple-600/20 transition font-semibold"
            >
              Open Roast Intelligence
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
