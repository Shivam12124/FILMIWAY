const fs = require('fs');
const path = require('path');

const masterTimestamps = require('../utils/masterTimestamps.json');
const masterDatabase = require('../utils/masterDatabase.json');

// 1. Identify which slugs have timestamps
const tmdbIdsWithTimestamps = new Set();
for (const tmdbId in masterTimestamps) {
    const scenes = masterTimestamps[tmdbId].scenes || [];
    if (scenes.length > 0) {
        tmdbIdsWithTimestamps.add(String(tmdbId));
    }
}

const slugsWithTimestamps = new Set();
masterDatabase.forEach(movie => {
    if (movie.tmdbId && tmdbIdsWithTimestamps.has(String(movie.tmdbId))) {
        const safeSlug = movie.slug || (movie.Title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        slugsWithTimestamps.add(safeSlug);
    }
});

console.log(`Found ${slugsWithTimestamps.size} movies with timestamps.`);

// 2. Read sitemap-movies.xml
const sitemapPath = path.join(__dirname, '../public/sitemap-movies.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

const newDate = '2026-06-27T08:00:00.000Z';
let updatedCount = 0;

// Replace dates for those specific movies
content = content.replace(/<url>[\s\S]*?<\/url>/g, (match) => {
    const locMatch = match.match(/<loc>https:\/\/filmiway\.com\/movie\/(.*?)<\/loc>/);
    if (locMatch) {
        const slug = locMatch[1];
        if (slugsWithTimestamps.has(slug)) {
            updatedCount++;
            return match.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${newDate}</lastmod>`);
        }
    }
    return match;
});

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log(`✅ Successfully updated ${updatedCount} movie dates to ${newDate} in sitemap-movies.xml`);
