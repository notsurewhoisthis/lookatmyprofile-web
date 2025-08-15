# LookAtMyProfile.org - Comprehensive Project Overview

## 🎯 Project Purpose
**LookAtMyProfile.org** is an SEO-optimized web application that serves as a marketing funnel for the "Roast a Profile" iOS/Android app. The site generates humorous AI-powered roasts of Instagram profiles while driving organic traffic and app downloads.

## 🏗️ Technical Architecture

### Tech Stack
- **Framework**: Next.js 15.4.5 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Lucide React icons
- **Deployment**: Heroku (web dyno)
- **Repository**: GitHub (dual remote setup)
- **Analytics**: Google Analytics 4 (ID: G-FMHXYGPTF1)

### Project Structure
```
/app                    # Next.js 15 app directory
  /api                  # API routes (blog webhook, OG images, revalidation)
  /blog                 # Blog system with dynamic routing
  /[various-pages]      # 30+ static SEO landing pages
/components            
  /SEO                  # Comprehensive SEO component library
/lib                    # Core utilities and blog adapters
/public
  /blog-data           # 52 JSON blog posts (GitHub source of truth)
```

## 🚀 Core Features

### 1. SEO-Optimized Landing Pages (30+ pages)
- **Homepage**: Main conversion funnel
- **Roast Generator Pages**: Interactive roast generation tools
- **Style Pages**: Different roasting styles (Savage, Friendly, Gen Z, Shakespearean)
- **Comparison Pages**: vs-cleve-ai, vs-olly-social
- **Educational Content**: Ultimate guide, how-to pages, examples
- **Utility Pages**: FAQ, Privacy, Terms, Support

### 2. Automated Blog System (52 posts)
- **n8n Workflow Integration**: Automated content creation pipeline
- **GitHub as Source**: All blog posts stored in GitHub repository
- **Dynamic Rendering**: Server-side rendered blog pages
- **SEO Optimization**: Each post has meta tags, schema markup, internal links

### 3. Advanced SEO Implementation
- **Structured Data**: FAQ, HowTo, Review, BreadcrumbList, Organization schemas
- **Meta Tags**: Dynamic OG images, Twitter cards, canonical URLs
- **Internal Linking**: Comprehensive footer links, related content components
- **Performance**: Lazy-loaded analytics, optimized images, resource hints
- **Sitemap**: Dynamic generation for 80+ pages
- **Robots.txt**: AI crawler optimization

### 4. Key Components
- **Analytics.tsx**: GA4 integration with Web Vitals tracking
- **FAQSchema.tsx**: Context-aware FAQ structured data
- **InternalLinkFooter.tsx**: Reusable navigation component
- **ReviewSchema.tsx**: 4.8/5 rating with 2384 reviews
- **MetaTags.tsx**: Comprehensive meta tag management

## 📊 Business Metrics
- **Pages**: 80+ (30 static + 52 blog posts)
- **SEO Score**: 9.8/10 (after Jan 2025 optimization)
- **Target Keywords**: 
  - "AI roast generator" (10K+ monthly searches)
  - "Instagram profile analyzer" (5K+ monthly searches)
  - "Instagram roasting" variations
- **Social Proof**: 2M+ roasts generated, 4.8/5 App Store rating

## 🔄 Deployment Workflow

### Git Remotes
- **origin**: Heroku deployment (https://git.heroku.com/lookatmyprofile-web.git)
- **github**: Source repository (https://github.com/notsurewhoisthis/lookatmyprofile-web.git)

### Blog Publishing Workflow
1. n8n workflow creates blog post JSON
2. Pushes to GitHub repository
3. Pull changes locally: `git pull github main`
4. Deploy to Heroku: `git push origin main`

### Critical Commands
```bash
# Deploy to production
git push origin main

# Sync with GitHub
git pull github main
git push github main

# Start development
npm run dev

# Build for production
npm run build

# Run production server
npm start (uses $PORT env variable)
```

## ⚠️ Critical Implementation Notes

### Must Remember
1. **GitHub is Source of Truth**: Always verify blog posts on GitHub before making changes
2. **GA4 ID**: Must be G-FMHXYGPTF1 (not placeholder)
3. **OG Images**: Use absolute URLs (https://www.lookatmyprofile.org/...)
4. **Next.js 15**: Separate viewport and themeColor exports
5. **Blog Count**: 52 posts as of Jan 2025 (verify on GitHub)
6. **Internal Linking**: All pages must use InternalLinkFooter component

### API Endpoints
- `/api/blog/webhook`: n8n webhook for blog creation
- `/api/og`: Dynamic OG image generation
- `/api/revalidate`: ISR cache revalidation
- `/sitemap.xml`: Dynamic sitemap generation
- `/robots.txt`: Dynamic robots configuration

### Environment Variables
- `PORT`: Heroku port binding
- `N8N_WEBHOOK_SECRET`: Blog webhook authentication
- `NEXT_PUBLIC_URL`: Production URL for absolute paths

## 🎨 Design Patterns

### Color Scheme
- Primary: Purple to Pink gradient
- Background: Gray-900 to Black gradient
- Accent: Purple-600, Pink-400
- Text: White on dark backgrounds

### Component Patterns
- Gradient text using bg-clip-text
- Hover effects with transition classes
- Card components with gray-800 backgrounds
- CTA buttons with gradient backgrounds

## 📈 SEO Strategy

### Content Strategy
- **Pillar Content**: Ultimate guide with 8 chapters
- **Keyword Targeting**: Long-tail and short-tail mix
- **Internal Linking**: Every page links to 5+ related pages
- **Fresh Content**: Automated blog posts via n8n

### Technical SEO
- **Core Web Vitals**: Optimized with lazy loading
- **Mobile First**: Responsive design throughout
- **HTTPS**: Enforced via security headers
- **XML Sitemap**: Auto-generated with priorities
- **Schema Markup**: Multiple types per page

## 🔧 Maintenance Notes

### Regular Tasks
- Monitor Google Search Console for indexing
- Check blog webhook health endpoint
- Verify GitHub-Heroku sync
- Update sitemap priorities based on analytics
- Review and update internal links

### Common Issues
- Blog posts not appearing: Check GitHub first
- OG images broken: Verify absolute URLs
- Analytics not tracking: Check GA4 ID
- Deploy fails: Ensure PORT env variable set

## 📚 Documentation
- Main README: Comprehensive handover documentation
- CLAUDE.md: AI assistant instructions
- SEO memories: Implementation summaries stored in Serena

This project is a sophisticated SEO-optimized web application with automated content generation, designed to drive organic traffic and app downloads through strategic keyword targeting and comprehensive internal linking.