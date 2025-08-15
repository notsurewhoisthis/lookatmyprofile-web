'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';

const captionTemplates = {
  motivational: [
    "🚀 {action} because {reason}. Who's with me? 💪\n\n#motivation #goals #{topic}",
    "Every {timeframe} is a chance to {goal}. Today I choose {choice}. ✨\n\n#mindset #growth #{topic}",
    "Remember: {quote}. This is your sign to {action}! 🌟\n\n#inspiration #dailymotivation #{topic}",
  ],
  funny: [
    "Me: {setup}\nAlso me: {punchline} 😂\n\nWho else? 🙋‍♀️\n\n#relatable #mood #{topic}",
    "POV: You {situation} and {outcome} 🤡\n\nStory of my life tbh\n\n#funny #memes #{topic}",
    "I {action} so you don't have to. You're welcome. 😌\n\n#comedy #humor #{topic}",
  ],
  aesthetic: [
    "Lost in {place}, found in {feeling} 🌙✨\n\n#{topic} #aesthetic #vibes",
    "Chasing {dream} and catching {reality} 🦋\n\n#{topic} #mood #explore",
    "{feeling} in a world of {contrast} ☁️\n\n#{topic} #aestheticfeed #dreamy",
  ],
  engagement: [
    "Quick poll! 🗳️\n\n{optionA} or {optionB}?\n\nComment below! 👇\n\n#{topic} #thisorthat #poll",
    "Wrong answers only: What is {question}? 😅\n\nBest comment wins!\n\n#{topic} #interactive #fun",
    "Tag someone who {description}! 👀\n\nI'll go first: {tag}\n\n#{topic} #tagafriend #challenge",
  ],
  lifestyle: [
    "Current status: {status} ☕️\n\nToday's agenda:\n✓ {task1}\n✓ {task2}\n✓ {task3}\n\n#{topic} #lifestyle #daily",
    "Life lately: {emoji1} {emoji2} {emoji3}\n\n{description}\n\n#{topic} #life #moments",
    "Note to self: {reminder} 📝\n\nWhat's your reminder today?\n\n#{topic} #selfcare #notes",
  ],
  travel: [
    "📍 {location}\n\n{description} and I'm never leaving 🌍\n\n#{topic} #travel #wanderlust",
    "Passport: ✓\nCamera: ✓\n{item}: ✓\nAdventure mode: ACTIVATED 🗺️\n\n#{topic} #traveling #explore",
    "Take me back to {location} where {memory} 🌅\n\n#{topic} #travelgram #memories",
  ],
  food: [
    "Rating this {dish}: {rating}/10 🍽️\n\nWould you try it? 👇\n\n#{topic} #foodie #yum",
    "Today's mood: {food} 🤤\n\nWhat's your comfort food?\n\n#{topic} #foodstagram #delicious",
    "Recipe for happiness:\n1. {ingredient1}\n2. {ingredient2}\n3. Repeat 😋\n\n#{topic} #food #recipe",
  ],
  selfie: [
    "Felt {feeling}, might delete later (but probably won't) 📸\n\n#{topic} #selfie #mood",
    "{day} but make it {vibe} ✨\n\n#{topic} #ootd #vibes",
    "Serving {look} because {reason} 💅\n\n#{topic} #selfcare #confidence",
  ]
};

export default function InstagramCaptionGenerator() {
  const [selectedType, setSelectedType] = useState<keyof typeof captionTemplates>('engagement');
  const [customInputs, setCustomInputs] = useState<Record<string, string>>({});
  const [generatedCaptions, setGeneratedCaptions] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const extractPlaceholders = (template: string): string[] => {
    const matches = template.match(/{([^}]+)}/g);
    return matches ? matches.map(m => m.slice(1, -1)) : [];
  };

  const generateCaptions = () => {
    const templates = captionTemplates[selectedType];
    const captions = templates.map(template => {
      let caption = template;
      const placeholders = extractPlaceholders(template);
      
      placeholders.forEach(placeholder => {
        const value = customInputs[placeholder] || getDefaultValue(placeholder);
        caption = caption.replace(`{${placeholder}}`, value);
      });
      
      return caption;
    });
    
    setGeneratedCaptions(captions);
  };

  const getDefaultValue = (placeholder: string): string => {
    const defaults: Record<string, string[]> = {
      action: ['started something new', 'took the leap', 'made it happen', 'chased my dreams'],
      reason: ['life is too short', 'tomorrow isn\'t promised', 'growth happens outside comfort zones'],
      topic: ['instagood', 'instadaily', 'trending', 'viral'],
      timeframe: ['day', 'moment', 'opportunity', 'sunrise'],
      goal: ['level up', 'be better', 'grow stronger', 'shine brighter'],
      choice: ['growth', 'happiness', 'positivity', 'success'],
      quote: ['You miss 100% of shots you don\'t take', 'Be yourself', 'Dream big'],
      setup: ['I\'ll be productive today', 'I\'m going to bed early', 'Just one episode'],
      punchline: ['*Opens Instagram for 3 hours*', '*It\'s 3am*', '*Finishes entire season*'],
      situation: ['try to be productive', 'say you\'ll eat healthy', 'promise to save money'],
      outcome: ['end up on TikTok for hours', 'order pizza', 'buy everything online'],
      place: ['moments', 'paradise', 'dreams', 'wanderlust'],
      feeling: ['peace', 'magic', 'serenity', 'bliss'],
      dream: ['sunsets', 'adventures', 'moments', 'memories'],
      reality: ['feelings', 'magic', 'happiness', 'peace'],
      contrast: ['chaos', 'wonder', 'possibilities', 'dreams'],
      optionA: ['Coffee', 'Beach', 'Dogs', 'Pizza'],
      optionB: ['Tea', 'Mountains', 'Cats', 'Burger'],
      question: ['this photo', 'my expression', 'this vibe', 'this mood'],
      description: ['needs coffee right now', 'gets this', 'feels this mood'],
      tag: ['@bestfriend', '@you', '@squad', '@bff'],
      status: ['Caffeinated and motivated', 'Living my best life', 'Grateful and blessed'],
      task1: ['Coffee', 'Workout', 'Hustle'],
      task2: ['Create', 'Inspire', 'Achieve'],
      task3: ['Repeat', 'Relax', 'Celebrate'],
      emoji1: ['☕', '✨', '🌟'],
      emoji2: ['💫', '🌙', '⭐'],
      emoji3: ['🦋', '🌈', '💕'],
      reminder: ['You\'re doing great', 'Keep going', 'Trust the process'],
      location: ['Paradise', 'Heaven on Earth', 'Dream destination'],
      memory: ['time stood still', 'everything was perfect', 'I felt alive'],
      item: ['Snacks', 'Playlist', 'Good vibes'],
      dish: ['masterpiece', 'creation', 'discovery'],
      rating: ['11', '100', '∞'],
      food: ['Pizza', 'Tacos', 'Ice cream', 'Sushi'],
      ingredient1: ['Good vibes', 'Great food', 'Love'],
      ingredient2: ['Amazing friends', 'Perfect weather', 'Laughter'],
      day: ['Monday', 'Friday', 'Weekend'],
      vibe: ['fabulous', 'unstoppable', 'iconic'],
      look: ['looks', 'energy', 'vibes'],
    };
    
    const values = defaults[placeholder] || ['amazing', 'incredible', 'perfect'];
    return values[Math.floor(Math.random() * values.length)];
  };

  const copyToClipboard = (caption: string, index: number) => {
    navigator.clipboard.writeText(caption);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-black text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Roast a Profile
            </Link>
            <div className="flex gap-6">
              <Link href="/instagram-bio-generator" className="hover:text-purple-400 transition">Bio Generator</Link>
              <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast Generator</Link>
              <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Instagram Caption Generator
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Create engaging Instagram captions in seconds. From funny to inspirational, 
              get captions that boost engagement and match your vibe perfectly.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <div>✍️ Multiple Styles</div>
              <div>🎯 Engagement Focused</div>
              <div>#️⃣ Hashtags Included</div>
            </div>
          </div>
        </section>

        {/* Generator Tool */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Caption Type Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose Caption Style</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.keys(captionTemplates).map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type as keyof typeof captionTemplates);
                      setCustomInputs({});
                    }}
                    className={`px-4 py-3 rounded-lg font-medium capitalize transition ${
                      selectedType === type
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Customization Options */}
            <div className="mb-8 bg-gray-900/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Customize Your Caption (Optional)</h2>
              <p className="text-gray-400 mb-4">Leave blank for random suggestions</p>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Main topic or theme"
                  className="px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  value={customInputs.topic || ''}
                  onChange={(e) => setCustomInputs({...customInputs, topic: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Location (if relevant)"
                  className="px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  value={customInputs.location || ''}
                  onChange={(e) => setCustomInputs({...customInputs, location: e.target.value})}
                />
              </div>
            </div>

            {/* Generate Button */}
            <div className="text-center mb-8">
              <button
                onClick={generateCaptions}
                className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
              >
                Generate Captions 📝
              </button>
            </div>

            {/* Generated Captions */}
            {generatedCaptions.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Your Generated Captions</h2>
                <div className="space-y-4">
                  {generatedCaptions.map((caption, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 group">
                      <pre className="whitespace-pre-wrap text-gray-100 font-sans mb-4">{caption}</pre>
                      <div className="flex gap-3">
                        <button
                          onClick={() => copyToClipboard(caption, index)}
                          className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition"
                        >
                          {copiedIndex === index ? '✓ Copied!' : 'Copy Caption'}
                        </button>
                        <button
                          onClick={() => {
                            const hashtags = caption.match(/#\w+/g)?.join(' ') || '';
                            navigator.clipboard.writeText(hashtags);
                          }}
                          className="px-4 py-2 bg-pink-600/20 hover:bg-pink-600/30 rounded-lg transition"
                        >
                          Copy Hashtags
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Caption Tips */}
        <section className="container mx-auto px-4 py-12 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Caption Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-pink-400">📝 Writing Tips</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Start with a hook to grab attention</li>
                  <li>• Keep it concise but meaningful</li>
                  <li>• Use line breaks for readability</li>
                  <li>• Match caption tone to image mood</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">💬 Engagement Tips</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Ask questions to encourage comments</li>
                  <li>• Include a clear call-to-action</li>
                  <li>• Use 5-10 relevant hashtags</li>
                  <li>• Tag relevant accounts when appropriate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Complete Your Instagram Toolkit</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/instagram-bio-generator" className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg hover:from-purple-900/70 hover:to-pink-900/70 transition">
              <h3 className="text-xl font-bold mb-2">✨ Bio Generator</h3>
              <p className="text-gray-300 text-sm">Perfect bio in seconds</p>
            </Link>
            <Link href="/instagram-engagement-calculator" className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-lg hover:from-blue-900/70 hover:to-purple-900/70 transition">
              <h3 className="text-xl font-bold mb-2">📊 Engagement Calculator</h3>
              <p className="text-gray-300 text-sm">Track your performance</p>
            </Link>
            <Link href="/my-insta-personality" className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 p-6 rounded-lg hover:from-yellow-900/70 hover:to-orange-900/70 transition">
              <h3 className="text-xl font-bold mb-2">🎭 Personality Test</h3>
              <p className="text-gray-300 text-sm">Discover your Instagram vibe</p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <InternalLinkFooter />
          </div>
        </footer>
      </div>
    </>
  );
}