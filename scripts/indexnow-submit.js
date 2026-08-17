// scripts/indexnow-submit.js - Official IndexNow API batch URL submitter
const https = require('https');

const host = 'www.filmiway.com';
const key = 'a8492048f0294820a840294820a84920'; // Standard IndexNow Key

const urls = [
  'https://www.filmiway.com/sitemap.xml',
  'https://www.filmiway.com/sitemap-main.xml',
  'https://www.filmiway.com/sitemap-movies.xml',
  'https://www.filmiway.com/sitemap-movies-v2.xml',
  'https://www.filmiway.com/how-to-skip-awkward-scenes-in-movies',
  'https://www.filmiway.com/vidangel-alternatives',
  'https://www.filmiway.com/filmiway-vs-imdb-parents-guide',
  'https://www.filmiway.com/watch-along-timer'
];

const postData = JSON.stringify({
  host: host,
  key: key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: urls
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`[INDEXNOW] Response Status Code: ${res.statusCode}`);
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log('✅ IndexNow API successfully received and queued all submitted URLs!');
  } else {
    console.log(`[INDEXNOW] Response Code: ${res.statusCode}`);
  }
});

req.on('error', (e) => {
  console.error(`[INDEXNOW ERROR] ${e.message}`);
});

req.write(postData);
req.end();
