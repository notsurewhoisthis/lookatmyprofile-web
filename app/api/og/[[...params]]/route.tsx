import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

// Catch-all route to handle malformed OG URLs
export async function GET(request: NextRequest) {
  // Extract the path after /api/og/
  const url = new URL(request.url);
  const pathSegments = url.pathname.split('/').slice(3); // Remove /api/og/
  
  // If this looks like a malformed URL with unencoded parameters
  if (pathSegments.length > 0) {
    // Try to extract the title from the malformed URL
    const possibleTitle = pathSegments.join('/').replace(/\?title=/, '');
    
    // Redirect to the properly formatted OG image URL
    const properUrl = `/api/og?title=${encodeURIComponent(possibleTitle)}`;
    
    return NextResponse.redirect(new URL(properUrl, request.url), {
      status: 301, // Permanent redirect
      headers: {
        'Cache-Control': 'public, max-age=31536000',
      }
    });
  }
  
  // Default: redirect to base OG image
  return NextResponse.redirect(new URL('/api/og', request.url), {
    status: 301,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    }
  });
}