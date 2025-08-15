# Blog Author Branding Requirement

## Important Brand Guideline
All blog posts MUST use **"Roast Team"** as the author name, NOT "AI Content Team".

## Implementation Details

### Current State (Updated Jan 14, 2025)
- ✅ All 52 existing blog posts updated to use "Roast Team" as author
- ✅ n8n workflow script (`n8n-fix-format-blog-json.js`) updated for future posts
- ✅ Update script created (`update-blog-authors.js`) for batch updates

### Author Format
Blog posts use two formats for the author field:
1. **String format**: `"author": "Roast Team"`
2. **Object format**: 
```json
"author": {
  "name": "Roast Team",
  "bio": "Expert content creators specializing in Gen Z humor and social media trends"
}
```

### File Locations
- Blog posts: `/public/blog-data/*.json`
- n8n fix script: `/n8n-fix-format-blog-json.js` (line 45)
- Update script: `/update-blog-authors.js`

### Future Maintenance
- When creating new blog posts via n8n or manually, always use "Roast Team"
- If importing content from external sources, run the update script
- The n8n workflow is already configured to use the correct author name

## Business Rationale
Using "Roast Team" instead of "AI Content Team" maintains brand consistency and avoids revealing AI-generated content, which could impact SEO and user trust. The "Roast Team" name aligns with the brand's playful, human-centric identity.