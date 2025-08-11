const fs = require('fs');
const path = require('path');

// Define blog posts and their slugs
const blogPosts = [
  {
    file: 'noplace-the-gen-z-social-media-revival-1754928271874.json',
    slug: 'noplace-the-gen-z-social-media-revival-1754928271874',
    title: 'Noplace: The Gen Z Social Media Revival',
    topics: ['gen z', 'social media', 'platforms', 'customization']
  },
  {
    file: 'meshtastic-1754926091091.json', 
    slug: 'meshtastic-1754926091091',
    title: 'Meshtastic: Emergency‑Ready Communication Networks',
    topics: ['technology', 'communication', 'emergency', 'mesh networking']
  },
  {
    file: 'how-gen-z-psychology-is-shaped-by-social-media-data-driven-i.json',
    slug: 'how-gen-z-psychology-is-shaped-by-social-media-data-driven-i',
    title: 'How Gen Z Psychology Is Shaped by Social Media',
    topics: ['gen z', 'psychology', 'social media', 'mental health']
  },
  {
    file: 'generation-z-psychology-and-social-media-how-digital-life-sh.json',
    slug: 'generation-z-psychology-and-social-media-how-digital-life-sh',
    title: 'Generation Z Psychology and Social Media',
    topics: ['gen z', 'psychology', 'social media', 'digital life', 'mental health']
  },
  {
    file: 'tiktok-instagram-and-gen-z-social-media-trends-for-2025-mark.json',
    slug: 'tiktok-instagram-and-gen-z-social-media-trends-for-2025-mark',
    title: 'TikTok, Instagram, and Gen Z Social Media Trends',
    topics: ['tiktok', 'instagram', 'gen z', 'social media', 'marketing', 'trends']
  },
  {
    file: 'gen-z-social-media-marketing-tiktok-instagram-ai-and-automat.json',
    slug: 'gen-z-social-media-marketing-tiktok-instagram-ai-and-automat',
    title: 'Gen Z Social Media Marketing',
    topics: ['gen z', 'social media', 'marketing', 'tiktok', 'instagram', 'ai', 'automation']
  },
  {
    file: 'how-gen-z-tiktok-and-ai-are-reshaping-social-media-marketing.json',
    slug: 'how-gen-z-tiktok-and-ai-are-reshaping-social-media-marketing',
    title: 'How Gen Z, TikTok, and AI Are Reshaping Social Media',
    topics: ['gen z', 'tiktok', 'ai', 'social media', 'marketing']
  },
  {
    file: 'ai-and-automation-in-social-media-marketing-2025-trends-for-.json',
    slug: 'ai-and-automation-in-social-media-marketing-2025-trends-for-',
    title: 'AI and Automation in Social Media Marketing',
    topics: ['ai', 'automation', 'social media', 'marketing', 'tiktok', 'instagram']
  },
  {
    file: 'how-gen-z-and-tiktok-are-rewriting-social-media-marketing-in.json',
    slug: 'how-gen-z-and-tiktok-are-rewriting-social-media-marketing-in',
    title: 'How Gen Z and TikTok Are Rewriting Social Media Marketing',
    topics: ['gen z', 'tiktok', 'social media', 'marketing', 'brands']
  },
  {
    file: 'how-ai-and-automation-are-reshaping-gen-z-social-media-marke.json',
    slug: 'how-ai-and-automation-are-reshaping-gen-z-social-media-marke',
    title: 'How AI and Automation Are Reshaping Gen Z Social Media',
    topics: ['ai', 'automation', 'gen z', 'social media', 'marketing', 'tiktok', 'instagram']
  }
];

// Function to find related posts based on shared topics
function findRelatedPosts(currentPost, allPosts, maxLinks = 4) {
  return allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      ...post,
      relevance: post.topics.filter(topic => currentPost.topics.includes(topic)).length
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, maxLinks)
    .filter(post => post.relevance > 0);
}

// Function to add internal links to content
function addInternalLinks(content, currentSlug) {
  const currentPost = blogPosts.find(p => p.slug === currentSlug);
  if (!currentPost) return content;
  
  const relatedPosts = findRelatedPosts(currentPost, blogPosts);
  
  // Don't add links if there are no related posts
  if (relatedPosts.length === 0) return content;
  
  let modifiedContent = content;
  let linksAdded = 0;
  const maxLinksToAdd = 3;
  
  // Add links naturally within the content
  relatedPosts.forEach(relatedPost => {
    if (linksAdded >= maxLinksToAdd) return;
    
    // Find good places to add links based on keywords
    const linkPatterns = [
      { 
        keyword: 'Gen Z', 
        condition: relatedPost.topics.includes('gen z'),
        replacement: `[Gen Z](/blog/${relatedPost.slug})`
      },
      {
        keyword: 'TikTok',
        condition: relatedPost.topics.includes('tiktok'),
        replacement: `[TikTok](/blog/${relatedPost.slug})`
      },
      {
        keyword: 'social media marketing',
        condition: relatedPost.topics.includes('marketing'),
        replacement: `[social media marketing](/blog/${relatedPost.slug})`
      },
      {
        keyword: 'AI and automation',
        condition: relatedPost.topics.includes('ai') || relatedPost.topics.includes('automation'),
        replacement: `[AI and automation](/blog/${relatedPost.slug})`
      },
      {
        keyword: 'psychology',
        condition: relatedPost.topics.includes('psychology'),
        replacement: `[psychology](/blog/${relatedPost.slug})`
      }
    ];
    
    for (const pattern of linkPatterns) {
      if (linksAdded >= maxLinksToAdd) break;
      if (!pattern.condition) continue;
      
      // Find a good position to add the link (not in titles, not already linked)
      const regex = new RegExp(`(^|[^#\\[])(${pattern.keyword})([^\\]\\(])`, 'im');
      const match = modifiedContent.match(regex);
      
      if (match && match.index > 200 && match.index < content.length - 500) {
        // Only add link if it's not too close to the beginning or end
        const beforeLink = modifiedContent.substring(0, match.index);
        const afterLink = modifiedContent.substring(match.index + match[0].length);
        
        // Create contextual link text
        const linkText = `[${match[2]}](/blog/${relatedPost.slug})`;
        modifiedContent = beforeLink + match[1] + linkText + match[3] + afterLink;
        linksAdded++;
        break;
      }
    }
  });
  
  // Add a "Related Articles" section at the end if we have related posts
  if (relatedPosts.length > 0 && !content.includes('## Related Articles')) {
    const relatedSection = `

## Related Articles

Explore more insights on similar topics:

${relatedPosts.slice(0, 3).map(post => 
  `- [${post.title}](/blog/${post.slug})`
).join('\n')}`;
    
    modifiedContent = modifiedContent + relatedSection;
  }
  
  return modifiedContent;
}

// Process all blog posts
const blogDir = path.join(__dirname, 'public', 'blog-data');
let processedCount = 0;

blogPosts.forEach(post => {
  const filePath = path.join(blogDir, post.file);
  
  try {
    // Read the JSON file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Skip if already has internal links (check for blog links)
    if (data.content.includes('/blog/') && data.content.includes('Related Articles')) {
      console.log(`✓ ${post.file} already has internal links, skipping...`);
      return;
    }
    
    // Add internal links to content
    const updatedContent = addInternalLinks(data.content, post.slug);
    
    // Only update if content changed
    if (updatedContent !== data.content) {
      data.content = updatedContent;
      
      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      processedCount++;
      console.log(`✓ Added internal links to ${post.file}`);
    } else {
      console.log(`- No suitable places for links in ${post.file}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${post.file}:`, error.message);
  }
});

console.log(`\n✅ Processed ${processedCount} blog posts with internal links`);
console.log('Ready to deploy to Heroku!');