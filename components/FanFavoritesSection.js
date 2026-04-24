import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flame } from 'lucide-react';

// 🔥 PRE-FETCHED TMDB POSTERS FOR INSTANT LOADING (Zero Delay)
const MOVIE_DATA = {
    'fifty-shades-of-grey': { title: 'Fifty Shades of Grey', poster: '/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg' },
    'basic-instinct': { title: 'Basic Instinct', poster: '/76Ts0yoHk8kVQj9MMnoMixhRWoh.jpg' },
    'fight-club': { title: 'Fight Club', poster: '/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg' },
    'the-wolf-of-wall-street': { title: 'The Wolf of Wall Street', poster: '/kW9LmvYHAaS9iA0tHmZVq8hQYoq.jpg' },
    'lust-caution': { title: 'Lust, Caution', poster: '/6c1tqfJEBuIyhQC19SLlLQAUAvJ.jpg' },
    'american-pie': { title: 'American Pie', poster: '/5P68by2Thn8wHAziyWGEw2O7hco.jpg' },
    'basic-instinct-2': { title: 'Basic Instinct 2', poster: '/yNRSbx6AhOlW673t2073Wr2iH4U.jpg' },
    'road-trip': { title: 'Road Trip', poster: '/jee4eY5tZprI0V18S6PXUloBzSk.jpg' },
    'boogie-nights': { title: 'Boogie Nights', poster: '/wnE24UPCPQsQnbBOu4zVE2qaDNm.jpg' },
    'crash': { title: 'Crash', poster: '/gpai5oUFyFGLHOCsYTvVMqlbY7A.jpg' },
    'eurotrip': { title: 'EuroTrip', poster: '/iLdO4PwbZCCQSa9rchZMwuJm9xe.jpg' },
    'eyes-wide-shut': { title: 'Eyes Wide Shut', poster: '/knEIz1eNGl5MQDbrEAVWA7iRqF9.jpg' },
    'fifty-shades-darker': { title: 'Fifty Shades Darker', poster: '/w3qa274gvca9t8pkUoG8nfQgTU3.jpg' },
    'gone-girl': { title: 'Gone Girl', poster: '/ts996lKsxvjkO2yiYG0ht4qAicO.jpg' },
    'anora': { title: 'Anora', poster: '/oN0o3owobFjePDc5vMdLRAd0jkd.jpg' },
    'oppenheimer': { title: 'Oppenheimer', poster: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    'last-tango-in-paris': { title: 'Last Tango in Paris', poster: '/dNgdUdNOWfHsZI3lDu6Epig7H2P.jpg' },
    'memories-of-murder': { title: 'Memories of Murder', poster: '/dsEoTJKM1s5OVDkS2P2JdoTxo4K.jpg' },
    'oldboy': { title: 'Oldboy', poster: '/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg' },
    'fifty-shades-freed': { title: 'Fifty Shades Freed', poster: '/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg' },
    'mulholland-drive': { title: 'Mulholland Drive', poster: '/x7A59t6ySylr1L7aubOQEA480vM.jpg' },
    'poor-things': { title: 'Poor Things', poster: '/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg' },
    'the-terminator': { title: 'The Terminator', poster: '/qvktm0BHcnmDpul4Hz01GIazWPr.jpg' },
    'the-piano-teacher': { title: 'The Piano Teacher', poster: '/gNHKYQnP1RnqEhkivHJzBPb4MOP.jpg' },
    'unfaithful': { title: 'Unfaithful', poster: '/bjiHEhuiwhIygzjczbTPAA07cGc.jpg' },
    'when-harry-met-sally': { title: 'When Harry Met Sally...', poster: '/rFOiFUhTMtDetqCGClC9PIgnC1P.jpg' },
    'y-tu-mam-tambin': { title: 'Y Tu Mamá También', poster: '/aj3rqjab8jfc2fWmcS3H3c5qbur.jpg' },
    'trainspotting': { title: 'Trainspotting', poster: '/y0HmDV0bZDTtXWHqqYYbT9XoshB.jpg' },
    'fatal-attraction': { title: 'Fatal Attraction', poster: '/vjB9XwJKnYqFKKjhWcE6WpAf5Ki.jpg' },
    'wild-things': { title: 'Wild Things', poster: '/wrcTDD9T7Ga5c9MW7kaOo2qwIvW.jpg' },
    'the-dreamers': { title: 'The Dreamers', poster: '/gBb7GGaFYPu7nEUYvC8G4LaJJN1.jpg' },
    'se7en': { title: 'Se7en', poster: '/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg' } // Safety Fallback
};

// 🎬 THE 8 HAND-CURATED BATCHES
const BATCHES = [
    ['fifty-shades-of-grey', 'basic-instinct', 'fight-club', 'the-wolf-of-wall-street'],
    ['lust-caution', 'american-pie', 'basic-instinct-2', 'road-trip'],
    ['boogie-nights', 'crash', 'eurotrip', 'eyes-wide-shut'],
    ['fifty-shades-darker', 'gone-girl', 'anora', 'oppenheimer'],
    ['last-tango-in-paris', 'memories-of-murder', 'oldboy', 'fifty-shades-freed'],
    ['mulholland-drive', 'basic-instinct', 'the-wolf-of-wall-street', 'the-dreamers'],
    ['the-terminator', 'the-piano-teacher', 'unfaithful', 'when-harry-met-sally'],
    ['y-tu-mam-tambin', 'trainspotting', 'fatal-attraction', 'wild-things']
];

// 🧠 THE ALGORITHM: Batches 1, 3, 4, 5 (Indices 0, 2, 3, 4) appear TWICE as often to maximize clicks
const BATCH_WEIGHTS = [0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7];

const FanFavoritesSection = ({ currentMovieSlug }) => {
    const [batch, setBatch] = useState([]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * BATCH_WEIGHTS.length);
        const selectedBatchIdx = BATCH_WEIGHTS[randomIndex];
        let selectedBatch = BATCHES[selectedBatchIdx];
        
        // Prevent the current movie from showing up in its own "You May Also Like" section
        if (currentMovieSlug && selectedBatch.includes(currentMovieSlug)) {
            selectedBatch = selectedBatch.map(slug => slug === currentMovieSlug ? 'se7en' : slug);
        }
        setBatch(selectedBatch);
    }, [currentMovieSlug]);

    if (batch.length === 0) return null;

    // ⚡ SMART CLICK HANDLER: Clears previous collection memory so the new movie loads its own primary collection breadcrumbs
    const handleFanFavoriteClick = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('fromCollection');
            sessionStorage.removeItem('currentCollection');
            sessionStorage.removeItem('collectionTitle');
        }
    };

    return (
        <section className="mb-12 mt-8 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-5">
                <Flame className="text-orange-500 w-5 h-5" />
                <h2 className="text-lg sm:text-xl font-medium text-gray-200">Fan Favorites</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {batch.map((slug, idx) => {
                    const movieData = MOVIE_DATA[slug];
                    if (!movieData) return null;
                    
                    return (
                        <Link key={idx} href={`/movie/${slug}`} onClick={handleFanFavoriteClick} className="group relative rounded-xl overflow-hidden aspect-[2/3] border border-white/5 hover:border-orange-500/50 transition-all duration-300 shadow-lg">
                            <Image src={`https://image.tmdb.org/t/p/w342${movieData.poster}`} alt={movieData.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" unoptimized />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 transform translate-y-1 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-xs sm:text-sm font-medium line-clamp-2 leading-tight drop-shadow-md">{movieData.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default FanFavoritesSection;