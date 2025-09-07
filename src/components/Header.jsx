// components/Header.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, User, Search } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
        }
    };

    return (
        <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo Section */}
                <div 
                    className="flex items-center gap-3 cursor-pointer" 
                    onClick={() => router.push('/')}
                >
                    <div className="w-12 h-12 relative">
                        <Image
                            src="/filmiway-logo.svg"
                            alt="Filmiway Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="text-yellow-400 text-2xl font-bold tracking-wide">
                        FILMIWAY
                    </h1>
                </div>
                
                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <form onSubmit={handleSearch} className="flex w-full">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search movies..."
                            className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-600 focus:border-yellow-400 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-r-lg transition-colors"
                        >
                            <Search size={18} />
                        </button>
                    </form>
                </div>

                {/* Navigation Menu */}
                <nav className="hidden md:flex items-center gap-8 text-gray-300">
                    <a href="#trending" className="hover:text-yellow-400 transition-colors font-medium">
                        Trending
                    </a>
                    <a href="#acclaimed" className="hover:text-yellow-400 transition-colors font-medium">
                        Critically Acclaimed  
                    </a>
                    <a href="#mind-bending" className="hover:text-yellow-400 transition-colors font-medium">
                        Mind-Bending
                    </a>
                    <a href="#what-to-watch" className="hover:text-yellow-400 transition-colors font-medium">
                        What to Watch Tonight
                    </a>
                </nav>

                {/* Sign In Button & Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Sign In Button */}
                    <button
                        onClick={() => router.push('/signin')}
                        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                        <User size={18} />
                        <span className="hidden sm:inline">Sign In</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-400 hover:text-white transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-black/95 border-t border-gray-800">
                    <div className="container mx-auto px-6 py-4 space-y-4">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="flex">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search movies..."
                                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-600 focus:border-yellow-400 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-r-lg transition-colors"
                            >
                                <Search size={18} />
                            </button>
                        </form>
                        
                        <a href="#trending" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                            Trending
                        </a>
                        <a href="#acclaimed" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                            Critically Acclaimed
                        </a>
                        <a href="#mind-bending" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                            Mind-Bending
                        </a>
                        <a href="#what-to-watch" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                            What to Watch Tonight
                        </a>
                        <button
                            onClick={() => router.push('/signin')}
                            className="w-full text-left text-gray-300 hover:text-yellow-400 transition-colors pt-2 border-t border-gray-700"
                        >
                            Sign In
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
