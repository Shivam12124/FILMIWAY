// scripts/indexnow-submit.js - COMPLETE VERSION
const https = require('https');
const fs = require('fs');
const path = require('path');

// Dynamically read all URLs from the sitemap-movies.xml
const sitemapPath = path.join(__dirname, '../public/sitemap-movies.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const urlMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
const extractedUrls = urlMatches.map(match => match[1].trim());

const config = {
  host: 'filmiway.com',
  key: '9587b3f8b4524cec912619a0db76edcd',
  keyLocation: 'https://filmiway.com/9587b3f8b4524cec912619a0db76edcd.txt',
  urls: extractedUrls
};

const submitToIndexNow = () => {
  const postData = JSON.stringify({
    host: config.host,
    key: config.key,
    keyLocation: config.keyLocation,
    urlList: config.urls
  });

  const options = {
    hostname: 'www.bing.com',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(postData),
      'User-Agent': 'Filmiway-IndexNow/1.0'
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log(`✅ HTTP ${res.statusCode}`);
      if (res.statusCode === 200) {
        console.log(`🎉 SUCCESS! Submitted ${config.urls.length} URLs to Bing IndexNow`);
      } else if (res.statusCode === 202) {
        console.log(`✅ ACCEPTED! Bing received ${config.urls.length} URLs`);
      } else {
        console.log(`⚠️ Response: ${data}`);
      }
      process.exit(0);
    });
  });

  req.on('error', (e) => {
    console.error('❌ Primary endpoint failed:', e.message);
    
    // Try alternative endpoint
    console.log('🔄 Trying api.indexnow.org...');
    const altOptions = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const altReq = https.request(altOptions, (altRes) => {
      let altData = '';
      altRes.on('data', (chunk) => altData += chunk);
      altRes.on('end', () => {
        console.log(`✅ ALT HTTP ${altRes.statusCode}`);
        if (altRes.statusCode === 200 || altRes.statusCode === 202) {
          console.log(`🎉 SUCCESS via alternative endpoint!`);
        }
        process.exit(0);
      });
    });

    altReq.on('error', (altE) => {
      console.error('❌ Both endpoints failed:', altE.message);
      process.exit(1);
    });

    altReq.write(postData);
    altReq.end();
  });

  req.write(postData);
  req.end();
};

console.log(`🚀 Submitting ${extractedUrls.length} movie pages to Bing IndexNow...`);
submitToIndexNow();
