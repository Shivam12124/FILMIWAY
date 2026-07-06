const fs = require('fs');
const path = require('path');
const file = path.join('public', 'sitemap-movies.xml');
let content = fs.readFileSync(file, 'utf8');

const slugs = [
  'forrest-gump',
  'the-terminator',
  'fight-club',
  'oldboy',
  'contact',
  'total-recall',
  'sunshine',
  'the-piano-teacher',
  'la-confidential',
  'superbad',
  'risky-business',
  'memories-of-murder',
  'gone-girl',
  'dont-breathe',
  'the-big-short',
  'blade-runner-2049',
  'oppenheimer',
  'obsession',
  'office-romance'
];

let updatedSlugs = [];

slugs.forEach(slug => {
    const search = `<loc>https://filmiway.com/movie/${slug}</loc>`;
    const index = content.indexOf(search);
    if (index !== -1) {
        const lastmodStart = content.indexOf('<lastmod>', index);
        const lastmodEnd = content.indexOf('</lastmod>', lastmodStart);
        if (lastmodStart !== -1 && lastmodEnd !== -1 && (lastmodStart - index) < 200) {
            const oldTag = content.substring(lastmodStart, lastmodEnd + 10);
            content = content.substring(0, lastmodStart) + '<lastmod>2026-07-06T17:55:00.000Z</lastmod>' + content.substring(lastmodEnd + 10);
            updatedSlugs.push(slug);
        }
    }
});

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated these slugs to 2026-07-06T17:55:00.000Z:\n' + updatedSlugs.join('\n'));
