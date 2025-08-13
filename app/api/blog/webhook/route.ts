import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { processN8nBlogPost, validateN8nBlogPost } from '@/lib/blog-adapter';

// Secret token for webhook authentication (should be in environment variable)
const WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET || 'your-secret-token-here';

/**
 * POST /api/blog/webhook
 * 
 * Webhook endpoint for n8n workflow to automatically create blog posts.
 * Accepts blog data in n8n format and converts it to system format.
 * 
 * Headers:
 * - Authorization: Bearer {secret-token}
 * - Content-Type: application/json
 * 
 * Body: n8n blog post JSON structure
 */
export async function POST(request: NextRequest) {
  try {
    // Authenticate webhook request
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid authorization header' },
        { status: 401 }
      );
    }
    
    const token = authHeader.substring(7);
    if (token !== WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: 'Invalid webhook token' },
        { status: 401 }
      );
    }
    
    // Parse request body
    const data = await request.json();
    
    // Validate the blog post data
    const validation = validateN8nBlogPost(data);
    if (!validation.valid) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validation.errors 
        },
        { status: 400 }
      );
    }
    
    // Process and save the blog post
    const result = await processN8nBlogPost(data);
    
    if (!result.success) {
      return NextResponse.json(
        { 
          error: 'Failed to process blog post',
          details: result.error 
        },
        { status: 500 }
      );
    }
    
    // Trigger revalidation for blog pages
    try {
      // Revalidate blog listing page
      await fetch(`${process.env.NEXT_PUBLIC_URL || 'https://www.lookatmyprofile.org'}/api/revalidate?path=/blog`, {
        method: 'POST'
      });
      
      // Revalidate specific blog post page
      await fetch(`${process.env.NEXT_PUBLIC_URL || 'https://www.lookatmyprofile.org'}/api/revalidate?path=/blog/${data.slug}`, {
        method: 'POST'
      });
      
      // Revalidate sitemap
      await fetch(`${process.env.NEXT_PUBLIC_URL || 'https://www.lookatmyprofile.org'}/api/revalidate?path=/sitemap.xml`, {
        method: 'POST'
      });
    } catch (revalidateError) {
      console.error('Revalidation error:', revalidateError);
      // Don't fail the request if revalidation fails
    }
    
    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      slug: data.slug,
      url: `https://www.lookatmyprofile.org/blog/${data.slug}`,
      filePath: result.filePath
    });
    
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/blog/webhook
 * 
 * Health check endpoint for n8n to verify webhook is active
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'healthy',
    message: 'Blog webhook endpoint is active',
    acceptedFormat: {
      title: 'string',
      slug: 'string',
      excerpt: 'string',
      content: 'string (HTML or Markdown)',
      author: {
        name: 'string',
        bio: 'string'
      },
      date: 'YYYY-MM-DD',
      readTime: 'X min read',
      tags: ['array', 'of', 'strings'],
      metaDescription: 'string (max 160 chars)',
      keywords: ['array', 'of', 'keywords'],
      updatedAt: 'ISO 8601 datetime (optional)'
    },
    authentication: 'Bearer token required in Authorization header',
    documentation: 'https://www.lookatmyprofile.org/api/blog/webhook/docs'
  });
}