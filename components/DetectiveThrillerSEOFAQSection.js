// components/DetectiveThrillerSEOFAQSection.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const detectiveThrillerMovieFAQs = {
  "Se7en": [
    { q: 'What is the core premise of Se7en?', a: "Se7en follows two detectives tracking a serial killer who uses the seven deadly sins as motives, immersing audiences in a rain-drenched world of moral rot and tightly controlled suspense." },
    { q: 'Is Se7en known for its ending?', a: "The ending of Se7en is one of the most shocking in thriller history—delivering a devastating twist involving a mysterious box, which cements the film's reputation as a true psychological nightmare." },
    { q: 'Who directed Se7en?', a: "The film was directed by David Fincher, whose mastery of darkness, atmosphere, and psychological detail shaped Se7en's relentless tension." },
    { q: 'Was Se7en critically acclaimed?', a: "Se7en was both a commercial and critical triumph, praised for its performances, visual style, and haunting narrative—it remains a staple of the mystery thriller genre." },
    { q: 'What themes define Se7en?', a: "Major themes include the nature of sin, justice versus vengeance, institutional failure, and the challenge of maintaining hope in a corrupt world." }
  ],
  "Zodiac": [
    { q: 'What is Zodiac about?', a: "Zodiac follows journalists and detectives obsessively investigating the infamous Zodiac Killer who terrorized San Francisco in the late 1960s and early 1970s." },
    { q: 'Is Zodiac based on true events?', a: "Yes—meticulously researched from Robert Graysmith's books, it portrays the real unsolved case with chilling procedural accuracy and historical authenticity." },
    { q: 'Who directed Zodiac?', a: "David Fincher brings his signature meticulous style to this slow-burn investigation thriller that prioritizes realism over sensationalism." },
    { q: 'How does Zodiac treat the unsolved mystery?', a: "The film explores the obsessive toll of unanswered questions rather than providing false closure, making it haunting and realistic." },
    { q: 'What is unique about its cinematography?', a: "It uses period-accurate visuals and lighting to evoke 1970s San Francisco with a contemporary pacing style." }
  ],
  "Prisoners": [
    { q: 'What is Prisoners about?', a: "When his daughter disappears, a desperate father takes matters into his own hands while a detective races to solve the case through proper investigative channels." },
    { q: 'Who stars in Prisoners?', a: "Hugh Jackman and Jake Gyllenhaal deliver powerhouse performances as the father and detective, supported brilliantly by Viola Davis and Paul Dano." },
    { q: 'What moral questions does it raise?', a: "The film explores the limits of justice, the morality of torture, and the lengths one will go to protect family." },
    { q: 'Is it based on true events?', a: "While fictional, it taps into real fears about child abduction and law enforcement challenges." },
    { q: 'How does the pacing contribute?', a: "Denis Villeneuve's deliberate pacing builds unbearable tension while allowing moral ambiguity and complex characters to unfold." }
  ],
  "The Secret in Their Eyes": [
    { q: 'What is the film’s premise?', a: "A retired legal counselor writes a novel based on a haunting unresolved rape and murder case from his past." },
    { q: 'Which awards did it win?', a: "Won the Academy Award for Best Foreign Language Film in 2010—a hallmark of Argentine cinema." },
    { q: 'What themes are explored?', a: "Justice, unresolved trauma, and the tension between personal vengeance and legal process." },
    { q: 'Who directed it?', a: "Directed by Juan José Campanella, blending crime, romance, and drama into a moving thriller." },
    { q: 'How does it handle time?', a: "The narrative weaves between past and present, deepening emotional impact." }
  ],
  "Memories of Murder": [
    { q: 'What inspired Memories of Murder?', a: "Based on Korea's real Hwaseong serial murders, it follows detectives struggling with limited resources and psychological toll during the 1980s." },
    { q: 'Who directed this film?', a: "Bong Joon-ho blends police procedural with dark comedy and social critique—years before his Oscar triumph with Parasite." },
    { q: 'Why is the ending famous?', a: "Its ambiguous, haunting conclusion left audiences uncertain—it became more poignant after the real case was solved decades later." },
    { q: 'What themes does it explore?', a: "Institutional failure, class divide, justice limitations, and trauma in criminal investigations." },
    { q: 'How does it differ from American detective films?', a: "It focuses on procedural failure and flawed characters rather than heroic resolutions." }
  ],
  "The Chaser": [
    { q: 'What is The Chaser about?', a: "A disgraced ex-detective turned pimp races against time to find missing girls while unraveling a serial killer’s trail." },
    { q: 'How does the film build tension?', a: "Taut pacing and raw, gritty storytelling make it a standout Korean thriller." },
    { q: 'What themes are central?', a: "Corruption, desperation, and the failure of institutions to protect victims." },
    { q: 'Is it based on true events?', a: "Inspired by real serial killer cases in Korea, highlighting police inefficiency." },
    { q: 'Who directed it?', a: "Directed by Na Hong-jin, marking his breakthrough into international acclaim." }
  ],
  "Mystic River": [
    { q: 'What is Mystic River about?', a: "Three childhood friends are reunited by tragedy, leading to a dark investigation full of secrets and guilt." },
    { q: 'Who directed Mystic River?', a: "Clint Eastwood directed this intense psychological drama thriller." },
    { q: 'What themes does it explore?', a: "Guilt, trauma, friendship, and the consequences of past sins." },
    { q: 'Who stars in it?', a: "Sean Penn, Tim Robbins, and Kevin Bacon headline the cast." },
    { q: 'How was the film received?', a: "Critically acclaimed for performances and emotional depth, winning several awards." }
  ],
  "Marshland": [
    { q: 'What is Marshland about?', a: "Set in post-Franco Spain, two detectives investigate a brutal crime in a swampy region filled with secrets and political tension." },
    { q: 'What distinguishes Marshland?', a: "Its atmospheric noir style and portrayal of Spain's historical trauma." },
    { q: 'Who directed it?', a: "Directed by Alberto Rodríguez, combining thriller and social commentary." },
    { q: 'What themes does it cover?', a: "Political unrest, secrecy, and the shadows of the past." },
    { q: 'How was it received?', a: "Critically praised as a top Spanish thriller of the 2010s." }
  ],
  "Fargo": [
    { q: 'What is Fargo about?', a: "A crime gone wrong in snowy Minnesota entangles a pregnant police chief and peculiar criminals in twisted plots." },
    { q: 'Is Fargo a comedy?', a: "It blends dark comedy with crime thriller elements, creating a unique tone." },
    { q: 'Who created Fargo?', a: "Joel and Ethan Coen crafted this cult classic with memorable dialogue and tone." },
    { q: 'What themes are explored?', a: "Greed, deception, and the banality of evil." },
    { q: 'Has it influenced other media?', a: "Inspired an acclaimed TV series and numerous parodies." }
  ],
  "The Fugitive": [
    { q: 'What is The Fugitive about?', a: "Dr. Richard Kimble wrongly convicted for his wife’s murder escapes custody and pursues the real killer while being hunted." },
    { q: 'Who stars in The Fugitive?', a: "Harrison Ford leads the action thriller with Tommy Lee Jones as the relentless U.S. Marshal." },
    { q: 'How was the film received?', a: "Praised for intense action sequences and tight plotting." },
    { q: 'What themes drive the story?', a: "Justice, perseverance, and the quest for truth." },
    { q: 'Did it inspire adaptations?', a: "Spawned a successful TV series and remains a benchmark for action thrillers." }
  ]
};

const DetectiveThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = detectiveThrillerMovieFAQs[title] || [
    { q: 'What makes this detective thriller unique?', a: "Detailed plotting, immersive detective work, and compelling character dynamics define this film." },
    { q: 'Where can I watch this film?', a: "Available on major streaming platforms; check availability in your region." },
    { q: 'Who directed this movie?', a: "Directed by a distinguished filmmaker known for craft in thriller genre." }
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
        <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
        <span className="sm:hidden">FAQ About {title}</span>
      </h2>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        Deep dive into {title} with insider knowledge, production details, and insights about this brilliant detective thriller.
      </p>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-yellow-200 mb-3 sm:mb-4 leading-relaxed">
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

export default DetectiveThrillerSEOFAQSection;
