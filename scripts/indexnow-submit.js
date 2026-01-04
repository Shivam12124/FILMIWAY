// scripts/indexnow-submit.js - FIXED ENDPOINT
const https = require('https');
const http = require('http');

const config = {
  host: 'filmiway.com',
  key: '9587b3f8b4524cec912619a0db76edcd',
  keyLocation: 'https://filmiway.com/9587b3f8b4524cec912619a0db76edcd.txt',
urls: [
    // 🔥 21 COLLECTION PAGES (ALREADY SUBMITTED)
    'https://filmiway.com/collection/movies-like-inception',
    'https://filmiway.com/collection/movies-like-memento',
    'https://filmiway.com/collection/movies-like-shutter-island',
    'https://filmiway.com/collection/best-survival-movies',
    'https://filmiway.com/collection/movies-like-oldboy',
    'https://filmiway.com/collection/movies-like-donnie-darko',
    'https://filmiway.com/collection/movies-like-interstellar',
    'https://filmiway.com/collection/movies-like-se7en',
    'https://filmiway.com/collection/movies-like-parasite',
    'https://filmiway.com/collection/movies-like-the-matrix',
    'https://filmiway.com/collection/best-war-films',
    'https://filmiway.com/collection/best-revenge-movies',
    'https://filmiway.com/collection/best-crime-thriller-movies',
    'https://filmiway.com/collection/best-heist-thriller-movies',
    'https://filmiway.com/collection/best-sci-fi-movies',
    'https://filmiway.com/collection/best-time-travel-movies',
    'https://filmiway.com/collection/best-psychological-thriller-movies',
    'https://filmiway.com/collection/best-thriller-movies',
    'https://filmiway.com/collection/best-detective-thriller-movies',
    'https://filmiway.com/collection/best-mystery-thriller-movies',
    'https://filmiway.com/collection/best-drama-movies-on-netflix',

    
  ]
};

const submitToIndexNow = () => {
  const postData = JSON.stringify({
    host: config.host,
    key: config.key,
    keyLocation: config.keyLocation,
    urlList: config.urls
  });

  // 🔥 FIXED: Use bing.com + IndexNow endpoint
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
      console.log(`✅ HTTP ${res.statusCode}: ${data}`);
      console.log(`🎉 SUBMITTED ${config.urls.length} PAGES TO BING:`);
      config.urls.forEach((url, i) => console.log(`   ${i+1}. ${url}`));
      process.exit(0);
    });
  });

  req.on('error', (e) => {
    console.error('❌ Error:', e.message);
    
    // 🔥 TRY ALTERNATIVE ENDPOINT
    console.log('🔄 Trying alternative endpoint...');
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
        console.log(`🔄 ALT HTTP ${altRes.statusCode}: ${altData}`);
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

console.log('🚀 Submitting to Bing IndexNow...');
submitToIndexNow();
