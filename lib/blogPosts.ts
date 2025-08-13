import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  excerpt?: string;
  content?: string;
  publishedAt: string;
  updatedAt?: string;
  date?: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  tags?: string[];
  keywords?: string[];
  category?: string;
  readTime?: string;
  metrics?: {
    readingTime: number;
    wordCount: number;
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDataDir = path.join(process.cwd(), 'public', 'blog-data');
    const files = fs.readdirSync(blogDataDir);
    
    const posts = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        try {
          const filePath = path.join(blogDataDir, file);
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const post = JSON.parse(fileContent);
          
          // Ensure slug exists (use filename if not in JSON)
          if (!post.slug) {
            post.slug = file.replace('.json', '');
          }
          
          // Normalize date field
          if (!post.date && post.publishedAt) {
            post.date = post.publishedAt;
          }
          
          // Calculate readTime if not present
          if (!post.readTime && post.metrics?.readingTime) {
            post.readTime = `${post.metrics.readingTime} min read`;
          }
          
          // Ensure excerpt exists
          if (!post.excerpt && post.description) {
            post.excerpt = post.description;
          }
          
          return post;
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
          return null;
        }
      })
      .filter(post => post !== null)
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt || a.date || 0);
        const dateB = new Date(b.publishedAt || b.date || 0);
        return dateB.getTime() - dateA.getTime();
      });
    
    return posts as BlogPost[];
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'blog-data', `${slug}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const post = JSON.parse(fileContent);
    
    // Ensure slug exists
    if (!post.slug) {
      post.slug = slug;
    }
    
    // Normalize date field
    if (!post.date && post.publishedAt) {
      post.date = post.publishedAt;
    }
    
    // Calculate readTime if not present
    if (!post.readTime && post.metrics?.readingTime) {
      post.readTime = `${post.metrics.readingTime} min read`;
    }
    
    // Ensure excerpt exists
    if (!post.excerpt && post.description) {
      post.excerpt = post.description;
    }
    
    return post;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}