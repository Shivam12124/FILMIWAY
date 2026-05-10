const fs = require('fs');
const path = require('path');

const NEW_FAQS = {
    "Oppenheimer": [
        { q: "Does Oppenheimer have profanity?", a: "According to our Parents Guide, Oppenheimer has a Moderate severity rating for profanity. Approximately 8–9 uses of strong sexual expletives (F-words) and infrequent moderate profanity used in dialogue." },
        { q: "Does Oppenheimer have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in Oppenheimer as Moderate. Contains graphic historical images of charred human remains and radiation victims. Includes a suicide by drug overdose and intense sequences of psychological peril." }
    ],
    "The Handmaiden": [
        { q: "Does The Handmaiden have profanity?", a: "According to our Parents Guide, The Handmaiden has a High severity rating for profanity. Frequent use of strong profanity and sexually explicit language throughout." },
        { q: "Does The Handmaiden have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in The Handmaiden as Moderate. Contains sequences involving drugging, child abuse, and suicide themes. Includes references to sexual sadism and graphic mutilation." }
    ],
    "The Dreamers": [
        { q: "Does The Dreamers have profanity?", a: "According to our Parents Guide, The Dreamers has a Moderate severity rating for profanity. Approximately 10 uses of strong sexual expletives (F-words)." },
        { q: "Does The Dreamers have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in The Dreamers as Moderate. Depicts riot violence involving the throwing of bricks and petrol bombs. Contains a suicide attempt by gas and themes of self-harm." }
    ],
    "Basic Instinct": [
        { q: "Does Basic Instinct have profanity?", a: "According to our Parents Guide, Basic Instinct has a High severity rating for profanity. Approximately 40 uses of the F-word and frequent crude sexual references." },
        { q: "Does Basic Instinct have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in Basic Instinct as High. Features graphic ice-pick murders with detailed shots of blood and physical injury. Contains themes of sexual violence and assault." }
    ],
    "Lust, Caution": [
        { q: "Does Lust, Caution have profanity?", a: "According to our Parents Guide, Lust, Caution has a Moderate severity rating for profanity. Minimal use of strong language (approximately 1 use of the F-word)." },
        { q: "Does Lust, Caution have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in Lust, Caution as Moderate. Contains graphic wartime brutality, including an execution by firing squad and a brutal stabbing. Includes themes of sexual assault and predatory behavior." }
    ],
    "Blue Is the Warmest Color": [
        { q: "Does Blue Is the Warmest Color have profanity?", a: "According to our Parents Guide, Blue Is the Warmest Color has a Moderate severity rating for profanity. Approximately 12–33 uses of strong sexual expletives, including sexual slurs and derogatory language." },
        { q: "Does Blue Is the Warmest Color have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in Blue Is the Warmest Color as Mild. Features physical altercations including face-slapping and shoving during intense emotional conflict." }
    ],
    "Fight Club": [
        { q: "Does Fight Club have profanity?", a: "According to our Parents Guide, Fight Club has a High severity rating for profanity. Approximately 78 uses of the F-word and pervasive strong profanity throughout." },
        { q: "Does Fight Club have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in Fight Club as High. Features brutal bare-knuckle fighting with detailed facial injuries and blood. Includes chemical burns, a fatal head wound, and a self-inflicted gunshot wound." }
    ],
    "The Wolf of Wall Street": [
        { q: "Does The Wolf of Wall Street have profanity?", a: "According to our Parents Guide, The Wolf of Wall Street has a Severe severity rating for profanity. Pervasive strong language with over 430–500 uses of the F-word and frequent use of the C-word." },
        { q: "Does The Wolf of Wall Street have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in The Wolf of Wall Street as Moderate. Depicts domestic abuse, drug-induced injuries, and reckless behavior. Includes scenes of vomiting and physical altercations." }
    ],
    "Fifty Shades of Grey": [
        { q: "Does Fifty Shades of Grey have profanity?", a: "According to our Parents Guide, Fifty Shades of Grey has a Mild severity rating for profanity. Strong language is infrequent, with the F-word used approximately 7 times." },
        { q: "Does Fifty Shades of Grey have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in Fifty Shades of Grey as Moderate. Focuses on BDSM-themed activity involving physical restraint and disciplinary tools." }
    ],
    "Gone Girl": [
        { q: "Does Gone Girl have profanity?", a: "According to our Parents Guide, Gone Girl has a High severity rating for profanity. Pervasive use of strong profanity and graphic sexual language." },
        { q: "Does Gone Girl have Violence & Gore scenes?", a: "Our Parents Guide rates the Violence & Gore in Gone Girl as High. Features one extremely graphic sequence involving a throat-slitting and significant blood flow. Includes Self-inflicted injury." }
    ]
};

const utilsDir = path.join(__dirname, '../utils');

function forceInjectFAQs() {
    const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('.js'));
    let updatedCount = 0;

    files.forEach(file => {
        const filePath = path.join(utilsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        Object.keys(NEW_FAQS).forEach(title => {
            const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            
            // ⚡ FIX: Use match() to avoid the JS regex bug that skipped your files last time!
            const regexMatch = new RegExp(`(['"]${escapedTitle}['"]\\s*:\\s*\\[\\s*)`, 'g');
            
            if (content.match(regexMatch)) {
                // Prevent duplicates if you run it twice
                if (!content.includes(`Does ${title} have profanity`)) {
                    content = content.replace(regexMatch, (match) => {
                        const faqs = NEW_FAQS[title];
                        const langStr = `{ question: "${faqs[0].q}", answer: "${faqs[0].a.replace(/"/g, '\\"')}" },\n        `;
                        const violStr = `{ question: "${faqs[1].q}", answer: "${faqs[1].a.replace(/"/g, '\\"')}" },\n        `;
                        return match + langStr + violStr;
                    });
                    modified = true;
                }
            }
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Injected Top 10 FAQs into: ${file}`);
            updatedCount++;
        }
    });

    console.log(`\n🎉 Process complete! Successfully injected the 2 FAQs into the Top 10 movies across ${updatedCount} files.`);
}

forceInjectFAQs();