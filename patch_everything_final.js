const fs = require('fs');

const dataFile = 'utils/eroticRomanceMovieData.js';
let code = fs.readFileSync(dataFile, 'utf8');

// 1. COMPLETE_MOVIE_DATABASE
const dbEndIndex = code.indexOf('];', code.indexOf('export const COMPLETE_MOVIE_DATABASE'));
if (dbEndIndex !== -1 && !code.includes('tt1937390')) {
    const insertDb = `    ,{ "tmdbId":     258216, "imdbID": "tt1937390", "Title": "Nymphomaniac: Vol. I", "year": 2013, "genre": "Drama", "runtime": 117, "rank": "BONUS" }\n`;
    code = code.substring(0, dbEndIndex) + insertDb + code.substring(dbEndIndex);
}

// 2. STRATEGIC_QUOTES
const quotesEndIndex = code.indexOf('};', code.indexOf('export const STRATEGIC_QUOTES'));
if (quotesEndIndex !== -1 && !code.includes('    258216: "Perhaps the only difference')) {
    const insertQuote = `,\n        258216: "Perhaps the only difference between me and other people is that I've always demanded more from the sunset."\n`;
    code = code.substring(0, quotesEndIndex) + insertQuote + code.substring(quotesEndIndex);
}

// 3. COMPLETE_MOVIE_DATA
const compStartIndex = code.indexOf('4478: createRomanceData');
const compEndIndex = code.indexOf('};', compStartIndex);
if (compStartIndex !== -1 && compEndIndex !== -1 && !code.includes('    258216: createRomanceData')) {
    const before = code.substring(0, compEndIndex - 5);
    const exactEnd = code.indexOf('})', before.length);
    if (exactEnd !== -1) {
        const insertion = `,\n        258216: createRomanceData({ // Nymphomaniac: Vol. I
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
        code = code.substring(0, exactEnd + 2) + insertion + code.substring(exactEnd + 2);
    }
}

// 4. EROTIC_ROMANCE_MOVIE_FAQS
const faqRegex = /'Indecent Proposal': \[\s*\{[\s\S]*?\}\s*\]\s*\}\;/;
const faqReplace = `'Indecent Proposal': [
        { question: "Does Indecent Proposal have violence and gore?", answer: "According to the Filmiway Parents Guide, the violence in Indecent Proposal is rated as None. There is no violence or gore depicted." },
        { question: "Does Indecent Proposal have profanity or swearing?", answer: "The profanity in Indecent Proposal is rated as Moderate. Contains around 15–20 uses of mild to moderate profanity, mostly situational." },
        { question: "Why is Indecent Proposal rated R?", answer: "Indecent Proposal earns its R rating due to sexual content, nudity, and moderate profanity. Specifically, the film contains Several passionate scenes, some depicting partial nudity in a romantic context. Adults can use our timestamps to skip the explicit content." },
        { question: "What is the psychological message of the film?", answer: "It confronts the uncomfortable reality of transactional love and whether money can permanently alter the foundation of trust in a marriage." },
        { question: "Does the film endorse Gage's actions?", answer: "No. Gage is framed as an antagonist who wields wealth as power. However, the film critiques Diana and David just as heavily for believing their love was immune to financial temptation." },
        { question: "Why is the dress scene significant?", answer: "The dress represents David's inability to provide what Gage can effortlessly buy. It is the visual turning point where money begins to erode their marital intimacy." }
    ],
    'Nymphomaniac: Vol. I': [
        { question: "Does Nymphomaniac: Vol. I have violence and gore?", answer: "According to the Filmiway Parents Guide, the violence in Nymphomaniac: Vol. I is rated as Mild. The protagonist is found beaten in an alleyway, with bruises and cuts visible." },
        { question: "Does Nymphomaniac: Vol. I have profanity or swearing?", answer: "The profanity in Nymphomaniac: Vol. I is rated as High. Extreme and frequent sexual profanity throughout the entire film." },
        { question: "Why is Nymphomaniac: Vol. I rated NC-17?", answer: "Nymphomaniac: Vol. I earns its NC-17 rating due to extreme sexual content and graphic nudity, mild violence, and high profanity. Specifically, the film contains Extreme and frequent sexual profanity throughout the entire film. The protagonist is found beaten in an alleyway, with bruises and cuts visible. Adults can use our timestamps to skip the explicit content." },
        { question: "Why did Lars von Trier make this film?", answer: "Lars von Trier intended to explore human sexuality without moral judgment, using Joe's condition as a lens to dissect religion, psychology, and societal hypocrisy." },
        { question: "How does the film treat female sexuality?", answer: "Unlike many erotic films, it presents female desire as clinical, obsessive, and occasionally destructive, removing the romanticized lens typically applied to sex in cinema." },
        { question: "What is the significance of the fly fishing metaphor?", answer: "Seligman constantly uses intellectual metaphors (like fly fishing) to rationalize Joe's carnal experiences, highlighting the contrast between lived physical trauma and detached intellectualism." }
    ]
};`;
if (code.match(faqRegex) && !code.includes('Nymphomaniac: Vol. I\': [')) {
    code = code.replace(faqRegex, faqReplace);
}

// 5. SENSITIVE_TIMELINES
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
const scenesString = scenes.map(s => '            { start: "' + s.start + '", end: "' + s.end + '", type: "' + s.type + '", severity: "' + s.severity + '", description: "' + s.description + '" }').join(',\n');
const timelineInsertion = `,
    // BONUS: Nymphomaniac: Vol. I
        258216: {
        scenes: [
${scenesString}
        ]
    }`;
const timelineRegex = /4478: \{\s*scenes: \[\s*\{[\s\S]*?\}\s*\]\s*\}\s*\n\};/;
const timelineReplace = `4478: {
        scenes: [
            { start: "0:12:10", end: "0:13:30", type: "Sexual Content", severity: "Moderate" },
            { start: "0:40:26", end: "0:41:25", type: "Nudity (Woman)", severity: "Moderate" }
        ]
    }${timelineInsertion}
};`;
if (code.match(timelineRegex) && !code.includes('    258216: {')) {
    code = code.replace(timelineRegex, timelineReplace);
}

// 6. FALLBACK_POSTERS
const posterRegex = /4478: "https:\/\/m.media-amazon.com\/images\/M\/MV5BMTQ4Mzg4NjUwM15BMl5BanBnXkFtZTgwNTkzMjEwMDE@\._V1_SX500\.jpg"\n\};/;
const posterReplace = `4478: "https://m.media-amazon.com/images/M/MV5BMTQ4Mzg4NjUwM15BMl5BanBnXkFtZTgwNTkzMjEwMDE@._V1_SX500.jpg",
        258216: "https://m.media-amazon.com/images/M/MV5BODdiYjMwNWEtZjUxMi00Njc4LWFjMDctMzhhZmRiODRhZGRmXkEyXkFqcGdeQXVyMTAxMjAwMzI1._V1_SX500.jpg"
};`;
if (code.match(posterRegex) && !code.includes('    258216: "https://')) {
    code = code.replace(posterRegex, posterReplace);
}

fs.writeFileSync(dataFile, code);
console.log("ALL PATCHES APPLIED to eroticRomanceMovieData.js!");
