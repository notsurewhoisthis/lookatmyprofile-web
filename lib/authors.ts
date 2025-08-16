export interface Author {
  slug: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  expertise: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
  credentials: string[];
  publications: number;
  joinedDate: string;
}

export const authors: Record<string, Author> = {
  'roast-master': {
    slug: 'roast-master',
    name: 'Roast Master',
    bio: 'Chief Comedy Officer at Roast a Profile. Expert in social media psychology, digital humor, and AI-powered content analysis. Over 10 years of experience in creating viral content and analyzing social media trends.',
    avatar: '/authors/roast-master.jpg',
    role: 'Chief Comedy Officer',
    expertise: ['Instagram Analysis', 'Digital Humor', 'Social Media Psychology', 'AI Content Generation'],
    social: {
      twitter: '@roastmaster',
      instagram: '@roastaprofile',
      linkedin: 'roast-master'
    },
    credentials: [
      'M.A. in Digital Media Psychology',
      'Certified Social Media Strategist',
      '10+ years in content creation',
      'Published researcher in online behavior'
    ],
    publications: 52,
    joinedDate: '2023-01-01'
  },
  'alex-morgan': {
    slug: 'alex-morgan',
    name: 'Alex Morgan',
    bio: 'Senior Content Strategist specializing in Gen Z social media trends and viral content creation. Former Instagram growth consultant with expertise in engagement psychology.',
    avatar: '/authors/alex-morgan.jpg',
    role: 'Senior Content Strategist',
    expertise: ['Gen Z Trends', 'Viral Content', 'Instagram Growth', 'Meme Culture'],
    social: {
      twitter: '@alexmorgancontent',
      instagram: '@alexcreates',
      website: 'https://alexmorgan.io'
    },
    credentials: [
      'B.A. in Communications',
      'Instagram Marketing Certified',
      '5+ years growth consulting',
      'Speaker at Social Media Week'
    ],
    publications: 28,
    joinedDate: '2023-06-15'
  },
  'sam-rivera': {
    slug: 'sam-rivera',
    name: 'Sam Rivera',
    bio: 'AI and Machine Learning specialist focused on natural language processing and humor generation. Developer of the core roasting algorithm that powers Roast a Profile.',
    avatar: '/authors/sam-rivera.jpg',
    role: 'Lead AI Engineer',
    expertise: ['Machine Learning', 'NLP', 'Humor AI', 'Content Analysis'],
    social: {
      twitter: '@samrivera_ai',
      linkedin: 'samuelrivera',
      website: 'https://samrivera.dev'
    },
    credentials: [
      'Ph.D. in Computer Science',
      'AI/ML Research Published',
      'Former Google AI Team',
      'TensorFlow Contributor'
    ],
    publications: 15,
    joinedDate: '2023-03-10'
  }
};

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}

export function getAllAuthors(): Author[] {
  return Object.values(authors);
}

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find(author => 
    author.name.toLowerCase() === name.toLowerCase()
  );
}