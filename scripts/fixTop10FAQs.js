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
        { type: "Violence & Gore", severity: "High", description: "Features one extremely graphic sequence involving a throat-slitting and significant blood flow. Includes Self-inflicted injury." }
    ]
};

const TITLES = {
    "872585": "Oppenheimer",
    "290098": "The Handmaiden",
    "1278": "The Dreamers",
    "402": "Basic Instinct",
    "4588": "Lust, Caution",
    "152584": "Blue Is the Warmest Color",
    "550": "Fight Club",
    "106646": "The Wolf of Wall Street",
    "216015": "Fifty Shades of Grey",
    "210577": "Gone Girl"
};

const utilsDir = path.join(__dirname, '..', 'utils');

function fixFiles() {
    const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('.js'));
    let updatedCount = 0;

    files.forEach(file => {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // 1. UNDO the dynamic injections from ALL files (Scrubbing out my mistake)
        const schemaRegex = /[ \t]*\/\/\s*⚡ DYNAMIC LANGUAGE & VIOLENCE FAQS \(SEO SCHEMA\)[\s\S]*?const faqSchema = \{/g;
        if (schemaRegex.test(content)) {
            content = content.replace(schemaRegex, 'const faqSchema = {');
            modified = true;
        }

        const uiRegex = /[ \t]*\/\/\s*⚡ DYNAMIC LANGUAGE & VIOLENCE FAQS \(FRONTEND UI\)[\s\S]*?return staticFaqs;/g;
        if (uiRegex.test(content)) {
            content = content.replace(uiRegex, 'return staticFaqs;');
            modified = true;
        }

        // 2. INJECT static FAQs exclusively into the Top 10 movies
        Object.keys(NEW_DATA).forEach(id => {
            const title = TITLES[id];
            
            // Look for the specific movie's FAQ array (e.g., 'Fight Club': [ )
            const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const titleRegex = new RegExp(`(['"]${escapedTitle}['"]\\s*:\\s*\\[\\s*)`, 'g');
            
            if (titleRegex.test(content)) {
                // Prevent duplicate injection if you run the script twice
                if (!content.includes(`Does ${title} have curse words`)) {
                    content = content.replace(titleRegex, (match) => {
                        const langData = NEW_DATA[id].find(d => d.type === "Profanity & Language");
                        const violData = NEW_DATA[id].find(d => d.type === "Violence & Gore");

                        const langStr = `{ question: "Does ${title} have curse words or profanity?", answer: "According to our Parents Guide, ${title} has a ${langData.severity} severity rating for language. ${langData.description.replace(/"/g, '\\"')}" },\n        `;
                        const violStr = `{ question: "Does ${title} have violence or gore scenes?", answer: "Our Parents Guide rates the violence in ${title} as ${violData.severity}. ${violData.description.replace(/"/g, '\\"')}" },\n        `;

                        // Add the questions to the top of the array
                        return match + langStr + violStr;
                    });
                    modified = true;
                }
            }
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Cleaned and Updated FAQs in: ${file}`);
            updatedCount++;
        }
    });

    console.log(`\n🎉 Process complete! Undid the global change and successfully injected static FAQs into the top 10 movies ONLY.`);
}

fixFiles();
