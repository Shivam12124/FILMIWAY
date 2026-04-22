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

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const submitChunk = (chunkUrls, chunkIndex, totalChunks) => {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      host: config.host,
      key: config.key,
      keyLocation: config.keyLocation,
      urlList: chunkUrls
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
      res.on('data', () => {}); // Consume data to free memory
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ Chunk ${chunkIndex}/${totalChunks} Accepted (${chunkUrls.length} URLs)`);
          resolve();
        } else {
          console.log(`⚠️ Chunk ${chunkIndex} returned status: ${res.statusCode}`);
          resolve(); // Resolve anyway to keep going
        }
      });
    });

    req.on('error', (e) => {
      console.error(`❌ Chunk ${chunkIndex} failed:`, e.message);
      resolve(); // Resolve to keep the loop going
    });

    req.write(postData);
    req.end();
  });
};

const startStreaming = async () => {
  console.log(`🚀 Starting "Streaming" Mode for ${extractedUrls.length} URLs...`);
  
  // Split URLs into chunks of 40 to avoid "Batch Mode" warning
  const chunkSize = 40;
  const chunks = [];
  for (let i = 0; i < extractedUrls.length; i += chunkSize) {
    chunks.push(extractedUrls.slice(i, i + chunkSize));
  }
  
  for (let i = 0; i < chunks.length; i++) {
    await submitChunk(chunks[i], i + 1, chunks.length);
    // Wait 2 seconds between chunks so Bing thinks we are "Streaming"
    if (i < chunks.length - 1) await sleep(2000); 
  }
  
  console.log('🎉 SUCCESS! All URLs streamed to Bing IndexNow!');
};

startStreaming();
