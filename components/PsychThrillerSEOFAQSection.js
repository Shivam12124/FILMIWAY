import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const psychThrillerMovieFAQs = {
  "The Silence of the Lambs": [
    { q: 'What is the plot of The Silence of the Lambs?', a: "FBI trainee Clarice Starling seeks help from imprisoned genius Dr. Hannibal Lecter to catch serial killer Buffalo Bill." },
    { q: 'Why is Hannibal Lecter iconic?', a: "Lecter’s intelligence and eerie empathy create a villain both terrifying and magnetic—Anthony Hopkins’ Oscar-winning role." },
    { q: 'Did the film win Oscars?', a: "Won Best Picture, Director, Actor, and Actress Academies, a rare grand slam." },
    { q: 'Who directed The Silence of the Lambs?', a: "Jonathan Demme, blending psychological horror and thriller realism." },
    { q: 'What themes does it explore?', a: "It explores power, gender dynamics, monstrosity, and trust in justice pursuit." }
  ],
  "Fight Club": [
    { q: 'What is Fight Club about?', a: "An insomniac office worker forms an underground fight club with anarchist Tyler Durden, spiraling into chaos." },
    { q: 'Who stars in Fight Club?', a: "Edward Norton and Brad Pitt star in this cult psychological thriller." },
    { q: 'What is the famous twist?', a: "The narrator and Tyler Durden turn out to be the same person." },
    { q: 'What themes are in Fight Club?', a: "It critiques consumerism, masculinity, identity, and societal breakdown." },
    { q: 'Who directed Fight Club?', a: "David Fincher." }
  ],
  "Memento": [
    { q: 'What is unique about Memento’s story?', a: "It tells a reverse chronological narrative of a man with anterograde amnesia seeking his wife’s killer." },
    { q: 'Who directed Memento?', a: "Christopher Nolan." },
    { q: 'What techniques does Memento use?', a: "A complex use of fragmented timelines and memory devices." },
    { q: 'What themes are explored?', a: "Memory, identity, and revenge." },
    { q: 'Who stars in Memento?', a: "Guy Pearce." }
  ],
  "Se7en": [
    { q: 'What is Se7en’s premise?', a: "Two detectives hunt a killer using the seven deadly sins as inspiration." },
    { q: 'Who directed Se7en?', a: "David Fincher." },
    { q: 'What is the famous ending?', a: "A shocking reveal involving a mysterious box that intensifies the horror." },
    { q: 'What themes are explored?', a: "Sin, justice, vengeance, and despair." },
    { q: 'Who stars in Se7en?', a: "Brad Pitt and Morgan Freeman." }
  ],
  "Shutter Island": [
    { q: 'What is Shutter Island about?', a: "Two US Marshals investigate a disappearance in a remote asylum while confronting personal demons." },
    { q: 'Who directed Shutter Island?', a: "Martin Scorsese." },
    { q: 'What twists are there?', a: "Reality bending and paranoia dominate the narrative." },
    { q: 'Who stars in Shutter Island?', a: "Leonardo DiCaprio." },
    { q: 'What themes are explored?', a: "Mental illness, trauma, and deception." }
  ],
  "Black Swan": [
    { q: 'What is Black Swan about?', a: "A ballerina’s psychological descent as she strives for perfect performance in Swan Lake." },
    { q: 'Who stars in Black Swan?', a: "Natalie Portman." },
    { q: 'Who directed Black Swan?', a: "Darren Aronofsky." },
    { q: 'What themes are explored?', a: "Obsession, perfectionism, and duality." },
    { q: 'Did Black Swan win awards?', a: "Natalie Portman won Best Actress Oscar." }
  ],
  "The Machinist": [
    { q: 'What is The Machinist about?', a: "A factory worker suffers from severe insomnia, paranoia, and a mysterious conspiracy." },
    { q: 'Who stars in The Machinist?', a: "Christian Bale." },
    { q: 'Who directed The Machinist?', a: "Brad Anderson." },
    { q: 'What themes are explored?', a: "Guilt, mental illness, and reality perception." },
    { q: 'What is unique about Bale’s role?', a: "Extreme weight loss and physical transformation." }
  ],
  "Oldboy": [
    { q: 'What is Oldboy about?', a: "A man is kidnapped for 15 years and seeks brutal revenge after release." },
    { q: 'Who directed Oldboy?', a: "Park Chan-wook." },
    { q: 'What themes are explored?', a: "Revenge, identity, and fate." },
    { q: 'What is famous about Oldboy?', a: "Its intense, stylized fight scenes and shocking twist endings." },
    { q: 'Is Oldboy part of a trilogy?', a: "Yes, the Vengeance Trilogy." }
  ],
  "Taxi Driver": [
    { q: 'What is Taxi Driver about?', a: "A lonely Vietnam vet descends into violent obsession in New York City." },
    { q: 'Who stars in Taxi Driver?', a: "Robert De Niro." },
    { q: 'Who directed Taxi Driver?', a: "Martin Scorsese." },
    { q: 'What themes are explored?', a: "Isolation, violence, and moral decay." },
    { q: 'Why is Taxi Driver a classic?', a: "Its intense portrayal of urban alienation and psychological unraveling." }
  ],
  "The Shining": [
    { q: 'What is The Shining about?', a: "A caretaker’s sanity unravels in a haunted hotel during isolation." },
    { q: 'Who stars in The Shining?', a: "Jack Nicholson." },
    { q: 'Who directed The Shining?', a: "Stanley Kubrick." },
    { q: 'What themes are explored?', a: "Madness, supernatural, and family dysfunction." },
    { q: 'What makes The Shining iconic?', a: "Its eerie atmosphere, memorable scenes, and haunting score." }
  ]
};

const PsychThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = psychThrillerMovieFAQs[title] || [
    { q: 'What makes this psychological thriller unique?', a: "An intriguing plot, strong performances, and intense psychological suspense." },
    { q: 'Where can I watch this film?', a: "Available on major streaming services; check your region for specifics." },
    { q: 'Who directed the movie?', a: "A renowned filmmaker known for psychological thrillers." }
  ];

  return (
    <motion.section
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl font-light text-purple-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Info size={20} className="sm:w-6 sm:h-6" />
        <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
        <span className="sm:hidden">FAQ About {title}</span>
      </h2>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        Deep dive into {title} with insider knowledge, production details, and insights about this intense psychological thriller.
      </p>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-purple-200 mb-3 sm:mb-4 leading-relaxed">
              {faq.q}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PsychThrillerSEOFAQSection;
