const fs = require('fs');
const path = require('path');

const NEW_DATA = {
    // Oppenheimer
    "872585": [
        { type: "Profanity & Language", severity: "Moderate", description: "Approximately 8–9 uses of strong sexual expletives (F-words) and infrequent moderate profanity used in dialogue." },
        { type: "Violence & Gore", severity: "Moderate", description: "Contains graphic historical images of charred human remains and radiation victims. Includes a suicide by drug overdose and intense sequences of psychological peril." }
    ],
    // The Handmaiden
    "290098": [
        { type: "Profanity & Language", severity: "High", description: "Frequent use of strong profanity and sexually explicit language throughout." },
        { type: "Violence & Gore", severity: "Moderate", description: "Contains sequences involving drugging, child abuse, and suicide themes. Includes references to sexual sadism and graphic mutilation." }
    ],
    // The Dreamers
    "1278": [
        { type: "Profanity & Language", severity: "Moderate", description: "Approximately 10 uses of strong sexual expletives (F-words)." },
        { type: "Violence & Gore", severity: "Moderate", description: "Depicts riot violence involving the throwing of bricks and petrol bombs. Contains a suicide attempt by gas and themes of self-harm." }
    ],
    // Basic Instinct
    "402": [
        { type: "Profanity & Language", severity: "High", description: "Approximately 40 uses of the F-word and frequent crude sexual references." },
        { type: "Violence & Gore", severity: "High", description: "Features graphic ice-pick murders with detailed shots of blood and physical injury. Contains themes of sexual violence and assault." }
    ],
    // Lust, Caution
    "4588": [
        { type: "Profanity & Language", severity: "Moderate", description: "Minimal use of strong language (approximately 1 use of the F-word)." },
        { type: "Violence & Gore", severity: "Moderate", description: "Contains graphic wartime brutality, including an execution by firing squad and a brutal stabbing. Includes themes of sexual assault and predatory behavior." }
    ],
    // Blue Is the Warmest Color
    "152584": [
        { type: "Profanity & Language", severity: "Moderate", description: "Approximately 12–33 uses of strong sexual expletives, including sexual slurs and derogatory language." },
        { type: "Violence & Gore", severity: "Mild", description: "Features physical altercations including face-slapping and shoving during intense emotional conflict." }
    ],
    // Fight Club
    "550": [
        { type: "Profanity & Language", severity: "High", description: "Approximately 78 uses of the F-word and pervasive strong profanity throughout." },
        { type: "Violence & Gore", severity: "High", description: "Features brutal bare-knuckle fighting with detailed facial injuries and blood. Includes chemical burns, a fatal head wound, and a self-inflicted gunshot wound." }
    ],
    // The Wolf of Wall Street
    "106646": [
        { type: "Profanity & Language", severity: "Severe", description: "Pervasive strong language with over 430–500 uses of the F-word and frequent use of the C-word." },
        { type: "Violence & Gore", severity: "Moderate", description: "Depicts domestic abuse, drug-induced injuries, and reckless behavior. Includes scenes of vomiting and physical altercations." }
    ],
    // Fifty Shades of Grey
    "216015": [
        { type: "Profanity & Language", severity: "Mild", description: "Strong language is infrequent, with the F-word used approximately 7 times." },
        { type: "Violence & Gore", severity: "Moderate", description: "Focuses on BDSM-themed activity involving physical restraint and disciplinary tools." }
    ],
    // Gone Girl
    "210577": [
        { type: "Profanity & Language", severity: "High", description: "Pervasive use of strong profanity and graphic sexual language." },
        { type: "Violence & Gore", severity: "High", description: "Features one extremely graphic sequence involving a throat-slitting and significant blood flow. Self-inflicted injury." }
    ]
};

// 1. Update global masterTimestamps.json
const utilsDir = path.join(__dirname, '..', 'utils');
const timestampsPath = path.join(utilsDir, 'masterTimestamps.json');

try {
    const db = JSON.parse(fs.readFileSync(timestampsPath, 'utf8'));
    let updatedCount = 0;

    Object.keys(NEW_DATA).forEach(id => {
        if (db[id]) {
            // Scrub out any generic placeholders generated previously
            db[id].scenes = db[id].scenes.filter(s => 
                !((s.type || '').toLowerCase().includes('language') || 
                  (s.type || '').toLowerCase().includes('profanity') || 
                  (s.type || '').toLowerCase().includes('violence') || 
                  (s.type || '').toLowerCase().includes('gore'))
            );
            
            // Inject the new, detailed descriptions
            NEW_DATA[id].forEach(newItem => {
                db[id].scenes.push({ start: "", end: "", type: newItem.type, severity: newItem.severity, description: newItem.description });
            });
            updatedCount++;
        }
    });

    fs.writeFileSync(timestampsPath, JSON.stringify(db, null, 4));
    console.log(`✅ Successfully updated ${updatedCount} movies in masterTimestamps.json`);
} catch (error) {
    console.error("Error updating masterTimestamps.json:", error);
}

// 2. Surgically update Individual Collection Data Files
try {
    const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('Data.js'));
    let filesModified = 0;

    files.forEach(file => {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        Object.keys(NEW_DATA).forEach(id => {
            const regex = new RegExp(`(${id}\\s*:\\s*\\{\\s*scenes\\s*:\\s*\\[)([\\s\\S]*?)(\\]\\s*\\})`);
            if (regex.test(content)) {
                content = content.replace(regex, (match, p1, p2, p3) => {
                    if (p2.includes('Profanity & Language') || p2.includes('Violence & Gore')) return match; 
                    
                    let newStr = "";
                    NEW_DATA[id].forEach(newItem => {
                        newStr += `,\n            { start: "", end: "", type: "${newItem.type}", severity: "${newItem.severity}", description: "${newItem.description.replace(/"/g, '\\"')}" }`;
                    });

                    if (p2.trim() === '') newStr = newStr.substring(1); 
                    modified = true;
                    return p1 + p2 + newStr + p3;
                });
            }
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Injected detailed warnings into: ${file}`);
            filesModified++;
        }
    });

    console.log(`\n🎉 Process complete! The UI for your top 10 movies is now fully loaded with premium descriptions.`);
} catch (error) {
    console.error("Error updating collection files:", error);
}