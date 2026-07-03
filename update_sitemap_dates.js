const fs = require('fs');
const sitemapPath = 'public/sitemap-movies.xml';
let xml = fs.readFileSync(sitemapPath, 'utf8');

const slugsToUpdate = [
  'basic-instinct',
  'wild-things',
  'the-dreamers',
  'lust-caution',
  'blue-is-the-warmest-color',
  'fifty-shades-of-grey',
  '365-days',
  'the-handmaiden'
];

const newDate = new Date().toISOString();
let updatedCount = 0;

slugsToUpdate.forEach(slug => {
  const urlPattern = new RegExp(`(<loc>https://filmiway.com/movie/${slug}</loc>\\s*<lastmod>)[^<]+(</lastmod>)`, 'i');
  if (urlPattern.test(xml)) {
    xml = xml.replace(urlPattern, `$1${newDate}$2`);
    updatedCount++;
  } else {
    console.log('Could not find or match: ' + slug);
  }
});

fs.writeFileSync(sitemapPath, xml);
console.log('Successfully updated ' + updatedCount + ' sitemap entries to ' + newDate);
