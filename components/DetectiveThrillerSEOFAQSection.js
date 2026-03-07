// components/DetectiveThrillerSEOFAQSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
// 🔥 IMPORT THE NEW DYNAMIC FAQ GENERATOR
import { COMPLETE_MOVIE_DATA as DETECTIVE_THRILLER_MOVIE_DATA, getVisibleMovieFAQs } from '../utils/detectiveThrillerMovieData';

const DetectiveThrillerSEOFAQSection = ({ movie }) => {
    const movieInfo = DETECTIVE_THRILLER_MOVIE_DATA[movie?.tmdbId];
    
    // ✅ DYNAMIC RUNTIME SYNC: Grab the runtime so we can pass it to the FAQ generator
    const currentRuntime = movie?.Runtime || movie?.runtime || "Official";
    
    // 🔥 AUTOMATICALLY GENERATE THE FAQS FOR HUMANS
    // Passing currentRuntime as the 3rd parameter so the UI matches the Schema exactly!
    const faqsFromData = getVisibleMovieFAQs(movie?.Title, movie?.tmdbId, currentRuntime);

    // 🔥 Safety check - fallback to generic if nothing generates
    const finalFaqs = (faqsFromData && faqsFromData.length > 0) ? faqsFromData : [
        { question: 'What makes this detective thriller unique?', answer: "Detailed plotting, immersive detective work, and compelling character dynamics define this film." },
        { question: 'Where can I watch this film?', answer: "Available on major streaming platforms; check availability in your region." },
        { question: 'Who directed this movie?', answer: "Directed by a distinguished filmmaker known for craft in thriller genre." }
    ];
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-yellow-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie?.Title}</span>
                <span className="sm:hidden">FAQ About {movie?.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Deep dive into {movie?.Title} with insider knowledge, production details, and insights about this brilliant detective thriller.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {finalFaqs.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-yellow-200 mb-3 sm:mb-4 leading-relaxed">
                            {faq.question || faq.q} 
                        </h3>
                        
                        {/* ✅ SEO & UI FIX: Using dangerouslySetInnerHTML if HTML is present, or whitespace-pre-line for raw text */}
                        <div 
                            className="text-gray-300 leading-relaxed text-sm sm:text-base font-light whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: faq.answer || faq.a }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default DetectiveThrillerSEOFAQSection;