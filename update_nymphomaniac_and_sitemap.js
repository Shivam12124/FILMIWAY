const fs = require('fs');
const tsPath = 'utils/masterTimestamps.json';
const sitemapPath = 'public/sitemap-movies.xml';

// 1. Process Nymphomaniac Vol 1 (ID: 258216)
let ts = JSON.parse(fs.readFileSync(tsPath, 'utf8'));
const nymphoId = '258216';
let extracted = [];
let removedCount = 0;
let keptCount = 0;

if (ts[nymphoId]) {
    const movieObj = ts[nymphoId];
    const scenesArray = movieObj.scenes || movieObj.sensitiveScenes || [];
    
    scenesArray.forEach(scene => {
        if (scene.description) {
            const typeStr = (scene.type || '').toLowerCase();
            if (typeStr.includes('profanity') || typeStr.includes('violence') || typeStr.includes('gore')) {
                keptCount++;
            } else {
                extracted.push(`**${movieObj.Title || 'Nymphomaniac Vol 1'} (ID: ${nymphoId})** - ${scene.time || (scene.start + '-' + scene.end)} (${scene.type}): ${scene.description}`);
                delete scene.description;
                removedCount++;
            }
        }
    });
    
    fs.writeFileSync(tsPath, JSON.stringify(ts, null, 2));
    fs.writeFileSync('nymphomaniac_descriptions.txt', extracted.join('\n\n'));
    console.log(`Nymphomaniac: Removed ${removedCount} descriptions. Kept ${keptCount} Profanity/Violence descriptions.`);
}

// 2. Update Sitemap dates to July 7
let xml = fs.readFileSync(sitemapPath, 'utf8');
const slugsToUpdate = [
  'basic-instinct',
  'wild-things',
  'the-dreamers',
  'lust-caution',
  'blue-is-the-warmest-color',
  'fifty-shades-of-grey',
  '365-days',
  'the-handmaiden',
  'nymphomaniac-vol-1'
];

const newDate = '2026-07-07T12:00:00.000Z';
let updatedCount = 0;

slugsToUpdate.forEach(slug => {
  const urlPattern = new RegExp(`(<loc>https://filmiway\\.com/movie/${slug}</loc>\\s*<lastmod>)[^<]+(</lastmod>)`, 'i');
  if (urlPattern.test(xml)) {
    xml = xml.replace(urlPattern, `$1${newDate}$2`);
    updatedCount++;
  } else {
    console.log(`Could not find or match: ${slug}`);
  }
});

fs.writeFileSync(sitemapPath, xml);
console.log(`Sitemap: Successfully updated ${updatedCount} entries to July 7.`);
