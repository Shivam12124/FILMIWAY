// utils/peacockFamilyMovieData.js - PEACOCK FAMILY COLLECTION DATA
// Wholesome, Entertaining, and Heartwarming

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 10191, "imdbID": "tt0892791", "Title": "How to Train Your Dragon", "year": 2010, "genre": "Animation", "runtime": 98, "rank": 1 },
    { "tmdbId": 673, "imdbID": "tt0304141", "Title": "Harry Potter and the Prisoner of Azkaban", "year": 2004, "genre": "Fantasy", "runtime": 142, "rank": 2 },
    { "tmdbId": 315162, "imdbID": "tt3915174", "Title": "Puss in Boots: The Last Wish", "year": 2022, "genre": "Animation", "runtime": 102, "rank": 3 },
    { "tmdbId": 808, "imdbID": "tt0126029", "Title": "Shrek", "year": 2001, "genre": "Animation", "runtime": 90, "rank": 4 },
    { "tmdbId": 82702, "imdbID": "tt1646971", "Title": "How to Train Your Dragon 2", "year": 2014, "genre": "Animation", "runtime": 102, "rank": 5 },
    { "tmdbId": 20352, "imdbID": "tt1323594", "Title": "Despicable Me", "year": 2010, "genre": "Animation", "runtime": 95, "rank": 6 },
    { "tmdbId": 671, "imdbID": "tt0241527", "Title": "Harry Potter and the Sorcerer's Stone", "year": 2001, "genre": "Fantasy", "runtime": 152, "rank": 7 },
    { "tmdbId": 431580, "imdbID": "tt6324278", "Title": "Abominable", "year": 2019, "genre": "Animation", "runtime": 97, "rank": 8 },
    { "tmdbId": 166428, "imdbID": "tt2386490", "Title": "How to Train Your Dragon: The Hidden World", "year": 2019, "genre": "Animation", "runtime": 104, "rank": 9 },
    { "tmdbId": 809, "imdbID": "tt0298148", "Title": "Shrek 2", "year": 2004, "genre": "Animation", "runtime": 93, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Scary Moments for Kids)
export const SENSITIVE_TIMELINES = {
    // 1. How to Train Your Dragon
    10191: { 
        scenes: [
            { start: "1:20:00", end: "1:25:00", type: "Scary Monster", severity: "Moderate" }, // The Red Death battle
            { start: "1:28:00", end: "1:30:00", type: "Injury/Loss of Limb", severity: "Mild" } // Hiccup loses leg
        ] 
    },
    
    // 2. Harry Potter & Prisoner of Azkaban
    673: { 
        scenes: [
            { start: "0:20:00", end: "0:23:00", type: "Scary Creature", severity: "High" }, // Dementor on train
            { start: "1:45:00", end: "1:50:00", type: "Transformation", severity: "Moderate" } // Werewolf
        ] 
    },
    
    // 3. Puss in Boots: The Last Wish
    315162: { 
        scenes: [
            { start: "0:10:00", end: "0:12:00", type: "Blood/Injury", severity: "Mild" }, // Wolf scratches Puss
            { start: "1:30:00", end: "1:35:00", type: "Death Theme", severity: "Moderate" } // Confronting Death
        ] 
    },
    
    // 4. Shrek
    808: { 
        scenes: [
            { start: "1:05:00", end: "1:08:00", type: "Dragon Chase", severity: "Mild" }
        ] 
    },
    
    // 5. How to Train Your Dragon 2
    82702: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Character Death", severity: "High" } // Stoick's death
        ] 
    },
    
    // 6. Despicable Me
    20352: { 
        scenes: [
            { start: "0:50:00", end: "0:53:00", type: "Peril", severity: "Mild" } // Iron Maiden spike trap
        ] 
    },
    
    // 7. Harry Potter & Sorcerer's Stone
    671: { 
        scenes: [
            { start: "1:50:00", end: "1:55:00", type: "Scary Face", severity: "Moderate" } // Voldemort on Quirrell's head
        ] 
    },
    
    // 8. Abominable
    431580: { scenes: [] },
    
    // 9. How to Train Your Dragon: Hidden World
    166428: { 
        scenes: [
            { start: "1:30:00", end: "1:35:00", type: "Emotional Goodbye", severity: "Mild" }
        ] 
    },
    
    // 10. Shrek 2
    809: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    10191: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqU69zkAM99c67c6.jpg",
    673: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    315162: "https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    808: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    82702: "https://image.tmdb.org/t/p/w500/d13Uj86LItDENVb5zNFxoAuCLgr.jpg",
    20352: "https://image.tmdb.org/t/p/w500/sLeWmc786x31PT6rY6Iy3sF460c.jpg",
    671: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    431580: "https://image.tmdb.org/t/p/w500/2g09Z4i298k1D61f2Ffi57Z555y.jpg",
    166428: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    809: "https://image.tmdb.org/t/p/w500/2y4Ja5rxgZiyr0E0YhivsmQ99q4.jpg"
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
    // 1. How to Train Your Dragon
    10191: createMovieData({ 
        wholesomeScore: 100, 
        funFactor: 95, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#ef4444",
        rating: 8.1, criticsScore: 99, audienceScore: 91, director: "Dean DeBlois", 
        cast: ["Jay Baruchel", "Gerard Butler", "America Ferrera"],
        dna: { "Adventure": 50, "Fantasy": 30, "Heart": 20 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Downing the Night Fury", color: "#fca5a5" },
            { time: 35, intensity: 55, label: "Forbidden Friendship", color: "#ef4444" },
            { time: 55, intensity: 85, label: "Test Drive", color: "#b91c1c" },
            { time: 80, intensity: 90, label: "Ready the Ships", color: "#7f1d1d" },
            { time: 95, intensity: 98, label: "The Red Death", color: "#991b1b" }
        ],
        synopsis: "Hiccup is a Norse teenager from the island of Berk, where fighting dragons is a way of life. His progressive views and weird sense of humor make him a misfit, despite the fact that his father is chief of the clan. Tossed into dragon-fighting school, he endeavors to prove himself as a true Viking, but when he befriends an injured dragon he names Toothless, he has the chance to plot a new course for his people's future.",
        themes: ["Empathy", "Identity", "Acceptance"]
    }),

    // 2. Harry Potter and the Prisoner of Azkaban
    673: createMovieData({ 
        wholesomeScore: 85, 
        funFactor: 90, 
        complexityLevel: "DARK FANTASY", 
        dominantColor: "#3b82f6",
        rating: 7.9, criticsScore: 90, audienceScore: 86, director: "Alfonso Cuarón", 
        cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        dna: { "Fantasy": 50, "Mystery": 30, "Coming of Age": 20 }, 
        scenes: [
            { time: 15, intensity: 65, label: "The Knight Bus", color: "#60a5fa" },
            { time: 40, intensity: 75, label: "Boggart Lesson", color: "#3b82f6" },
            { time: 80, intensity: 85, label: "Shrieking Shack", color: "#2563eb" },
            { time: 110, intensity: 95, label: "Expecto Patronum", color: "#1d4ed8" },
            { time: 130, intensity: 90, label: "Time Turner", color: "#1e3a8a" }
        ],
        synopsis: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard. Alfonso Cuarón takes the helm, introducing a darker, more mature tone that bridges the gap between the children's stories and the epic saga to come.",
        themes: ["Fear", "Time", "Family"]
    }),

    // 3. Puss in Boots: The Last Wish
    315162: createMovieData({ 
        wholesomeScore: 92, 
        funFactor: 98, 
        complexityLevel: "VISUAL STUNNER", 
        dominantColor: "#f97316",
        rating: 7.9, criticsScore: 95, audienceScore: 94, director: "Joel Crawford", 
        cast: ["Antonio Banderas", "Salma Hayek", "Harvey Guillén"],
        dna: { "Adventure": 40, "Comedy": 30, "Action": 30 }, 
        scenes: [
            { time: 10, intensity: 80, label: "Fighting the Giant", color: "#fdba74" },
            { time: 30, intensity: 90, label: "Wolf Encounter", color: "#f97316" },
            { time: 60, intensity: 70, label: "Map Quest", color: "#ea580c" },
            { time: 85, intensity: 85, label: "Panic Attack", color: "#c2410c" },
            { time: 100, intensity: 95, label: "Star Fight", color: "#7c2d12" }
        ],
        synopsis: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives. Visually groundbreaking and emotionally resonant, it tackles the fear of death with surprising depth.",
        themes: ["Mortality", "Legacy", "Friendship"]
    }),

    // 4. Shrek
    808: createMovieData({ 
        wholesomeScore: 88, 
        funFactor: 95, 
        complexityLevel: "LEGEND", 
        dominantColor: "#84cc16",
        rating: 7.9, criticsScore: 88, audienceScore: 90, director: "Andrew Adamson", 
        cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
        dna: { "Comedy": 50, "Fantasy": 30, "Satire": 20 }, 
        scenes: [
            { time: 5, intensity: 40, label: "All Star Opening", color: "#bef264" },
            { time: 35, intensity: 60, label: "Saving Donkey", color: "#84cc16" },
            { time: 60, intensity: 75, label: "Rescuing Fiona", color: "#65a30d" },
            { time: 75, intensity: 50, label: "Campfire Confession", color: "#4d7c0f" },
            { time: 85, intensity: 80, label: "Wedding Crash", color: "#3f6212" }
        ],
        synopsis: "It ain't easy being green. A solitary ogre finds his swamp invaded by fairytale creatures who have been banished by the scheming Lord Farquaad. Shrek strikes a deal with Farquaad to bring him a queen in exchange for the deed to his swamp. The movie that deconstructed the fairy tale genre and launched a massive franchise.",
        themes: ["Inner Beauty", "Prejudice", "Friendship"]
    }),

    // 5. How to Train Your Dragon 2
    82702: createMovieData({ 
        wholesomeScore: 95, 
        funFactor: 90, 
        complexityLevel: "EPIC", 
        dominantColor: "#0ea5e9",
        rating: 7.8, criticsScore: 92, audienceScore: 89, director: "Dean DeBlois", 
        cast: ["Jay Baruchel", "Cate Blanchett", "Gerard Butler"],
        dna: { "Adventure": 50, "Fantasy": 30, "Drama": 20 }, 
        scenes: [
            { time: 10, intensity: 40, label: "Dragon Racing", color: "#7dd3fc" },
            { time: 40, intensity: 65, label: "Valka's Sanctuary", color: "#0ea5e9" },
            { time: 70, intensity: 90, label: "Battle of the Bewilderbeast", color: "#0284c7" },
            { time: 85, intensity: 98, label: "Stoick's Sacrifice", color: "#0369a1" },
            { time: 100, intensity: 95, label: "Toothless Challenged", color: "#0c4a6e" }
        ],
        synopsis: "Five years have passed since Hiccup and Toothless united the dragons and Vikings of Berk. When they discover a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
        themes: ["Leadership", "Loss", "Family"]
    }),

    // 6. Despicable Me
    20352: createMovieData({ 
        wholesomeScore: 90, 
        funFactor: 92, 
        complexityLevel: "FUN", 
        dominantColor: "#facc15",
        rating: 7.6, criticsScore: 80, audienceScore: 82, director: "Pierre Coffin", 
        cast: ["Steve Carell", "Jason Segel", "Russell Brand"],
        dna: { "Comedy": 50, "Family": 40, "Sci-Fi": 10 }, 
        scenes: [
            { time: 15, intensity: 40, label: "Stealing the Pyramid", color: "#fef08a" },
            { time: 40, intensity: 60, label: "It's So Fluffy", color: "#facc15" },
            { time: 65, intensity: 75, label: "Vector's Fortress", color: "#eab308" },
            { time: 80, intensity: 50, label: "Bedtime Stories", color: "#ca8a04" },
            { time: 90, intensity: 85, label: "Moon Heist", color: "#a16207" }
        ],
        synopsis: "In a happy suburban neighborhood surrounded by white picket fences with flowering rose bushes, sits a black house with a dead lawn. This is the secret hideout of Gru, who plans to take over the world. Armed with his arsenal of shrink rays, freeze rays, and battle-ready vehicles, Gru vanquishes all who stand in his way. Until the day he encounters the immense will of three little orphaned girls who look at him and see something that no one else has ever seen: a potential Dad.",
        themes: ["Parenthood", "Redemption", "Heart"]
    }),

    // 7. Harry Potter and the Sorcerer's Stone
    671: createMovieData({ 
        wholesomeScore: 95, 
        funFactor: 88, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#fbbf24",
        rating: 7.6, criticsScore: 81, audienceScore: 82, director: "Chris Columbus", 
        cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
        dna: { "Fantasy": 60, "Adventure": 30, "Mystery": 10 }, 
        scenes: [
            { time: 20, intensity: 50, label: "Diagon Alley", color: "#fcd34d" },
            { time: 45, intensity: 40, label: "Sorting Hat", color: "#fbbf24" },
            { time: 70, intensity: 75, label: "Troll in the Dungeon", color: "#f59e0b" },
            { time: 110, intensity: 85, label: "Wizard's Chess", color: "#d97706" },
            { time: 140, intensity: 90, label: "Mirror of Erised", color: "#b45309" }
        ],
        synopsis: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers, he uncovers the truth about his parents' deaths and the villain who's to blame.",
        themes: ["Discovery", "Friendship", "Courage"]
    }),

    // 8. Abominable
    431580: createMovieData({ 
        wholesomeScore: 98, 
        funFactor: 85, 
        complexityLevel: "HEARTWARMING", 
        dominantColor: "#a78bfa",
        rating: 7.0, criticsScore: 82, audienceScore: 95, director: "Jill Culton", 
        cast: ["Chloe Bennet", "Albert Tsai", "Tenzing Norgay Trainor"],
        dna: { "Adventure": 50, "Fantasy": 30, "Family": 20 }, 
        scenes: [
            { time: 15, intensity: 30, label: "Meeting Everest", color: "#c4b5fd" },
            { time: 40, intensity: 55, label: "Giant Blueberries", color: "#a78bfa" },
            { time: 65, intensity: 75, label: "Leshan Buddha", color: "#8b5cf6" },
            { time: 80, intensity: 85, label: "Violin Magic", color: "#7c3aed" },
            { time: 95, intensity: 80, label: "Homecoming", color: "#6d28d9" }
        ],
        synopsis: "After discovering a Yeti on the roof of her apartment building, teenage Yi and her two friends embark on an epic quest to reunite the magical creature with his family at the highest point on Earth. However, the trio of friends will have to stay one step ahead of a wealthy financier and a determined zoologist who want to capture the beast for their own gain.",
        themes: ["Nature", "Home", "Music"]
    }),

    // 9. How to Train Your Dragon: The Hidden World
    166428: createMovieData({ 
        wholesomeScore: 92, 
        funFactor: 88, 
        complexityLevel: "EMOTIONAL", 
        dominantColor: "#ec4899",
        rating: 7.5, criticsScore: 90, audienceScore: 86, director: "Dean DeBlois", 
        cast: ["Jay Baruchel", "America Ferrera", "F. Murray Abraham"],
        dna: { "Adventure": 40, "Romance": 30, "Family": 30 }, 
        scenes: [
            { time: 10, intensity: 40, label: "Dragon Rescue", color: "#fbcfe8" },
            { time: 35, intensity: 60, label: "Light Fury", color: "#f472b6" },
            { time: 65, intensity: 80, label: "Hidden World", color: "#ec4899" },
            { time: 85, intensity: 90, label: "Grimmel Attack", color: "#db2777" },
            { time: 100, intensity: 99, label: "The Goodbye", color: "#be185d" }
        ],
        synopsis: "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind. A fitting and emotional conclusion to one of the best animation trilogies ever made.",
        themes: ["Letting Go", "Maturity", "Love"]
    }),

    // 10. Shrek 2
    809: createMovieData({ 
        wholesomeScore: 85, 
        funFactor: 98, 
        complexityLevel: "HILARIOUS", 
        dominantColor: "#22c55e",
        rating: 7.3, criticsScore: 89, audienceScore: 69, director: "Andrew Adamson", 
        cast: ["Mike Myers", "Eddie Murphy", "Antonio Banderas"],
        dna: { "Comedy": 50, "Fantasy": 30, "Action": 20 }, 
        scenes: [
            { time: 10, intensity: 40, label: "Far Far Away", color: "#86efac" },
            { time: 35, intensity: 65, label: "Potion Factory", color: "#4ade80" },
            { time: 60, intensity: 75, label: "Giant Mongo", color: "#22c55e" },
            { time: 80, intensity: 90, label: "Holding Out for a Hero", color: "#16a34a" },
            { time: 90, intensity: 85, label: "Human Again", color: "#15803d" }
        ],
        synopsis: "Shrek and Fiona travel to the Kingdom of Far Far Away, where Fiona's parents are King and Queen, to celebrate their marriage. When they arrive, they find they are not as welcome as they thought they would be. With the help of his faithful Donkey and the swashbuckling Puss in Boots, Shrek must fight to keep his 'happily ever after' against a scheming Fairy Godmother and her handsome son.",
        themes: ["Self-Acceptance", "True Love", "Identity"]
    })
};

// ✅ EXTENDED FAQs
export const PEACOCK_FAMILY_MOVIE_FAQS = {
    'How to Train Your Dragon': [
        { 
            question: "Why did Hiccup lose his leg at the end?", 
            answer: "The directors insisted on Hiccup losing his leg to show that actions have real consequences. It creates a physical parallel between him and Toothless (who lost a tail fin), symbolizing their symbiotic bond and mutual incompleteness without each other." 
        },
        { 
            question: "Is the movie different from the book?", 
            answer: "Yes, drastically. In Cressida Cowell's books, Toothless is a tiny, common garden dragon who is incredibly disobedient. The film reinvented him as a rare, powerful Night Fury to create a more cinematic 'boy and his car/dog' dynamic." 
        },
        { 
            question: "What inspired Toothless's behavior?", 
            answer: "Animators modeled Toothless's movements and facial expressions after cats, dogs, and horses. His retractable teeth and ear plates were specifically designed to make him feel like a giant, flying black panther." 
        },
        { 
            question: "Does the Red Death dragon have a gender?", 
            answer: "While referred to as the 'Queen' of the nest, the Red Death is a unique, titanic species of dragon. Its design was intended to look ancient and parasitic, controlling the other dragons through fear rather than loyalty." 
        }
    ],
    'Harry Potter and the Prisoner of Azkaban': [
        { 
            question: "Why is this movie darker than the first two?", 
            answer: "Director Alfonso Cuarón took over from Chris Columbus and intentionally darkened the tone to match the characters' transition into adolescence. He introduced a grainier film look, casual clothes instead of robes, and more ominous themes." 
        },
        { 
            question: "Who played Sirius Black?", 
            answer: "Gary Oldman played Sirius Black. He brought a manic, tragic energy to the role, treating Sirius not just as a villain-turned-hero, but as a man suffering from long-term psychological trauma from Azkaban." 
        },
        { 
            question: "Is the Time-Turner plot hole ever explained?", 
            answer: "In the books/movies, the Time-Turner operates on a closed loop (what happened, happened). Harry sees himself saving himself because he had already done it in the future. Later stories (Cursed Child) complicated this, but in this film, it's a stable loop." 
        },
        { 
            question: "Why did they change the design of Hogwarts?", 
            answer: "Cuarón expanded the geography of Hogwarts to make it feel like a real, sprawling castle in the Scottish Highlands. He added the clock tower and the wooden bridge to create more cinematic connecting spaces for conversations." 
        }
    ],
    'Puss in Boots: The Last Wish': [
        { 
            question: "Why is the animation style different from the first one?", 
            answer: "The film uses a 'painterly' style inspired by 'Spider-Man: Into the Spider-Verse'. By dropping frame rates in action scenes and using brush-stroke textures, the creators gave it a storybook illustration look that feels more dynamic than standard CGI." 
        },
        { 
            question: "Is the Wolf actually Death?", 
            answer: "Yes. Unlike other movie villains who are just bad guys, the Wolf explicitly states 'I am Death, straight up.' He is not a bounty hunter; he is the literal personification of Puss's mortality coming to collect." 
        },
        { 
            question: "Can adults enjoy this movie?", 
            answer: "Absolutely. Critics praised it as one of the best animated films of the decade because it tackles mature themes like panic attacks, the fear of aging, and the value of life, all wrapped in a hilarious action-adventure package." 
        },
        { 
            question: "Do I need to see the first Puss in Boots?", 
            answer: "No. The film does a great job of recapping Puss's backstory in the opening musical number. It stands completely on its own as a character study, though knowing Shrek lore adds some fun easter eggs." 
        }
    ],
    'Shrek': [
        { 
            question: "Why does Shrek speak with a Scottish accent?", 
            answer: "Mike Myers originally recorded the entire movie with a Canadian accent but felt it lacked grit. He re-recorded the whole film with a Scottish accent (inspired by his father) because he felt it sounded more 'working class' and grounded for an ogre." 
        },
        { 
            question: "Did Shrek win an Oscar?", 
            answer: "Yes! Shrek won the very first Academy Award for Best Animated Feature in 2002, beating out Pixar's 'Monsters, Inc.' It validated DreamWorks as a serious competitor in the animation industry." 
        },
        { 
            question: "Is Lord Farquaad based on a real person?", 
            answer: "Rumors have long persisted that Farquaad's appearance looks suspiciously like former Disney CEO Michael Eisner, reflecting the animosity between DreamWorks founder Jeffrey Katzenberg and his old boss. The name is also thought to be a play on 'Fuckwad'." 
        },
        { 
            question: "What is the message of Shrek?", 
            answer: "The core message is about deconstructing beauty standards. By having Fiona remain an ogre at the end ('I don't understand, I'm supposed to be beautiful'), the film argues that true beauty is self-acceptance and finding someone who loves your true self." 
        }
    ],
    'How to Train Your Dragon 2': [
        { 
            question: "Why did they kill Stoick?", 
            answer: "Dean DeBlois stated that for Hiccup to truly become Chief, his safety net (his father) had to be removed. It was a bold narrative choice to force Hiccup to step up and lead, rather than just inheriting the title passively." 
        },
        { 
            question: "Who voices Valka?", 
            answer: "Cate Blanchett voices Hiccup's mother, Valka. She accepted the role because her children were huge fans of the first film. Her character brings a 'feral' dragon knowledge that surpasses even Hiccup's." 
        },
        { 
            question: "How much time has passed since the first movie?", 
            answer: "Five years. The characters have visibly aged—Hiccup is taller, has facial stubble, and better armor. This aging allows the story to tackle young adult problems rather than just repeating childhood themes." 
        },
        { 
            question: "What class of dragon is the Bewilderbeast?", 
            answer: "It is a Tidal Class dragon and serves as an 'Alpha' species. Unlike other dragons that breathe fire, it breathes massive volumes of ice, allowing it to build nests and freeze enemies instantly." 
        }
    ],
    'Despicable Me': [
        { 
            question: "What language do the Minions speak?", 
            answer: "Minionese is a gibberish language invented by the directors Pierre Coffin and Chris Renaud. It mixes French, English, Spanish, Italian, and food references (like 'banana' and 'potato') to create a universally understandable emotive sound." 
        },
        { 
            question: "Is Vector a good villain?", 
            answer: "Vector serves as the perfect foil to Gru. While Gru is 'old school' gothic villainy, Vector represents the new, annoying, tech-bro generation of villains. His immaturity highlights Gru's eventual maturity into a father figure." 
        },
        { 
            question: "Why does Gru want the moon?", 
            answer: "It stems from his childhood trauma. He constantly tried to impress his mother with moon-related achievements but was ignored. Stealing the moon is his ultimate attempt to finally gain her approval and validation." 
        },
        { 
            question: "Was the 'It's So Fluffy' line improvised?", 
            answer: "The line itself was in the script, but the manic energy of the delivery by Elsie Fisher (who voiced Agnes) became the film's most iconic moment, spawning memes and merchandise for over a decade." 
        }
    ],
    'Harry Potter and the Sorcerer\'s Stone': [
        { 
            question: "How did they cast the main trio?", 
            answer: "After an extensive search, Daniel Radcliffe was spotted in the audience of a play by the producer. Emma Watson and Rupert Grint were found through open casting calls. Their natural chemistry in screen tests secured them the roles that defined a generation." 
        },
        { 
            question: "Why are the eyes different from the book?", 
            answer: "Harry is supposed to have green eyes, but Daniel Radcliffe had an allergic reaction to green contact lenses. Hermione is supposed to have buck teeth, but Emma Watson couldn't speak clearly with fake teeth. The filmmakers prioritized the acting over physical accuracy." 
        },
        { 
            question: "Where was Hogwarts filmed?", 
            answer: "It's a mix of locations. Alnwick Castle was used for the broomstick lessons, Gloucester Cathedral for the corridors, and Christ Church College in Oxford inspired the Great Hall (which was built as a set)." 
        },
        { 
            question: "Is the chess game real chess?", 
            answer: "Yes, the wizard's chess game at the end was designed by an International Master, Jeremy Silman. The moves Ron calls out are legitimate strategic sacrifices needed to win the game, showcasing his tactical brilliance." 
        }
    ],
    'Abominable': [
        { 
            question: "Is the violin music real?", 
            answer: "Yes, the violin solos played by Yi were performed by violinist Charlene Huang. The animation of Yi's fingers was meticulously matched to the actual notes being played to ensure musical authenticity." 
        },
        { 
            question: "What mythical creature is Everest?", 
            answer: "Everest is a Yeti (or Abominable Snowman). In the film, Yetis are depicted not as monsters, but as magical guardians of nature who can hum to manipulate plants and weather, a unique spin on the folklore." 
        },
        { 
            question: "Where does the movie take place?", 
            answer: "It begins in Shanghai, China, and becomes a road trip across the Chinese countryside, featuring real landmarks like the Leshan Giant Buddha and the Yellow Mountains, before reaching Mount Everest in the Himalayas." 
        },
        { 
            question: "Why does the villain want the Yeti?", 
            answer: "Burnish, the wealthy collector, wants to prove to the scientific community that Yetis exist because he was ridiculed years ago for claiming to see one. It's a quest for ego and validation rather than pure malice." 
        }
    ],
    'How to Train Your Dragon: The Hidden World': [
        { 
            question: "Why did the dragons have to leave?", 
            answer: "The film posits that as long as dragons live with humans, they will be hunted by the rest of the world. The only way to keep them safe was to hide them in the Hidden World until humanity is mature enough to coexist peacefully." 
        },
        { 
            question: "Is the Light Fury a different species?", 
            answer: "She is a subspecies of the Night Fury. She has adapted to blend into the daylight sky (white coloration) and has slightly different abilities, like cloaking, but is genetically compatible with Toothless." 
        },
        { 
            question: "Is this the end of the franchise?", 
            answer: "Yes, director Dean DeBlois intended this to be a definitive trilogy. The emotional separation at the end closes the arc of Hiccup's boyhood, transitioning him into a leader who no longer needs a dragon to define his worth." 
        },
        { 
            question: "What does the beard signify?", 
            answer: "In the epilogue, Hiccup has a beard, visually signaling his transformation into Stoick's successor. He has physically and emotionally grown into the Chief his father wanted him to be." 
        }
    ],
    'Shrek 2': [
        { 
            question: "Is the 'Holding Out for a Hero' scene the best in cinema?", 
            answer: "Many fans ironically (and unironically) say yes. The sequence combines high-stakes action, a massive gingerbread man (Mongo), and Jennifer Saunders' incredible vocal performance into a perfect climax." 
        },
        { 
            question: "Who voices the Fairy Godmother?", 
            answer: "Jennifer Saunders (of 'Absolutely Fabulous' fame) voices the villain. She did all her own singing, delivering a powerhouse performance that made the Fairy Godmother one of the most beloved villains in animation history." 
        },
        { 
            question: "Why is Puss in Boots in this movie?", 
            answer: "The writers needed a new dynamic for Shrek and Donkey. Puss was introduced as a 'rival' to Donkey for Shrek's friendship, creating a jealous sidekick triangle that added fresh comedy to the sequel." 
        },
        { 
            question: "Did it break box office records?", 
            answer: "Yes. At the time of its release, Shrek 2 became the highest-grossing animated film of all time in the US. It proved that DreamWorks could not only compete with Disney but dominate the cultural conversation." 
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
    return PEACOCK_FAMILY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A great family movie on Peacock.`,
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