// components/MementoSEOFAQSection.js - UPDATED WITHOUT "SIMILAR TO MEMENTO" FAQ
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { COMPLETE_MOVIE_DATA } from '../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../utils/sensitiveContent';

// 🧠 MEMENTO FAQ SECTION - NO "SIMILAR TO" QUESTION
const MementoSEOFAQSection = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    
    // 🔥 GENERATE FAQ WITHOUT FIRST "SIMILAR TO" QUESTION
    const faqs = [
        // 🔥 REMOVED: "Is ${movie.Title} similar to Memento?" - SO YOU CAN USE SAME DATA IN INCEPTION
        
        {
            question: `What makes ${movie.Title} like Memento in terms of memory loss themes?`,
            answer: `${movie.Title} explores memory loss and identity confusion similar to Memento through ${movie.Genre?.toLowerCase() || 'psychological thriller'} elements. Both films feature protagonists who struggle with fragmented memories and unreliable perceptions of reality.`
        },
        {
            question: `Who directed ${movie.Title} and what is its connection to Memento-style films?`,
            answer: `${movie.Title} was directed by ${movieInfo?.director || 'acclaimed filmmaker'} in ${movie.Year}. Like Memento, it uses innovative storytelling techniques to explore themes of memory, identity, and psychological complexity through non-linear narrative structure.`
        },
        {
            question: `Where can I watch ${movie.Title} online?`,
            answer: `${movie.Title} streaming availability varies by region. Check Netflix, Amazon Prime Video, Apple TV+, Hulu, and other major streaming platforms for current availability in your area. The film is often available for rent or purchase on digital platforms.`
        },
        {
            question: `Does ${movie.Title} have mature content like other Memento-style psychological thrillers?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes, psychological intensity, and complex subject matter'}. The film has ${sensitiveData.scenes.length} scenes with mature content, similar to other memory-loss psychological thrillers.`
                : `${movie.Title} is suitable for most audiences interested in memory-loss and psychological thriller films like Memento, with minimal mature content that focuses on intellectual and emotional complexity rather than explicit material.`
        },
        {
            question: `How does ${movie.Title} compare to Memento in terms of psychological complexity?`,
            answer: `${movie.Title} shares Memento's psychological complexity through its ${movie.Genre?.toLowerCase() || 'thriller'} approach to memory and identity themes. Both films require multiple viewings to fully appreciate their intricate narrative structures and psychological depth.`
        },
        {
            question: `What is the IMDb rating of ${movie.Title} and how does it compare to Memento?`,
            answer: `${movie.Title} has an IMDb rating of ${movieInfo?.rating || '7.5+'}/10. Like Memento (8.4/10), it's highly rated for its innovative storytelling, psychological depth, and memory-twisting narrative that challenges conventional film structure.`
        }
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
                <span className="hidden sm:inline">Frequently Asked Questions About {movie.Title}</span>
                <span className="sm:hidden">FAQ About {movie.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie.Title} and how it compares to other memory-loss films like Memento.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-yellow-200 mb-2 sm:mb-3">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default MementoSEOFAQSection;
