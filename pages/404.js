import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Home, Film } from 'lucide-react';
import Header from '../components/Header';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Head>
        <title>404 - Scene Not Found | Filmiway</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center z-10">
        <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.15)]">
          <Film className="w-10 h-10 text-yellow-500" />
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extralight mb-4 tracking-tight">
          404 <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">Not Found</span>
        </h1>
        
        <p className="text-gray-400 text-lg sm:text-xl mb-10 font-light max-w-md mx-auto">
          It looks like this scene was left on the cutting room floor. The page you are looking for has been moved or no longer exists.
        </p>
        
        <Link href="/" className="inline-flex">
          <button className="bg-yellow-500 text-black px-8 py-3.5 rounded-md font-bold flex items-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
            <Home className="w-5 h-5" />
            Return to Homepage
          </button>
        </Link>
      </main>
    </div>
  );
}