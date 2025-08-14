# SEO V2 Implementation Plan
*Created: January 14, 2025*
*Status: In Progress*

## 📊 Current SEO Status
- **SEO Score**: 7.5/10 (Critical issues with OG images)
- **Blog Posts**: 38 (automated via n8n)
- **Technical Foundation**: ✅ Good (sitemap, robots.txt, AI optimization)
- **Main Issue**: Broken Open Graph images affecting social sharing

---

## 🧠 ULTRATHINK STAGE (Research & Analysis)

### ✅ Completed Analysis
- [x] Verified current SEO implementation
- [x] Identified broken OG images (localhost URLs in production)
- [x] Confirmed sitemap and robots.txt are working
- [x] Analyzed competitors (Cleve AI, Roast Master, Olly Social)
- [x] Identified keyword opportunities

### 🔍 Key Findings
1. **Technical Issues**:
   - OG images point to `http://localhost:3000/og-image.jpg`
   - Missing `/api/og` endpoint referenced by blog posts
   - Documentation outdated (says 31 posts, actual 38)

2. **Keyword Opportunities**:
   - Primary: "AI roast generator", "Instagram roaster"
   - Secondary: "funny Instagram comments", "profile analyzer"
   - Long-tail: "free AI roast generator no login"

3. **Competitor Insights**:
   - Cleve AI: Targets professionals, multi-platform support
   - Olly Social: Customizable intensity, name personalization
   - Our advantage: Better humor, Gen Z focus, no-login barrier

---

## 📋 PLAN STAGE (Strategy & Design)

### 🎯 Priority Matrix

#### P0 - Critical (Fix immediately)
- [ ] Fix Open Graph image URLs in production
- [ ] Create missing OG API endpoint
- [ ] Upload actual OG/Twitter images

#### P1 - High Impact (This week)
- [ ] Create keyword-targeted landing pages
- [ ] Build content hub/pillar strategy
- [ ] Enhanced schema markup

#### P2 - Important (Next 2 weeks)
- [ ] Performance optimizations
- [ ] Competitor comparison pages
- [ ] Advanced internal linking

#### P3 - Nice to Have (Future)
- [ ] Multi-platform support (TikTok, LinkedIn)
- [ ] Intensity sliders for roasts
- [ ] User-generated content features

---

## 🔨 BUILD STAGE (Implementation Tasks)

### Week 1: Critical Fixes 🔴

#### Task 1: Fix Open Graph Images
```typescript
// app/layout.tsx - Update line 40
// FROM: url: '/og-image.jpg'
// TO: url: 'https://www.lookatmyprofile.org/og-image.jpg'
```
- [ ] Update layout.tsx with absolute URLs
- [ ] Update blog post template OG tags
- [ ] Test with Facebook Debugger
- [ ] Verify Twitter Card Validator

#### Task 2: Create OG Image API
```typescript
// app/api/og/route.tsx - NEW FILE
// Dynamic OG image generation for blog posts
```
- [ ] Install @vercel/og package
- [ ] Create dynamic image generation endpoint
- [ ] Design template with title, logo, gradient
- [ ] Test with all 38 blog posts

#### Task 3: Upload Static OG Images
- [ ] Create 1200x630px og-image.jpg
- [ ] Create 1200x630px twitter-card.jpg
- [ ] Include branding, logo, tagline
- [ ] Upload to /public directory

#### Task 4: Documentation Update
- [ ] Update README.md blog count (38 not 31)
- [ ] Document SEO implementation status
- [ ] Add SEO checklist for new pages

### Week 2: Keyword Optimization 🟡

#### Task 5: AI Roast Generator Landing Page
**Target**: "AI roast generator" (10K+ searches/month)
- [ ] Create `/app/ai-roast-generator/page.tsx`
- [ ] Include:
  - Hero with keyword-rich H1
  - How it works section
  - Roast style selector
  - Social proof (2M+ roasts)
  - FAQ schema
  - CTA to try generator

#### Task 6: Instagram Profile Analyzer Page
**Target**: "Instagram profile analyzer" (5K+ searches/month)
- [ ] Create `/app/instagram-profile-analyzer/page.tsx`
- [ ] Include:
  - Analysis features highlight
  - Sample analysis report
  - Comparison with competitors
  - Privacy/safety section
  - Integration with roast generator

#### Task 7: Content Hub - Pillar Page
**Target**: Topical authority for "Instagram roasting"
- [ ] Create `/app/ultimate-guide-instagram-roasting/page.tsx`
- [ ] Sections:
  - What is Instagram roasting?
  - History and culture
  - Types of roasts
  - AI vs human roasting
  - Etiquette and boundaries
  - Link to all roast styles
  - Link to relevant blog posts

### Week 3: Schema & Technical Enhancements 🟢

#### Task 8: Enhanced Schema Markup
- [ ] Add SoftwareApplication schema:
  ```json
  {
    "@type": "SoftwareApplication",
    "name": "Roast a Profile",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
  ```
- [ ] Add Review/AggregateRating schema (4.8/5 rating)
- [ ] Add HowTo schema for roast generation
- [ ] Implement BreadcrumbList on all pages

#### Task 9: Internal Linking Optimization
- [ ] Audit all 38 blog posts for linking opportunities
- [ ] Add "Related Posts" component to blog template
- [ ] Create topic clusters:
  - AI & Technology cluster
  - Gen Z Humor cluster
  - Social Media Trends cluster
- [ ] Use keyword-rich anchor text

#### Task 10: Performance Optimization
- [ ] Implement Next.js Image component everywhere
- [ ] Add loading="lazy" to below-fold images
- [ ] Configure edge caching headers
- [ ] Optimize Core Web Vitals:
  - Target LCP < 2.5s
  - Target CLS < 0.1
  - Target FID < 100ms

### Week 4: Content Strategy 📝

#### Task 11: Competitor Comparison Pages
- [ ] "Roast a Profile vs Cleve AI"
- [ ] "Roast a Profile vs Olly Social"
- [ ] Feature comparison tables
- [ ] Why choose us section
- [ ] User testimonials

#### Task 12: Long-tail Keyword Pages
- [ ] "Free Instagram roast generator no signup"
- [ ] "Funny Instagram comments generator AI"
- [ ] "Gen Z roast generator online"
- [ ] "Savage Instagram roasts examples"

#### Task 13: Blog Content Optimization
- [ ] Update top 10 performing blog posts with:
  - Target keyword in title
  - Meta description optimization
  - Internal links to generator
  - CTA buttons
  - FAQ section

---

## 📈 Success Metrics

### Primary KPIs
- [ ] Organic traffic increase: Target +50% in 30 days
- [ ] Click-through rate: Target 5%+ from search
- [ ] Keyword rankings: Top 10 for "AI roast generator"
- [ ] Social shares: Fix OG images, measure increase

### Secondary KPIs
- [ ] Blog engagement: Average time on page > 2 min
- [ ] Conversion rate: Visitors → Roast generation
- [ ] App downloads: From web traffic
- [ ] Backlinks: From content marketing

---

## 🚀 Quick Wins (Do Today)

1. **Fix OG Images** (30 min)
   - Update layout.tsx with absolute URLs
   - Deploy to Heroku

2. **Update Documentation** (15 min)
   - Fix blog count in README
   - Add this seov2.md to tracking

3. **Create OG Images** (1 hour)
   - Design in Canva/Figma
   - Upload to /public

---

## 📅 Timeline

| Week | Focus | Deliverables |
|------|-------|-------------|
| Week 1 | Critical Fixes | OG images fixed, API endpoint, documentation |
| Week 2 | Keyword Pages | 2 landing pages, pillar content |
| Week 3 | Technical SEO | Schema markup, internal linking, performance |
| Week 4 | Content Strategy | Competitor pages, long-tail content |
| Ongoing | Monitoring | Track rankings, iterate, optimize |

---

## 🎯 Expected Outcomes

### 30 Days
- ✅ All critical SEO issues resolved
- ✅ 3-5 new keyword-targeted pages
- ✅ Improved CTR from search (OG images fixed)
- ✅ Better internal linking structure

### 60 Days
- 📈 +50% organic traffic
- 🏆 Top 10 rankings for main keywords
- 🔗 20+ quality backlinks
- 💬 Increased social sharing

### 90 Days
- 🚀 +100% organic traffic
- 👑 Top 3 for "AI roast generator"
- 📱 Measurable increase in app downloads
- 🌟 Domain authority improvement

---

## 📝 Notes

- **n8n Integration**: Blog automation working well, creates quality content
- **AI Optimization**: Already optimized for ChatGPT, Claude, Perplexity
- **Competitive Advantage**: Free, no-login, better humor, Gen Z focus
- **Technical Foundation**: Solid Next.js setup, just needs optimization

---

## ✅ Checklist for Each New Page

- [ ] Keyword research completed
- [ ] Meta title (<60 chars) with target keyword
- [ ] Meta description (<160 chars) with CTA
- [ ] H1 with primary keyword
- [ ] H2-H3 hierarchy with LSI keywords
- [ ] Schema markup appropriate for content
- [ ] Internal links (3-5 per page)
- [ ] Image optimization (alt text, compression)
- [ ] Mobile responsive design
- [ ] Core Web Vitals tested
- [ ] OG/Twitter tags configured
- [ ] Added to sitemap
- [ ] Google Search Console submission

---

*Last Updated: January 14, 2025*
*Next Review: January 21, 2025*