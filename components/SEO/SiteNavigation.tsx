import Link from 'next/link';

export const siteLinks = {
  core: [
    { href: '/', label: 'Home', priority: 1 },
    { href: '/roast-generator', label: 'Roast Generator', priority: 1 },
    { href: '/celebrity-roasts', label: 'Celebrity Roasts', priority: 1 },
    { href: '/tools', label: 'Instagram Tools', priority: 1 },
    { href: '/download', label: 'Download App', priority: 1 },
    { href: '/blog', label: 'Blog', priority: 1 },
  ],
  celebrityRoasts: [
    { href: '/celebrity-roasts', label: 'All Celebrities' },
    { href: '/celebrity-roasts/cristiano-instagram-roast-savage', label: 'Cristiano Ronaldo' },
    { href: '/celebrity-roasts/selenagomez-instagram-roast-funny', label: 'Selena Gomez' },
    { href: '/celebrity-roasts/therock-instagram-roast-gen-z', label: 'The Rock' },
    { href: '/celebrity-roasts/taylorswift-instagram-roast-savage', label: 'Taylor Swift' },
    { href: '/celebrity-roasts/mrbeast-instagram-roast-savage', label: 'MrBeast' },
  ],
  toolCategories: [
    { href: '/tools', label: 'All Tools (500+)' },
    { href: '/tools/username-generator', label: 'Username Ideas (120)' },
    { href: '/tools/bio-generator', label: 'Bio Templates (250)' },
    { href: '/tools/caption-generator', label: 'Caption Ideas (50)' },
    { href: '/tools/hashtag-generator', label: 'Hashtag Sets (30)' },
    { href: '/tools/roast-generator', label: 'Roast Types (40)' },
    { href: '/tools/personality-analyzer', label: 'Personality Tests (10)' },
  ],
  tools: [
    { href: '/roast-generator', label: 'AI Roast Generator' },
    { href: '/instagram-bio-generator', label: 'Bio Generator' },
    { href: '/instagram-caption-generator', label: 'Caption Generator' },
    { href: '/my-insta-personality', label: 'Personality Test' },
    { href: '/instagram-engagement-calculator', label: 'Engagement Calculator' },
    { href: '/instagram-profile-analyzer', label: 'Profile Analyzer' },
  ],
  roastStyles: [
    { href: '/roast-styles', label: 'All Roast Styles' },
    { href: '/roast-styles/savage', label: 'Savage Mode' },
    { href: '/roast-styles/friendly', label: 'Friendly Fire' },
    { href: '/roast-styles/shakespearean', label: 'Shakespearean' },
    { href: '/roast-styles/gen-z', label: 'Gen Z' },
  ],
  content: [
    { href: '/roast-examples', label: 'Roast Examples' },
    { href: '/roast-glossary', label: 'Roasting Dictionary' },
    { href: '/roast-my-ex', label: 'Roast My Ex' },
    { href: '/what-is-instagram-roasting', label: 'What is Roasting?' },
    { href: '/reels-hub', label: 'Roast Reels Hub' },
    { href: '/roast-challenges', label: 'Roast Me Royale' },
    { href: '/roast-intel', label: 'Roast Intelligence' }
  ],
  topics: [
    { href: '/topics', label: 'Knowledge Hub' },
    { href: '/topics/instagram-psychology', label: 'Instagram Psychology' },
    { href: '/topics/social-media-humor', label: 'Social Media Humor' },
  ],
  guides: [
    { href: '/ultimate-guide-instagram-roasting', label: 'Ultimate Guide' },
    { href: '/how-to-roast-someone-on-instagram', label: 'How to Roast' },
    { href: '/funny-things-to-comment-on-instagram', label: 'Funny Comments' },
    { href: '/instagram-growth-hacks-2025', label: 'Growth Hacks 2025' },
  ],
  seo: [
    { href: '/free-instagram-roast-generator-no-signup', label: 'Free Generator' },
    { href: '/gen-z-roast-generator-online', label: 'Gen Z Generator' },
    { href: '/savage-instagram-roasts-examples', label: 'Savage Examples' },
    { href: '/ai-roast-generator', label: 'AI Generator' },
    { href: '/roast-personas', label: 'Persona Landing Pages' }
  ],
  comparison: [
    { href: '/vs-cleve-ai', label: 'vs Cleve AI' },
    { href: '/vs-olly-social', label: 'vs Olly Social' },
  ],
  authors: [
    { href: '/authors', label: 'All Authors' },
    { href: '/authors/roast-master', label: 'Roast Master' },
    { href: '/authors/alex-morgan', label: 'Alex Morgan' },
    { href: '/authors/sam-rivera', label: 'Sam Rivera' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/support', label: 'Support' },
    { href: '/faq', label: 'FAQ' },
  ]
};

interface FooterNavigationProps {
  currentPath?: string;
}

export function FooterNavigation({ currentPath }: FooterNavigationProps) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {/* AI Tools Column */}
          <div>
            <h3 className="font-bold text-white mb-4">AI Tools</h3>
            <ul className="space-y-2">
              {siteLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tool Categories Column */}
          <div>
            <h3 className="font-bold text-white mb-4">500+ Tools</h3>
            <ul className="space-y-2">
              {siteLinks.toolCategories.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Celebrity Roasts Column */}
          <div>
            <h3 className="font-bold text-white mb-4">Celebrities</h3>
            <ul className="space-y-2">
              {siteLinks.celebrityRoasts.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roast Styles Column */}
          <div>
            <h3 className="font-bold text-white mb-4">Roast Styles</h3>
            <ul className="space-y-2">
              {siteLinks.roastStyles.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Column */}
          <div>
            <h3 className="font-bold text-white mb-4">Content</h3>
            <ul className="space-y-2">
              {siteLinks.content.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {siteLinks.topics.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides Column */}
          <div>
            <h3 className="font-bold text-white mb-4">Guides</h3>
            <ul className="space-y-2">
              {siteLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blog"
                  className="text-gray-400 hover:text-purple-400 transition text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/authors"
                  className="text-gray-400 hover:text-purple-400 transition text-sm"
                >
                  Authors
                </Link>
              </li>
              {siteLinks.comparison.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {siteLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`text-gray-400 hover:text-purple-400 transition text-sm ${
                      currentPath === link.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 LookAtMyProfile.org - The Ultimate AI Instagram Roaster
            </p>
            <div className="flex gap-4">
              <Link href="/download" className="text-purple-400 hover:text-purple-300 text-sm">
                Get a Full Roast
              </Link>
              <Link href="/roast-generator" className="text-purple-400 hover:text-purple-300 text-sm">
                Try Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface RelatedLinksProps {
  category: 'tools' | 'styles' | 'content' | 'guides';
  currentPath: string;
  limit?: number;
}

export function RelatedLinks({ category, currentPath, limit = 5 }: RelatedLinksProps) {
  const links = {
    tools: siteLinks.tools,
    styles: siteLinks.roastStyles,
    content: [...siteLinks.content, ...siteLinks.topics],
    guides: siteLinks.guides,
  }[category];

  const filteredLinks = links
    .filter(link => link.href !== currentPath)
    .slice(0, limit);

  return (
    <div className="bg-gray-800/30 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-white">Related Pages</h3>
      <ul className="space-y-3">
        {filteredLinks.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="text-purple-400 hover:text-purple-300 transition flex items-center gap-2"
            >
              <span>→</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface InlineLinksProps {
  links: Array<{ href: string; label: string }>;
  title?: string;
}

export function InlineLinks({ links, title = "Popular Pages" }: InlineLinksProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
