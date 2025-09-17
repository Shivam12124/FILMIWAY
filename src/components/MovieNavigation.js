import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft, ChevronRight, Home, Grid } from 'lucide-react';
import { COMPLETE_MOVIE_DATABASE } from '../lib/movieData';

// Generate SEO-friendly slug
const generateSlug = (movie) => {
    return `${movie.Title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-')}-${movie.year}`;
};

export default function MovieNavigation({ currentMovie }) {
    const router = useRouter();
    
    if (!currentMovie) return null;

    const currentIndex = COMPLETE_MOVIE_DATABASE.findIndex(
        movie => movie.tmdbId === currentMovie.tmdbId
    );
    
    const prevMovie = currentIndex > 0 ? COMPLETE_MOVIE_DATABASE[currentIndex - 1] : null;
    const nextMovie = currentIndex < COMPLETE_MOVIE_DATABASE.length - 1 ? COMPLETE_MOVIE_DATABASE[currentIndex + 1] : null;

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/50 shadow-xl">
                {/* Previous Movie */}
                {prevMovie ? (
                    <Link href={`/movies/${generateSlug(prevMovie)}`}>
                        <a className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-700/50 transition-colors text-gray-300 hover:text-white">
                            <ChevronLeft size={16} />
                            <span className="hidden sm:block text-sm">Previous</span>
                        </a>
                    </Link>
                ) : (
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 cursor-not-allowed">
                        <ChevronLeft size={16} />
                        <span className="hidden sm:block text-sm">Previous</span>
                    </div>
                )}

                {/* Home */}
                <Link href="/">
                    <a className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-yellow-500/20 transition-colors text-yellow-400">
                        <Home size={16} />
                    </a>
                </Link>

                {/* Collection */}
                <Link href="/movies">
                    <a className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-700/50 transition-colors text-gray-300 hover:text-white">
                        <Grid size={16} />
                        <span className="hidden sm:block text-sm">Collection</span>
                    </a>
                </Link>

                {/* Next Movie */}
                {nextMovie ? (
                    <Link href={`/movies/${generateSlug(nextMovie)}`}>
                        <a className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-700/50 transition-colors text-gray-300 hover:text-white">
                            <span className="hidden sm:block text-sm">Next</span>
                            <ChevronRight size={16} />
                        </a>
                    </Link>
                ) : (
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 cursor-not-allowed">
                        <span className="hidden sm:block text-sm">Next</span>
                        <ChevronRight size={16} />
                    </div>
                )}
            </div>
        </div>
    );
}
