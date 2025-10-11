'use client';

import { useState } from 'react';

interface UtmBuilderProps {
  baseUrl?: string;
  defaultSource?: string;
  defaultMedium?: string;
  defaultCampaign?: string;
}

function composeUrl({
  baseUrl,
  source,
  medium,
  campaign,
  content,
  term,
}: {
  baseUrl: string;
  source: string;
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
}) {
  const url = new URL(baseUrl || 'https://www.lookatmyprofile.org');
  if (source) url.searchParams.set('utm_source', source);
  if (medium) url.searchParams.set('utm_medium', medium);
  if (campaign) url.searchParams.set('utm_campaign', campaign);
  if (content) url.searchParams.set('utm_content', content);
  if (term) url.searchParams.set('utm_term', term);
  return url.toString();
}

export function UtmBuilder({
  baseUrl = 'https://www.lookatmyprofile.org/roast-generator',
  defaultSource = 'instagram',
  defaultMedium = 'reels',
  defaultCampaign = 'roast_campaign',
}: UtmBuilderProps) {
  const [source, setSource] = useState(defaultSource);
  const [medium, setMedium] = useState(defaultMedium);
  const [campaign, setCampaign] = useState(defaultCampaign);
  const [content, setContent] = useState('');
  const [term, setTerm] = useState('');

  const resultUrl = composeUrl({ baseUrl, source, medium, campaign, content, term });

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🧪</span>
        <div>
          <h3 className="text-xl font-semibold text-white">Reels UTM Link Builder</h3>
          <p className="text-sm text-gray-400">
            Generate trackable links for link-in-bio, Story stickers, and QR codes in seconds.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 text-sm text-gray-300">
        <label className="flex flex-col">
          UTM Source
          <input
            value={source}
            onChange={(event) => setSource(event.target.value)}
            className="mt-1 rounded-lg bg-gray-950 border border-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="instagram"
          />
        </label>
        <label className="flex flex-col">
          UTM Medium
          <input
            value={medium}
            onChange={(event) => setMedium(event.target.value)}
            className="mt-1 rounded-lg bg-gray-950 border border-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="reels"
          />
        </label>
        <label className="flex flex-col">
          UTM Campaign
          <input
            value={campaign}
            onChange={(event) => setCampaign(event.target.value)}
            className="mt-1 rounded-lg bg-gray-950 border border-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="roast_drop_week1"
          />
        </label>
        <label className="flex flex-col">
          UTM Content
          <input
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="mt-1 rounded-lg bg-gray-950 border border-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="creative-variation"
          />
        </label>
        <label className="flex flex-col md:col-span-2">
          UTM Term (optional)
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            className="mt-1 rounded-lg bg-gray-950 border border-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="keyword if running paid boost"
          />
        </label>
      </div>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Copy &amp; Share</p>
        <div className="bg-black/60 border border-gray-800 rounded-lg px-4 py-3 text-sm text-purple-200 break-all">
          {resultUrl}
        </div>
      </div>
    </div>
  );
}

export default UtmBuilder;
