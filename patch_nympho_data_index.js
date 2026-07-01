const fs = require('fs');

const dataFile = 'utils/eroticRomanceMovieData.js';
let code = fs.readFileSync(dataFile, 'utf8');

const insertion = `,
        258216: createRomanceData({ // Nymphomaniac: Vol. I
        eroticTension: 98, complexityLevel: "EXTREME", 
        dominantColor: "#52525b", rating: 6.9, criticsScore: 76, audienceScore: 68, director: "Lars von Trier", 
        cast: ["Charlotte Gainsbourg", "Stellan Skarsgård", "Stacy Martin"], boxOffice: "$13.5 million", budget: "€4.7 million", 
        dna: { "Drama": 80, "Romance": 20 },
        scenes: [
            { time: 15, intensity: 70, label: "The Train Journey" }, 
            { time: 45, intensity: 95, label: "The Secret Club" }, 
            { time: 80, intensity: 100, label: "Jerome" }, 
            { time: 110, intensity: 85, label: "The Hospital" } 
        ],
        synopsis: "A self-diagnosed nymphomaniac recounts her erotic experiences to the man who saved her after a beating. The film explores female sexuality, desire, and psychological trauma through a highly explicit, chapter-based narrative.",
        themes: ["Sexual Addiction", "Psychological Trauma", "Human Connection"]
    })`;

// Simply search for "4478: createRomanceData" and find the matching "})" that comes after it, then insert our block before the closing "};"
const startIndex = code.indexOf('4478: createRomanceData');
const endIndex = code.indexOf('};', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const before = code.substring(0, endIndex - 5); // back up a little
    const exactEnd = code.indexOf('})', before.length);
    if (exactEnd !== -1) {
        code = code.substring(0, exactEnd + 2) + insertion + code.substring(exactEnd + 2);
        fs.writeFileSync(dataFile, code);
        console.log("BOOM! Successfully appended     258216 using exact index placement!");
    } else {
        console.log("Failed to find exactEnd");
    }
} else {
    console.log("Failed to find 4478 or closing braces");
}
