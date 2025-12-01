// components/SciFiSEOFAQSection.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const sciFiMovieFAQs = {
  "2001: A Space Odyssey": [
    { q: 'What is 2001: A Space Odyssey about?', a: "Stanley Kubrick's visionary masterpiece follows humanity's evolution from prehistoric apes to space-faring beings, guided by mysterious alien monoliths. The film explores human consciousness, artificial intelligence through HAL 9000, and cosmic transcendence in a stunning visual journey that revolutionized science fiction cinema forever." },
    { q: 'Why is the ending so ambiguous?', a: "The 'Star Gate' sequence and transformation into the Star Child deliberately transcend conventional narrative, inviting viewers to interpret the cosmic leap in human evolution. Kubrick aimed to create a visual, spiritual experience rather than explain everything literally—it's philosophy expressed through pure cinema." },
    { q: 'Is HAL 9000 a villain?', a: "HAL is more tragic than villainous—a sentient AI caught between conflicting programming directives. His breakdown represents the danger of creating conscious machines without fully understanding consciousness itself, making him one of cinema's most complex artificial characters and a warning about AI development." },
    { q: 'What influenced the film\'s visual style?', a: "Kubrick collaborated with special effects pioneer Douglas Trumbull to create groundbreaking practical effects. The rotating sets for zero-gravity sequences and the psychedelic Star Gate were revolutionary, influencing every sci-fi film since and proving practical effects can achieve timeless realism." },
    { q: 'Why is there so little dialogue?', a: "Kubrick deliberately minimized dialogue to emphasize visual storytelling and the insignificance of human communication on a cosmic scale. The silence creates a meditative, almost documentary-like realism that makes the film feel timeless and forces viewers to engage visually and emotionally." }
  ],
  "Blade Runner": [
    { q: 'What is Blade Runner about?', a: "In dystopian 2019 Los Angeles, ex-cop Rick Deckard hunts illegal replicants—artificial humans seeking their creator to extend their brief lifespans. The film questions what defines humanity, memory, consciousness, and mortality in a visually stunning neo-noir world that pioneered cyberpunk aesthetics." },
    { q: 'Is Deckard a replicant?', a: "Director Ridley Scott has stated Deckard is a replicant, evidenced by the unicorn dream matching Gaff's origami. However, the original cut left it ambiguous, and Harrison Ford maintains Deckard is human—making it cinema's most enduring debate and adding layers of meaning to every viewing." },
    { q: 'What makes the visual aesthetic so influential?', a: "Blade Runner pioneered the 'cyberpunk' aesthetic—neon-soaked rain, massive corporations, Eastern cultural fusion, and decaying urban sprawl. Its influence extends from films like The Matrix and Ghost in the Shell to video games like Cyberpunk 2077, defining how we visualize dystopian futures." },
    { q: 'Why are there multiple versions?', a: "At least seven versions exist due to studio interference, director's cuts, and Scott's evolving vision. The Final Cut (2007) is considered definitive, removing the studio-mandated happy ending and voiceover, restoring Ridley Scott's original noir vision of moral ambiguity." },
    { q: 'What is Roy Batty\'s "Tears in Rain" speech?', a: "Actor Rutger Hauer improvised one of cinema's most poignant moments—a dying replicant reflecting on memories that will be lost forever. It encapsulates the film's meditation on mortality, consciousness, and what it means to truly live, proving artificial beings can be more human than humans." }
  ],
  "The Matrix": [
    { q: 'What is The Matrix about?', a: "Hacker Neo discovers reality is a simulation created by sentient machines to pacify humans while harvesting their bioelectric energy. Freed by rebels, he must embrace his role as 'The One' prophesied to end the war between humans and machines in this genre-defining cyberpunk action thriller." },
    { q: 'What does the red pill vs blue pill symbolize?', a: "The red pill represents accepting harsh truth and reality, while the blue pill offers comfortable ignorance. It's become a cultural metaphor for awakening to uncomfortable truths versus remaining in denial—referenced across philosophy, politics, and popular culture as shorthand for enlightenment." },
    { q: 'How did it revolutionize action cinema?', a: "The Wachowskis popularized 'bullet time' photography, wire-fu martial arts, and innovative camera techniques. The lobby shootout and rooftop bullet-dodge became iconic, influencing action choreography for decades and proving intellectual sci-fi and spectacular action could coexist perfectly." },
    { q: 'What philosophical ideas does it explore?', a: "The film draws from Plato's Cave allegory, Baudrillard's simulation theory, Buddhist concepts of Maya (illusion), and questions about free will, reality, consciousness, and what it means to be truly awake or alive—making it philosophy 101 disguised as blockbuster entertainment." },
    { q: 'Why did the sequels divide audiences?', a: "While The Matrix Reloaded and Revolutions expanded the mythology and philosophy, their complexity and departure from the original's tight focus polarized fans. The Architect scene alone sparked endless debates about fate versus choice, proving ambition doesn't always equal clarity." }
  ],
  "Alien": [
    { q: 'What is Alien about?', a: "The crew of commercial spaceship Nostromo investigates a distress signal, unknowingly bringing aboard a parasitic alien organism. As it hunts them through dark corridors, the film becomes a masterclass in survival horror and claustrophobic terror that redefined sci-fi horror forever." },
    { q: 'What inspired the xenomorph design?', a: "Artist H.R. Giger created the biomechanical alien, merging organic and mechanical elements into a sexually threatening creature. Its lifecycle—facehugger, chestburster, adult—was designed to invoke primal fears of violation and parasitism, creating cinema's most terrifying extraterrestrial." },
    { q: 'Why is Ripley such an iconic character?', a: "Ellen Ripley (Sigourney Weaver) broke genre conventions as a female protagonist defined by competence, not romance. She's vulnerable yet determined, scared yet resourceful—a fully realized human fighting for survival who became a feminist icon and action hero template." },
    { q: 'How did Ridley Scott create the suspense?', a: "Scott used darkness, confined spaces, dripping water, and Jerry Goldsmith's unsettling score. The alien is rarely shown fully, letting imagination amplify fear. The slow-burn pacing makes every encounter terrifying, proving horror comes from anticipation, not gore." },
    { q: 'What themes does Alien explore?', a: "Beyond horror, it explores corporate exploitation (the crew are expendable), sexual terror (the alien's reproductive cycle), and class tensions (working-class crew versus corporate interests prioritizing profit over lives)—making it social commentary wrapped in sci-fi horror." }
  ],
  "Interstellar": [
    { q: 'What is Interstellar about?', a: "As Earth faces extinction from blight, ex-pilot Cooper leads a mission through a wormhole seeking habitable planets. The film explores relativity, black holes, and the transcendent power of love across dimensions—Nolan's most emotional epic blending hard science with human connection." },
    { q: 'Is the science accurate?', a: "Physicist Kip Thorne ensured scientific accuracy. The black hole Gargantua's visualization was so accurate it led to scientific papers. Time dilation, gravitational effects, and wormhole depictions follow theoretical physics—though the 'love transcends dimensions' is artistic license for emotional resonance." },
    { q: 'What is the Tesseract scene?', a: "Inside the black hole, Cooper enters a five-dimensional tesseract allowing him to communicate across time through gravity. It visualizes higher dimensions, letting him send quantum data to his daughter Murph to solve humanity's survival equation—science fiction's most stunning representation of relativity." },
    { q: 'Why is the soundtrack so powerful?', a: "Hans Zimmer's organ-driven score (composed before seeing footage) captures cosmic grandeur and intimate emotion. The ticking clock motif during the water planet creates unbearable tension—each tick represents a day passing on Earth, making time itself a terrifying antagonist." },
    { q: 'What does the ending mean?', a: "Cooper's rescue by evolved future humans (possibly descended from the mission) and reunion with an elderly Murph completes a time loop. He then ventures to find Brand, honoring their connection—suggesting love and human connection are as fundamental as physics in shaping the universe." }
  ],
  "Terminator 2: Judgment Day": [
    { q: 'What is Terminator 2 about?', a: "Ten years after the first film, Skynet sends an advanced liquid-metal T-1000 to kill young John Connor. The resistance reprograms a T-800 (Schwarzenegger) to protect him, leading to an explosive race to prevent Judgment Day itself—the rare sequel that surpasses the original." },
    { q: 'How did T2 revolutionize visual effects?', a: "The T-1000's liquid metal effects pioneered groundbreaking CGI. Robert Patrick's chrome morphing was seamlessly integrated with practical effects—the CGI held up so well it still looks impressive today, setting the standard for digital characters and proving CGI could be photorealistic." },
    { q: 'Why is the T-800\'s arc so emotional?', a: "Arnold's Terminator transforms from killing machine to father figure, learning humanity from John Connor. The 'I know now why you cry' moment and his self-sacrifice to prevent future Skynet technology make a robot's death profoundly moving—proving machines can learn compassion." },
    { q: 'What themes does it explore?', a: "T2 examines fate versus free will ('No fate but what we make'), the danger of nuclear proliferation, and whether violence can prevent violence. Sarah Connor's militant transformation questions how far we'll go to protect the future, making it both action spectacle and moral examination." },
    { q: 'How did it impact action cinema?', a: "The truck chase, helicopter pursuit, and steel mill showdown set new standards for practical stunts and effects integration. Its mix of spectacle and character development influenced action blockbusters from The Dark Knight to Mad Max: Fury Road, proving action films could have emotional depth." }
  ],
  "Inception": [
    { q: 'What is Inception about?', a: "Master thief Cobb extracts secrets from dreams. Offered redemption, he must perform 'inception'—planting an idea deep in someone's subconscious. The team descends through dream layers where time dilates and reality becomes dangerously unstable in Nolan's most structurally complex thriller." },
    { q: 'Does the top fall at the end?', a: "Nolan deliberately cuts before revealing if Cobb's totem falls (reality) or spins forever (dream). The point is Cobb no longer cares—he chooses his children over obsessing about reality, finding peace regardless of which world he's in, making the answer irrelevant to his arc." },
    { q: 'How does time dilation work?', a: "Each dream level experiences time differently—minutes become hours become years. In limbo, decades can pass. This creates urgency (the van falling) and tragedy (Cobb and Mal's lost decades), making the 'kick' synchronization brilliantly complex and tense across multiple timelines." },
    { q: 'What makes the action sequences unique?', a: "The rotating hotel corridor fight in zero gravity used practical effects—a spinning set. Dream logic allows physics-defying action (city folding, architecture manipulation) while maintaining internal consistency and consequence, proving imaginative action doesn't require abandoning coherent rules." },
    { q: 'What does the film say about cinema?', a: "Inception is meta-commentary on filmmaking itself—Cobb is the director, extractors are the crew, marks are the audience. Movies plant ideas in our minds, blur reality, and rely on our emotional investment to work—we willingly suspend disbelief, making cinema a shared dream." }
  ],
  "Arrival": [
    { q: 'What is Arrival about?', a: "When twelve alien spacecraft land worldwide, linguist Dr. Louise Banks is recruited to communicate with them. As she deciphers their circular language, she gains a profound gift—perceiving time non-linearly, seeing her entire life simultaneously in Denis Villeneuve's contemplative masterpiece." },
    { q: 'How does the language change Louise?', a: "The Heptapod language literally rewires her brain to experience time as they do—past, present, and future as one. This explains her 'flashbacks' (actually flash-forwards) of her daughter, revealing she knows the tragic future yet chooses to live it, exploring determinism versus free will." },
    { q: 'What is the film\'s message about communication?', a: "Arrival argues language shapes thought (the Sapir-Whorf hypothesis). By learning the aliens' language, Louise thinks differently—proving communication can transcend conflict if we genuinely try to understand rather than fear the unknown, making it a parable for human connection." },
    { q: 'Why is it considered cerebral sci-fi?', a: "Unlike action-driven alien films, Arrival prioritizes linguistics, philosophy, and emotion. Its focus on communication over confrontation, time perception over spectacle, and grief over victory makes it profoundly human despite the alien premise—proving sci-fi can be intimate and meditative." },
    { q: 'What is the significance of the circular structure?', a: "The film's non-linear narrative mirrors Heptapod language and Louise's perception. The ending reveals the beginning, creating a loop—just as their language has no start or end, emphasizing acceptance of fate and the beauty of choice within predestination." }
  ],
  "Star Wars: The Empire Strikes Back": [
    { q: 'What is The Empire Strikes Back about?', a: "After the Rebels' Hoth base is destroyed, Luke trains with Yoda while Han and Leia are hunted by Vader and Boba Fett. Luke confronts Vader in Cloud City, learning the devastating truth: Vader is his father, Anakin Skywalker—cinema's most iconic twist." },
    { q: 'Why is it considered the best Star Wars film?', a: "Empire balances action, character development, and emotional depth. It's darker, more mature—heroes fail, lose limbs, get frozen in carbonite. The revelation of Vader's identity remains one of cinema's greatest twists, recontextualizing the entire saga and proving sequels can surpass originals." },
    { q: 'What makes Yoda iconic?', a: "Frank Oz's puppet performance gave Yoda wisdom, humor, and depth. His reversal of expectations (the great Jedi is a tiny, ancient creature) and philosophy ('Do or do not, there is no try') made him Star Wars' spiritual core and one of cinema's most quoted characters." },
    { q: 'How did it deepen the mythology?', a: "Empire introduced Force visions, training, and the dark side's seduction. Vader's fatherhood twist transformed him from generic villain to tragic figure, setting up the redemption arc that defines the original trilogy's emotional heart and made Star Wars operatic drama." },
    { q: 'What influence did Irvin Kershner have?', a: "Director Kershner brought character intimacy Lucas lacked—the Han/Leia romance feels genuine, Luke's failure is painful. He proved Star Wars could be more than space fantasy; it could have Shakespearean tragedy and emotional complexity, elevating the entire franchise." }
  ],
  "Blade Runner 2049": [
    { q: 'What is Blade Runner 2049 about?', a: "Blade runner K discovers evidence that replicants can reproduce—a secret that could destabilize society. His search for the child leads to Deckard, revelations about his own identity, and questions about what makes life meaningful in Denis Villeneuve's stunning sequel." },
    { q: 'How does it expand the original?', a: "While honoring the original's themes, 2049 explores new territory—replicants seeking purpose beyond their programming, the question of 'born' versus 'made' souls, and whether K's manufactured memories make his heroism less real, proving sequels can deepen rather than repeat." },
    { q: 'Why is the cinematography praised?', a: "Roger Deakins finally won his Oscar for 2049's stunning visuals—radioactive Las Vegas, giant holographic ads, and desolate cityscapes. Every frame is a painting, using color (orange wasteland, purple noir city) to convey emotional states and create visual poetry." },
    { q: 'Is K a hero even though he\'s "just" a replicant?', a: "K's arc questions if being 'special' matters—he believes he's the miracle child, discovers he isn't, yet chooses sacrifice anyway. His heroism comes from choice, not destiny, arguing that free will defines meaning, not origin—making him profoundly heroic." },
    { q: 'How was it received?', a: "Critics hailed it as a rare sequel matching its predecessor, praising Villeneuve's direction, Deakins' cinematography, and its philosophical depth. Though it underperformed financially, it's considered a modern sci-fi masterpiece—proof thoughtful blockbusters can exist despite box office." }
  ]
};

const SciFiSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title || movie.title;
  const faqs = sciFiMovieFAQs[title] || [
    { q: 'What makes this sci-fi film unique?', a: "Groundbreaking visual effects, complex themes, and visionary storytelling define this science fiction masterpiece." },
    { q: 'Where can I watch this film?', a: "Available on major streaming platforms and physical media; check availability in your region." },
    { q: 'Who directed this movie?', a: "Directed by a visionary filmmaker known for pushing the boundaries of science fiction cinema." }
  ];

  return (
    <motion.section
      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cyan-700/50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl font-light text-cyan-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Info size={20} className="sm:w-6 sm:h-6" />
        <span className="hidden sm:inline">Frequently Asked Questions About {title}</span>
        <span className="sm:hidden">FAQ About {title}</span>
      </h2>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        Deep dive into {title} with insider knowledge, production details, and insights about this visionary sci-fi masterpiece.
      </p>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-cyan-200 mb-3 sm:mb-4 leading-relaxed">
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

export default SciFiSEOFAQSection;
