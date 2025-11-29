// components/CrimeThrillerSEOFAQSection.js - FULL DETAILED FAQS (5 PER MOVIE)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

const crimeThrillerMovieFAQs = {
  "Heat": [
    { 
      q: 'What makes the shootout scene in Heat so legendary in cinema history?', 
      a: "The downtown Los Angeles bank robbery shootout is widely considered the gold standard for tactical action. Director Michael Mann insisted on using full-load blank rounds to create a deafening, realistic audio reverberation off the skyscrapers, rather than dubbing in sound effects later. The actors underwent rigorous weapons training with British SAS instructors, leading to a sequence so technically proficient that it has been shown to military recruits as an example of proper retreat under fire." 
    },
    { 
      q: 'Why is the coffee shop scene between Pacino and De Niro significant?', 
      a: "This scene marked the very first time acting titans Al Pacino and Robert De Niro shared the screen together. Despite the film's massive scale, the scene is quiet, relying entirely on dialogue and facial expressions. It establishes the central theme: the two men are not villains and heroes, but mirror images—both professionals at the top of their game, separated only by the side of the law they chose. It serves as the psychological anchor of the entire movie." 
    },
    { 
      q: 'How does Michael Mann use color and lighting to tell the story?', 
      a: "Michael Mann utilizes a distinct 'steel blue' palette (often called 'Mann Blue') to depict the cold, detached, and professional world of Neil McCauley, contrasting it with warmer tones for chaotic domestic moments. The film is also famous for its nighttime cinematography; Mann shot on location in LA using existing light to capture the glowing neon and deep blacks of the city, turning Los Angeles itself into a major character." 
    },
    { 
      q: 'Is the plot of Heat based on a true story?', 
      a: "Yes, Heat is heavily inspired by the real-life pursuit of criminal Neil McCauley by Chicago police officer Chuck Adamson in the 1960s. The two men actually met for coffee, just like in the film, and had a conversation very similar to the one portrayed on screen. Much of the tactical detail and the mutual respect between the cop and the criminal is drawn directly from Adamson's real-world experiences." 
    },
    {
      q: 'How did Heat influence The Dark Knight?',
      a: "Christopher Nolan has explicitly stated that Heat was the primary visual and thematic inspiration for The Dark Knight (2008). The opening bank heist of The Dark Knight is a direct homage to Heat's opening, and the interrogation room scene between Batman and The Joker mirrors the coffee shop scene—two unstoppable forces acknowledging their destiny to do this forever."
    }
  ],

  "L.A. Confidential": [
    { 
      q: 'How does L.A. Confidential deconstruct the "Golden Age" of Hollywood?', 
      a: "The film peels back the glamorous veneer of 1950s Los Angeles to reveal a rotting core of corruption, racism, and tabloid sleaze. While the visuals are polished and beautiful—mimicking the Technicolor look of the era—the narrative exposes how the LAPD and the media colluded to manufacture a squeaky-clean image of the city while brutalizing its marginalized citizens." 
    },
    { 
      q: 'What are the three different archetypes of cops portrayed in the film?', 
      a: "The film brilliantly creates a triangular conflict between three distinct styles of policing: Jack Vincennes (Kevin Spacey) represents the 'celebrity cop' who cares about fame; Bud White (Russell Crowe) is the 'enforcer' who believes in brute force; and Ed Exley (Guy Pearce) is the 'politician' who adheres strictly to the rules. The film's brilliance lies in how these three enemies are forced to work together." 
    },
    { 
      q: 'Is the Rollo Tomasi plot point significant?', 
      a: "Absolutely. 'Rollo Tomasi' is a name invented by Ed Exley to personify the criminal who gets away with it. It represents the driving force behind Exley's obsession with justice. In a pivotal moment, the name serves as a secret code that allows the characters to identify the true villain of the story, turning a childhood trauma into the key that unlocks the entire conspiracy." 
    },
    {
      q: 'How does the movie differ from the book?',
      a: "James Ellroy's novel is far darker and more sprawling than the film. In the book, the narrative spans years rather than weeks, and the ending is significantly bleaker—some characters who survive the movie die in the book, and the 'happy' resolution is nonexistent. The film condenses the plot to focus specifically on the Nite Owl murders to create a tighter cinematic structure."
    },
    {
      q: 'What is the significance of the "Fleur-de-lis" service?',
      a: "The 'Fleur-de-lis' service, where prostitutes undergo plastic surgery to look like movie stars, serves as the ultimate metaphor for Los Angeles in the film: a beautiful, manufactured surface covering a tragic and exploitative reality. It highlights the commodification of women and the obsession with image that drives the city's corruption."
    }
  ],

  "No Country for Old Men": [
    { 
      q: 'What is the philosophical meaning behind Anton Chigurh\'s coin toss?', 
      a: "Anton Chigurh views himself not as a murderer, but as an agent of fate. The coin toss represents his philosophy that the universe is governed by chance and inevitability. When he asks victims to 'call it,' he is removing his own agency and forcing them to confront the random, indifferent nature of death. It underscores the film's nihilistic theme: that violence is a force of nature." 
    },
    { 
      q: 'Why does the film not have a traditional musical score?', 
      a: "The Coen Brothers chose to omit a traditional background score to heighten the tension and realism. Instead of music telling the audience how to feel, the sound design focuses on diegetic sounds—the crunch of boots on gravel, the wind on the plains, and the hiss of the cattle gun. This silence makes Chigurh's presence terrifyingly immediate and creates a pervasive sense of isolation." 
    },
    { 
      q: 'How does the ending differ from typical crime thrillers?', 
      a: "Unlike standard thrillers that end with a climactic showdown where the good guy wins, No Country for Old Men ends on a quiet, reflective monologue. Sheriff Bell realizes he is 'overmatched' by the new breed of violence represented by Chigurh. The ending is not about catching the killer, but about the mournful realization that the world has moved on, leaving the 'old men' behind." 
    },
    {
      q: 'What does the title "No Country for Old Men" mean?',
      a: "Taken from W.B. Yeats' poem 'Sailing to Byzantium,' the title refers to a world that has become too chaotic, violent, and youthful for the older generation to understand or control. It reflects Sheriff Bell's feeling of obsolescence—he can no longer protect his people because the rules of crime and morality have fundamentally changed into something he cannot recognize."
    },
    {
      q: 'Why does Llewelyn Moss die off-screen?',
      a: "The decision to kill the protagonist, Llewelyn Moss, off-screen is a deliberate subversion of audience expectations. It denies the viewer a heroic death scene or a final blaze of glory. This emphasizes the film's theme that death is sudden, unglamorous, and often meaningless. It forces the audience to feel the same sudden shock and disappointment that Sheriff Bell feels upon arriving too late."
    }
  ],

  "Zodiac": [
    { 
      q: 'Why is Zodiac considered a "procedural" rather than a typical serial killer movie?', 
      a: "Zodiac is less about the killer himself and more about the crushing weight of the investigation. It focuses entirely on the paperwork, the dead ends, the jurisdictional arguments, and the passage of time. Director David Fincher emphasizes the obsession that consumes the investigators' lives, showing how the lack of closure destroys marriages and careers." 
    },
    { 
      q: 'How accurate is the film to the real Zodiac case?', 
      a: "It is widely considered one of the most historically accurate crime films ever made. David Fincher and his team spent months interviewing survivors, reading police reports, and even reconstructing crime scenes to the inch. While some dramatic license was taken, the film adheres strictly to the known facts of the Robert Graysmith books." 
    },
    { 
      q: 'What role does the basement scene play in the film\'s tension?', 
      a: "The basement scene is a masterclass in subjective suspense. It breaks the film's procedural tone to plunge the audience into pure terror. By isolating the cartoonist Robert Graysmith in a stranger's house with circumstantial evidence, Fincher plays on the fear of the unknown. It highlights how the Zodiac terrorized the public through the paranoia that *anyone* could be the killer." 
    },
    {
      q: 'How did David Fincher create the visual look of the 1970s?',
      a: "Despite being shot almost entirely on digital cameras (the Viper Filmstream), the film looks like vintage 70s cinema. Fincher used digital color grading to mimic the specific film stocks of the era. However, he avoided the 'shaky cam' cliché, opting for steady, tripod-based camera work that mimics the cinematic language of 1970s paranoia thrillers like 'All The President's Men.'"
    },
    {
      q: 'What is the significance of the "Hurdy Gurdy Man" song?',
      a: "The use of Donovan's 'Hurdy Gurdy Man' is unsettling because it juxtaposes a psychedelic, hippie-era pop song with brutal violence. The song's eerie, cyclical melody and lyrics about a man 'singing songs of love' create a cognitive dissonance when paired with the stalking scenes, emphasizing the perversion of the 'Love Generation' era that the Zodiac killer represented."
    }
  ],

  "Prisoners": [
    { 
      q: 'What are the central moral dilemmas presented in Prisoners?', 
      a: "The film asks a terrifying question: 'How far would you go to save your child?' It forces the audience to sympathize with Keller Dover (Hugh Jackman) as he tortures a suspect, while simultaneously horrifying them with his brutality. It blurs the line between victim and perpetrator, exploring whether the ends (saving a life) truly justify the means (losing your humanity)." 
    },
    { 
      q: 'How does Roger Deakins\' cinematography contribute to the film\'s atmosphere?', 
      a: "Legendary cinematographer Roger Deakins shot the film to reflect the bleak, hopeless nature of the situation. He uses a palette of greys, browns, and rain-soaked streets to create a claustrophobic, heavy atmosphere. The lighting is often naturalistic and low-key, making the darkness feel encroaching and physical." 
    },
    { 
      q: 'What is the significance of the maze imagery in the film?', 
      a: "The maze serves as a metaphor for the characters' psychological states and the investigation itself. Detective Loki is trapped in a maze of false leads and dead ends, while the kidnapper uses actual mazes to test victims. Theologically, it represents the struggle to find faith in a cruel world—wandering through a labyrinth of suffering searching for a center or a purpose." 
    },
    {
      q: 'What does the red whistle represent?',
      a: "The red whistle is the pivotal object of the film. Initially, it represents safety—a tool for the child to call for help. Later, it becomes a symbol of hope and the only connection between the missing girl and the outside world. In the film's ambiguous final moments, the faint sound of the whistle represents the possibility of salvation emerging from the depths of darkness."
    },
    {
      q: 'Is there a religious subtext to the film?',
      a: "Yes, the film is steeped in Christian symbolism. Characters are frequently seen praying, the Lord's Prayer is recited during a torture scene, and the names (Keller meaning 'cellar', referencing the hidden dungeons) have symbolic weight. The film examines the crisis of faith—how people can claim to be religious while committing horrific acts, or how they lose their god when faced with unimaginable tragedy."
    }
  ],

  "The Usual Suspects": [
    { 
      q: 'What makes the narrative structure of The Usual Suspects unique?', 
      a: "The film popularized the 'unreliable narrator' trope in modern cinema. Because the entire story is told through the flashbacks of Verbal Kint, a con man, the audience sees events not as they happened, but as Kint *wants* them to be seen. This structure turns the movie into a magic trick, where the viewer is distracted by the details of the heist while the real deception happens right in front of their faces." 
    },
    { 
      q: 'Was the famous lineup scene scripted that way?', 
      a: "No, the laughter in the iconic police lineup scene was largely unscripted. The actors were supposed to be serious, but Benicio del Toro apparently kept 'passing gas' during the takes, causing the rest of the cast to break character and laugh hysterically. Director Bryan Singer decided to keep the blooper because it showed the criminals' lack of respect for the police." 
    },
    { 
      q: 'Who is Keyser Söze and what does he represent?', 
      a: "Keyser Söze is a myth constructed to strike fear into the criminal underworld. He represents the ultimate evil—a figure so ruthless he would kill his own family to prove a point. The film explores the power of storytelling and myth-making, suggesting that the greatest trick the devil ever pulled was convincing the world he didn't exist... until it was too late." 
    },
    {
      q: 'How does the "Kobayashi" coffee mug reveal the twist?',
      a: "In the final moments, Agent Kujan drops his coffee mug, which has the brand name 'Kobayashi' on the bottom. This visual cue triggers the realization that Verbal Kint was improvising his entire story using random objects in the office (the bulletin board, the mug). It forces the audience to instantly re-evaluate every single scene they just watched, realizing it was all a fabrication."
    },
    {
      q: 'Why is the film titled "The Usual Suspects"?',
      a: "The title is a reference to a famous line from the classic film *Casablanca*: 'Round up the usual suspects.' It implies a lazy, procedural police work where the same known criminals are dragged in for every crime. The irony of the film is that by focusing on the 'usual suspects,' the police completely miss the unusual, master criminal standing right in front of them."
    }
  ],

  "Mystic River": [
    { 
      q: 'How does the setting of Boston contribute to the story?', 
      a: "The close-knit, working-class Irish-Catholic neighborhood in Boston is essential to the plot. It creates a suffocating environment where everyone knows everyone's business, yet deep secrets are buried for decades. The 'river' acts as a symbolic grave where the community washes away its sins. The intense loyalty to the neighborhood code is exactly what leads to the film's tragedy." 
    },
    { 
      q: 'What themes of trauma does Mystic River explore?', 
      a: "The film examines how childhood trauma echoes through time, destroying not just the victim, but the lives of everyone around them. Dave Boyle's abduction as a child breaks the timeline of the three friends, creating a 'before' and 'after.' The movie suggests that violence is a cycle; the unaddressed pain of the past inevitably resurfaces to cause new tragedies in the present." 
    },
    { 
      q: 'Why is the ending of Mystic River considered a tragedy?', 
      a: "The tragedy lies in the fact that the murder is solved, but the damage is irreversible. Innocent blood is shed due to a misunderstanding fueled by mistrust and past trauma. The final parade scene shows the community closing ranks and moving on, effectively agreeing to bury the truth to maintain the status quo, implying that the cycle of violence will continue." 
    },
    {
      q: 'What is the significance of the "Is that my daughter?" scene?',
      a: "Sean Penn's performance in the scene where he discovers his daughter's body is iconic for its raw, animalistic grief. Director Clint Eastwood cleared the set to allow Penn to reach that level of emotional intensity. The scene is pivotal because it shifts the movie from a mystery into a revenge tragedy, showing the moment Jimmy Markum's soul breaks, setting him on the path to destroy his friend."
    },
    {
      q: 'How does the film portray the wives of the main characters?',
      a: "The wives play crucial, contrasting roles. Annabeth Markum (Laura Linney) delivers a chilling, Lady Macbeth-style speech at the end, validating her husband's violence to protect their family's power. In contrast, Celeste Boyle represents the crumbling of trust, as her suspicion of her own husband eventually seals his fate. They represent the different ways the community deals with guilt: denial versus confession."
    }
  ],

  "Memories of Murder": [
    { 
      q: 'How does Memories of Murder critique authoritarianism?', 
      a: "Set during South Korea's military dictatorship in the 1980s, the film uses the serial killer investigation to highlight the incompetence of the state. Police are shown to be more skilled at suppressing student protests and fabricating evidence through torture than actually solving crimes. The chaos, blackouts, and lack of forensic resources are depicted as symptoms of a society that values control over justice." 
    },
    { 
      q: 'What is the significance of the final shot of the film?', 
      a: "The final shot, where Detective Park stares directly into the camera, is one of the most haunting in cinema history. Director Bong Joon Ho intended this as a confrontation with the real-life killer (who was caught years after the film's release). By breaking the fourth wall, the detective is looking into the audience, searching for the face of a murderer who was likely blending in with ordinary people." 
    },
    { 
      q: 'How does the tone shift throughout the movie?', 
      a: "Bong Joon Ho masterfully blends slapstick comedy, rural satire, and pitch-black horror. The film starts with bumbling local cops performing dropkicks and planting evidence, which is almost funny, until the reality of the murders sets in. This tonal shift disarms the audience, making the eventual descent into darkness and hopelessness feel much more profound and disturbing." 
    },
    {
      q: 'What does the scarecrow imagery represent?',
      a: "The film opens and closes with scenes in a golden rice field involving a scarecrow. The scarecrow, which has a painted face, represents the mocking nature of the killer—a fake human watching over the scene of death. It also symbolizes the helplessness of the police and the villagers, who are standing guard but are unable to stop the predator moving among them."
    },
    {
      q: 'How does this film compare to David Fincher’s Se7en?',
      a: "While both are masterpieces about hunting serial killers, *Memories of Murder* is often called the 'rural Se7en.' Unlike *Se7en*, which features a brilliant, intellectual detective and a philosophical killer, *Memories of Murder* features incompetent, desperate detectives and a killer who leaves no trace. It is more about the failure of the system and the frustration of not knowing, rather than a cat-and-mouse game."
    }
  ],

  "The Departed": [
    { 
      q: 'How does The Departed differ from the original film, Infernal Affairs?', 
      a: "While the plot mechanics are similar, Martin Scorsese transplanted the story to the specific culture of the Boston Irish mob. He added a layer of religious guilt, class warfare, and a rougher, more violent energy compared to the cool, sleek stylization of the Hong Kong original. The character of Dignam (Mark Wahlberg) was also expanded to add a unique, profane chaotic energy that doesn't exist in the original." 
    },
    { 
      q: 'What is the significance of the "X" appearing in the background?', 
      a: "In a homage to the classic 1932 film *Scarface*, Scorsese placed 'X' shapes in the background of shots—crossed tape, architectural beams, or patterns on carpets—whenever a character is marked for death. It is a subtle visual foreshadowing technique that subconsciously alerts the audience to the impending doom of the characters involved in this dangerous double-life." 
    },
    { 
      q: 'What is the "Rat" symbolism at the end of the movie?', 
      a: "The final shot of a rat scurrying across the balcony railing is a literal manifestation of the film's central theme: in a world of snitches, informants, and betrayers, everyone is a 'rat.' It underscores the cynical worldview of the film, where loyalty is a lie and survival belongs to those willing to sell out their friends. It serves as a dark, punctuation mark on the story of corruption." 
    },
    {
      q: 'Did Jack Nicholson improvise his scenes?',
      a: "Yes, Jack Nicholson (Frank Costello) improvised heavily to make his character unpredictable and terrifying. The famous scene where he pulls a real gun on Leonardo DiCaprio was not in the script; DiCaprio's look of genuine shock is real. Nicholson also improvised the scene with the dildo in the porn theater to add an uncomfortable, grotesque layer to Costello's character."
    },
    {
      q: 'What role does identity play in The Departed?',
      a: "Identity is the core conflict. Both Billy Costigan and Colin Sullivan are pretending to be people they are not, and both suffer a loss of self. Sullivan tries to erase his working-class roots to become an upper-class cop, while Costigan is forced to destroy his own clean record to become a thug. The film asks whether you become the mask you wear, and if redemption is possible when you've sold your soul."
    }
  ],

  "Training Day": [
    { 
      q: 'What makes Alonzo Harris such a compelling villain?', 
      a: "Alonzo Harris (Denzel Washington) is terrifying because he is charismatic and arguably effective. He seduces the rookie (and the audience) with the logic that to catch wolves, you must be a wolf. He isn't a chaotic evil; he is a calculated monster who believes his corruption serves the greater good. This complexity forces the viewer to constantly question where the line between effective policing and criminal behavior actually lies." 
    },
    { 
      q: 'How does the setting of Los Angeles play a role in the film?', 
      a: "The film was shot on location in some of the most dangerous neighborhoods of Los Angeles, including areas controlled by actual street gangs who were used as extras. This authenticity gives the movie a sweaty, visceral texture. The progression of the day, moving from the bright, hot sun into the dangerous shadows of the night, mirrors Jake Hoyt's descent into the moral underworld of the city." 
    },
    { 
      q: 'What is the core conflict between Jake and Alonzo?', 
      a: "It is a battle of philosophies. Alonzo represents 'street justice'—the idea that results matter more than the law, and that corruption is a necessary tax for order. Jake represents 'idealism'—the belief that the law must be upheld regardless of the difficulty. The film is a 24-hour crucible testing whether Jake's idealism can survive contact with the brutal reality of Alonzo's world." 
    },
    {
      q: 'Was the "King Kong" speech scripted?',
      a: "The famous 'King Kong ain't got sh*t on me!' speech was largely improvised by Denzel Washington in the moment. It captures Alonzo's total narcissism and descent into madness. At that moment, stripped of his badge and gun, he still believes his own myth—that he is the apex predator of the streets. It is the tragic climax of a man who believed he was a god, only to be rejected by the very streets he thought he ruled."
    },
    {
      q: 'What is the significance of the "wolf" story Alonzo tells?',
      a: "Alonzo tells a story about a snail crawling on a straight razor, and consistently refers to 'wolves' and 'sheep.' This animalistic imagery defines his worldview: the world is a jungle, and you are either predator or prey. He tries to train Jake to be a 'wolf' to protect the 'sheep,' but the film reveals that Alonzo has become a wolf that eats the sheep he was sworn to protect."
    }
  ]
};

const CrimeThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  // Fallback if movie title not found
  const faqs = crimeThrillerMovieFAQs[title] || [
    { q: 'What makes this crime thriller unique?', a: "Complex moral ambiguity, masterful performances, and gritty realism make this a must-watch for crime cinema fans." },
    { q: 'Where can I watch this film?', a: "Check major streaming platforms in your region for availability." },
    { q: 'Who directed this movie?', a: "A renowned filmmaker whose vision makes the film stand out in the crime thriller genre." },
    { q: 'Is this movie suitable for all ages?', a: "Most crime thrillers are rated R for violence and language. Please check the specific age rating." },
    { q: 'What is the runtime?', a: "Runtimes vary, but most crime thrillers run between 90 and 150 minutes to allow for complex plot development." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section 
      className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-700/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-light text-slate-200 flex items-center gap-3">
            <Info size={24} className="text-blue-500" />
            <span>FAQs: Understanding <span className="font-semibold text-blue-400">{title}</span></span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl">
            Dive deeper into the themes, production secrets, and cinematic legacy of {title}. 
            Warning: Some answers may contain spoilers.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            className={`bg-gray-800/40 rounded-xl overflow-hidden border transition-all duration-300 ${
              openIndex === idx ? 'border-blue-500/50 bg-gray-800/60' : 'border-gray-700/50 hover:border-gray-600'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <span className="text-base sm:text-lg font-medium text-slate-200 pr-4">
                {faq.q}
              </span>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-5 pt-0 text-gray-300 leading-relaxed text-sm sm:text-base font-light border-t border-gray-700/30 mt-2">
                {faq.a}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CrimeThrillerSEOFAQSection;