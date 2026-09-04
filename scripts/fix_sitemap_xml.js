const fs = require('fs');
const path = require('path');

const masterDb = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterDatabase.json'), 'utf8'));
const masterTimestamps = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterTimestamps.json'), 'utf8'));

// Build slug to movie data mapping
const slugToData = {};
masterDb.forEach(movie => {
  if (movie.slug && !slugToData[movie.slug]) {
    slugToData[movie.slug] = movie;
  }
});

const isIndexableSlug = (slug) => {
  const movie = slugToData[slug];
  if (!movie) return false;

  const data = masterTimestamps[String(movie.tmdbId)] || movie;
  const scenes = data.scenes || [];
  const hasTimestamps = scenes.some(s => s.start && s.start.trim() !== '' && s.start.toLowerCase() !== 'none');
  return hasTimestamps;
};

// Filter unique indexable slugs
const indexableSlugs = new Set();
Object.keys(slugToData).forEach(slug => {
  if (isIndexableSlug(slug)) {
    indexableSlugs.add(slug);
  }
});

console.log('Total indexable movie slugs:', indexableSlugs.size);

// Specific slugs updated today
const todaySlugs = new Set([
  'deadpool',
  'deadpool-2',
  'ip-man',
  'super-troopers',
  'the-equalizer',
  'sicario',
  'challengers',
  'perfect-days',
  'timecrimes',
  'the-killing-of-a-sacred-deer',
  'mid90s',
  'irreversible',
  'obsession'
]);

const todayIso = '2026-09-04T00:00:00.000Z';
const defaultIso = '2026-09-01T00:00:00.000Z';

let xmlEntries = [];

Array.from(indexableSlugs).sort().forEach(slug => {
  let lastmod = defaultIso;
  if (todaySlugs.has(slug)) {
    lastmod = todayIso;
  }

  xmlEntries.push(`  <url>
    <loc>https://www.filmiway.com/movie/${slug}/skip-timestamps</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`);
});

const fullSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join('\n')}
</urlset>
`;

const sitemapPath = path.join(__dirname, '../public/sitemap-movies.xml');
fs.writeFileSync(sitemapPath, fullSitemapXml, 'utf8');
console.log('✅ public/sitemap-movies.xml completely regenerated with ' + xmlEntries.length + ' valid, indexable URLs!');
