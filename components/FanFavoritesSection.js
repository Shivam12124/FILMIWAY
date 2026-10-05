import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flame } from 'lucide-react';

const FanFavoritesSection = ({ currentMovieSlug, similarMovies, compact = false }) => {
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
        <section className={compact ? "animate-fade-in-up" : "mb-10 sm:mb-12 mt-6 sm:mt-8 animate-fade-in-up"}>
            <div className={`flex items-center gap-2 ${compact ? 'mb-3.5' : 'sm:gap-2.5 mb-4 sm:mb-5'}`}>
                <Flame className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <h2 className={compact ? "text-base sm:text-lg font-bold text-gray-100" : "text-lg sm:text-xl lg:text-2xl font-medium sm:font-bold text-gray-200 sm:text-white"}>
                    Similar Movie Guides
                </h2>
            </div>
            <div className={compact ? "grid grid-cols-2 gap-3" : "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"}>
                {similarMovies.slice(0, 4).map((movieData, idx) => {
                    if (!movieData) return null;

                    return (
                        <Link 
                            key={idx} 
                            href={`/movie/${movieData.slug}/skip-timestamps`} 
                            aria-label={`View parents guide and skip timestamps for ${movieData.title}`} 
                            onClick={handleFanFavoriteClick} 
                            className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[2/3] border border-white/10 hover:border-orange-500/60 transition-all duration-300 shadow-md bg-black/40"
                        >
                            <Image
                                src={movieData.poster ? `https://image.tmdb.org/t/p/w342${movieData.poster}` : '/placeholder-poster.jpg'}
                                alt={movieData.title || 'Movie poster'}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes={compact ? "(max-width: 768px) 45vw, 180px" : "(max-width: 768px) 50vw, 250px"}
                                quality={60}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-3 transform translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 leading-tight drop-shadow-md">{movieData.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default FanFavoritesSection;