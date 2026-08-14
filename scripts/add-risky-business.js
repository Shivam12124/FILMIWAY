// scripts/add-risky-business.js
const fs = require('fs');
const path = require('path');

const masterTimestampsPath = path.join(__dirname, '../utils/masterTimestamps.json');
const masterTimestamps = JSON.parse(fs.readFileSync(masterTimestampsPath, 'utf8'));

const riskyBusinessData = {
    "Title": "Risky Business",
    "Age": "17+",
    "Summary": "Aged 17+ for explicit sex and nudity and moderate language.",
    "scenes": [
        {
            "start": "0:03:13",
            "end": "0:04:23",
            "type": "Nudity",
            "severity": "High",
            "description": "Girl in the shower. Through the heavy steam, her upper body and some of her bottom shown."
        },
        {
            "start": "0:23:36",
            "end": "0:23:43",
            "type": "Sexual Content (Masturbation)",
            "severity": "Mild",
            "description": "A male character is shown masturbating in his bed (under the sheets)."
        },
        {
            "start": "0:29:05",
            "end": "0:30:12",
            "type": "Nudity & Sex",
            "severity": "High",
            "description": "A man removes a woman's dress (revealing her body) and kisses her. She turns around and reveals her breast and, briefly, her pubic hair. The two are then seen briefly having sex from behind with some visible thrusting. The scene ends with her on top of him, thrusting on a rocking chair (shown from behind)."
        },
        {
            "start": "1:21:00",
            "end": "1:23:20",
            "type": "Sexual Content",
            "severity": "Moderate",
            "description": "A man takes off a woman's underwear in a close up (no nudity). The scene is done clothed and in a shot showing them from the shoulders up. In slow motion, there is some thrusting."
        },
        {
            "start": "",
            "end": "",
            "type": "Profanity",
            "severity": "Moderate",
            "description": "The profanity in Risky Business is Moderate to High. The film features frequent use of strong language consistent with an R-rated 1980s teen comedy, including multiple uses of the F-word and sexual slang."
        },
        {
            "start": "",
            "end": "",
            "type": "Violence & Gore",
            "severity": "Mild",
            "description": "The violence in Risky Business is Mild. There are brief moments of pushing or comedic scuffles, but no graphic violence."
        }
    ]
};

masterTimestamps["9346"] = riskyBusinessData;

fs.writeFileSync(masterTimestampsPath, JSON.stringify(masterTimestamps, null, 2), 'utf8');
console.log("✅ Successfully updated Risky Business (ID: 9346) in masterTimestamps.json!");
