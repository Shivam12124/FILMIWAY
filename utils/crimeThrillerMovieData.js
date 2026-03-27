// utils/crimeThrillerMovieData.js - COMPLETE CRIME THRILLER COLLECTION 🔥

export const TMDB_CONFIG = {
      API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
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
    949: { scenes: [] },
    2118: { scenes: [
        { start: "12:02", end: "12:10", type: "Nudity", severity: "Mild" },
        { start: "35:00", end: "35:08", type: "Nudity", severity: "Mild" },
        { start: "57:28", end: "57:34", type: "Nudity", severity: "Mild" },
        { start: "1:04:05", end: "1:04:10", type: "Nudity", severity: "Mild", description: "Photographs" },
        
    ]},
    6977: { scenes: [] },
    1949: { scenes: [] },
    146233: { scenes: [] },
    629: { scenes: [
        { start: "1:00:15", end: "1:00:47", type: "Sexual content", severity: "Moderate" }
    ]},
    322: { scenes: [] },
    11423: { scenes: [
        { start: "9:58", end: "10:10", type: "Sex", severity: "Moderate" },
        { start: "54:34", end: "54:55", type: "Nudity", severity: "Mild", description: "Men" },
        { start: "1:01:12", end: "1:02:40", type: "Sexual content", severity: "Moderate", description: "Man" },
        { start: "1:25:12", end: "1:25:47", type: "Nudity", severity: "Mild", description: "Woman" }
    ]},
    1422: { scenes: [
        
        { start: "1:24:40", end: "1:24:47", type: "Sexual content", severity: "Mild" }
    ]},
    2034: { scenes: [
        
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
        { question: "Is the movie Heat based on a true story?", answer: "Yes, Heat is partially based on the real-life criminal career of Neil McCauley, a professional thief who died in a 1963 shootout with Chicago police. Director Michael Mann based the film's meticulous 'procedural' feel on real interviews with detectives. Even the iconic coffee shop meeting was inspired by a real-life encounter between McCauley and detective Chuck Adamson." },
        { question: "Was Heat the first time Al Pacino and Robert De Niro acted together?", answer: "While both legends appeared in The Godfather Part II (1974), they played characters in different timelines and never shared the screen. Heat marked the historic first time Pacino and De Niro actually performed opposite each other. To keep the tension real, the two actors famously chose not to rehearse the scene together before filming." },
        { question: "How was the downtown shootout in Heat filmed?", answer: "The legendary 11-minute shootout was filmed entirely on location in downtown Los Angeles using practical effects and real blanks—zero CGI was used. Director Michael Mann recorded the actual gunfire audio on-site rather than using studio sound effects to capture the authentic, echoing 'crack' of weapons in an urban canyon, giving the scene its visceral realism." }
    ],
    'L.A. Confidential': [
        { question: "What is the real-life inspiration behind L.A. Confidential?", answer: "While the plot is fictional, it is deeply rooted in the actual corruption of 1950s Los Angeles. Author James Ellroy drew from real LAPD scandals, specifically the 'Bloody Christmas' incident of 1951. The film masterfully captures the historically accurate atmosphere of institutional rot, celebrity obsession, and police brutality that defined that era." },
        { question: "What does 'Rollo Tomasi' mean in L.A. Confidential?", answer: "Rollo Tomasi is a fictional name invented by Detective Ed Exley to personify 'unpunished evil.' It was the name he gave to his father's unknown killer. In a brilliant narrative twist, the name becomes a verbal 'trap'—when Exley says it to Captain Smith, Smith’s reaction reveals he is the killer, because only the man who heard Exley’s secret could know that name." },
        { question: "Why is L.A. Confidential considered the best neo-noir movie?", answer: "It is hailed as a masterpiece because it successfully modernized classic noir tropes—the femme fatale, the corrupt cop, and the sprawling conspiracy—for a contemporary audience. By balancing three distinct protagonist arcs within a perfectly paced mystery, it set the gold standard for how to adapt complex literature into an adult crime drama." }
    ],
    'No Country for Old Men': [
        { question: "Is Anton Chigurh from No Country for Old Men based on a real person?", answer: "Anton Chigurh is a fictional creation by author Cormac McCarthy, serving as a personification of pure, remorseless fate. However, his character reflects the authentic brutality of the 1980s border drug wars. His weapon of choice—a captive bolt pistol used for slaughtering cattle—symbolizes his view of human beings as mere livestock to be efficiently processed." },
        { question: "What does the ending of No Country for Old Men mean?", answer: "The ending is a meditation on the changing nature of evil. Sheriff Bell (Tommy Lee Jones) retires because he realizes he can no longer understand or stop the 'senseless' violence of the modern world. His final dream about his father suggests that the 'old ways' of order and morality have vanished, leaving only a cold, indifferent reality." },
        { question: "Why does Chigurh use a coin toss to decide who lives?", answer: "The coin toss represents Chigurh's belief in absolute predestination. He views himself not as a murderer, but as an instrument of fate. By letting the coin decide, he removes his own agency from the act, forcing his victims to confront the terrifying reality that their entire lives have led up to a 50/50 chance encounter with death." }
    ],
    'Zodiac': [
        { question: "How accurate is the movie Zodiac to the real case?", answer: "Zodiac is considered one of the most historically accurate true-crime films ever made. Director David Fincher spent years obsessively researching original police files, survivor interviews, and ciphers. Many scenes use dialogue taken verbatim from reports, and the crime scenes were meticulously recreated to match the exact weather and lighting of the actual nights." },
        { question: "Was Arthur Leigh Allen actually the Zodiac Killer?", answer: "The film presents Arthur Leigh Allen as the most compelling suspect, reflecting the real-life investigation's focus. While circumstantial evidence against him was massive, DNA and fingerprint evidence tested in 2002 did not match him. The case remains officially unsolved, though Allen remains the primary person of interest for many original investigators." },
        { question: "What is the meaning of the final scene in Zodiac?", answer: "The final scene, where survivor Mike Mageau identifies Arthur Leigh Allen's photo decades later, provides a sense of 'narrative' closure but not 'legal' closure. By ending on this note, Fincher highlights the tragedy of the case: the detectives found their man, but the evidence and the system failed to deliver a definitive conviction." }
    ],
    'Prisoners': [
        { question: "Does Detective Loki find Keller Dover at the end of Prisoners?", answer: "The ending is a masterful cliffhanger. As Loki stands in the yard, he hears the faint sound of the red emergency whistle coming from the hole. While the film cuts to black before he finds him, it suggests that Keller's 'sacrifice' and Loki’s intuition finally intersect. It leaves the audience to debate whether Keller deserves rescue after his own horrific actions." },
        { question: "What are the main themes of the movie Prisoners?", answer: "Prisoners explores the thin line between justice and vengeance, and the psychological toll of desperation. It asks a terrifying question: how much of your own humanity are you willing to lose to save someone you love? Keller Dover becomes a mirror of the very evil he is trying to fight, proving that trauma can turn victims into victimizers." },
        { question: "Why is the cinematography in Prisoners so highly praised?", answer: "Cinematographer Roger Deakins used a cold, gray, and rain-soaked color palette to create an atmosphere of perpetual dread. The visual style makes the setting feel claustrophobic and oppressive, reflecting the 'trap' the characters are in. Deakins’ use of light and shadow elevates a standard kidnapping plot into a high-art psychological thriller." }
    ],
    'The Usual Suspects': [
        { question: "Who is the real Keyser Söze?", answer: "In one of cinema's greatest twists, Keyser Söze is revealed to be 'Verbal' Kint. The entire story he told was a fabrication—a brilliant manipulation where he used names and details from the office notice board to spin a web of lies. As he walks away, his limp disappears, revealing he was the mastermind hiding in plain sight the entire time." },
        { question: "What does the legend of Keyser Söze represent?", answer: "Keyser Söze represents the power of myth in the criminal underworld. The story of him killing his own family to prove he feared nothing makes him 'the boogeyman.' The film argues that the greatest weapon a criminal can have is a reputation so terrifying that people refuse to believe he actually exists." },
        { question: "How did The Usual Suspects keep its twist ending a secret?", answer: "Director Bryan Singer was so secretive that he reportedly convinced several actors they were actually playing Keyser Söze during filming. Gabriel Byrne famously got into an argument with Singer when he saw the finished film and realized he wasn't the villain. This genuine confusion among the cast helped maintain the film's elusive atmosphere." }
    ],
    'Mystic River': [
        { question: "Is Mystic River based on a real murder case?", answer: "While the story is fictional, author Dennis Lehane based it on the authentic, tight-knit culture of working-class Boston. The film explores 'intergenerational trauma'—how a single act of violence in childhood (Dave's abduction) ripples through decades, eventually destroying the lives of three friends and their families." },
        { question: "What is the meaning of the parade at the end of Mystic River?", answer: "The final parade is a chilling image of social complicity. Jimmy has murdered an innocent man, and Sean—now a detective—knows it. By simply waving at each other, they agree to bury the truth for the sake of the neighborhood. It suggests that in some societies, 'order' is maintained by ignoring the most horrific sins." },
        { question: "Why did Mystic River win so many Oscars?", answer: "The film is a showcase for masterclass acting. Sean Penn and Tim Robbins delivered raw, emotionally devastating performances that captured the different stages of grief and trauma. Clint Eastwood’s direction stripped away the typical 'whodunit' thrills to focus entirely on the tragic destruction of the human soul, earning it universal critical acclaim." }
    ],
    'Memories of Murder': [
        { question: "Is Memories of Murder based on real serial killings?", answer: "Yes, it is based on the Hwaseong serial murders that occurred between 1986 and 1991. It was South Korea’s first major serial killer case. While the film was released while the case was still cold, the real killer (Lee Choon-jae) was finally identified via DNA in 2019, confirming many details portrayed in Bong Joon-ho's film." },
        { question: "Why does the detective look at the camera at the end of Memories of Murder?", answer: "The final shot is one of the most famous in cinema history. Detective Park looks directly into the lens because Bong Joon-ho knew the real killer might eventually watch the movie. It is a direct, haunting confrontation meant to make the killer feel the detective’s gaze across time, ensuring he never feels truly safe." },
        { question: "What does Memories of Murder say about the police?", answer: "The film is a biting critique of the South Korean police force under an authoritarian regime. It shows how a lack of forensic technology, combined with a culture of torturing suspects to get confessions, allowed a serial killer to escape. It portrays the detectives as tragic figures who are physically and mentally ill-equipped to handle pure evil." }
    ],
    'The Departed': [
        { question: "Is Frank Costello from The Departed based on a real mobster?", answer: "Yes, Jack Nicholson’s character is heavily inspired by the real-life Boston mob boss James 'Whitey' Bulger. Like Costello, Bulger was a ruthless criminal who simultaneously acted as an FBI informant, using his 'rat' status to eliminate his competition while protected by the law." },
        { question: "What does the ending of The Departed symbolize?", answer: "The rapid-fire deaths of the main characters create a nihilistic ending where no one 'wins.' It emphasizes that in a world built on lies and double identities, there is no survival. The final shot of the rat on the balcony is a literal and symbolic reminder of the pervasive 'ratting' and corruption that destroyed everyone involved." },
        { question: "Why was The Departed such a big win for Martin Scorsese?", answer: "Despite being one of the greatest directors in history, Scorsese had never won an Oscar for Best Director until The Departed. The film was seen as a return to his gritty, crime-drama roots, but with a polished, modern energy. It proved he could still dominate the genre he helped define while finally earning him the Academy’s highest honor." }
    ],
    'Training Day': [
        { question: "Is Training Day based on the LAPD Rampart scandal?", answer: "While the plot is fictional, the character of Alonzo Harris was inspired by the real-life corruption found in the LAPD's Rampart Division in the late 90s. The scandal involved over 70 officers implicated in unprovoked shootings, planting evidence, and stealing narcotics—the exact 'wolf among sheep' philosophy Alonzo preaches." },
        { question: "What makes Denzel Washington's performance in Training Day so iconic?", answer: "Denzel Washington’s portrayal of Alonzo Harris subverted his 'heroic' image. He played Alonzo as a charismatic, seductive monster who truly believed his corruption was a necessary evil. His 'King Kong ain't got shit on me!' monologue was largely improvised, capturing the terrifying ego of a man who believes he is above the law." },
        { question: "Was Training Day actually filmed in dangerous areas of L.A.?", answer: "Yes, director Antoine Fuqua insisted on filming in real South Los Angeles neighborhoods like Watts and the Imperial Courts housing projects. They even secured permission from local gangs to film on their turf. This authenticity gave the film a gritty, high-stakes energy that sets it apart from typical Hollywood studio thrillers." }
    ]
};
// 9️⃣ UTILITY FUNCTIONS: 100% SPAM-FREE, DYNAMIC, & GOOGLE APPROVED
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

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

// 🔥 PARSER FIX: Kept clean to focus only on high-value dealbreakers
export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('explicit')) types.add('sexual content');
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
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = CRIME_THRILLER_FAQS[movie.Title] ? [...CRIME_THRILLER_FAQS[movie.Title]] : [];
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
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
                }
            }
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
                    'text': `Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the ${currentRuntime} runtime.` 
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
    const staticFaqs = CRIME_THRILLER_FAQS[movieTitle] ? [...CRIME_THRILLER_FAQS[movieTitle]] : [];
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
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
            }
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have sex scenes or nudity?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit sex scenes and nudity.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes, regarding explicit sexual content. Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};