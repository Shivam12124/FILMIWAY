const fs = require('fs');
const path = require('path');

const masterDbPath = path.join(__dirname, 'utils', 'masterDatabase.json');
const sitemapPath = path.join(__dirname, 'public', 'sitemap-movies.xml');

// Read our new Master Database
const movies = JSON.parse(fs.readFileSync(masterDbPath, 'utf8'));

// Get the current date in ISO format to tell Google these pages were JUST updated!
const currentDate = new Date().toISOString();

// Generate the XML for each movie using the new flat slug
const sitemapEntries = movies.map(movie => {
    return `  <url>\n    <loc>https://filmiway.com/movie/${movie.slug}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`;
});

// Wrap it in the official Google Sitemap XML tags
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;

// Write the new sitemap to the public folder
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

console.log(`\n✅ PERFECT SITEMAP GENERATED! Created ${movies.length} flat URLs in public/sitemap-movies.xml`);