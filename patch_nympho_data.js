const fs = require('fs');

const dataFile = 'utils/eroticRomanceMovieData.js';
let dataCode = fs.readFileSync(dataFile, 'utf8');

// 1. Add to COMPLETE_MOVIE_DATABASE
const dbRegex = /\{ "tmdbId": 4478, "imdbID": "tt0107211", "Title": "Indecent Proposal", "year": 1993, "genre": "Drama", "runtime": 117, "rank": 10 \}\n\];/;
const dbReplace = `{ "tmdbId": 4478, "imdbID": "tt0107211", "Title": "Indecent Proposal", "year": 1993, "genre": "Drama", "runtime": 117, "rank": 10 },
    { "tmdbId":     258216, "imdbID": "tt1937390", "Title": "Nymphomaniac: Vol. I", "year": 2013, "genre": "Drama", "runtime": 117, "rank": 0 }
];`;
if (dataCode.match(dbRegex)) dataCode = dataCode.replace(dbRegex, dbReplace);

// 2. Add to STRATEGIC_QUOTES
const quoteRegex = /4478: "Suppose I were to offer you one million dollars for one night with your wife\."\n\};/;
const quoteReplace = `4478: "Suppose I were to offer you one million dollars for one night with your wife.",
        258216: "Perhaps the only difference between me and other people is that I've always demanded more from the sunset."
};`;
if (dataCode.match(quoteRegex)) dataCode = dataCode.replace(quoteRegex, quoteReplace);

// 3. Add to COMPLETE_MOVIE_DATA
// We will replace the closing brace of COMPLETE_MOVIE_DATA
const compRegex = /themes: \["Wealth and Morality", "Trust and Betrayal", "Transactional Love"\]\n\s*\}\)\n\};/;
const compReplace = `themes: ["Wealth and Morality", "Trust and Betrayal", "Transactional Love"]
    }),
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

if (dataCode.match(compRegex)) {
    dataCode = dataCode.replace(compRegex, compReplace);
    console.log("Matched and replaced COMPLETE_MOVIE_DATA successfully");
} else {
    console.log("FAILED to match COMPLETE_MOVIE_DATA regex");
}

fs.writeFileSync(dataFile, dataCode);
console.log("Updated eroticRomanceMovieData.js successfully");
