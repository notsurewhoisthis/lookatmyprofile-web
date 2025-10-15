import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt?: string;
  publishedAt: string;
  author: {
    name: string;
  };
  tags?: string[];
  keywords?: string[];
  metrics?: {
    readingTime: number;
  };
}

export const POSTS_PER_PAGE = 20;

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

          return post;
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
          return null;
        }
      })
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export function getPaginatedPosts(posts: BlogPost[], page: number) {
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  return posts.slice(startIndex, endIndex);
}

export function getTotalPages(totalPosts: number): number {
  return Math.ceil(totalPosts / POSTS_PER_PAGE);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
