const fs = require('fs');
const dataFile = 'utils/eroticRomanceMovieData.js';
let dataCode = fs.readFileSync(dataFile, 'utf8');

const timelineRegex = /4478: \{\s*scenes: \[\s*\{[\s\S]*?\}\s*\]\s*\}/;
const timelineReplace = `4478: { 
        scenes: [
            { start: "0:05:25", end: "0:06:15", type: "Sexual Content & Nudity (Woman)", severity: "High" },
            { start: "0:16:25", end: "0:17:35", type: "Sexual Content", severity: "Moderate" },
            { start: "0:40:26", end: "0:41:25", type: "Nudity (Woman)", severity: "Moderate" }
        ]
    },

    // BONUS: Nymphomaniac: Vol. I
        258216: {
        scenes: [
            { start: "0:11:00", end: "0:14:30", type: "Sex & Nudity", severity: "High" },
            { start: "0:34:10", end: "0:38:20", type: "Nudity (Woman) & Sexual Content", severity: "High" },
            { start: "0:56:45", end: "0:59:15", type: "Graphic Nudity & Sexual Act", severity: "Extreme" },
            { start: "1:22:10", end: "1:28:40", type: "Intense Sexual Content", severity: "Extreme" },
            { start: "", end: "", type: "Profanity", severity: "High", description: "Extreme and frequent sexual profanity throughout the entire film." }
        ]
    }`;

if (dataCode.match(timelineRegex)) {
    dataCode = dataCode.replace(timelineRegex, timelineReplace);
    fs.writeFileSync(dataFile, dataCode);
    console.log("Updated TIMELINES successfully");
} else {
    console.log("Failed to match timeline regex");
}
