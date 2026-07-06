const fs = require('fs');
const path = require('path');

// 1. Extract the 19 explicit movie IDs from the top of the sorted JSON text
const tsText = fs.readFileSync(path.join('utils', 'masterTimestamps.json'), 'utf8');
const ids = [];
const regex = /^\s*"([a-zA-Z0-9_]+)":\s*\{/gm;
let match;
while ((match = regex.exec(tsText)) !== null && ids.length < 19) {
    ids.push(match[1]);
}

// 2. Find their slugs in the master database
const db = JSON.parse(fs.readFileSync(path.join('utils', 'masterDatabase.json'), 'utf8'));
const slugs = [];

ids.forEach(id => {
    const movie = db.find(m => m.imdbID === id || String(m.tmdbId) === id || m.id === id);
    if (movie) {
        const slug = movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        slugs.push(slug);
    }
});

// 3. Update the sitemap XML LastMod date for those specific slugs
const sitemapPath = path.join('public', 'sitemap-movies.xml');
let sitemapText = fs.readFileSync(sitemapPath, 'utf8');
let updatedCount = 0;

slugs.forEach(slug => {
    const replaceRegex = new RegExp(`(<loc>https://filmiway\\.com/movie/${slug}</loc>\\s*)<lastmod>.*?</lastmod>`, 'i');
    if (replaceRegex.test(sitemapText)) {
        sitemapText = sitemapText.replace(replaceRegex, `$1<lastmod>2026-07-06T12:00:00.000Z</lastmod>`);
        updatedCount++;
    } else {
        // Fallback for different spacing
        const fallbackRegex = new RegExp(`(<loc>https://filmiway\\.com/movie/${slug}</loc>[\\s\\S]{1,50}?)<lastmod>.*?</lastmod>`, 'i');
        if (fallbackRegex.test(sitemapText)) {
             sitemapText = sitemapText.replace(fallbackRegex, `$1<lastmod>2026-07-06T12:00:00.000Z</lastmod>`);
             updatedCount++;
        }
    }
});

fs.writeFileSync(sitemapPath, sitemapText, 'utf8');
console.log(`Updated ${updatedCount} sitemap entries.\nSlugs updated: ${slugs.join(', ')}`);
