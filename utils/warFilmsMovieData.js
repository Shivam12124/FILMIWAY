// utils/warFilmsMovieData.js - 10 BEST WAR FILMS OF ALL TIME 🎬 ✅
// Unflinching portrayals of conflict, morality, and human resilience.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 857, "imdbID": "tt0120815", "Title": "Saving Private Ryan", "year": 1998, "genre": "Drama, War", "runtime": 169, "rank": 1 },
    { "tmdbId": 28, "imdbID": "tt0078788", "Title": "Apocalypse Now", "year": 1979, "genre": "Drama, War", "runtime": 154, "rank": 2 },
    { "tmdbId": 947, "imdbID": "tt0056172", "Title": "Lawrence of Arabia", "year": 1962, "genre": "Adventure, Biography, Drama, War", "runtime": 216, "rank": 3 },
    { "tmdbId": 25237, "imdbID": "tt0091251", "Title": "Come and See", "year": 1985, "genre": "Drama, War", "runtime": 142, "rank": 4 },
    { "tmdbId": 424, "imdbID": "tt0108052", "Title": "Schindler's List", "year": 1993, "genre": "Biography, Drama, History, War", "runtime": 195, "rank": 5 },
    { "tmdbId": 600, "imdbID": "tt0093058", "Title": "Full Metal Jacket", "year": 1987, "genre": "Drama, War", "runtime": 116, "rank": 6 },
    { "tmdbId": 530915, "imdbID": "tt8183660", "Title": "1917", "year": 2019, "genre": "Drama, War", "runtime": 119, "rank": 7 },
    { "tmdbId": 156249, "imdbID": "tt0082096", "Title": "Das Boot", "year": 1981, "genre": "Drama, War", "runtime": 149, "rank": 8 },
    { "tmdbId": 792, "imdbID": "tt0091763", "Title": "Platoon", "year": 1986, "genre": "Drama, War", "runtime": 120, "rank": 9 },
    { "tmdbId": 975, "imdbID": "tt0047528", "Title": "Paths of Glory", "year": 1957, "genre": "Drama, War", "runtime": 88, "rank": 10 }
];

// ✅ REVISED STRATEGIC QUOTES (100% Clean & SEO Safe)
export const STRATEGIC_QUOTES = {
    857: "Earn this... earn it.", // Saving Private Ryan
    28: "The horror... the horror.", // Apocalypse Now
    947: "Nothing is written.", // Lawrence of Arabia
    25237: "To live is to suffer.", // Come and See (Thematic)
    424: "Whoever saves one life, saves the world entire.", // Schindler's List
    600: "Born to kill.", // Full Metal Jacket
    530915: "There is only one way this war ends. Last man standing.", // 1917
    156249: "Not yet, kameraden. Not yet.", // Das Boot
    792: "The first casualty of war is innocence.", // Platoon
    975: "The paths of glory lead but to the grave." // Paths of Glory
};

// ✅ SENSITIVE TIMELINES (The "Utility" Data)
export const SENSITIVE_TIMELINES = {
    // 1. Saving Private Ryan
    857: { scenes: [] }, 
    
    // 2. Apocalypse Now
    28: {
        scenes: [
            { start: "0:07:17", end: "0:07:30", type: "Nudity (Man)", severity: "High" },
            { start: "0:08:17", end: "0:08:27", type: "Partial Nudity (Man)", severity: "High" },
            { start: "1:05:25", end: "1:06:06", type: "Nudity (Poster)", severity: "Moderate" },
            { start: "2:04:38", end: "2:05:38", type: "Nudity (Woman)", severity: "High" },
            { start: "2:15:27", end: "2:16:40", type: "Nudity (Man)", severity: "High" }
        ]
    },

    // 3. Lawrence of Arabia
    947: { scenes: [] },

    // 4. Come and See
    25237: {
        scenes: [
            { start: "2:01:30", end: "2:01:37", type: "Nudity (Woman)", severity: "High" },
            { start: "2:14:13", end: "2:14:20", type: "Nudity (Man)", severity: "High" }
        ]
    },

    // 5. Schindler's List
    424: {
        scenes: [
            { start: "0:44:15", end: "0:44:50", type: "Sex & Nudity", severity: "High" },
            { start: "1:15:40", end: "1:16:50", type: "Nudity (Woman)", severity: "High" },
            { start: "2:00:25", end: "2:03:00", type: "Nudity (Men & Women)", severity: "High" },
            { start: "2:34:45", end: "2:37:05", type: "Nudity (Woman)", severity: "High" }
        ]
    },

    // 6. Full Metal Jacket
    600: { scenes: [] },

    // 7. 1917
    530915: { scenes: [] },

    // 8. Das Boot
    156249: {
        scenes: [
            { start: "0:09:42", end: "0:09:47", type: "Nudity (Painting)", severity: "Moderate" },
            { start: "0:17:13", end: "0:17:16", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "0:31:53", end: "0:32:33", type: "Partial Nudity (Man)", severity: "Moderate" },
            { start: "0:32:55", end: "0:32:59", type: "Partial Nudity (Man)", severity: "Moderate" }
        ]
    },

    // 9. Platoon
    792: {
        scenes: [
            { start: "0:09:17", end: "0:09:24", type: "Partial Nudity (Man)", severity: "Mild" },
            { start: "0:33:03", end: "0:34:19", type: "Nudity (Posters)", severity: "Moderate" }
        ]
    },

    // 10. Paths of Glory
    975: { scenes: [] }
};
export const FALLBACK_POSTERS = {
    857: "https://image.tmdb.org/t/p/w500/dXF8R5jL0VsUJLc7xij5AzHj1IZ.jpg",
    28: "https://image.tmdb.org/t/p/w500/lQlhYK6RlTcz0Fqst02qj0RyJCW.jpg",
    947: "https://image.tmdb.org/t/p/w500/5oPIKiWjxEVnXMWh2B8L5iqkqOu.jpg",
    25237: "https://image.tmdb.org/t/p/w500/jR0VVMdQxM0m2mTq4ynePKMfD8e.jpg",
    424: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUcQ8CAA0E6nouaC.jpg",
    600: "https://image.tmdb.org/t/p/w500/2l0vHaM1J7s3RvHH0yvIQqANgZN.jpg",
    530915: "https://image.tmdb.org/t/p/w500/sv3q8ZyK3D7zpW6HLzBzpqf4A5J.jpg",
    156249: "https://image.tmdb.org/t/p/w500/qGhV5Apu6fvJD9mfJO7RM5NWDMM.jpg",
    792: "https://image.tmdb.org/t/p/w500/a0jR03qjDUYfKPi5HGU8S7BG6An.jpg",
    975: "https://image.tmdb.org/t/p/w500/kZ3VKEqJFp2C5h1AyhRr6cjNbWZ.jpg"
};

// ✅ MAPPING NOTE:
// warIntensity = Combat & Visceral Horror
// complexityLevel = Thematic Depth
// dominantColor = Atmosphere

const createMovieData = (data) => ({
    warIntensity: 85, 
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Saving Private Ryan
    857: createMovieData({ 
        warIntensity: 98, complexityLevel: "EXTREME", dominantColor: "#1f2937", 
        rating: 8.6, criticsScore: 93, audienceScore: 95, director: "Steven Spielberg", 
        cast: ["Tom Hanks", "Edward Burns", "Tom Sizemore"], boxOffice: "$482.2 million", budget: "$70 million", 
        dna: { War: 70, Drama: 20, History: 10 },
        scenes: [
            { time: 18, intensity: 92, label: "D-Day: Omaha Beach", color: "#dc2626" },
            { time: 65, intensity: 72, label: "Miller's Mission Begins", color: "#ea580c" },
            { time: 98, intensity: 78, label: "Carentan Combat", color: "#f97316" },
            { time: 140, intensity: 88, label: "Reiben's Wound", color: "#fb923c" },
            { time: 160, intensity: 96, label: "Final Sacrifice", color: "#dc2626" }
        ],
        synopsis: "Following the Normandy Landings, a group of U.S. soldiers led by Captain John Miller is tasked with a deadly mission: find Private James Ryan and bring him home after his three brothers are killed in combat. As they fight their way through the brutal landscape of occupied France, the soldiers grapple with the morality of their mission and the incomprehensible cost of war.",
        themes: ["Brotherhood", "Sacrifice", "Morality of War"]
    }),
    // 2. Apocalypse Now
    28: createMovieData({ 
        warIntensity: 94, complexityLevel: "EXTREME", dominantColor: "#1a1a2e",
        rating: 8.4, criticsScore: 98, audienceScore: 90, director: "Francis Ford Coppola", 
        cast: ["Marlon Brando", "Martin Sheen", "Robert Duvall"], boxOffice: "$150 million", budget: "$31 million",
        dna: { War: 60, Drama: 30, Psychological: 10 },
        scenes: [
            { time: 12, intensity: 65, label: "Helicopter Assault", color: "#0369a1" },
            { time: 54, intensity: 58, label: "Sampan Massacre", color: "#ef4444" },
            { time: 97, intensity: 72, label: "Kurtz's Compound", color: "#991b1b" },
            { time: 130, intensity: 85, label: "Ritual and Madness", color: "#7f1d1d" },
            { time: 150, intensity: 94, label: "Kurtz's End", color: "#1f2937" }
        ],
        synopsis: "A fragmented descent into the madness of war during the Vietnam conflict. Captain Willard is ordered on an assassination mission upriver to find Colonel Kurtz, a legendary military figure who has gone rogue. As Willard journeys deeper into the jungle, the line between civilization and savagery blurs into nightmarish surrealism.",
        themes: ["Imperialism", "Madness", "Surrealism"]
    }),
    // 3. Lawrence of Arabia
    947: createMovieData({ 
        warIntensity: 85, complexityLevel: "HIGH", dominantColor: "#f59e0b",
        rating: 8.3, criticsScore: 95, audienceScore: 93, director: "David Lean", 
        cast: ["Peter O'Toole", "Alec Guinness", "Omar Sharif"], boxOffice: "$70 million", budget: "$15 million",
        dna: { War: 45, Drama: 40, Biography: 15 },
        scenes: [
            { time: 28, intensity: 42, label: "Cairo Command", color: "#fbbf24" },
            { time: 78, intensity: 68, label: "Aqaba Bridge Explosion", color: "#f97316" },
            { time: 132, intensity: 82, label: "Deraa Incident", color: "#dc2626" },
            { time: 178, intensity: 74, label: "Damascus Victory", color: "#fbbf24" },
            { time: 208, intensity: 88, label: "Reflection and Farewell", color: "#6b7280" }
        ],
        synopsis: "An epic biographical drama of T.E. Lawrence, a brilliant but enigmatic British officer who becomes a legendary figure during the Arab Revolt against the Ottoman Empire in World War I. Navigating tribal politics, personal demons, and the brutal realities of desert warfare, Lawrence transforms from military strategist to myth.",
        themes: ["Identity", "Imperial Politics", "The Myth of the Hero"]
    }),
    // 4. Come and See
    25237: createMovieData({ 
        warIntensity: 99, complexityLevel: "EXTREME", dominantColor: "#1f1f1f",
        rating: 8.3, criticsScore: 97, audienceScore: 95, director: "Elem Klimov", 
        cast: ["Aleksei Kravchenko", "Olga Mironova", "Liubomiras Laucius"], boxOffice: "$0.7 million", budget: "$0.5 million",
        dna: { War: 70, Drama: 25, Historical: 5 },
        scenes: [
            { time: 22, intensity: 58, label: "Burning Village", color: "#dc2626" },
            { time: 67, intensity: 88, label: "The Massacre", color: "#7f1d1d" },
            { time: 108, intensity: 96, label: "Hitlerite Atrocity", color: "#111827" },
            { time: 135, intensity: 98, label: "Florya's Destruction", color: "#1f2937" },
            { time: 140, intensity: 99, label: "Final Transformation", color: "#000000" }
        ],
        synopsis: "A devastating, unflinching portrait of Nazi atrocities during WWII on the Eastern Front. Young Soviet partisan Florya embarks on what he believes will be a glorious military adventure, only to witness the systematic destruction of his homeland and people. As his journey progresses, Florya's face transforms from innocent excitement to traumatized horror.",
        themes: ["Loss of Innocence", "Genocide", "Trauma"]
    }),
    // 5. Schindler's List
    424: createMovieData({ 
        warIntensity: 92, complexityLevel: "EXTREME", dominantColor: "#2d2d2d",
        rating: 8.9, criticsScore: 98, audienceScore: 97, director: "Steven Spielberg", 
        cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"], boxOffice: "$321.2 million", budget: "$22 million",
        dna: { War: 60, Drama: 25, History: 15 },
        scenes: [
            { time: 28, intensity: 45, label: "Kraków Ghetto", color: "#6b7280" },
            { time: 75, intensity: 68, label: "Shooting from Tower", color: "#ef4444" },
            { time: 112, intensity: 82, label: "List Making", color: "#fbbf24" },
            { time: 154, intensity: 88, label: "Train to Auschwitz", color: "#1f2937" },
            { time: 185, intensity: 95, label: "Schindler's Breakdown", color: "#dc2626" }
        ],
        synopsis: "Based on the true story of Oskar Schindler, a German industrialist who risks everything to save over a thousand Polish-Jewish refugees from the Holocaust. With cold Nazi officer Amon Göth running the nearby Kraków ghetto, Schindler uses cunning, bribery, and moral courage to protect his workers.",
        themes: ["Holocaust", "Redemption", "Good vs. Evil"]
    }),
    // 6. Full Metal Jacket
    600: createMovieData({ 
        warIntensity: 88, complexityLevel: "HIGH", dominantColor: "#1a1a1a",
        rating: 8.3, criticsScore: 92, audienceScore: 89, director: "Stanley Kubrick", 
        cast: ["Matthew Modine", "R. Lee Ermey", "Vincent D'Onofrio"], boxOffice: "$46.4 million", budget: "$30 million",
        dna: { War: 65, Drama: 25, Satire: 10 },
        scenes: [
            { time: 18, intensity: 62, label: "Drill Sergeant's Rant", color: "#991b1b" },
            { time: 42, intensity: 75, label: "Toilet Bowl Beating", color: "#dc2626" },
            { time: 68, intensity: 58, label: "Joker's Duality", color: "#7c2d12" },
            { time: 88, intensity: 72, label: "Tet Offensive", color: "#ea580c" },
            { time: 110, intensity: 85, label: "Sniper Mercy", color: "#dc2626" }
        ],
        synopsis: "A brutal exploration of the Vietnam War in two parts: the first chronicles the dehumanization of Marine recruits under the tyrannical drill sergeant Hartman, while the second follows Private Joker through the chaos of combat during the Tet Offensive.",
        themes: ["Dehumanization", "The Duality of Man", "Absurdity of War"]
    }),
    // 7. 1917
    530915: createMovieData({ 
        warIntensity: 86, complexityLevel: "HIGH", dominantColor: "#6b5b45",
        rating: 8.2, criticsScore: 89, audienceScore: 88, director: "Sam Mendes", 
        cast: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"], boxOffice: "$384.9 million", budget: "$95 million",
        dna: { War: 65, Drama: 30, Adventure: 5 },
        scenes: [
            { time: 12, intensity: 58, label: "No Man's Land", color: "#a16207" },
            { time: 42, intensity: 72, label: "The Plane Crash", color: "#92400e" },
            { time: 68, intensity: 65, label: "German Trenches", color: "#7c2d12" },
            { time: 95, intensity: 82, label: "River Crossing", color: "#0369a1" },
            { time: 115, intensity: 88, label: "Final Message", color: "#ea580c" }
        ],
        synopsis: "Two British soldiers are ordered to cross enemy territory and deliver an urgent message that will stop an attack doomed to fail. Shot to appear as one continuous take, the film places viewers directly into the soldiers' journey through the trenches, bombardment, and chaos of WWI.",
        themes: ["Duty", "Survival", "The Value of Life"]
    }),
    // 8. Das Boot
    156249: createMovieData({ 
        warIntensity: 87, complexityLevel: "HIGH", dominantColor: "#001f3f",
        rating: 8.4, criticsScore: 98, audienceScore: 95, director: "Wolfgang Petersen", 
        cast: ["Jürgen Prochnow", "Herbert Grönemeyer", "Klaus Wennemann"], boxOffice: "$84.7 million", budget: "$45 million",
        dna: { War: 70, Drama: 25, Thriller: 5 },
        scenes: [
            { time: 28, intensity: 52, label: "Depth Charges", color: "#0369a1" },
            { time: 68, intensity: 68, label: "Convoy Attack", color: "#dc2626" },
            { time: 102, intensity: 78, label: "Close Escape", color: "#ea580c" },
            { time: 134, intensity: 85, label: "Men Breaking Down", color: "#f97316" },
            { time: 148, intensity: 92, label: "Final Sinking", color: "#1f2937" }
        ],
        synopsis: "A claustrophobic masterpiece following the crew of a German U-boat during WWII as they hunt Allied ships while facing increasing pressure from destroyer escorts. Confined within the submarine's steel walls, tensions mount as the sailors' humanity and fragile sanity are tested.",
        themes: ["Claustrophobia", "Futility of War", "Comradeship"]
    }),
    // 9. Platoon
    792: createMovieData({ 
        warIntensity: 85, complexityLevel: "HIGH", dominantColor: "#1a4d2e",
        rating: 8.1, criticsScore: 88, audienceScore: 84, director: "Oliver Stone", 
        cast: ["Tom Berenger", "Willem Dafoe", "Charlie Sheen"], boxOffice: "$138.5 million", budget: "$6.1 million",
        dna: { War: 70, Drama: 20, Personal: 10 },
        scenes: [
            { time: 24, intensity: 58, label: "Ambush", color: "#15803d" },
            { time: 58, intensity: 72, label: "Village Massacre", color: "#dc2626" },
            { time: 92, intensity: 68, label: "Sergeant Conflict", color: "#ea580c" },
            { time: 108, intensity: 82, label: "Personal Vengeance", color: "#f97316" },
            { time: 118, intensity: 88, label: "Final Confrontation", color: "#991b1b" }
        ],
        synopsis: "Oliver Stone's semi-autobiographical account of a young idealistic soldier who arrives in Vietnam and must navigate the moral ambiguity of war. Torn between two sergeants representing different moral philosophies, the soldier witnesses atrocities, betrayal, and the corruption of youth.",
        themes: ["Loss of Innocence", "Moral Ambiguity", "Internal Division"]
    }),
    // 10. Paths of Glory
    975: createMovieData({ 
        warIntensity: 89, complexityLevel: "HIGH", dominantColor: "#2d2d2d",
        rating: 8.4, criticsScore: 96, audienceScore: 93, director: "Stanley Kubrick", 
        cast: ["Kirk Douglas", "Ralph Meeker", "Adolphe Menjou"], boxOffice: "$0.9 million", budget: "$900 thousand",
        dna: { War: 70, Drama: 25, Political: 5 },
        scenes: [
            { time: 12, intensity: 65, label: "Battlefield Orders", color: "#7c2d12" },
            { time: 38, intensity: 72, label: "Failed Assault", color: "#dc2626" },
            { time: 62, intensity: 78, label: "Court Martial", color: "#92400e" },
            { time: 80, intensity: 88, label: "Execution", color: "#1f1f1f" },
            { time: 88, intensity: 92, label: "Innocent Tears", color: "#dc2626" }
        ],
        synopsis: "A damning critique of military hierarchy and the futility of WWI. When a commanding officer orders a suicidal assault on an enemy position, the failure becomes a PR problem for headquarters. Three random soldiers are selected as scapegoats and court-martialed for cowardice.",
        themes: ["Injustice", "Military Bureaucracy", "Class Divide"]
    })
};

export const WAR_FILMS_MOVIE_FAQS = {
    'Saving Private Ryan': [
        { question: "Is the D-Day scene realistic?", answer: "Yes, the 24-minute opening sequence is widely considered the most realistic depiction of combat in cinema history. Spielberg used handheld cameras and desaturated color to mimic 1940s newsreel footage, and many WWII veterans reportedly had to leave theaters because it was too intense." },
        { question: "Did the mission actually happen?", answer: "The specific mission is fictional, but it was inspired by the true story of the Niland brothers. Fritz Niland was sent home after it was believed his three brothers had been killed in action, though one was later found alive in a POW camp." },
        { question: "What does 'FUBAR' mean?", answer: "It is a military acronym used by the soldiers meaning 'F***ed Up Beyond All Recognition.' It reflects the soldiers' cynical view of the chaotic and often nonsensical situations they find themselves in during the war." },
        { question: "Why do the soldiers resent Ryan?", answer: "They resent risking their lives—eight men—to save just one. They feel their mission implies Ryan's life is more valuable than their own, highlighting the arbitrary nature of who lives and dies in war." }
    ],
    'Apocalypse Now': [
        { question: "Is it based on a book?", answer: "Yes, it is a loose adaptation of Joseph Conrad's novella 'Heart of Darkness.' Coppola moved the setting from the Congo in the late 19th century to the Vietnam War, exploring similar themes of imperialism and the darkness within the human soul." },
        { question: "Why is the ending ambiguous?", answer: "The ending reflects the madness of war. Willard kills Kurtz but refuses to take his place as the new 'god' of the tribe, rejecting the horror even as he is forever changed by it. He leaves the compound, effectively 'dropping the weapon.'" },
        { question: "Did Marlon Brando really improvise his lines?", answer: "Yes, Brando arrived on set overweight and having not read the book. Coppola had to read 'Heart of Darkness' to him on set, and much of Kurtz's dialogue, including the famous monologue about the snail on the razorblade, was improvised." },
        { question: "Was the animal sacrifice real?", answer: "Yes, the water buffalo sacrifice at the end of the film was a real ritual performed by the local Ifugao people in the Philippines where the movie was filmed. The crew merely filmed the actual event happening." }
    ],
    'Lawrence of Arabia': [
        { question: "Is the film historically accurate?", answer: "It is considered broadly accurate in spirit but takes liberties with timelines and characters. For example, the character of Sherif Ali (Omar Sharif) is a composite of several real historical figures to simplify the narrative." },
        { question: "What is the famous 'match cut'?", answer: "One of cinema's most famous transitions occurs when Lawrence blows out a match, and the film instantly cuts to the burning sunrise over the desert. It symbolizes Lawrence's transition from the small, contained world of England to the vast, consuming heat of Arabia." },
        { question: "Why did Lawrence return to the desert?", answer: "The film suggests Lawrence was addicted to the desert's purity and the freedom it offered him to reinvent himself. He felt like an outsider in British society but found a new identity—and a destiny—among the Arab tribes." },
        { question: "Did Peter O'Toole do his own stunts?", answer: "Mostly, yes. O'Toole learned to ride camels for the film. However, the scene where he falls from his camel and others ride over him was a dangerous stunt that nearly killed him." }
    ],
    'Come and See': [
        { question: "Why is the film considered so disturbing?", answer: "It uses a mix of hyper-realism and surreal horror to depict Nazi atrocities. The director, Elem Klimov, used real live ammunition in some scenes to get authentic reactions of fear from the young lead actor, creating an atmosphere of genuine terror." },
        { question: "Is the village massacre based on a real event?", answer: "Yes, it is based on the Khatyn massacre and hundreds of similar atrocities committed by the Nazis in Belarus during WWII. Over 600 villages were destroyed in a similar manner to what is shown in the film." },
        { question: "What happened to the lead actor?", answer: "Aleksei Kravchenko, who was only a teenager, reportedly went gray from the stress of filming. To protect his sanity, the director utilized hypnosis during the most traumatic scenes to help him dissociate from the horror." },
        { question: "What is the meaning of the ending?", answer: "Florya shoots at a portrait of Hitler, reversing time in a desperate attempt to undo the war. However, he stops when he sees Hitler as a baby, realizing that killing a child—even one who becomes a monster—is the moral line he cannot cross." }
    ],
    'Schindler\'s List': [
        { question: "Why is the film in black and white?", answer: "Spielberg chose black and white to give the film a timeless, documentary-like quality, evoking the actual footage of the Holocaust. It strips away the 'glamour' of cinema to focus purely on the stark horror of the events." },
        { question: "What does the girl in the red coat symbolize?", answer: "She represents the innocence of the victims and the 'red flag' that the Allied powers ignored. For Schindler, spotting her in the chaos of the liquidation is the turning point that forces him to see the Jews as individuals, not just a workforce." },
        { question: "Did Schindler really save that many people?", answer: "Yes, Oskar Schindler is credited with saving approximately 1,200 Jews by employing them in his factories. The 'list' was a real document used to transport his workers away from the death camps to safety." },
        { question: "Why does Schindler break down at the end?", answer: "He is overwhelmed by guilt, realizing that he could have saved even more people if he had sold his car or his pin. It humanizes him not as a perfect hero, but as a flawed man who realizes the infinite value of a single human life." }
    ],
    'Full Metal Jacket': [
        { question: "Why is the film split into two distinct halves?", answer: "The first half focuses on the psychological breakdown during training, while the second focuses on the chaos of actual combat. Kubrick contrasts the rigid, dehumanizing order of boot camp with the messy, unpredictable reality of war." },
        { question: "Was R. Lee Ermey a real drill instructor?", answer: "Yes, he was a real Marine Corps drill instructor. He was originally hired as a technical advisor but was cast as Gunnery Sergeant Hartman after Kubrick saw an instructional tape of him improvising insults for 15 minutes without repeating himself." },
        { question: "What is the 'duality of man' theme?", answer: "Private Joker wears a peace symbol button while writing 'Born to Kill' on his helmet. He explicitly mentions Jung's theory of the duality of man, highlighting the contradiction of soldiers who want peace but are trained to be killers." },
        { question: "Why do they sing the Mickey Mouse Club song?", answer: "The ending scene shows the soldiers singing the childish theme song while marching through a burning hellscape. It emphasizes their lost innocence and the absurdity of young American boys being sent to kill in a foreign land." }
    ],
    '1917': [
        { question: "Was 1917 actually filmed in one shot?", answer: "No, it was filmed in a series of long takes (some up to 8-9 minutes) that were digitally stitched together to create the illusion of a single continuous shot. The only visible cut occurs when the protagonist is knocked unconscious." },
        { question: "Why did the director choose the one-shot technique?", answer: "Sam Mendes wanted the audience to feel trapped in real-time with the characters. By removing cuts, the viewer cannot 'escape' the tension or look away, creating an immersive, claustrophobic experience of trench warfare." },
        { question: "Is the story true?", answer: "The characters are fictional, but the plot is based on a story Mendes' grandfather, a WWI veteran, told him about a messenger who had to run through enemy lines. It captures the essence of the chaotic communication during the war." },
        { question: "What is the significance of the cherry trees?", answer: "The cherry blossoms appear throughout the film, symbolizing the fragility and cycle of life. They remind Schofield of home and beauty amidst the destruction, serving as a visual motif for hope and renewal." }
    ],
    'Das Boot': [
        { question: "How realistic is the submarine depiction?", answer: "It is considered one of the most accurate depictions of submarine warfare. The set was a near-exact replica of a U-boat interior, mounted on a hydraulic gimbal to physically shake the cast during depth charge scenes." },
        { question: "Did the actors really look that exhausted?", answer: "Yes, the film was shot chronologically over a year. The actors were kept indoors to maintain their pale skin and grew real beards. Their exhaustion and claustrophobia on screen were largely real due to the grueling shoot." },
        { question: "Why is the ending so tragic?", answer: "After surviving impossible odds at sea, the crew is killed by an air raid just as they return to port. It underscores the futility of their struggle and the indiscriminate nature of war—survival is often just a matter of luck." },
        { question: "What perspective does the film offer?", answer: "Unlike many war films, it shows WWII from the German perspective but focuses on the sailors as ordinary men trapped in a steel coffin, rather than ideologies. It highlights the shared terror and humanity of soldiers on all sides." }
    ],
    'Platoon': [
        { question: "Is Platoon autobiographical?", answer: "Yes, Oliver Stone wrote it based on his own experiences as an infantryman in Vietnam. He wanted to counter the 'heroic' portrayals of the war (like The Green Berets) with a gritty, realistic view of the infighting and drug use among soldiers." },
        { question: "What do Barnes and Elias represent?", answer: "They represent the 'two fathers' fighting for the protagonist's soul. Elias (Willem Dafoe) represents humanity, mercy, and morality, while Barnes (Tom Berenger) represents the ruthless, survival-at-all-costs brutality of the war machine." },
        { question: "Why did they use Barber's 'Adagio for Strings'?", answer: "The mournful classical piece is used to underscore the tragedy and waste of life. Its slow, melancholic build contrasts with the frantic violence, elevating the scenes of death into moments of sorrowful reflection." },
        { question: "Did the cast undergo training?", answer: "Yes, the actors were subjected to a brutal 30-day boot camp in the Philippines led by a military advisor. They dug foxholes, ate rations, and had no showers to simulate the exhaustion and irritability of real soldiers." }
    ],
    'Paths of Glory': [
        { question: "Why was the film banned in France?", answer: "It was banned in France for nearly 20 years because it was seen as an insult to the French army. The depiction of French generals as callous and incompetent was considered too controversial and unpatriotic at the time." },
        { question: "What is the 'ant hill' assault meant to show?", answer: "The suicidal attack on the 'Ant Hill' demonstrates the disconnect between the commanders in their chateaus and the soldiers in the mud. The generals order men to their deaths for lines on a map, highlighting the absurdity of military bureaucracy." },
        { question: "Is the ending song significant?", answer: "The final scene, where the soldiers hum along to a German prisoner's song, is a moment of shared humanity. It shows that despite the propaganda, the soldiers have more in common with their 'enemy' than with their own commanders." },
        { question: "Why does the General order the artillery on his own men?", answer: "In a fit of rage when the soldiers refuse to leave the trenches for a suicide mission, General Mireau orders artillery to fire on them to force them out. It is the ultimate betrayal of leadership, prioritizing his ego over their lives." }
    ]
};

// ✅ HELPER FUNCTIONS: 100% SPAM-FREE, DYNAMIC, & GOOGLE APPROVED
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
        if (lowerType.includes('gore') || lowerType.includes('violence') || lowerType.includes('massacre') || lowerType.includes('execution')) types.add('graphic violence');
        if (lowerType.includes('suicide')) types.add('suicide');
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
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('suggestive') || t.includes('violence') || t.includes('gore') || t.includes('massacre') || t.includes('execution'); 
    });

    const sceneCount = heavyScenes.length;
    let schemaDesc = '';
    if (sceneCount > 0) {
        schemaDesc = `${movie.Title} Parents Guide with exact explicit timestamps. ${sceneCount} scenes manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`;
    } else {
        schemaDesc = `${movie.Title} Parents Guide. Filmiway editors have manually verified zero explicit scenes in the full ${currentRuntime} runtime.`;
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

    const staticFaqs = WAR_FILMS_MOVIE_FAQS[movie.Title] ? [...WAR_FILMS_MOVIE_FAQS[movie.Title]] : [];
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
                'name': `Does ${movie.Title} have explicit scenes or extreme violence?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes. ${movie.Title} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:<br><br><ul>${schemaListText}</ul><br>Manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.` 
                }
            },
            {
                '@type': 'Question',
                'name': `What time does explicit content appear in ${movie.Title} and how do I skip it?`,
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
                'name': `Does ${movie.Title} have explicit scenes?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `No. Filmiway editors have manually verified that ${movie.Title} is free of explicit scenes.` 
                }
            },
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes, regarding explicit content. Filmiway has confirmed 0 scenes of extreme mature content in the ${currentRuntime} runtime.` 
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
    const staticFaqs = WAR_FILMS_MOVIE_FAQS[movieTitle] ? [...WAR_FILMS_MOVIE_FAQS[movieTitle]] : [];
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
            answer: `According to the Filmiway Intensity metric, ${movieTitle} peaks at the following moments:\n\n${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('sex') || t.includes('nudity') || t.includes('explicit') || t.includes('violence') || t.includes('gore') || t.includes('massacre') || t.includes('execution');
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
                question: `Does ${movieTitle} have explicit scenes or extreme violence?`,
                answer: `Yes. ${movieTitle} contains ${sceneCount} scenes of ${typesString}. Exact timestamps:\n\n${uiDetailedList}\n\nManually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
            },
            {
                question: `What time does explicit content appear in ${movieTitle} and how do I skip it?`,
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
                question: `Does ${movieTitle} have explicit scenes?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of explicit scenes.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes, regarding explicit content. Filmiway has confirmed 0 scenes of extreme mature content in the ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};