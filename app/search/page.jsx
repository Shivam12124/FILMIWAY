"use client";
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Star, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';

const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa';

const SearchContent = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('q');

    useEffect(() => {
        if (query) {
            fetchMovies(query, 1);
        }
    }, [query]);

    const fetchMovies = async (searchQuery, page) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(searchQuery)}&page=${page}`
            );
            const data = await response.json();
            
            if (page === 1) {
                setMovies(data.results || []);
            } else {
                setMovies(prev => [...prev, ...(data.results || [])]);
            }
            
            setTotalPages(data.total_pages || 0);
            setCurrentPage(page);
        } catch (error) {
            console.error('Search error:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = () => {
        if (currentPage < totalPages) {
            fetchMovies(query, currentPage + 1);
        }
    };

    if (!query) {
        return (
            <div className="min-h-screen bg-black">
                <Header />
                <div className="pt-24 px-6 text-center">
                    <h1 className="text-2xl text-white">No search query provided</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            <Header />
            
            <div className="pt-24 px-6">
                <div className="container mx-auto">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Search Results
                        </h1>
                        <p className="text-gray-400">
                            Showing results for "{query}"
                        </p>
                    </div>

                    {loading && currentPage === 1 ? (
                        <div className="flex justify-center py-12">
                            <div className="text-yellow-400">Loading...</div>
                        </div>
                    ) : (
                        <>
                            {movies.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                                    {movies.map((movie) => (
                                        <div
                                            key={movie.id}
                                            onClick={() => router.push(`/movie/${movie.id}`)}
                                            className="cursor-pointer group"
                                        >
                                            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 group-hover:border-yellow-500 transition-colors">
                                                <img
                                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '/placeholder.jpg'}
                                                    alt={movie.title}
                                                    className="w-full h-[300px] object-cover"
                                                />
                                                <div className="p-3">
                                                    <h3 className="text-white font-medium text-sm mb-1 line-clamp-2">
                                                        {movie.title}
                                                    </h3>
                                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                                        <span>{movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</span>
                                                        <div className="flex items-center gap-1">
                                                            <Star size={10} className="text-yellow-400 fill-current" />
                                                            <span>{movie.vote_average?.toFixed(1) || 'N/A'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <h2 className="text-xl text-gray-400 mb-4">No movies found</h2>
                                    <p className="text-gray-500">Try searching with different keywords</p>
                                </div>
                            )}

                            {movies.length > 0 && currentPage < totalPages && (
                                <div className="text-center py-8">
                                    <button
                                        onClick={loadMore}
                                        disabled={loading}
                                        className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
                                    >
                                        {loading ? 'Loading...' : 'Load More'}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// ✅ Wrap with Suspense for deployment
export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-yellow-400">Loading search...</div></div>}>
            <SearchContent />
        </Suspense>
    );
}
