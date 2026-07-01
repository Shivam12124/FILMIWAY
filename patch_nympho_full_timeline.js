const fs = require('fs');

const scenes = [
    {
        start: "0:21:40", end: "0:22:00", type: "Nudity (Woman)", severity: "Moderate", description: "A brief topless image of a female character appears on a poster in the background."
    },
    { start: "0:23:30", end: "0:24:05", type: "Sex & Partial Nudity", severity: "High", description: "A male and female character are shown engaging in sexual activity, with most nudity obscured by camera angles." },
    { start: "0:23:38", end: "0:23:49", type: "Sex & Nudity", severity: "High", description: "A male and female character are shown engaging in sexual activity, with genital exposure." },
    { start: "0:25:33", end: "0:25:36", type: "Nudity (Woman)", severity: "High", description: "A female character is shown briefly topless while talking to her friend." },
    { start: "0:34:18", end: "0:34:34", type: "Sex", severity: "High", description: "A male and female character are shown engaging in sexual activity." },
    { start: "0:41:10", end: "0:42:17", type: "Sex & Nudity", severity: "High", description: "A male and female character are shown engaging in oral sexual activity." },
    { start: "0:51:03", end: "0:52:55", type: "Sex & Nudity", severity: "High", description: "A montage depicts a male and female character engaging in sexual activity, including full-body nudity." },
    { start: "0:59:10", end: "0:59:36", type: "Nudity (Woman)", severity: "High", description: "A hospital scene depicts a female character's genital area exposed for a medical procedure." },
    { start: "1:16:25", end: "1:16:36", type: "Sex & Nudity (Woman)", severity: "High", description: "Sexual activity is depicted showing female topless nudity, while the male character's nudity is obscured by the camera angle." },
    { start: "1:21:40", end: "1:22:55", type: "Sexual Content (Masturbation)", severity: "Moderate", description: "A female character is implied to be masturbating. Her hand is seen under clothing, so no graphic details are shown." },
    { start: "2:01:50", end: "2:02:08", type: "Sex & Nudity", severity: "High", description: "A male and female character are shown engaging in sexual activity, with genital exposure." },
    { start: "2:03:30", end: "2:03:42", type: "Partial Nudity (Man)", severity: "Mild", description: "A male character's backside is shown while he is lying down on a hospital bed." },
    { start: "2:03:43", end: "2:04:35", type: "Sex", severity: "High", description: "A male and female character are shown engaging in sexual activity." },
    { start: "2:13:20", end: "2:17:30", type: "Sex & Nudity", severity: "High", description: "A montage depicts male and female characters in a state of full nudity, including oral sexual activity." },
    { start: "2:20:50", end: "2:23:40", type: "Sex & Nudity", severity: "High", description: "A male and female character are shown engaging in sexual activity, including full-state nudity." },
    { start: "2:24:05", end: "2:25:00", type: "Sex & Nudity", severity: "High", description: "During the credits, several scenes of sexual activity and nudity appear." }
];

// Update masterTimestamps.json
const tsPath = 'utils/masterTimestamps.json';
const ts = JSON.parse(fs.readFileSync(tsPath, 'utf8'));
if (ts['    258216']) {
    ts['    258216'].scenes = scenes;
    fs.writeFileSync(tsPath, JSON.stringify(ts, null, 2));
    console.log("Updated masterTimestamps.json");
}

// Update eroticRomanceMovieData.js SENSITIVE_TIMELINES
const dataPath = 'utils/eroticRomanceMovieData.js';
let dataCode = fs.readFileSync(dataPath, 'utf8');
const timelineRegex = /    258216: \{\s*scenes: \[\s*\{[\s\S]*?\}\s*\]\s*\}/;
const scenesString = scenes.map(s => '            { start: "' + s.start + '", end: "' + s.end + '", type: "' + s.type + '", severity: "' + s.severity + '", description: "' + s.description + '" }').join(',\n');
const timelineReplace = '    258216: {\n        scenes: [\n' + scenesString + '\n        ]\n    }';

if (dataCode.match(timelineRegex)) {
    dataCode = dataCode.replace(timelineRegex, timelineReplace);
    fs.writeFileSync(dataPath, dataCode);
    console.log("Updated eroticRomanceMovieData.js");
} else {
    console.log("Failed to match regex in eroticRomanceMovieData");
}
