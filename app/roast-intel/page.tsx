import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { FAQSchema } from '@/components/SEO/FAQSchema';

interface PersonaMetric {
  persona: string;
  sessions: number;
  shareRate: string;
  topKeyword: string;
  avgTimeOnPage: string;
}

interface ReelPerformance {
  campaignId: string;
  reach: number;
  plays: number;
  clicks: number;
  utmClicks: number;
  conversionRate: string;
}

interface QueryMetric {
  keyword: string;
  position: number;
  clicks: number;
  impressions: number;
  notes: string;
}

interface MediaOpportunity {
  title: string;
  type: string;
  angle: string;
  contact: string;
}

interface IntelligenceReport {
  reportMonth: string;
  summary: {
    highlight: string;
    topChannel: string;
    keyStat: string;
  };
  trafficByPersona: PersonaMetric[];
  reelsPerformance: ReelPerformance[];
  topQueries: QueryMetric[];
  mediaOpportunities: MediaOpportunity[];
  actions: string[];
}

async function loadReport(): Promise<IntelligenceReport> {
  const filePath = path.join(process.cwd(), 'data', 'roast-intelligence.json');
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw) as IntelligenceReport;
}

export const metadata: Metadata = {
  title: 'Roast Intelligence Observatory',
  description:
    'Monthly intelligence for the Roast a Profile growth engine—Reels analytics, persona performance, top queries, and PR targets.',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-intel',
  },
};

function buildFaqs(): { question: string; answer: string }[] {
  return [
    {
      question: 'How often is the Roast Intelligence report updated?',
      answer:
        'We publish a new snapshot at the start of every month after syncing GA4, n8n workflow logs, and campaign analytics.',
    },
    {
      question: 'Can I reuse these charts in press pitches or newsletters?',
      answer:
        'Absolutely—credit lookatmyprofile.org, link back here, and share persona CTAs so readers can replicate the insights.',
    },
    {
      question: 'How do I feed my campaign data into the Observatory?',
      answer:
        'Tag every link with the Reels UTM builder, ensure the n8n job commits JSON snapshots, and your numbers will roll into the next report.',
    },
  ];
}

export default async function RoastIntelligencePage() {
  const report = await loadReport();
  const faqs = buildFaqs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Roast Intelligence', url: 'https://www.lookatmyprofile.org/roast-intel' },
        ]}
      />
      <FAQSchema faqs={faqs} pageTitle="Roast Intelligence Observatory" />

      <div className="container mx-auto px-4 py-16">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm">
            <span className="text-lg">📊</span>
            Monthly Observatory — {report.reportMonth}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast Intelligence Report
          </h1>
          <p className="text-lg text-gray-300">
            Track how persona funnels, Reels campaigns, and zero-click SERPs impact installs and backlinks.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-16">
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <p className="text-xs uppercase text-gray-500 mb-1">Highlight</p>
            <p className="text-sm text-gray-200">{report.summary.highlight}</p>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <p className="text-xs uppercase text-gray-500 mb-1">Top Channel</p>
            <p className="text-sm text-gray-200">{report.summary.topChannel}</p>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <p className="text-xs uppercase text-gray-500 mb-1">Key Stat</p>
            <p className="text-sm text-gray-200">{report.summary.keyStat}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Persona Performance</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {report.trafficByPersona.map((persona) => (
              <Link
                key={persona.persona}
                href={`/roast-personas/${persona.persona}`}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/30 transition"
              >
                <p className="text-sm uppercase text-gray-500 mb-2">{persona.persona}</p>
                <p className="text-2xl font-semibold text-white mb-3">
                  {persona.sessions.toLocaleString()} sessions
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>Share rate: {persona.shareRate}</li>
                  <li>Top keyword: {persona.topKeyword}</li>
                  <li>Time on page: {persona.avgTimeOnPage}</li>
                </ul>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4">Reels Campaign Analytics</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <table className="w-full text-left text-sm text-gray-200 bg-gray-900/60">
              <thead className="text-xs uppercase tracking-wide text-gray-500 bg-black/40">
                <tr>
                  <th className="px-4 py-3">Campaign</th>
                  <th className="px-4 py-3">Reach</th>
                  <th className="px-4 py-3">Plays</th>
                  <th className="px-4 py-3">Clicks</th>
                  <th className="px-4 py-3">UTM Clicks</th>
                  <th className="px-4 py-3">Conversion</th>
                </tr>
              </thead>
              <tbody>
                {report.reelsPerformance.map((campaign) => (
                  <tr key={campaign.campaignId} className="border-t border-gray-800">
                    <td className="px-4 py-4">
                      <Link
                        href={`/reels-hub#${campaign.campaignId}`}
                        className="text-white underline decoration-purple-400"
                      >
                        {campaign.campaignId.replace(/-/g, ' ')}
                      </Link>
                    </td>
                    <td className="px-4 py-4">{campaign.reach.toLocaleString()}</td>
                    <td className="px-4 py-4">{campaign.plays.toLocaleString()}</td>
                    <td className="px-4 py-4">{campaign.clicks.toLocaleString()}</td>
                    <td className="px-4 py-4">{campaign.utmClicks.toLocaleString()}</td>
                    <td className="px-4 py-4">{campaign.conversionRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-200 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Top Search Queries</h2>
            {report.topQueries.map((query) => (
              <div key={query.keyword} className="p-4 bg-gray-900/60 rounded-xl border border-gray-800">
                <p className="text-white font-semibold mb-1">{query.keyword}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Position {query.position.toFixed(1)} · {query.clicks.toLocaleString()} clicks ·{' '}
                  {query.impressions.toLocaleString()} impressions
                </p>
                <p className="text-sm text-gray-300">{query.notes}</p>
              </div>
            ))}
          </div>
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-200 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Media + Backlink Targets</h2>
            {report.mediaOpportunities.map((opportunity) => (
              <div key={opportunity.title} className="p-4 bg-gray-900/60 rounded-xl border border-gray-800">
                <p className="text-white font-semibold">{opportunity.title}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{opportunity.type}</p>
                <p className="text-sm text-gray-300 mt-2">{opportunity.angle}</p>
                <p className="text-xs text-purple-200 mt-2">Contact: {opportunity.contact}</p>
              </div>
            ))}
            <p className="text-xs text-gray-500">
              Use these angles when pitching winners from the Roast Me Royale challenge.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-16 bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Top Actions</h2>
          <ul className="list-disc list-inside space-y-2">
            {report.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/roast-personas"
              className="px-5 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold text-sm"
            >
              Launch Persona Pages
            </Link>
            <Link
              href="/reels-hub"
              className="px-5 py-3 rounded-full border border-purple-500 text-purple-200 hover:bg-purple-600/20 transition font-semibold text-sm"
            >
              Sync Reels Campaigns
            </Link>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-700/40 rounded-3xl p-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Need the Raw Data Export?</h2>
          <p className="text-gray-200 mb-6">
            Tap into the CSV or API feed to power newsroom pitches, investor updates, and weekly growth newsletters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold">
              Download CSV
            </button>
            <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-200 hover:bg-purple-600/20 transition font-semibold">
              Request API Access
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
