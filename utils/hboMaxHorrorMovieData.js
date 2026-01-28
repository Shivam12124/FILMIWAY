// utils/hboMaxHorrorMovieData.js - HBO MAX HORROR COLLECTION DATA
// Ranked by Scariness: Dread, Gore, and Psychological Trauma

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 138843, "imdbID": "tt1457767", "Title": "The Conjuring", "year": 2013, "genre": "Horror", "runtime": 112, "rank": 1 },
    { "tmdbId": 49018, "imdbID": "tt1591095", "Title": "Insidious", "year": 2010, "genre": "Horror", "runtime": 103, "rank": 2 },
    { "tmdbId": 259693, "imdbID": "tt3065204", "Title": "The Conjuring 2", "year": 2016, "genre": "Horror", "runtime": 134, "rank": 3 },
    { "tmdbId": 396422, "imdbID": "tt5140878", "Title": "Annabelle: Creation", "year": 2017, "genre": "Horror", "runtime": 109, "rank": 4 },
    { "tmdbId": 310131, "imdbID": "tt4263482", "Title": "The Witch", "year": 2015, "genre": "Horror", "runtime": 92, "rank": 5 },
    { "tmdbId": 713704, "imdbID": "tt13345606", "Title": "Evil Dead Rise", "year": 2023, "genre": "Horror", "runtime": 96, "rank": 6 },
    { "tmdbId": 346364, "imdbID": "tt1396484", "Title": "It", "year": 2017, "genre": "Horror", "runtime": 135, "rank": 7 },
    { "tmdbId": 439079, "imdbID": "tt5814060", "Title": "The Nun", "year": 2018, "genre": "Horror", "runtime": 96, "rank": 8 },
    { "tmdbId": 521029, "imdbID": "tt8350360", "Title": "Annabelle Comes Home", "year": 2019, "genre": "Horror", "runtime": 106, "rank": 9 },
    { "tmdbId": 91586, "imdbID": "tt2226417", "Title": "Insidious: Chapter 2", "year": 2013, "genre": "Horror", "runtime": 106, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (HBO Max Horror Collection)
export const SENSITIVE_TIMELINES = {
    // 1. The Conjuring
    138843: { scenes: [] },
    // 2. Insidious
    49018: { scenes: [] },
    // 3. The Conjuring 2
    259693: { scenes: [] },
    // 4. Annabelle: Creation
    396422: { scenes: [] },
    // 5. The Witch
    310131: { 
        scenes: [
            { start: "1:22:00", end: "1:23:00", type: "Nudity", severity: "Moderate" } // Final witch sabbath
        ] 
    },
    // 6. Evil Dead Rise
    713704: { 
        scenes: [
            { start: "0:00:00", end: "1:36:00", type: "Extreme Gore", severity: "High" } // Constant gore
        ] 
    },
    // 7. It
    346364: { scenes: [] },
    // 8. The Nun
    439079: { scenes: [] },
    // 9. Annabelle Comes Home
    521029: { scenes: [] },
    // 10. Insidious: Chapter 2
    91586: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    138843: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    49018: "https://image.tmdb.org/t/p/w500/9bX2292fVaf73d8Z5s75963D7.jpg",
    259693: "https://image.tmdb.org/t/p/w500/zEqyD0XRtVnAiyIEizf2AnlX6aL.jpg",
    396422: "https://image.tmdb.org/t/p/w500/tb86j8jCL4IrDXbuJeihWA582VF.jpg",
    310131: "https://image.tmdb.org/t/p/w500/o0fdl6Yd5D0D3K2Y2N2562.jpg", // The Witch
    713704: "https://image.tmdb.org/t/p/w500/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
    346364: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTJhEhQX1.jpg",
    439079: "https://image.tmdb.org/t/p/w500/sFC1ElvoKgmWg5E2c6l4dFLx7s5.jpg",
    521029: "https://image.tmdb.org/t/p/w500/q3m1eGk5Z5X5V5.jpg", // Annabelle Comes Home placeholder hash
    91586: "https://image.tmdb.org/t/p/w500/f3X5X5X5X5X5X5X5X5X5X5.jpg" // Placeholder hash
};

// ✅ HELPER: Horror Specific Metrics
const createMovieData = (data) => ({
    scariness: 85,              // Primary Metric
    dominantColor: "#991b1b",   // Red default for Horror
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. The Conjuring
    138843: createMovieData({ 
        scariness: 95, 
        dominantColor: "#0f172a", rating: 7.5, criticsScore: 86, audienceScore: 83, director: "James Wan", 
        cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"], boxOffice: "$319 million", budget: "$20 million", 
        dna: { "Horror": 90, "Thriller": 10 }, 
        scenes: [
            { time: 20, intensity: 40, label: "Hide and Clap", color: "#1e293b" }, 
            { time: 50, intensity: 75, label: "The Wardrobe", color: "#334155" }, 
            { time: 80, intensity: 88, label: "The Sheet", color: "#475569" }, 
            { time: 95, intensity: 95, label: "Exorcism", color: "#dc2626" }, 
            { time: 105, intensity: 60, label: "The Music Box", color: "#0f172a" } 
        ],
        synopsis: "Based on the terrifying true case files of paranormal investigators Ed and Lorraine Warren. In 1971, they are summoned to a secluded farmhouse in Rhode Island to help the Perron family, who are being terrorized by a dark, malevolent presence. What starts as a standard haunting quickly escalates into the most horrifying case of their lives, involving a witch's curse, demonic possession, and a battle for the souls of an innocent family.",
        themes: ["Haunting", "Faith", "Family"]
    }),

    // 2. Insidious
    49018: createMovieData({ 
        scariness: 92, 
        dominantColor: "#b91c1c", rating: 6.8, criticsScore: 66, audienceScore: 62, director: "James Wan", 
        cast: ["Patrick Wilson", "Rose Byrne", "Ty Simpkins"], boxOffice: "$97 million", budget: "$1.5 million", 
        dna: { "Horror": 85, "Fantasy": 15 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Attic", color: "#7f1d1d" }, 
            { time: 45, intensity: 80, label: "The Red Face", color: "#ef4444" }, 
            { time: 65, intensity: 70, label: "The Further", color: "#171717" }, 
            { time: 85, intensity: 90, label: "Lipstick Demon", color: "#b91c1c" }, 
            { time: 98, intensity: 95, label: "The Twist", color: "#991b1b" } 
        ],
        synopsis: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further. They initially believe their house is haunted, but after moving, they realize the terrifying truth: it's not the house that's haunted, it's their son. Featuring one of the most iconic and terrifying jump scares in modern horror history involving a red-faced demon.",
        themes: ["Astral Projection", "Demons", "Parenting"]
    }),

    // 3. The Conjuring 2
    259693: createMovieData({ 
        scariness: 90, 
        dominantColor: "#1e3a8a", rating: 7.3, criticsScore: 80, audienceScore: 81, director: "James Wan", 
        cast: ["Vera Farmiga", "Patrick Wilson", "Madison Wolfe"], boxOffice: "$320 million", budget: "$40 million", 
        dna: { "Horror": 90, "Drama": 10 }, 
        scenes: [
            { time: 15, intensity: 45, label: "The Ouija Board", color: "#1e40af" }, 
            { time: 40, intensity: 85, label: "The Nun Painting", color: "#172554" }, 
            { time: 75, intensity: 80, label: "The Crooked Man", color: "#1d4ed8" }, 
            { time: 110, intensity: 90, label: "Valak Revealed", color: "#1e3a8a" }, 
            { time: 125, intensity: 88, label: "Lightning Strike", color: "#2563eb" } 
        ],
        synopsis: "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a malicious spirit. As the youngest daughter shows signs of demonic possession, the Warrens must determine if it is a hoax or a true haunting. This sequel introduces the terrifying demon nun Valak and is widely considered one of the best horror sequels ever made.",
        themes: ["Possession", "Skepticism", "Love"]
    }),

    // 4. Annabelle: Creation
    396422: createMovieData({ 
        scariness: 88, 
        dominantColor: "#78350f", rating: 6.5, criticsScore: 70, audienceScore: 68, director: "David F. Sandberg", 
        cast: ["Stephanie Sigman", "Talitha Bateman", "Anthony LaPaglia"], boxOffice: "$306 million", budget: "$15 million", 
        dna: { "Horror": 100 }, 
        scenes: [
            { time: 20, intensity: 35, label: "The Dollmaker", color: "#92400e" }, 
            { time: 50, intensity: 75, label: "The Dumbwaiter", color: "#b45309" }, 
            { time: 75, intensity: 85, label: "The Barn", color: "#78350f" }, 
            { time: 95, intensity: 90, label: "The Well", color: "#451a03" }, 
            { time: 105, intensity: 80, label: "Origin Revealed", color: "#713f12" } 
        ],
        synopsis: "Twelve years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home. They soon become the target of the dollmaker's possessed creation, Annabelle. This prequel effectively builds tension through atmosphere and delivers relentless scares, establishing the terrifying origin of the Conjuring universe's most famous doll.",
        themes: ["Dolls", "Orphans", "Grief"]
    }),

    // 5. The Witch
    310131: createMovieData({ 
        scariness: 85, 
        dominantColor: "#3f3f46", rating: 6.9, criticsScore: 90, audienceScore: 59, director: "Robert Eggers", 
        cast: ["Anya Taylor-Joy", "Ralph Ineson", "Kate Dickie"], boxOffice: "$40 million", budget: "$4 million", 
        dna: { "Horror": 70, "History": 30 }, 
        scenes: [
            { time: 10, intensity: 40, label: "Banishment", color: "#52525b" }, 
            { time: 35, intensity: 65, label: "Peek-a-Boo", color: "#3f3f46" }, 
            { time: 60, intensity: 80, label: "Black Philip", color: "#27272a" }, 
            { time: 80, intensity: 85, label: "Possession", color: "#18181b" }, 
            { time: 90, intensity: 95, label: "The Sabbath", color: "#000000" } 
        ],
        synopsis: "New England, 1630. A devout Christian family, banished from their settlement, attempts to survive on the edge of a vast, ominous wilderness. But when their infant son disappears, paranoia and religious hysteria tear the family apart as they suspect a witch is living in the woods. A slow-burning masterpiece of atmospheric dread that culminates in one of the most chilling endings in modern horror.",
        themes: ["Folklore", "Religion", "Isolation"]
    }),

    // 6. Evil Dead Rise
    713704: createMovieData({ 
        scariness: 94, 
        dominantColor: "#b91c1c", rating: 6.6, criticsScore: 84, audienceScore: 76, director: "Lee Cronin", 
        cast: ["Lily Sullivan", "Alyssa Sutherland", "Morgan Davies"], boxOffice: "$146 million", budget: "$19 million", 
        dna: { "Horror": 90, "Gore": 10 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Earthquake", color: "#ef4444" }, 
            { time: 40, intensity: 75, label: "Elevator Ride", color: "#dc2626" }, 
            { time: 65, intensity: 90, label: "Eye Trauma", color: "#b91c1c" }, 
            { time: 85, intensity: 95, label: "Cheese Grater", color: "#991b1b" }, 
            { time: 95, intensity: 100, label: "Wood Chipper", color: "#7f1d1d" } 
        ],
        synopsis: "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable. Moving the action from a cabin in the woods to a claustrophobic Los Angeles apartment building, this installment delivers relentless gore, including an infamous scene involving a cheese grater.",
        themes: ["Motherhood", "Demons", "Urban Horror"]
    }),

    // 7. It
    346364: createMovieData({ 
        scariness: 88, 
        dominantColor: "#ef4444", rating: 7.3, criticsScore: 86, audienceScore: 84, director: "Andy Muschietti", 
        cast: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"], boxOffice: "$700 million", budget: "$35 million", 
        dna: { "Horror": 60, "Adventure": 40 }, 
        scenes: [
            { time: 10, intensity: 85, label: "Georgie's Boat", color: "#ef4444" }, 
            { time: 45, intensity: 70, label: "The Projector", color: "#dc2626" }, 
            { time: 75, intensity: 80, label: "The Bathroom", color: "#b91c1c" }, 
            { time: 100, intensity: 65, label: "Rock Fight", color: "#f87171" }, 
            { time: 125, intensity: 90, label: "Pennywise Defeated", color: "#991b1b" } 
        ],
        synopsis: "In the summer of 1989, a group of bullied kids bands together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town. Blending coming-of-age nostalgia with terrifying horror, Pennywise exploits the deepest phobias of his victims in this blockbuster adaptation of Stephen King's novel.",
        themes: ["Childhood Trauma", "Fear", "Friendship"]
    }),

    // 8. The Nun
    439079: createMovieData({ 
        scariness: 80, 
        dominantColor: "#171717", rating: 5.3, criticsScore: 24, audienceScore: 35, director: "Corin Hardy", 
        cast: ["Demián Bichir", "Taissa Farmiga", "Jonas Bloquet"], boxOffice: "$365 million", budget: "$22 million", 
        dna: { "Horror": 90, "Mystery": 10 }, 
        scenes: [
            { time: 10, intensity: 40, label: "The Suicide", color: "#262626" }, 
            { time: 40, intensity: 65, label: "Graveyard Bells", color: "#404040" }, 
            { time: 65, intensity: 75, label: "Perpetual Adoration", color: "#171717" }, 
            { time: 85, intensity: 85, label: "The Catacombs", color: "#0a0a0a" }, 
            { time: 95, intensity: 90, label: "Holy Relic", color: "#52525b" } 
        ],
        synopsis: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order's unholy secret and confront a malevolent force in the form of the same demonic nun that first terrorized audiences in 'The Conjuring 2'.",
        themes: ["Religion", "Gothic Horror", "Sacrifice"]
    }),

    // 9. Annabelle Comes Home
    521029: createMovieData({ 
        scariness: 78, 
        dominantColor: "#b45309", rating: 5.9, criticsScore: 64, audienceScore: 70, director: "Gary Dauberman", 
        cast: ["Mckenna Grace", "Madison Iseman", "Katie Sarife"], boxOffice: "$231 million", budget: "$27 million", 
        dna: { "Horror": 90, "Adventure": 10 }, 
        scenes: [
            { time: 15, intensity: 30, label: "Artifact Room", color: "#d97706" }, 
            { time: 45, intensity: 60, label: "The Ferryman", color: "#b45309" }, 
            { time: 70, intensity: 75, label: "The Bride", color: "#92400e" }, 
            { time: 90, intensity: 85, label: "Hellhound", color: "#78350f" }, 
            { time: 100, intensity: 80, label: "Future Vision", color: "#fff7ed" } 
        ],
        synopsis: "Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her 'safely' behind sacred glass. But an unholy night of horror awaits when the doll awakens the evil spirits in the room, who all set their sights on a new target—the Warrens' ten-year-old daughter, Judy, and her friends.",
        themes: ["Cursed Objects", "Teen Horror", "Legacy"]
    }),

    // 10. Insidious: Chapter 2
    91586: createMovieData({ 
        scariness: 82, 
        dominantColor: "#0f172a", rating: 6.6, criticsScore: 39, audienceScore: 56, director: "James Wan", 
        cast: ["Patrick Wilson", "Rose Byrne", "Barbara Hershey"], boxOffice: "$161 million", budget: "$5 million", 
        dna: { "Horror": 80, "Mystery": 20 }, 
        scenes: [
            { time: 10, intensity: 40, label: "Police Station", color: "#1e293b" }, 
            { time: 45, intensity: 70, label: "The Hospital", color: "#334155" }, 
            { time: 75, intensity: 85, label: "The Mother", color: "#475569" }, 
            { time: 95, intensity: 90, label: "The Further Returns", color: "#0f172a" }, 
            { time: 105, intensity: 80, label: "Possession Ends", color: "#64748b" } 
        ],
        synopsis: "The haunted Lambert family seeks to uncover the mysterious childhood secret that has left them dangerously connected to the spirit world. As Josh Lambert's behavior becomes increasingly erratic, his wife Renai and mother Lorraine realize that although they saved their son, something evil may have followed Josh back from The Further. A direct continuation that dives deeper into the mythology of the Bride in Black.",
        themes: ["Possession", "Past Trauma", "Family Secrets"]
    })
};

export const STRATEGIC_QUOTES = {
    138843: "Whatever you do, don't let it in.",
    49018: "It's not the house that's haunted... it's your son.",
    259693: "This is the closest to hell I ever want to get.",
    396422: "Forgive me, father, for I am about to sin.",
    310131: "Wouldst thou like to live deliciously?",
    713704: "Mommy's with the maggots now.",
    346364: "You'll float, too.",
    439079: "God ends here.",
    521029: "Miss me?",
    91586: "Is that you, Josh?"
};

export const CINEMATIC_COLORS = {
    "Horror": "#991b1b", "Thriller": "#0f172a", "Mystery": "#1e3a8a", "Drama": "#78350f"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Weak", color: "#fca5a5", symbol: "👻", bgColor: "bg-red-200/30", description: "Not scary" },
    { value: 2, label: "Creepy", color: "#f87171", symbol: "💀", bgColor: "bg-red-500/30", description: "Unsettling moments" },
    { value: 3, label: "Scary", color: "#dc2626", symbol: "🩸", bgColor: "bg-red-700/30", description: 'Genuine fear' },
    { value: 4, label: "Traumatic", color: "#7f1d1d", symbol: "☠️", bgColor: "bg-red-950/30", description: "Nightmare fuel" }
];

export const HBO_HORROR_MOVIE_FAQS = {
    'The Conjuring': [
        { question: "Is The Conjuring based on a true story?", answer: "Yes, it is based on the real-life case files of paranormal investigators Ed and Lorraine Warren involving the Perron family in Harrisville, Rhode Island, in 1971. The eldest daughter, Andrea Perron, has confirmed that many events in the film, including the spirits and the levitation, actually happened, though some elements were dramatized for the screen." },
        { question: "Is the doll Annabelle real?", answer: "Yes, the real Annabelle doll exists and is kept in a glass case at the Warrens' Occult Museum in Connecticut. However, unlike the porcelain doll in the movie, the real Annabelle is a large Raggedy Ann doll. The Warrens claim it was responsible for malicious activities and even death." },
        { question: "What is the 'Hide and Clap' game?", answer: "The 'Hide and Clap' game is a chilling sequence in the film where the children play hide-and-seek using claps to reveal their location. The ghosts in the house eventually learn the game and use it to lure the mother, Carolyn, into dark spaces like the cellar and wardrobe, creating one of the film's most iconic scares." },
        { question: "Why is it rated R?", answer: "Interestingly, 'The Conjuring' received an R rating from the MPAA not for violence, gore, or nudity, but simply for being 'too scary.' The board felt the intensity and pervasive atmosphere of terror were too much for a PG-13 rating, a rare distinction that director James Wan wore as a badge of honor." }
    ],
    'Insidious': [
        { question: "What is The Further?", answer: "The Further is a dark, purgatorial dimension that exists between life and death. It is inhabited by the tortured souls of the dead and demonic entities who crave to return to the living world. It is not Hell, but a timeless realm of darkness where spirits can trap the astral projections of living humans." },
        { question: "Who is the Lipstick-Face Demon?", answer: "The Lipstick-Face Demon (also known as the Red-Faced Demon) is the primary antagonist of the first film. He rules a section of The Further and seeks to possess the physical body of the comatose boy, Dalton, while his soul is trapped. He is iconic for his sudden appearance behind Josh in the kitchen scene." },
        { question: "Why does the father need to go into The Further?", answer: "The father, Josh Lambert, discovers that he has the ability to astral project, a trait he unknowingly passed down to his son Dalton. He must enter The Further to guide his son's soul back to his body before the demons can claim it forever, facing his own repressed childhood trauma in the process." },
        { question: "Is there a post-credits scene?", answer: "There is no traditional post-credits scene, but the final shot of the movie provides a massive twist cliffhanger involving the old woman spirit, leaving the audience questioning the fate of the characters and setting up the direct sequel, Chapter 2." }
    ],
    'The Conjuring 2': [
        { question: "Is the Enfield Haunting real?", answer: "Yes, the Enfield Poltergeist case (1977-1979) in North London is one of the most documented hauntings in history. Police officers, journalists, and neighbors witnessed levitating furniture, knocking sounds, and the levitation of Janet Hodgson. While skeptics claim it was a hoax by the children, the film presents the supernatural explanation." },
        { question: "Is Valak a real demon?", answer: "The name Valak appears in the mid-17th-century grimoire 'The Lesser Key of Solomon' as a powerful demon who commands legions of spirits. However, the film's depiction of Valak as a demonic nun was a creative choice by director James Wan to challenge Lorraine Warren's faith and create a blasphemous visual." },
        { question: "Who is the Crooked Man?", answer: "The Crooked Man is a manifestation of the demon Valak, based on a zoetrope toy belonging to the youngest child. He is a lanky, grotesque figure who moves in unnatural, stop-motion-like jerks. Despite looking like CGI, he was played by actor Javier Botet, known for his unique physical performances." },
        { question: "Did the Warrens really investigate Enfield?", answer: "Ed and Lorraine Warren did visit the Hodgson house in Enfield, but their involvement was much less central than the movie portrays. They were just two of many investigators, including Maurice Grosse and Guy Lyon Playfair, who spent significantly more time on the case." }
    ],
    'Annabelle: Creation': [
        { question: "Is this a prequel?", answer: "Yes, 'Annabelle: Creation' acts as an origin story for the possessed doll featured in 'The Conjuring' and 'Annabelle.' It explains how the doll was created by a grieving toymaker and how it became a vessel for a demonic entity after a tragic accident involving his daughter, Bee." },
        { question: "How does it connect to the first Annabelle movie?", answer: "The film ends with a time jump to 1967, showing the surviving orphan, Janice (now possessed and going by 'Annabelle'), murdering her adoptive parents. This scene leads directly into the opening scene of the first 'Annabelle' movie, closing the loop on the doll's history." },
        { question: "What is the demon in the well?", answer: "The entity haunting the Mullins' house is not the spirit of their daughter, Bee, but a demon (a Ram) that tricked the grieving parents into giving it permission to inhabit the doll. The well serves as a symbolic and literal gateway to hell where they attempt to trap the evil." },
        { question: "Why is the scarecrow important?", answer: "The scarecrow scene is one of the film's most tense sequences, demonstrating the demon's ability to manipulate inanimate objects beyond just the doll. It foreshadows the escalating power of the entity and its ability to terrorize the girls anywhere on the property." }
    ],
    'The Witch': [
        { question: "What does Black Philip say at the end?", answer: "In the film's chilling climax, the goat Black Philip speaks to Thomasin in a smooth, human voice, asking: 'Wouldst thou like the taste of butter? A pretty dress? Wouldst thou like to live deliciously?' offering her worldly pleasures and freedom in exchange for signing his book and selling her soul." },
        { question: "Is the dialogue historically accurate?", answer: "Yes, director Robert Eggers meticulously researched 17th-century New England. Much of the dialogue is lifted directly from historical diaries, court records, and accounts of witch trials from that era, giving the film its unique, Shakespearean-like cadence and authenticity." },
        { question: "Is the witch real or a hallucination?", answer: "Within the context of the film, the witch is very real. We see her kill the unbaptized baby and use its fat for a flying ointment. The film is not a psychological ambiguity but a literal depiction of 17th-century Puritan fears coming true—the devil and his witches are real threats in these woods." },
        { question: "What is the meaning of the ending?", answer: "The ending can be seen as a tragic fall or a liberating ascension. After her family—who oppressed and scapegoated her—is destroyed, Thomasin has nothing left. She chooses to join the coven not just for power, but for survival and agency, embracing the very 'evil' she was accused of to finally be free." }
    ],
    'Evil Dead Rise': [
        { question: "Is Ash Williams in Evil Dead Rise?", answer: "Bruce Campbell (Ash Williams) does not appear physically, but he has a tiny, hidden voice cameo. Director Lee Cronin confirmed that the voice on one of the vinyl records, a priest warning about the Necronomicon, belongs to Campbell, linking this film to the original timeline." },
        { question: "How much fake blood was used?", answer: "The production was incredibly bloody, using over 6,500 liters (approx. 1,700 gallons) of fake blood. The elevator scene alone required a massive amount of viscous red fluid to flood the hallway, staying true to the Evil Dead franchise's reputation for excess gore." },
        { question: "What is the cheese grater scene?", answer: "It is the film's most infamous moment of cringe-inducing violence. During a fight in the kitchen, the possessed Ellie grabs a cheese grater and rakes it across her niece's calf leg. It creates a visceral reaction in audiences because it uses a common household item to inflict specific, relatable pain." },
        { question: "Is this a reboot or a sequel?", answer: "It is officially the fifth film in the Evil Dead franchise. While it features a new cast and setting (an LA apartment instead of a cabin), it exists in the same universe as the original films and the 2013 movie, revolving around a different volume of the Book of the Dead (Necronomicon)." }
    ],
    'It': [
        { question: "Who is Pennywise?", answer: "Pennywise the Dancing Clown is the favorite form of 'It,' an ancient, trans-dimensional cosmic entity that originated from the Macroverse. It awakens every 27 years to feed on the fear and flesh of the children of Derry, Maine, before returning to hibernation." },
        { question: "Why does It target children?", answer: "It prefers children because their fears are simpler and easier to manifest physically (clowns, lepers, paintings). According to Pennywise, frightening the prey 'salts the meat,' making the children taste better when he eventually devours them." },
        { question: "What is the significance of the red balloon?", answer: "The red balloon acts as a lure and a harbinger of Pennywise's presence. It is an innocent object that becomes a symbol of dread, often appearing floating against the wind or in impossible places to isolate victims and signal that It is watching." },
        { question: "Did Bill Skarsgård do his own stunts?", answer: "Bill Skarsgård performed much of the physical acting himself, including the creepy smile where he disjoints his lip. However, CGI was used for the more monstrous transformations, like the giant mouth and the contorted limbs during the projector scene." }
    ],
    'The Nun': [
        { question: "Who is Valak?", answer: "Valak is a powerful demon from hell who takes the form of a nun to mock the faith of the sisters in the abbey. In demonology, Valak is described as a child with angel wings riding a two-headed dragon, but the film reinterprets the entity as a blasphemous religious figure." },
        { question: "Why is the abbey ground holy?", answer: "The Abbey of St. Carta was built by a duke who tried to summon a demon but was stopped by the Vatican, who sealed the rift with the Blood of Christ. The nuns pray in 'perpetual adoration' (non-stop shifts) to keep the evil contained and the seal intact." },
        { question: "What is the Blood of Christ?", answer: "The Blood of Christ is a holy relic contained in a glass vial within the abbey. It is the ultimate weapon against Valak. In the climax, Sister Irene spits the blood into the demon's face to banish it back to hell and seal the gateway." },
        { question: "How does this connect to The Conjuring?", answer: "The film reveals that Frenchie (Maurice), the villager who helps the priest and nun, gets possessed by Valak at the end. The final scene flashes forward to Ed and Lorraine Warren showing footage of Maurice's exorcism, which is the same footage shown in the first 'The Conjuring' movie." }
    ],
    'Annabelle Comes Home': [
        { question: "Why don't the Warrens destroy the doll?", answer: "Ed and Lorraine Warren believe that destroying the doll would not destroy the evil attached to it; it would only set the demon free to find a new host. By keeping it locked in a case made of chapel glass and blessed regularly by a priest, they contain the evil." },
        { question: "What is the Ferryman?", answer: "The Ferryman is one of the darkest spirits released in the film. He is a collector of souls who places coins on the eyes of the dead. In the movie, he torments the babysitter Mary Ellen, leaving coins as a sign that he is coming to take her soul." },
        { question: "Who is the Samurai ghost?", answer: "The Samurai is a cursed suit of armor in the Warrens' artifact room. When Annabelle awakens the room, the suit comes to life. It is haunted by the screams of its victims, and anyone who gets too close hears the terrifying sounds of their final moments." },
        { question: "Is Judy Warren a medium?", answer: "Yes, the film explores Judy's inherited psychic abilities. Like her mother Lorraine, she can see spirits and sense evil. This gift makes her a target but also gives her the insight needed to survive the night and help her babysitters lock Annabelle away." }
    ],
    'Insidious: Chapter 2': [
        { question: "Who is the Bride in Black?", answer: "The Bride in Black is revealed to be Parker Crane, a serial killer who murdered women while dressed in a black wedding dress. He was abused by his mother as a child and forced to live as a girl, creating a fractured psyche that persisted into death as a malevolent spirit." },
        { question: "Is Josh possessed the whole movie?", answer: "For most of the film, yes. The real Josh Lambert is trapped in The Further, while the spirit of Parker Crane possesses his physical body. This explains 'Josh's' erratic behavior, his physical deterioration (tooth loss), and his murderous intent toward his family." },
        { question: "How do they defeat the mother?", answer: "Elise Rainier's spirit helps the real Josh in The Further. They find Parker's childhood memory and confront his abusive mother, the Woman in White. Elise destroys the mother's spirit with a rocking horse (a symbol of Parker's childhood), freeing Parker's ghost from her influence and saving Josh." },
        { question: "Why does Josh lose his memory?", answer: "At the end of the film, Josh and Dalton agree to have their memories of The Further suppressed through hypnosis by Carl to prevent them from accidentally astral projecting again. However, the end of the movie suggests the connection to the spirit world may never be fully broken." }
    ]
};

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
        if (lowerType.includes('gore') || lowerType.includes('mutilation')) types.add('extreme gore');
        if (lowerType.includes('animal')) types.add('animal harm');
        if (lowerType.includes('sexual') || lowerType.includes('assault')) types.add('sexual violence');
        if (lowerType.includes('suicide') || lowerType.includes('self-harm')) types.add('self-harm');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HBO_HORROR_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A terrifying horror movie on HBO Max.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.0, 
            'bestRating': 10, 
            'worstRating': 1, 
            'ratingCount': movieInfo?.audienceScore || 100 
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

export const fetchMovieFromTMDB = async (tmdbId) => ({ 
    poster_path: null, 
    title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' 
});

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