// data/collections.js - COMPLETE FIXED COLLECTION DATA WITH PROPER SHUTTER ISLAND SETUP
export const COLLECTIONS = [
    // 🔥 INCEPTION COLLECTION - YOUR EXACT ORDER
    {
        id: 'movies-like-inception',
        slug: 'movies-like-inception',
        title: 'Top 10 Movies Like Inception',
        description: 'Mind-Bending Sci-Fi & Psychological Thrillers Ranked by Complexity',
        poster: '/collections/inception-collection.jpg',
        movies: [
            'tt0390384', // 1. Primer - Rank #1 (BEST)
            'tt0383028', // 2. Synecdoche, New York - Rank #2
            'tt0166924', // 3. Mulholland Drive - Rank #3
            'tt2397535', // 4. Predestination - Rank #4
            'tt2866360', // 5. Coherence - Rank #5
            'tt0246578', // 6. Donnie Darko - Rank #6
            'tt2316411', // 7. Enemy - Rank #7
            'tt0414993', // 8. The Fountain - Rank #8
            'tt1130884', // 9. Mr. Nobody - Rank #9
            'tt1375666'  // 10. Inception - Rank #10 (FIRST TO SHOW WITH EXPLORER SECTION)
        ],
        badges: [
            {
                label: "Mind-Bending",
                desc: "Films ranked by reality-questioning complexity and visual innovation"
            },
            {
                label: "Sci-Fi Excellence", 
                desc: "Movies exploring consciousness, dreams, and parallel realities like Inception"
            },
            {
                label: "Community Curated",
                desc: "Selected by film enthusiasts who love complex, mind-bending narratives"
            }
        ]
    },

    // 🧠 MEMENTO COLLECTION - YOUR EXACT ORDER
    {
        id: 'movies-like-memento',
        slug: 'movies-like-memento',
        title: 'Top 10 Movies Like Memento', 
        description: 'Memory-Twisting Psychological Thrillers Ranked by Complexity',
        poster: '/collections/memento-collection.jpg',
        movies: [
            'tt0390384', // 1. Primer - Rank #1 (BEST)
            'tt0383028', // 2. Synecdoche, New York - Rank #2
            'tt0166924', // 3. Mulholland Drive - Rank #3
            'tt2397535', // 4. Predestination - Rank #4
            'tt2866360', // 5. Coherence - Rank #5
            'tt0246578', // 6. Donnie Darko - Rank #6
            'tt2316411', // 7. Enemy - Rank #7
            'tt0414993', // 8. The Fountain - Rank #8
            'tt1130884', // 9. Mr. Nobody - Rank #9
            'tt0209144'  // 10. Memento - Rank #10 (FIRST TO SHOW)
        ],
        badges: [
            {
                label: "Mind-Bending Complexity",
                desc: "Films ranked by memory-twisting narrative complexity and psychological depth"
            },
            {
                label: "Identity Crisis",
                desc: "Movies exploring fragmented identity and unreliable perception like Memento"
            },
            {
                label: "Community Curated", 
                desc: "Selected by film enthusiasts who love non-linear storytelling and psychological twists"
            }
        ]
    },

    // 🩸 SHUTTER ISLAND COLLECTION - FIXED ORDER WITH THE USUAL SUSPECTS AT #10
    {
        id: 'movies-like-shutter-island',
        slug: 'movies-like-shutter-island',
        title: 'Top 10 Movies Like Shutter Island', 
        description: 'Psychological Thrillers with Unreliable Narrators & Shocking Plot Twists',
        poster: '/collections/shutter-island-collection.jpg',
        movies: [
            'tt0390384', // 1. Primer - Rank #1 (BEST)
            'tt0383028', // 2. Synecdoche, New York - Rank #2
            'tt0166924', // 3. Mulholland Drive - Rank #3
            'tt2397535', // 4. Predestination - Rank #4
            'tt2866360', // 5. Coherence - Rank #5
            'tt0246578', // 6. Donnie Darko - Rank #6
            'tt2316411', // 7. Enemy - Rank #7
            'tt0414993', // 8. The Fountain - Rank #8
            'tt1130884', // 9. Mr. Nobody - Rank #9 ✅ ADDED!
            'tt0114814'  // 10. The Usual Suspects - Rank #10 ✅ FIXED! (FIRST TO SHOW WITH EXPLORER SECTION)
        ],
        badges: [
            {
                label: "Psychological Horror",
                desc: "Films ranked by psychological intensity and reality distortion complexity"
            },
            {
                label: "Unreliable Narrators", 
                desc: "Movies exploring identity crisis and shocking revelations like Shutter Island"
            },
            {
                label: "Community Curated",
                desc: "Selected by film enthusiasts who love plot twists and psychological manipulation"
            }
        ]
    }
];

// Helper functions
export const getAllCollectionSlugs = () => COLLECTIONS.map(collection => collection.slug);

export const getCollectionBySlug = (slug) => COLLECTIONS.find(collection => collection.slug === slug);

export default COLLECTIONS;
