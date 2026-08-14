// scripts/check-backup-descriptions.js
const fs = require('fs');
const path = require('path');

const backupPath = path.join(__dirname, '../utils/masterTimestamps.json.backup');
if (fs.existsSync(backupPath)) {
    const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
    const targetIds = ["345", "884", "979", "2251", "10867", "11013", "106646", "341174", "401981", "792307", "1064213"];

    console.log("=== CHECKING MASTER TIMESTAMPS BACKUP FILE ===");
    targetIds.forEach(id => {
        const item = backup[id];
        if (item) {
            console.log(`\nMovie: ${item.Title} (ID: ${id})`);
            (item.scenes || []).forEach(s => {
                if (s.description) console.log(`  [${s.start || 'N/A'}] ${s.type}: ${s.description}`);
            });
        }
    });
} else {
    console.log("No backup file found.");
}
