// components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Search, Film } from 'lucide-react';

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchDB, setSearchDB] = useState(null);
  const searchRef = useRef(null);
  const isSearchPage = currentPath === '/search';

  // Clear memory when going home or searching to prevent "ghost" breadcrumbs
  const clearCollectionMemory = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('fromCollection');
      sessionStorage.removeItem('currentCollection');
      sessionStorage.removeItem('collectionTitle');
    }
  };

  // 🚀 AUTOMATIC GHOST MEMORY WIPER
  useEffect(() => {
    if (currentPath === '/' || isSearchPage || currentPath === '/collections') {
      clearCollectionMemory();
    }
  }, [currentPath, isSearchPage]);

  // ⚡ LAZY LOAD HEAVY JSON DATABASES ONLY ON HOVER/FOCUS
  const loadDatabases = async () => {
    if (!searchDB) {
      const [masterModule, cacheModule] = await Promise.all([
        import('../utils/masterDatabase.json'),
        import('../data/tmdbCache.json')
      ]);
      setSearchDB({ master: masterModule.default || masterModule, cache: cacheModule.default || cacheModule });
    }
  };

  // ⚡ SMART AUTOCOMPLETE LOGIC (Netflix Style)
  useEffect(() => {
    if (searchQuery.trim().length > 1 && searchDB) {
      const normalizeForSearch = (text) => {
        if (!text) return '';
        return text.toLowerCase()
          .replace(/\b50\b/g, 'fifty')
          .replace(/\b40\b/g, 'forty')
          .replace(/\b30\b/g, 'thirty')
          .replace(/\b20\b/g, 'twenty')
          .replace(/\b13\b/g, 'thirteen')
          .replace(/\b12\b/g, 'twelve')
          .replace(/\b11\b/g, 'eleven')
          .replace(/\b10\b/g, 'ten')
          .replace(/\b9\b/g, 'nine')
          .replace(/\b8\b/g, 'eight')
          .replace(/\b7\b/g, 'seven')
          .replace(/\b6\b/g, 'six')
          .replace(/\b5\b/g, 'five')
          .replace(/\b4\b/g, 'four')
          .replace(/\b3\b/g, 'three')
          .replace(/\b2\b/g, 'two')
          .replace(/\b1\b/g, 'one')
          .replace(/&/g, 'and')
          .replace(/se7en/g, 'seven')
          .replace(/[^a-z0-9]/g, '');
      };

      const normalizedQuery = normalizeForSearch(searchQuery);
      
      const matches = searchDB.master.filter(movie => {
        const title = movie.Title || movie.title || '';
        const normalizedTitle = normalizeForSearch(title);
        // Loose continuous match
        if (normalizedTitle.includes(normalizedQuery)) return true;
        
        // Sub-word match
        const queryWords = searchQuery.toLowerCase().split(/[\s\W]+/).filter(Boolean);
        const titleWords = title.toLowerCase().split(/[\s\W]+/).filter(Boolean);
        return queryWords.every(qw => titleWords.some(tw => tw.includes(qw)));
      }).slice(0, 5); // Show top 5 in dropdown

      setSuggestions(matches);
      setIsDropdownOpen(true);
    } else {
      setSuggestions([]);
      setIsDropdownOpen(false);
    }
  }, [searchQuery, searchDB]);

  // ⚡ CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      clearCollectionMemory();
      setIsDropdownOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl select-none border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-3 sm:gap-6">
          <Link href="/" className="flex items-center shrink-0" onClick={clearCollectionMemory}>
            <div className="w-20 sm:w-32 h-full flex items-center">
              <Image 
                src="/filmiway-logo.svg" 
                alt="Filmiway" 
                width={160} 
                height={60} 
                className="w-full h-auto object-contain" 
                priority
              />
            </div>
          </Link>

          {/* ⚡ GLOBAL SEARCH BAR (Hidden on Search Page to prevent double search bars) */}
          {!isSearchPage && (
            <div className="flex-1 max-w-xl hidden md:block mx-4 relative" ref={searchRef}>
              <form onSubmit={handleSearch}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onMouseEnter={loadDatabases}
                  onFocus={() => { loadDatabases(); if (searchQuery.trim().length > 1) setIsDropdownOpen(true); }}
                  placeholder="Search movies..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-11 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                />
              </form>

              {/* ⚡ NETFLIX-STYLE LIVE AUTOCOMPLETE DROPDOWN */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                  {suggestions.length > 0 ? (
                    <ul className="max-h-[350px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                      <style dangerouslySetInnerHTML={{__html: `ul::-webkit-scrollbar { display: none; }`}} />
                      {suggestions.map(movie => {
                        const cached = searchDB.cache[movie.imdbID] || {};
                        const posterUrl = cached.poster_path ? `https://image.tmdb.org/t/p/w92${cached.poster_path}` : null;
                        const movieTitle = movie.Title || movie.title || 'Unknown';
                        const movieSlug = movie.slug || movieTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                        const movieYear = movie.year || movie.Year || '';
                        
                        return (
                          <li key={movie.imdbID}>
                            <Link 
                              href={`/movie/${movieSlug}`} 
                              onClick={() => { setIsDropdownOpen(false); setSearchQuery(''); clearCollectionMemory(); }} 
                              className="flex items-center gap-3 p-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 group"
                            >
                              {posterUrl ? (
                                <div className="w-10 h-14 relative rounded overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-yellow-500/50 transition-colors">
                                  <Image src={posterUrl} alt={movieTitle} fill className="object-cover" sizes="40px" unoptimized />
                                </div>
                              ) : (
                                <div className="w-10 h-14 bg-gray-800 rounded flex items-center justify-center flex-shrink-0 border border-white/10">
                                  <Film className="w-5 h-5 text-gray-500" />
                                </div>
                              )}
                              <div className="flex flex-col min-w-0">
                                <span className="text-sm font-medium text-gray-200 group-hover:text-yellow-400 transition-colors truncate">{movieTitle}</span>
                                <span className="text-xs text-gray-500">{movieYear}</span>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <button onClick={handleSearch} className="w-full p-4 text-center text-sm text-gray-400 hover:bg-white/5 hover:text-yellow-400 transition-colors">
                      Search for "{searchQuery}" <span className="ml-1">→</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="flex items-center space-x-5 sm:space-x-8 shrink-0">
            {/* Search Icon (Visible on mobile ALWAYS, and visible on desktop ONLY on the Search page) */}
            <button onClick={() => router.push('/search')} className={`${isSearchPage ? 'block' : 'md:hidden'} text-gray-400 hover:text-white transition-colors`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/" className={`font-medium text-sm sm:text-base transition-colors ${currentPath === '/' ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`} onClick={clearCollectionMemory}>Home</Link>
            <Link href="/collections" className={`font-medium text-sm sm:text-base transition-colors ${currentPath.startsWith('/collection') ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}>Collections</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;