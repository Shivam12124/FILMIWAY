// components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl select-none border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-20">
          <Link href="/" className="flex items-center">
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

          <div className="flex items-center space-x-6 sm:space-x-8">
            <Link href="/" className={`font-medium text-sm sm:text-base transition-colors ${currentPath === '/' ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}>Home</Link>
            <Link href="/collections" className={`font-medium text-sm sm:text-base transition-colors ${currentPath.startsWith('/collection') ? 'text-yellow-500' : 'text-gray-300 hover:text-white'}`}>Collections</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;