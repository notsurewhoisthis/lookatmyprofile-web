/**
 * Blog Data Adapter for n8n Workflow Integration
 * 
 * This adapter handles the conversion between n8n workflow JSON structure
 * and the blog system's expected format, ensuring seamless automated blog posting.
 */

interface N8nBlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    bio: string;
  };
  date: string; // Format: "2025-01-10"
  readTime: string; // Format: "5 min read"
  tags: string[];
  metaDescription: string;
  keywords: string[];
  updatedAt: string; // ISO format
}

interface SystemBlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  tags: string[];
  keywords: string[];
  categories?: string[];
  seo?: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    canonical: string;
    structuredData: any;
  };
  metrics: {
    readingTime: number;
    wordCount: number;
    characterCount?: number;
  };
}

/**
 * Converts n8n workflow blog post format to system format
 */
export function adaptN8nToSystemFormat(n8nPost: N8nBlogPost): SystemBlogPost {
  // Parse readTime to extract numeric value
  const readingTime = parseInt(n8nPost.readTime.replace(/\D/g, '')) || 5;
  
  // Calculate word count from content
  const wordCount = n8nPost.content.split(/\s+/).length;
  const characterCount = n8nPost.content.length;
  
  // Convert date string to ISO format
  const publishedAt = new Date(n8nPost.date).toISOString();
  const updatedAt = n8nPost.updatedAt || publishedAt;
  
  // Generate SEO metadata
  const canonical = `https://www.lookatmyprofile.org/blog/${n8nPost.slug}`;
  const ogImage = `/api/og?title=${encodeURIComponent(n8nPost.title)}`;
  
  return {
    slug: n8nPost.slug,
    title: n8nPost.title,
    description: n8nPost.metaDescription, // Map metaDescription to description
    excerpt: n8nPost.excerpt,
    content: n8nPost.content,
    publishedAt,
    updatedAt,
    author: {
      name: n8nPost.author.name,
      bio: n8nPost.author.bio,
      avatar: '/images/avatar.jpg' // Default avatar
    },
    tags: n8nPost.tags,
    keywords: n8nPost.keywords,
    categories: inferCategories(n8nPost.tags, n8nPost.keywords),
    seo: {
      metaTitle: n8nPost.title.substring(0, 60), // Ensure title fits SEO limits
      metaDescription: n8nPost.metaDescription.substring(0, 160), // Ensure description fits SEO limits
      ogImage,
      canonical,
      structuredData: generateStructuredData(n8nPost, publishedAt, updatedAt, wordCount)
    },
    metrics: {
      readingTime,
      wordCount,
      characterCount
    }
  };
}

/**
 * Converts system blog post format to n8n format (for updates/exports)
 */
export function adaptSystemToN8nFormat(systemPost: SystemBlogPost): N8nBlogPost {
  const date = new Date(systemPost.publishedAt).toISOString().split('T')[0];
  const readTime = `${systemPost.metrics.readingTime} min read`;
  
  return {
    title: systemPost.title,
    slug: systemPost.slug,
    excerpt: systemPost.excerpt,
    content: systemPost.content,
    author: {
      name: systemPost.author.name,
      bio: systemPost.author.bio || ''
    },
    date,
    readTime,
    tags: systemPost.tags,
    metaDescription: systemPost.description,
    keywords: systemPost.keywords,
    updatedAt: systemPost.updatedAt
  };
}

/**
 * Infer categories based on tags and keywords
 */
function inferCategories(tags: string[], keywords: string[]): string[] {
  const categories: Set<string> = new Set();
  const allTerms = [...tags, ...keywords].map(t => t.toLowerCase());
  
  // Category mapping rules
  const categoryMappings = {
    'SEO': ['seo', 'search', 'optimization', 'ranking', 'google'],
    'Social Media': ['instagram', 'tiktok', 'facebook', 'twitter', 'social'],
    'Marketing': ['marketing', 'advertising', 'campaign', 'promotion', 'brand'],
    'Gen Z': ['gen z', 'genz', 'generation z', 'youth', 'young'],
    'AI & Automation': ['ai', 'artificial intelligence', 'automation', 'machine learning', 'bot'],
    'Content Strategy': ['content', 'strategy', 'blog', 'writing', 'copywriting'],
    'Analytics': ['analytics', 'metrics', 'data', 'insights', 'performance'],
    'Trends': ['trend', 'trending', 'viral', 'popular', 'latest']
  };
  
  for (const [category, triggers] of Object.entries(categoryMappings)) {
    if (triggers.some(trigger => allTerms.some(term => term.includes(trigger)))) {
      categories.add(category);
    }
  }
  
  // Default category if none matched
  if (categories.size === 0) {
    categories.add('General');
  }
  
  return Array.from(categories);
}

/**
 * Generate structured data for SEO
 */
function generateStructuredData(
  post: N8nBlogPost,
  publishedAt: string,
  updatedAt: string,
  wordCount: number
): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Person',
      name: post.author.name
    },
    datePublished: publishedAt,
    dateModified: updatedAt,
    wordCount,
    keywords: post.keywords.join(', '),
    articleSection: 'Blog',
    publisher: {
      '@type': 'Organization',
      name: 'LookAtMyProfile',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lookatmyprofile.org/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.lookatmyprofile.org/blog/${post.slug}`
    }
  };
}

/**
 * Validate n8n blog post data
 */
export function validateN8nBlogPost(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Required fields
  if (!data.title) errors.push('Missing required field: title');
  if (!data.slug) errors.push('Missing required field: slug');
  if (!data.content) errors.push('Missing required field: content');
  if (!data.excerpt) errors.push('Missing required field: excerpt');
  if (!data.date) errors.push('Missing required field: date');
  if (!data.metaDescription) errors.push('Missing required field: metaDescription');
  
  // Author validation
  if (!data.author?.name) errors.push('Missing required field: author.name');
  
  // Arrays validation
  if (!Array.isArray(data.tags)) errors.push('Tags must be an array');
  if (!Array.isArray(data.keywords)) errors.push('Keywords must be an array');
  
  // Format validation
  if (data.slug && !/^[a-z0-9-]+$/.test(data.slug)) {
    errors.push('Slug must contain only lowercase letters, numbers, and hyphens');
  }
  
  // SEO validation
  if (data.title && data.title.length > 60) {
    errors.push('Title should be 60 characters or less for optimal SEO');
  }
  if (data.metaDescription && data.metaDescription.length > 160) {
    errors.push('Meta description should be 160 characters or less for optimal SEO');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Process and save n8n blog post
 */
export async function processN8nBlogPost(n8nData: N8nBlogPost): Promise<{ 
  success: boolean; 
  filePath?: string; 
  error?: string 
}> {
  try {
    // Validate input
    const validation = validateN8nBlogPost(n8nData);
    if (!validation.valid) {
      return { 
        success: false, 
        error: `Validation failed: ${validation.errors.join(', ')}` 
      };
    }
    
    // Convert to system format
    const systemPost = adaptN8nToSystemFormat(n8nData);
    
    // File path for saving
    const filePath = `public/blog-data/${systemPost.slug}.json`;
    
    // Import fs dynamically if in browser environment
    if (typeof window === 'undefined') {
      const fs = await import('fs').then(m => m.promises);
      const path = await import('path');
      
      const fullPath = path.join(process.cwd(), filePath);
      await fs.writeFile(fullPath, JSON.stringify(systemPost, null, 2));
      
      return { success: true, filePath };
    } else {
      // Browser environment - return data for API processing
      return { 
        success: false, 
        error: 'Cannot write files from browser environment. Use API endpoint.' 
      };
    }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}