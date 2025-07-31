# CLAUDE.md

## Project Overview
This is the "Roast a Profile" SEO website - a comprehensive Next.js application designed to drive organic traffic and app downloads for the AI Instagram Profile Roaster iOS app.

**Domain**: https://www.lookatmyprofile.org/
**Purpose**: SEO-optimized website to attract users searching for Instagram roasting/analysis tools and convert them to iOS app downloads
**Tech Stack**: Next.js 15.4.5, TypeScript, Tailwind CSS, deployed on Heroku

## Architecture

### Technology Stack
- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with dark theme and gradient design
- **Deployment**: Heroku (deployed to `instagram-profile-analyzer` app)
- **Package Manager**: npm

### Key Features
- 24 SEO-optimized pages targeting Instagram roasting keywords
- Server-side rendering for optimal SEO performance
- Mobile-first responsive design
- Dynamic sitemap generation
- Comprehensive metadata implementation
- Internal linking structure for SEO juice flow

## Project Structure

```
/Users/heni/SEO/web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── roast-generator/   # Main tool page
│   ├── roast-styles/      # Style-specific landing pages
│   │   ├── savage/
│   │   ├── friendly/
│   │   ├── shakespearean/
│   │   └── gen-z/
│   ├── blog/              # Content hub (6 blog posts)
│   │   ├── psychology-of-instagram-roasting/
│   │   ├── ultimate-guide-roast-battles/
│   │   ├── ai-humor-evolution/
│   │   ├── instagram-personality-types/
│   │   ├── gen-z-humor-explained/
│   │   └── roasting-etiquette-101/
│   ├── download/          # App download page
│   ├── faq/               # Frequently asked questions
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── support/           # Support page
│   ├── sitemap.xml/       # Dynamic sitemap route
│   └── robots.txt/        # Robots.txt route
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── AppDownloadCTA.tsx
├── package.json           # Dependencies and scripts
├── Procfile              # Heroku deployment config
└── next.config.ts        # Next.js configuration
```

## Development Workflow

### Local Development
```bash
cd /Users/heni/SEO/web
npm install
npm run dev
```
Access at http://localhost:3000

### Building
```bash
npm run build
npm start
```

### Deployment
The site is deployed to Heroku under the `instagram-profile-analyzer` app:
```bash
cd /Users/heni/SEO/web
git add .
git commit -m "Your commit message"
git push heroku main
```

## Key Implementation Details

### SEO Optimization
- **Metadata**: Comprehensive Open Graph and Twitter Card implementation in `app/layout.tsx`
- **Sitemap**: Dynamic XML sitemap at `/sitemap.xml`
- **Robots.txt**: Properly configured for search engine crawling
- **Internal Linking**: Every page includes strategic internal links
- **Page Speed**: Optimized with Tailwind CSS and Next.js performance features

### Content Strategy
- **Homepage**: High-conversion landing page with clear value proposition
- **Tool Pages**: Dedicated pages for roast generator and analyzer
- **Style Pages**: Individual landing pages for each roast style (Savage, Friendly, Shakespearean, Gen-Z)
- **Blog**: 6 comprehensive articles targeting long-tail keywords
- **Utility Pages**: FAQ, Privacy, Terms, Support for trust signals

### Design System
- **Theme**: Dark mode with vibrant gradients (purple to pink)
- **Typography**: Geist Sans for body, Geist Mono for code
- **Colors**: 
  - Primary: Purple (#6366f1)
  - Secondary: Pink (#ec4899)
  - Background: Dark grays (#0a0a0a, #1a1a1a)
- **Components**: Consistent header, footer, and CTA components

## Important Files

### Core Configuration
- **package.json**: Contains all dependencies and scripts. Note the `start` script uses `$PORT` for Heroku
- **Procfile**: Specifies `web: npm start` for Heroku deployment
- **app/layout.tsx**: Root layout with global metadata configuration

### Dynamic Routes
- **app/sitemap.xml/route.ts**: Generates XML sitemap with all pages
- **app/robots.txt/route.ts**: Returns robots.txt content

### Key Components
- **components/Header.tsx**: Navigation with mobile menu
- **components/Footer.tsx**: Footer with all important links
- **components/AppDownloadCTA.tsx**: Reusable download call-to-action

## Deployment Notes

### Heroku Configuration
- App Name: `instagram-profile-analyzer`
- Domain: https://www.lookatmyprofile.org/ (connected via DNS)
- Build Pack: Node.js
- Environment: Production

### Common Issues & Solutions
1. **JSX Syntax Errors**: Escape special characters (e.g., `< 2 hrs` → `&lt; 2 hrs`)
2. **Sitemap Export**: Use GET function export, not default export
3. **OpenGraph Metadata**: Keep properties flat, not nested
4. **Port Configuration**: Always use `$PORT` environment variable for Heroku

## Future Enhancements

### Planned Features (from PROJECT_PLAN.md)
- n8n workflow automation for content generation
- Analytics integration (Google Analytics 4)
- A/B testing framework
- Progressive Web App features
- API integration for live roasting

### SEO Improvements
- Schema.org markup implementation
- Voice search optimization
- Video content integration
- International SEO (multi-language support)

## Maintenance

### Regular Tasks
- Monitor Core Web Vitals
- Update blog content monthly
- Check for broken links
- Review and update meta descriptions
- Monitor keyword rankings
- Analyze user behavior and optimize conversion paths

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Heroku metrics
- Check mobile responsiveness
- Test all CTAs and forms regularly

## Context for AI Assistants

When working on this codebase:
1. **Always maintain SEO focus** - Every change should consider SEO impact
2. **Preserve the dark theme** - Keep the gradient aesthetic consistent
3. **Mobile-first approach** - Test all changes on mobile viewports
4. **Performance matters** - Keep bundle size minimal, optimize images
5. **Content quality** - All new content should match the fun, Gen-Z friendly tone
6. **Test locally first** - Always run `npm run build` before deploying

## Related Documentation
- `/Users/heni/SEO/TECHNICAL_SEO_IMPLEMENTATION.md` - Detailed SEO strategy
- `/Users/heni/SEO/WEBSITE_STRUCTURE.md` - Site architecture details
- `/Users/heni/SEO/CONTENT_HUB_STRATEGY.md` - Content planning
- `/Users/heni/SEO/DEPLOYMENT_INSTRUCTIONS.md` - Deployment guide