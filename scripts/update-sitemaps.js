const fs = require('fs');
const path = require('path');

// Point to the public directory where your sitemaps live
const publicDir = path.join(__dirname, '../public');
const targetDate = '2026-09-01T00:00:00.000Z'; 

console.log('🚀 Starting Sitemap Date Update...');

fs.readdirSync(publicDir).forEach(file => {
    // Target any XML file that starts with 'sitemap'
    if (file.startsWith('sitemap') && file.endsWith('.xml')) {
        const filePath = path.join(publicDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Regex to find all <lastmod> tags and replace their contents with today's date
        const updatedContent = content.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${targetDate}</lastmod>`);
        
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✅ Successfully updated all <lastmod> dates in ${file} to ${targetDate}`);
    }
});

console.log('🎉 All sitemaps are now ready for Google Search Console!');