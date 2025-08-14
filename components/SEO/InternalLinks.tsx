import Link from 'next/link';

interface InternalLinkSection {
  title: string;
  links: Array<{
    href: string;
    text: string;
    description?: string;
  }>;
}

export const popularPages = {
  tools: [
    { href: '/roast-generator', text: 'Roast Generator', description: 'Generate instant roasts' },
    { href: '/ai-roast-generator', text: 'AI Roast Generator', description: 'Advanced AI-powered roasting' },
    { href: '/instagram-profile-analyzer', text: 'Profile Analyzer', description: 'Analyze Instagram profiles' },
    { href: '/free-instagram-roast-generator-no-signup', text: 'Free Generator', description: 'No signup required' },
  ],
  guides: [
    { href: '/ultimate-guide-instagram-roasting', text: 'Ultimate Guide', description: 'Complete roasting guide' },
    { href: '/how-to-roast-someone-on-instagram', text: 'How to Roast', description: 'Step-by-step tutorial' },
    { href: '/what-is-instagram-roasting', text: 'What is Roasting?', description: 'Learn the basics' },
    { href: '/funny-things-to-comment-on-instagram', text: 'Funny Comments', description: '500+ comment ideas' },
  ],
  styles: [
    { href: '/roast-styles/savage', text: 'Savage Roasts', description: 'Maximum brutality' },
    { href: '/roast-styles/friendly', text: 'Friendly Roasts', description: 'Playful and fun' },
    { href: '/roast-styles/gen-z', text: 'Gen Z Style', description: 'Modern slang roasts' },
    { href: '/roast-styles/shakespearean', text: 'Shakespearean', description: 'Classical insults' },
  ],
  examples: [
    { href: '/roast-examples', text: 'Roast Examples', description: 'See real roasts' },
    { href: '/savage-instagram-roasts-examples', text: 'Savage Examples', description: 'Brutal roast examples' },
    { href: '/gen-z-roast-generator-online', text: 'Gen Z Generator', description: 'Modern roasts' },
  ],
  comparisons: [
    { href: '/vs-cleve-ai', text: 'vs Cleve AI', description: 'Compare features' },
    { href: '/vs-olly-social', text: 'vs Olly Social', description: 'See differences' },
  ]
};

export function InternalLinksSection({ 
  sections,
  className = ''
}: { 
  sections: InternalLinkSection[];
  className?: string;
}) {
  return (
    <div className={`grid md:grid-cols-${sections.length} gap-6 ${className}`}>
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold mb-3 text-purple-400">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {link.text}
                  {link.description && (
                    <span className="block text-xs text-gray-500">{link.description}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function QuickLinks({ 
  category,
  exclude = [],
  limit = 4,
  className = ''
}: { 
  category: keyof typeof popularPages;
  exclude?: string[];
  limit?: number;
  className?: string;
}) {
  const links = popularPages[category]
    .filter(link => !exclude.includes(link.href))
    .slice(0, limit);

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <Link 
          key={link.href}
          href={link.href}
          className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export function RelatedContent({ 
  currentPage,
  className = ''
}: { 
  currentPage: string;
  className?: string;
}) {
  // Smart related content based on current page
  let relatedSections: InternalLinkSection[] = [];
  
  if (currentPage.includes('roast-generator') || currentPage.includes('ai-roast')) {
    relatedSections = [
      { title: 'Roast Styles', links: popularPages.styles.slice(0, 3) },
      { title: 'Learn More', links: popularPages.guides.slice(0, 3) },
      { title: 'Examples', links: popularPages.examples.slice(0, 3) },
    ];
  } else if (currentPage.includes('guide') || currentPage.includes('how-to')) {
    relatedSections = [
      { title: 'Try It Out', links: popularPages.tools.slice(0, 3) },
      { title: 'More Guides', links: popularPages.guides.filter(l => !l.href.includes(currentPage)).slice(0, 3) },
      { title: 'Examples', links: popularPages.examples.slice(0, 3) },
    ];
  } else if (currentPage.includes('style')) {
    relatedSections = [
      { title: 'Other Styles', links: popularPages.styles.filter(l => !l.href.includes(currentPage)).slice(0, 3) },
      { title: 'Generators', links: popularPages.tools.slice(0, 3) },
      { title: 'Examples', links: popularPages.examples.slice(0, 3) },
    ];
  } else if (currentPage.includes('vs-')) {
    relatedSections = [
      { title: 'Our Tools', links: popularPages.tools.slice(0, 3) },
      { title: 'Comparisons', links: popularPages.comparisons.filter(l => !l.href.includes(currentPage)) },
      { title: 'Learn More', links: popularPages.guides.slice(0, 3) },
    ];
  } else {
    // Default related content
    relatedSections = [
      { title: 'Popular Tools', links: popularPages.tools.slice(0, 3) },
      { title: 'Guides', links: popularPages.guides.slice(0, 3) },
      { title: 'Roast Styles', links: popularPages.styles.slice(0, 3) },
    ];
  }

  return (
    <section className={`py-12 ${className}`}>
      <h2 className="text-2xl font-bold mb-8">Related Pages</h2>
      <InternalLinksSection sections={relatedSections} />
    </section>
  );
}

export function FooterLinks() {
  return (
    <div className="grid md:grid-cols-5 gap-8">
      <div>
        <h3 className="font-semibold mb-3 text-purple-400">Generators</h3>
        <ul className="space-y-2">
          {popularPages.tools.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3 text-purple-400">Roast Styles</h3>
        <ul className="space-y-2">
          {popularPages.styles.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3 text-purple-400">Guides</h3>
        <ul className="space-y-2">
          {popularPages.guides.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3 text-purple-400">Examples</h3>
        <ul className="space-y-2">
          {popularPages.examples.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                {link.text}
              </Link>
            </li>
          ))}
          {popularPages.comparisons.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3 text-purple-400">Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/blog" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/download" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Download App
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/support" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Contextual inline links for use in content
export const contextualLinks = {
  roastGenerator: <Link href="/roast-generator" className="text-purple-400 hover:text-purple-300">roast generator</Link>,
  aiRoastGenerator: <Link href="/ai-roast-generator" className="text-purple-400 hover:text-purple-300">AI roast generator</Link>,
  profileAnalyzer: <Link href="/instagram-profile-analyzer" className="text-purple-400 hover:text-purple-300">Instagram profile analyzer</Link>,
  ultimateGuide: <Link href="/ultimate-guide-instagram-roasting" className="text-purple-400 hover:text-purple-300">ultimate guide</Link>,
  freeGenerator: <Link href="/free-instagram-roast-generator-no-signup" className="text-purple-400 hover:text-purple-300">free roast generator</Link>,
  genZGenerator: <Link href="/gen-z-roast-generator-online" className="text-purple-400 hover:text-purple-300">Gen Z roast generator</Link>,
  savageStyle: <Link href="/roast-styles/savage" className="text-purple-400 hover:text-purple-300">savage roasts</Link>,
  downloadApp: <Link href="/download" className="text-purple-400 hover:text-purple-300">download our app</Link>,
};