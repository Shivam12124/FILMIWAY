// utils/huluFamilyMovieData.js - HULU FAMILY COLLECTION DATA
// Wholesome, Entertaining, and Heartwarming

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 838240, "imdbID": "tt13429870", "Title": "Robot Dreams", "year": 2023, "genre": "Animation", "runtime": 102, "rank": 1 },
    { "tmdbId": 1593, "imdbID": "tt0477347", "Title": "Night at the Museum", "year": 2006, "genre": "Adventure", "runtime": 108, "rank": 2 },
    { "tmdbId": 675353, "imdbID": "tt12412888", "Title": "Sonic the Hedgehog 2", "year": 2022, "genre": "Action", "runtime": 122, "rank": 3 },
    { "tmdbId": 537061, "imdbID": "tt10515852", "Title": "Steven Universe: The Movie", "year": 2019, "genre": "Animation", "runtime": 82, "rank": 4 },
    { "tmdbId": 76492, "imdbID": "tt0837562", "Title": "Hotel Transylvania", "year": 2012, "genre": "Animation", "runtime": 91, "rank": 5 },
    { "tmdbId": 159824, "imdbID": "tt2510894", "Title": "Hotel Transylvania 2", "year": 2015, "genre": "Animation", "runtime": 89, "rank": 6 },
    { "tmdbId": 676710, "imdbID": "tt10473036", "Title": "The Amazing Maurice", "year": 2022, "genre": "Animation", "runtime": 93, "rank": 7 },
    { "tmdbId": 1159799, "imdbID": "tt27553096", "Title": "My Friend the Penguin", "year": 2024, "genre": "Drama", "runtime": 97, "rank": 8 },
    { "tmdbId": 778810, "imdbID": "tt10696784", "Title": "Fireheart", "year": 2022, "genre": "Animation", "runtime": 92, "rank": 9 },
    { "tmdbId": 68728, "imdbID": "tt1622029", "Title": "Oz the Great and Powerful", "year": 2013, "genre": "Fantasy", "runtime": 130, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Scary Moments for Kids)
export const SENSITIVE_TIMELINES = {
    // 1. Robot Dreams
    1012201: { scenes: [] }, // Very gentle
    
    // 2. Night at the Museum
    1593: { 
        scenes: [
            { start: "0:25:00", end: "0:28:00", type: "Scary Skeleton", severity: "Mild" } // T-Rex chase
        ] 
    },
    
    // 3. Sonic 2
    675353: { scenes: [] },
    
    // 4. Steven Universe
    537061: { scenes: [] },
    
    // 5. Hotel Transylvania
    76492: { scenes: [] }, // Funny monsters only
    
    // 6. Hotel Transylvania 2
    260513: { scenes: [] },
    
    // 7. The Amazing Maurice
    791334: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Scary Villain", severity: "Moderate" } // The Rat King
        ] 
    },
    
    // 8. My Friend the Penguin
    1007535: { scenes: [] },
    
    // 9. Fireheart
    778810: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Fire Danger", severity: "Mild" } // Fire scenes
        ] 
    },
    
    // 10. Oz the Great and Powerful
    68728: { 
        scenes: [
            { start: "1:30:00", end: "1:35:00", type: "Scary Witch", severity: "Moderate" } // Wicked Witch transformation
        ] 
    }
};

export const FALLBACK_POSTERS = {
    1012201: "https://image.tmdb.org/t/p/w500/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    1593: "https://image.tmdb.org/t/p/w500/h6W7rX697fK1790iY3l590.jpg",
    675353: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO8MQO0p.jpg",
    537061: "https://image.tmdb.org/t/p/w500/8mRgpubxHqnqvEN44ManL.jpg",
    76492: "https://image.tmdb.org/t/p/w500/2yQUnpc1BXQuT8ImVR.jpg",
    260513: "https://image.tmdb.org/t/p/w500/5aGhaIHYuKepojCZ7Q.jpg",
    791334: "https://image.tmdb.org/t/p/w500/ydhZuC15.jpg",
    1007535: "https://image.tmdb.org/t/p/w500/p3a3a.jpg",
    778810: "https://image.tmdb.org/t/p/w500/198.jpg",
    68728: "https://image.tmdb.org/t/p/w500/7q.jpg"
};

// ✅ HELPER: Customized for Family
const createMovieData = (data) => ({
    wholesomeScore: 90, // Overall family friendliness
    funFactor: 85,      // Entertainment value for kids
    complexityLevel: "FAMILY",
    dominantColor: "#facc15", // Bright Yellow
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Robot Dreams (Collection Anchor - Emotional Peak)
    1012201: createMovieData({ 
        wholesomeScore: 98, 
        funFactor: 80, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#f59e0b",
        rating: 8.1, criticsScore: 98, audienceScore: 90, director: "Pablo Berger", 
        cast: ["Ivan Labanda", "Dog", "Robot"], boxOffice: "$3.5 million", budget: "$6 million", 
        dna: { "Drama": 40, "Family": 30, "Music": 20, "Romance": 10 }, 
        scenes: [
            { time: 10, intensity: 25, label: "Building Robot", color: "#fbbf24" },
            { time: 30, intensity: 45, label: "Beach Day", color: "#f59e0b" },
            { time: 60, intensity: 65, label: "Dream Sequence", color: "#d97706" },
            { time: 90, intensity: 78, label: "New Beginnings", color: "#b45309" },
            { time: 100, intensity: 83, label: "September", color: "#fbbf24" }
        ],
        synopsis: "Set in a vibrant, musically-charged 1980s Manhattan, this dialogue-free masterpiece tells the story of Dog, a lonely resident of the East Village who decides to build himself a robot companion to escape his isolation. As their friendship blossoms under the neon lights and sun-soaked beaches of New York, an unfortunate separation at Coney Island sets them on parallel journeys of longing, memory, and growth. It is a profound meditation on the transient nature of connection and the quiet courage required to eventually move forward with your life.",
        themes: ["Friendship", "Loss", "Moving On"]
    }),

    // 2. Night at the Museum (Adventure Mid-Tier)
    1593: createMovieData({ 
        wholesomeScore: 90, 
        funFactor: 95, 
        complexityLevel: "FUN", 
        dominantColor: "#3b82f6",
        rating: 6.5, criticsScore: 43, audienceScore: 67, director: "Shawn Levy", 
        cast: ["Ben Stiller", "Robin Williams", "Owen Wilson"], boxOffice: "$574 million", budget: "$110 million", 
        dna: { "Comedy": 50, "Adventure": 30, "Fantasy": 20 }, 
        scenes: [
            { time: 15, intensity: 30, label: "First Shift", color: "#60a5fa" },
            { time: 40, intensity: 55, label: "Rexy Chase", color: "#3b82f6" },
            { time: 70, intensity: 65, label: "Civil War", color: "#2563eb" },
            { time: 90, intensity: 75, label: "Saving the Tablet", color: "#1d4ed8" },
            { time: 100, intensity: 65, label: "Party Time", color: "#1e40af" }
        ],
        synopsis: "Larry Daley is a kind-hearted dreamer who frequently struggles with bad luck, but he accepts a low-level position as a night security guard at the American Museum of Natural History to prove his stability to his young son. However, his first shift reveals a world-altering secret: an ancient Egyptian artifact, the Tablet of Ahkmenrah, brings every exhibit in the building to life after dark. Larry must navigate the chaos of a prehistoric T-Rex, miniature Roman armies, and Teddy Roosevelt himself, all while preventing a sinister plot that threatens to extinguish the museum's magic forever.",
        themes: ["Responsibility", "Fatherhood", "History"]
    }),

    // 3. Sonic the Hedgehog 2 (High-Energy Adventure)
    675353: createMovieData({ 
        wholesomeScore: 88, 
        funFactor: 98, 
        complexityLevel: "HIGH-ENERGY", 
        dominantColor: "#0ea5e9",
        rating: 6.5, criticsScore: 69, audienceScore: 96, director: "Jeff Fowler", 
        cast: ["Ben Schwartz", "Jim Carrey", "Idris Elba"], boxOffice: "$405 million", budget: "$110 million", 
        dna: { "Action": 40, "Comedy": 40, "Sci-Fi": 20 }, 
        scenes: [
            { time: 10, intensity: 35, label: "Blue Justice", color: "#38bdf8" },
            { time: 45, intensity: 60, label: "Siberian Dance", color: "#0ea5e9" },
            { time: 80, intensity: 72, label: "Temple Fight", color: "#0284c7" },
            { time: 110, intensity: 78, label: "Super Sonic", color: "#eab308" },
            { time: 120, intensity: 70, label: "Baseball", color: "#0c4a6e" }
        ],
        synopsis: "After settling into the quiet town of Green Hills, Sonic is desperate to prove he has the maturity of a true hero, despite his chaotic impulses. His life is upended when the maniacal Dr. Robotnik returns from the Mushroom Planet with a powerful new ally: Knuckles the Echidna, a warrior seeking a legendary emerald with the power to build and destroy civilizations. Sonic teams up with a brilliant young fox named Tails to embark on a globe-trotting journey, racing to find the mystical gem before it falls into the wrong hands and alters the fate of the world.",
        themes: ["Family", "Friendship", "Responsibility"]
    }),

    // 4. Steven Universe: The Movie (Musical Resonance)
    537061: createMovieData({ 
        wholesomeScore: 95, 
        funFactor: 90, 
        complexityLevel: "EMOTIONAL", 
        dominantColor: "#ec4899",
        rating: 7.8, criticsScore: 100, audienceScore: 92, director: "Rebecca Sugar", 
        cast: ["Zach Callison", "Estelle", "Sarah Stiles"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Musical": 40, "Drama": 30, "Sci-Fi": 20, "Family": 10 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Happily Ever After", color: "#fbcfe8" },
            { time: 30, intensity: 55, label: "Spinel Arrives", color: "#ec4899" },
            { time: 60, intensity: 72, label: "Drift Away", color: "#db2777" },
            { time: 75, intensity: 80, label: "True Kinda Love", color: "#be185d" },
            { time: 80, intensity: 68, label: "Change", color: "#f472b6" }
        ],
        synopsis: "Two years have passed since Steven Universe brought peace to the galaxy, and he believes his work as a defender of Earth is finally finished, allowing him to enjoy his 'happily ever after' with his friends and family. This peace is shattered when a mysterious and vengeful Gem named Spinel arrives in Beach City, wielding a weapon that begins draining the life from the planet and resetting the powers of the Crystal Gems. Steven must delve into the forgotten history of his mother and find the inner strength to restore his friends' memories before the Earth becomes a lifeless wasteland.",
        themes: ["Growth", "Change", "Trauma"]
    }),

    // 5. Hotel Transylvania (Comedy Mid-Tier)
    76492: createMovieData({ 
        wholesomeScore: 92, 
        funFactor: 90, 
        complexityLevel: "FUN", 
        dominantColor: "#7c3aed",
        rating: 7.0, criticsScore: 45, audienceScore: 72, director: "Genndy Tartakovsky", 
        cast: ["Adam Sandler", "Selena Gomez", "Andy Samberg"], boxOffice: "$358 million", budget: "$85 million", 
        dna: { "Comedy": 45, "Fantasy": 35, "Family": 20 }, 
        scenes: [
            { time: 15, intensity: 30, label: "Hotel Check-In", color: "#a78bfa" },
            { time: 40, intensity: 50, label: "Zing", color: "#7c3aed" },
            { time: 70, intensity: 65, label: "The Party", color: "#6d28d9" },
            { time: 85, intensity: 73, label: "Chase to Airport", color: "#5b21b6" },
            { time: 90, intensity: 65, label: "Happy Birthday", color: "#4c1d95" }
        ],
        synopsis: "Count Dracula operates a lavish, five-stake resort where monsters like Frankenstein, the Mummy, and the Invisible Man can vacation in safety, far away from the 'terrible' world of humans. The Count is also a fiercely overprotective father to his teenage daughter, Mavis, and has fabricated elaborate stories to keep her from leaving the hotel. His carefully constructed world begins to crumble when an ordinary human backpacker accidentally stumbles into the resort, forcing Dracula to go into high-gear damage control while Mavis begins to experience her first 'Zing.'",
        themes: ["Acceptance", "Fatherhood", "Prejudice"]
    }),

    // 6. Hotel Transylvania 2 (Comedy Mid-Tier)
    260513: createMovieData({ 
        wholesomeScore: 90, 
        funFactor: 92, 
        complexityLevel: "FUN", 
        dominantColor: "#16a34a",
        rating: 6.6, criticsScore: 56, audienceScore: 64, director: "Genndy Tartakovsky", 
        cast: ["Adam Sandler", "Selena Gomez", "Mel Brooks"], boxOffice: "$474 million", budget: "$80 million", 
        dna: { "Comedy": 45, "Fantasy": 35, "Family": 20 }, 
        scenes: [
            { time: 20, intensity: 30, label: "Dennis is Born", color: "#86efac" },
            { time: 50, intensity: 55, label: "Vampire Camp", color: "#16a34a" },
            { time: 75, intensity: 68, label: "Vlad Arrives", color: "#15803d" },
            { time: 85, intensity: 75, label: "Bela Attack", color: "#166534" },
            { time: 88, intensity: 70, label: "Dennis Fangs", color: "#22c55e" }
        ],
        synopsis: "The rigid policies of Dracula’s monster-only resort have finally relaxed, opening its doors to human guests and celebrating the marriage of Mavis and Johnny. However, Dracula is secretly consumed by anxiety that his young grandson, Dennis, isn't showing any signs of being a vampire. While Mavis is away visiting her human in-laws, 'Vampa' Drac enlists his best friends to put Dennis through a 'monster-in-training' boot camp to jumpstart his transformation. The stakes rise further when Dracula’s old-school father, Vlad, pays an unexpected visit.",
        themes: ["Identity", "Grandparenting", "Acceptance"]
    }),

    // 7. The Amazing Maurice (Clever Adventure)
    791334: createMovieData({ 
        wholesomeScore: 85, 
        funFactor: 88, 
        complexityLevel: "CLEVER", 
        dominantColor: "#f97316",
        rating: 6.3, criticsScore: 74, audienceScore: 70, director: "Toby Genkel", 
        cast: ["Hugh Laurie", "Emilia Clarke", "David Thewlis"], boxOffice: "$23 million", budget: "$17 million", 
        dna: { "Fantasy": 40, "Comedy": 30, "Adventure": 30 }, 
        scenes: [
            { time: 10, intensity: 20, label: "The Scam", color: "#fdba74" },
            { time: 40, intensity: 45, label: "Piper's Truth", color: "#f97316" },
            { time: 70, intensity: 65, label: "The Rat King", color: "#c2410c" },
            { time: 85, intensity: 77, label: "Maurice's Sacrifice", color: "#ea580c" },
            { time: 90, intensity: 65, label: "New Deal", color: "#9a3412" }
        ],
        synopsis: "Based on Terry Pratchett’s beloved novel, this clever subversion of the Pied Piper legend follows Maurice, a streetwise ginger cat with a brilliant money-making scheme. Maurice travels from town to town with a band of unusually intelligent, talking rats and a dim-witted piper, staging 'rat plagues' and then charging the locals for a heroic removal. Their profitable scam hits a major roadblock when they arrive in the mysterious town of Bad Blintz, where a dark, malevolent force lurking in the sewers threatens to expose their deception.",
        themes: ["Deception", "Redemption", "Teamwork"]
    }),

    // 8. My Friend the Penguin (Gentle True Story)
    1007535: createMovieData({ 
        wholesomeScore: 100, 
        funFactor: 75, 
        complexityLevel: "HEARTWARMING", 
        dominantColor: "#0f172a",
        rating: 7.0, criticsScore: 85, audienceScore: 97, director: "David Schurmann", 
        cast: ["Jean Reno", "Adriana Barraza"], boxOffice: "$5 million", budget: "N/A", 
        dna: { "Drama": 60, "Family": 40 }, 
        scenes: [
            { time: 10, intensity: 20, label: "The Rescue", color: "#64748b" },
            { time: 40, intensity: 40, label: "Dindim Returns", color: "#0f172a" },
            { time: 70, intensity: 55, label: "The Village", color: "#334155" },
            { time: 90, intensity: 73, label: "The Reunion", color: "#1e293b" },
            { time: 95, intensity: 65, label: "Viral Fame", color: "#94a3b8" }
        ],
        synopsis: "Based on an incredible true story, this film follows João, a humble Brazilian fisherman struggling with personal grief and isolation. His life takes an unexpected turn when he discovers a tiny Magellanic penguin, soaked in oil and near death, washed up on his local beach. After nursing the bird back to health and naming him Dindim, an unbreakable bond is forged. Even when Dindim returns to the wild, he begins an annual, 5,000-mile odyssey across the ocean to return to the same beach, proving that some connections transcend nature itself.",
        themes: ["Grief", "Nature", "Healing"]
    }),

    // 9. Fireheart (Inspiring Adventure)
    778810: createMovieData({ 
        wholesomeScore: 90, 
        funFactor: 85, 
        complexityLevel: "INSPIRING", 
        dominantColor: "#ef4444",
        rating: 6.2, criticsScore: 44, audienceScore: 68, director: "Theodore Ty", 
        cast: ["Olivia Cooke", "Kenneth Branagh", "William Shatner"], boxOffice: "$27 million", budget: "$38 million", 
        dna: { "Adventure": 40, "Comedy": 30, "Family": 30 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Dream", color: "#fca5a5" },
            { time: 45, intensity: 55, label: "Disguise", color: "#ef4444" },
            { time: 75, intensity: 68, label: "The Fire", color: "#b91c1c" },
            { time: 88, intensity: 77, label: "Saving Dad", color: "#dc2626" },
            { time: 92, intensity: 70, label: "First Firefighter", color: "#f87171" }
        ],
        synopsis: "In the high-stakes environment of 1920s New York City, sixteen-year-old Georgia Nolan harbors a forbidden dream: she wants to be a firefighter just like her father. In an era where women are barred from the profession, Georgia’s ambitions seem impossible until a mysterious arsonist begins burning down the theaters of Broadway. Seizing her chance, Georgia disguises herself as a young man named 'Joe' and joins a ragtag team of misfit firefighters to hunt down the arsonist while trying to keep her true identity hidden from her suspicious father.",
        themes: ["Ambition", "Equality", "Father-Daughter"]
    }),

    // 10. Oz the Great and Powerful (Visual Spectacle)
    68728: createMovieData({ 
        wholesomeScore: 80, 
        funFactor: 85, 
        complexityLevel: "SPECTACLE", 
        dominantColor: "#10b981",
        rating: 6.3, criticsScore: 57, audienceScore: 56, director: "Sam Raimi", 
        cast: ["James Franco", "Mila Kunis", "Rachel Weisz"], boxOffice: "$493 million", budget: "$215 million", 
        dna: { "Fantasy": 60, "Adventure": 40 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Kansas Tornado", color: "#d1d5db" },
            { time: 30, intensity: 55, label: "Arrival in Oz", color: "#34d399" },
            { time: 70, intensity: 68, label: "The Wicked Witch", color: "#065f46" },
            { time: 110, intensity: 79, label: "The Great Illusion", color: "#10b981" },
            { time: 125, intensity: 70, label: "King of Oz", color: "#6ee7b7" }
        ],
        synopsis: "Oscar Diggs is a small-time circus magician with a questionable moral compass working the Kansas fairgrounds. When a massive tornado whisks his hot air balloon away to the vibrant Land of Oz, Oscar believes he has finally hit the jackpot—until he meets three powerful witches unconviced he is the great wizard the prophecies foretold. Forced to use his wits and theatrical illusions to distinguish between good and evil, Oscar must decide if he has the character to become a truly great man in a world of genuine magic.",
        themes: ["Belief", "Redemption", "Magic"]
    })
};

// ✅ EXTENDED FAQs (Detailed & Engaging)
export const HULU_FAMILY_MOVIE_FAQS = {
    'Robot Dreams': [
        { 
            question: "How does the film tell a story without any dialogue?", 
            answer: "Robot Dreams relies entirely on visual storytelling, expressive character animation, and a sophisticated soundscape. By removing spoken language, the film uses body language, facial expressions, and its central musical motif—'September' by Earth, Wind & Fire—to communicate complex emotions. This makes the narrative universally accessible, allowing viewers of all ages and languages to connect with the story on a deeply personal level." 
        },
        { 
            question: "Is the ending of Robot Dreams considered sad for a family movie?", 
            answer: "The ending is best described as bittersweet rather than purely sad. It challenges the standard 'happily ever after' trope by exploring the realistic theme of drifting apart. While it may pull at the heartstrings of both children and adults, it delivers a powerful message about growth, the impact people have on our lives, and how to cherish beautiful memories while moving forward into new phases of life." 
        },
        { 
            question: "What is the significance of the 1980s New York City setting?", 
            answer: "The 1980s NYC setting provides a vibrant and nostalgic backdrop that enhances the film's atmosphere. From the Twin Towers on the skyline to the boomboxes and roller skates in Central Park, the setting acts as a character itself. This era was chosen to evoke a specific sense of time and place where connection felt more tangible, grounding the fantastical premise of a robot companion in a recognizable, gritty, yet magical reality." 
        }
    ],
    'Night at the Museum': [
        { 
            question: "Which parts of the American Museum of Natural History are real in the film?", 
            answer: "While the exterior shots and the grand entrance hall are filmed at the actual American Museum of Natural History in New York City, the vast majority of the museum's interior was a massive, detailed set built on soundstages in Vancouver. The production team painstakingly recreated many of the famous dioramas and halls to allow for the complex stunts and CGI interactions that wouldn't be possible in a real, fragile museum environment." 
        },
        { 
            question: "How much of Robin Williams' performance as Teddy Roosevelt was improvised?", 
            answer: "A significant portion of Robin Williams' performance was improvised. Known for his lightning-fast wit, Williams frequently riffed during takes, adding layers of humor and warmth to the character of Teddy Roosevelt. Director Shawn Levy often kept the cameras rolling just to capture these spontaneous moments, many of which became the most memorable and heart-touching lines in the final cut of the film." 
        },
        { 
            question: "Is the Pharaoh Ahkmenrah based on a real historical figure?", 
            answer: "The character of Ahkmenrah and his golden tablet are entirely fictional creations for the movie's mythology. However, his design and backstory draw inspiration from various young Egyptian Pharaohs, most notably King Tutankhamun. The filmmakers used real Egyptian aesthetic details to lend a sense of authenticity to the character, even though his specific lineage and the magical properties of the tablet are purely cinematic inventions." 
        }
    ],
    'Sonic the Hedgehog 2': [
        { 
            question: "How did Idris Elba approach the voice acting for Knuckles?", 
            answer: "Idris Elba intentionally avoided making Knuckles sound 'sexy' or 'cool,' instead focusing on a deadpan, warrior-like seriousness. By playing the character as a literal-minded soldier with no sense of humor, Elba created a brilliant comedic dynamic with Sonic's wisecracking personality. This interpretation helped establish Knuckles as a formidable threat who eventually learns the value of friendship and 'Earth' culture." 
        },
        { 
            question: "Is this really Jim Carrey's final performance before retirement?", 
            answer: "During the press tour for Sonic 2, Jim Carrey announced that he was 'fairly serious' about retiring from acting, stating that he has 'done enough.' While actors often return for the right project, Carrey expressed a desire to live a quiet life and focus on his painting. If this remains his final major role, his high-energy, physical performance as Dr. Robotnik serves as a fitting tribute to the legendary comedy style he pioneered in the 90s." 
        },
        { 
            question: "Who provides the voice for Tails, and what is her history with the franchise?", 
            answer: "Tails is voiced by Colleen O'Shaughnessey, who is a veteran voice actress in the industry. Notably, she is the only voice actor from the SEGA video game franchise to reprise her role for the live-action films. Having voiced the character since 2014 across games and animated series, her casting was widely praised by fans for maintaining the character's authentic, youthful, and genius-level persona." 
        }
    ],
    'Steven Universe: The Movie': [
        { 
            question: "Can I watch the movie if I haven't finished the original TV series?", 
            answer: "Yes, the movie is surprisingly accessible to newcomers. The opening sequence is a Broadway-style musical number that cleverly recaps the entire five-season history of the show, explaining the Gems, the war for Earth, and Steven's heritage. While long-time fans will catch more subtle references and emotional payoffs, the core story about Steven facing a new threat is designed to stand on its own as a complete cinematic experience." 
        },
        { 
            question: "What inspired the unique 'rubber-hose' animation style of the villain Spinel?", 
            answer: "The villain Spinel was inspired by the 'rubber-hose' animation style of the 1920s and 30s, reminiscent of early Mickey Mouse or Popeye cartoons. Creator Rebecca Sugar chose this style to emphasize Spinel's erratic, bouncy, and 'outdated' nature compared to the modern designs of the other characters. Her fluid movement and exaggerated expressions serve as a visual metaphor for her unstable emotional state and her abandonment in the past." 
        },
        { 
            question: "How did the production team handle the two-year time skip for Steven?", 
            answer: "The two-year time skip allowed the creators to evolve Steven's design into a more mature 16-year-old version, famously giving him a visible neck for the first time. This physical change mirrors his internal growth; he is no longer just a kid looking for answers, but a leader who has found peace. The time jump also allowed the world of Beach City to progress, showing the integration of Gems and humans living together in a new era of harmony." 
        }
    ],
    'Hotel Transylvania': [
        { 
            question: "How does Hotel Transylvania subvert classic horror movie tropes?", 
            answer: "The film completely flips the horror genre by making the monsters the ones who are terrified of humans. Instead of being predators, characters like Dracula, Frankenstein, and the Werewolf are portrayed as sensitive, misunderstood individuals who just want a safe place to vacation. Humans are depicted as the 'scary' ones due to their history of torches and pitchforks, creating a humorous and heartfelt allegory for prejudice and the fear of the unknown." 
        },
        { 
            question: "What was the inspiration behind Adam Sandler's version of Dracula?", 
            answer: "Adam Sandler's Dracula is a comedic homage to the legendary Bela Lugosi, adopting the classic thick Transylvanian accent and dramatic cape-swishing. However, Sandler infused the character with his signature 'overprotective dad' energy, making him more relatable to modern audiences. The focus shifted from a spooky vampire to a stressed-out hotel manager trying to balance a business with his daughter's growing independence." 
        },
        { 
            question: "What exactly is a 'Zing' in the context of the movie's lore?", 
            answer: "A 'Zing' is the monster equivalent of finding a true soulmate. It is described as a magical, instantaneous spark that occurs the moment two people destined for each other lock eyes. According to monster lore, a Zing only happens once in a lifetime, making it an eternal and unbreakable bond. This concept drives the emotional stakes of the film, as Dracula must decide whether to respect his daughter's Zing or maintain his overprotective control." 
        }
    ],
    'Hotel Transylvania 2': [
        { 
            question: "How does the addition of Mel Brooks change the dynamic of the sequel?", 
            answer: "Legendary filmmaker Mel Brooks voices Vlad, Dracula's father, bringing an 'old-school' monster perspective to the story. His inclusion adds a layer of generational conflict; while Dracula has learned to accept humans, Vlad represents the ancient, human-hating traditions of the past. Brooks' iconic comedic timing provides a perfect foil to Sandler's Dracula, highlighting how much the main characters have grown since the first film." 
        },
        { 
            question: "Is there a deeper meaning behind Dennis being a 'late bloomer'?", 
            answer: "Dennis's struggle to grow his vampire fangs serves as a metaphor for parental and societal pressure. The film explores the anxiety of 'fitting in' and the expectations families often place on children to follow in their footsteps. His eventual transformation is triggered not by training, but by his desire to protect his friend Winnie, teaching the lesson that everyone develops at their own pace and that true strength comes from love and bravery." 
        },
        { 
            question: "Which real-world locations influenced the architecture of the Hotel?", 
            answer: "While the Hotel is a fantasy location, its architecture is heavily inspired by Gothic and Romanian styles. The production designers looked at Bran Castle in Transylvania—often called 'Dracula's Castle'—for its imposing silhouette and mountain-top placement. They combined this with exaggerated, 'stretched' geometry typical of Genndy Tartakovsky's animation style to give the hotel its unique, simultaneously cozy and slightly spooky personality." 
        }
    ],
    'The Amazing Maurice': [
        { 
            question: "How does this film capture the unique tone of Terry Pratchett's writing?", 
            answer: "The film stays true to Pratchett's Discworld spirit by being both hilariously satirical and surprisingly dark. It uses the character Malicia to constantly critique fairy tale tropes and narrative structures, offering a 'meta' commentary on storytelling itself. Like the source material, the film doesn't shy away from complex themes like morality, identity, and the corruptive nature of power, making it a thinking person's animated feature." 
        },
        { 
            question: "What makes the 'Rat King' different from a standard movie villain?", 
            answer: "The Rat King is a particularly creepy and creative villain because it is not a single entity, but a hive-mind created by the tangled tails of many rats. This 'multitude as one' concept draws on real-world urban legends but gives it a magical, malevolent twist. Its presence introduces a higher level of suspense and mild horror elements to the film, challenging the protagonists to use their collective intelligence rather than just physical force." 
        },
        { 
            question: "Why do the rats in Maurice’s crew have such unusual names?", 
            answer: "In a charming detail from the book, the rats gained intelligence by eating magical waste and subsequently taught themselves to read using discarded trash from the Unseen University. As a result, they named themselves after the first words they could read on food cans and signs. This leads to characters with names like 'Ham-and-Pork,' 'Peaches,' and 'Sardines,' giving the rats a distinct, quirky culture that reflects their resourcefulness." 
        }
    ],
    'My Friend the Penguin': [
        { 
            question: "How accurate is the film to the real-life story of João and Dindim?", 
            answer: "The film is remarkably accurate to the core events of the true story. In 2011, João Pereira de Souza did find a starving Magellanic penguin covered in oil on a beach near Rio de Janeiro. He spent weeks cleaning the bird's feathers and feeding it a diet of fish to regain its strength. The most incredible part—Dindim returning every year and traveling over 5,000 miles to spend time with João—is a documented scientific phenomenon that has amazed biologists worldwide." 
        },
        { 
            question: "What techniques were used to film the penguin scenes safely?", 
            answer: "To prioritize animal welfare, the production used a 'penguin-first' approach. Most of the intimate interactions featured real rescue penguins that were comfortable around humans, while more complex or physically demanding action sequences utilized state-of-the-art CGI. By blending the two, the director was able to capture the authentic, clumsy charm of a real penguin while ensuring that no animals were stressed or harmed during the making of the movie." 
        },
        { 
            question: "What are the environmental themes explored in the movie?", 
            answer: "Beyond the central friendship, the film serves as a poignant reminder of the impact of human negligence on marine life. The penguin's initial state—soaked in oil—highlights the devastating effects of offshore drilling and spills on local ecosystems. By focusing on the rescue and the penguin's natural migration patterns, the film encourages a deeper respect for wildlife and underscores the responsibility humans have to protect the oceans." 
        }
    ],
    'Fireheart': [
        { 
            question: "What historical reality inspired Georgia's struggle to become a firefighter?", 
            answer: "While Georgia is a fictional character, her story is rooted in the very real gender barriers of early 20th-century New York. Women were not officially allowed to join the FDNY until much later in history (the first female firefighters weren't sworn in until 1982). The film uses the 1930s setting to dramatize the 'pioneer' spirit of women who had to resort to extraordinary measures and disguises to prove they were physically and mentally capable of doing the same jobs as men." 
        },
        { 
            question: "Who is the creative team behind the film's distinct visual style?", 
            answer: "Fireheart was co-directed by Theodore Ty and Laurent Zeitoun, the same creative minds behind the hit film 'Ballerina' (Leap!). They utilized a warm, saturated color palette to evoke the 'Golden Age' of New York City, blending historical architecture with stylized character designs. The animation focuses heavily on the fluidity of fire and the tactical details of vintage firefighting equipment, creating a visually rich and immersive period piece." 
        },
        { 
            question: "What message does the film send about the father-daughter relationship?", 
            answer: "The film explores the complex tension between a father's desire to protect his child and a daughter's need for independence. Georgia's father, a retired captain, fears for her safety in a dangerous profession, not just because of her gender, but because he knows the true risks of the job. Their journey is one of mutual respect, where the father must learn to see his daughter as a capable adult, and Georgia must learn to value her father's experience and legacy." 
        }
    ],
    'Oz the Great and Powerful': [
        { 
            question: "How does the film pay homage to the 1939 classic 'The Wizard of Oz'?", 
            answer: "The film is packed with tributes to the original. Most notably, it replicates the iconic transition from a sepia-toned, narrow 4:3 aspect ratio for the Kansas scenes to a vivid, wide-screen Technicolor world once the protagonist reaches Oz. The production design also mirrors the 'fairytale' look of the 1939 sets, and the characters of the Munchkins, the Quadlings, and the Winkies are all designed to feel like they exist in the same cinematic universe." 
        },
        { 
            question: "What is the 'origin story' of the Wicked Witch in this version?", 
            answer: "The film provides a tragic backstory for the Wicked Witch of the West. It introduces her as Theodora, a naive and hopeful witch who initially believes in Oz’s goodness. Her transformation into the iconic green-skinned villain is triggered by a combination of her sister's manipulation and a broken heart caused by Oz’s selfishness. This adds a layer of psychological depth to the villain, showing that her 'wickedness' was born out of pain rather than pure malice." 
        },
        { 
            question: "Why was Sam Raimi chosen to direct this fantasy epic?", 
            answer: "Sam Raimi, known for the original Spider-Man trilogy and the Evil Dead films, was chosen for his ability to blend large-scale spectacle with a slightly quirky, energetic directorial style. Raimi brought his expertise in practical effects and camera movement to Oz, creating a world that felt both grand and intimate. His background in horror also allowed him to make the darker elements of the film—like the flying baboons and the dark forest—genuinely eerie and effective." 
        }
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
        types.add(scene.type);
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HULU_FAMILY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A great family movie on Hulu.`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
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