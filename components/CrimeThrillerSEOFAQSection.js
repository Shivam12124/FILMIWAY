// components/CrimeThrillerSEOFAQSection.js - FULL DETAILED FAQS FOR ALL 10 CRIME THRILLER FILMS
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const crimeThrillerMovieFAQs = {
  "Heat": [
    { q: 'What is the core premise of Heat?', a: "Heat follows an elite crew of professional thieves led by Neil McCauley and the obsessive LAPD detective Vincent Hanna hunting them, building to one of cinema's most legendary shootout sequences in downtown Los Angeles." },
    { q: 'What makes the coffee shop scene iconic?', a: "The coffee shop confrontation between De Niro and Pacino—two of cinema's greatest actors—facing off for the first time on screen creates an electrifying dialogue about professionalism, fate, and mutual respect between hunter and hunted." },
    { q: 'Who directed Heat?', a: "Michael Mann directed Heat with meticulous attention to procedural realism, atmospheric cinematography, and complex character psychology that redefined the crime thriller genre." },
    { q: 'Is Heat based on true events?', a: "Heat is loosely inspired by real Chicago criminals and draws from Mann's earlier TV movie L.A. Takedown, but the characters and story are fictionalized masterpieces of crime cinema." },
    { q: 'What themes define Heat?', a: "Major themes include professionalism versus personal life, the thin line between cop and criminal, obsession, loyalty, and the tragic cost of living outside society's rules." }
  ],

  "L.A. Confidential": [
    { q: 'What is L.A. Confidential about?', a: "L.A. Confidential exposes 1950s Los Angeles police corruption through three very different cops investigating a mass murder at the Nite Owl café, unraveling a conspiracy that reaches the highest levels of power." },
    { q: 'Who stars in the film?', a: "Kevin Spacey, Russell Crowe, Guy Pearce, Kim Basinger (Oscar-winning), and James Cromwell lead an ensemble cast bringing noir atmosphere and moral complexity to life." },
    { q: 'Is it based on a novel?', a: "Yes, adapted from James Ellroy's neo-noir masterpiece, the film condenses a sprawling novel into a tightly constructed crime thriller without losing its dark sophistication." },
    { q: 'What is the visual style?', a: "Period-perfect 1950s Los Angeles aesthetics—glamorous surfaces hiding rot beneath—shot with shadows, neon, and careful composition that honors classic film noir." },
    { q: 'Did it win awards?', a: "L.A. Confidential won two Oscars (Best Supporting Actress, Best Adapted Screenplay) and received nine nominations including Best Picture." }
  ],

  "No Country for Old Men": [
    { q: 'Who made No Country for Old Men?', a: "The Coen Brothers directed this adaptation of Cormac McCarthy's novel, blending neo-Western grit, existential dread, and remorseless violence into a modern crime masterpiece." },
    { q: 'Who is Anton Chigurh?', a: "Anton Chigurh is the film's enigmatic antagonist—played by Javier Bardem in an Oscar-winning performance—whose coin-flipping fate tests and captive bolt pistol define the story's philosophical terror." },
    { q: 'Did the film win awards?', a: "The film won four Oscars including Best Picture, Best Director, Best Supporting Actor for Bardem, and Best Adapted Screenplay." },
    { q: 'How does the film end?', a: "Its enigmatic ending defies standard resolution, leaving viewers haunted by unanswered questions about fate, justice, and whether good can survive in a world of chaos." },
    { q: 'Why is it regarded as a classic?', a: "Unpredictable violence, richly drawn characters, existential themes, and a relentless pace make it a high-water mark of American crime cinema." }
  ],

  "Zodiac": [
    { q: 'What is Zodiac about?', a: "Zodiac follows journalists and detectives obsessively hunting the Zodiac Killer who terrorized San Francisco in the late 1960s and early 1970s, focusing on the psychological toll of an unsolved case." },
    { q: 'Who directed Zodiac?', a: "David Fincher directs with meticulous procedural detail, creating a slow-burn thriller that prioritizes investigation over action and atmosphere over shock." },
    { q: 'Is it based on true events?', a: "Yes, based on Robert Graysmith's non-fiction books about the real Zodiac Killer case, one of America's most famous unsolved serial murder investigations." },
    { q: 'What makes it unique?', a: "Zodiac's refusal to provide easy answers or resolution mirrors the real case's frustration, making it a haunting meditation on obsession and the limits of justice." },
    { q: 'Who stars in Zodiac?', a: "Jake Gyllenhaal, Mark Ruffalo, Robert Downey Jr., and an ensemble cast deliver understated performances that ground the film's procedural realism." }
  ],

  "Prisoners": [
    { q: 'What is Prisoners about?', a: "Prisoners is a chilling tale of a father's desperate search after his daughter disappears, crossing every moral line as he takes justice into his own hands while a detective races to solve the case." },
    { q: 'Who stars in the film?', a: "Hugh Jackman delivers a raw, anguished performance as the desperate father, with Jake Gyllenhaal as the detective, and compelling support from Viola Davis, Terrence Howard, and Paul Dano." },
    { q: 'What makes Prisoners so suspenseful?', a: "Its slow, methodical pacing, ethical dilemmas about torture and vigilante justice, and disturbing realism make every scene intensely nerve-wracking." },
    { q: 'Who directed Prisoners?', a: "Denis Villeneuve directs with his signature atmospheric tension and moral ambiguity, establishing himself as a master of psychological thrillers." },
    { q: 'What is the setting of Prisoners?', a: "Set in small-town Pennsylvania during winter, the bleak, overcast landscapes and grey cinematography underscore the film's themes of loss and moral darkness." }
  ],

  "The Usual Suspects": [
    { q: 'What is The Usual Suspects famous for?', a: "The Usual Suspects is legendary for one of cinema's most shocking twist endings, revealed through the unreliable narration of small-time con man Verbal Kint." },
    { q: 'Who is Keyser Söze?', a: "Keyser Söze is a mythical criminal mastermind whose identity drives the entire mystery—the film's climactic revelation of who he really is remains one of cinema's greatest surprises." },
    { q: 'Who directed The Usual Suspects?', a: "Bryan Singer directs this neo-noir with style and wit, while Christopher McQuarrie's Oscar-winning screenplay keeps audiences guessing until the final frames." },
    { q: 'Who stars in the film?', a: "Kevin Spacey (Oscar-winning), Gabriel Byrne, Benicio del Toro, Kevin Pollak, Stephen Baldwin, and Chazz Palminteri form an unforgettable ensemble cast." },
    { q: 'How does the narrative structure work?', a: "The film unfolds through flashbacks as Verbal Kint recounts events to a detective, but the reliability of this narration becomes increasingly questionable." }
  ],

  "Mystic River": [
    { q: 'What is Mystic River about?', a: "Three childhood friends are drawn back together by murder and trauma in working-class Boston, unleashing a tragic spiral of mistrust, grief, and retribution rooted in shared childhood trauma." },
    { q: 'Is Mystic River based on a novel?', a: "Yes—directed by Clint Eastwood and adapted from Dennis Lehane's acclaimed novel, bringing literary depth to crime cinema." },
    { q: 'Who stars in Mystic River?', a: "Sean Penn (Oscar-winning), Tim Robbins (Oscar-winning), Kevin Bacon, Laurence Fishburne, and Marcia Gay Harden lead an ensemble steeped in pain and suspicion." },
    { q: 'What are its main themes?', a: "Themes of guilt, childhood trauma, justice versus vengeance, the ambiguity of truth, and how violence echoes through generations permeate its storyline." },
    { q: 'How was it received?', a: "Highly acclaimed, it received multiple Oscars and is considered a landmark American crime drama that examines the psychological scars of trauma." }
  ],

  "Memories of Murder": [
    { q: 'What inspired Memories of Murder?', a: "Based on South Korea's real Hwaseong serial murders from the 1980s, it follows detectives stumbling through dead ends, bureaucracy, torture-based confessions, and their own investigative limits." },
    { q: 'Who directed this film?', a: "Bong Joon Ho directs with his signature genre-defying blend of suspense, dark comedic moments, and biting social critique of institutional incompetence." },
    { q: 'Why is the ending so famous?', a: "Its ambiguous ending, filmed years before the crime's real-life resolution, leaves the audience—and the detective—in disquieting uncertainty about justice and closure." },
    { q: 'Is it a procedural?', a: "It's both procedural and deeply human—focusing equally on flawed investigation methods and the psychological collapse of detectives who can't solve the case." },
    { q: 'What\'s the visual style?', a: "Muddy fields, rain, rural isolation, and carefully composed wide shots create a unique cinematic atmosphere of unresolved dread and systemic failure." }
  ],

  "The Departed": [
    { q: 'What is the premise of The Departed?', a: "It's a tense game of cat-and-mouse between Billy Costigan, a cop undercover in the Irish mob, and Colin Sullivan, a mobster implanted in the Boston police—each trying to expose the other first." },
    { q: 'Who directed and starred?', a: "Martin Scorsese directs Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg, Martin Sheen, Alec Baldwin, and Vera Farmiga in a high-stakes morality duel." },
    { q: 'Was The Departed adapted from another film?', a: "Yes, it's a reimagining of Hong Kong's Infernal Affairs trilogy, transplanted to Boston's Irish mob world with Scorsese's signature style." },
    { q: 'Did it win awards?', a: "Absolutely—it won four Oscars including Best Picture and Scorsese's long-overdue first Oscar for Best Director after decades of masterpieces." },
    { q: 'What sets it apart?', a: "Wild narrative turns, relentless pacing, violent betrayals, profane dialogue, and rich character psychology distinguish it as a modern crime classic." }
  ],

  "Training Day": [
    { q: 'What is Training Day about?', a: "Training Day follows rookie cop Jake Hoyt's first day with corrupt LAPD narcotics detective Alonzo Harris, who drags him through 24 hours of chaos, betrayal, and moral disintegration in LA's streets." },
    { q: 'Who stars in Training Day?', a: "Denzel Washington delivers an Oscar-winning performance as the charismatic, terrifying Alonzo Harris, opposite Ethan Hawke as the increasingly horrified rookie cop." },
    { q: 'Did Denzel Washington win an Oscar?', a: "Yes—Washington won Best Actor for his explosive, magnetic portrayal of corruption disguised as streetwise pragmatism and survival." },
    { q: 'What is Alonzo Harris\'s philosophy?', a: "Alonzo preaches that to police the streets effectively, you must become part of them—blurring every ethical line while justifying corruption as necessary survival." },
    { q: 'How was it received?', a: "Widely praised for Washington's performance and its gritty depiction of police corruption, moral compromise, and the thin line between law and lawlessness." }
  ]
};

const CrimeThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  const faqs = crimeThrillerMovieFAQs[title] || [
    { q: 'What makes this crime thriller unique?', a: "Complex moral ambiguity, masterful performances, and gritty realism make this a must-watch for crime cinema fans." },
    { q: 'Where can I watch this film?', a: "Check major streaming platforms in your region for availability." },
    { q: 'Who directed this movie?', a: "A renowned filmmaker whose vision makes the film stand out in the crime thriller genre." }
  ];

  return (
    <motion.section
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl font-light text-slate-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Info size={20} className="sm:w-6 sm:h-6" />
        <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
        <span className="sm:hidden">FAQ About {title}</span>
      </h2>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        Deep dive into {title} with insider knowledge, production details, and insights about this intense crime thriller.
      </p>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-slate-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-slate-200 mb-3 sm:mb-4 leading-relaxed">
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

export default CrimeThrillerSEOFAQSection;
