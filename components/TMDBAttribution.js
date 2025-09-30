// components/TMDBAttribution.js - PERFORMANCE OPTIMIZED WITH NEXT.JS IMAGE
import { motion } from 'framer-motion';
import Image from 'next/image';

const TMDBAttribution = ({ className = "", delay = 5 }) => (
    <motion.div 
        className={`mt-6 pt-4 border-t border-gray-900/50 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay, duration: 1 }}
    >
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-gray-600 text-xs">
                Movie data and posters powered by
            </p>
            <div className="flex items-center space-x-2">
                <a 
                    href="https://www.themoviedb.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                >
                    {/* 🚀 NEXT.JS OPTIMIZED IMAGE WITH EXPLICIT DIMENSIONS */}
                    <Image
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="The Movie Database"
                        width={154}
                        height={20}
                        className="h-4 w-auto"
                        priority={false}
                    />
                    <span className="text-blue-400 text-xs hover:text-blue-300 transition-colors">
                        The Movie Database (TMDB)
                    </span>
                </a>
            </div>
        </div>
        <p className="text-gray-700 text-xs mt-1 text-center">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
    </motion.div>
);

export default TMDBAttribution;
