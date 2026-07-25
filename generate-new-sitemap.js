const fs = require('fs');
const path = require('path');

const masterDbPath = path.join(__dirname, 'utils', 'masterDatabase.json');
const sitemapPath1 = path.join(__dirname, 'public', 'sitemap-movies.xml');
const sitemapPath2 = path.join(__dirname, 'public', 'sitemap-movies-v2.xml');

// Read our new Master Database
const movies = JSON.parse(fs.readFileSync(masterDbPath, 'utf8'));

// Get the current date in ISO format to tell Google these pages were JUST updated!
const currentDate = new Date().toISOString();

// Generate the XML for each movie using the new flat slug
const sitemapEntries = movies.map(movie => {
    return `  <url>\n    <loc>https://filmiway.com/movie/${movie.slug}/skip-timestamps</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`;
});

// Wrap it in the official Google Sitemap XML tags
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;

// Write the new sitemaps to the public folder
fs.writeFileSync(sitemapPath1, sitemapContent, 'utf8');
fs.writeFileSync(sitemapPath2, sitemapContent, 'utf8');

console.log(`\n✅ PERFECT SITEMAPS GENERATED! Created ${movies.length} flat URLs in:`);
console.log(`   - public/sitemap-movies.xml`);
console.log(`   - public/sitemap-movies-v2.xml`);