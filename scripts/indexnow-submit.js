// scripts/indexnow-submit.js - COMPLETE VERSION
const https = require('https');

const config = {
  host: 'filmiway.com',
  key: '9587b3f8b4524cec912619a0db76edcd',
  keyLocation: 'https://filmiway.com/9587b3f8b4524cec912619a0db76edcd.txt',
  urls: [
    // 🎬 MOVIES LIKE... (11 collections)
    'https://filmiway.com/collection/movies-like-inception',
    'https://filmiway.com/collection/movies-like-memento',
    'https://filmiway.com/collection/movies-like-shutter-island',
    'https://filmiway.com/collection/movies-like-oldboy',
    'https://filmiway.com/collection/movies-like-donnie-darko',
    'https://filmiway.com/collection/movies-like-interstellar',
    'https://filmiway.com/collection/movies-like-se7en',
    'https://filmiway.com/collection/movies-like-parasite',
    'https://filmiway.com/collection/movies-like-the-matrix',
    'https://filmiway.com/collection/movies-like-black-swan',
    'https://filmiway.com/collection/movies-like-eyes-wide-shut',

    // 🎯 BEST GENRE COLLECTIONS (10 collections)
    'https://filmiway.com/collection/best-survival-movies',
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

    // 📺 HULU COLLECTIONS (10 collections)
    'https://filmiway.com/collection/best-action-movies-on-hulu',
    'https://filmiway.com/collection/best-romance-movies-on-hulu',
    'https://filmiway.com/collection/best-comedy-movies-on-hulu',
    'https://filmiway.com/collection/best-horror-movies-on-hulu',
    'https://filmiway.com/collection/best-thriller-movies-hulu',
    'https://filmiway.com/collection/best-sci-fi-movies-on-hulu',
    'https://filmiway.com/collection/best-movies-on-hulu',
    'https://filmiway.com/collection/best-drama-movies-on-hulu',
    'https://filmiway.com/collection/best-family-movies-on-hulu',

    // 📺 HBO MAX COLLECTIONS (10 collections)
    'https://filmiway.com/collection/best-horror-movies-on-hbo-max',
    'https://filmiway.com/collection/best-family-movies-on-hbo-max',
    'https://filmiway.com/collection/best-movies-on-hbo-max',
    'https://filmiway.com/collection/best-comedy-movies-on-hbo-max',
    'https://filmiway.com/collection/best-action-movies-on-hbo-max',
    'https://filmiway.com/collection/best-sci-fi-movies-on-hbo-max',
    'https://filmiway.com/collection/best-thriller-movies-on-hbo-max',
    'https://filmiway.com/collection/best-romance-movies-on-hbo-max',
    'https://filmiway.com/collection/best-drama-movies-on-hbo-max',

    // 📺 PARAMOUNT+ COLLECTIONS (8 collections)
    'https://filmiway.com/collection/best-sci-fi-movies-on-paramount-plus',
    'https://filmiway.com/collection/best-action-movies-on-paramount-plus',
    'https://filmiway.com/collection/best-romance-movies-on-paramount-plus',
    'https://filmiway.com/collection/best-horror-movies-on-paramount-plus',
    'https://filmiway.com/collection/best-thriller-movies-on-paramount-plus',
    'https://filmiway.com/collection/best-movies-on-paramount-plus',
    'https://filmiway.com/collection/best-comedy-movies-on-paramount-plus',
    'https://filmiway.com/collection/best-family-movies-on-paramount-plus',
    'https://filmiway.com/collection/best-core-drama-movies-on-paramount-plus',

    // 📺 PEACOCK COLLECTIONS (8 collections)
    'https://filmiway.com/collection/best-action-adventure-movies-on-peacock',
    'https://filmiway.com/collection/best-sci-fi-movies-on-peacock',
    'https://filmiway.com/collection/best-romance-movies-on-peacock',
    'https://filmiway.com/collection/best-family-movies-on-peacock',
    'https://filmiway.com/collection/best-drama-movies-on-peacock',
    'https://filmiway.com/collection/best-thriller-movies-on-peacock',
    'https://filmiway.com/collection/best-movies-on-peacock',
    'https://filmiway.com/collection/best-comedy-movies-on-peacock',
  ]
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

console.log('🚀 Submitting 57 collection pages to Bing IndexNow...');
submitToIndexNow();
