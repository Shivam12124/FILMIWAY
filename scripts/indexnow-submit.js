// scripts/indexnow-submit.js - Official IndexNow API batch URL submitter for Bing & Search Engines
const https = require('https');
const fs = require('fs');
const path = require('path');

const host = 'www.filmiway.com';
const key = '9587b3f8b4524cec912619a0db76edcd'; // Verified live key in public/9587b3f8b4524cec912619a0db76edcd.txt
const keyLocation = `https://${host}/${key}.txt`;

// 1. Extract all URLs from sitemap-movies.xml
const sitemapMoviesPath = path.join(__dirname, '../public/sitemap-movies.xml');
const sitemapMainPath = path.join(__dirname, '../public/sitemap-main.xml');

let urls = [];

if (fs.existsSync(sitemapMoviesPath)) {
  const content = fs.readFileSync(sitemapMoviesPath, 'utf8');
  const matches = content.match(/<loc>(https:\/\/www\.filmiway\.com\/[^<]+)<\/loc>/g);
  if (matches) {
    const movieUrls = matches.map(m => m.replace(/<\/?loc>/g, '').trim());
    urls.push(...movieUrls);
    console.log(`🎬 Found ${movieUrls.length} movie URLs from sitemap-movies.xml`);
  }
} else {
  console.error('❌ Could not find sitemap-movies.xml');
}

// 2. Also include main authority pages from sitemap-main.xml
if (fs.existsSync(sitemapMainPath)) {
  const content = fs.readFileSync(sitemapMainPath, 'utf8');
  const matches = content.match(/<loc>(https:\/\/www\.filmiway\.com\/[^<]+)<\/loc>/g);
  if (matches) {
    const mainUrls = matches.map(m => m.replace(/<\/?loc>/g, '').trim());
    const filteredMainUrls = mainUrls.filter(u => !u.endsWith('.xml') && !urls.includes(u));
    urls.push(...filteredMainUrls);
    console.log(`📄 Added ${filteredMainUrls.length} core pages from sitemap-main.xml`);
  }
}

// Ensure unique URLs
urls = Array.from(new Set(urls));
console.log(`🚀 Total URLs to submit to IndexNow/Bing: ${urls.length}`);

if (urls.length === 0) {
  console.error('❌ No URLs found to submit. Exiting.');
  process.exit(1);
}

const postData = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urls
});

// Function to send to an IndexNow endpoint
function submitToIndexNow(endpointHost, endpointPath) {
  return new Promise((resolve) => {
    const options = {
      hostname: endpointHost,
      port: 443,
      path: endpointPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log(`\n📡 Submitting ${urls.length} URLs to https://${endpointHost}${endpointPath}...`);

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`[${endpointHost}] Response Status: ${res.statusCode} ${res.statusMessage}`);
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ Success! ${endpointHost} accepted all ${urls.length} URLs for instant indexing.`);
          resolve(true);
        } else {
          console.log(`⚠️ Response body: ${body || '(empty)'}`);
          resolve(false);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`❌ [${endpointHost} ERROR] ${e.message}`);
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
}

async function run() {
  // Submit to IndexNow API (shared across Bing, Yandex, Seznam, Naver)
  await submitToIndexNow('api.indexnow.org', '/indexnow');
  // Also submit directly to Bing IndexNow endpoint for guaranteed Bing Webmaster ingestion
  await submitToIndexNow('www.bing.com', '/indexnow');
}

run();
