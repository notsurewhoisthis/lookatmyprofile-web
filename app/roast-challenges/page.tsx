import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';
import { FAQSchema } from '@/components/SEO/FAQSchema';

interface ChallengeData {
  upcomingChallenge: {
    slug: string;
    title: string;
    theme: string;
    submissionWindow: string;
    prizes: string[];
    submissionTypes: string[];
    judgingCriteria: string[];
    activationCTAs: string[];
  };
  leaderboard: Array<{
    rank: number;
    creator: string;
    platform: string;
    entryTitle: string;
    views: number;
    saves: number;
    engagementRate: string;
    persona: string;
  }>;
  automation: {
    webhook: string;
    reviewWorkflow: string;
    moderationNotes: string[];
  };
}

async function loadChallenge(): Promise<ChallengeData> {
  const filePath = path.join(process.cwd(), 'data', 'roast-challenges.json');
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw) as ChallengeData;
}

export const metadata: Metadata = {
  title: 'Roast Me Royale Challenge Hub',
  description:
    'Submit AI-powered Instagram roast content, climb the leaderboard, and earn backlinks with the Roast Me Royale challenge.',
  alternates: {
    canonical: 'https://www.lookatmyprofile.org/roast-challenges',
  },
};

function buildFaqs(data: ChallengeData) {
  return [
    {
      question: 'How do I join the Roast Me Royale challenge?',
      answer:
        'Generate a roast with any persona page, publish it as a Reel or meme, and submit the link with our UTM parameters during the submission window.',
    },
    {
      question: 'What can I win?',
      answer: `We feature winners on @lookatmyprofile, gift a 12-month Roast a Profile Pro license, and spotlight creators in the Roast Intelligence report. ${data.upcomingChallenge.prizes.join(' • ')}`,
    },
    {
      question: 'How are entries judged?',
      answer:
        'We blend engagement metrics (views, saves, shares) with originality scoring and moderation checkpoints so the spiciest but safe entries rise to the top.',
    },
  ];
}

export default async function RoastChallengesPage() {
  const data = await loadChallenge();
  const faqs = buildFaqs(data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.lookatmyprofile.org/' },
          { name: 'Roast Challenges', url: 'https://www.lookatmyprofile.org/roast-challenges' },
        ]}
      />
      <FAQSchema faqs={faqs} pageTitle="Roast Me Royale Challenge" />

      <div className="container mx-auto px-4 py-16">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 text-orange-300 text-sm">
            <span className="text-lg">🔥</span>
            Roast Me Royale
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
            Submit. Roast. Go Viral. Repeat.
          </h1>
          <p className="text-lg text-gray-300">
            Turn AI roast prompts into share-worthy content, snag backlinks, and grow your community with this month’s showdown.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-300 space-y-4">
            <h2 className="text-2xl font-semibold text-white">{data.upcomingChallenge.title}</h2>
            <p className="uppercase text-xs text-gray-500">Submission Window</p>
            <p className="text-lg text-purple-200">{data.upcomingChallenge.submissionWindow}</p>
            <p>
              <span className="uppercase text-xs text-gray-500">Theme:</span>{' '}
              <span className="text-white">{data.upcomingChallenge.theme}</span>
            </p>
            <div>
              <p className="uppercase text-xs text-gray-500 mb-1">Prizes</p>
              <ul className="list-disc list-inside space-y-1">
                {data.upcomingChallenge.prizes.map((prize) => (
                  <li key={prize}>{prize}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="uppercase text-xs text-gray-500 mb-1">Accepted Formats</p>
              <ul className="list-disc list-inside space-y-1">
                {data.upcomingChallenge.submissionTypes.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-300">
            <h2 className="text-2xl font-semibold text-white mb-4">How Judging Works</h2>
            <ul className="list-decimal list-inside space-y-2 mb-6">
              {data.upcomingChallenge.judgingCriteria.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ul>
            <div className="space-y-3">
              {data.upcomingChallenge.activationCTAs.map((cta) => (
                <button
                  key={cta}
                  className="w-full px-5 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold text-sm"
                >
                  {cta}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">Buttons trigger generator presets, UTM builder, and submission flow (automation hook coming soon).</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">Leaderboard Spotlight</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <table className="w-full text-left text-sm text-gray-200 bg-gray-900/60">
              <thead className="text-xs uppercase tracking-wide text-gray-500 bg-black/40">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Creator</th>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Entry</th>
                  <th className="px-4 py-3">Views</th>
                  <th className="px-4 py-3">Saves</th>
                  <th className="px-4 py-3">Engagement</th>
                </tr>
              </thead>
              <tbody>
                {data.leaderboard.map((entry) => (
                  <tr key={entry.rank} className="border-t border-gray-800">
                    <td className="px-4 py-4">{entry.rank}</td>
                    <td className="px-4 py-4 font-semibold text-white">{entry.creator}</td>
                    <td className="px-4 py-4">{entry.platform}</td>
                    <td className="px-4 py-4">
                      <div className="text-white">{entry.entryTitle}</div>
                      <Link
                        href={`/roast-personas/${entry.persona}`}
                        className="text-xs text-purple-300 underline"
                      >
                        View persona strategy
                      </Link>
                    </td>
                    <td className="px-4 py-4">{entry.views.toLocaleString()}</td>
                    <td className="px-4 py-4">{entry.saves.toLocaleString()}</td>
                    <td className="px-4 py-4">{entry.engagementRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-300 space-y-3">
            <h2 className="text-2xl font-semibold text-white">Automation Stack</h2>
            <p>
              Submission webhook:{' '}
              <span className="font-mono text-purple-200">{data.automation.webhook}</span>
            </p>
            <p>Review workflow: {data.automation.reviewWorkflow}</p>
            <div>
              <p className="uppercase text-xs text-gray-500 mb-1">Moderation Notes</p>
              <ul className="list-disc list-inside space-y-1">
                {data.automation.moderationNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-black/60 border border-gray-800 rounded-2xl p-8 text-sm text-gray-300 space-y-2">
            <h2 className="text-2xl font-semibold text-white">Launch Checklist</h2>
            <p>• Drop a teaser Reel three days before the window opens.</p>
            <p>• Embed the submission CTA on persona pages and in AI answer boxes.</p>
            <p>• Send newsletter recaps using Roast Intelligence charts.</p>
            <p>• Pitch winners to media opportunities highlighted in the Observatory.</p>
            <Link
              href="/reels-hub"
              className="inline-flex mt-4 px-5 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold text-sm"
            >
              Build Your Reel Kit →
            </Link>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-orange-600/20 to-purple-600/20 border border-orange-700/40 rounded-3xl p-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Get Featured in the Observatory</h2>
          <p className="text-gray-200 mb-6">
            Top entries earn permanent placement in the Roast Intelligence report plus outreach to creator economy press.
          </p>
          <Link
            href="/roast-intel"
            className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold"
          >
            See Latest Insights
          </Link>
        </section>
      </div>
    </div>
  );
}
