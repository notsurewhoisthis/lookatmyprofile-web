import Link from 'next/link';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

// Common redirect patterns for 404s
const REDIRECT_MAP: Record<string, string> = {
  // Old blog URL patterns
  '/blog-post/': '/blog/',
  '/article/': '/blog/',
  '/post/': '/blog/',

  // Old tool patterns
  '/tool/': '/tools/',
  '/generator/': '/roast-generator',

  // Common typos
  '/blogg': '/blog',
  '/dowload': '/download',

  // Add more as we discover them from GSC
};

// Redirect rules
function getRedirectPath(pathname: string): string | null {
  // Check exact matches first
  const exactRedirects: Record<string, string> = {
    '/home': '/',
    '/index': '/',
    '/index.html': '/',
  };

  if (exactRedirects[pathname]) {
    return exactRedirects[pathname];
  }

  // Check pattern matches
  for (const [pattern, replacement] of Object.entries(REDIRECT_MAP)) {
    if (pathname.includes(pattern)) {
      return pathname.replace(pattern, replacement);
    }
  }

  // Handle trailing slashes
  if (pathname.endsWith('/') && pathname.length > 1) {
    return pathname.slice(0, -1);
  }

  return null;
}

export default async function NotFound() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';

  // Check for redirect opportunities
  const redirectPath = getRedirectPath(pathname);
  if (redirectPath) {
    redirect(redirectPath);
  }

  // Log 404 for monitoring (in production, send to analytics)
  if (process.env.NODE_ENV === 'production') {
    console.log('[404]', pathname, new Date().toISOString());
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8">
          This page doesn't exist or may have been moved.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/blog"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-semibold"
          >
            📚 Browse Blog
          </Link>
          <Link
            href="/roast-generator"
            className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            🔥 Try Roast Generator
          </Link>
        </div>

        <div className="space-y-2 text-gray-400">
          <p>Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link href="/pricing" className="hover:text-purple-400 transition-colors">Get a Full Roast</Link>
            <Link href="/how-to-roast-someone-on-instagram" className="hover:text-purple-400 transition-colors">How to Roast</Link>
            <Link href="/roast-glossary" className="hover:text-purple-400 transition-colors">Roast Glossary</Link>
            <Link href="/instagram-roasting-report-2025" className="hover:text-purple-400 transition-colors">2025 Report</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
