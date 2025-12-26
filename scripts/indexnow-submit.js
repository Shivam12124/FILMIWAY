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

    // 🔥 194 INDIVIDUAL MOVIE PAGES (NEW!)
    'https://filmiway.com/movies/like-inception/tt0390384',
    'https://filmiway.com/movies/like-inception/tt0383028',
    'https://filmiway.com/movies/like-inception/tt0166924',
    'https://filmiway.com/movies/like-inception/tt2397535',
    'https://filmiway.com/movies/like-inception/tt2866360',
    'https://filmiway.com/movies/like-inception/tt0246578',
    'https://filmiway.com/movies/like-inception/tt2316411',
    'https://filmiway.com/movies/like-inception/tt0414993',
    'https://filmiway.com/movies/like-inception/tt0485947',
    'https://filmiway.com/movies/like-inception/tt1130884',
    'https://filmiway.com/movies/like-memento/tt0390384',
    'https://filmiway.com/movies/like-memento/tt0383028',
    'https://filmiway.com/movies/like-memento/tt0166924',
    'https://filmiway.com/movies/like-memento/tt2397535',
    'https://filmiway.com/movies/like-memento/tt2866360',
    'https://filmiway.com/movies/like-memento/tt0246578',
    'https://filmiway.com/movies/like-memento/tt2316411',
    'https://filmiway.com/movies/like-memento/tt0414993',
    'https://filmiway.com/movies/like-memento/tt0485947',
    'https://filmiway.com/movies/like-memento/tt1130884',
    'https://filmiway.com/movies/like-shutter-island/tt0390384',
    'https://filmiway.com/movies/like-shutter-island/tt0383028',
    'https://filmiway.com/movies/like-shutter-island/tt0166924',
    'https://filmiway.com/movies/like-shutter-island/tt2397535',
    'https://filmiway.com/movies/like-shutter-island/tt2866360',
    'https://filmiway.com/movies/like-shutter-island/tt0246578',
    'https://filmiway.com/movies/like-shutter-island/tt2316411',
    'https://filmiway.com/movies/like-shutter-island/tt0414993',
    'https://filmiway.com/movies/like-shutter-island/tt0485947',
    'https://filmiway.com/movies/like-shutter-island/tt0114814',
    'https://filmiway.com/movies/survival/tt1542344',
    'https://filmiway.com/movies/survival/tt16277242',
    'https://filmiway.com/movies/survival/tt0162222',
    'https://filmiway.com/movies/survival/tt1663202',
    'https://filmiway.com/movies/survival/tt3659388',
    'https://filmiway.com/movies/survival/tt1649419',
    'https://filmiway.com/movies/survival/tt3758172',
    'https://filmiway.com/movies/survival/tt0472043',
    'https://filmiway.com/movies/survival/tt12262116',
    'https://filmiway.com/movies/survival/tt1809398',
    'https://filmiway.com/movies/netflix/tt8579674',
    'https://filmiway.com/movies/netflix/tt6155172',
    'https://filmiway.com/movies/netflix/tt1302006',
    'https://filmiway.com/movies/netflix/tt9770150',
    'https://filmiway.com/movies/netflix/tt1677720',
    'https://filmiway.com/movies/netflix/tt9419184',
    'https://filmiway.com/movies/netflix/tt7291200',
    'https://filmiway.com/movies/netflix/tt2156584',
    'https://filmiway.com/movies/netflix/tt0454921',
    'https://filmiway.com/movies/netflix/tt10118744',
    'https://filmiway.com/movies/donnie-darko/tt0289879',
    'https://filmiway.com/movies/donnie-darko/tt0114746',
    'https://filmiway.com/movies/donnie-darko/tt0366627',
    'https://filmiway.com/movies/donnie-darko/tt0125659',
    'https://filmiway.com/movies/donnie-darko/tt2866360',
    'https://filmiway.com/movies/donnie-darko/tt0099871',
    'https://filmiway.com/movies/donnie-darko/tt0118929',
    'https://filmiway.com/movies/donnie-darko/tt0166924',
    'https://filmiway.com/movies/donnie-darko/tt0338013',
    'https://filmiway.com/movies/donnie-darko/tt2316411',
    'https://filmiway.com/movies/oldboy/tt0310775',
    'https://filmiway.com/movies/oldboy/tt0476735',
    'https://filmiway.com/movies/oldboy/tt0451094',
    'https://filmiway.com/movies/oldboy/tt1527788',
    'https://filmiway.com/movies/oldboy/tt1190539',
    'https://filmiway.com/movies/oldboy/tt0456912',
    'https://filmiway.com/movies/oldboy/tt1255953',
    'https://filmiway.com/movies/oldboy/tt4016934',
    'https://filmiway.com/movies/oldboy/tt1540399',
    'https://filmiway.com/movies/oldboy/tt1392214',
    'https://filmiway.com/movies/parasite/tt4016934',
    'https://filmiway.com/movies/parasite/tt7282468',
    'https://filmiway.com/movies/parasite/tt1706620',
    'https://filmiway.com/movies/parasite/tt0353969',
    'https://filmiway.com/movies/parasite/tt8075192',
    'https://filmiway.com/movies/parasite/tt8228288',
    'https://filmiway.com/movies/parasite/tt1216496',
    'https://filmiway.com/movies/parasite/tt5715874',
    'https://filmiway.com/movies/parasite/tt0150980',
    'https://filmiway.com/movies/parasite/tt0134119',
    'https://filmiway.com/movies/matrix/tt0118929',
    'https://filmiway.com/movies/matrix/tt1375666',
    'https://filmiway.com/movies/matrix/tt0139809',
    'https://filmiway.com/movies/matrix/tt0120663',
    'https://filmiway.com/movies/matrix/tt0945513',
    'https://filmiway.com/movies/matrix/tt0181689',
    'https://filmiway.com/movies/matrix/tt6499752',
    'https://filmiway.com/movies/matrix/tt0100802',
    'https://filmiway.com/movies/matrix/tt1856101',
    'https://filmiway.com/movies/matrix/tt1631867',
    'https://filmiway.com/movies/revenge/tt0364569',
    'https://filmiway.com/movies/revenge/tt0172495',
    'https://filmiway.com/movies/revenge/tt0105695',
    'https://filmiway.com/movies/revenge/tt0112573',
    'https://filmiway.com/movies/revenge/tt0482571',
    'https://filmiway.com/movies/revenge/tt1663202',
    'https://filmiway.com/movies/revenge/tt0378194',
    'https://filmiway.com/movies/revenge/tt2911666',
    'https://filmiway.com/movies/revenge/tt1588170',
    'https://filmiway.com/movies/revenge/tt0245844',
    'https://filmiway.com/movies/like-se7en/tt0443706',
    'https://filmiway.com/movies/like-se7en/tt0353969',
    'https://filmiway.com/movies/like-se7en/tt1392214',
    'https://filmiway.com/movies/like-se7en/tt0102926',
    'https://filmiway.com/movies/like-se7en/tt1568346',
    'https://filmiway.com/movies/like-se7en/tt1190539',
    'https://filmiway.com/movies/like-se7en/tt1877830',
    'https://filmiway.com/movies/like-se7en/tt0123948',
    'https://filmiway.com/movies/like-se7en/tt0096163',
    'https://filmiway.com/movies/like-se7en/tt0327056',
    'https://filmiway.com/movies/war-films/tt0120815',
    'https://filmiway.com/movies/war-films/tt0078788',
    'https://filmiway.com/movies/war-films/tt0056172',
    'https://filmiway.com/movies/war-films/tt0091251',
    'https://filmiway.com/movies/war-films/tt0108052',
    'https://filmiway.com/movies/war-films/tt0093058',
    'https://filmiway.com/movies/war-films/tt8183660',
    'https://filmiway.com/movies/war-films/tt0082096',
    'https://filmiway.com/movies/war-films/tt0091763',
    'https://filmiway.com/movies/war-films/tt0047528',
    'https://filmiway.com/movies/sci-fi/tt0062622',
    'https://filmiway.com/movies/sci-fi/tt0082869',
    'https://filmiway.com/movies/sci-fi/tt0133093',
    'https://filmiway.com/movies/sci-fi/tt0078748',
    'https://filmiway.com/movies/sci-fi/tt0816692',
    'https://filmiway.com/movies/sci-fi/tt0103064',
    'https://filmiway.com/movies/sci-fi/tt1375666',
    'https://filmiway.com/movies/sci-fi/tt2543164',
    'https://filmiway.com/movies/sci-fi/tt0080684',
    'https://filmiway.com/movies/sci-fi/tt1856101',
    'https://filmiway.com/movies/time-travel/tt0088763',
    'https://filmiway.com/movies/time-travel/tt0103064',
    'https://filmiway.com/movies/time-travel/tt0088247',
    'https://filmiway.com/movies/time-travel/tt0816692',
    'https://filmiway.com/movies/time-travel/tt2397535',
    'https://filmiway.com/movies/time-travel/tt0390384',
    'https://filmiway.com/movies/time-travel/tt0114746',
    'https://filmiway.com/movies/time-travel/tt0246578',
    'https://filmiway.com/movies/time-travel/tt0107048',
    'https://filmiway.com/movies/time-travel/tt0480669',
    'https://filmiway.com/movies/heist-thriller/tt0113277',
    'https://filmiway.com/movies/heist-thriller/tt0105236',
    'https://filmiway.com/movies/heist-thriller/tt0844708',
    'https://filmiway.com/movies/heist-thriller/tt0475304',
    'https://filmiway.com/movies/heist-thriller/tt0305224',
    'https://filmiway.com/movies/heist-thriller/tt0454848',
    'https://filmiway.com/movies/heist-thriller/tt0083190',
    'https://filmiway.com/movies/heist-thriller/tt0073195',
    'https://filmiway.com/movies/heist-thriller/tt0317740',
    'https://filmiway.com/movies/heist-thriller/tt0240772',
    'https://filmiway.com/movies/crime-thriller/tt0113277',
    'https://filmiway.com/movies/crime-thriller/tt0119488',
    'https://filmiway.com/movies/crime-thriller/tt0477348',
    'https://filmiway.com/movies/crime-thriller/tt0443706',
    'https://filmiway.com/movies/crime-thriller/tt1392214',
    'https://filmiway.com/movies/crime-thriller/tt0114369',
    'https://filmiway.com/movies/crime-thriller/tt0327056',
    'https://filmiway.com/movies/crime-thriller/tt0353969',
    'https://filmiway.com/movies/crime-thriller/tt0407887',
    'https://filmiway.com/movies/crime-thriller/tt0139654',
    'https://filmiway.com/movies/detective-thriller/tt0114369',
    'https://filmiway.com/movies/detective-thriller/tt0443706',
    'https://filmiway.com/movies/detective-thriller/tt1392214',
    'https://filmiway.com/movies/detective-thriller/tt1305806',
    'https://filmiway.com/movies/detective-thriller/tt0353969',
    'https://filmiway.com/movies/detective-thriller/tt1190539',
    'https://filmiway.com/movies/detective-thriller/tt0327056',
    'https://filmiway.com/movies/detective-thriller/tt32539724',
    'https://filmiway.com/movies/detective-thriller/tt0116282',
    'https://filmiway.com/movies/detective-thriller/tt0106977',
    'https://filmiway.com/movies/psych-thriller/tt0102926',
    'https://filmiway.com/movies/psych-thriller/tt0137523',
    'https://filmiway.com/movies/psych-thriller/tt0209144',
    'https://filmiway.com/movies/psych-thriller/tt0114369',
    'https://filmiway.com/movies/psych-thriller/tt1130884',
    'https://filmiway.com/movies/psych-thriller/tt0947798',
    'https://filmiway.com/movies/psych-thriller/tt0361862',
    'https://filmiway.com/movies/psych-thriller/tt0364569',
    'https://filmiway.com/movies/psych-thriller/tt0075314',
    'https://filmiway.com/movies/psych-thriller/tt0081505',
    'https://filmiway.com/movies/mystery-thriller/tt0114369',
    'https://filmiway.com/movies/mystery-thriller/tt1392214',
    'https://filmiway.com/movies/mystery-thriller/tt0443706',
    'https://filmiway.com/movies/mystery-thriller/tt2267998',
    'https://filmiway.com/movies/mystery-thriller/tt0353969',
    'https://filmiway.com/movies/mystery-thriller/tt4857264',
    'https://filmiway.com/movies/mystery-thriller/tt7282468',
    'https://filmiway.com/movies/mystery-thriller/tt0119174',
    'https://filmiway.com/movies/mystery-thriller/tt1130884',
    'https://filmiway.com/movies/mystery-thriller/tt0119177',
    'https://filmiway.com/movies/thriller/tt0477348',
    'https://filmiway.com/movies/thriller/tt0102926',
    'https://filmiway.com/movies/thriller/tt0327056',
    'https://filmiway.com/movies/thriller/tt0407887',
    'https://filmiway.com/movies/thriller/tt5362988',
    'https://filmiway.com/movies/thriller/tt0114369',
    'https://filmiway.com/movies/thriller/tt1392214',
    'https://filmiway.com/movies/thriller/tt0353969',
    'https://filmiway.com/movies/thriller/tt2267998',
    'https://filmiway.com/movies/thriller/tt0119174'
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
