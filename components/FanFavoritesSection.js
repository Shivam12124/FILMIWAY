import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flame } from 'lucide-react';

const FanFavoritesSection = ({ currentMovieSlug, similarMovies }) => {
    // ⚡ SMART CLICK HANDLER: Clears previous collection memory so the new movie loads its own primary collection breadcrumbs
    const handleFanFavoriteClick = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('fromCollection');
            sessionStorage.removeItem('currentCollection');
            sessionStorage.removeItem('collectionTitle');
        }
    };

    if (!similarMovies || similarMovies.length === 0) return null;

    return (
        <section className="mb-12 mt-8 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-5">
                <Flame className="text-orange-500 w-5 h-5" />
                <h2 className="text-lg sm:text-xl font-medium text-gray-200">Similar Movie Guides</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {similarMovies.map((movieData, idx) => {
                    if (!movieData) return null;
                    
                    return (
                        <Link key={idx} href={`/movie/${movieData.slug}/skip-timestamps`} onClick={handleFanFavoriteClick} className="group relative rounded-xl overflow-hidden aspect-[2/3] border border-white/5 hover:border-orange-500/50 transition-all duration-300 shadow-lg">
                            <Image 
                                src={movieData.poster ? `https://image.tmdb.org/t/p/w342${movieData.poster}` : '/placeholder-poster.jpg'} 
                                alt={movieData.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                sizes="(max-width: 768px) 25vw, 150px" 
                                quality={40} 
                            />
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