// scripts/check-11-timestamps.js
const fs = require('fs');
const path = require('path');

const masterTimestamps = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterTimestamps.json'), 'utf8'));

const targetIds = ["345", "884", "979", "2251", "10867", "11013", "106646", "341174", "401981", "792307", "1064213"];

targetIds.forEach(id => {
    const item = masterTimestamps[id];
    if (item) {
        console.log(`\n=== ${item.Title} (ID: ${id}) ===`);
        (item.scenes || []).forEach(s => {
            if (s.start) {
                console.log(`  [${s.start} - ${s.end}] (${s.type}): ${s.description || 'MISSING DESCRIPTION'}`);
            }
        });
    }
});
