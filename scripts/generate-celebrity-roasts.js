#!/usr/bin/env node

/**
 * Celebrity Roast Page Generation System
 * Generates SEO-optimized roast pages for top 100 Instagram celebrities
 */

const fs = require('fs').promises;
const path = require('path');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '..', 'data');

// Top 100 Instagram Celebrities (2025 data)
const CELEBRITIES = [
  // Top 10
  { name: 'Cristiano Ronaldo', handle: 'cristiano', followers: '662M', category: 'athlete', niche: 'soccer', traits: ['gym-obsessed', 'shirtless-selfies', 'product-placement'] },
  { name: 'Lionel Messi', handle: 'leomessi', followers: '506M', category: 'athlete', niche: 'soccer', traits: ['humble-brag', 'family-man', 'goat-debates'] },
  { name: 'Selena Gomez', handle: 'selenagomez', followers: '417M', category: 'celebrity', niche: 'music', traits: ['mental-health-advocate', 'beauty-brand', 'cryptic-posts'] },
  { name: 'Kylie Jenner', handle: 'kyliejenner', followers: '393M', category: 'influencer', niche: 'beauty', traits: ['lip-kits', 'private-jets', 'baby-photos'] },
  { name: 'Dwayne Johnson', handle: 'therock', followers: '392M', category: 'celebrity', niche: 'actor', traits: ['gym-motivation', 'cheat-meals', 'tequila-promotion'] },
  { name: 'Ariana Grande', handle: 'arianagrande', followers: '374M', category: 'celebrity', niche: 'music', traits: ['ponytail', 'whistle-notes', 'relationship-drama'] },
  { name: 'Kim Kardashian', handle: 'kimkardashian', followers: '355M', category: 'influencer', niche: 'reality-tv', traits: ['skims-ads', 'filtered-reality', 'lawyer-journey'] },
  { name: 'Beyoncé', handle: 'beyonce', followers: '310M', category: 'celebrity', niche: 'music', traits: ['flawless-image', 'beyhive', 'surprise-drops'] },
  { name: 'Khloe Kardashian', handle: 'khloekardashian', followers: '302M', category: 'influencer', niche: 'reality-tv', traits: ['revenge-body', 'photoshop-fails', 'relationship-chaos'] },
  { name: 'Justin Bieber', handle: 'justinbieber', followers: '294M', category: 'celebrity', niche: 'music', traits: ['baby-to-zaddy', 'jesus-phase', 'peaches'] },
  
  // 11-20
  { name: 'Kendall Jenner', handle: 'kendalljenner', followers: '286M', category: 'model', niche: 'fashion', traits: ['runway-queen', 'tequila-818', 'dating-athletes'] },
  { name: 'Taylor Swift', handle: 'taylorswift', followers: '280M', category: 'celebrity', niche: 'music', traits: ['easter-eggs', 'cat-lady', 'boyfriend-songs'] },
  { name: 'Virat Kohli', handle: 'virat.kohli', followers: '273M', category: 'athlete', niche: 'cricket', traits: ['aggressive-player', 'fitness-freak', 'brand-deals'] },
  { name: 'Jennifer Lopez', handle: 'jlo', followers: '247M', category: 'celebrity', niche: 'entertainment', traits: ['ageless', 'wedding-planner', 'bronx-girl'] },
  { name: 'Nicki Minaj', handle: 'nickiminaj', followers: '224M', category: 'celebrity', niche: 'music', traits: ['barbz', 'alter-egos', 'twitter-fights'] },
  { name: 'Kourtney Kardashian', handle: 'kourtneykardash', followers: '221M', category: 'influencer', niche: 'reality-tv', traits: ['poosh-lifestyle', 'pda-overload', 'organic-everything'] },
  { name: 'Neymar Jr', handle: 'neymarjr', followers: '219M', category: 'athlete', niche: 'soccer', traits: ['diving-master', 'party-boy', 'hairstyle-changes'] },
  { name: 'Miley Cyrus', handle: 'mileycyrus', followers: '214M', category: 'celebrity', niche: 'music', traits: ['hannah-montana', 'wrecking-ball', 'reinvention'] },
  { name: 'Katy Perry', handle: 'katyperry', followers: '204M', category: 'celebrity', niche: 'music', traits: ['left-shark', 'costume-queen', 'orlando-bloom'] },
  { name: 'Zendaya', handle: 'zendaya', followers: '182M', category: 'celebrity', niche: 'actor', traits: ['fashion-icon', 'spider-romance', 'euphoria'] },
  
  // 21-30
  { name: 'Kevin Hart', handle: 'kevinhart4real', followers: '178M', category: 'celebrity', niche: 'comedy', traits: ['short-jokes', 'workout-videos', 'bromance'] },
  { name: 'Cardi B', handle: 'iamcardib', followers: '165M', category: 'celebrity', niche: 'music', traits: ['okurrr', 'no-filter', 'nail-videos'] },
  { name: 'LeBron James', handle: 'kingjames', followers: '158M', category: 'athlete', niche: 'basketball', traits: ['goat-debates', 'taco-tuesday', 'activism'] },
  { name: 'Demi Lovato', handle: 'ddlovato', followers: '154M', category: 'celebrity', niche: 'music', traits: ['recovery-journey', 'pronouns', 'aliens'] },
  { name: 'Rihanna', handle: 'badgalriri', followers: '151M', category: 'celebrity', niche: 'music', traits: ['fenty-empire', 'no-album', 'savage-replies'] },
  { name: 'Ellen DeGeneres', handle: 'ellen', followers: '138M', category: 'celebrity', niche: 'tv-host', traits: ['be-kind', 'dance-moves', 'controversy'] },
  { name: 'Drake', handle: 'champagnepapi', followers: '142M', category: 'celebrity', niche: 'music', traits: ['certified-lover-boy', 'memes', 'toronto'] },
  { name: 'Billie Eilish', handle: 'billieeilish', followers: '125M', category: 'celebrity', niche: 'music', traits: ['baggy-clothes', 'whisper-singing', 'gen-z-icon'] },
  { name: 'Shakira', handle: 'shakira', followers: '91M', category: 'celebrity', niche: 'music', traits: ['hips-dont-lie', 'tax-evasion', 'pique-drama'] },
  { name: 'Gigi Hadid', handle: 'gigihadid', followers: '78M', category: 'model', niche: 'fashion', traits: ['supermodel', 'baby-mama', 'pasta-queen'] },
  
  // 31-50
  { name: 'Priyanka Chopra', handle: 'priyankachopra', followers: '91M', category: 'celebrity', niche: 'actor', traits: ['global-icon', 'nick-jonas', 'bollywood-hollywood'] },
  { name: 'Chris Brown', handle: 'chrisbrownofficial', followers: '145M', category: 'celebrity', niche: 'music', traits: ['dance-moves', 'controversies', 'comeback-king'] },
  { name: 'Vin Diesel', handle: 'vindiesel', followers: '102M', category: 'celebrity', niche: 'actor', traits: ['family-quotes', 'fast-furious', 'groot'] },
  { name: 'Emma Watson', handle: 'emmawatson', followers: '74M', category: 'celebrity', niche: 'actor', traits: ['hermione', 'activism', 'book-club'] },
  { name: 'Shawn Mendes', handle: 'shawnmendes', followers: '72M', category: 'celebrity', niche: 'music', traits: ['canadian-nice', 'camila-drama', 'tattoos'] },
  { name: 'Camila Cabello', handle: 'camila_cabello', followers: '65M', category: 'celebrity', niche: 'music', traits: ['havana', 'shawn-drama', 'latina-pride'] },
  { name: 'Dua Lipa', handle: 'dualipa', followers: '88M', category: 'celebrity', niche: 'music', traits: ['dance-moves', 'retro-vibes', 'vacation-queen'] },
  { name: 'Gal Gadot', handle: 'galgadot', followers: '109M', category: 'celebrity', niche: 'actor', traits: ['wonder-woman', 'imagine-video', 'israeli-pride'] },
  { name: 'Ronaldinho', handle: 'ronaldinho', followers: '75M', category: 'athlete', niche: 'soccer', traits: ['joga-bonito', 'party-legend', 'smile'] },
  { name: 'David Beckham', handle: 'davidbeckham', followers: '87M', category: 'athlete', niche: 'soccer', traits: ['fashion-icon', 'posh-spice', 'miami'] },
  
  // 41-60
  { name: 'Bruno Mars', handle: '24kgoldn', followers: '68M', category: 'celebrity', niche: 'music', traits: ['silk-sonic', 'hat-collection', 'vegas'] },
  { name: 'Chris Hemsworth', handle: 'chrishemsworth', followers: '59M', category: 'celebrity', niche: 'actor', traits: ['thor', 'australian', 'workout-app'] },
  { name: 'Marshmello', handle: 'marshmellomusic', followers: '56M', category: 'celebrity', niche: 'dj', traits: ['helmet-mystery', 'fortnite', 'edm'] },
  { name: 'Anitta', handle: 'anitta', followers: '64M', category: 'celebrity', niche: 'music', traits: ['brazilian-queen', 'multilingual', 'twerking'] },
  { name: 'Maluma', handle: 'maluma', followers: '64M', category: 'celebrity', niche: 'music', traits: ['latin-heartthrob', 'baby-face', 'reggaeton'] },
  { name: 'Snoop Dogg', handle: 'snoopdogg', followers: '86M', category: 'celebrity', niche: 'music', traits: ['420-lifestyle', 'martha-stewart', 'name-changes'] },
  { name: 'Will Smith', handle: 'willsmith', followers: '73M', category: 'celebrity', niche: 'actor', traits: ['slap-gate', 'motivational', 'fresh-prince'] },
  { name: 'Tom Holland', handle: 'tomholland2013', followers: '65M', category: 'celebrity', niche: 'actor', traits: ['spider-man', 'spoiler-alert', 'zendaya'] },
  { name: 'Jason Momoa', handle: 'prideofgypsies', followers: '16M', category: 'celebrity', niche: 'actor', traits: ['aquaman', 'rock-climbing', 'pink-clothes'] },
  { name: 'Gordon Ramsay', handle: 'gordongram', followers: '18M', category: 'celebrity', niche: 'chef', traits: ['idiot-sandwich', 'angry-chef', 'tiktok-dad'] },
  
  // 61-80
  { name: 'Cara Delevingne', handle: 'caradelevingne', followers: '42M', category: 'model', niche: 'fashion', traits: ['eyebrows', 'queer-icon', 'acting-pivot'] },
  { name: 'Bella Hadid', handle: 'bellahadid', followers: '61M', category: 'model', niche: 'fashion', traits: ['depression-posts', 'palestine', 'weeknd-drama'] },
  { name: 'Blake Lively', handle: 'blakelively', followers: '45M', category: 'celebrity', niche: 'actor', traits: ['gossip-girl', 'ryan-reynolds', 'met-gala'] },
  { name: 'Ryan Reynolds', handle: 'vancityreynolds', followers: '54M', category: 'celebrity', niche: 'actor', traits: ['deadpool', 'canadian', 'blake-lively'] },
  { name: 'Hailey Bieber', handle: 'haileybieber', followers: '53M', category: 'model', niche: 'fashion', traits: ['rhode-beauty', 'glazed-donut', 'selena-drama'] },
  { name: 'MrBeast', handle: 'mrbeast', followers: '60M', category: 'influencer', niche: 'youtube', traits: ['money-giveaways', 'stunts', 'burger-chain'] },
  { name: 'Lele Pons', handle: 'lelepons', followers: '53M', category: 'influencer', niche: 'comedy', traits: ['vine-star', 'latina', 'cringe-comedy'] },
  { name: 'James Charles', handle: 'jamescharles', followers: '22M', category: 'influencer', niche: 'beauty', traits: ['sister', 'drama-magnet', 'makeup'] },
  { name: 'Charli D\'Amelio', handle: 'charlidamelio', followers: '45M', category: 'influencer', niche: 'tiktok', traits: ['renegade', 'dunkin', 'gen-z'] },
  { name: 'Addison Rae', handle: 'addisonraee', followers: '38M', category: 'influencer', niche: 'tiktok', traits: ['kourtney-bestie', 'acting-attempt', 'tiktok-dance'] },
  
  // 81-100
  { name: 'Khaby Lame', handle: 'khaby00', followers: '81M', category: 'influencer', niche: 'tiktok', traits: ['silent-comedy', 'life-hacks', 'hand-gestures'] },
  { name: 'Bretman Rock', handle: 'bretmanrock', followers: '18M', category: 'influencer', niche: 'beauty', traits: ['filipino-pride', 'abs', 'sassy'] },
  { name: 'Liza Koshy', handle: 'lizakoshy', followers: '18M', category: 'influencer', niche: 'comedy', traits: ['puns', 'energy', 'youtube-og'] },
  { name: 'Emma Chamberlain', handle: 'emmachamberlain', followers: '15M', category: 'influencer', niche: 'lifestyle', traits: ['coffee-obsessed', 'relatable', 'met-gala'] },
  { name: 'Dixie D\'Amelio', handle: 'dixiedamelio', followers: '22M', category: 'influencer', niche: 'tiktok', traits: ['charlies-sister', 'music-attempt', 'noah-beck'] },
  { name: 'Sommer Ray', handle: 'sommerray', followers: '25M', category: 'influencer', niche: 'fitness', traits: ['booty-workouts', 'dating-history', 'fitness-app'] },
  { name: 'Lil Nas X', handle: 'lilnasx', followers: '11M', category: 'celebrity', niche: 'music', traits: ['old-town-road', 'satan-shoes', 'trolling'] },
  { name: 'Bella Poarch', handle: 'bellapoarch', followers: '13M', category: 'influencer', niche: 'tiktok', traits: ['m-to-the-b', 'tattoos', 'navy-vet'] },
  { name: 'Zach King', handle: 'zachking', followers: '29M', category: 'influencer', niche: 'magic', traits: ['editing-magic', 'vine-og', 'wholesome'] },
  { name: 'David Dobrik', handle: 'daviddobrik', followers: '13M', category: 'influencer', niche: 'youtube', traits: ['vlog-squad', 'tesla-giveaways', 'controversy'] }
];

// Roast templates by category
const ROAST_TEMPLATES = {
  athlete: [
    "Your {trait} posts are giving 'peaked in high school but still wearing the letterman jacket' energy",
    "We get it, you {trait}. Your personality is literally just sweating and protein shakes",
    "The way you post about {trait} like it's a personality trait... Sir, this is Instagram, not ESPN"
  ],
  celebrity: [
    "Your {trait} era is giving 'desperate for relevance in 2025' vibes",
    "Not you thinking {trait} makes you relatable... Bestie, you have a private jet",
    "The {trait} content is serving 'PR team working overtime' realness"
  ],
  influencer: [
    "Your {trait} posts scream 'algorithm chose my personality'",
    "Imagine making {trait} your whole brand... The creativity jumped out",
    "The {trait} aesthetic is giving 'I learned marketing from a WikiHow article'"
  ],
  model: [
    "Your {trait} photos are serving 'I don't eat solid food' energy",
    "Not the {trait} posts pretending you woke up like that... We see the 47 takes",
    "The {trait} content is giving 'my personality is being symmetrical'"
  ]
};

// Generate celebrity roast pages
async function generateCelebrityRoasts() {
  const roastPages = [];
  
  for (const celeb of CELEBRITIES) {
    // Generate multiple roast variations for each celebrity
    const roastTypes = ['savage', 'funny', 'gen-z', 'friendly'];
    
    for (const roastType of roastTypes) {
      const slug = `${celeb.handle}-instagram-roast-${roastType}`;
      const title = `${celeb.name} Instagram Roast - ${roastType.charAt(0).toUpperCase() + roastType.slice(1)} Edition`;
      
      roastPages.push({
        slug,
        title,
        celebrity: celeb.name,
        handle: celeb.handle,
        followers: celeb.followers,
        category: celeb.category,
        niche: celeb.niche,
        roastType,
        description: `Hilarious ${roastType} roasts of ${celeb.name}'s Instagram (@${celeb.handle}). The ${celeb.niche} ${celeb.category} with ${celeb.followers} followers gets roasted!`,
        keywords: [
          `${celeb.name} roast`,
          `${celeb.handle} instagram`,
          `${celeb.name} instagram roast`,
          `roast ${celeb.name}`,
          `${celeb.niche} roasts`,
          `celebrity roasts`,
          'instagram roast generator'
        ],
        content: generateCelebRoastContent(celeb, roastType),
        traits: celeb.traits,
        relatedCelebs: getRelatedCelebrities(celeb),
        roastExamples: generateRoastExamples(celeb, roastType),
        funFacts: generateFunFacts(celeb),
        schema: generateCelebSchema(celeb, roastType)
      });
    }
  }
  
  return roastPages;
}

// Generate roast content for each celebrity
function generateCelebRoastContent(celeb, roastType) {
  const intros = {
    savage: `Ready for the most brutal takedown of ${celeb.name}'s Instagram? Buckle up, because we're about to expose what ${celeb.followers} followers are too nice to say.`,
    funny: `Time to lovingly roast ${celeb.name}'s Instagram! Because if we can't laugh at someone with ${celeb.followers} followers, who can we laugh at?`,
    'gen-z': `No cap, we're about to drag ${celeb.name}'s whole Instagram aesthetic. It's giving... well, you'll see. 💀`,
    friendly: `Let's have some fun with ${celeb.name}'s Instagram! A gentle roasting of our favorite ${celeb.niche} ${celeb.category}.`
  };
  
  return {
    intro: intros[roastType],
    profileAnalysis: `@${celeb.handle} has mastered the art of ${celeb.traits[0]} while somehow making ${celeb.traits[1]} their entire personality.`,
    postingPatterns: `Their feed is 40% ${celeb.traits[0]}, 35% ${celeb.traits[1]}, and 25% sponsored content they definitely don't use.`,
    audienceProfile: `Followed by people who think ${celeb.traits[2]} is a personality trait and comment "FIRST" on every post.`,
    roastSummary: `In conclusion, ${celeb.name}'s Instagram is what happens when ${celeb.traits[0]} meets a ring light and a management team.`
  };
}

// Generate specific roast examples
function generateRoastExamples(celeb, roastType) {
  const templates = ROAST_TEMPLATES[celeb.category] || ROAST_TEMPLATES.celebrity;
  
  return celeb.traits.map(trait => {
    const template = templates[Math.floor(Math.random() * templates.length)];
    return template.replace('{trait}', trait);
  });
}

// Get related celebrities in same category
function getRelatedCelebrities(celeb) {
  return CELEBRITIES
    .filter(c => c.category === celeb.category && c.handle !== celeb.handle)
    .slice(0, 5)
    .map(c => ({
      name: c.name,
      handle: c.handle,
      slug: `${c.handle}-instagram-roast-savage`
    }));
}

// Generate fun facts for SEO content
function generateFunFacts(celeb) {
  return [
    `${celeb.name} has ${celeb.followers} followers on Instagram`,
    `Their most common post type involves ${celeb.traits[0]}`,
    `They're known in the ${celeb.niche} community for ${celeb.traits[1]}`,
    `Their engagement rate suggests people follow for the ${celeb.traits[2]} content`
  ];
}

// Generate structured data schema
function generateCelebSchema(celeb, roastType) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${celeb.name} Instagram Roast - ${roastType} Edition`,
    description: `Hilarious ${roastType} roasts of ${celeb.name}'s Instagram profile`,
    author: {
      '@type': 'Organization',
      name: 'Roast a Profile'
    },
    about: {
      '@type': 'Person',
      name: celeb.name,
      sameAs: `https://instagram.com/${celeb.handle}`
    },
    keywords: `${celeb.name}, Instagram roast, celebrity roasts, ${celeb.niche}`,
    datePublished: new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Roast a Profile',
      url: 'https://www.lookatmyprofile.org'
    }
  };
}

// Generate index data for celebrity roasts
async function generateCelebIndex() {
  const index = {
    categories: {
      athlete: CELEBRITIES.filter(c => c.category === 'athlete'),
      celebrity: CELEBRITIES.filter(c => c.category === 'celebrity'),
      influencer: CELEBRITIES.filter(c => c.category === 'influencer'),
      model: CELEBRITIES.filter(c => c.category === 'model')
    },
    topFollowers: CELEBRITIES.slice(0, 20),
    byNiche: {}
  };
  
  // Group by niche
  CELEBRITIES.forEach(celeb => {
    if (!index.byNiche[celeb.niche]) {
      index.byNiche[celeb.niche] = [];
    }
    index.byNiche[celeb.niche].push(celeb);
  });
  
  return index;
}

// Main generation function
async function generateAllCelebData() {
  console.log('🌟 Starting celebrity roast page generation...');
  
  // Create output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  // Generate celebrity roast pages
  console.log('📝 Generating celebrity roast pages...');
  const roastPages = await generateCelebrityRoasts();
  
  // Generate index
  console.log('📝 Generating celebrity index...');
  const celebIndex = await generateCelebIndex();
  
  // Save celebrity roast data
  const celebDataPath = path.join(OUTPUT_DIR, 'celebrity-roasts.json');
  await fs.writeFile(celebDataPath, JSON.stringify(roastPages, null, 2));
  
  // Save celebrity index
  const indexPath = path.join(OUTPUT_DIR, 'celebrity-index.json');
  await fs.writeFile(indexPath, JSON.stringify(celebIndex, null, 2));
  
  console.log(`✅ Generated ${roastPages.length} celebrity roast pages`);
  console.log(`✅ Created index for ${CELEBRITIES.length} celebrities`);
  console.log(`📁 Data saved to: ${OUTPUT_DIR}`);
  
  // Summary statistics
  const stats = {
    totalPages: roastPages.length,
    celebrities: CELEBRITIES.length,
    roastTypes: 4,
    categories: Object.keys(celebIndex.categories).length
  };
  
  console.log('\n📊 Generation Statistics:');
  console.log(`   - Total pages: ${stats.totalPages}`);
  console.log(`   - Celebrities: ${stats.celebrities}`);
  console.log(`   - Roast types: ${stats.roastTypes}`);
  console.log(`   - Categories: ${stats.categories}`);
  
  return { roastPages, celebIndex, stats };
}

// Execute if run directly
if (require.main === module) {
  generateAllCelebData().catch(console.error);
}

module.exports = { generateAllCelebData, CELEBRITIES };