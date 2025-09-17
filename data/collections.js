// data/collections.js - Collection definitions for SSG generation
export const COLLECTIONS = {
    'movies-like-inception': {
        slug: 'movies-like-inception',
        title: 'Top 10 Movies Like Inception',
        description: 'Mind-bending films with community reviews and ratings',
        longDescription: 'Discover the best movies like Inception with complexity scores, user ratings, reviews, and comments. Mind-bending films including Primer, Mulholland Drive, Donnie Darko with interactive community features and streaming guides.',
        keywords: 'movies like inception, mind-bending movies, inception similar films, complex movies, psychological thrillers, sci-fi like inception, movie reviews, user ratings, film comments, streaming guide',
        movies: [
            'tt0390384', // Primer
            'tt0383028', // Synecdoche, New York
            'tt0166924', // Mulholland Drive
            'tt2397535', // Predestination
            'tt2866360', // Coherence
            'tt0246578', // Donnie Darko
            'tt2316411', // Enemy
            'tt0414993', // The Fountain
            'tt1130884', // Mr. Nobody
            'tt0825232'  // Shutter Island
        ],
        headerTitle: 'TOP 10 MOVIES LIKE INCEPTION',
        headerSubtitle: 'MIND-BENDING FILMS WITH COMMUNITY REVIEWS',
        badges: [
            { label: 'INCEPTION-LEVEL', desc: 'Reality-Bending Films' },
            { label: 'COMMUNITY RATED', desc: 'Professional Reviews' },
            { label: 'INTERACTIVE', desc: 'Comment & Discuss' }
        ]
    }
    // You can add more collections here like:
    // 'movies-like-matrix': { ... },
    // 'christopher-nolan-films': { ... },
    // etc.
};

// Get all collection slugs for getStaticPaths
export const getAllCollectionSlugs = () => {
    return Object.keys(COLLECTIONS);
};

// Get collection by slug
export const getCollectionBySlug = (slug) => {
    return COLLECTIONS[slug] || null;
};

// Get all collections
export const getAllCollections = () => {
    return Object.values(COLLECTIONS);
};
