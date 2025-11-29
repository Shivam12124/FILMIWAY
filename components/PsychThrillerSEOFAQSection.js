// components/PsychThrillerSEOFAQSection.js - FULL DETAILED FAQS (5 PER MOVIE)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

const psychThrillerMovieFAQs = {
  "The Silence of the Lambs": [
    { 
      q: 'How much screen time does Anthony Hopkins actually have?', 
      a: "Remarkably, Anthony Hopkins appears on screen for only slightly more than 16 minutes. Despite this incredibly brief screen time, his performance as Hannibal Lecter was so commanding and terrifying that he won the Academy Award for Best Actor. It remains one of the shortest performances ever to win in the leading actor category, proving that impact matters more than duration." 
    },
    { 
      q: 'What is the symbolism of the Death\'s Head Moth?', 
      a: "The Death's Head Hawkmoth, placed in the mouths of victims, symbolizes 'transformation.' Buffalo Bill is obsessed with the idea of change—metamorphosing from a man into a woman, just as a caterpillar becomes a moth. It represents his desire to shed his own skin and become something 'beautiful,' contrasting his grotesque methods with the natural beauty of the insect." 
    },
    { 
      q: 'Did the FBI actually cooperate with the film?', 
      a: "Yes, the FBI fully cooperated with the production, seeing it as a potential recruiting tool for female agents. Jodie Foster spent time at the FBI Academy in Quantico to study real trainees. However, the character of Jack Crawford is based on John Douglas, the real-life pioneer of criminal profiling, who inspired the entire 'mindhunter' genre." 
    },
    { 
      q: 'Why does Hannibal Lecter never blink?', 
      a: "Anthony Hopkins decided early on that Hannibal Lecter should rarely blink. He believed that reptiles don't blink when they are about to strike, and he wanted Lecter to have that same predatory, hypnotic quality. He essentially treats Clarice Starling not just as a conversational partner, but as a source of fascination that he is studying with unblinking intensity." 
    },
    { 
      q: 'What makes the ending line so memorable?', 
      a: "The final line, 'I'm having an old friend for dinner,' is a brilliant double entendre. On the surface, it sounds like a polite social engagement. In reality, it confirms that Lecter is about to eat his nemesis, Dr. Chilton. It ends the horrific film on a moment of dark, sophisticated humor that perfectly encapsulates Lecter's character." 
    }
  ],
  "Fight Club": [
    { 
      q: 'What is the "Tyler Durden flash" technique?', 
      a: "Before Tyler Durden (Brad Pitt) is properly introduced as a character, director David Fincher inserts him into the film as single-frame 'subliminal' flashes (about 1/24th of a second). He appears during moments where the Narrator is frustrated or insomniac. This visual technique foreshadows the twist: Tyler is a projection of the Narrator's mind, bleeding into his reality before taking it over completely." 
    },
    { 
      q: 'How does the film critique consumerism?', 
      a: "The film famously mocks the 'IKEA nesting instinct'—the idea that buying furniture and goods defines your personality. The destruction of the Narrator's perfect condo is the inciting incident that frees him from his material possessions. Tyler Durden's philosophy is that 'the things you own end up owning you,' suggesting that modern men have been emasculated by becoming consumers rather than hunters or creators." 
    },
    { 
      q: 'Is the chemical burn scene scientifically accurate?', 
      a: "The reaction between lye and water portrayed in the film is chemically accurate—it creates an exothermic reaction that causes severe chemical burns. However, the production team used safe prosthetic makeup for the scene. The scene serves as a rite of passage, forcing the Narrator to 'hit bottom' and accept pain as a reality check, rather than numbing himself with consumer goods." 
    },
    { 
      q: 'Why is Marla Singer pivotal to the plot?', 
      a: "Marla Singer is the catalyst for the entire story. The Narrator creates Tyler Durden because he cannot handle his attraction to Marla and his own inability to connect with her. Tyler is essentially the version of himself that can sleep with Marla. In the end, realizing he cares for Marla is what allows him to reject Tyler and reintegrate his fractured psyche." 
    },
    { 
      q: 'What is the significance of the final shot?', 
      a: "The final shot of the buildings collapsing while the Pixies' 'Where Is My Mind?' plays is a symbol of total reset. It represents the destruction of the financial credit record (Project Mayhem's goal) and the destruction of the Narrator's old life. Holding Marla's hand signifies that while civilization might be crumbling, he has finally found a genuine human connection amidst the chaos." 
    }
  ],
  "Memento": [
    { 
      q: 'How does the color vs. black-and-white structure work?', 
      a: "The film uses two distinct timelines. The color sequences tell the story in *reverse* chronological order (moving backward from the end). The black-and-white sequences tell the story in *forward* chronological order (moving forward from the beginning). The two timelines converge at the end of the film, meeting in the middle to reveal the pivotal twist about who killed Leonard's wife." 
    },
    { 
      q: 'Why are the tattoos an "unreliable narrator"?', 
      a: "Leonard relies on his tattoos as 'facts' because he cannot make new memories. However, the film reveals that he manipulates his own notes. He deliberately destroys evidence and writes lies on his body to keep his 'quest' for vengeance going. The tattoos prove that objective truth doesn't exist for him; he is voluntarily editing his own reality to give his life purpose." 
    },
    { 
      q: 'Did Guy Pearce actually have amnesia?', 
      a: "No, but to help Guy Pearce understand the confusion of the character, Christopher Nolan insisted that Pearce not know the full chronological story during filming. Pearce had to act each scene with no emotional continuity from the 'previous' scene (which hadn't been filmed yet), perfectly mimicking the disorientation of someone living in a perpetual 'now.'" 
    },
    { 
      q: 'What is the "Sammy Jankis" story really about?', 
      a: "Leonard tells the story of Sammy Jankis, a man who accidentally killed his diabetic wife with insulin shots due to his amnesia. The twist reveals that Sammy Jankis was a real con man, but the *killing* was actually done by Leonard himself. Leonard projected his own guilt onto the story of Sammy to protect his mind from the trauma of knowing he killed his own wife." 
    },
    { 
      q: 'What is the meaning of the line "We all need mirrors"?', 
      a: "The quote 'We all need mirrors to remind ourselves who we are' sums up the film's theme of identity. Without memory, Leonard has no internal self, so he uses external 'mirrors' (tattoos, photos, notes) to construct a persona. It suggests that identity is not inherent, but a story we constantly tell ourselves and reinforce through our environment." 
    }
  ],
  "Se7en": [
    { 
      q: 'Why is it always raining in the city?', 
      a: "Director David Fincher wanted the city (never named, but modeled on New York/Philadelphia) to feel oppressive, decaying, and hostile. The constant rain adds texture, makes the streets look slick and grimy, and forces the characters into claustrophobic indoor spaces. The rain finally stops only for the climax in the desert, exposing the characters to the blinding, unforgiving light of the truth." 
    },
    { 
      q: 'How were the "Sin" crime scenes designed?', 
      a: "The crime scenes are designed as tableaus, almost like art installations. For 'Sloth,' the makeup team spent 14 hours making the actor look emaciated and decayed. For 'Gluttony,' they used crates of cockroaches. Fincher treated the killer, John Doe, not as a butcher but as a twisted preacher leaving sermons behind. The gore is often implied rather than shown, making it more psychological." 
    },
    { 
      q: 'Why did the studio want to change the ending?', 
      a: "Studio executives were terrified of the 'head in a box' ending, considering it too depressing for a mainstream audience. They suggested replacing the head with a dog's head or having Mills save his wife. Brad Pitt and David Fincher refused to make the movie unless the original, bleak ending remained. They argued that the tragedy was necessary to complete the killer's masterpiece of the Seven Deadly Sins." 
    },
    { 
      q: 'What is the significance of the library scene?', 
      a: "The library scene, set to Bach's 'Air on the G String,' is the only moment of peace and culture in the film. It contrasts the chaos of the streets with the ordered, ancient knowledge of the books. It highlights Detective Somerset's tragedy: he is a man of intellect and culture trapped in a world that has descended into barbarism, trying to find reason in madness." 
    },
    { 
      q: 'How does John Doe justify his crimes?', 
      a: "John Doe doesn't see himself as a murderer; he sees himself as a messenger from God chosen to 'turn each sin against the sinner.' He believes society tolerates these sins (greed, lust, pride) every day. His goal wasn't just to kill, but to shock the world out of its apathy. The terrifying part of the film is that, in his final monologue, his logic creates a twisted kind of sense." 
    }
  ],
  "Shutter Island": [
    { 
      q: 'What is the meaning of the final line?', 
      a: "Teddy asks, 'Which would be worse: to live as a monster, or to die as a good man?' This confirms that the treatment *did* work—he remembers he is Andrew Laeddis and that he killed his wife. However, the guilt is too heavy to bear. He deliberately pretends to have relapsed so the doctors will lobotomize him. He chooses to 'die' (lose his mind) as the hero Teddy, rather than live with the memory of being the monster Andrew." 
    },
    { 
      q: 'What clues point to the twist early on?', 
      a: "Scorsese hides clues everywhere. The guards get nervous when Teddy asks for his gun (because he's a patient). Patients laugh or glance at the doctors when Teddy interrogates them. The 'Law of 4' anagram is hinted at repeatedly. Even the way Teddy lights cigarettes (matches, never a lighter) is a control mechanism by the orderlies. Rewatching the film reveals a completely different narrative layer." 
    },
    { 
      q: 'How does the weather reflect Teddy\'s mental state?', 
      a: "The massive hurricane that hits the island mirrors the turmoil in Teddy's mind. As he gets closer to the traumatic truth, the storm intensifies, representing his psychological defenses breaking down. The 'storm' is his denial fighting against the reality of what he did. When the storm clears at the end, he has reached clarity, but it is a clarity he cannot live with." 
    },
    { 
      q: 'Is the lighthouse actually a lab?', 
      a: "No. throughout the film, Teddy believes the lighthouse is where they perform illegal brain surgeries. When he finally breaks in, he finds it is just an empty room. This is the shattering of his conspiracy theory. The lighthouse represents the 'illumination' of truth—there is no conspiracy, no evil Nazi experiments, only the sad reality of his own broken life." 
    },
    { 
      q: 'What is the "Rule of 4"?', 
      a: "The 'Rule of 4' refers to the anagrams in the names. 'Edward Daniels' rearranges to 'Andrew Laeddis' (his real name), and 'Rachel Solando' rearranges to 'Dolores Chanal' (his wife's name). The puzzle was created by his own mind to allow him to interact with the people he hurt/lost without acknowledging who they really are." 
    }
  ],
  "Black Swan": [
    { 
      q: 'How much dancing did Natalie Portman actually do?', 
      a: "Natalie Portman trained for a year before filming, losing 20 pounds and training 5-8 hours a day. While she performed the upper-body movements and acting, professional ballerinas (like Sarah Lane) performed the complex footwork and wide shots. The editing seamlessly blends them, but Portman's physical transformation and exhaustion were very real." 
    },
    { 
      q: 'What is the "Doppelgänger" motif?', 
      a: "The film is full of mirrors and reflections that move independently of Nina. She constantly sees a darker version of herself (sometimes hallucinated as Mila Kunis's character). This represents the Jungian 'Shadow Self'—the repressed, sexual, and chaotic side of her personality that she must embrace to dance the Black Swan, but which ultimately consumes her sanity." 
    },
    { 
      q: 'Is the body horror (skin peeling) real?', 
      a: "The scenes where Nina peels off her skin or feathers grow from her back are hallucinations. They represent her psychological fracturing manifesting as physical pain. She is literally 'tearing herself apart' for perfection. The transformation into the bird is a metaphor for the artist sacrificing their humanity to become the art itself." 
    },
    { 
      q: 'What is the role of the mother?', 
      a: "Barbara Hershey plays the suffocating 'stage mom' who lives vicariously through Nina. She treats Nina like a child (pink room, music box), preventing her from becoming a sexually mature woman. Nina's rebellion against her mother is necessary for her to tap into the Black Swan energy, but it also untethers her from the only reality she has ever known." 
    },
    { 
      q: 'Does Nina die at the end?', 
      a: "The ending is ambiguous. Nina stabs herself with a glass shard (thinking she stabbed her rival), dances the perfect finale, and bleeds out as the screen fades to white. Whether she literally dies or just metaphorically sacrifices herself for the role, the result is the same: she achieved 'Perfection,' which was the only thing that mattered to her." 
    }
  ],
  "The Machinist": [
    { 
      q: 'How much weight did Christian Bale lose?', 
      a: "Christian Bale lost a staggering 63 pounds (28 kg) for the role, dropping to 120 pounds. He reportedly lived on a diet of one apple and a can of tuna per day, alongside coffee and cigarettes. His emaciated frame is not CGI; it is one of the most extreme examples of method acting in cinema history. He wanted to go even lower, but the filmmakers stopped him for medical reasons." 
    },
    { 
      q: 'What is the significance of the "Post-it" notes?', 
      a: "The Post-it notes (specifically the game of Hangman) represent Trevor's subconscious trying to force him to admit his guilt. The blank spaces eventually spell out 'KILLER.' Trevor is playing a game against himself, leaving clues for a mystery that he already knows the answer to but refuses to acknowledge." 
    },
    { 
      q: 'Is Ivan a real person?', 
      a: "No, Ivan (the bald man with the toe-thumb) is a hallucination. He represents Trevor's suppressed conscience. Ivan appears whenever Trevor is getting close to the truth or needing to be punished. His physical deformity (the toe-thumb) comes from a passing comment Trevor heard years ago, synthesized by his tired brain into a monster." 
    },
    { 
      q: 'Why hasn\'t Trevor slept in a year?', 
      a: "The insomnia is a manifestation of extreme guilt. Trevor killed a young boy in a hit-and-run accident a year ago and drove away. His mind has repressed the memory, but his body refuses to let him rest. The 'year' of sleeplessness corresponds exactly to the time since the accident. He can only sleep at the very end, once he turns himself in and accepts his punishment." 
    },
    { 
      q: 'What is the recurring "1:30" imagery?', 
      a: "Trevor constantly sees the time 1:30 PM. It appears on clocks, weighing scales, and in airport scenes. This was the exact time of the hit-and-run accident. It is a traumatic timestamp frozen in his mind, haunting him because his life essentially stopped at that exact minute." 
    }
  ],
  "Oldboy": [
    { 
      q: 'How was the hallway hammer fight filmed?', 
      a: "The legendary corridor fight scene was filmed in one continuous take (a 'oner') with no hidden cuts. It took 17 takes over three days to get right. The exhaustion you see on the actor Choi Min-sik is real. It is meant to show that violence isn't cool or effortless like in action movies; it is messy, tiring, and brutal." 
    },
    { 
      q: 'Did he really eat a live octopus?', 
      a: "Yes. In the sushi bar scene, Oh Dae-su eats a live octopus whole. This is a real delicacy in Korea (San-nakji), but usually cut into pieces. Actor Choi Min-sik, a Buddhist and vegetarian, had to eat four live octopuses to get the shot. He reportedly prayed for each one before eating it. The scene represents his return to raw, animalistic life after 15 years of imprisonment." 
    },
    { 
      q: 'What is the "Greek Tragedy" influence?', 
      a: "The film is a modern retelling of the Oedipus myth. The villain, Woo-jin, orchestrates a plot where Oh Dae-su falls in love with and sleeps with his own daughter, unaware of her identity. It deals with the themes of forbidden knowledge, incest, and inescapable fate. Like Oedipus, once Dae-su learns the truth, he mutilates himself (cutting out his tongue) in penance." 
    },
    { 
      q: 'Why was he imprisoned for 15 years?', 
      a: "He was imprisoned to wait for his daughter to grow up. The punishment wasn't the imprisonment itself; the imprisonment was just the 'prep time' to set up the ultimate torture: tricking him into incest. Woo-jin wanted Dae-su to experience the same pain of loving a forbidden relative that Woo-jin felt for his own sister." 
    },
    { 
      q: 'What is the significance of the hypnosis?', 
      a: "Hypnosis is the plot device that makes the impossible plan work. It suggests that humans are easily programmed and that memory is fragile. The film ends with Dae-su visiting the hypnotist again to split his mind—one part knowing the secret, the other living in blissful ignorance—so he can stay with his daughter/lover. It questions whether happiness based on a lie is valid." 
    }
  ],
  "Taxi Driver": [
    { 
      q: 'Was the "You talkin\' to me?" line scripted?', 
      a: "No, the script simply said: 'Travis talks to himself in the mirror.' Robert De Niro improvised the entire monologue. He took a common tough-guy attitude and repeated it until it became unhinged and rhythmic. It is one of the most famous improvised scenes in cinema history, perfectly showing Travis's isolation and his fantasy of confrontation." 
    },
    { 
      q: 'What does the Mohawk hairstyle represent?', 
      a: "The Mohawk marks Travis's final transition from a depressed loner into a soldier on a suicide mission. De Niro suggested the haircut based on what US special forces soldiers would do before going on dangerous commando raids in Vietnam. It signifies that he has declared war on the 'filth' of the city and expects to die in the process." 
    },
    { 
      q: 'Why is the climax so bloody?', 
      a: "The final shootout is shockingly violent and messy. Scorsese desaturated the colors in post-production (making the blood look brownish) to avoid an X-rating, but the impact remains visceral. It shows the ugliness of violence, contrasting with Travis's romanticized view of being a 'hero.' He isn't a clean action star; he is a clumsy, injured man stumbling through a slaughter." 
    },
    { 
      q: 'Is Travis Bickle a hero or a villain?', 
      a: "The film deliberately leaves this ambiguous. He saves a child prostitute (Iris), which is heroic, but he also plotted to assassinate a presidential candidate. The media at the end hails him as a hero, which is Scorsese's satirical jab at society: we celebrate violent men if they target the 'right' people. Deep down, Travis is a ticking time bomb who just got lucky with his target." 
    },
    { 
      q: 'How does the city of New York function as a character?', 
      a: "Shot during a garbage strike and heatwave in the 70s, the New York of *Taxi Driver* is a hellscape of steam, neon, trash, and sleaze. The cinematography emphasizes the 'night animals'—pimps, pushers, and junkies. The environment reflects Travis's internal rot; he sees the city as a sewer that needs to be flushed, projecting his own self-hatred onto the streets." 
    }
  ],
  "The Shining": [
    { 
      q: 'What is the "impossibility" of the Overlook Hotel?', 
      a: "Stanley Kubrick deliberately designed the hotel set to be spatially impossible. Doors lead to nowhere, windows appear on walls that should be internal, and hallways loop illogically. This architectural gaslighting subconsciously disorients the audience, making them feel the same subtle confusion and loss of reality that Jack Torrance feels." 
    },
    { 
      q: 'How did the Steadicam revolutionize the film?', 
      a: "The Shining was one of the first films to extensively use the Steadicam (invented by Garrett Brown). It allowed the camera to float smoothly through the corridors, following Danny on his tricycle at floor level. This created a ghostly, prowling perspective, as if the hotel itself was watching the characters. It replaced shaky handheld shots with an eerie, supernatural stability." 
    },
    { 
      q: 'Was "Here\'s Johnny!" in the script?', 
      a: "No, Jack Nicholson improvised the line while smashing through the door with the axe. He borrowed it from the intro to *The Tonight Show Starring Johnny Carson*. Kubrick, who lived in England, didn't understand the reference at first but kept it because of Nicholson's terrifying delivery. It became the film's most famous line." 
    },
    { 
      q: 'Why did Kubrick require so many takes?', 
      a: "Kubrick was notorious for demanding dozens, sometimes hundreds, of takes for simple scenes. He wanted to break the actors down, stripping away their 'acting' techniques until only raw emotion and exhaustion remained. While effective for the film, it took a severe psychological toll on Shelley Duvall (Wendy), who was reportedly crying and hysterical for months of shooting." 
    },
    { 
      q: 'What does the final photo of 1921 mean?', 
      a: "The final shot shows Jack Torrance smiling in a photo from a July 4th ball in 1921. Kubrick stated that this implies Jack is a reincarnation of an earlier caretaker. The hotel 'absorbs' the souls of those who die there. Jack has 'always been the caretaker,' trapped in an eternal cycle of violence and service to the evil entity that is the Overlook Hotel." 
    }
  ]
};

const PsychThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  // Fallback if movie title not found
  const faqs = psychThrillerMovieFAQs[title] || [
    { q: 'What makes this psychological thriller unique?', a: "An intriguing plot, strong performances, and intense psychological suspense." },
    { q: 'Where can I watch this film?', a: "Available on major streaming services; check your region for specifics." },
    { q: 'Who directed the movie?', a: "A renowned filmmaker known for psychological thrillers." },
    { q: 'Is there a major twist?', a: "Psychological thrillers often rely on unreliable narrators and twists. Watch closely!" },
    { q: 'Is it horror or thriller?', a: "It blurs the lines, using psychological horror elements to build tension without relying on jump scares." }
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
          <h2 className="text-2xl sm:text-3xl font-light text-purple-100 flex items-center gap-3">
            <Info size={24} className="text-purple-400" />
            <span>FAQs: Understanding <span className="font-semibold text-purple-300">{title}</span></span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl">
            Dive deeper into the psyche, the production secrets, and the mind-bending twists of {title}. 
            Warning: Some answers may contain spoilers.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            className={`bg-gray-800/40 rounded-xl overflow-hidden border transition-all duration-300 ${
              openIndex === idx ? 'border-purple-500/50 bg-gray-800/60' : 'border-gray-700/50 hover:border-purple-500/30'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <span className="text-base sm:text-lg font-medium text-purple-100 pr-4">
                {faq.q}
              </span>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
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

export default PsychThrillerSEOFAQSection;