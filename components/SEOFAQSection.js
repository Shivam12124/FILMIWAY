// components/SEOFAQSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { COMPLETE_MOVIE_DATA } from '../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../utils/sensitiveContent';

// FAQ Generation Helper
const generateFAQData = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    
    const faqs = [
        {
            question: `Is ${movie.Title} similar to Inception?`,
            answer: `${movieInfo?.seoDescription || `Yes, ${movie.Title} shares mind-bending qualities with Inception including complex narrative structures and reality-bending themes.`}`
        },
        {
            question: `Who directed ${movie.Title} and what is it about?`,
            answer: `${movie.Title} was directed by ${movieInfo?.director || 'acclaimed filmmaker'} in ${movie.year}. ${movieInfo?.synopsis || `A compelling ${movie.genre.toLowerCase()} film that explores complex themes and narrative structures.`}`
        },
        {
            question: `Where can I watch ${movie.Title} online?`,
            answer: `${movie.Title} streaming availability varies by region. Check Netflix, Amazon Prime Video, Apple TV+, Hulu, and other major streaming platforms for current availability in your area.`
        },
        {
            question: `Does ${movie.Title} contain mature or sensitive content?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes'}. The film has ${sensitiveData.scenes.length} scenes with mature content. For specific timestamps and detailed content warnings, click on the "Sensitive Content Timeline" section above to view the complete guide.`
                : `No, ${movie.Title} does not contain notable mature or sensitive content and is suitable for most audiences interested in complex storytelling.`
        }
    ];
    
    return faqs;
};

const SEOFAQSection = React.memo(({ movie }) => {
    const faqs = generateFAQData(movie);
    
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
                Common questions about {movie.Title} and how it compares to other mind-bending films like Inception.
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
});

SEOFAQSection.displayName = 'SEOFAQSection';

export default SEOFAQSection;
