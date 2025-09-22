// components/MementoSEOFAQSection.js - SAME STYLE AS INCEPTION FAQ
import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { COMPLETE_MOVIE_DATA } from '../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../utils/sensitiveContent';

// 🧠 MEMENTO-SPECIFIC MOVIE DATA FOR FAQ
const MEMENTO_FAQ_DATA_BY_TITLE = {
    'Shutter Island': {
        mementoConnection: 'Like Memento, Shutter Island explores unreliable memory and fragmented identity through psychological manipulation. Both films question the nature of reality and memory.',
        director: 'Martin Scorsese',
        imdbRating: 8.2,
        runtime: '138 min',
        genre: 'Psychological Thriller'
    },
    'Mr. Nobody': {
        mementoConnection: 'Like Memento, Mr. Nobody questions the nature of memory and identity through complex non-linear storytelling. Both films explore how different memories and choices shape our understanding of who we are.',
        director: 'Jaco Van Dormael',
        imdbRating: 7.7,
        runtime: '141 min',
        genre: 'Sci-Fi Drama'
    },
    'Primer': {
        mementoConnection: 'Like Memento, Primer uses complex timeline structure to create confusion about sequence of events. Both films require multiple viewings to fully understand.',
        director: 'Shane Carruth',
        imdbRating: 6.9,
        runtime: '77 min',
        genre: 'Sci-Fi Thriller'
    },
    'Synecdoche, New York': {
        mementoConnection: 'Like Memento, Synecdoche explores fragmented identity and the unreliability of memory and perception. Both films deal with characters losing their sense of self.',
        director: 'Charlie Kaufman',
        imdbRating: 7.5,
        runtime: '124 min',
        genre: 'Psychological Drama'
    },
    'Mulholland Drive': {
        mementoConnection: 'Like Memento, Mulholland Drive uses non-linear narrative to blur the line between reality and delusion. Both films feature protagonists struggling with memory loss.',
        director: 'David Lynch',
        imdbRating: 7.9,
        runtime: '147 min',
        genre: 'Psychological Mystery'
    },
    'Predestination': {
        mementoConnection: 'Like Memento, Predestination explores identity confusion through a temporal loop structure. Both films reveal information gradually to create confusion.',
        director: 'Michael Spierig, Peter Spierig',
        imdbRating: 7.4,
        runtime: '97 min',
        genre: 'Sci-Fi Thriller'
    },
    'Coherence': {
        mementoConnection: 'Like Memento, Coherence creates confusion about reality through memory inconsistencies. Both films leave viewers questioning what actually happened.',
        director: 'James Ward Byrkit',
        imdbRating: 7.2,
        runtime: '89 min',
        genre: 'Sci-Fi Thriller'
    },
    'Donnie Darko': {
        mementoConnection: 'Like Memento, Donnie Darko explores mental confusion and the unreliability of perception. Both films feature protagonists struggling with their understanding of reality.',
        director: 'Richard Kelly',
        imdbRating: 8.0,
        runtime: '113 min',
        genre: 'Sci-Fi Mystery'
    },
    'Enemy': {
        mementoConnection: 'Like Memento, Enemy explores identity crisis and the fragmentation of self. Both films feature protagonists who cannot trust their own memories or perceptions.',
        director: 'Denis Villeneuve',
        imdbRating: 6.9,
        runtime: '91 min',
        genre: 'Psychological Thriller'
    },
    'The Fountain': {
        mementoConnection: 'Like Memento, The Fountain deals with memory, loss, and the nature of time and identity. Both films explore how memory and loss shape our understanding of self.',
        director: 'Darren Aronofsky',
        imdbRating: 7.2,
        runtime: '96 min',
        genre: 'Sci-Fi Drama'
    }
};

// 🧠 MEMENTO FAQ GENERATION HELPER - SAME AS INCEPTION STYLE
const generateMementoFAQData = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    const mementoData = MEMENTO_FAQ_DATA_BY_TITLE[movie.Title];
    
    const faqs = [
        {
            question: `Is ${movie.Title} similar to Memento?`,
            answer: mementoData?.mementoConnection || `Yes, ${movie.Title} shares memory-twisting qualities with Memento including complex narrative structures and themes of identity confusion.`
        },
        {
            question: `Who directed ${movie.Title} and what is it about?`,
            answer: `${movie.Title} was directed by ${mementoData?.director || movieInfo?.director || 'acclaimed filmmaker'} in ${movie.Year}. ${movieInfo?.synopsis || `A compelling ${mementoData?.genre?.toLowerCase() || 'thriller'} film that explores memory, identity, and perception.`}`
        },
        {
            question: `Where can I watch ${movie.Title} online?`,
            answer: `${movie.Title} streaming availability varies by region. Check Netflix, Amazon Prime Video, Apple TV+, Hulu, and other major streaming platforms for current availability in your area.`
        },
        {
            question: `Does ${movie.Title} contain mature or sensitive content?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes'}. The film has ${sensitiveData.scenes.length} scenes with mature content. For specific timestamps and detailed content warnings, click on the "Sensitive Content Timeline" section above to view the complete guide.`
                : `No, ${movie.Title} does not contain notable mature or sensitive content and is suitable for most audiences interested in complex psychological storytelling.`
        }
    ];
    
    return faqs;
};

const MementoSEOFAQSection = React.memo(({ movie }) => {
    const faqs = generateMementoFAQData(movie);
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-yellow-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Brain size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie.Title}</span>
                <span className="sm:hidden">FAQ About {movie.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie.Title} and how it compares to other memory-twisting films like Memento.
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

MementoSEOFAQSection.displayName = 'MementoSEOFAQSection';

export default MementoSEOFAQSection;
