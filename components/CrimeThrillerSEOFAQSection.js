// components/CrimeThrillerSEOFAQSection.js - MATCHING DYNAMIC DESIGN ✅
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
// 🔥 IMPORT THE DYNAMIC GENERATOR (Exactly like Eyes Wide Shut)
import { 
    COMPLETE_MOVIE_DATA as CRIME_THRILLER_MOVIE_DATA, 
    getVisibleMovieFAQs 
} from '../utils/crimeThrillerMovieData';

const CrimeThrillerSEOFAQSection = ({ movie }) => {
    const movieInfo = CRIME_THRILLER_MOVIE_DATA[movie.tmdbId];
    
    // 🔥 AUTOMATICALLY GENERATE THE FAQS FOR HUMANS (Includes Dynamic Timestamp FAQ)
    // This ensures your UI matches the Bot Schema 1:1 using the new universal Intensity Metric.
    const faqsFromData = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId);

    // 🔥 Safety check - return null if no FAQs found
    if (!faqsFromData || faqsFromData.length === 0) {
        console.log('⚠️ No crime thriller FAQs found for:', movie?.Title);
        return null;
    }
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-slate-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie.Title}</span>
                <span className="sm:hidden">FAQ About {movie.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie.Title} and this gripping crime thriller.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* 🔥 The exact question (Parents Guide or Intensity) will appear here */}
                        <h3 className="text-base sm:text-lg font-medium text-slate-200 mb-2 sm:mb-3">{faq.question}</h3>
                        
                        {/* 🔥 The answer rendered with whitespace-pre-line to respect bullet points */}
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                            {faq.answer}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default CrimeThrillerSEOFAQSection;