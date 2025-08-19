#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// === DATA LAYER: Content Templates and Variations ===

const USERNAME_STYLES = {
  aesthetic: {
    prefixes: ['moon', 'sun', 'star', 'cloud', 'dream', 'soft', 'angel', 'fairy', 'crystal', 'velvet', 'silk', 'pearl', 'rose', 'bloom', 'glow'],
    suffixes: ['vibes', 'soul', 'heart', 'spirit', 'dreams', 'thoughts', 'whisper', 'muse', 'glow', 'aura', 'magic', 'bloom'],
    modifiers: ['ethereal', 'celestial', 'luminous', 'serene', 'divine', 'mystic', 'cosmic'],
    examples: ['moonchildvibes', 'stardustsoul', 'etherealglow', 'crystaldreams', 'velvetwhisper']
  },
  funny: {
    prefixes: ['chaos', 'broke', 'tired', 'hungry', 'awkward', 'random', 'weird', 'silly', 'goofy', 'derpy', 'clumsy', 'lazy'],
    suffixes: ['potato', 'nugget', 'bean', 'burrito', 'taco', 'penguin', 'llama', 'waffle', 'noodle', 'donut'],
    modifiers: ['professional', 'certified', 'official', 'premium', 'deluxe', 'extreme'],
    examples: ['chaoticpotato', 'brokeasnugget', 'tiredpenguin', 'awkwardllama', 'professionalnapper']
  },
  creative: {
    prefixes: ['pixel', 'neon', 'retro', 'cyber', 'digital', 'virtual', 'meta', 'tech', 'code', 'data', 'quantum', 'synth'],
    suffixes: ['wave', 'punk', 'art', 'craft', 'design', 'studio', 'lab', 'hub', 'space', 'zone', 'realm'],
    modifiers: ['innovative', 'creative', 'artistic', 'unique', 'original', 'experimental'],
    examples: ['pixelwave', 'neonpunk', 'cyberart', 'digitalrealm', 'synthstudio']
  },
  minimalist: {
    prefixes: ['just', 'only', 'pure', 'simple', 'clean', 'basic', 'raw', 'true', 'real', 'hey'],
    suffixes: ['', 'here', 'now', 'today', 'daily', 'life', 'world', 'space'],
    modifiers: ['authentic', 'genuine', 'honest', 'direct', 'clear'],
    examples: ['justsarah', 'heyalex', 'purevibes', 'simplelife', 'realtalks']
  },
  y2k: {
    prefixes: ['xx', 'baby', 'angel', 'princess', 'cyber', 'digital', 'techno', 'glitter', 'sparkle', 'shimmer'],
    suffixes: ['girl', 'boy', 'babe', '2000', 'core', 'vibes', 'dream', 'fantasy', 'world'],
    modifiers: ['nostalgic', 'retro', 'vintage', 'throwback', 'classic'],
    examples: ['xxangelbabexx', 'cyberprincess2000', 'glitterdreams', 'technocore', 'y2knostalgia']
  }
};

const BIO_NICHES = {
  fitness: {
    keywords: ['fitness', 'gym', 'workout', 'health', 'wellness', 'training', 'nutrition', 'coach'],
    emojis: ['💪', '🏋️', '🤸', '🏃', '🥗', '💦', '⚡', '🔥'],
    templates: [
      '{emoji} {title} | {location}\n{emoji} {specialty}\n{emoji} {cta}\n{link}',
      '{location} {emoji}\n{title} {emoji}\n{achievement}\n{cta} ⬇️',
      '{emoji} {specialty}\n📍 {location}\n🎯 {goal}\n💌 {contact}'
    ],
    specialties: ['Personal Trainer', 'Yoga Instructor', 'Nutritionist', 'Crossfit Coach', 'Marathon Runner'],
    ctas: ['DM for coaching', 'Free workout plans below', 'Transform your life', 'Join my fitness journey']
  },
  travel: {
    keywords: ['travel', 'wanderlust', 'explore', 'adventure', 'nomad', 'journey', 'destination'],
    emojis: ['✈️', '🌍', '🗺️', '🏝️', '🎒', '📸', '🌎', '⛰️'],
    templates: [
      '📍 Currently: {location}\n🌍 {countries} countries\n✈️ Next: {next}\n📸 {cta}',
      '{emoji} {title}\n{emoji} Based in {location}\n{emoji} {specialty}\n⬇️ {link}',
      'Exploring {location} {emoji}\n{achievement}\n{cta}\n{contact}'
    ],
    specialties: ['Digital Nomad', 'Travel Blogger', 'Adventure Seeker', 'Travel Photographer', 'Backpacker'],
    ctas: ['Travel guides below', 'Follow my adventures', 'Travel tips daily', 'DM for collabs']
  },
  food: {
    keywords: ['food', 'recipe', 'cooking', 'chef', 'foodie', 'restaurant', 'cuisine', 'baking'],
    emojis: ['🍕', '🍔', '🥘', '👨‍🍳', '🍰', '🥗', '🍜', '🌮'],
    templates: [
      '{emoji} {title}\n📍 {location}\n{emoji} {specialty}\n📧 {contact}',
      '{specialty} {emoji}\n{location}\n{achievement}\n{cta} ⬇️',
      'Making {specialty} in {location}\n{emoji} {achievement}\n{emoji} {cta}'
    ],
    specialties: ['Home Chef', 'Food Blogger', 'Recipe Developer', 'Restaurant Reviewer', 'Pastry Chef'],
    ctas: ['Recipes daily', 'New recipe every week', 'DM for orders', 'Food tours available']
  },
  fashion: {
    keywords: ['fashion', 'style', 'outfit', 'ootd', 'designer', 'model', 'boutique', 'trends'],
    emojis: ['👗', '👠', '💄', '✨', '🛍️', '💅', '👜', '💋'],
    templates: [
      '{emoji} {title}\n📍 {location}\n{emoji} {specialty}\n💌 {contact}',
      '{specialty} | {location}\n{achievement}\n{cta}\n{link} ⬇️',
      'Your {specialty} {emoji}\nBased in {location}\n{cta}\n{contact}'
    ],
    specialties: ['Fashion Blogger', 'Style Consultant', 'Boutique Owner', 'Fashion Designer', 'Personal Shopper'],
    ctas: ['Shop my looks', 'Style tips daily', 'DM for styling', 'New drops weekly']
  },
  tech: {
    keywords: ['tech', 'coding', 'developer', 'startup', 'innovation', 'AI', 'software', 'digital'],
    emojis: ['💻', '🚀', '🤖', '⚡', '🔧', '📱', '🌐', '💡'],
    templates: [
      '{emoji} {title}\n{emoji} {specialty}\n{emoji} {achievement}\n🔗 {link}',
      '{title} at {company}\n{specialty}\n{achievement}\n{cta}',
      'Building {project} {emoji}\n{specialty}\n{location}\n{contact}'
    ],
    specialties: ['Software Engineer', 'AI Developer', 'Tech Founder', 'UX Designer', 'Data Scientist'],
    ctas: ['Check my projects', 'Open for collabs', 'Tech tips daily', 'DM for consulting']
  },
  art: {
    keywords: ['art', 'artist', 'creative', 'design', 'illustration', 'painting', 'digital art', 'gallery'],
    emojis: ['🎨', '✏️', '🖌️', '🎭', '📸', '🌈', '✨', '💫'],
    templates: [
      '{emoji} {title}\n{emoji} {specialty}\n📍 {location}\n🛒 {cta}',
      'Creating {specialty} {emoji}\n{location}\n{achievement}\n{link}',
      '{title} | {specialty}\n{achievement}\n{cta}\n{contact} {emoji}'
    ],
    specialties: ['Digital Artist', 'Illustrator', 'Painter', 'Graphic Designer', 'NFT Artist'],
    ctas: ['Commissions open', 'Shop prints below', 'DM for custom work', 'Gallery link below']
  },
  music: {
    keywords: ['music', 'musician', 'artist', 'producer', 'DJ', 'singer', 'band', 'spotify'],
    emojis: ['🎵', '🎸', '🎤', '🎧', '🎹', '🎼', '🔊', '💿'],
    templates: [
      '{emoji} {title}\n{emoji} {genre} {specialty}\n📍 {location}\n🎧 {link}',
      '{specialty} | {genre}\n{achievement}\n{cta}\n{spotify} ⬇️',
      'Making {genre} music {emoji}\n{location}\n{achievement}\n{contact}'
    ],
    specialties: ['Music Producer', 'Singer-Songwriter', 'DJ', 'Band Member', 'Session Musician'],
    ctas: ['New music weekly', 'Listen on Spotify', 'Book for events', 'Collab inquiries']
  },
  wellness: {
    keywords: ['wellness', 'mindfulness', 'meditation', 'healing', 'spiritual', 'self-care', 'mental health'],
    emojis: ['🧘', '💆', '🌿', '✨', '🕉️', '💫', '🌸', '☮️'],
    templates: [
      '{emoji} {title}\n{emoji} {specialty}\n{emoji} {achievement}\n💌 {cta}',
      '{specialty} {emoji}\n{location}\n{certification}\n{link} ⬇️',
      'Guiding you to {goal} {emoji}\n{specialty}\n{cta}\n{contact}'
    ],
    specialties: ['Wellness Coach', 'Meditation Teacher', 'Reiki Healer', 'Life Coach', 'Yoga Teacher'],
    ctas: ['Free meditation below', 'Book a session', 'Daily wellness tips', 'Join my community']
  }
};

const CAPTION_OCCASIONS = {
  birthday: {
    templates: [
      'Chapter {age} ✨',
      'Another trip around the sun ☀️',
      'Leveled up 🎂',
      'Birthday mode: activated 🎉',
      '{age} and thriving 💫'
    ],
    hashtags: ['#BirthdayVibes', '#BirthdayGirl', '#BirthdayBoy', '#BirthdayMood', '#Grateful']
  },
  vacation: {
    templates: [
      'Out of office ✈️',
      'Vacation mode: ON 🏝️',
      'Living my best life in {location}',
      'Paradise found 🌴',
      'Collecting moments, not things 📸'
    ],
    hashtags: ['#VacationMode', '#TravelDiaries', '#Wanderlust', '#TravelGram', '#InstaTravel']
  },
  selfie: {
    templates: [
      'Felt cute, might delete later 📸',
      'Golden hour hits different ✨',
      'No filter needed 💫',
      'Serving looks 💅',
      'Main character energy ⚡'
    ],
    hashtags: ['#Selfie', '#SelfLove', '#NoFilter', '#GoldenHour', '#SelfieSunday']
  },
  food: {
    templates: [
      'Food coma incoming 🍕',
      'Calories don\'t count on weekends',
      'Living for this meal 🤤',
      'Food is my love language ❤️',
      'Feast mode: activated 🍔'
    ],
    hashtags: ['#Foodie', '#FoodPorn', '#InstaFood', '#FoodGram', '#Yummy']
  },
  workout: {
    templates: [
      'Sweat is just fat crying 💪',
      'Stronger than yesterday 💯',
      'Beast mode: ON 🔥',
      'No pain, no gain ⚡',
      'Progress not perfection 📈'
    ],
    hashtags: ['#FitnessMotivation', '#GymLife', '#WorkoutMotivation', '#FitFam', '#HealthyLifestyle']
  },
  coffee: {
    templates: [
      'But first, coffee ☕',
      'Powered by caffeine ⚡',
      'Coffee is my love language ❤️',
      'Espresso yourself ☕',
      'Living on coffee and confidence 💪'
    ],
    hashtags: ['#CoffeeLover', '#CoffeeTime', '#ButFirstCoffee', '#CoffeeAddict', '#CoffeeGram']
  },
  sunset: {
    templates: [
      'Chasing sunsets 🌅',
      'Golden hour magic ✨',
      'Nature\'s masterpiece 🎨',
      'Sunset state of mind 🧡',
      'Sky on fire tonight 🔥'
    ],
    hashtags: ['#Sunset', '#GoldenHour', '#SunsetLovers', '#NaturePhotography', '#SkyPorn']
  },
  outfit: {
    templates: [
      'Outfit of the day 👗',
      'Feeling myself in this fit ✨',
      'Dress to impress 💫',
      'Style game strong 💪',
      'Fashion is my passion 👠'
    ],
    hashtags: ['#OOTD', '#OutfitOfTheDay', '#Fashion', '#StyleInspo', '#FashionDaily']
  }
};

const HASHTAG_CATEGORIES = {
  lifestyle: ['#LifestyleBlogger', '#DailyLife', '#LifeGoals', '#LivingMyBestLife', '#LifeStyle'],
  motivation: ['#MotivationMonday', '#DailyMotivation', '#PositiveVibes', '#GoodVibes', '#Inspiration'],
  photography: ['#PhotoOfTheDay', '#InstaPhoto', '#Photography', '#PhotoDaily', '#InstaGood'],
  beauty: ['#Beauty', '#MakeupLover', '#BeautyBlogger', '#Skincare', '#GlowUp'],
  nature: ['#NatureLover', '#NaturePhotography', '#ExploreNature', '#NatureGram', '#Outdoors'],
  art: ['#ArtOfTheDay', '#ArtWork', '#ArtistOnInstagram', '#CreativeLife', '#ArtDaily'],
  business: ['#Entrepreneur', '#SmallBusiness', '#BusinessOwner', '#StartUp', '#Success'],
  pets: ['#PetsOfInstagram', '#DogLover', '#CatLover', '#PetLife', '#FurBaby']
};

const PERSONALITY_TYPES = {
  influencer: {
    traits: ['trendsetter', 'charismatic', 'engaging', 'aspirational'],
    content_style: 'Polished, aesthetic, branded',
    bio_style: 'Professional with clear CTA',
    posting_frequency: 'Daily with strategic timing'
  },
  comedian: {
    traits: ['funny', 'relatable', 'entertaining', 'witty'],
    content_style: 'Memes, funny videos, relatable content',
    bio_style: 'Humorous one-liners',
    posting_frequency: 'Multiple times daily'
  },
  educator: {
    traits: ['informative', 'helpful', 'knowledgeable', 'professional'],
    content_style: 'How-to posts, infographics, tutorials',
    bio_style: 'Credentials and expertise highlighted',
    posting_frequency: '3-4 times per week'
  },
  aesthetic: {
    traits: ['artistic', 'curated', 'visual', 'creative'],
    content_style: 'Cohesive feed, artistic photos',
    bio_style: 'Minimal with artistic emojis',
    posting_frequency: '2-3 times per week'
  },
  authentic: {
    traits: ['genuine', 'real', 'vulnerable', 'honest'],
    content_style: 'Raw, unfiltered, behind-the-scenes',
    bio_style: 'Personal and conversational',
    posting_frequency: 'Irregular but meaningful'
  }
};

const ROAST_CATEGORIES = {
  basic: {
    keywords: ['pumpkin spice', 'live laugh love', 'good vibes only', 'blessed'],
    roasts: [
      'Your feed is more basic than a PSL in October',
      'You have the personality of a Live Laugh Love sign',
      'Your aesthetic is "clearance section at Target"'
    ]
  },
  tryhard: {
    keywords: ['hustle', 'grind', 'CEO', 'entrepreneur', '10x'],
    roasts: [
      'You post motivational quotes like rent is due',
      'Your LinkedIn energy on Instagram is concerning',
      'We get it, you wake up at 5am'
    ]
  },
  aesthetic_fail: {
    keywords: ['vsco', 'aesthetic', 'vibe', 'mood'],
    roasts: [
      'Your VSCO girl phase should have ended in 2019',
      'Those presets are doing heavy lifting',
      'Your feed looks like you raided Pinterest'
    ]
  },
  oversharer: {
    keywords: ['journey', 'vulnerable', 'authentic', 'real talk'],
    roasts: [
      'Your Instagram is basically a public diary',
      'Not every thought needs to be a carousel post',
      'Your therapist should be charging you extra'
    ]
  }
};

const INSTAGRAM_CHALLENGES = {
  creative: [
    {
      name: '365 Days of Creativity',
      description: 'Post one creative piece daily for a year',
      hashtag: '#365DaysOfCreativity',
      difficulty: 'Hard'
    },
    {
      name: 'Weekly Photo Challenge',
      description: 'New theme every week for photography',
      hashtag: '#WeeklyPhotoChallenge',
      difficulty: 'Medium'
    },
    {
      name: 'Reel a Day',
      description: 'Create one reel every day for 30 days',
      hashtag: '#ReelADay',
      difficulty: 'Hard'
    }
  ],
  fitness: [
    {
      name: '75 Hard Challenge',
      description: '75 days of strict fitness and wellness routine',
      hashtag: '#75Hard',
      difficulty: 'Extreme'
    },
    {
      name: '30 Day Transformation',
      description: 'Document your fitness journey for 30 days',
      hashtag: '#30DayTransformation',
      difficulty: 'Medium'
    }
  ],
  lifestyle: [
    {
      name: 'Outfit Repeat Challenge',
      description: 'Style the same piece 10 different ways',
      hashtag: '#OutfitRepeatChallenge',
      difficulty: 'Easy'
    },
    {
      name: 'No Buy Challenge',
      description: 'Document a month without unnecessary purchases',
      hashtag: '#NoBuyChallenge',
      difficulty: 'Medium'
    }
  ]
};

// === GENERATION FUNCTIONS ===

function generateUsernameIdeas(style, count = 20) {
  const ideas = [];
  const styleData = USERNAME_STYLES[style];
  
  for (let i = 0; i < count; i++) {
    const prefix = styleData.prefixes[Math.floor(Math.random() * styleData.prefixes.length)];
    const suffix = styleData.suffixes[Math.floor(Math.random() * styleData.suffixes.length)];
    const modifier = styleData.modifiers[Math.floor(Math.random() * styleData.modifiers.length)];
    
    // Generate variations
    ideas.push({
      username: `${prefix}${suffix}`,
      withModifier: `${modifier}${prefix}`,
      withNumbers: `${prefix}${suffix}${Math.floor(Math.random() * 999)}`,
      withUnderscore: `${prefix}_${suffix}`,
      withDot: `${prefix}.${suffix}`
    });
  }
  
  return ideas;
}

function generateBioTemplates(niche) {
  const nicheData = BIO_NICHES[niche];
  const bios = [];
  
  const locations = ['NYC', 'LA', 'London', 'Miami', 'Toronto', 'Sydney', 'Dubai'];
  const achievements = ['10K+ clients', 'Featured in Forbes', 'Award winner 2024', '5+ years experience'];
  
  nicheData.templates.forEach(template => {
    nicheData.specialties.forEach(specialty => {
      const bio = template
        .replace(/{emoji}/g, nicheData.emojis[Math.floor(Math.random() * nicheData.emojis.length)])
        .replace(/{title}/g, specialty)
        .replace(/{location}/g, locations[Math.floor(Math.random() * locations.length)])
        .replace(/{specialty}/g, specialty)
        .replace(/{cta}/g, nicheData.ctas[Math.floor(Math.random() * nicheData.ctas.length)])
        .replace(/{achievement}/g, achievements[Math.floor(Math.random() * achievements.length)])
        .replace(/{link}/g, 'linktr.ee/yourname')
        .replace(/{contact}/g, 'hello@email.com');
      
      bios.push({
        template: bio,
        niche: niche,
        specialty: specialty,
        keywords: nicheData.keywords
      });
    });
  });
  
  return bios;
}

function generateCaptionTemplates(occasion) {
  const occasionData = CAPTION_OCCASIONS[occasion];
  const captions = [];
  
  occasionData.templates.forEach(template => {
    const caption = {
      text: template.replace(/{age}/g, '25').replace(/{location}/g, 'Bali'),
      hashtags: occasionData.hashtags,
      occasion: occasion,
      mood: getMoodFromOccasion(occasion)
    };
    captions.push(caption);
  });
  
  return captions;
}

function getMoodFromOccasion(occasion) {
  const moods = {
    birthday: 'celebratory',
    vacation: 'relaxed',
    selfie: 'confident',
    food: 'indulgent',
    workout: 'motivated',
    coffee: 'cozy',
    sunset: 'peaceful',
    outfit: 'stylish'
  };
  return moods[occasion] || 'neutral';
}

function generateHashtagSets(category, count = 30) {
  const sets = [];
  const allHashtags = Object.values(HASHTAG_CATEGORIES).flat();
  const categoryHashtags = HASHTAG_CATEGORIES[category] || [];
  
  for (let i = 0; i < count; i++) {
    const set = new Set([...categoryHashtags]);
    
    // Add random related hashtags
    while (set.size < 30) {
      const randomHashtag = allHashtags[Math.floor(Math.random() * allHashtags.length)];
      set.add(randomHashtag);
    }
    
    sets.push({
      primary: categoryHashtags,
      secondary: Array.from(set).slice(5, 15),
      trending: ['#Trending2025', '#ViralContent', '#ForYou', '#Explore'],
      niche: categoryHashtags.slice(0, 5)
    });
  }
  
  return sets;
}

// === FILE GENERATION ===

function generateDataFile(type, subtype, data) {
  const timestamp = Date.now();
  const slug = `${type}-${subtype}-${timestamp}`;
  
  const content = {
    slug: slug,
    type: type,
    subtype: subtype,
    title: generateTitle(type, subtype),
    description: generateDescription(type, subtype),
    data: data,
    metadata: {
      generated: new Date().toISOString(),
      version: '1.0',
      totalItems: Array.isArray(data) ? data.length : Object.keys(data).length
    },
    seo: {
      metaTitle: generateSeoTitle(type, subtype),
      metaDescription: generateSeoDescription(type, subtype),
      keywords: generateKeywords(type, subtype),
      canonical: `https://www.lookatmyprofile.org/${type}/${subtype}`
    },
    relatedPages: generateRelatedPages(type, subtype)
  };
  
  const dirPath = path.join(process.cwd(), 'public', 'generated-data', type);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, `${subtype}.json`);
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  
  return { slug, filePath };
}

function generateTitle(type, subtype) {
  const titles = {
    'username-generator': {
      aesthetic: 'Aesthetic Instagram Username Ideas - 500+ Unique Names',
      funny: 'Funny Instagram Username Generator - Hilarious Name Ideas',
      creative: 'Creative Instagram Username Ideas for Artists & Creators',
      minimalist: 'Minimalist Instagram Username Ideas - Simple & Clean',
      y2k: 'Y2K Instagram Username Generator - Nostalgic 2000s Names'
    },
    'bio-templates': {
      fitness: 'Fitness Instagram Bio Templates - Gym & Wellness Profiles',
      travel: 'Travel Instagram Bio Ideas - Wanderlust Profile Templates',
      food: 'Food Instagram Bio Templates - Foodie Profile Ideas',
      fashion: 'Fashion Instagram Bio Generator - Style Profile Templates',
      tech: 'Tech Instagram Bio Ideas - Developer & Startup Profiles',
      art: 'Artist Instagram Bio Templates - Creative Profile Ideas',
      music: 'Music Instagram Bio Generator - Artist Profile Templates',
      wellness: 'Wellness Instagram Bio Ideas - Mindfulness Profiles'
    },
    'caption-generator': {
      birthday: 'Birthday Instagram Captions - 100+ Celebration Ideas',
      vacation: 'Vacation Instagram Captions - Travel Post Ideas',
      selfie: 'Selfie Instagram Captions - Perfect Photo Quotes',
      food: 'Food Instagram Captions - Foodie Post Ideas',
      workout: 'Workout Instagram Captions - Fitness Motivation',
      coffee: 'Coffee Instagram Captions - Cafe Photo Ideas',
      sunset: 'Sunset Instagram Captions - Golden Hour Quotes',
      outfit: 'OOTD Instagram Captions - Fashion Post Ideas'
    }
  };
  
  return titles[type]?.[subtype] || `${type} - ${subtype}`;
}

function generateDescription(type, subtype) {
  return `Discover the best ${subtype} ${type.replace('-', ' ')} for Instagram in 2025. Curated collection of trending ideas, templates, and examples to make your profile stand out.`;
}

function generateSeoTitle(type, subtype) {
  return `${generateTitle(type, subtype)} | 2025 Edition`;
}

function generateSeoDescription(type, subtype) {
  return `Find the perfect ${subtype} ${type.replace('-', ' ')} for your Instagram profile. Updated for 2025 with trending examples and creative ideas.`;
}

function generateKeywords(type, subtype) {
  const baseKeywords = ['instagram', '2025', 'social media', 'profile', 'trending'];
  const typeKeywords = type.split('-');
  const subtypeKeywords = subtype.split('-');
  return [...baseKeywords, ...typeKeywords, ...subtypeKeywords];
}

function generateRelatedPages(type, subtype) {
  const related = [];
  
  // Add related subtypes
  const subtypes = Object.keys(USERNAME_STYLES);
  subtypes.forEach(st => {
    if (st !== subtype) {
      related.push({
        title: generateTitle(type, st),
        url: `/${type}/${st}`
      });
    }
  });
  
  return related.slice(0, 5);
}

// === MAIN GENERATION SCRIPT ===

function generateAllContent() {
  console.log('Starting content generation...');
  const generatedFiles = [];
  
  // Generate Username Ideas
  console.log('\n📝 Generating Username Ideas...');
  Object.keys(USERNAME_STYLES).forEach(style => {
    const data = generateUsernameIdeas(style, 50);
    const result = generateDataFile('username-generator', style, data);
    generatedFiles.push(result);
    console.log(`  ✅ Generated ${style} usernames`);
  });
  
  // Generate Bio Templates
  console.log('\n📝 Generating Bio Templates...');
  Object.keys(BIO_NICHES).forEach(niche => {
    const data = generateBioTemplates(niche);
    const result = generateDataFile('bio-templates', niche, data);
    generatedFiles.push(result);
    console.log(`  ✅ Generated ${niche} bio templates`);
  });
  
  // Generate Caption Templates
  console.log('\n📝 Generating Caption Templates...');
  Object.keys(CAPTION_OCCASIONS).forEach(occasion => {
    const data = generateCaptionTemplates(occasion);
    const result = generateDataFile('caption-generator', occasion, data);
    generatedFiles.push(result);
    console.log(`  ✅ Generated ${occasion} captions`);
  });
  
  // Generate Hashtag Sets
  console.log('\n📝 Generating Hashtag Sets...');
  Object.keys(HASHTAG_CATEGORIES).forEach(category => {
    const data = generateHashtagSets(category, 20);
    const result = generateDataFile('hashtag-generator', category, data);
    generatedFiles.push(result);
    console.log(`  ✅ Generated ${category} hashtag sets`);
  });
  
  // Generate Personality Profiles
  console.log('\n📝 Generating Personality Profiles...');
  Object.keys(PERSONALITY_TYPES).forEach(personality => {
    const result = generateDataFile('personality-analyzer', personality, PERSONALITY_TYPES[personality]);
    generatedFiles.push(result);
    console.log(`  ✅ Generated ${personality} personality profile`);
  });
  
  // Generate Roast Categories
  console.log('\n📝 Generating Roast Categories...');
  Object.keys(ROAST_CATEGORIES).forEach(category => {
    const result = generateDataFile('roast-generator', category, ROAST_CATEGORIES[category]);
    generatedFiles.push(result);
    console.log(`  ✅ Generated ${category} roasts`);
  });
  
  // Generate Challenge Pages
  console.log('\n📝 Generating Challenge Pages...');
  Object.keys(INSTAGRAM_CHALLENGES).forEach(category => {
    const result = generateDataFile('instagram-challenges', category, INSTAGRAM_CHALLENGES[category]);
    generatedFiles.push(result);
    console.log(`  ✅ Generated ${category} challenges`);
  });
  
  // Generate Master Index
  const indexPath = path.join(process.cwd(), 'public', 'generated-data', 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify({
    generated: new Date().toISOString(),
    totalFiles: generatedFiles.length,
    files: generatedFiles,
    categories: {
      'username-generator': Object.keys(USERNAME_STYLES),
      'bio-templates': Object.keys(BIO_NICHES),
      'caption-generator': Object.keys(CAPTION_OCCASIONS),
      'hashtag-generator': Object.keys(HASHTAG_CATEGORIES),
      'personality-analyzer': Object.keys(PERSONALITY_TYPES),
      'roast-generator': Object.keys(ROAST_CATEGORIES),
      'instagram-challenges': Object.keys(INSTAGRAM_CHALLENGES)
    }
  }, null, 2));
  
  console.log(`\n✨ Generation complete! Created ${generatedFiles.length} data files.`);
  console.log(`📁 Files saved to: public/generated-data/`);
  
  return generatedFiles;
}

// Run the generation
if (require.main === module) {
  generateAllContent();
}

module.exports = {
  generateAllContent,
  generateUsernameIdeas,
  generateBioTemplates,
  generateCaptionTemplates,
  generateHashtagSets
};