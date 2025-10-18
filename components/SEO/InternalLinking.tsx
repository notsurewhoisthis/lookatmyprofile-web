import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

// Related Posts Component for Blog
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  featuredImage: string;
  category: string;
  readTime: number;
}

export const RelatedPosts: React.FC<{
  currentSlug: string;
  posts: BlogPost[];
  maxPosts?: number;
}> = ({ currentSlug, posts, maxPosts = 3 }) => {
  // Filter out current post and get related ones
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {relatedPosts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group hover:shadow-lg transition-shadow rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="object-cover w-full h-48"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-indigo-600 font-semibold uppercase">
                {post.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {post.description}
              </p>
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <span>{post.readTime} min read</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// Popular Roast Styles Component
export const PopularRoastStyles: React.FC = () => {
  const styles = [
    {
      name: 'Savage',
      icon: <Zap className="w-5 h-5" />,
      description: 'No holds barred brutal honesty',
      href: '/roast-styles/savage',
      color: 'text-red-600'
    },
    {
      name: 'Witty',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Clever wordplay and smart humor',
      href: '/roast-styles/witty',
      color: 'text-blue-600'
    },
    {
      name: 'Gen-Z',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'No cap, straight bussin roasts fr',
      href: '/roast-styles/gen-z',
      color: 'text-purple-600'
    },
    {
      name: 'Friendly',
      icon: <Users className="w-5 h-5" />,
      description: 'Light-hearted fun without the burn',
      href: '/roast-styles/friendly',
      color: 'text-green-600'
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Popular Roast Styles</h3>
      <div className="space-y-3">
        {styles.map(style => (
          <Link
            key={style.name}
            href={style.href}
            className="flex items-start space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
          >
            <div className={`${style.color} mt-0.5`}>
              {style.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">
                {style.name}
              </h4>
              <p className="text-sm text-gray-600">{style.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/roast-styles"
        className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
      >
        View all styles
        <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

// CTA Component for inline promotions
export const InlineRoastCTA: React.FC<{ 
  variant?: 'default' | 'minimal' | 'banner' 
}> = ({ variant = 'default' }) => {
  if (variant === 'minimal') {
    return (
      <div className="my-8 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
        <p className="text-gray-900">
          Ready to get roasted? 
          <Link href="/download" className="ml-2 font-semibold text-indigo-600 hover:text-indigo-800">
            Download the app →
          </Link>
        </p>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="my-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Get Your Instagram Roasted!</h3>
        <p className="mb-6 text-indigo-100">
          Join thousands getting hilariously roasted by AI every day
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/download"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Download App
          </Link>
          <Link
            href="/roast-generator"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-colors"
          >
            Try Web Version
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Sparkles className="w-8 h-8 text-indigo-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Ready for a Reality Check?
          </h3>
          <p className="text-gray-600 mb-4">
            Get AI-powered roasts that'll make you laugh, cry, and question your life choices.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800"
          >
            Get a Full Roast
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Footer Links Optimization
export const OptimizedFooterLinks: React.FC = () => {
  const sections = [
    {
      title: 'Product',
      links: [
        { label: 'Download App', href: '/download' },
        { label: 'Roast Generator', href: '/roast-generator' },
        { label: 'Roast Styles', href: '/roast-styles' },
        { label: 'Examples', href: '/roast-examples' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Support', href: '/support' },
        { label: 'API Docs', href: '/api-docs' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Twitter', href: 'https://twitter.com/roastaprofile', external: true },
        { label: 'Instagram', href: 'https://instagram.com/roastaprofile', external: true },
        { label: 'TikTok', href: 'https://tiktok.com/@roastaprofile', external: true },
        { label: 'Discord', href: 'https://discord.gg/roastaprofile', external: true }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {sections.map(section => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.links.map(link => (
              <li key={link.href}>
                {'external' in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-indigo-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
