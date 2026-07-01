const fs = require('fs');

const dataFile = 'utils/eroticRomanceMovieData.js';
let code = fs.readFileSync(dataFile, 'utf8');

const insertion = `    }),
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
    })
};`;

// Replace the LAST instance of `    })\n};` which closes the COMPLETE_MOVIE_DATA object before the FAQs
const parts = code.split('    })\n};\n\n// 🎬 EROTIC ROMANCE FAQS');
if (parts.length === 2) {
    code = parts[0] + insertion + '\n\n// 🎬 EROTIC ROMANCE FAQS' + parts[1];
    fs.writeFileSync(dataFile, code);
    console.log("Successfully appended     258216 to COMPLETE_MOVIE_DATA!");
} else {
    console.log("Failed to split on the closing bracket of COMPLETE_MOVIE_DATA.");
}
