#!/usr/bin/env node

/**
 * Data-Driven Page Generation System
 * Generates hundreds of SEO-optimized pages through combinatorial data
 */

const fs = require('fs').promises;
const path = require('path');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '..', 'data');
const PAGES_OUTPUT_DIR = path.join(__dirname, '..', 'app');

// Core categories for combinatorial generation
const CATEGORIES = {
  usernameStyles: ['aesthetic', 'funny', 'creative', 'cool', 'cute', 'edgy', 'professional', 'mysterious', 'vintage', 'minimalist'],
  bioTypes: ['fitness', 'travel', 'food', 'fashion', 'business', 'student', 'artist', 'photographer', 'musician', 'gamer'],
  captionOccasions: ['selfie', 'birthday', 'vacation', 'sunset', 'beach', 'party', 'workout', 'foodie', 'couple', 'friends'],
  hashtagTopics: ['fashion', 'beauty', 'fitness', 'travel', 'food', 'photography', 'art', 'music', 'lifestyle', 'motivation'],
  roastTargets: ['ex', 'friend', 'sibling', 'coworker', 'celebrity', 'influencer', 'gym-bro', 'foodie', 'gamer', 'basic'],
  personalityTypes: ['introvert', 'extrovert', 'adventurer', 'creative', 'analytical', 'leader', 'helper', 'achiever', 'romantic', 'rebel']
};

// Modifiers for creating variations
const MODIFIERS = {
  gender: ['boys', 'girls', 'gender-neutral'],
  age: ['teen', 'college', 'millennial', 'gen-z'],
  mood: ['sassy', 'inspirational', 'funny', 'deep', 'casual'],
  style: ['short', 'clever', 'witty', 'aesthetic', 'unique']
};

// Generate username ideas data
async function generateUsernameData() {
  const usernamePages = [];
  
  for (const style of CATEGORIES.usernameStyles) {
    for (const gender of MODIFIERS.gender) {
      for (const age of MODIFIERS.age) {
        const slug = `instagram-username-ideas-${style}-${gender}-${age}`;
        const title = `${style.charAt(0).toUpperCase() + style.slice(1)} Instagram Username Ideas for ${gender.charAt(0).toUpperCase() + gender.slice(1)} (${age.charAt(0).toUpperCase() + age.slice(1)})`;
        
        usernamePages.push({
          slug,
          title,
          description: `Discover ${style} Instagram username ideas perfect for ${age} ${gender}. Get creative, unique usernames that stand out in 2025.`,
          category: 'username-generator',
          subcategory: style,
          tags: [style, gender, age, 'username', 'instagram'],
          content: generateUsernameContent(style, gender, age),
          relatedPages: generateRelatedPages('username', style),
          examples: generateUsernameExamples(style, gender, age)
        });
      }
    }
  }
  
  return usernamePages;
}

// Generate bio templates data
async function generateBioData() {
  const bioPages = [];
  
  for (const type of CATEGORIES.bioTypes) {
    for (const mood of MODIFIERS.mood) {
      for (const style of MODIFIERS.style) {
        const slug = `instagram-bio-ideas-${type}-${mood}-${style}`;
        const title = `${mood.charAt(0).toUpperCase() + mood.slice(1)} ${style.charAt(0).toUpperCase() + style.slice(1)} Instagram Bio Ideas for ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        
        bioPages.push({
          slug,
          title,
          description: `Best ${mood} and ${style} Instagram bio templates for ${type} enthusiasts. Stand out with creative bio ideas in 2025.`,
          category: 'bio-generator',
          subcategory: type,
          tags: [type, mood, style, 'bio', 'instagram'],
          content: generateBioContent(type, mood, style),
          relatedPages: generateRelatedPages('bio', type),
          templates: generateBioTemplates(type, mood, style)
        });
      }
    }
  }
  
  return bioPages;
}

// Generate caption ideas data
async function generateCaptionData() {
  const captionPages = [];
  
  for (const occasion of CATEGORIES.captionOccasions) {
    for (const mood of MODIFIERS.mood) {
      const slug = `instagram-captions-${occasion}-${mood}`;
      const title = `${mood.charAt(0).toUpperCase() + mood.slice(1)} Instagram Captions for ${occasion.charAt(0).toUpperCase() + occasion.slice(1)} Photos`;
      
      captionPages.push({
        slug,
        title,
        description: `Perfect ${mood} Instagram captions for your ${occasion} posts. Get likes and engagement with these creative captions.`,
        category: 'caption-generator',
        subcategory: occasion,
        tags: [occasion, mood, 'caption', 'instagram'],
        content: generateCaptionContent(occasion, mood),
        relatedPages: generateRelatedPages('caption', occasion),
        examples: generateCaptionExamples(occasion, mood)
      });
    }
  }
  
  return captionPages;
}

// Generate hashtag collections data
async function generateHashtagData() {
  const hashtagPages = [];
  
  for (const topic of CATEGORIES.hashtagTopics) {
    for (const year of ['2025', 'trending', 'viral']) {
      const slug = `instagram-hashtags-${topic}-${year}`;
      const title = `Best ${topic.charAt(0).toUpperCase() + topic.slice(1)} Instagram Hashtags ${year === 'trending' ? 'Trending Now' : year === 'viral' ? 'Going Viral' : 'for 2025'}`;
      
      hashtagPages.push({
        slug,
        title,
        description: `Top ${year === '2025' ? '2025' : year} Instagram hashtags for ${topic}. Boost your reach and engagement with these proven hashtags.`,
        category: 'hashtag-generator',
        subcategory: topic,
        tags: [topic, year, 'hashtags', 'instagram'],
        content: generateHashtagContent(topic, year),
        relatedPages: generateRelatedPages('hashtag', topic),
        collections: generateHashtagCollections(topic, year)
      });
    }
  }
  
  return hashtagPages;
}

// Generate roast variations data
async function generateRoastData() {
  const roastPages = [];
  
  for (const target of CATEGORIES.roastTargets) {
    for (const style of ['savage', 'funny', 'clever', 'witty']) {
      const slug = `roast-${target}-${style}-instagram`;
      const title = `${style.charAt(0).toUpperCase() + style.slice(1)} Ways to Roast Your ${target.charAt(0).toUpperCase() + target.slice(1)} on Instagram`;
      
      roastPages.push({
        slug,
        title,
        description: `Hilarious ${style} roasts for your ${target}'s Instagram. Get the perfect comeback with our AI-powered roast generator.`,
        category: 'roast-generator',
        subcategory: target,
        tags: [target, style, 'roast', 'instagram', 'funny'],
        content: generateRoastContent(target, style),
        relatedPages: generateRelatedPages('roast', target),
        examples: generateRoastExamples(target, style)
      });
    }
  }
  
  return roastPages;
}

// Generate personality analysis data
async function generatePersonalityData() {
  const personalityPages = [];
  
  for (const personality of CATEGORIES.personalityTypes) {
    const slug = `instagram-personality-type-${personality}`;
    const title = `The ${personality.charAt(0).toUpperCase() + personality.slice(1)} Instagram Personality Type - Analysis & Roast`;
    
    personalityPages.push({
      slug,
      title,
      description: `Discover if you're the ${personality} Instagram personality type. Get roasted and analyzed based on your posting habits.`,
      category: 'personality-analyzer',
      subcategory: personality,
      tags: [personality, 'personality', 'analysis', 'instagram'],
      content: generatePersonalityContent(personality),
      relatedPages: generateRelatedPages('personality', personality),
      traits: generatePersonalityTraits(personality)
    });
  }
  
  return personalityPages;
}

// Helper functions for content generation
function generateUsernameContent(style, gender, age) {
  return {
    intro: `Looking for the perfect ${style} Instagram username? We've curated the best username ideas for ${age} ${gender} that capture your unique vibe.`,
    tips: [
      `Keep it short and memorable`,
      `Use ${style} elements that reflect your personality`,
      `Consider your target audience (${age} ${gender})`,
      `Check availability across platforms`,
      `Avoid numbers unless meaningful`
    ],
    howTo: `Our AI analyzes trending ${style} usernames and generates unique combinations perfect for ${age} ${gender} on Instagram.`
  };
}

function generateBioContent(type, mood, style) {
  return {
    intro: `Create the perfect ${mood} ${style} bio for your ${type} Instagram profile.`,
    tips: [
      `Keep it ${style} and to the point`,
      `Add ${mood} elements to stand out`,
      `Include relevant ${type} keywords`,
      `Use emojis strategically`,
      `Add a call-to-action`
    ]
  };
}

function generateCaptionContent(occasion, mood) {
  return {
    intro: `Never run out of ${mood} caption ideas for your ${occasion} posts again.`,
    tips: [
      `Match the ${mood} tone to your photo`,
      `Keep ${occasion} captions relatable`,
      `Use relevant emojis`,
      `Ask questions to boost engagement`,
      `Include a call-to-action`
    ]
  };
}

function generateHashtagContent(topic, year) {
  return {
    intro: `Boost your ${topic} content reach with these ${year === '2025' ? 'trending 2025' : year} hashtags.`,
    strategy: [
      `Mix popular and niche ${topic} hashtags`,
      `Use 10-15 hashtags per post`,
      `Place hashtags in first comment`,
      `Track performance regularly`,
      `Update based on trends`
    ]
  };
}

function generateRoastContent(target, style) {
  return {
    intro: `Ready to deliver the perfect ${style} roast to your ${target}? We've got you covered.`,
    disclaimer: `Remember: Good roasts are funny, not hurtful. Keep it ${style} but respectful!`
  };
}

function generatePersonalityContent(personality) {
  return {
    intro: `The ${personality} Instagram personality type has distinct posting patterns and behaviors.`,
    analysis: `Our AI analyzes posting frequency, content types, captions, and engagement to determine if you're a ${personality}.`
  };
}

// Generate examples based on category
function generateUsernameExamples(style, gender, age) {
  const baseExamples = {
    aesthetic: ['moon.child', 'golden.hour', 'velvet.dreams'],
    funny: ['nacho.average', 'cereal.killer', 'bread.pitt'],
    creative: ['pixel.poet', 'dream.weaver', 'echo.chamber']
  };
  return baseExamples[style] || ['user.name', 'insta.handle', 'profile.name'];
}

function generateBioTemplates(type, mood, style) {
  return [
    `${type} enthusiast | ${mood} vibes only | Living my best life`,
    `Creating ${style} content about ${type} | DM for collabs`,
    `${mood} ${type} lover | Spreading good vibes`
  ];
}

function generateCaptionExamples(occasion, mood) {
  return [
    `Perfect ${occasion} moment with the perfect ${mood} vibe`,
    `When ${occasion} hits different... #${mood}mood`,
    `Living for these ${occasion} moments`
  ];
}

function generateHashtagCollections(topic, year) {
  return {
    highEngagement: ['#' + topic + '2025', '#' + topic + 'daily', '#' + topic + 'love'],
    niche: ['#' + topic + 'community', '#' + topic + 'inspiration', '#' + topic + 'goals'],
    branded: ['#my' + topic + 'journey', '#' + topic + 'life', '#' + topic + 'addict']
  };
}

function generateRoastExamples(target, style) {
  return [
    `Your ${target} posts screams "${style} desperation"`,
    `That ${style} filter can't hide your ${target} energy`,
    `Classic ${target} move - thinking this is ${style}`
  ];
}

function generatePersonalityTraits(personality) {
  return {
    posting: `The ${personality} posts consistently about their interests`,
    captions: `Uses ${personality}-style captions that reflect their mindset`,
    engagement: `Engages with content that aligns with ${personality} values`
  };
}

function generateRelatedPages(category, subcategory) {
  return [
    `/instagram-${category}-generator`,
    `/${category}-ideas-${subcategory}`,
    `/best-${category}-2025`
  ];
}

// Main generation function
async function generateAllData() {
  console.log('🚀 Starting page generation...');
  
  // Create output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  // Generate all data categories
  const allPages = [];
  
  console.log('📝 Generating username pages...');
  allPages.push(...await generateUsernameData());
  
  console.log('📝 Generating bio pages...');
  allPages.push(...await generateBioData());
  
  console.log('📝 Generating caption pages...');
  allPages.push(...await generateCaptionData());
  
  console.log('📝 Generating hashtag pages...');
  allPages.push(...await generateHashtagData());
  
  console.log('📝 Generating roast pages...');
  allPages.push(...await generateRoastData());
  
  console.log('📝 Generating personality pages...');
  allPages.push(...await generatePersonalityData());
  
  // Save master data file
  const masterDataPath = path.join(OUTPUT_DIR, 'generated-pages.json');
  await fs.writeFile(masterDataPath, JSON.stringify(allPages, null, 2));
  
  // Save individual category files
  const categories = ['username-generator', 'bio-generator', 'caption-generator', 'hashtag-generator', 'roast-generator', 'personality-analyzer'];
  
  for (const category of categories) {
    const categoryPages = allPages.filter(page => page.category === category);
    const categoryPath = path.join(OUTPUT_DIR, `${category}-pages.json`);
    await fs.writeFile(categoryPath, JSON.stringify(categoryPages, null, 2));
    console.log(`✅ Generated ${categoryPages.length} pages for ${category}`);
  }
  
  console.log(`\n✨ Total pages generated: ${allPages.length}`);
  console.log(`📁 Data saved to: ${OUTPUT_DIR}`);
  
  return allPages;
}

// Execute if run directly
if (require.main === module) {
  generateAllData().catch(console.error);
}

module.exports = { generateAllData, CATEGORIES, MODIFIERS };