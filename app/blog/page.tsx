import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog - Instagram Roasting Tips & Social Media Humor | Roast a Profile',
  description: 'Learn the art of Instagram roasting, social media psychology, and digital humor. Expert tips, guides, and insights from the Roast a Profile team.',
  keywords: 'instagram roasting blog, social media humor, roasting tips, instagram psychology, digital culture',
  openGraph: {
    title: 'Roast a Profile Blog - Master the Art of Digital Roasting',
    description: 'Expert insights on Instagram culture, roasting techniques, and social media psychology.',
    url: 'https://www.lookatmyprofile.org/blog',
  }
};

// In a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: 'psychology-of-instagram-roasting',
    title: 'The Psychology Behind Instagram Roasting: Why We Love to Be Teased',
    excerpt: 'Discover why millions of people voluntarily submit their profiles for AI roasting and what it reveals about human nature and social media culture.',
    author: 'Dr. Sarah Chen',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Psychology',
    image: '/blog/psychology-roasting.jpg'
  },
  {
    id: 2,
    slug: 'ultimate-guide-roast-battles',
    title: 'The Ultimate Guide to Instagram Roast Battles',
    excerpt: 'Learn how to win roast battles with friends, the best strategies for comebacks, and how to keep it fun without crossing the line.',
    author: 'Mike Rodriguez',
    date: '2025-01-12',
    readTime: '7 min read',
    category: 'Guides',
    image: '/blog/roast-battles.jpg'
  },
  {
    id: 3,
    slug: 'ai-humor-evolution',
    title: 'How AI Learned to Be Funny: The Evolution of Digital Humor',
    excerpt: 'From simple puns to complex personality analysis, explore how artificial intelligence developed the ability to create genuinely funny content.',
    author: 'Tech Team',
    date: '2025-01-10',
    readTime: '8 min read',
    category: 'Technology',
    image: '/blog/ai-humor.jpg'
  },
  {
    id: 4,
    slug: 'instagram-personality-types',
    title: '8 Instagram Personality Types: Which One Are You?',
    excerpt: 'Our AI analyzed 50,000 profiles to identify the most common Instagram personalities. Find out which type you are and what it says about you.',
    author: 'Data Science Team',
    date: '2025-01-08',
    readTime: '6 min read',
    category: 'Research',
    image: '/blog/personality-types.jpg'
  },
  {
    id: 5,
    slug: 'gen-z-humor-explained',
    title: 'Gen Z Humor Explained: A Guide for Confused Millennials',
    excerpt: 'No cap, this guide will help you understand why Gen Z finds certain things funny and how their humor differs from previous generations.',
    author: 'Emma Thompson',
    date: '2025-01-05',
    readTime: '5 min read',
    category: 'Culture',
    image: '/blog/gen-z-humor.jpg'
  },
  {
    id: 6,
    slug: 'roasting-etiquette-101',
    title: 'Roasting Etiquette 101: How to Be Funny Without Being Mean',
    excerpt: 'Learn the unwritten rules of roasting, where to draw the line, and how to ensure everyone has fun without hurt feelings.',
    author: 'Community Team',
    date: '2025-01-03',
    readTime: '4 min read',
    category: 'Guides',
    image: '/blog/etiquette.jpg'
  }
];

const categories = ['All', 'Psychology', 'Guides', 'Technology', 'Research', 'Culture'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Roast a Profile
          </Link>
          <div className="flex gap-6">
            <Link href="/roast-generator" className="hover:text-purple-400 transition">Roast Generator</Link>
            <Link href="/roast-styles" className="hover:text-purple-400 transition">Roast Styles</Link>
            <Link href="/download" className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition">Download App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            The Roast a Profile Blog
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Expert insights on Instagram culture, AI humor, and the psychology of social media. 
            Learn to roast like a pro.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition ${
                category === 'All'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
              <Link href={`/blog/${post.slug}`}>
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-6xl opacity-50">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="bg-purple-600/20 px-3 py-1 rounded-full">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-purple-400 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get Weekly Roasting Tips</h2>
          <p className="text-gray-300 mb-6">
            Join 50,000+ subscribers learning the art of digital humor. 
            Plus, get exclusive app features and early access to new roast styles.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Popular Posts Sidebar */}
      <section className="container mx-auto px-4 py-20 bg-black/30">
        <h2 className="text-3xl font-bold text-center mb-12">Most Popular Posts</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex items-center gap-6 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition"
            >
              <span className="text-4xl font-bold text-purple-400">#{index + 1}</span>
              <div className="flex-1">
                <h3 className="font-bold mb-1">{post.title}</h3>
                <p className="text-sm text-gray-400">{post.readTime} • {post.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 Roast a Profile. All content original.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
            <Link href="/rss" className="text-gray-400 hover:text-white transition">RSS Feed</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}