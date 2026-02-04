// utils/paramountDramaMovieData.js - PARAMOUNT+ CORE DRAMA COLLECTION DATA
// Emotional Impact, Character Depth, and Human Connection

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 7345, "imdbID": "tt0469494", "Title": "There Will Be Blood", "year": 2007, "genre": "Drama", "runtime": 158, "rank": 1 },
    { "tmdbId": 409, "imdbID": "tt0116209", "Title": "The English Patient", "year": 1996, "genre": "Romance", "runtime": 162, "rank": 2 },
    { "tmdbId": 393457, "imdbID": "tt2671706", "Title": "Fences", "year": 2016, "genre": "Drama", "runtime": 139, "rank": 3 },
    { "tmdbId": 687, "imdbID": "tt0112818", "Title": "Dead Man Walking", "year": 1995, "genre": "Drama", "runtime": 122, "rank": 4 },
    { "tmdbId": 273896, "imdbID": "tt1020072", "Title": "Selma", "year": 2014, "genre": "History", "runtime": 128, "rank": 5 },
    { "tmdbId": 259693, "imdbID": "tt0490215", "Title": "Silence", "year": 2016, "genre": "Drama", "runtime": 161, "rank": 6 },
    { "tmdbId": 995746, "imdbID": "tt13004880", "Title": "One Life", "year": 2024, "genre": "History", "runtime": 110, "rank": 7 },
    { "tmdbId": 374473, "imdbID": "tt5168192", "Title": "I, Daniel Blake", "year": 2016, "genre": "Drama", "runtime": 100, "rank": 8 },
    { "tmdbId": 4922, "imdbID": "tt0421715", "Title": "The Curious Case of Benjamin Button", "year": 2008, "genre": "Fantasy", "runtime": 166, "rank": 9 },
    { "tmdbId": 13, "imdbID": "tt0109830", "Title": "Forrest Gump", "year": 1994, "genre": "Drama", "runtime": 142, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Trauma, Violence, and Addiction)
export const SENSITIVE_TIMELINES = {
    // 1. There Will Be Blood
    7345: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "Industrial Accident", severity: "High" },
            { start: "2:30:00", end: "2:38:00", type: "Brutal Bludgeoning", severity: "Extreme" }
        ] 
    },
    // 2. The English Patient
    409: { 
        scenes: [
            { start: "0:01:00", end: "0:05:00", type: "Severe Burns/Plane Crash", severity: "High" },
            { start: "1:50:00", end: "1:55:00", type: "Torture/Amputation", severity: "High" }
        ] 
    },
    // 3. Fences
    393457: { 
        scenes: [
            { start: "1:15:00", end: "1:25:00", type: "Verbal/Emotional Abuse", severity: "High" },
            { start: "1:40:00", end: "1:45:00", type: "Family Confrontation", severity: "Moderate" }
        ] 
    },
    // 4. Dead Man Walking
    687: { 
        scenes: [
            { start: "0:05:00", end: "0:10:00", type: "Discussion of Rape/Murder", severity: "High" },
            { start: "1:50:00", end: "1:58:00", type: "Execution Scene", severity: "High" }
        ] 
    },
    // 5. Selma
    273896: { 
        scenes: [
            { start: "0:05:00", end: "0:10:00", type: "Church Bombing", severity: "Extreme" },
            { start: "0:50:00", end: "0:55:00", type: "Police Brutality (Bridge)", severity: "High" }
        ] 
    },
    // 6. Silence
    259693: { 
        scenes: [
            { start: "0:20:00", end: "0:25:00", type: "Crucifixion/Drowning", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Scalding Water Torture", severity: "Extreme" }
        ] 
    },
    // 7. One Life
    995746: { 
        scenes: [
            { start: "0:40:00", end: "0:45:00", type: "Child Separation Trauma", severity: "High" },
            { start: "1:00:00", end: "1:05:00", type: "Holocaust Imagery", severity: "Moderate" }
        ] 
    },
    // 8. I, Daniel Blake
    374473: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Food Bank Desperation", severity: "High" },
            { start: "1:30:00", end: "1:35:00", type: "Medical Emergency", severity: "Moderate" }
        ] 
    },
    // 9. The Curious Case of Benjamin Button
    4922: { 
        scenes: [
            { start: "0:35:00", end: "0:40:00", type: "War Violence", severity: "Moderate" },
            { start: "2:20:00", end: "2:30:00", type: "Death and Grief", severity: "Moderate" }
        ] 
    },
    // 10. Forrest Gump
    13: { 
        scenes: [
            { start: "0:45:00", end: "0:55:00", type: "War/Combat Wounds", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Drug Abuse/Domestic Violence", severity: "Moderate" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    7345: "https://image.tmdb.org/t/p/w500/faL4e95X3kM7c7TfE41tA7t1v.jpg",
    409: "https://image.tmdb.org/t/p/w500/a32p18e6c7c7f.jpg",
    393457: "https://image.tmdb.org/t/p/w500/m59f8P72sa6s2.jpg",
    687: "https://image.tmdb.org/t/p/w500/7754s1s8s8s.jpg",
    273896: "https://image.tmdb.org/t/p/w500/88990011.jpg",
    259693: "https://image.tmdb.org/t/p/w500/silence_poster.jpg",
    995746: "https://image.tmdb.org/t/p/w500/onelife_poster.jpg",
    374473: "https://image.tmdb.org/t/p/w500/idanielblake.jpg",
    4922: "https://image.tmdb.org/t/p/w500/benjamin_button.jpg",
    13: "https://image.tmdb.org/t/p/w500/forrest_gump.jpg"
};

// ✅ HELPER: Emotional Impact
const createMovieData = (data) => ({
    emotionalIntensity: 85,    // Default High Emotion
    complexityLevel: "HIGH",
    dominantColor: "#1e293b", // Slate default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {

  // 1. There Will Be Blood (2007)
  // Curve: Slow Burn -> Tension -> Explosion -> Madness.
  // Peak: 98 (The Milkshake Speech).
  7345: createMovieData({
    emotionalIntensity: 98,
    complexityLevel: "MASTERPIECE",
    dominantColor: "#451a03", // Deep Oil Brown
    rating: 8.2, criticsScore: 91, audienceScore: 86,
    director: "Paul Thomas Anderson",
    cast: ["Daniel Day-Lewis", "Paul Dano", "Ciarán Hinds"],
    boxOffice: "$76.2 million", budget: "$25 million",
    dna: { "Drama": 90, "History": 10 },
    scenes: [
      { time: 15, intensity: 40, label: "The Silver Discovery", color: "#a16207" },
      { time: 60, intensity: 65, label: "The Oil Fire", color: "#ea580c" },
      { time: 90, intensity: 75, label: "Baptism", color: "#7c2d12" },
      { time: 120, intensity: 85, label: "Abandonment", color: "#451a03" },
      { time: 150, intensity: 98, label: "I Drink Your Milkshake", color: "#7f1d1d" }
    ],
    themes: ["Greed", "Religion", "Capitalism"],
    synopsis: "A sprawling epic of family, faith, power, and oil, set on the incendiary frontier of California's turn-of-the-century petroleum boom. The story chronicles the rise of Daniel Plainview, a silver miner turned oilman who descends into moral madness as his wealth grows."
  }),

  // 2. The English Patient (1996)
  // Curve: Mystery -> Romance -> Tragedy -> Devastation.
  // Peak: 95 (The Cave Promise).
  409: createMovieData({
    emotionalIntensity: 95,
    complexityLevel: "POETIC",
    dominantColor: "#d97706", // Desert Amber
    rating: 7.4, criticsScore: 86, audienceScore: 83,
    director: "Anthony Minghella",
    cast: ["Ralph Fiennes", "Juliette Binoche", "Willem Dafoe"],
    boxOffice: "$232 million", budget: "$27 million",
    dna: { "Romance": 60, "War": 40 },
    scenes: [
      { time: 10, intensity: 30, label: "The Monastery", color: "#fcd34d" },
      { time: 50, intensity: 70, label: "The Sandstorm", color: "#d97706" },
      { time: 90, intensity: 85, label: "The Cave", color: "#92400e" },
      { time: 130, intensity: 95, label: "Promise Me", color: "#78350f" },
      { time: 155, intensity: 90, label: "Euthanasia", color: "#fffbeb" }
    ],
    themes: ["Memory", "Betrayal", "Love"],
    synopsis: "In the closing days of WWII, a burn victim known only as the 'English Patient' recalls a tragic tale of forbidden love and betrayal in the North African desert as a nurse tends to his final days in an Italian monastery."
  }),

  // 3. Fences (2016)
  // Curve: Talk -> Tension -> Betrayal -> Confrontation.
  // Peak: 96 (Rose's Reply / I Standing Right Here).
  393457: createMovieData({
    emotionalIntensity: 92,
    complexityLevel: "THEATRICAL",
    dominantColor: "#374151", // Industrial Grey
    rating: 7.2, criticsScore: 92, audienceScore: 75,
    director: "Denzel Washington",
    cast: ["Denzel Washington", "Viola Davis", "Stephen Henderson"],
    boxOffice: "$64 million", budget: "$24 million",
    dna: { "Drama": 100 },
    scenes: [
      { time: 20, intensity: 45, label: "Payday", color: "#6b7280" },
      { time: 60, intensity: 75, label: "Why You Not Like Me?", color: "#4b5563" },
      { time: 90, intensity: 95, label: "The Confession", color: "#1f2937" },
      { time: 105, intensity: 96, label: "Rose's Reply", color: "#b91c1c" },
      { time: 130, intensity: 80, label: "The Funeral", color: "#9ca3af" }
    ],
    themes: ["Fatherhood", "Regret", "Duty"],
    synopsis: "A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life. Denzel Washington and Viola Davis deliver powerhouse performances in this adaptation of August Wilson's Pulitzer Prize-winning play."
  }),

  // 4. Dead Man Walking (1995)
  // Curve: Empathy -> Conflict -> Truth -> Execution.
  // Peak: 97 (The Walk / Execution).
  687: createMovieData({
    emotionalIntensity: 97,
    complexityLevel: "ETHICAL",
    dominantColor: "#0f172a", // Death Row Blue/Black
    rating: 7.6, criticsScore: 95, audienceScore: 91,
    director: "Tim Robbins",
    cast: ["Susan Sarandon", "Sean Penn"],
    boxOffice: "$83 million", budget: "$11 million",
    dna: { "Crime": 40, "Drama": 60 },
    scenes: [
      { time: 15, intensity: 30, label: "First Visit", color: "#334155" },
      { time: 60, intensity: 65, label: "The Pardon Board", color: "#475569" },
      { time: 90, intensity: 80, label: "The Truth", color: "#1e293b" },
      { time: 110, intensity: 97, label: "The Walk", color: "#020617" },
      { time: 120, intensity: 85, label: "Burial", color: "#64748b" }
    ],
    themes: ["Redemption", "Capital Punishment", "Forgiveness"],
    synopsis: "A nun, while comforting a convicted killer on death row, empathizes with both the killer and his victim's families. It is a harrowing, balanced, and deeply spiritual examination of the death penalty and the possibility of redemption."
  }),

  // 5. Selma (2014)
  // Curve: Strategy -> Violence -> Resolve -> Victory.
  // Peak: 95 (Bloody Sunday).
  273896: createMovieData({
    emotionalIntensity: 90,
    complexityLevel: "HISTORICAL",
    dominantColor: "#9f1239", // Blood Red / Brick
    rating: 7.5, criticsScore: 99, audienceScore: 86,
    director: "Ava DuVernay",
    cast: ["David Oyelowo", "Tom Wilkinson", "Carmen Ejogo"],
    boxOffice: "$66 million", budget: "$20 million",
    dna: { "History": 70, "Drama": 30 },
    scenes: [
      { time: 20, intensity: 40, label: "MLK in Office", color: "#881337" },
      { time: 50, intensity: 95, label: "Bloody Sunday", color: "#be123c" },
      { time: 80, intensity: 75, label: "Turnaround Tuesday", color: "#9f1239" },
      { time: 100, intensity: 60, label: "The Call", color: "#4c0519" },
      { time: 125, intensity: 90, label: "The Speech", color: "#fb7185" }
    ],
    themes: ["Civil Rights", "Leadership", "Justice"],
    synopsis: "A chronicle of Dr. Martin Luther King, Jr.'s campaign to secure equal voting rights via an epic march from Selma to Montgomery, Alabama, in 1965. The film focuses on the strategy and human toll of leadership in the face of brutal opposition."
  }),

  // 6. Silence (2016)
  // Curve: Faith -> Doubt -> Torture -> Apostasy.
  // Peak: 95 (Trample the Image).
  259693: createMovieData({
    emotionalIntensity: 88,
    complexityLevel: "SPIRITUAL",
    dominantColor: "#365314", // Jungle Green / Mud
    rating: 7.2, criticsScore: 83, audienceScore: 69,
    director: "Martin Scorsese",
    cast: ["Andrew Garfield", "Adam Driver", "Liam Neeson"],
    boxOffice: "$23 million", budget: "$40 million",
    dna: { "History": 50, "Drama": 50 },
    scenes: [
      { time: 30, intensity: 45, label: "The Village", color: "#4d7c0f" },
      { time: 70, intensity: 80, label: "The Crucifixion", color: "#3f6212" },
      { time: 110, intensity: 90, label: "The Inquisitor", color: "#1a2e05" },
      { time: 140, intensity: 95, label: "Trample the Image", color: "#365314" },
      { time: 160, intensity: 60, label: "The End", color: "#ecfccb" }
    ],
    themes: ["Faith", "Doubt", "Suffering"],
    synopsis: "In the 17th century, two Portuguese Jesuit priests travel to Japan in an attempt to propagate Catholicism and locate their mentor, who is rumored to have committed apostasy. It is a grueling, visual masterpiece about the silence of God."
  }),

  // 7. One Life (2024)
  // Curve: Memory -> Effort -> Failure -> Revelation -> Legacy.
  // Peak: 95 (That's Life TV Show).
  995746: createMovieData({
    emotionalIntensity: 91,
    complexityLevel: "HUMANIST",
    dominantColor: "#1e3a8a", // British Blue
    rating: 7.6, criticsScore: 91, audienceScore: 95,
    director: "James Hawes",
    cast: ["Anthony Hopkins", "Johnny Flynn", "Helena Bonham Carter"],
    boxOffice: "$30 million", budget: "$15 million",
    dna: { "History": 60, "Drama": 40 },
    scenes: [
      { time: 20, intensity: 45, label: "Prague 1938", color: "#64748b" },
      { time: 50, intensity: 75, label: "The Last Train", color: "#334155" },
      { time: 80, intensity: 60, label: "Scrapbook", color: "#1e293b" },
      { time: 100, intensity: 95, label: "That's Life TV Show", color: "#1d4ed8" }, // The viral clip moment
      { time: 108, intensity: 85, label: "Reflection", color: "#1e3a8a" }
    ],
    themes: ["Heroism", "Guilt", "Legacy"],
    synopsis: "The true story of Sir Nicholas Winton, who rescued 669 Jewish children from the Nazis in the months leading up to World War II. Fifty years later, he is haunted by the fate of the children he couldn't save, until a live television show reveals the stunning truth of his legacy."
  }),

  // 8. I, Daniel Blake (2016)
  // Curve: Frustration -> Dignity -> Despair -> Tragedy.
  // Peak: 92 (The Food Bank).
  374473: createMovieData({
    emotionalIntensity: 92,
    complexityLevel: "REALISM",
    dominantColor: "#082f49", // Cold Blue
    rating: 7.8, criticsScore: 92, audienceScore: 84,
    director: "Ken Loach",
    cast: ["Dave Johns", "Hayley Squires"],
    boxOffice: "$15 million", budget: "$2 million",
    dna: { "Drama": 100 },
    scenes: [
      { time: 15, intensity: 40, label: "The Assessment", color: "#0c4a6e" },
      { time: 50, intensity: 92, label: "The Food Bank", color: "#0369a1" },
      { time: 75, intensity: 70, label: "Spray Paint", color: "#075985" },
      { time: 90, intensity: 85, label: "The Collapse", color: "#082f49" },
      { time: 98, intensity: 80, label: "The Funeral Speech", color: "#bae6fd" }
    ],
    themes: ["Poverty", "Bureaucracy", "Dignity"],
    synopsis: "After suffering a heart attack, a 59-year-old carpenter must fight the bureaucratic forces of the system in order to receive Employment and Support Allowance. He befriends a single mother and her two children on the same desperate journey."
  }),

  // 9. The Curious Case of Benjamin Button (2008)
  // Curve: Wonder -> Romance -> Loss -> Regression.
  // Peak: 90 (Meeting in the Middle).
  4922: createMovieData({
    emotionalIntensity: 85,
    complexityLevel: "FANTASY",
    dominantColor: "#c2410c", // Sepia/Rust
    rating: 7.8, criticsScore: 72, audienceScore: 80,
    director: "David Fincher",
    cast: ["Brad Pitt", "Cate Blanchett", "Taraji P. Henson"],
    boxOffice: "$335 million", budget: "$150 million",
    dna: { "Fantasy": 50, "Romance": 50 },
    scenes: [
      { time: 20, intensity: 30, label: "Born Old", color: "#78350f" },
      { time: 60, intensity: 65, label: "Meeting Daisy", color: "#c2410c" },
      { time: 100, intensity: 75, label: "The War Tugboat", color: "#9a3412" },
      { time: 130, intensity: 90, label: "Meeting in the Middle", color: "#ea580c" },
      { time: 160, intensity: 85, label: "Dying Young", color: "#fdba74" }
    ],
    themes: ["Time", "Mortality", "Love"],
    synopsis: "Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences. It is a grand, visual epic about the joys of life, the sadness of death, and a love that endures beyond time."
  }),

  // 10. Forrest Gump (1994)
  // Curve: Innocence -> History -> Love -> Loss.
  // Peak: 90 (Jenny's Grave).
  13: createMovieData({
    emotionalIntensity: 80,
    complexityLevel: "CLASSIC",
    dominantColor: "#15803d", // Park Bench Green
    rating: 8.8, criticsScore: 71, audienceScore: 95,
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    boxOffice: "$678 million", budget: "$55 million",
    dna: { "Drama": 70, "Comedy": 30 },
    scenes: [
      { time: 15, intensity: 40, label: "Run Forrest Run", color: "#4ade80" },
      { time: 60, intensity: 75, label: "Vietnam Ambush", color: "#166534" },
      { time: 100, intensity: 65, label: "Running Across America", color: "#15803d" },
      { time: 130, intensity: 90, label: "Jenny's Grave", color: "#14532d" },
      { time: 140, intensity: 80, label: "The Feather", color: "#bbf7d0" }
    ],
    themes: ["Destiny", "Innocence", "History"],
    synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
  })
};

export const STRATEGIC_QUOTES = {
    7345: "I drink your milkshake! I drink it up!",
    409: "We die. We die rich with lovers and tribes, tastes we have swallowed...",
    393457: "Some people build fences to keep people out, and other people build fences to keep people in.",
    687: "I want the last thing you see in this world to be the face of love.",
    273896: "We negotiate, we demonstrate, we resist.",
    259693: "I pray but I am lost. Am I just praying to silence?",
    995746: "If something is not impossible, then there must be a way to do it.",
    374473: "I am a man, not a dog. As such, I demand my rights.",
    4922: "Our lives are defined by opportunities, even the ones we miss.",
    13: "Life is like a box of chocolates. You never know what you're gonna get."
};

export const PARAMOUNT_DRAMA_MOVIE_FAQS = {
    'There Will Be Blood': [
        { question: "Is Daniel Plainview a real person?", answer: "He is loosely based on Edward Doheny, a real-life oil tycoon. However, the character is largely a fictional creation adapted from Upton Sinclair's novel 'Oil!', designed to personify the destructive nature of unchecked capitalism." },
        { question: "What does the ending mean?", answer: "The bowling alley scene represents Daniel's total descent into madness. Having achieved absolute wealth, he has nothing left to conquer but his own past (Eli Sunday). His line 'I'm finished' signifies both the end of his task (killing Eli) and the end of his humanity." },
        { question: "Why is there no music for long stretches?", answer: "Jonny Greenwood's score is intentionally sparse and dissonant. The silence emphasizes the isolation of the landscape and Daniel's growing detachment from other people." }
    ],
    'The English Patient': [
        { question: "Why did Seinfeld make fun of this movie?", answer: "The TV show 'Seinfeld' famously had an episode where Elaine hated the movie while everyone else loved it. It became a pop-culture symbol for 'Oscar bait' films that are beautifully made but seen by some as overly long or boring." },
        { question: "Is the cave real?", answer: "The Cave of Swimmers is a real place in Egypt, and it does contain prehistoric rock art. However, the location used in the film was a set constructed to look like the real cave." },
        { question: "Did Almasy really work for the Germans?", answer: "Yes. In real life, Count Almásy did help the Germans during WWII by smuggling spies across the desert, which makes the romanticized version of him in the film controversial to historians." }
    ],
    'Fences': [
        { question: "Why does the movie feel like a play?", answer: "It is based on August Wilson's Pulitzer Prize-winning play. Denzel Washington, who directed, chose to keep the setting confined mostly to the backyard and house to preserve the claustrophobic, intense atmosphere of the stage production." },
        { question: "What is the symbolism of the fence?", answer: "The fence represents different things for different characters. For Troy, it keeps death and the devil out. For Rose, it is meant to keep her family close and safe. It physically manifests the emotional barriers Troy builds." },
        { question: "Did Viola Davis win an Oscar?", answer: "Yes, Viola Davis won the Academy Award for Best Supporting Actress for her role as Rose. Her performance, particularly the '18 years of my life' monologue, is considered one of the greatest in modern cinema." }
    ],
    'Dead Man Walking': [
        { question: "Is this a true story?", answer: "Yes. It is based on the non-fiction book by Sister Helen Prejean. The character of Matthew Poncelet is a composite of two different death row inmates she served as a spiritual adviser to: Elmo Patrick Sonnier and Robert Lee Willie." },
        { question: "Is the film against the death penalty?", answer: "While Sister Helen is an activist against capital punishment, the film is praised for showing the horrific nature of the crimes committed and the pain of the victims' families, allowing the audience to wrestle with the complexity of the issue rather than preaching." },
        { question: "Did Sean Penn and Susan Sarandon really visit prisons?", answer: "Yes, both actors spent time with Sister Helen and visited prisons to understand the environment. Susan Sarandon won the Best Actress Oscar for her portrayal." }
    ],
    'Selma': [
        { question: "Why isn't the 'I Have a Dream' speech in the movie?", answer: "The filmmakers did not have the rights to use Dr. King's actual speeches, which are owned by his estate (who licensed them to a different studio). Ava DuVernay and the writers had to rewrite the speeches to capture King's cadence and message without using his exact words." },
        { question: "Was LBJ really that antagonistic?", answer: "This is a point of historical debate. The film depicts President Johnson as reluctant and politically calculating regarding the Voting Rights Act, causing friction with King. Some historians argue LBJ was more cooperative in reality, but the film emphasizes the pressure King had to apply to get results." },
        { question: "Where was it filmed?", answer: "Despite being set in Selma, Alabama, much of the filming took place in Georgia due to tax incentives. However, the final march scenes were filmed on the actual Edmund Pettus Bridge." }
    ],
    'Silence': [
        { question: "Why did it take 28 years to make?", answer: "Martin Scorsese read the book in 1989 and tried to make it for decades. It was a passion project that struggled with funding because of its dark, religious, and non-commercial subject matter. He finally made it after 'The Wolf of Wall Street' success." },
        { question: "Did the actors really starve themselves?", answer: "Yes. Adam Driver and Andrew Garfield lost a significant amount of weight to portray the starving priests. Driver reportedly lost nearly 50 pounds to look emaciated for the later scenes." },
        { question: "What is the meaning of the final shot?", answer: "The final shot shows Rodrigues holding a tiny crucifix in his hand inside his coffin. It suggests that while he publicly renounced his faith to save others (apostasy), he secretly kept his belief alive in his heart until the end." }
    ],
    'One Life': [
        { question: "Is the TV show scene real footage?", answer: "The movie recreates a famous real-life episode of the BBC show 'That's Life!' from 1988. The emotional clip of the real Nicholas Winton realizing the audience is made up of children he saved went viral on YouTube years before the movie was made." },
        { question: "How many children did he save?", answer: "He saved 669 children, mostly Jewish, from Czechoslovakia on the eve of WWII. It is estimated that there are over 6,000 descendants of the 'Winton Children' alive today because of his actions." },
        { question: "Why didn't he tell anyone?", answer: "Winton was a humble man who viewed his actions as simply 'doing what needed to be done.' He didn't speak about it for 50 years; the story only came out when his wife found a scrapbook in their attic containing the names and photos of the children." }
    ],
    'I, Daniel Blake': [
        { question: "Is the welfare system really that bad?", answer: "Director Ken Loach based the film on extensive research and interviews with people in the UK benefits system. While fictional, the situations (sanctions, long hold times, food bank reliance) are accurate representations of the 'hostile environment' policy of the time." },
        { question: "Why is the spray paint scene important?", answer: "It is Daniel's only act of public rebellion. Stripped of his voice by the bureaucracy, he uses the graffiti to physically reclaim his identity and demand visibility in a public space." },
        { question: "Did it change any laws?", answer: "The film sparked a massive debate in the British Parliament about the treatment of the disabled and unemployed. It became a cultural touchstone for discussing austerity, though specific policy changes were slow to follow." }
    ],
    'The Curious Case of Benjamin Button': [
        { question: "How did they do the aging effects?", answer: "It was a groundbreaking use of CGI. Brad Pitt's head was digitally aged and placed onto the bodies of smaller actors for the early scenes. As Benjamin 'grew' into Brad Pitt's actual age, they used makeup, and then digital smoothing for the younger years." },
        { question: "Is it based on a book?", answer: "It is loosely based on a short story by F. Scott Fitzgerald. However, the film expands the story significantly, changing the setting from Baltimore to New Orleans and adding the love story with Daisy as the central anchor." },
        { question: "What is the significance of the hummingbird?", answer: "The hummingbird appears at key moments of death and transition (like on the tugboat). It symbolizes infinity (its wings move in a figure-8 pattern) and the idea that life is fleeting but the energy of a soul persists." }
    ],
    'Forrest Gump': [
        { question: "Is Forrest Gump a reliable narrator?", answer: "Not entirely. Forrest sees the world through a lens of innocence. He describes horrific events (war, assassination, abuse) with a matter-of-fact tone. The audience understands the gravity of the history while Forrest just sees people 'doing things.' This irony is the core of the film." },
        { question: "Did Tom Hanks really run that much?", answer: "Tom Hanks did a lot of the running, but for the wide shots of him running across the country, a lookalike double (Jim Hanks, his brother) was often used." },
        { question: "What was in the letter Jenny gave Forrest?", answer: "The movie never reveals what is written in the letter. It is left to the audience's imagination, but it presumably explains her love for him and perhaps the truth about her illness (implied to be HIV/AIDS)." }
    ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size] || 'w500'}${posterPath}`;
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'duration': `PT${movie.runtime}M`,
        'image': FALLBACK_POSTERS[movie.tmdbId] || '',
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
            'bestRating': 10, 
            'worstRating': 1 
        }
    };
};

export const generateFAQSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }))
});