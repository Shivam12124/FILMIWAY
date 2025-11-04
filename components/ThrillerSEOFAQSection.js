// components/ThrillerSEOFAQSection.js - FULL DETAILED FAQS FOR ALL 10 THRILLER FILMS
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const thrillerMovieFAQs = {
  "Se7en": [
    { q: 'What is the core premise of Se7en?', a: "Se7en follows two detectives tracking a serial killer who uses the seven deadly sins as motives, immersing audiences in a rain-drenched world of moral rot and tightly controlled suspense." },
    { q: 'Is Se7en known for its ending?', a: "The ending of Se7en is one of the most shocking in thriller history—delivering a devastating twist involving a mysterious box, which cements the film’s reputation as a true psychological nightmare." },
    { q: 'Who directed Se7en?', a: "The film was directed by David Fincher, whose mastery of darkness, atmosphere, and psychological detail shaped Se7en’s relentless tension." },
    { q: 'Was Se7en critically acclaimed?', a: "Se7en was both a commercial and critical triumph, praised for its performances, visual style, and haunting narrative—it remains a staple of the suspense thriller genre." },
    { q: 'What themes define Se7en?', a: "Major themes include the nature of sin, justice versus vengeance, institutional failure, and the challenge of maintaining hope in a corrupt world." }
  ],
  "Prisoners": [
    { q: 'What is Prisoners about?', a: "Prisoners is a chilling tale of a father's desperate search after his daughter disappears, unraveling a labyrinth of moral boundaries and societal failures." },
    { q: 'Who stars in the film?', a: "The film features Hugh Jackman as the anguished father and Jake Gyllenhaal as the detective, with compelling support from Viola Davis, Terrence Howard, and Paul Dano." },
    { q: 'What makes Prisoners so suspenseful?', a: "Its slow, methodical pacing, ethical dilemmas, and disturbing realism make every scene intensely nerve-wracking." },
    { q: 'Is Prisoners inspired by true events?', a: "The story is fictional but resonates because it taps into very real fears and the morality of how far one might go to protect family." },
    { q: 'What is the setting of Prisoners?', a: "Set in small-town Pennsylvania during winter, the bleak, overcast landscapes underscore the film’s themes of loss and endurance." }
  ],
  "No Country for Old Men": [
    { q: 'Who made No Country for Old Men?', a: "The Coen Brothers directed this adaptation of Cormac McCarthy’s novel, blending neo-Western grit and existential dread." },
    { q: 'Who is Anton Chigurh?', a: "Anton Chigurh is the film’s enigmatic antagonist, played by Javier Bardem, whose coin-flipping fate tests define the story’s philosophical tension." },
    { q: 'Did the film win awards?', a: "The film was awarded four Oscars, including Best Picture and Best Supporting Actor for Bardem’s chilling performance." },
    { q: 'How does the film end?', a: "Its enigmatic ending defies standard resolution, leaving viewers haunted by unanswered questions about fate and justice." },
    { q: 'Why is it regarded as a classic?', a: "Unpredictable violence, richly drawn characters, and a relentless pace make it a high-water mark of American thrillers." }
  ],
  "The Silence of the Lambs": [
    { q: 'What is the plot of The Silence of the Lambs?', a: "FBI trainee Clarice Starling seeks the aid of imprisoned killer Dr. Hannibal Lecter to catch another murderer, Buffalo Bill." },
    { q: 'What is iconic about Hannibal Lecter?', a: "Lecter’s intelligence, manipulation, and eerie empathy create a villain both terrifying and magnetic—Anthony Hopkins’ Oscar-winning role." },
    { q: 'Did the film win Oscars?', a: "One of few films to win Academy Awards in all major categories including Best Picture, Best Director, Best Actor, and Best Actress." },
    { q: 'Who directed it?', a: "Jonathan Demme directed with a unique blend of psychological horror and procedural realism, enhancing the film’s chilling precision." },
    { q: 'What themes does it explore?', a: "It interrogates gender, power dynamics, human monstrosity, and the boundaries of trust in the pursuit of justice." }
  ],
  "Memories of Murder": [
    { q: 'What inspired Memories of Murder?', a: "Loosely based on Korea’s real Hwaseong serial murders, it follows detectives stumbling through dead ends, bureaucracy, and their own limits." },
    { q: 'Who directed this film?', a: "Bong Joon Ho builds genre-defying suspense layered with dark comedic moments and biting social critique." },
    { q: 'Why is the ending so famous?', a: "Its ambiguous ending, years before the crime’s real-life resolution, leaves the audience in disquieting uncertainty." },
    { q: 'Is it a procedural?', a: "It’s both procedural and deeply human—focusing equally on flawed investigation and the psychological collapse of its characters." },
    { q: 'What’s the visual style?', a: "Muddy fields, rain, and rural isolation create a unique cinematic atmosphere of unresolved dread." }
  ],
  "Mystic River": [
    { q: 'What is Mystic River about?', a: "Three childhood friends are drawn back together by murder and trauma, unleashing a tragic spiral of mistrust and retribution." },
    { q: 'Is Mystic River based on a novel?', a: "Yes—directed by Clint Eastwood and adapted from Dennis Lehane’s acclaimed book." },
    { q: 'Who stars in Mystic River?', a: "Sean Penn (Oscar-winning), Tim Robbins (Oscar-winning), and Kevin Bacon lead an ensemble cast steeped in pain and suspicion." },
    { q: 'What are its main themes?', a: "Themes of guilt, childhood trauma, justice, and the ambiguity of truth permeate its storyline." },
    { q: 'How was it received?', a: "Highly acclaimed, it received multiple Oscars and is considered a landmark American crime drama." }
  ],
  "The Departed": [
    { q: 'What is the premise of The Departed?', a: "It’s a tense game of cat-and-mouse between a cop undercover in the mob and a mobster implanted in the Boston police." },
    { q: 'Who directed and starred?', a: "Martin Scorsese directs Leonardo DiCaprio, Matt Damon, Jack Nicholson, and Mark Wahlberg in a high-stakes morality duel." },
    { q: 'Was The Departed adapted from another film?', a: "It’s a reimagining of Hong Kong’s Infernal Affairs." },
    { q: 'Did it win awards?', a: "Absolutely—it won Scorsese his first Oscar for Best Director as well as Best Picture." },
    { q: 'What sets it apart?', a: "Wild narrative turns, relentless pacing, and rich character psychology distinguish it as a modern classic." }
  ],
  "Wind River": [
    { q: 'What is the story of Wind River?', a: "A wildlife tracker and a rookie FBI agent investigate a murder on a remote Native American reservation." },
    { q: 'Who helmed this film?', a: "Taylor Sheridan directs with detailed knowledge of both forensic investigation and the region’s vast, icy wilderness." },
    { q: 'Which themes does it explore?', a: "Themes of loss, isolation, systemic neglect, and indigenous justice are at the film’s heart." },
    { q: 'Is it based on true events?', a: "While fictional, the film draws attention to real unsolved crimes and missing women in Native communities." },
    { q: 'What is the visual style?', a: "Expansive snowscapes and subtle color contrast set its tone of beauty and brutality." }
  ],
  "Gone Girl": [
    { q: 'What is Gone Girl’s narrative twist?', a: "A seemingly perfect marriage crumbles into chaos when a woman’s disappearance turns into a national spectacle of deceit and manipulation." },
    { q: 'Who directed and who stars?', a: "David Fincher directs Ben Affleck and Oscar-nominated Rosamund Pike, whose performance anchors the movie’s dual perspectives." },
    { q: 'Is it based on a book?', a: "Yes, adapted from Gillian Flynn’s bestseller, with her own screenplay." },
    { q: 'How does the film treat media?', a: "Its critique of sensationalist media is sharp, revealing how public opinion distorts truth and justice." },
    { q: 'Did Gone Girl influence pop culture?', a: "Deeply—its 'cool girl' monologue and narrative tricks entered the zeitgeist, inspiring further psychological thrillers on screen." }
  ],
  "The Game": [
    { q: 'What is the premise of The Game?', a: "An uptight banker’s world unravels when a mysterious company thrusts him into a reality-bending 'game'—leaving him unable to tell what’s staged and what’s not." },
    { q: 'Who directed The Game?', a: "David Fincher again, exploring paranoia and existential angst through labyrinthine plot twists." },
    { q: 'How does the film blur reality?', a: "The Game constantly undermines the protagonist’s sense of control—viewers must question every motive and clue until the very end." },
    { q: 'What genre is it?', a: "Psychological thriller with elements of dark satire on privilege and isolation—using suspense for existential reflection." },
    { q: 'How was it received?', a: "Widely praised for its relentless pace, thought-provoking premise, and unexpected conclusions." }
  ]
};

const ThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = thrillerMovieFAQs[title] || [
    { q: 'What makes this thriller unique?', a: "Nerve-wracking atmosphere, detailed plotting, and memorable performances make this a must-watch for suspense fans." },
    { q: 'Where can I watch this film?', a: "Check major streaming platforms in your region for availability." },
    { q: 'Who directed this movie?', a: "A renowned filmmaker whose vision makes the film stand out in the thriller genre." }
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
        Deep dive into {title} with insider knowledge, production details, and insights about this intense thriller.
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

export default ThrillerSEOFAQSection;
