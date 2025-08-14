#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directory containing blog JSON files
const blogDataDir = path.join(__dirname, 'public', 'blog-data');

// Function to update author in a single file
function updateAuthorInFile(filePath) {
  try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Update author field - handle both string and object formats
    if (typeof data.author === 'string' && data.author === 'AI Content Team') {
      data.author = 'Roast Team';
      console.log(`✅ Updated ${path.basename(filePath)} - string format`);
    } else if (typeof data.author === 'object' && data.author.name === 'AI Content Team') {
      data.author.name = 'Roast Team';
      // Keep the bio if it exists
      if (!data.author.bio) {
        data.author.bio = 'Expert content creators specializing in Gen Z humor and social media trends';
      }
      console.log(`✅ Updated ${path.basename(filePath)} - object format`);
    } else {
      console.log(`⏭️  Skipped ${path.basename(filePath)} - already updated or different author`);
      return;
    }
    
    // Write the updated content back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🚀 Starting blog author update...\n');

// Get all JSON files in the blog-data directory
const files = fs.readdirSync(blogDataDir)
  .filter(file => file.endsWith('.json'))
  .map(file => path.join(blogDataDir, file));

console.log(`Found ${files.length} blog posts to check\n`);

// Process each file
files.forEach(updateAuthorInFile);

console.log('\n✨ Blog author update complete!');
console.log('Remember to commit and push these changes to GitHub, then deploy to Heroku.');