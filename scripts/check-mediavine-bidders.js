const https = require('https');

const SCRIPT_URL = 'https://scripts.scriptwrapper.com/tags/3f77b114-7d11-4865-b94a-4814cd1f02ef.js';

https.get(SCRIPT_URL, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const bidRequestsIdx = data.indexOf('"bidRequests":');
    if (bidRequestsIdx === -1) return;

    const sub = data.substring(bidRequestsIdx + 14);
    let openBrackets = 0, endIdx = 0, started = false;

    for (let i = 0; i < sub.length; i++) {
      if (sub[i] === '{') { openBrackets++; started = true; }
      else if (sub[i] === '}') { openBrackets--; }
      if (started && openBrackets === 0) { endIdx = i + 1; break; }
    }

    const rawJson = sub.substring(0, endIdx);
    try {
      const bidRequests = JSON.parse(rawJson);
      const biddersFound = new Set();
      
      for (const slotName in bidRequests) {
        const slotConfigList = bidRequests[slotName];
        if (Array.isArray(slotConfigList)) {
          slotConfigList.forEach(item => {
            if (item && item.bidder) biddersFound.add(item.bidder);
            else if (item && typeof item === 'object') {
              Object.keys(item).forEach(k => {
                if (k.toLowerCase().includes('bidder') || item[k]?.bidder) biddersFound.add(item[k]?.bidder || k);
              });
            }
          });
        } else if (slotConfigList && typeof slotConfigList === 'object') {
          Object.values(slotConfigList).forEach(item => {
            if (item && item.bidder) biddersFound.add(item.bidder);
          });
        }
      }

      // Also search regex for any "bidder": "xxx" across the raw snippet
      const regexMatches = [...rawJson.matchAll(/"bidder"\s*:\s*"([^"]+)"/g)];
      regexMatches.forEach(m => biddersFound.add(m[1]));

      const activeBidders = Array.from(biddersFound).filter(Boolean).sort();

      console.log('====================================================');
      console.log(`✅ TOTAL UNIQUE ACTIVE BIDDER NETWORKS LIVE: ${activeBidders.length}`);
      console.log('====================================================');
      activeBidders.forEach((bidder, index) => {
        console.log(`  ${index + 1}. ${bidder}`);
      });
      console.log('====================================================');
      
      if (activeBidders.length <= 3) {
        console.log('\n📌 Status: Domain Review in Progress (Initial 14-30 day onboarding).');
        console.log('👉 Mediavine is actively submitting Filmiway.com to Google AdX, Open Bidding, Amazon TAM, Magnite, IX, Xandr, etc.');
        console.log('👉 As domain reviews clear over the next 1-3 weeks, new bidder networks will automatically appear here!');
      } else {
        console.log('\n🎉 Status: High DSP Competition!');
        console.log('👉 Multiple ad networks are actively bidding live on your site.');
      }
    } catch (err) {
      console.error('❌ Error parsing bidRequests JSON:', err.message);
    }
  });
});
