// components/Se7enSEOFAQSection.js - DYNAMIC & SEO OPTIMIZED ✅
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
// 🔥 IMPORT THE DYNAMIC FAQ GENERATOR
import { getVisibleMovieFAQs } from '../utils/se7enMovieData';

const Se7enSEOFAQSection = ({ movie }) => {
    const title = movie?.Title || "this film";
    
    // 🔥 AUTOMATICALLY GENERATE THE FAQS (Includes the Dynamic Timestamp FAQ & Intensity Peaks)
    // This ensures the UI perfectly matches the Bot Schema!
    const faqsFromData = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId);

    // Safety check - return null if no FAQs are found
    if (!faqsFromData || faqsFromData.length === 0) {
        return null;
    }

    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            {/* 🎨 Gritty Yellow/Gold Theme for the Noir Collection */}
            <h2 className="text-xl sm:text-2xl font-light text-yellow-500 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
                <span className="sm:hidden">FAQ About {title}</span>
            </h2>
            
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Explore our **Parents Guide** and expert analysis for {title}. We provide accurate timestamps for sensitive scenes and map the psychological dread of this dark noir thriller.
            </p>

            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-yellow-600/50 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* 🔥 The exact question (Static Trivia OR Dynamic Parents Guide) */}
                        <h3 className="text-base sm:text-lg font-medium text-yellow-400 mb-3 sm:mb-4 leading-relaxed">
                            {faq.question || faq.q}
                        </h3>
                        
                        {/* 🔥 The exact answer (including the HTML-formatted timestamp lists) */}
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light whitespace-pre-line">
                            {faq.answer || faq.a}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Se7enSEOFAQSection;