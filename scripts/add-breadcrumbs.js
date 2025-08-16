const fs = require('fs');
const path = require('path');

// Map of pages to their breadcrumb structure
const breadcrumbMap = {
  'app/roast-generator/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Roast Generator', url: '/roast-generator' }
  ],
  'app/blog/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ],
  'app/download/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Download', url: '/download' }
  ],
  'app/faq/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' }
  ],
  'app/support/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Support', url: '/support' }
  ],
  'app/privacy/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' }
  ],
  'app/terms/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' }
  ],
  'app/roast-examples/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Roast Examples', url: '/roast-examples' }
  ],
  'app/roast-styles/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Roast Styles', url: '/roast-styles' }
  ],
  'app/roast-styles/savage/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Roast Styles', url: '/roast-styles' },
    { name: 'Savage', url: '/roast-styles/savage' }
  ],
  'app/roast-styles/friendly/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Roast Styles', url: '/roast-styles' },
    { name: 'Friendly', url: '/roast-styles/friendly' }
  ],
  'app/roast-styles/shakespearean/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Roast Styles', url: '/roast-styles' },
    { name: 'Shakespearean', url: '/roast-styles/shakespearean' }
  ],
  'app/roast-styles/gen-z/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Roast Styles', url: '/roast-styles' },
    { name: 'Gen-Z', url: '/roast-styles/gen-z' }
  ],
  'app/instagram-profile-analyzer/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Instagram Tools', url: '/' },
    { name: 'Profile Analyzer', url: '/instagram-profile-analyzer' }
  ],
  'app/instagram-roaster/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Instagram Tools', url: '/' },
    { name: 'Instagram Roaster', url: '/instagram-roaster' }
  ],
  'app/instagram-bio-generator/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Instagram Tools', url: '/' },
    { name: 'Bio Generator', url: '/instagram-bio-generator' }
  ],
  'app/instagram-caption-generator/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Instagram Tools', url: '/' },
    { name: 'Caption Generator', url: '/instagram-caption-generator' }
  ],
  'app/instagram-engagement-calculator/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Instagram Tools', url: '/' },
    { name: 'Engagement Calculator', url: '/instagram-engagement-calculator' }
  ],
  'app/instagram-growth-hacks-2025/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/blog' },
    { name: 'Growth Hacks 2025', url: '/instagram-growth-hacks-2025' }
  ],
  'app/my-insta-personality/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Instagram Tools', url: '/' },
    { name: 'Personality Test', url: '/my-insta-personality' }
  ],
  'app/ai-profile-analyzer/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'AI Tools', url: '/' },
    { name: 'AI Profile Analyzer', url: '/ai-profile-analyzer' }
  ],
  'app/ai-roast-generator/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'AI Tools', url: '/' },
    { name: 'AI Roast Generator', url: '/ai-roast-generator' }
  ],
  'app/what-is-instagram-roasting/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/blog' },
    { name: 'What is Instagram Roasting', url: '/what-is-instagram-roasting' }
  ],
  'app/ultimate-guide-instagram-roasting/page.tsx': [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/blog' },
    { name: 'Ultimate Guide', url: '/ultimate-guide-instagram-roasting' }
  ]
};

// Process each file
Object.entries(breadcrumbMap).forEach(([filePath, breadcrumbs]) => {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${filePath} - file not found`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if BreadcrumbSchema is already imported
  if (content.includes('BreadcrumbSchema')) {
    console.log(`Skipping ${filePath} - already has BreadcrumbSchema`);
    return;
  }
  
  // Add import if not present
  if (!content.includes("import { BreadcrumbSchema }")) {
    // Find the last import statement
    const importMatch = content.match(/(import[\s\S]*?from\s+['"][^'"]+['"];?\s*\n)+/);
    if (importMatch) {
      const lastImportEnd = importMatch.index + importMatch[0].length;
      content = content.slice(0, lastImportEnd) + 
        "import { BreadcrumbSchema } from '@/components/SEO/BreadcrumbSchema';\n" +
        content.slice(lastImportEnd);
    }
  }
  
  // Add BreadcrumbSchema component after the opening of the return statement
  const returnMatch = content.match(/return\s*\(\s*(?:<>|<div|<main)/);
  if (returnMatch) {
    const insertPoint = content.indexOf(returnMatch[0]) + returnMatch[0].length;
    const breadcrumbItems = JSON.stringify(breadcrumbs, null, 2)
      .split('\n')
      .map((line, i) => i === 0 ? line : '        ' + line)
      .join('\n');
    
    const breadcrumbComponent = `
      <BreadcrumbSchema 
        items={${breadcrumbItems}}
      />
      `;
    
    // Check if there's already a fragment or div opening
    if (returnMatch[0].includes('<>')) {
      content = content.slice(0, insertPoint) + breadcrumbComponent + content.slice(insertPoint);
    } else {
      // Need to wrap in fragment
      const returnIndex = content.indexOf(returnMatch[0]);
      content = content.slice(0, returnIndex) + 
        'return (\n    <>\n      ' + breadcrumbComponent + 
        content.slice(insertPoint);
      
      // Find the closing tag and add fragment close
      const closeMatch = content.match(/(\s*<\/(?:div|main|section)>\s*\);?\s*}\s*$)/);
      if (closeMatch) {
        content = content.replace(closeMatch[0], closeMatch[0].replace(/(\s*\);?\s*}\s*$)/, '\n    </>\n$1'));
      }
    }
  }
  
  fs.writeFileSync(fullPath, content);
  console.log(`✅ Added BreadcrumbSchema to ${filePath}`);
});

console.log('Done!');