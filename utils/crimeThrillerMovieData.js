// utils/crimeThrillerMovieData.js - COMPLETE CRIME THRILLER COLLECTION 🔥

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 949, imdbID: "tt0113277", Title: "Heat", year: 1995, genre: "Crime", runtime: 170, rank: 1 },
    { tmdbId: 2118, imdbID: "tt0119488", Title: "L.A. Confidential", year: 1997, genre: "Crime", runtime: 138, rank: 2 },
    { tmdbId: 6977, imdbID: "tt0477348", Title: "No Country for Old Men", year: 2007, genre: "Crime", runtime: 122, rank: 3 },
    { tmdbId: 1949, imdbID: "tt0443706", Title: "Zodiac", year: 2007, genre: "Crime", runtime: 157, rank: 4 },
    { tmdbId: 146233, imdbID: "tt1392214", Title: "Prisoners", year: 2013, genre: "Crime", runtime: 153, rank: 5 },
    { tmdbId: 629, imdbID: "tt0114369", Title: "The Usual Suspects", year: 1995, genre: "Crime", runtime: 106, rank: 6 },
    { tmdbId: 322, imdbID: "tt0327056", Title: "Mystic River", year: 2003, genre: "Crime", runtime: 138, rank: 7 },
    { tmdbId: 11423, imdbID: "tt0353969", Title: "Memories of Murder", year: 2003, genre: "Crime", runtime: 132, rank: 8 },
    { tmdbId: 1422, imdbID: "tt0407887", Title: "The Departed", year: 2006, genre: "Crime", runtime: 151, rank: 9 },
    { tmdbId: 2034, imdbID: "tt0139654", Title: "Training Day", year: 2001, genre: "Crime", runtime: 122, rank: 10 }
];

// Helper to ensure default values
const createMovieData = (data) => ({
    crimeIntensity: 85,
    psychologicalTension: 80,
    visceralImpact: 75,
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const SENSITIVE_TIMELINES = {
    949: { scenes: [
        { start: "4:23", end: "5:13", type: "Kissing", severity: "Mild" },
        { start: "22:00", end: "22:07", type: "Kissing", severity: "Mild" },
        { start: "30:50", end: "31:17", type: "Kissing", severity: "Mild" },
        { start: "1:07:35", end: "1:07:38", type: "Kissing", severity: "Mild" }
    ]},
    2118: { scenes: [
        { start: "12:02", end: "12:10", type: "Partial nudity", severity: "Mild" },
        { start: "35:00", end: "35:08", type: "Partial nudity", severity: "Mild" },
        { start: "57:28", end: "57:34", type: "Partial nudity", severity: "Mild" },
        { start: "1:04:05", end: "1:04:10", type: "Partial nudity", severity: "Mild", description: "Photographs" },
        { start: "1:07:35", end: "1:07:43", type: "Kissing", severity: "Mild" }
    ]},
    6977: { scenes: [] },
    1949: { scenes: [] },
    146233: { scenes: [] },
    629: { scenes: [
        { start: "1:00:15", end: "1:00:47", type: "Sexual content", severity: "Moderate" }
    ]},
    322: { scenes: [
        { start: "11:45", end: "12:16", type: "Kissing", severity: "Mild" },
        { start: "2:09:45", end: "2:10:16", type: "Kissing", severity: "Mild", description: "Passionate" }
    ]},
    11423: { scenes: [
        { start: "9:58", end: "10:10", type: "Sex", severity: "Moderate" },
        { start: "54:34", end: "54:55", type: "Nudity", severity: "Mild", description: "Men" },
        { start: "1:01:12", end: "1:02:40", type: "Sexual material", severity: "Moderate", description: "Man" },
        { start: "1:25:12", end: "1:25:47", type: "Partial nudity", severity: "Mild", description: "Woman" }
    ]},
    1422: { scenes: [
        { start: "1:13:18", end: "1:13:22", type: "Kissing", severity: "Mild" },
        { start: "1:21:50", end: "1:22:20", type: "Kissing", severity: "Mild", description: "Passionate + Undressing" },
        { start: "1:24:40", end: "1:24:47", type: "Sexual gesture", severity: "Mild" }
    ]},
    2034: { scenes: [
        { start: "52:00", end: "52:13", type: "Kissing", severity: "Mild" },
        { start: "1:37:55", end: "1:39:45", type: "Nudity", severity: "Moderate" }
    ]}
};

export const FALLBACK_POSTERS = {
    949: "https://m.media-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX500.jpg",
    2118: "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    6977: "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX500.jpg",
    1949: "https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX500.jpg",
    146233: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX500.jpg",
    629: "https://m.media-amazon.com/images/M/MV5BYjViNWIxYjktMGJmYS00ZWI4LTg5ZmEtN2E5Mjc3YTdkMGVjXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX500.jpg",
    322: "https://m.media-amazon.com/images/M/MV5BMmRiZDNjYWUtY2IxZC00OTI0LTk0MjYtYzRmMTVkN2ZlZTJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
    11423: "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LWJlZWYtMWNiNGZkYmFiM2NkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX500.jpg",
    1422: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX500.jpg",
    2034: "https://m.media-amazon.com/images/M/MV5BODZlYTZhMWItYTRmNy00ZDI0LWEzZjktN2YzYWJmOTYxYjkxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg"
};

export const COMPLETE_MOVIE_DATA = {
    // 1. Heat
    949: createMovieData({ 
        crimeIntensity: 96, psychologicalTension: 88, visceralImpact: 95, complexityLevel: "EXTREME", 
        dominantColor: "#1a2b3c", rating: 8.3, criticsScore: 93, audienceScore: 90, 
        director: "Michael Mann", cast: ["Al Pacino", "Robert De Niro", "Val Kilmer"], 
        boxOffice: "$187.4 million", budget: "$60 million", 
        dna: { Crime: 50, Thriller: 35, Drama: 15 }, 
        scenes: [
            { time: 38, intensity: 52, label: "Coffee Shop Meeting", color: "#b91c1c" },
            { time: 87, intensity: 68, label: "Bank Heist", color: "#f87171" },
            { time: 134, intensity: 88, label: "Downtown Shootout", color: "#fbbf24" },
            { time: 152, intensity: 93, label: "Final Chase", color: "#fde68a" },
            { time: 167, intensity: 96, label: "Airport Showdown", color: "#dc2626" }
        ], 
        synopsis: "Master thief Neil McCauley (Robert De Niro) and his crew pull off high-stakes heists with military precision, while obsessive LAPD detective Vincent Hanna (Al Pacino) tracks their every move. This is the ultimate cat-and-mouse crime epic featuring the iconic coffee shop confrontation between two legends. Mann's masterpiece explores the thin line between cop and criminal in LA's neon-lit underworld.", 
        themes: ["Obsession", "Duality", "Professionalism", "Urban Crime"], 
        awards: ["AFI Top 100", "Critical Acclaim"] 
    }),
    
    // 2. L.A. Confidential
    2118: createMovieData({ 
        crimeIntensity: 94, psychologicalTension: 85, visceralImpact: 80, complexityLevel: "HIGH", 
        dominantColor: "#8b6914", rating: 8.2, criticsScore: 99, audienceScore: 92, 
        director: "Curtis Hanson", cast: ["Kevin Spacey", "Russell Crowe", "Guy Pearce"], 
        boxOffice: "$126.2 million", budget: "$35 million", 
        dna: { Crime: 45, Mystery: 35, Drama: 20 }, 
        scenes: [
            { time: 22, intensity: 48, label: "Night Owl Massacre", color: "#b91c1c" },
            { time: 58, intensity: 62, label: "Investigation Begins", color: "#f87171" },
            { time: 95, intensity: 75, label: "Conspiracy Uncovered", color: "#fbbf24" },
            { time: 121, intensity: 86, label: "Victory Motel", color: "#fde68a" },
            { time: 134, intensity: 94, label: "Final Shootout", color: "#dc2626" }
        ], 
        synopsis: "In 1950s Los Angeles, three very different LAPD officers—a celebrity cop, a brutal enforcer, and an ambitious detective—become entangled in a web of sex, corruption, and murder. This neo-noir masterpiece peels back the glamorous veneer of Hollywood's golden age to reveal the rot beneath.", 
        themes: ["Corruption", "Justice", "Noir Style", "1950s Hollywood"], 
        awards: ["Academy Award Winner", "BAFTA Winner"] 
    }),

    // 3. No Country for Old Men
    6977: createMovieData({ 
        crimeIntensity: 95, psychologicalTension: 98, visceralImpact: 92, complexityLevel: "EXTREME", 
        dominantColor: "#865c07", rating: 8.2, criticsScore: 93, audienceScore: 89, 
        director: "Coen Brothers", cast: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"], 
        boxOffice: "$171.6 million", budget: "$25 million", 
        dna: { Thriller: 50, Crime: 35, Drama: 15 }, 
        scenes: [
            { time: 15, intensity: 60, label: "Coin Toss", color: "#b91c1c" },
            { time: 41, intensity: 73, label: "Motel Shootout", color: "#f87171" },
            { time: 68, intensity: 82, label: "Desert Standoff", color: "#fbbf24" },
            { time: 92, intensity: 89, label: "The Decision", color: "#fde68a" },
            { time: 115, intensity: 95, label: "Inevitable Fate", color: "#dc2626" }
        ], 
        synopsis: "A hunter stumbles upon a drug deal gone wrong in the Texas desert and makes off with $2 million in cash. But his decision unleashes Anton Chigurh (Javier Bardem)—a remorseless, philosophizing hitman with a captive bolt pistol and a coin for making life-or-death decisions. This Coen Brothers masterpiece is a meditation on fate, violence, and the changing face of evil in modern America.", 
        themes: ["Fate", "Violence", "Morality", "Inevitability"], 
        awards: ["Academy Award Winner", "4 Oscars"] 
    }),

    // 4. Zodiac
    1949: createMovieData({ 
        crimeIntensity: 92, psychologicalTension: 95, visceralImpact: 85, complexityLevel: "EXTREME", 
        dominantColor: "#1e3a5f", rating: 7.7, criticsScore: 90, audienceScore: 84, 
        director: "David Fincher", cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr."], 
        boxOffice: "$84.7 million", budget: "$65 million", 
        dna: { Crime: 50, Mystery: 35, Thriller: 15 }, 
        scenes: [
            { time: 25, intensity: 55, label: "First Murder", color: "#b91c1c" },
            { time: 62, intensity: 68, label: "Ciphers Decoded", color: "#f87171" },
            { time: 98, intensity: 78, label: "Basement Search", color: "#fbbf24" },
            { time: 128, intensity: 85, label: "Lake Berryessa", color: "#fde68a" },
            { time: 145, intensity: 92, label: "Final Obsession", color: "#dc2626" }
        ], 
        synopsis: "In late 1960s and 1970s San Francisco, a mysterious killer taunts police and journalists with cryptic letters and ciphers while committing brutal murders. Cartoonist Robert Graysmith (Jake Gyllenhaal) becomes obsessed with solving the Zodiac case, even as it destroys careers and lives around him. Fincher's meticulous procedural captures the madness of an unsolved mystery that refuses to let go.", 
        themes: ["Obsession", "Unsolved Mystery", "Truth vs. Certainty", "Paranoia"], 
        awards: ["Saturn Award", "Critical Acclaim"] 
    }),

    // 5. Prisoners
    146233: createMovieData({ 
        crimeIntensity: 93, psychologicalTension: 97, visceralImpact: 88, complexityLevel: "HIGH", 
        dominantColor: "#2d4a5c", rating: 8.1, criticsScore: 81, audienceScore: 89, 
        director: "Denis Villeneuve", cast: ["Hugh Jackman", "Jake Gyllenhaal", "Paul Dano"], 
        boxOffice: "$122 million", budget: "$46 million", 
        dna: { Crime: 45, Thriller: 40, Drama: 15 }, 
        scenes: [
            { time: 18, intensity: 62, label: "Disappearance", color: "#b91c1c" },
            { time: 48, intensity: 75, label: "Interrogation", color: "#f87171" },
            { time: 85, intensity: 88, label: "Basement Discovery", color: "#fbbf24" },
            { time: 118, intensity: 91, label: "Torture", color: "#fde68a" },
            { time: 145, intensity: 93, label: "The Whistle", color: "#dc2626" }
        ], 
        synopsis: "When Keller Dover's (Hugh Jackman) young daughter vanishes on Thanksgiving, he's convinced a mentally challenged man is responsible. As Detective Loki (Jake Gyllenhaal) works the case methodically, Keller takes matters into his own hands—kidnapping and torturing the suspect in a desperate race against time. Villeneuve crafts a brutal examination of how far a parent will go and whether there are moral limits in the face of unimaginable loss.", 
        themes: ["Parental Love", "Moral Ambiguity", "Vigilante Justice", "Faith"], 
        awards: ["Academy Award Nomination", "Critics Choice"] 
    }),

    // 6. The Usual Suspects
    629: createMovieData({ 
        crimeIntensity: 85, psychologicalTension: 90, visceralImpact: 70, complexityLevel: "EXTREME", 
        dominantColor: "#2a3a4f", rating: 8.5, criticsScore: 88, audienceScore: 94, 
        director: "Bryan Singer", cast: ["Kevin Spacey", "Gabriel Byrne", "Benicio del Toro"], 
        boxOffice: "$23.3 million", budget: "$6 million", 
        dna: { Crime: 50, Mystery: 40, Thriller: 10 }, 
        scenes: [
            { time: 15, intensity: 45, label: "The Lineup", color: "#b91c1c" },
            { time: 42, intensity: 65, label: "Planning the Job", color: "#f87171" },
            { time: 78, intensity: 80, label: "The Boat", color: "#fbbf24" },
            { time: 92, intensity: 90, label: "Keyser Söze Revealed", color: "#fde68a" },
            { time: 104, intensity: 97, label: "The Walk", color: "#dc2626" }
        ], 
        synopsis: "A crippled con artist named Verbal Kint (Kevin Spacey) recounts to authorities how he and four other criminals met, formed an uneasy alliance, and became entangled with the mythical crime lord Keyser Söze. But as the story unfolds through flashbacks, every detail becomes suspect. Bryan Singer's legendary thriller builds to one of cinema's most shocking reveals—a twist that recontextualizes everything.", 
        themes: ["Deception", "Mythology", "Unreliable Narrator", "Criminal Underworld"], 
        awards: ["Academy Award Winner", "2 Oscars"] 
    }),

    // 7. Mystic River
    322: createMovieData({ 
        crimeIntensity: 89, psychologicalTension: 92, visceralImpact: 85, complexityLevel: "HIGH", 
        dominantColor: "#3d4f5c", rating: 7.9, criticsScore: 87, audienceScore: 91, 
        director: "Clint Eastwood", cast: ["Sean Penn", "Tim Robbins", "Kevin Bacon"], 
        boxOffice: "$156.8 million", budget: "$30 million", 
        dna: { Crime: 40, Drama: 45, Mystery: 15 }, 
        scenes: [
            { time: 22, intensity: 58, label: "Childhood Trauma", color: "#b91c1c" },
            { time: 55, intensity: 70, label: "Murder Discovery", color: "#f87171" },
            { time: 90, intensity: 82, label: "Interrogation", color: "#fbbf24" },
            { time: 118, intensity: 86, label: "Confession", color: "#fde68a" },
            { time: 132, intensity: 89, label: "Tragic Truth", color: "#dc2626" }
        ], 
        synopsis: "Three childhood friends in working-class Boston are reunited after one's daughter is murdered. As ex-con Jimmy (Sean Penn) seeks vengeance, detective Sean (Kevin Bacon) investigates, and damaged Dave (Tim Robbins) becomes a suspect, buried trauma from their shared past resurfaces. Eastwood's haunting drama explores how a single childhood moment can echo through decades, destroying lives and relationships in ways no one can escape.", 
        themes: ["Childhood Trauma", "Guilt", "Friendship", "Working-Class Boston"], 
        awards: ["Academy Award Winner", "2 Oscars"] 
    }),

    // 8. Memories of Murder
    11423: createMovieData({ 
        crimeIntensity: 91, psychologicalTension: 94, visceralImpact: 88, complexityLevel: "HIGH", 
        dominantColor: "#556b2f", rating: 8.1, criticsScore: 82, audienceScore: 88, 
        director: "Bong Joon-ho", cast: ["Song Kang-ho", "Kim Sang-kyung", "Kim Roi-ha"], 
        boxOffice: "$1.2 million", budget: "$2.8 million", 
        dna: { Crime: 50, Mystery: 30, Drama: 20 }, 
        scenes: [
            { time: 18, intensity: 60, label: "First Murder", color: "#b91c1c" },
            { time: 52, intensity: 72, label: "Wrong Suspect", color: "#f87171" },
            { time: 88, intensity: 80, label: "Pattern Emerges", color: "#fbbf24" },
            { time: 115, intensity: 87, label: "Final Victim", color: "#fde68a" },
            { time: 128, intensity: 91, label: "Staring Back", color: "#dc2626" }
        ], 
        synopsis: "In 1980s rural South Korea, incompetent local detectives Park and Cho investigate a series of brutal serial murders—the country's first. As bodies pile up and every lead goes nowhere, a Seoul detective arrives with modern methods. But in a culture with no forensic infrastructure and where torture passes for interrogation, how do you catch a killer who leaves no evidence? Bong's masterpiece is equal parts procedural, dark comedy, and haunting meditation on unsolved evil.", 
        themes: ["Incompetence", "Serial Murder", "1980s Korea", "Unsolved Evil"], 
        awards: ["Blue Dragon Film Awards", "International Acclaim"] 
    }),

    // 9. The Departed
    1422: createMovieData({ 
        crimeIntensity: 94, psychologicalTension: 90, visceralImpact: 92, complexityLevel: "HIGH", 
        dominantColor: "#4a5568", rating: 8.5, criticsScore: 90, audienceScore: 94, 
        director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"], 
        boxOffice: "$291.5 million", budget: "$90 million", 
        dna: { Crime: 50, Thriller: 35, Drama: 15 }, 
        scenes: [
            { time: 28, intensity: 62, label: "Double Life", color: "#b91c1c" },
            { time: 68, intensity: 76, label: "Rooftop Meeting", color: "#f87171" },
            { time: 105, intensity: 85, label: "Identity Crisis", color: "#fbbf24" },
            { time: 135, intensity: 92, label: "Elevator Massacre", color: "#fde68a" },
            { time: 148, intensity: 94, label: "Final Betrayal", color: "#dc2626" }
        ], 
        synopsis: "Billy Costigan (Leonardo DiCaprio) goes undercover in Irish mob boss Frank Costello's (Jack Nicholson) organization, while Costello plants his own mole, Colin Sullivan (Matt Damon), inside the Massachusetts State Police. As both rats hunt for each other, identities blur and paranoia escalates in Scorsese's remake of the Hong Kong thriller Infernal Affairs. This is a chess game where every move could be fatal and no one knows who to trust.", 
        themes: ["Identity", "Loyalty", "Betrayal", "Double Life"], 
        awards: ["Academy Award Winner", "4 Oscars including Best Picture"] 
    }),

    // 10. Training Day
    2034: createMovieData({ 
        crimeIntensity: 88, psychologicalTension: 85, visceralImpact: 80, complexityLevel: "MEDIUM", 
        dominantColor: "#6b4423", rating: 7.8, criticsScore: 73, audienceScore: 87, 
        director: "Antoine Fuqua", cast: ["Denzel Washington", "Ethan Hawke", "Scott Glenn"], 
        boxOffice: "$104.9 million", budget: "$45 million", 
        dna: { Crime: 45, Thriller: 35, Drama: 20 }, 
        scenes: [
            { time: 18, intensity: 55, label: "First Day", color: "#b91c1c" },
            { time: 48, intensity: 68, label: "Drug Bust", color: "#f87171" },
            { time: 82, intensity: 78, label: "The Truth Emerges", color: "#fbbf24" },
            { time: 105, intensity: 85, label: "Bathtub Scene", color: "#fde68a" },
            { time: 118, intensity: 88, label: "Final Showdown", color: "#dc2626" }
        ], 
        synopsis: "Rookie LAPD officer Jake Hoyt (Ethan Hawke) has 24 hours to prove himself to legendary narcotics detective Alonzo Harris (Denzel Washington). But as the day unfolds through the criminal underbelly of Los Angeles, Jake realizes his training officer isn't just bending rules—he's the most dangerous criminal on the streets. Washington's Oscar-winning performance creates one of cinema's most charismatic villains in this explosive examination of corruption and survival.", 
        themes: ["Police Corruption", "Morality", "Survival", "Power"], 
        awards: ["Academy Award Winner", "Denzel Washington Best Actor"] 
    })
};

// 5️⃣ STRATEGIC_QUOTES
export const STRATEGIC_QUOTES = {
    949: "A guy told me one time, don't let yourself get attached to anything",
    2118: "Rollo Tomasi",
    6977: "What's the most you've ever lost on a coin toss?",
    1949: "Not many people have basements in California",
    146233: "Pray for the best, but prepare for the worst",
    629: "The greatest trick the devil ever pulled was convincing the world he didn't exist",
    322: "We bury our sins, we wash them clean",
    11423: "Documents never lie",
    1422: "I'm the guy who does his job. You must be the other guy",
    2034: "King Kong ain't got shit on me!"
};

// 6️⃣ CINEMATIC_COLORS
export const CINEMATIC_COLORS = {
    Crime: "#dc2626",
    Thriller: "#0f172a",
    Drama: "#dc2626",
    Mystery: "#581c87",
    Action: "#7c2d12"
};

// 7️⃣ RATING_OPTIONS
export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: "Clean ticket - Solid entertainment" },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

// 8️⃣ CRIME_THRILLER_FAQS
export const CRIME_THRILLER_FAQS = {
    'Heat': [
        { question: "Is Heat based on a true story?", answer: "Yes, Heat is partially based on the true story of Neil McCauley, a real Chicago criminal who died in a shootout with police in 1963. Director Michael Mann first explored this story in his 1989 TV movie 'L.A. Takedown' before expanding it into Heat. The famous coffee shop scene between De Niro and Pacino was inspired by real meetings between career criminals and the detectives who tracked them." },
        { question: "Did Al Pacino and Robert De Niro really meet for the first time in Heat?", answer: "Contrary to popular belief, Heat was not the first time Pacino and De Niro appeared on screen together. They were both in The Godfather Part II (1974), but their storylines took place in different time periods so they never shared a scene. Heat marked the first time these two acting legends actually performed opposite each other on screen." },
        { question: "Where was the famous downtown shootout in Heat filmed?", answer: "The legendary 11-minute downtown Los Angeles shootout was filmed on location in downtown LA with no CGI—all practical effects and real blanks. The scene used over 3,000 rounds of blank ammunition. Director Michael Mann recorded the actual gunfire audio on location to capture realistic urban acoustics, which is why the scene sounds so viscerally authentic." }
    ],
    'L.A. Confidential': [
        { question: "Is L.A. Confidential based on a true story?", answer: "L.A. Confidential is fiction, but it's deeply rooted in the real corruption of 1950s Los Angeles. Author James Ellroy based his novel on actual LAPD scandals including the Bloody Christmas incident (1951) and the city's pervasive police brutality and corruption. The characters are fictional, but the atmosphere of institutional rot is historically accurate." },
        { question: "What does 'Rollo Tomasi' mean in L.A. Confidential?", answer: "Rollo Tomasi is a fictional name created by Detective Ed Exley to represent unpunished evil. It's the made-up name Exley gives to the man who murdered his father—a killer who was never caught. Throughout the film, 'Rollo Tomasi' becomes a symbol for justice that escapes the system, and saying the name reveals who truly knows the full truth." },
        { question: "Why is L.A. Confidential considered a neo-noir masterpiece?", answer: "L.A. Confidential revitalized neo-noir by combining classic noir elements—femme fatales, moral ambiguity, corruption—with contemporary filmmaking. Its complex plot, morally gray characters, and meticulous recreation of 1950s Los Angeles set a new standard. The film's critical and commercial success proved adult crime dramas could compete with blockbusters." }
    ],
    'No Country for Old Men': [
        { question: "Is No Country for Old Men based on a true story?", answer: "No, but it's inspired by real border violence. Cormac McCarthy's novel (and the Coen Brothers' adaptation) captures the authentic brutality of 1980s drug wars along the Texas-Mexico border. Anton Chigurh is fictional, but hitmen like him—remorseless, professional, nearly unstoppable—were very real during this era of cartel violence." },
        { question: "What does the ending of No Country for Old Men mean?", answer: "The ending is deliberately anticlimactic. Sheriff Bell (Tommy Lee Jones) retires after realizing he can't stop the tide of violence represented by Chigurh. His dream about his father symbolizes a world where morality and order (the old ways) have vanished. The film suggests that evil doesn't require explanation or defeat—it simply exists and persists." },
        { question: "What weapon does Anton Chigurh use in No Country for Old Men?", answer: "Chigurh uses a captive bolt pistol—a pneumatic device normally used to slaughter cattle in slaughterhouses. This choice of weapon is deeply symbolic: he treats humans with the same cold efficiency as livestock. The device requires compressed air and is nearly silent, making it impractical but cinematically terrifying." }
    ],
    'Zodiac': [
        { question: "Is Zodiac based on a true story?", answer: "Yes, Zodiac is meticulously based on the real unsolved Zodiac Killer case that terrorized Northern California from the late 1960s to early 1970s. The film is adapted from Robert Graysmith's non-fiction books. Every murder, cipher, letter, and investigation detail is drawn from actual case files. The Zodiac was never officially identified or caught." },
        { question: "Who was the Zodiac Killer's most likely suspect?", answer: "The film focuses on Arthur Leigh Allen (John Carroll Lynch) as the prime suspect—and he was indeed the LAPD's main person of interest. However, DNA evidence tested in 2002 did not match Allen. The case remains officially unsolved, though amateur investigators continue proposing alternative suspects including Gary Francis Poste and others." },
        { question: "How accurate is Zodiac to the real case?", answer: "Zodiac is considered one of the most accurate true crime films ever made. Director David Fincher obsessively researched case files, crime scene photos, and period details. The murder scenes, ciphers, letters, and timeline match historical records. Some dialogue is taken verbatim from police reports and witness interviews." }
    ],
    'Prisoners': [
        { question: "Is Prisoners based on a true story?", answer: "No, Prisoners is not based on a specific true story, but it draws on the very real nightmare of child abduction. Writer Aaron Guzikowski created the screenplay as an exploration of how far a parent would go to save their child. The moral dilemmas are fictional, but the terror and desperation are universally recognizable." },
        { question: "What does the ending of Prisoners mean?", answer: "The ending is deliberately ambiguous. Detective Loki hears a faint whistle sound from the backyard just after leaving the crime scene, suggesting he might discover Keller Dover trapped in the hole. However, the film cuts to black without confirmation, leaving audiences to decide whether Keller is rescued or dies. This ambiguity mirrors the film's themes about uncertain justice." },
        { question: "Why is Prisoners so dark and intense?", answer: "Director Denis Villeneuve and cinematographer Roger Deakins created Prisoners' oppressive visual style intentionally. The film is bathed in cold, gray tones with perpetual rain to reflect the characters' psychological states. The runtime (153 minutes) allows tension to build unbearably. Villeneuve wanted audiences to feel the same suffocating desperation as the characters." }
    ],
    'The Usual Suspects': [
        { question: "Who is Keyser Söze in The Usual Suspects?", answer: "SPOILER: Keyser Söze is revealed to be Verbal Kint (Kevin Spacey), the seemingly weak, crippled con artist telling the story. The entire narrative Verbal tells customs agent Kujan is fabricated, with details pulled from objects in the office. The film's legendary twist recontextualizes everything we've seen." },
        { question: "What does 'Keyser Söze' mean?", answer: "In the film's mythology, Keyser Söze is a near-mythical Turkish crime lord whose name inspires terror across the criminal underworld. The name roughly translates to 'emperor' in Turkish. Söze's legend involves killing his own family to prove he feared nothing—a story that may itself be just another lie Verbal invents." },
        { question: "How was the twist ending of The Usual Suspects kept secret?", answer: "Director Bryan Singer shot alternate scenes and kept the true twist from most of the cast. Even Gabriel Byrne didn't know the ending during filming. Kevin Spacey was one of the few who knew from the start. The screenplay's final pages were kept under tight security, and early test screenings shocked audiences who couldn't predict the reveal." }
    ],
    'Mystic River': [
        { question: "Is Mystic River based on a true story?", answer: "No, Mystic River is fiction adapted from Dennis Lehane's novel, but it's deeply rooted in authentic Boston working-class culture. The childhood abduction that haunts the characters reflects real fears and traumas. Lehane drew on Boston's history of crime and tight-knit neighborhoods where secrets fester for decades." },
        { question: "What does the ending of Mystic River mean?", answer: "The ending is tragic and morally complex. Jimmy killed an innocent man (Dave) based on false assumptions. Sean knows the truth but chooses silence to protect his friendship. The final parade scene shows Jimmy's power intact, suggesting that guilt and justice don't always align—sometimes terrible wrongs go unpunished." },
        { question: "Why did Clint Eastwood direct Mystic River?", answer: "Eastwood was drawn to the material's exploration of damaged masculinity, childhood trauma, and moral ambiguity—themes present throughout his directorial work. He approached it as a character study rather than a conventional thriller, allowing the actors to deliver raw, emotionally devastating performances. Sean Penn and Tim Robbins both won Oscars." }
    ],
    'Memories of Murder': [
        { question: "Is Memories of Murder based on a true story?", answer: "Yes, Memories of Murder is based on South Korea's first confirmed serial murders—the Hwaseong serial killings between 1986 and 1991. Ten women were raped and murdered, and despite a massive investigation involving 2 million officers checking 21,000 suspects, the case remained unsolved for decades. In 2019, a suspect was finally identified through DNA, but the statute of limitations had expired." },
        { question: "Why is Memories of Murder considered a masterpiece?", answer: "Director Bong Joon-ho (Parasite) blends genres masterfully—procedural crime thriller, dark comedy, and social commentary. The film critiques 1980s South Korea's authoritarian government, police incompetence, and lack of forensic infrastructure. The haunting final scene, where Detective Park stares directly at the camera, breaks the fourth wall to implicate the audience in unsolved evil." },
        { question: "What happens at the end of Memories of Murder?", answer: "The killer is never caught. Years later, Detective Park revisits the crime scene and meets a little girl who says a man recently came and stared into the drainage ditch. Park looks directly into the camera—potentially at the real killer watching the film. It's a chilling meta-commentary on unsolved crimes and the killers who walk free." }
    ],
    'The Departed': [
        { question: "Is The Departed based on a true story?", answer: "The Departed is a remake of the Hong Kong film 'Infernal Affairs' (2002), so it's fiction. However, the Boston setting and Whitey Bulger-inspired crime boss give it authentic flavor. The real Whitey Bulger was an FBI informant and mob boss simultaneously—living the double-life lie central to the film's themes." },
        { question: "Why does everyone die at the end of The Departed?", answer: "Scorsese's nihilistic ending emphasizes that in the world of lies, betrayal, and double identities the film depicts, no one survives clean. Colin (Matt Damon) thinks he's escaped consequences, but Mark Wahlberg's Dignam becomes an agent of final justice. The rat crawling across the balcony in the final shot symbolizes the pervasive corruption." },
        { question: "Did The Departed win Best Picture?", answer: "Yes, The Departed won four Academy Awards in 2007, including Best Picture and Best Director for Martin Scorsese—his first Oscar after five previous nominations. It was seen as the Academy finally honoring one of cinema's greatest living directors. The film also won Best Adapted Screenplay and Best Film Editing." }
    ],
    'Training Day': [
        { question: "Is Training Day based on a true story?", answer: "Training Day is fiction, but it's inspired by real LAPD corruption scandals, particularly the Rampart scandal (late 1990s) where dozens of officers were implicated in excessive force, planting evidence, and narcotics theft. Detective Alonzo Harris represents the systemic corruption that flourished in that era." },
        { question: "Did Denzel Washington win an Oscar for Training Day?", answer: "Yes, Denzel Washington won the Academy Award for Best Actor for his role as corrupt detective Alonzo Harris—his second Oscar overall. It was a departure from his typically heroic roles, and his charismatic, terrifying performance as a villain is considered one of his career-best." },
        { question: "Where was Training Day filmed?", answer: "Training Day was filmed on location in South Los Angeles neighborhoods including Watts, Crenshaw, and Imperial Courts housing project. Director Antoine Fuqua wanted authenticity, so many scenes were shot in actual high-crime areas with real gang members appearing as extras. The tension on set was often real, adding to the film's visceral energy." }
    ]
};

// 9️⃣ UTILITY FUNCTIONS
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('sex')) types.add('intimate scenes');
        if (lowerType.includes('nudity')) types.add('nudity');
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return CRIME_THRILLER_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        "@context": "https://schema.org", "@type": "Movie", "name": movie.Title, "description": movieInfo?.synopsis || `${movie.Title} - A gripping crime thriller`,
        "genre": movie.genre, "datePublished": movie.year.toString(), "director": { "@type": "Person", "name": movieInfo?.director || "Acclaimed Director" },
        "actor": movieInfo?.cast?.map(actor => ({ "@type": "Person", "name": actor })) || [], "duration": `PT${movie.runtime}M`, "image": posterUrl,
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": movieInfo?.rating || 7.0, "bestRating": 10, "worstRating": 1, "ratingCount": movieInfo?.audienceScore || 100 }
    };
};

export const generateFAQSchema = (faqs) => ({
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
});

export const fetchMovieFromTMDB = async (tmdbId) => ({ poster_path: null, title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' });
export const fetchWatchProviders = async (tmdbId, region = 'US') => null;

export const formatSensitiveTimeline = (tmdbId) => {
    const raw = SENSITIVE_TIMELINES[tmdbId];
    if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
    
    return {
        scenes: raw.scenes.map(scene => ({
            start: scene.start,
            end: scene.end,
            type: scene.type,
            description: scene.description || ''
        }))
    };
};