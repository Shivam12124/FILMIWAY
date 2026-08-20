const fs = require('fs');
const path = require('path');

const masterDbPath = path.join(__dirname, 'utils', 'masterDatabase.json');
const sitemapPath1 = path.join(__dirname, 'public', 'sitemap-movies.xml');

// Read our new Master Database
const movies = JSON.parse(fs.readFileSync(masterDbPath, 'utf8'));

// Aug Dates ISO Mapper matching pages/movie/[slug]/skip-timestamps.js
const augIsoDates = [
    "2026-08-01T12:00:00.000Z",
    "2026-08-02T12:00:00.000Z",
    "2026-08-03T12:00:00.000Z",
    "2026-08-04T12:00:00.000Z",
    "2026-08-05T12:00:00.000Z",
    "2026-08-06T12:00:00.000Z",
    "2026-08-07T12:00:00.000Z",
    "2026-08-08T12:00:00.000Z",
    "2026-08-09T12:00:00.000Z",
    "2026-08-10T12:00:00.000Z"
];

// Generate the XML for each movie using the new flat slug and deterministic lastmod
const sitemapEntries = movies.map(movie => {
    const dateSeed = Math.abs(Number(movie.tmdbId || 0) + (movie.Title || '').length);
    const lastmodDate = augIsoDates[dateSeed % augIsoDates.length];
    return `  <url>\n    <loc>https://www.filmiway.com/movie/${movie.slug}/skip-timestamps</loc>\n    <lastmod>${lastmodDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`;
});

// Wrap it in the official Google Sitemap XML tags
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;

// Write the new sitemap to the public folder
fs.writeFileSync(sitemapPath1, sitemapContent, 'utf8');

console.log(`\n✅ PERFECT SITEMAP GENERATED! Created ${movies.length} flat URLs in public/sitemap-movies.xml`);