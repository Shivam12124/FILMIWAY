// components/HboMaxBestSEOFAQSection.js - DYNAMIC & SEO OPTIMIZED ✅
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react'; // Matches the Prestige Gold vibe
// 🔥 IMPORT THE DYNAMIC FAQ GENERATOR
import { getVisibleMovieFAQs } from '../utils/hboMaxBestMoviesData';

const HboMaxBestSEOFAQSection = ({ movie }) => {
    const title = movie?.Title || "this film";
    
    // 🔥 AUTOMATICALLY GENERATE THE FAQS (Includes the Dynamic Timestamp FAQ & Intensity Peaks)
    // This ensures the UI perfectly matches the Bot Schema!
    const currentRuntime = movie?.Runtime || movie?.runtime || "Official";
    const faqsFromData = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId, currentRuntime);

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
            {/* 🎨 Prestige Gold Theme for the Best Movies Collection */}
            <h2 className="text-xl sm:text-2xl font-light text-amber-400 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Award size={20} className="sm:w-6 sm:h-6 text-amber-500" />
                <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
                <span className="sm:hidden">FAQ About {title}</span>
            </h2>
            
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Explore our **Parents Guide** and expert analysis for {title}. We provide accurate timestamps for sensitive scenes to skip and map the cinematic mastery peaks of this HBO Max masterpiece.
            </p>

            <div className="space-y-4 sm:space-y-6">
                {faqsFromData.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-amber-500/30 transition-colors duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* 🔥 The exact question (Static Trivia OR Dynamic Parents Guide) */}
                        <h3 className="text-base sm:text-lg font-medium text-amber-300 mb-2 sm:mb-3 leading-relaxed">
                            {faq.question || faq.q}
                        </h3>
                        
                        {/* 🔥 The exact answer (including the HTML-formatted timestamp lists) */}
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light whitespace-pre-line group-hover:text-gray-200 transition-colors">
                            {faq.answer || faq.a}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default HboMaxBestSEOFAQSection;