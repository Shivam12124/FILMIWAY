// components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Search } from 'lucide-react';

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl select-none border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-3 sm:gap-6">
          <Link href="/" className="flex items-center shrink-0">
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

          {/* ⚡ GLOBAL SEARCH BAR */}
          <div className="flex-1 max-w-xl hidden md:block mx-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-11 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              />
            </form>
          </div>

          <div className="flex items-center space-x-5 sm:space-x-8 shrink-0">
            {/* Mobile Search Icon */}
            <button onClick={() => router.push('/search')} className="md:hidden text-gray-400 hover:text-white transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/" className={`font-medium text-sm sm:text-base transition-colors ${currentPath === '/' ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}>Home</Link>
            <Link href="/collections" className={`font-medium text-sm sm:text-base transition-colors ${currentPath.startsWith('/collection') ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}>Collections</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;