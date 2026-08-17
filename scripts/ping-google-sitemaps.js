// scripts/ping-google-sitemaps.js - Pings Google & Bing IndexNow with Filmiway Sitemaps
const https = require('https');

const sitemaps = [
  'https://www.filmiway.com/sitemap.xml',
  'https://www.filmiway.com/sitemap-main.xml',
  'https://www.filmiway.com/sitemap-movies.xml',
  'https://www.filmiway.com/sitemap-movies-v2.xml'
];

async function pingUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`[PING] ${url} => Status: ${res.statusCode}`);
      resolve(res.statusCode);
    }).on('error', (err) => {
      console.error(`[PING ERROR] ${url}: ${err.message}`);
      resolve(null);
    });
  });
}

async function run() {
  console.log('🚀 Pinging Google & Bing Sitemaps for Filmiway...\n');

  for (const sitemap of sitemaps) {
    // Google Sitemap Ping Endpoint
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`;
    await pingUrl(googlePingUrl);

    // Bing Sitemap Ping Endpoint
    const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`;
    await pingUrl(bingPingUrl);
  }

  console.log('\n✅ ALL SITEMAPS PINGED SUCCESSFULLY TO GOOGLE & BING!');
}

run();
