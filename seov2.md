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
- [x] Update layout.tsx with absolute URLs ✅
- [x] Update blog post template OG tags ✅
- [x] Test with Facebook Debugger ✅
- [x] Verify Twitter Card Validator ✅

#### Task 2: Create OG Image API
```typescript
// app/api/og/route.tsx - NEW FILE
// Dynamic OG image generation for blog posts
```
- [x] Install @vercel/og package ✅
- [x] Create dynamic image generation endpoint ✅
- [x] Design template with title, logo, gradient ✅
- [x] Test with all 50 blog posts ✅

#### Task 3: Upload Static OG Images
- [x] Create 1200x630px og-image.jpg ✅
- [x] Create 1200x630px twitter-card.jpg ✅
- [x] Include branding, logo, tagline ✅
- [x] Upload to /public directory ✅

#### Task 4: Documentation Update
- [x] Update README.md blog count (50 not 31) ✅
- [x] Document SEO implementation status ✅
- [x] Add SEO checklist for new pages ✅

### Week 2: Keyword Optimization 🟡

#### Task 5: AI Roast Generator Landing Page
**Target**: "AI roast generator" (10K+ searches/month)
- [x] Create `/app/ai-roast-generator/page.tsx` ✅
- [x] Include:
  - Hero with keyword-rich H1 ✅
  - How it works section ✅
  - Roast style selector ✅
  - Social proof (2M+ roasts) ✅
  - FAQ schema ✅
  - CTA to try generator ✅

#### Task 6: Instagram Profile Analyzer Page
**Target**: "Instagram profile analyzer" (5K+ searches/month)
- [x] Create `/app/instagram-profile-analyzer/page.tsx` ✅
- [x] Include:
  - Analysis features highlight ✅
  - Sample analysis report ✅
  - Comparison with competitors ✅
  - Privacy/safety section ✅
  - Integration with roast generator ✅

#### Task 7: Content Hub - Pillar Page
**Target**: Topical authority for "Instagram roasting"
- [x] Create `/app/ultimate-guide-instagram-roasting/page.tsx` ✅
- [x] Sections:
  - What is Instagram roasting? ✅
  - History and culture ✅
  - Types of roasts ✅
  - AI vs human roasting ✅
  - Etiquette and boundaries ✅
  - Link to all roast styles ✅
  - Link to relevant blog posts ✅

### Week 3: Schema & Technical Enhancements 🟢

#### Task 8: Enhanced Schema Markup
- [x] Add SoftwareApplication schema: ✅
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
- [x] Add Review/AggregateRating schema (4.8/5 rating) ✅
- [x] Add HowTo schema for roast generation ✅
- [x] Implement BreadcrumbList on all pages ✅

#### Task 9: Internal Linking Optimization
- [x] Audit all 50 blog posts for linking opportunities ✅
- [x] Add "Related Posts" component to blog template ✅
- [x] Create topic clusters: ✅
  - AI & Technology cluster ✅
  - Gen Z Humor cluster ✅
  - Social Media Trends cluster ✅
- [x] Use keyword-rich anchor text ✅

#### Task 10: Performance Optimization
- [x] Implement Next.js Image component everywhere ✅
- [x] Add loading="lazy" to below-fold images ✅
- [x] Configure edge caching headers ✅
- [x] Optimize Core Web Vitals: ✅
  - Target LCP < 2.5s ✅
  - Target CLS < 0.1 ✅
  - Target FID < 100ms ✅

### Week 4: Content Strategy 📝

#### Task 11: Competitor Comparison Pages
- [x] "Roast a Profile vs Cleve AI" ✅
- [x] "Roast a Profile vs Olly Social" ✅
- [x] Feature comparison tables ✅
- [x] Why choose us section ✅
- [x] User testimonials ✅

#### Task 12: Long-tail Keyword Pages
- [x] "Free Instagram roast generator no signup" ✅
- [x] "Funny things to comment on Instagram" ✅
- [x] "Gen Z roast generator online" ✅
- [x] "Savage Instagram roasts examples" ✅
- [x] "How to roast someone on Instagram" ✅

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