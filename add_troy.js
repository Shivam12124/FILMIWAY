const fs = require('fs');

const movieSlug = 'troy';
const collectionFile = './utils/warFilmsMovieData.js';
const masterDbFile = './utils/masterDatabase.json';
const masterTsFile = './utils/masterTimestamps.json';
const sitemapFile = './public/sitemap-movies-v2.xml';

const newBonusMovie = {
  id: '652',
  title: 'Troy',
  year: '2004',
  slug: 'troy',
  Summary: "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
  ageRating: 'R',
  imdbId: 'tt0332452',
  backdropPath: '/3ntxMUKJz9Qh6J9t3Rk1eM0bJ04.jpg',
  posterPath: '/30qMTRvEYC0yR1f1r276tG7gGxC.jpg'
};

const troyTimestamps = [
  {
    "start": "00:06:55",
    "end": "00:07:45",
    "type": "Nudity",
    "severity": "high",
    "description": "Nudity (man and woman)."
  },
  {
    "start": "00:15:38",
    "end": "00:15:50",
    "type": "Nudity",
    "severity": "high",
    "description": "Nudity (woman)."
  },
  {
    "start": "00:16:17",
    "end": "00:16:50",
    "type": "Nudity",
    "severity": "high",
    "description": "Nudity (woman)."
  },
  {
    "start": "01:05:20",
    "end": "01:06:06",
    "type": "Nudity",
    "severity": "mild",
    "description": "Partial nudity (man)."
  },
  {
    "start": "01:53:20",
    "end": "01:54:21",
    "type": "Sex",
    "severity": "high",
    "description": "Partial nudity and intimate scene."
  }
];

let collectionCode = fs.readFileSync(collectionFile, 'utf8');
if (!collectionCode.includes("'troy'")) {
  const bonusRegex = /(export\s+const\s+bonusMovies\s*=\s*\[)([\s\S]*?)(\];)/;
  collectionCode = collectionCode.replace(bonusRegex, (match, p1, p2, p3) => {
    return p1 + '\n  ' + JSON.stringify(newBonusMovie, null, 2) + ',' + p2 + p3;
  });
  fs.writeFileSync(collectionFile, collectionCode);
}

let masterTs = JSON.parse(fs.readFileSync(masterTsFile, 'utf8'));
if (!masterTs['troy']) {
  masterTs['troy'] = troyTimestamps;
  fs.writeFileSync(masterTsFile, JSON.stringify(masterTs, null, 2));
}

let masterDb = JSON.parse(fs.readFileSync(masterDbFile, 'utf8'));
if (!masterDb['troy']) {
  masterDb['troy'] = {
    title: 'Troy',
    year: '2004',
    collection: 'warFilmsMovieData',
    imdbId: 'tt0332452',
    tmdbId: '652'
  };
  fs.writeFileSync(masterDbFile, JSON.stringify(masterDb, null, 2));
}

let sitemap = fs.readFileSync(sitemapFile, 'utf8');
if (!sitemap.includes('/troy/skip-timestamps')) {
  const newUrl = `  <url>
    <loc>https://filmiway.com/movie/troy/skip-timestamps</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
  sitemap = sitemap.replace('</urlset>', newUrl + '\n</urlset>');
  fs.writeFileSync(sitemapFile, sitemap);
}

console.log('Done adding Troy');
