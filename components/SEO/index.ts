// SEO Component Library - Central export file

// Meta and Canonical
export { MetaTags, generateTitle, generateDescription } from './MetaTags';
export { CanonicalUrl, getCanonicalUrl } from './CanonicalUrl';

// Structured Data
export {
  JsonLd,
  HowToRoastSchema,
  EnhancedFAQSchema,
  LocalAppSchema,
  WebPageSchema
} from './JsonLd';

// Navigation
export { Breadcrumbs, PageBreadcrumbs } from './Breadcrumbs';

// Internal Linking
export {
  RelatedPosts,
  PopularRoastStyles,
  InlineRoastCTA,
  OptimizedFooterLinks
} from './InternalLinking';