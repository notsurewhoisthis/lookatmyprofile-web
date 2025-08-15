'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InternalLinkFooter } from '@/components/SEO/InternalLinkFooter';

const bioStyles = {
  aesthetic: [
    "✨ Living my best life | {hobby} enthusiast | {location} 📍",
    "🌙 {trait} soul | Creating magic daily | {hobby} lover",
    "☁️ Dreamer | {hobby} | Spreading {vibe} vibes only",
    "🦋 {trait} energy | {location} | Living authentically",
    "✨ {hobby} + coffee = happiness | {trait} human | {location}",
  ],
  funny: [
    "Professional overthinker | {hobby} addict | Powered by {food}",
    "I put the 'pro' in procrastination | {hobby} when I'm not napping",
    "CEO of bad decisions | {hobby} enthusiast | {location} survivor",
    "404: Bio not found | Just here for the {food} | {hobby} sometimes",
    "Recovering {trait} person | {hobby} is my therapy | Send {food}",
  ],
  professional: [
    "{profession} | Helping people {goal} | {location} 📍",
    "{profession} by day, {hobby} by night | Let's connect! 🤝",
    "Building {goal} | {profession} | {trait} mindset",
    "{profession} | Passionate about {hobby} | Based in {location}",
    "Turning {hobby} into success | {profession} | DM for collabs",
  ],
  genZ: [
    "no cap just vibes | {hobby} era | {location} gang",
    "main character energy | {hobby} coded | touch grass advocate",
    "chronically online | {hobby} stan | {trait} and unhinged",
    "delulu is the solulu | {hobby} supremacy | {food} is my roman empire",
    "it's giving {trait} | {hobby} girlie | living rent free in {location}",
  ],
  minimalist: [
    "{profession} | {location}",
    "{hobby} | {trait}",
    "{location} 📍",
    "{profession}. {hobby}. {trait}.",
    "{hobby} enthusiast",
  ]
};

const traits = ['Creative', 'Adventurous', 'Ambitious', 'Chaotic', 'Chill', 'Positive', 'Authentic', 'Bold', 'Curious', 'Dreamy'];
const hobbies = ['Photography', 'Travel', 'Fitness', 'Music', 'Art', 'Gaming', 'Cooking', 'Reading', 'Yoga', 'Dancing'];
const professions = ['Designer', 'Developer', 'Creator', 'Entrepreneur', 'Student', 'Artist', 'Writer', 'Marketer', 'Coach', 'Freelancer'];
const locations = ['NYC', 'LA', 'London', 'Tokyo', 'Paris', 'Miami', 'Toronto', 'Sydney', 'Dubai', 'Seoul'];
const foods = ['Coffee', 'Pizza', 'Tacos', 'Sushi', 'Chocolate', 'Bubble tea', 'Ramen', 'Ice cream', 'Avocados', 'Matcha'];
const goals = ['grow', 'succeed', 'create', 'inspire', 'learn', 'build', 'innovate', 'transform', 'achieve', 'thrive'];
const vibes = ['good', 'positive', 'chaotic', 'cozy', 'main character', 'healing', 'creative', 'peaceful', 'wild', 'authentic'];

export default function InstagramBioGenerator() {
  const [selectedStyle, setSelectedStyle] = useState<keyof typeof bioStyles>('aesthetic');
  const [userInputs, setUserInputs] = useState({
    trait: '',
    hobby: '',
    profession: '',
    location: '',
    food: '',
    goal: '',
    vibe: ''
  });
  const [generatedBios, setGeneratedBios] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateBios = () => {
    const templates = bioStyles[selectedStyle];
    const bios = templates.map(template => {
      return template
        .replace('{trait}', userInputs.trait || traits[Math.floor(Math.random() * traits.length)])
        .replace('{hobby}', userInputs.hobby || hobbies[Math.floor(Math.random() * hobbies.length)])
        .replace('{profession}', userInputs.profession || professions[Math.floor(Math.random() * professions.length)])
        .replace('{location}', userInputs.location || locations[Math.floor(Math.random() * locations.length)])
        .replace('{food}', userInputs.food || foods[Math.floor(Math.random() * foods.length)])
        .replace('{goal}', userInputs.goal || goals[Math.floor(Math.random() * goals.length)])
        .replace('{vibe}', userInputs.vibe || vibes[Math.floor(Math.random() * vibes.length)]);
    });
    setGeneratedBios(bios);
  };

  const copyToClipboard = (bio: string, index: number) => {
    navigator.clipboard.writeText(bio);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-black text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Roast a Profile
            </Link>
            <div className="flex gap-6">
              <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast Generator</Link>
              <Link href="/instagram-caption-generator" className="hover:text-purple-400 transition">Caption Generator</Link>
              <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Instagram Bio Generator
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Create the perfect Instagram bio in seconds. Choose your vibe, add your details, and get instant bio ideas that make your profile stand out.
            </p>
          </div>
        </section>

        {/* Generator Tool */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Style Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Step 1: Choose Your Bio Style</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {Object.keys(bioStyles).map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style as keyof typeof bioStyles)}
                    className={`px-4 py-3 rounded-lg font-medium capitalize transition ${
                      selectedStyle === style
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    }`}
                  >
                    {style === 'genZ' ? 'Gen Z' : style}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Fields */}
            <div className="mb-8 bg-gray-900/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Step 2: Personalize Your Bio (Optional)</h2>
              <p className="text-gray-400 mb-4">Leave blank for random suggestions</p>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your trait (e.g., Creative)"
                  className="px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  value={userInputs.trait}
                  onChange={(e) => setUserInputs({...userInputs, trait: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Your hobby (e.g., Photography)"
                  className="px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  value={userInputs.hobby}
                  onChange={(e) => setUserInputs({...userInputs, hobby: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Your profession (e.g., Designer)"
                  className="px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  value={userInputs.profession}
                  onChange={(e) => setUserInputs({...userInputs, profession: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Your location (e.g., NYC)"
                  className="px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500"
                  value={userInputs.location}
                  onChange={(e) => setUserInputs({...userInputs, location: e.target.value})}
                />
              </div>
            </div>

            {/* Generate Button */}
            <div className="text-center mb-8">
              <button
                onClick={generateBios}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
              >
                Generate Bio Ideas ✨
              </button>
            </div>

            {/* Generated Bios */}
            {generatedBios.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Your Generated Bios</h2>
                <div className="space-y-3">
                  {generatedBios.map((bio, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 flex justify-between items-center group">
                      <p className="text-lg">{bio}</p>
                      <button
                        onClick={() => copyToClipboard(bio, index)}
                        className="ml-4 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition"
                      >
                        {copiedIndex === index ? '✓ Copied!' : 'Copy'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bio Tips Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Pro Tips for the Perfect Bio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">✨ Keep It Concise</h3>
                <p className="text-gray-300">You have 150 characters. Make every word count and focus on what makes you unique.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-pink-400">🎯 Use Keywords</h3>
                <p className="text-gray-300">Include relevant keywords for your niche to appear in Instagram searches.</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">🔗 Add a Call-to-Action</h3>
                <p className="text-gray-300">Tell people what to do next - "DM for collabs" or "Check my latest post".</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">😊 Show Personality</h3>
                <p className="text-gray-300">Let your authentic self shine through. Use emojis and humor when appropriate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">More Instagram Tools</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/instagram-caption-generator" className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg hover:from-purple-900/70 hover:to-pink-900/70 transition">
              <h3 className="text-xl font-bold mb-2">📝 Caption Generator</h3>
              <p className="text-gray-300 text-sm">Create engaging captions that get likes</p>
            </Link>
            <Link href="/roast-generator" className="bg-gradient-to-br from-red-900/50 to-orange-900/50 p-6 rounded-lg hover:from-red-900/70 hover:to-orange-900/70 transition">
              <h3 className="text-xl font-bold mb-2">🔥 Profile Roaster</h3>
              <p className="text-gray-300 text-sm">Get your profile hilariously roasted</p>
            </Link>
            <Link href="/instagram-engagement-calculator" className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-lg hover:from-blue-900/70 hover:to-purple-900/70 transition">
              <h3 className="text-xl font-bold mb-2">📊 Engagement Calculator</h3>
              <p className="text-gray-300 text-sm">Calculate your engagement rate</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">How long should my Instagram bio be?</h3>
                <p className="text-gray-300">Instagram bios have a 150 character limit. Aim for 120-140 characters to ensure everything displays properly without being cut off.</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Can I use emojis in my bio?</h3>
                <p className="text-gray-300">Yes! Emojis are great for adding personality and visual breaks. They also help save character space while conveying meaning.</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Should I include hashtags in my bio?</h3>
                <p className="text-gray-300">You can include 1-2 branded or niche hashtags, but avoid overusing them. Hashtags in bios are clickable and can help with discoverability.</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">How often should I update my bio?</h3>
                <p className="text-gray-300">Update your bio whenever your focus changes, you have new achievements, or at least every 3-6 months to keep it fresh and relevant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Internal Links */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <InternalLinkFooter />
          </div>
        </footer>
      </div>
    </>
  );
}