// utils/eyesWideShutMovieData.js - EYES WIDE SHUT COLLECTION DATA ✅
// Movies exploring secret societies, paranoia, the occult elite, and surreal nightmares.

export const FALLBACK_POSTERS = {};

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "year": 2001, "genre": "Mystery", "runtime": 147, "rank": 1 },
    { "tmdbId": 622, "imdbID": "tt0142688", "Title": "The Ninth Gate", "year": 1999, "genre": "Thriller", "runtime": 133, "rank": 2 },
    { "tmdbId": 793, "imdbID": "tt0090756", "Title": "Blue Velvet", "year": 1986, "genre": "Mystery", "runtime": 120, "rank": 3 },
    { "tmdbId": 805, "imdbID": "tt0063522", "Title": "Rosemary's Baby", "year": 1968, "genre": "Horror", "runtime": 137, "rank": 4 },
    { "tmdbId": 2649, "imdbID": "tt0119174", "Title": "The Game", "year": 1997, "genre": "Thriller", "runtime": 129, "rank": 5 },
    { "tmdbId": 638, "imdbID": "tt0116922", "Title": "Lost Highway", "year": 1997, "genre": "Mystery", "runtime": 134, "rank": 6 },
    { "tmdbId": 22244, "imdbID": "tt0098354", "Title": "Society", "year": 1989, "genre": "Horror", "runtime": 99, "rank": 7 },
    { "tmdbId": 8224, "imdbID": "tt0134273", "Title": "8mm", "year": 1999, "genre": "Thriller", "runtime": 123, "rank": 8 },
    { "tmdbId": 419430, "imdbID": "tt5052448", "Title": "Get Out", "year": 2017, "genre": "Horror", "runtime": 104, "rank": 9 },
    { "tmdbId": 399057, "imdbID": "tt5715874", "Title": "The Killing of a Sacred Deer", "year": 2017, "genre": "Drama", "runtime": 121, "rank": 10 }
];

// ✅ REVISED STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    1018: "It's the girl.", // Mulholland Drive
    622: "Silence is golden.", // The Ninth Gate
    793: "It's a strange world, isn't it?", // Blue Velvet (Clean & Iconic)
    805: "He has his father's eyes.", // Rosemary's Baby
    2649: "I don't care about the money. I'm pulling back the curtain.", // The Game
    638: "We've met before, haven't we?", // Lost Highway
    22244: "The rich are different from us. They eat us.", // Society
    8224: "If you dance with the devil, the devil don't change. The devil changes you.", // 8mm
    419430: "You know I can't give you the keys, right babe?", // Get Out
    399057: "It's a metaphor. It's symbolic." // The Killing of a Sacred Deer
};

// ✅ SENSITIVE TIMELINES (The "Utility" Data)
export const SENSITIVE_TIMELINES = {
    // 1. Mulholland Drive
    1018: { 
        scenes: [
            { start: "0:23:32", end: "0:24:30", type: "Nudity (Blurred)", severity: "Moderate" },
            { start: "1:38:45", end: "1:42:55", type: "Nudity", severity: "High" },
            { start: "2:01:27", end: "2:02:59", type: "Nudity", severity: "High" }
        ]
    },
    // 2. The Ninth Gate
    622: {
        scenes: [
            { start: "2:04:42", end: "2:05:20", type: "Nudity & Sex", severity: "High" }
        ]
    },
// 3. Blue Velvet
 793: {
        scenes: [
            { start: "0:35:20", end: "0:37:37", type: "Suggestive Clothing (Undergarments) & Partial Nudity (Woman)", severity: "Moderate" },
            { start: "0:40:55", end: "0:42:18", type: "Nudity (Man) & Sexual Content", severity: "High" },
            { start: "0:43:25", end: "0:46:50", type: "Sexual Content & Nudity (Woman)", severity: "High" },
            { start: "0:49:45", end: "0:50:45", type: "Nudity (Woman)", severity: "High" },
            { start: "1:08:50", end: "1:09:27", type: "Nudity (Man & Woman)", severity: "High" },
            { start: "1:41:19", end: "1:44:15", type: "Nudity (Woman)", severity: "High" }
        ]
    },
    // 4. Rosemary's Baby
    805: {
        scenes: [
            { start: "0:10:50", end: "0:11:50", type: "Nudity", severity: "Moderate" },
            { start: "0:47:15", end: "0:49:38", type: "Nudity & Sex", severity: "High" }
        ]
    },
    // 5. The Game
    2649: { scenes: [ { start: "57:52", end: "59:30", type: "Sexual Content(Moaning)", severity: "Moderate" }
    ]},
    // 6. Lost Highway
    638: {
        scenes: [
            { start: "0:13:10", end: "0:16:25", type: "Sex & Nudity", severity: "High" },
            { start: "1:10:35", end: "1:11:45", type: "Sex & Nudity", severity: "High" },
            { start: "1:19:10", end: "1:19:20", type: "Sex & Nudity", severity: "High" },
            { start: "1:23:45", end: "1:24:15", type: "Sex", severity: "High" },
            { start: "1:33:38", end: "1:33:50", type: "Nudity", severity: "High" },
            { start: "1:42:20", end: "1:42:45", type: "Sex", severity: "High" },
            { start: "1:54:10", end: "1:54:56", type: "Sex & Nudity", severity: "High" }
        ]
    },
    // 7. Society
    22244: { scenes: [] },
    // 8. 8mm
    8224: {
        scenes: [
            { start: "0:05:32", end: "0:05:47", type: "Sex (Not Graphic)", severity: "Moderate" },
            { start: "0:35:55", end: "0:37:10", type: "Nudity", severity: "High" },
            { start: "0:46:30", end: "0:49:15", type: "Nudity", severity: "High" },
            { start: "1:06:00", end: "1:06:29", type: "Nudity", severity: "High" }
        ]
    },
    // 9. Get Out
   419430: { scenes: [] },
    // 10. The Killing of a Sacred Deer
    399057: {
        scenes: [
            { start: "0:09:20", end: "0:11:01", type: "Sexual Content & Nudity", severity: "High" }
        ]
    }
};

// ✅ MAPPING NOTE:
// psychologicalIntensity = Paranoia Level
// destructiveObsession = Occult Atmosphere
// visceralImpact = Societal Decay

const createMovieData = (data) => ({
    psychologicalIntensity: 74, 
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Mulholland Drive
    1018: createMovieData({ 
        psychologicalIntensity: 98, destructiveObsession: 85, visceralImpact: 100, complexityLevel: "EXTREME", 
        dominantColor: "#6b21a8", rating: 7.9, criticsScore: 85, audienceScore: 87, director: "David Lynch", 
        cast: ["Naomi Watts", "Laura Harring"], boxOffice: "$20.1 million", budget: "$15 million", 
        dna: { Mystery: 50, Thriller: 30, Drama: 20 },
        scenes: [
            { time: 25, intensity: 40, label: "Winkie's", color: "#6b21a8" },
            { time: 70, intensity: 55, label: "Audition", color: "#dc2626" },
            { time: 110, intensity: 95, label: "Silencio", color: "#60a5fa" },
            { time: 125, intensity: 100, label: "The Box", color: "#0f172a" },
            { time: 140, intensity: 90, label: "Reality", color: "#a78bfa" }
        ],
        synopsis: "An aspiring actress and an amnesiac woman collide in a search for identity that devolves into a surreal nightmare. Lynch shatters the Hollywood dream to expose the psychological trauma of rejection in cinema's most famous mind-bender.",
        themes: ["Identity Fracture", "Hollywood Underbelly", "Dream Logic"]
    }),
    // 2. The Ninth Gate
    622: createMovieData({ 
        psychologicalIntensity: 72, 
        destructiveObsession: 88, 
        visceralImpact: 60, 
        complexityLevel: "HIGH", 
        dominantColor: "#78350f",
        rating: 6.7, 
        criticsScore: 44, 
        audienceScore: 65, 
        director: "Roman Polanski", 
        cast: ["Johnny Depp", "Frank Langella", "Lena Olin"], 
        boxOffice: "$58.4 million", 
        budget: "$38 million",
        dna: { "Mystery": 45, "Horror": 40, "Thriller": 15 },
        scenes: [
            { time: 20, intensity: 35, label: "The Commission", color: "#78350f" },
            { time: 55, intensity: 48, label: "The Library", color: "#0f172a" },
            { time: 85, intensity: 65, label: "The Baroness", color: "#991b1b" },
            { time: 115, intensity: 78, label: "The Ritual", color: "#dc2626" },
            { time: 128, intensity: 82, label: "THE NINTH GATE", color: "#78350f" }
        ],
        synopsis: "A rare book dealer is hired to authenticate a demonic text, only to find himself drawn into a supernatural conspiracy that leads to the gates of Hell itself. Polanski crafts a slow-burn occult thriller where knowledge is the deadliest weapon.",
        themes: ["Occult Knowledge", "Faustian Bargain", "Paranoia"]
    }),
    // 3. Blue Velvet
    793: createMovieData({ 
        psychologicalIntensity: 80, 
        destructiveObsession: 82, 
        visceralImpact: 88, 
        complexityLevel: "HIGH", 
        dominantColor: "#1e3a8a",
        rating: 7.7, 
        criticsScore: 95, 
        audienceScore: 85, 
        director: "David Lynch", 
        cast: ["Kyle MacLachlan", "Isabella Rossellini", "Dennis Hopper"], 
        boxOffice: "$8.6 million", 
        budget: "$6 million",
        dna: { "Neo-Noir": 40, "Psychological": 35, "Mystery": 25 },
        scenes: [
            { time: 15, intensity: 40, label: "The Ear", color: "#1e3a8a" },
            { time: 45, intensity: 94, label: "FRANK BOOTH PEAK", color: "#dc2626" },
            { time: 75, intensity: 62, label: "The Closet", color: "#0f172a" },
            { time: 110, intensity: 78, label: "The Shootout", color: "#0f172a" },
            { time: 118, intensity: 50, label: "The Robin", color: "#1e3a8a" }
        ],
        synopsis: "A college student discovers a severed ear and uncovers a dark underworld of violence and perversion lurking beneath his idyllic suburban town. Lynch's neo-noir masterpiece exposes the rot behind the American Dream.",
        themes: ["Suburban Decay", "Sexual Violence", "Good vs Evil"]
    }),
    // 4. Rosemary's Baby
    805: createMovieData({ 
        psychologicalIntensity: 92, 
        destructiveObsession: 84, 
        visceralImpact: 72, 
        complexityLevel: "HIGH", 
        dominantColor: "#eab308",
        rating: 8.0, 
        criticsScore: 96, 
        audienceScore: 90, 
        director: "Roman Polanski", 
        cast: ["Mia Farrow", "John Cassavetes", "Ruth Gordon"], 
        boxOffice: "$33.4 million", 
        budget: "$3.2 million",
        dna: { "Psychological": 50, "Horror": 30, "Mystery": 20 },
        scenes: [
            { time: 20, intensity: 32, label: "The Bramford", color: "#eab308" },
            { time: 48, intensity: 75, label: "The Conception", color: "#991b1b" },
            { time: 95, intensity: 84, label: "Paranoia Peak", color: "#9333ea" },
            { time: 115, intensity: 70, label: "The Phone Call", color: "#0f172a" },
            { time: 132, intensity: 100, label: "THE EYES", color: "#dc2626" }
        ],
        synopsis: "A young pregnant woman suspects her elderly neighbors are part of a Satanic cult planning to steal her unborn child. Polanski's psychological horror builds paranoia to a fever pitch, culminating in one of cinema's most chilling endings.",
        themes: ["Maternal Fear", "Satanic Panic", "Isolation"]
    }),
    // 5. The Game
    2649: createMovieData({ 
        psychologicalIntensity: 82, 
        destructiveObsession: 50, 
        visceralImpact: 76, 
        complexityLevel: "HIGH", 
        dominantColor: "#0f172a",
        rating: 7.7, 
        criticsScore: 77, 
        audienceScore: 82, 
        director: "David Fincher", 
        cast: ["Michael Douglas", "Sean Penn", "Deborah Kara Unger"], 
        boxOffice: "$109.4 million", 
        budget: "$50 million",
        dna: { "Thriller": 60, "Mystery": 25, "Action": 15 },
        scenes: [
            { time: 15, intensity: 38, label: "The Invitation", color: "#0f172a" },
            { time: 55, intensity: 55, label: "The Clown", color: "#dc2626" },
            { time: 85, intensity: 70, label: "The Cemetery", color: "#1e3a8a" },
            { time: 110, intensity: 80, label: "CRS Siege", color: "#0f172a" },
            { time: 122, intensity: 88, label: "THE LEAP", color: "#dc2626" }
        ],
        synopsis: "A wealthy investment banker receives a mysterious birthday gift from his brother—a game that integrates dangerously with his real life, blurring reality and conspiracy. Fincher's paranoid thriller questions what's real when everything is designed to deceive.",
        themes: ["Reality vs Illusion", "Wealth Paranoia", "Brotherly Betrayal"]
    }),
    // 6. Lost Highway
    638: createMovieData({ 
        psychologicalIntensity: 86, 
        destructiveObsession: 70, 
        visceralImpact: 84, 
        complexityLevel: "EXTREME", 
        dominantColor: "#000000",
        rating: 7.6, 
        criticsScore: 67, 
        audienceScore: 76, 
        director: "David Lynch", 
        cast: ["Bill Pullman", "Patricia Arquette", "Balthazar Getty"], 
        boxOffice: "$3.7 million", 
        budget: "$15 million",
        dna: { "Psychological": 50, "Neo-Noir": 30, "Mystery": 20 },
        scenes: [
            { time: 20, intensity: 88, label: "I'M AT YOUR HOUSE", color: "#ffffff" },
            { time: 48, intensity: 52, label: "The Tapes", color: "#0f172a" },
            { time: 65, intensity: 82, label: "Transformation", color: "#991b1b" },
            { time: 95, intensity: 68, label: "The Cabin", color: "#dc2626" },
            { time: 125, intensity: 85, label: "Eternal Loop", color: "#000000" }
        ],
        synopsis: "A jazz musician is convicted of murdering his wife and mysteriously transforms into a young mechanic, losing his identity in a surreal nightmare. Lynch's most abstract film explores guilt, desire, and the fluidity of self.",
        themes: ["Identity Dissolution", "Psychogenic Fugue", "Sexual Obsession"]
    }),
    // 7. Society
    22244: createMovieData({ 
        psychologicalIntensity: 72, 
        destructiveObsession: 68, 
        visceralImpact: 94, 
        complexityLevel: "MEDIUM", 
        dominantColor: "#b91c1c",
        rating: 6.5, 
        criticsScore: 45, 
        audienceScore: 62, 
        director: "Brian Yuzna", 
        cast: ["Billy Warlock", "Devin DeVasquez", "Evan Richards"], 
        boxOffice: "$0.4 million", 
        budget: "$1 million",
        dna: { "Horror": 50, "Psychological": 40, "Thriller": 10 },
        scenes: [
            { time: 20, intensity: 30, label: "High School", color: "#059669" },
            { time: 40, intensity: 55, label: "The Tape", color: "#b91c1c" },
            { time: 65, intensity: 70, label: "The Party", color: "#dc2626" },
            { time: 88, intensity: 94, label: "THE SHUNTING", color: "#991b1b" },
            { time: 98, intensity: 78, label: "The Escape", color: "#b91c1c" }
        ],
        synopsis: "A Beverly Hills teenager discovers his wealthy family and friends are part of a grotesque, body-melding cult preying on the lower class. Yuzna's satirical body horror climax remains one of the most shocking practical effects sequences ever filmed.",
        themes: ["Class Warfare", "Body Horror", "Teen Alienation"]
    }),
    // 8. 8mm
    8224: createMovieData({ 
        psychologicalIntensity: 78, 
        destructiveObsession: 85, 
        visceralImpact: 82, 
        complexityLevel: "MEDIUM", 
        dominantColor: "#3f3f46",
        rating: 6.6, 
        criticsScore: 22, 
        audienceScore: 58, 
        director: "Joel Schumacher", 
        cast: ["Nicolas Cage", "Joaquin Phoenix", "James Gandolfini"], 
        boxOffice: "$96.4 million", 
        budget: "$40 million",
        dna: { "Crime": 45, "Thriller": 40, "Neo-Noir": 15 },
        scenes: [
            { time: 18, intensity: 35, label: "The Safe", color: "#3f3f46" },
            { time: 42, intensity: 55, label: "The Archive", color: "#0f172a" },
            { time: 75, intensity: 75, label: "Machine", color: "#1d1fb9ff" },
            { time: 88, intensity: 88, label: "SNUFF TRUTH", color: "#dc2626" },
            { time: 115, intensity: 80, label: "Justice", color: "#0f172a" }
        ],
        synopsis: "A private investigator descends into the underground world of illegal snuff films while searching for a missing teenager. Schumacher's neo-noir thriller exposes the darkest corners of human exploitation and moral decay.",
        themes: ["Snuff Films", "Moral Corruption", "Obsessive Search"]
    }),
    // 9. Get Out
   419430: createMovieData({ 
        psychologicalIntensity: 86, 
        destructiveObsession: 55, 
        visceralImpact: 82, 
        complexityLevel: "HIGH", 
        dominantColor: "#14532d",
        rating: 7.7, 
        criticsScore: 85, 
        audienceScore: 86, 
        director: "Jordan Peele", 
        cast: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"], 
        boxOffice: "$255.4 million", 
        budget: "$4.5 million",
        dna: { "Horror": 40, "Psychological": 40, "Thriller": 20 },
        scenes: [
            { time: 18, intensity: 35, label: "The Party", color: "#14532d" },
            { time: 40, intensity: 84, label: "THE SUNKEN PLACE", color: "#60a5fa" }, 
            { time: 88, intensity: 90, label: "THE OPERATION", color: "#991b1b" },
            { time: 95, intensity: 86, label: "THE ESCAPE", color: "#dc2626" },
            { time: 100, intensity: 80, label: "Police Lights", color: "#1e3a8a" }
        ],
        synopsis: "A young Black man uncovers a terrifying secret when he visits his white girlfriend's family estate. Peele's razor-sharp social thriller weaponizes the 'Sunken Place' as a metaphor for racial oppression and cultural erasure.",
        themes: ["Racial Horror", "Cultural Appropriation", "The Sunken Place"]
    }),
    // 10. The Killing of a Sacred Deer
    399057: createMovieData({ 
        psychologicalIntensity: 88, 
        destructiveObsession: 65, 
        visceralImpact: 78, 
        complexityLevel: "HIGH", 
        dominantColor: "#525252",
        rating: 7.0, 
        criticsScore: 80, 
        audienceScore: 68, 
        director: "Yorgos Lanthimos", 
        cast: ["Colin Farrell", "Nicole Kidman", "Barry Keoghan"], 
        boxOffice: "$11.1 million", 
        budget: "$4 million",
        dna: { "Psychological": 50, "Mystery": 30, "Drama": 20 },
        scenes: [
            { time: 22, intensity: 35, label: "The Diner", color: "#525252" },
            { time: 48, intensity: 65, label: "The Paralysis", color: "#9333ea" },
            { time: 78, intensity: 72, label: "The Hospital", color: "#0f172a" },
            { time: 105, intensity: 100, label: "THE CHOICE", color: "#991b1b" },
            { time: 118, intensity: 68, label: "Conclusion", color: "#dc2626" }
        ],
        synopsis: "A surgeon's perfect life unravels when a teenage boy demands he sacrifice a family member to atone for a past mistake. Lanthimos's deadpan Greek tragedy builds to an impossible moral choice that shatters the nuclear family.",
        themes: ["Moral Dilemma", "Karmic Retribution", "Family Sacrifice"]
    })
};

export const EYES_WIDE_SHUT_MOVIE_FAQS = {
    'Mulholland Drive': [
        { question: "What is the hidden meaning of Mulholland Drive?", answer: "The film pulls back the curtain on the dark side of Hollywood. Similar to how Eyes Wide Shut explores a secret society of New York’s wealthy, David Lynch exposes the entertainment industry as a cult-like entity where shadowy executives and mob-connected figures act as puppeteers, crushing the innocent dreams of outsiders." },
        { question: "What does the Club Silencio scene mean in Mulholland Drive?", answer: "Club Silencio represents the crushing realization that Hollywood reality is a fabrication. The 'lip-sync' performance proves that the art and beauty Diane worshipped are pre-recorded illusions. It is the exact moment the 'masked ball' of her dream ends, forcing her to wake up to her tragic reality." },
        { question: "Who is the Cowboy in Mulholland Drive and what does he represent?", answer: "The Cowboy is the surreal, omnipotent enforcer of the Hollywood 'system.' He doesn't use physical violence; he uses the threat of total erasure from the industry. When he tells Adam, 'You will see me one more time if you do good,' he is asserting the elite's absolute, inescapable control over a person's destiny." },
        { question: "What is the monster behind Winkie's diner in Mulholland Drive?", answer: "The creature is not a literal monster, but a physical manifestation of Diane's overwhelming guilt and the raw, ugly truth of the industry. It represents the terrifying 'darkness' required to succeed in elite circles, serving as a reminder that beneath polished glamour lies a decaying reality." }
    ],
    'The Ninth Gate': [
        { question: "Is the Order of the Silver Dragon in The Ninth Gate a real cult?", answer: "The 'Order of the Silver Dragon' is a fictional creation, but it is heavily modeled after real-world esoteric societies like the historical Hellfire Club. These groups consisted of bored, ultra-wealthy individuals who used their vast resources and status to chase forbidden occult knowledge." },
        { question: "What happens to Dean Corso at the end of The Ninth Gate?", answer: "While he doesn't literally turn into a demon, Corso undergoes a dark spiritual initiation. By the end, he has abandoned his skepticism and his humanity. He enters the Ninth Gate not as a victim, but as an 'enlightened' member of the cosmic elite, successfully navigating a labyrinth the wealthy cult members failed to conquer." },
        { question: "What do the Nine Engravings mean in The Ninth Gate?", answer: "In the world of the film, these rare books are the ultimate currency of the elite, representing exclusive access to supernatural truth. Just as a password grants physical access to a mansion, the Nine Engravings are the keys to a reality that the average person is strictly forbidden from seeing." },
        { question: "Who is the mysterious girl following Dean Corso in The Ninth Gate?", answer: "She is heavily implied to be a fallen angel or a demonic guardian assigned to ensure Corso—the only mortal ruthless enough to be worthy—reaches the final gate. She represents the seductive, dangerous nature of the occult, guiding him through a world of shadows." }
    ],
    'Blue Velvet': [
        { question: "What is the main theme of Blue Velvet?", answer: "The film explores the terrifying 'underworld' hiding just beneath the manicured surface of polite, suburban society. Jeffrey Beaumont is a voyeur—a normal man who becomes obsessed with uncovering the violent perversions of his town, only to realize he is in completely over his head." },
        { question: "What does the severed ear symbolize in Blue Velvet?", answer: "The ear acts as the literal 'portal' into the hidden criminal underworld. By finding it, Jeffrey is invited to 'listen' to dark secrets he wasn't supposed to hear. It represents the sudden, jarring loss of innocence that drags a regular person out of normal society." },
        { question: "What does Frank Booth represent in Blue Velvet?", answer: "Frank represents the 'id'—the raw, uninhibited violence and sexual depravity of the underworld. While he isn't a tuxedo-wearing elite, he operates with the same terrifying impunity and total psychological control over his victims, embodying the nightmare lurking in the shadows." },
        { question: "What does the mechanical robin mean at the end of Blue Velvet?", answer: "The robotic robin represents the return of 'artificial' peace to the town. It is a fake, mechanical version of purity, suggesting that while Frank Booth is gone, the suburban 'American Dream' is just an empty facade covering up a darkness that will always exist." }
    ],
    'Rosemary\'s Baby': [
        { question: "Are the neighbors in Rosemary's Baby part of a real cult?", answer: "They are a fictional coven, but their terror comes from their social integration. They aren't robed figures hiding in a cave; they are polite, wealthy, elderly neighbors who offer tea and advice. The horror lies in the realization that the people committing unthinkable rituals look like everyday citizens." },
        { question: "How does the cult manipulate Rosemary throughout the film?", answer: "The coven's gaslighting is effective because they possess systemic power. They control the doctors, the lawyers, and ultimately Rosemary's own husband. When every trusted authority figure is secretly a member of the society, the victim becomes completely and terrifyingly isolated." },
        { question: "What is the deeper social meaning of Rosemary's Baby?", answer: "The film explores how the ultra-wealthy elite use the bodies and lives of the lower classes as literal fuel for their own legacies. Guy Woodhouse trades his wife’s bodily autonomy and his child for a successful acting career, framing elite success as a transaction built on betrayal." },
        { question: "Why does Rosemary smile at the baby at the end of the movie?", answer: "Her smile represents the total, crushing victory of the coven. They didn't just steal her child; they broke her maternal instinct and spirit until she became an active accomplice. It is a bleak conclusion suggesting the elite always win by forcing the outsider to assimilate." }
    ],
    'The Game': [
        { question: "What is the CRS organization in the movie The Game?", answer: "Consumer Recreation Services (CRS) is a shadowy, omnipotent organization that specializes in manipulating the lives of the bored, ultra-wealthy. They act as a private secret society that operates entirely outside the law, using vast surveillance and psychological triggers to control their clients." },
        { question: "Was the entire game planned from the beginning?", answer: "Yes, every terrifying detail was meticulously planned. Ostensibly, the game is designed to strip a wealthy man of his ego and 'rebirth' him. However, the methods are so violent that it suggests the elite can only feel true emotion through highly artificial, life-threatening psychological torture." },
        { question: "What is the point of the psychological torture in The Game?", answer: "The film creates an atmosphere of total paranoia, where the protagonist is watched every second by a power he cannot see. It explores the idea that ultimate wealth brings ultimate isolation, and the only way to break a billionaire's apathy is to systematically destroy his entire reality." },
        { question: "Did CRS plan the final jump off the roof in The Game?", answer: "The film presents the jump onto the giant airbag as the 'ultimate' planned outcome, but the sheer statistical improbability of him landing exactly on the 'X' suggests an almost god-like level of control by CRS, leaving the protagonist with absolutely zero free will or agency." }
    ],
    'Lost Highway': [
        { question: "What is the psychogenic fugue state in Lost Highway?", answer: "It is a severe dissociative mental state where a person creates an entirely new identity to escape a horrific trauma or crime. Fred Madison psychologically transforms into young mechanic Pete Dayton to escape the crushing reality that he violently murdered his own wife." },
        { question: "Who is the Mystery Man in Lost Highway?", answer: "The terrifying Mystery Man is a supernatural manifestation of Fred’s dark subconscious. When he tells Fred, 'I'm at your house right now,' he breaks the laws of time and space. He is the ultimate voyeur, forcing Fred to look at the objective, violent truth he is trying to hide from." },
        { question: "Did Fred really transform into Pete in Lost Highway?", answer: "Physically, no; psychologically, yes. The film takes place entirely within the fractured mind of a jealous murderer on death row. His suspicion of his wife's hidden sexual life triggers a complete breakdown, erasing the boundaries of reality through a surreal, recursive loop of violence." },
        { question: "What do the mysterious VHS tapes represent in Lost Highway?", answer: "The tapes represent the undeniable, objective truth that the characters are desperately trying to deny. They act as the 'all-seeing eye' that forces the characters to literally watch the evidence of their own moral decay delivered right to their front door." }
    ],
    'Society': [
        { question: "What is the 'Shunting' in the movie Society?", answer: "The Shunting is a grotesque, body-horror ritual where the wealthy elite literally melt and merge their bodies together into a singular, pulsing mass. It serves as a visceral, literal metaphor for the upper class feeding on the poor to sustain their own power and youth." },
        { question: "Are the rich people in Society actually aliens or monsters?", answer: "In the lore of the film, they are a completely different biological species from normal humans. This takes the concept of elite exclusivity to its most terrifying extreme: you cannot marry or buy your way into this high society. You are either born into it, or you are food for it." },
        { question: "What is the underlying political message of the movie Society?", answer: "Released in 1989, it is a biting, literal satire of 1980s 'trickle-down' economics and Beverly Hills excess. The film argues that the upper class doesn't just want the working class's money and labor; they want to consume their literal life force to maintain their pristine status." },
        { question: "Does Bill escape the cult at the end of Society?", answer: "While Bill physically escapes the immediate ritual, the ending is deeply cynical. It suggests that 'The Shunting' happens everywhere in elite circles globally and will continue forever. The power structure remains entirely untouched, and their horrific secrets are protected by their wealth." }
    ],
    '8mm': [
        { question: "Is the movie 8mm based on a true story?", answer: "While not based on one specific true story, the film is rooted in dark urban legends about the extreme criminal underground. It explores the terrifying idea that for ultra-wealthy billionaires, normal pleasures are no longer enough, leading them to fund the most depraved, illegal experiences imaginable." },
        { question: "How does the investigation change Tom Welles in 8mm?", answer: "The film explores the concept that if you 'dance with the devil,' the darkness will inevitably corrupt you. Tom starts as a clean, highly moral family man but the sheer trauma of what he witnesses turns him into a violent, obsessive vigilante, forever destroying his peace of mind." },
        { question: "Who are Dino Velvet and Machine in 8mm?", answer: "They are the cruel, ground-level 'enablers' for the elite. They produce the depravity that the wealthy billionaires desire but don't want to get their own hands dirty creating. They represent a transactional underworld where every human life has a price tag." },
        { question: "Was the snuff film in 8mm real or fake?", answer: "Within the context of the movie's plot, the film is real, and that is the central horror. Unlike the theatrical, masked rituals seen in other secret society films, 8mm forces the protagonist to confront the reality of absolute, physical evil and the total disregard for human life by those in power." }
    ],
    'Get Out': [
        { question: "What is the Order of the Coagula in Get Out?", answer: "The Armitage family and their friends form 'The Order of the Coagula,' a modern, terrifying secret society. Unlike hooded cults, they are wealthy, outwardly 'liberal' elites who use polite garden parties and silent bingo auctions to lure in and sell victims for a sinister scientific ritual." },
        { question: "What does the Sunken Place symbolize in Get Out?", answer: "The Sunken Place represents the total, horrifying loss of physical agency. It is a psychological prison where the victim's consciousness can see everything but control nothing. It is the ultimate metaphor for the commodification and subjugation of marginalized people by those in power." },
        { question: "Why does the Armitage family target Chris in Get Out?", answer: "They target Chris because the aging elite want his physical attributes—his eyes, his strength, and his youth. It is a form of literal and cultural cannibalism, where the wealthy class uses advanced pseudo-science to hijack the bodies of younger people to achieve their own immortality." },
        { question: "What is the significance of the teacup hypnosis in Get Out?", answer: "The teacup and silver spoon are classic symbols of old-money, refined elite power. Using a polite, domestic object like a silver spoon as a weapon for high-level hypnosis is a brilliant metaphor showing how the upper class uses their 'refinement' and manners to quietly subjugate others." }
    ],
    'The Killing of a Sacred Deer': [
        { question: "What is the exact meaning of the title The Killing of a Sacred Deer?", answer: "The title is a direct reference to the ancient Greek myth of Agamemnon, who accidentally killed a sacred deer belonging to the goddess Artemis. To pay his debt and save his army, he was forced to sacrifice his own daughter. The film modernizes this myth into a terrifying tale of inescapable karmic justice." },
        { question: "Why do the characters talk so strangely in The Killing of a Sacred Deer?", answer: "Director Yorgos Lanthimos uses highly stylized, robotic dialogue to emphasize the emotional emptiness of his high-society characters. It suggests that these people are so deeply insulated by their massive wealth and 'perfect' suburban lives that they have lost the ability to express genuine human empathy." },
        { question: "Why does Martin curse Steven's family in the movie?", answer: "Steven, a wealthy surgeon, made a fatal mistake while operating under the influence, resulting in the death of Martin's father. Martin acts as a supernatural, god-like entity delivering absolute justice. He forces Steven into an ancient 'Eye for an Eye' scenario that his money and status cannot protect him from." },
        { question: "Who survives at the end of The Killing of a Sacred Deer?", answer: "Steven ultimately sacrifices his young son, Bob, to lift the curse and save his wife and daughter. While the remaining family physically survives, the final shot of them eating in the diner shows them completely hollowed out, proving that their elite world is built on cold, calculated survival rather than love." }
    ]
};

// ✅ HELPER FUNCTIONS: 100% SPAM-FREE, DYNAMIC, & GOOGLE APPROVED
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sexual content')) types.add('sexual content');
        else if (lowerType.match(/\bsex\b/)) types.add('sex');
        else if (lowerType.includes('explicit')) types.add('explicit content');
        if (lowerType.includes('partial nudity')) types.add('partial nudity');
        else if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('suggestive') || lowerType.includes('lingerie') || lowerType.includes('bikini')) types.add('suggestive clothing');
    });
    return Array.from(types);
};

// 🔥 UNIFIED CLEAN GENERATOR (For Google Bots & LLMs)
// 🔥 HELPER: Calculates total skip time in minutes and seconds
const calculateSkipStats = (scenes) => {
    let totalSeconds = 0;
    scenes.forEach(scene => {
        if (scene.start && scene.end) {
            const parseTime = (t) => {
                const parts = t.split(':').map(Number);
                if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                return 0;
            };
            const startSec = parseTime(scene.start);
            const endSec = parseTime(scene.end);
            if (endSec > startSec) totalSeconds += (endSec - startSec);
        }
    });
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (totalSeconds === 0) return "< 1 min"; 
    if (mins === 0) return `${secs} sec`;
    return secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;
};

// 🔥 NEW: HELPER TO CALCULATE SEVERITY METRICS WITH 2+ EXTREME LOGIC
const getHighestSeverityInfo = (scenes) => {
    const severities = scenes.map(s => (s.severity || 'Moderate').toLowerCase());
    const extremeCount = severities.filter(s => s === 'extreme').length;
    if (extremeCount >= 2) return 'Extreme';
    if (severities.includes('high') || extremeCount === 1) return 'High';
    if (severities.includes('moderate')) return 'Moderate';
    return 'Mild';
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR
export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini'); 
    });

    const sceneCount = heavyScenes.length;
    let schemaDesc = '';
    if (sceneCount > 0) {
        schemaDesc = `${movie.Title} Parents Guide with exact sex & nudity timestamps. ${sceneCount} scenes manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`;
    } else {
        schemaDesc = `${movie.Title} Parents Guide. Filmiway editors have manually verified zero sex scenes or nudity in the full ${currentRuntime} runtime.`;
    }

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': schemaDesc,
        'genre': movie.genre,
        'url': `https://filmiway.com/movie/${movie.slug || movie.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = EYES_WIDE_SHUT_MOVIE_FAQS[movie.Title] ? [...EYES_WIDE_SHUT_MOVIE_FAQS[movie.Title]] : [];
    const intensityScenes = movieInfo?.scenes || [];
    
    const schemaFaqs = staticFaqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }));

    if (intensityScenes.length > 0) {
        const schemaIntensityList = intensityScenes.map(s => `<li>Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)</li>`).join('');
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `What are the most intense scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Intensity metric, ${movie.Title} peaks at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Mature Content');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing to determine if it's truly unsafe for family
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqSchema = familyUnsafeTypes.length > 0 
            ? {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${currentRuntime} runtime.`
                }
            }
            : {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.`
                }
            };

        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes. ${movie.Title} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:<br><br><ul>${schemaListText}</ul><br>Manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.` 
                }
            },
            {
                '@type': 'Question',
                'name': `What time does nudity appear in ${movie.Title} and how do I skip it?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${currentRuntime} version.`
                }
            },
            familyFaqSchema
        );
    } else {
        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have sex scenes or nudity?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `No. Filmiway editors have manually verified that ${movie.Title} is free of explicit sex scenes and nudity.` 
                }
            },
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes, regarding explicit sexual content. Filmiway editors have manually verified that ${movie.Title} does not have any sex, nudity, or sexual content in the full ${currentRuntime} runtime.` 
                }
            }
        );
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'name': `Parents Guide and FAQ for ${movie.Title}`,
        'mainEntity': schemaFaqs
    };

    return { movieSchema, faqSchema };
};

// 🔥 8. FRONTEND UI SYNC
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = EYES_WIDE_SHUT_MOVIE_FAQS[movieTitle] ? [...EYES_WIDE_SHUT_MOVIE_FAQS[movieTitle]] : [];
    const sensitiveScenes = SENSITIVE_TIMELINES[tmdbId]?.scenes || [];
    const movieInfo = COMPLETE_MOVIE_DATA[tmdbId];
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId);
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Intensity: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most intense scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:

${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('lingerie') || t.includes('bikini');
    });

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(tmdbId) || ['mature content'];
        const typesString = typesArray.join(' and ');
        const sceneCount = heavyScenes.length;
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const uiDetailedList = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const fullType = s.severity ? `${s.type || 'Mature Content'}, ${s.severity}` : (s.type || 'Mature Content');
            return `• ${timeRange} (${fullType})`;
        }).join('\n');
        
        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        // Filter out suggestive clothing for the UI as well
        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');
        const familyUnsafeString = familyUnsafeTypes.join(' and ');

        const familyFaqUI = familyUnsafeTypes.length > 0
            ? {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} is not safe to watch with family because it contains ${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes in the ${finalRuntime} runtime.`
            }
            : {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            };

        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:

${uiDetailedList}

Manually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
            },
            {
                question: `What time does nudity appear in ${movieTitle} and how do I skip it?`,
                answer: `Explicit content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${finalRuntime} version.`
            },
            familyFaqUI
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes. Filmiway editors have manually verified that ${movieTitle} is completely free of sex, nudity, and sexual content throughout its entire ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};