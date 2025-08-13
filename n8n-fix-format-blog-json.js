// Get content and metadata
const aiResponse = $('AI Content Generation using GPT5-mini').item.json;
const aiContent = aiResponse.message?.content || aiResponse.choices?.[0]?.message?.content || '';
const topic = $('Set Topic Data').item.json.topic;
const category = $('Set Topic Data').item.json.category;
const keywords = $('Set Topic Data').item.json.keywords || [];

// Validate content
const wordCount = aiContent.split(/\s+/).filter(word => word.length > 0).length;
if (wordCount < 1800) {
  throw new Error(`Content too short: ${wordCount} words. Minimum 1800 required.`);
}

// Generate slug from topic
const slug = topic
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .substring(0, 60) + '-' + Date.now();

// Extract title
const titleMatch = aiContent.match(/^#\s+(.+)$/m);
const title = titleMatch ? titleMatch[1].replace(/[*_`]/g, '') : topic;

// Get first paragraph for description
const firstParagraph = aiContent
  .split('\n\n')
  .find(p => p.trim() && !p.startsWith('#'));
const description = firstParagraph ?
  firstParagraph.substring(0, 160).replace(/[*_`#]/g, '') :
  `Comprehensive guide on ${topic}`;

// Create JSON file content with CORRECT STRUCTURE
const blogData = {
  slug: slug,
  title: title,
  description: description,
  content: aiContent,
  category: category,
  keywords: keywords,
  tags: keywords.slice(0, 5), // Use first 5 keywords as tags for SEO
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(), // For structured data
  author: {  // FIXED: Changed from string to object
    name: "AI Content Team",
    bio: "Expert content creators powered by AI and data-driven insights"
  },
  metrics: {
    readingTime: Math.ceil(wordCount / 225),
    wordCount: wordCount
  }
};

const jsonContent = JSON.stringify(blogData, null, 2);

return {
  jsonContent: jsonContent,
  filePath: `public/blog-data/${slug}.json`,
  commitMessage: `Add blog post: ${title}`,
  slug: slug,
  wordCount: wordCount
};