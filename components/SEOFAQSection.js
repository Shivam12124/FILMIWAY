// components/SEOFAQSection.js - DYNAMIC INCEPTION FAQs ✅

import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { 
  COMPLETE_MOVIE_DATA, 
} from '../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../utils/sensitiveContent';

// ✅ FULL INCEPTION COLLECTION DATA
export const INCEPTION_COLLECTION_FAQS = {
    'Primer': [
        { question: "Is the timeline in Primer solvable?", answer: "Yes, but it is incredibly difficult. Fans have created elaborate flowcharts to track the 9+ timelines created by the recursive use of the box." },
        { question: "What happens to the doubles?", answer: "The film implies that multiple versions of Aaron and Abe exist simultaneously, some locked away or drugged by their future selves." },
        { question: "Why do their ears bleed?", answer: "Ear bleeding is a symptom of physical degradation caused by long-term time travel, suggesting the human body cannot handle repeated causal loops." },
        { question: "How long were they in the box?", answer: "To travel back multiple days, they had to sit in the box for that exact duration (e.g., sit for 24 hours to go back 24 hours), requiring immense patience." }
    ],
    'Synecdoche, New York': [
        { question: "Is Caden dead the whole time?", answer: "Many theories suggest Caden is dying throughout the film, and the play is his brain processing his final moments. The fading sets and time jumps support this." },
        { question: "What does the burning house symbolize?", answer: "It represents Hazel's choice to live authentically even while being consumed by mortality. She buys a house that is on fire and lives in it until she dies." },
        { question: "Why does the set keep growing?", answer: "The set represents Caden's mind. As he tries to capture the full complexity of life, the simulation becomes as large and unmanageable as reality itself." },
        { question: "Who is the cleaning lady?", answer: "The cleaning lady who gives Caden his final instructions represents death or God, guiding him to his final rest and release from his artistic obsession." }
    ],
    'Mulholland Drive': [
        { question: "Who is the cowboy?", answer: "The Cowboy represents Hollywood's gatekeepers—a surreal enforcer of the rules who appears when the dream (Betty's life) starts to deviate from the script." },
        { question: "Is the first half a dream?", answer: "Yes. The consensus is that the first 2/3 of the film is Diane's dream of being 'Betty,' a successful actress, before reality crashes in." },
        { question: "What does the blue box mean?", answer: "The blue box is the portal between the dream world and reality. Opening it signifies the dreamer waking up and the fantasy collapsing." },
        { question: "Who is the homeless figure?", answer: "The figure behind Winkie's diner represents the ugly, terrifying truth of Diane's guilt and failure, hidden behind the shiny facade of her Hollywood dream." }
    ],
    'Coherence': [
        { question: "Which Em survives?", answer: "The Em we follow at the end is not the original Em. She murdered a version of herself in a 'better' timeline to take her place, but the final phone call reveals she wasn't successful." },
        { question: "How much was improvised?", answer: "Almost all of it. The actors were given index cards with motivations for each scene but no script, creating genuine confusion and paranoia." },
        { question: "What do the glow sticks mean?", answer: "The glow sticks (red vs blue) are markers of different realities. The characters realize they have crossed into a different timeline when the glow stick colors don't match." },
        { question: "Is the ending happy?", answer: "No. It is a chilling subversion. Em thinks she has stolen a perfect life, but the existence of two Ems in one timeline means her chaos is just beginning." }
    ],
    'Donnie Darko': [
        { question: "What is the Tangent Universe?", answer: "It is an unstable parallel reality created when the jet engine falls. Donnie is the 'Living Receiver' chosen to return the artifact to the Primary Universe to prevent a black hole collapse." },
        { question: "Does Donnie have to die?", answer: "Yes. To close the loop and save the universe (and his girlfriend Gretchen), Donnie must choose to stay in his bed and be crushed by the engine." },
        { question: "Who is Grandma Death?", answer: "Roberta Sparrow is a former 'Living Receiver' who wrote the book on time travel. She wanders aimlessly, waiting for Donnie to fulfill the prophecy she wrote." },
        { question: "Why is Frank a rabbit?", answer: "Frank is a 'Manipulated Dead'—someone who died in the Tangent Universe. His scary costume is simply what he was wearing when he was shot, appearing to Donnie as a ghost." }
    ],
    'Enemy': [
        { question: "What does the spider mean?", answer: "The spider represents women, entrapment, and the fear of commitment/motherhood in the protagonist's subconscious. The final giant spider is his wife, symbolizing his total entrapment." },
        { question: "Are they the same person?", answer: "Yes. Adam and Anthony are two sides of the same man's personality—the bored husband and the adulterous actor—battling for control." },
        { question: "What is the car crash scene?", answer: "The crash kills the 'Anthony' personality and his mistress, leaving 'Adam' as the surviving persona who tries to return to his wife, only to fall back into old habits." },
        { question: "Why does he sigh at the end?", answer: "The sigh indicates resignation. When he sees the giant spider (his wife), he accepts that he is trapped in his life and must likely cheat/escape again to cope." }
    ],
    'The Fountain': [
        { question: "Are there three time periods?", answer: "Director Darren Aronofsky suggests there is only one reality: the present-day scientist Tom. The Conquistador story is the book his wife wrote, and the space future is his internal meditation on grief." },
        { question: "What does Xibalba symbolize?", answer: "Xibalba is the Maya underworld, a place of death and rebirth. For Tom, reaching Xibalba means accepting that death is not a disease to be cured, but a part of creation." },
        { question: "Did he find the cure?", answer: "No, he failed to save his wife's body. However, he succeeded in saving himself by finally finishing her book and accepting her death, finding spiritual peace." },
        { question: "Why does he eat the tree bark?", answer: "In the Conquistador story, his greed for immortality makes him consume the tree, which turns him into flora. It warns that the selfish desire to live forever destroys humanity." }
    ],
    'Mr. Nobody': [
        { question: "Which life is real?", answer: "None of them and all of them. The entire film takes place in the mind of the 9-year-old boy at the train station, paralyzingly envisioning every possible future before making a choice." },
        { question: "What is the Big Crunch?", answer: "It is the theory that the universe will stop expanding and reverse. In the film, time starts moving backward at the moment of the Big Crunch, allowing Nemo to undo his choices." },
        { question: "Who is the old Nemo?", answer: "Old Nemo is the consciousness of the boy projecting himself to the end of time. He is the observer checking which path leads to the least regret." },
        { question: "What does 'checkmate' mean?", answer: "It refers to a state where any move is a bad move (zugzwang). Nemo realizes the only way to avoid pain is not to choose, which is why he remains at the station." }
    ],
    'Shutter Island': [
        { question: "Is he insane or being gaslit?", answer: "He is Andrew Laeddis, a patient at the asylum. The 'investigation' is an elaborate role-play designed by his doctors to help him break his delusion." },
        { question: "Does he accept reality at the end?", answer: "Yes. His final line ('To live as a monster or to die as a good man?') implies he is sane but chooses lobotomy over living with the guilt of killing his wife." },
        { question: "Who is the 'partner' Chuck?", answer: "Chuck is actually Dr. Sheehan, his primary psychiatrist. He plays along with the delusion to monitor Andrew and keep him safe during the experiment." },
        { question: "What is the Law of 4?", answer: "The 'Law of 4' is the clue that reveals the anagrams in names (Edward Daniels = Andrew Laeddis). It proves his entire persona is a constructed fiction." }
    ],
    'The Usual Suspects': [
        { question: "Is Verbal Kint really Keyser Söze?", answer: "Yes. The limp, the weakness, and the story were all a fabrication. He used details from the bulletin board in the office to construct the narrative." },
        { question: "Did the heist actually happen?", answer: "The core event (the boat massacre) happened, but the details involving the other criminals were likely manipulated or invented by Kint to frame Keaton." },
        { question: "Why did he kill his own family?", answer: "To prove to his enemies that he had no weaknesses. By destroying what he loved, he removed their leverage, establishing his terrifying mythos." },
        { question: "What gave him away?", answer: "The detective realizes too late that the names and places in Kint's story (Redfoot, Kobayashi) were pulled from random objects in the interrogation room." }
    ],
    'Predestination': [
        { question: "Who are the parents?", answer: "Jane and John are the parents of themselves. It is a closed loop where the same person is the mother, father, and child." },
        { question: "Does the loop ever end?", answer: "No. The movie implies a fatalistic universe where the loop is infinite. The main character must become the Fizzle Bomber to ensure his own creation." },
        { question: "Who is the Fizzle Bomber?", answer: "The Fizzle Bomber is the future version of the protagonist (John/Jane). The psychosis from excessive time travel turned him into the villain he spent his life hunting." },
        { question: "What is the snake metaphor?", answer: "The 'Ouroboros' (snake eating its tail) is referenced constantly. It symbolizes the character's life: a self-contained cycle of creation and destruction with no beginning or end." }
    ]
};

const SEOFAQSection = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    
    // 1. Check for Specific Pre-Written FAQs (Inception Collection)
    const specificFaqs = INCEPTION_COLLECTION_FAQS[movie.Title];

    // 2. Generate Generic FAQs (Fallback for other movies)
    const genericFaqs = [
        {
            question: `Is ${movie.Title} similar to Inception?`,
            answer: `${movieInfo?.seoDescription || `Yes, ${movie.Title} shares mind-bending qualities with Christopher Nolan's Inception including complex narrative structures, reality-bending themes, and psychological depth that challenges viewers' perception of what's real.`}`
        },
        {
            question: `Who directed ${movie.Title} and what is it about?`,
            answer: `${movie.Title} was directed by ${movieInfo?.director || 'acclaimed filmmaker'} in ${movie.year || movie.Year}. ${movieInfo?.synopsis || `A compelling ${movie.genre?.toLowerCase() || 'mind-bending thriller'} film that explores complex themes similar to Inception's reality-twisting narrative.`}`
        },
        {
            question: `Where can I watch ${movie.Title} online?`,
            answer: `${movie.Title} streaming availability varies by region. Check Netflix, Amazon Prime Video, Apple TV+, Hulu, and other major streaming platforms for current availability in your area.`
        },
        {
            question: `Does ${movie.Title} contain mature or sensitive content like Inception?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes and psychological intensity'}. For specific timestamps and detailed guide, view the "Sensitive Content Timeline" section above.`
                : `${movie.Title} does not contain notable mature or sensitive content and is suitable for most audiences interested in mind-bending storytelling.`
        }
    ];

    // ✅ Select Data Source: Specific if available, else Generic
    const faqs = specificFaqs || genericFaqs;
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-yellow-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span>Frequently Asked Questions About {movie.Title}</span>
            </h2>
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

export default SEOFAQSection;