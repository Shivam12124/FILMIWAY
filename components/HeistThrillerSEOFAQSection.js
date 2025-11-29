// components/HeistThrillerSEOFAQSection.js - FULL DETAILED FAQS (5 PER MOVIE)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

const heistThrillerMovieFAQs = {
  "Heat": [
    { 
      q: 'How did the actors prepare for the bank shootout scene?', 
      a: "The downtown LA shootout is famous for its tactical realism. The actors, including Val Kilmer and Robert De Niro, underwent months of rigorous weapons training with Andy McNab, a former British SAS soldier. They practiced live-fire drills to master reloading and movement. The result was so technically perfect that the clip of Val Kilmer reloading his rifle under fire has been shown to US Marine recruits as a textbook example of weapons handling." 
    },
    { 
      q: 'What is the significance of the "coffee shop" scene?', 
      a: "This scene marked the first time acting legends Al Pacino and Robert De Niro appeared on screen together in film history. It was shot without rehearsal to keep the tension fresh. The conversation establishes the film's central theme: the 'cop' and the 'criminal' are not opposites, but mirror images of each other—both professionals solely dedicated to their craft, knowing they will likely have to kill the other." 
    },
    { 
      q: 'Why did Michael Mann choose to shoot the film primarily at night?', 
      a: "Director Michael Mann wanted to capture a specific 'nocturnal poetry' of Los Angeles. He avoided using traditional soundstages, shooting almost entirely on location. He utilized specific film stocks and lighting to capture the depth of the night sky and the neon glow of the city, creating a visual style now known as 'Mann Blue'—a cold, metallic aesthetic that emphasizes the isolation of the characters." 
    },
    { 
      q: 'Is the character of Waingro significant beyond being a villain?', 
      a: "Waingro represents the 'chaos factor.' In Neil McCauley's (De Niro) disciplined world, everything is calculated and precise. Waingro is the unpredictable variable—a serial killer and sociopath who lacks discipline. His inclusion in the crew is the 'loose thread' that eventually unravels Neil's entire perfectly constructed life, proving that no amount of planning can account for pure human chaotic evil." 
    },
    { 
      q: 'What is the meaning of the final shot of the film?', 
      a: "The final image of Vincent (Pacino) holding the hand of the dying Neil (De Niro) underlines the tragedy of their relationship. They were the only two people who truly understood each other. In a world of broken marriages and shallow connections, their bond—forged in opposition—was the most genuine. The ending isn't a victory for the police; it's a moment of mourning for a worthy adversary." 
    }
  ],

  "The Italian Job": [
    { 
      q: 'Why were Mini Coopers chosen for the getaway vehicles?', 
      a: "The Mini Cooper was chosen because it was a symbol of 1960s 'Cool Britannia' and was small enough to navigate the narrow arcades, sewers, and rooftops of Turin. BMC (the manufacturer) initially refused to donate cars for the film, so the production crew bought them at trade price. The cars' agility allowed for stunts that would have been impossible with standard sedans, revolutionizing the car chase genre." 
    },
    { 
      q: 'How did they film the traffic jam scenes in Turin?', 
      a: "The massive traffic jam paralyzing the city was real—but intentional. The production team, with the cooperation of the Fiat boss Gianni Agnelli (who loved the script), was allowed to actually block major parts of Turin. The chaos shown on screen is genuine Italian traffic confusion, captured to emphasize the scale of the heist's diversion tactic." 
    },
    { 
      q: 'What does the cliffhanger ending represent?', 
      a: "The literal cliffhanger—the bus teetering over the edge of the Alps—is a perfect metaphor for the film's anti-establishment tone. The thieves have the gold, but they can't reach it without losing their lives. It's a cynical, humorous cosmic joke. Although a sequel was discussed to resolve it, the ambiguous ending has become legendary for capturing the spirit of a gamble that didn't quite pay off." 
    },
    { 
      q: 'Is the film critical of the British class system?', 
      a: "Yes, satirically. The heist is funded by the aristocratic Mr. Bridger (who runs the prison like a king) but executed by the working-class Cockney Charlie Croker. The film contrasts the rigid, pompous British establishment with the scrappy, innovative energy of the working class, suggesting that true ingenuity comes from the streets, not the palaces." 
    },
    { 
      q: 'What is the "Bloody Doors" line?', 
      a: "Michael Caine's line, 'You were only supposed to blow the bloody doors off!' was improvised in frustration during a take where the explosion was too large. It has since become one of the most famous quotes in British cinema history, perfectly encapsulating the character's exasperation with his team's lack of subtlety." 
    }
  ],

  "Ocean's Eleven": [
    { 
      q: 'How does the narrative structure enhance the heist reveal?', 
      a: "The film uses a 'lying flashback' or concealed narrative technique. The audience is shown the planning stages, but key details (like the SWAT team involvement) are deliberately withheld. This allows the audience to be tricked alongside the villain, Terry Benedict. The climax works because we realize we were watching the distraction, not the main event, recontextualizing the entire third act." 
    },
    { 
      q: 'What is the significance of the fountain scene at the end?', 
      a: "The final scene in front of the Bellagio fountains is the only moment the entire team stands still together. Set to Debussy's 'Clair de Lune,' it provides a moment of serene beauty and melancholy after the kinetic energy of the heist. It symbolizes the fleeting nature of their victory—they disband one by one, disappearing into the night, emphasizing that they are ghosts in the machine." 
    },
    { 
      q: 'Why is the villain Terry Benedict important to the plot?', 
      a: "A great heist needs a villain who 'deserves' to be robbed. Terry Benedict (Andy Garcia) is portrayed as cold, corporate, and ruthless—he cares more about money than people. This provides the moral justification for the thieves. Stealing from him feels like an act of karma rather than a crime, allowing the audience to root for the criminals without guilt." 
    },
    { 
      q: 'Did the cast actually gamble during filming?', 
      a: "Yes, the cast spent their downtime gambling in the casinos where they were filming. Reportedly, George Clooney was the unlucky one, losing heavily at the blackjack tables, while Brad Pitt and Matt Damon fared better. This off-screen camaraderie and risk-taking translated directly into their on-screen chemistry, giving the 'Rat Pack' dynamic authenticity." 
    },
    { 
      q: 'What is "The Pinch"?', 
      a: "The 'Pinch' is an electromagnetic pulse (EMP) device used to knock out the power grid in Las Vegas. While the science in the film is exaggerated (a device that small couldn't blackout a city), it serves as the crucial plot device that forces the casino to reboot its security systems, creating the 30-second window of darkness necessary for the crew to breach the vault undetected." 
    }
  ],

  "Inside Man": [
    { 
      q: 'How does the opening monologue foreshadow the ending?', 
      a: "Dalton Russell's opening monologue ('I choose my words carefully...') breaks the fourth wall and tells the audience exactly what is happening, but in a way that only makes sense *after* the film ends. He says he is in a 'cell,' which the audience assumes is prison, but is actually the hidden wall inside the bank. It's a brilliant narrative trick that hides the answer in plain sight." 
    },
    { 
      q: 'What distinguishes Inside Man from other bank robbery films?', 
      a: "Unlike most heist films that focus on the money, Inside Man focuses on secrets. The money is almost irrelevant; the true objective is a specific safe deposit box containing evidence of Nazi war crimes. This elevates the stakes from simple greed to historical justice, turning the robber into a paradoxical moral agent exposing the corruption of the 'respectable' banking establishment." 
    },
    { 
      q: 'What is the significance of the "Ring and the Diamond"?', 
      a: "The Cartier ring found in the safe deposit box represents the 'blood money' of the Holocaust. By taking the ring but leaving the diamonds, Dalton Russell sends a message to the bank's founder that he knows the truth. It signifies that some crimes (like genocide profiteering) have no statute of limitations, and that the heist is an act of punishment, not just theft." 
    },
    { 
      q: 'How does Spike Lee inject social commentary into the genre?', 
      a: "Spike Lee uses the hostage situation to explore the racial and cultural tensions of post-9/11 New York. The police's treatment of the Sikh hostage (who they assume is an Arab terrorist) and the diversity of the hostages themselves turn the bank into a microcosm of the city. The film is as much about the melting pot of NYC as it is about the robbery." 
    },
    { 
      q: 'Why does the detective let the robber go?', 
      a: "By the end, Detective Frazier realizes that Dalton Russell has exposed a much greater evil (the Nazi collaborator) and hasn't actually physically harmed anyone. Finding the diamond in his pocket is the confirmation that Russell has 'tipped him' for his services. It's a moment of mutual respect where the lawman acknowledges that sometimes justice requires breaking the law." 
    }
  ],

  "The Town": [
    { 
      q: 'How accurate is the depiction of Charlestown?', 
      a: "The film creates a heightened but culturally grounded depiction of Charlestown, a neighborhood in Boston that once had the highest number of bank robberies per capita in the US. Ben Affleck used local residents as extras and filmed on location to capture the specific accent and insular 'code of silence' that defines the community, giving the film a gritty, documentary-like texture." 
    },
    { 
      q: 'What makes the nun mask heist scene iconic?', 
      a: "The visual of heavily armed men in nun masks creates a disturbing contrast between innocence/piety and brutal violence. It's shocking and memorable. The silence of the scene, followed by the chaotic violence, highlights the professionalism of the crew. It also serves as a metaphor for the characters hiding their sins behind a facade of normalcy." 
    },
    { 
      q: 'What is the role of Jem (Jeremy Renner) in the story?', 
      a: "Jem represents the tragic inevitability of the criminal life. While Doug (Affleck) wants to evolve and escape, Jem is a 'lifer'—he knows nothing else and doesn't want to. His loyalty is absolute, but it's also a cage. Renner's Oscar-nominated performance embodies the dangerous, volatile energy that eventually forces Doug to choose between his past and his future." 
    },
    { 
      q: 'What does the ending signify for Doug?', 
      a: "Doug escapes to Florida, but he is alone. He leaves the money for Claire to better her life, an act of penance. The ending is bittersweet; he physically survives the 'Town,' but he has lost his home, his best friend, and the woman he loves. It suggests that while you can escape your environment, the cost of leaving is leaving a part of yourself behind." 
    },
    { 
      q: 'Why is the "Not your car" note important?', 
      a: "When the crew burns a getaway car, they leave a note on the dashboard saying 'Not your car' for the owner to find. This detail humanizes the robbers—they view themselves as stealing from institutions (banks), not working-class people. It highlights the twisted moral code of the neighborhood: they are criminals, but they still identify with the local community." 
    }
  ],

  "Reservoir Dogs": [
    { 
      q: 'Why do we never see the actual heist?', 
      a: "Budget constraints were the initial reason, but Quentin Tarantino turned it into a masterstroke of storytelling. By skipping the heist and focusing only on the aftermath, the film becomes a character study rather than an action movie. It forces the audience to piece together the events through the conflicting, panicked accounts of the criminals, ramping up the tension and paranoia." 
    },
    { 
      q: 'What is the meaning behind the color-coded names?', 
      a: "The names (Mr. White, Mr. Orange, Mr. Pink, etc.) strip the characters of their identities and humanity, turning them into interchangeable parts of a machine. It emphasizes the 'strictly business' attitude of the boss, Joe Cabot. Ironically, their distinct personalities bleed through the colors immediately, proving that human nature cannot be suppressed by professional anonymity." 
    },
    { 
      q: 'Why is the "Stuck in the Middle with You" torture scene so disturbing?', 
      a: "The scene is disturbing because of the juxtaposition of upbeat, catchy pop music with horrific violence. Mr. Blonde dances playfully while mutilating a police officer, showing his complete lack of empathy. It subverts movie tropes by having the camera pan away at the moment of the ear-cutting, leaving the violence to the audience's imagination, which is often worse than seeing it." 
    },
    { 
      q: 'Who is the "Rat" and how does the film handle the reveal?', 
      a: "Mr. Orange (Tim Roth) is the undercover cop. The film reveals this to the audience midway through, creating dramatic irony. We know he is bleeding to death and is a cop, while the other characters (except Mr. White) suspect him but don't know for sure. This knowledge makes Mr. White's protective, fatherly behavior toward Orange tragic, as we know his loyalty is misplaced." 
    },
    { 
      q: 'What are the influences behind the Mexican Standoff ending?', 
      a: "The final triangular standoff is a direct homage to Hong Kong action cinema, specifically Ringo Lam's *City on Fire* and the films of John Woo. It represents the total collapse of trust. In a world where no one can trust anyone, the only logical conclusion is mutual destruction. It is a Shakespearean tragedy played out with handguns in a warehouse." 
    }
  ],

  "Hell or High Water": [
    { 
      q: 'How does the film comment on the 2008 financial crisis?', 
      a: "The film posits the banks as the true villains. The brothers are robbing the very bank that is foreclosing on their family land, using the stolen money to pay off the loan. It portrays a cycle where the institutions prey on the poor, and the robbery is an act of economic rebellion. The graffiti 'Three tours in Iraq but no bail for people like us' underscores the betrayal felt by rural America." 
    },
    { 
      q: 'Why do the brothers only steal small bills?', 
      a: "It shows their intelligence and desperation. Stealing small, unmarked bills makes the money untraceable and usable immediately. It emphasizes that they aren't greedy career criminals looking for a glamorous score; they are desperate men calculating exactly how much they need to survive. This methodical approach contrasts with the chaotic violence that eventually erupts." 
    },
    { 
      q: 'What is the significance of the "Comanche" metaphor?', 
      a: "Tanner (Ben Foster) calls himself a 'Comanche,' referencing the Native Americans who once ruled the plains but were driven out by settlers. The film draws a parallel between the Native Americans losing their land to armies and the modern ranchers losing their land to banks. It suggests that history is a continuous cycle of conquest, and now the poor whites are the ones being conquered by capitalism." 
    },
    { 
      q: 'What does Jeff Bridges\' character represent?', 
      a: "Sheriff Marcus Hamilton represents the 'Old West.' He is intuitive, patient, and follows an ancient code of justice, but he is also aging out of a world he no longer understands. His racist teasing of his partner is a relic of an older time. His final confrontation with Toby (Chris Pine) is a standoff between the old law and the new, desperate morality of the frontier." 
    },
    { 
      q: 'How does the ending resolve the conflict?', 
      a: "The ending is a tense, verbal standoff. Toby is not in jail, but he is in a prison of his own making, living on the ranch that reminds him of his crimes. Hamilton knows Toby is guilty but can't prove it. Their promise to 'meet again' suggests that the violence isn't over, and that peace is impossible when built on a foundation of blood and theft." 
    }
  ],

  "Thief": [
    { 
      q: 'How realistic are the safe-cracking scenes?', 
      a: "Extremely realistic. Michael Mann hired real-life professional thieves as technical advisors. The thermal lance used by James Caan to melt through the safe was real, and the actors were trained to use the tools properly. The sparks, the molten metal, and the sweat are authentic. This focus on 'process' defined Mann's career, treating crime as a skilled trade rather than a dramatic adventure." 
    },
    { 
      q: 'What is the significance of the "collage" Frank carries?', 
      a: "Frank carries a photo collage of a house, a wife, and a child—a vision of a normal life he constructed while in prison. It represents the 'American Dream' as a commodity he thinks he can buy with stolen money. His tragedy is realizing that you cannot buy a life; you have to build it, and his criminal nature makes building it impossible." 
    },
    { 
      q: 'How does the Tangerine Dream score affect the movie?', 
      a: "The electronic synth score by Tangerine Dream was revolutionary for 1981. Instead of traditional orchestral suspense music, the pulsing synths give the film a dreamlike, modern, and industrial feel. It creates a rhythm that matches the mechanical nature of the heists and the neon-lit, sleepless atmosphere of Chicago at night." 
    },
    { 
      q: 'Why does Frank destroy his own house and car at the end?', 
      a: "Frank realizes that having attachments (a wife, a house, a child) gives the mob leverage over him. To be free and to survive the coming war, he must have 'nothing he cannot walk out on in 30 seconds.' destroying his own dream is a heartbreaking act of self-mutilation; he chooses survival and independence over love and happiness, embracing his identity as a loner." 
    },
    { 
      q: 'How does this film relate to Heat?', 
      a: "Thief is considered the spiritual predecessor to Heat. Frank (James Caan) is essentially a younger, rawer version of Neil McCauley (De Niro). Both are loners with a strict code, both are experts in high-end theft, and both face the dilemma of attachment. Watching Thief provides the blueprint for the themes Michael Mann would perfect 14 years later in Heat." 
    }
  ],

  "The Bank Job": [
    { 
      q: 'How much of The Bank Job is true?', 
      a: "The film is based on the 1971 Baker Street robbery, which famously had a 'D-Notice' (government gag order) placed on it shortly after the news broke. While the dialogue is fictional, the core premise—that the robbers accidentally stole compromising photos of Princess Margaret and evidence of police corruption—is a widely accepted theory explaining why the government covered up the investigation." 
    },
    { 
      q: 'What is the "D-Notice" mentioned in the film?', 
      a: "A D-Notice (Defence and Security Media Advisory Notice) is an official request from the British government to news editors not to publish specific items for reasons of national security. The fact that a D-Notice was issued for a simple bank robbery fueled decades of conspiracy theories, which the film uses as its central plot device to suggest high-level royal involvement." 
    },
    { 
      q: 'Who is Michael X and why is he important?', 
      a: "Michael X was a real-life black power leader and criminal in 1970s London. In the film (and allegedly in real life), he used the contents of a safe deposit box to blackmail the British establishment, keeping the police from arresting him. The film portrays him as the catalyst for the heist—MI5 hires the robbers specifically to retrieve his box, not the money." 
    },
    { 
      q: 'How does the film depict the 1970s London underworld?', 
      a: "It captures the gritty, unglamorous nature of 70s London crime. Unlike the slick tech of Ocean's Eleven, these robbers use ham radios, sledgehammers, and thermal lances. It portrays a world where corrupt cops, pornographers, and intelligence agents all rub shoulders in the same Soho clubs, highlighting the systemic corruption of the era." 
    },
    { 
      q: 'What happens to the characters at the end?', 
      a: "The film suggests that the robbers used the leverage of the photos to negotiate their freedom. In reality, several men were arrested and jailed, though the ringleader remained elusive. The film provides a satisfying 'movie' ending where the little guys outsmart the spy agencies, blending historical fact with the wish-fulfillment of the heist genre." 
    }
  ],

  "Dog Day Afternoon": [
    { 
      q: 'What is the real motivation behind the robbery?', 
      a: "The robbery was committed by John Wojtowicz (named Sonny in the film) to pay for his partner's gender confirmation surgery. This revelation turns the film from a standard crime drama into a complex exploration of love, sexuality, and desperation. It was one of the first mainstream films to sympathetically portray a bisexual protagonist and a trans woman's struggle." 
    },
    { 
      q: 'Why does the crowd cheer "Attica!"?', 
      a: "Sonny chants 'Attica!' referencing the 1971 Attica Prison riot where inmates demanded better conditions and were violently suppressed by the state. By chanting it, Sonny turns the crowd against the police, framing himself as an anti-establishment hero fighting the system. It captures the rebellious, anti-authority mood of 1970s America." 
    },
    { 
      q: 'How much of the dialogue was improvised?', 
      a: "Director Sidney Lumet encouraged heavy improvisation during rehearsals to make the dialogue feel natural and frantic. Al Pacino and the cast improvised many of the interactions with the bank tellers, creating a unique dynamic where the hostages and robbers develop a strange, friendly rapport (Stockholm Syndrome) because they are all just 'ordinary people' trapped in a crazy situation." 
    },
    { 
      q: 'Why is there no musical score in the film?', 
      a: "Sidney Lumet chose not to use a musical score to maintain absolute realism. The only music heard is from the radio in the opening scene (Elton John's 'Amoreena'). The lack of music prevents the audience from being emotionally manipulated; instead, we are forced to sit with the uncomfortable silence, the heat, and the growing anxiety of the characters in real-time." 
    },
    { 
      q: 'What is the tragedy of Sal\'s character?', 
      a: "Sal (John Cazale) is the tragic counterweight to Sonny's charisma. He is quiet, deeply religious, and terrified of going back to prison ('I don't smoke, I don't drink...'). His readiness to die rather than be captured adds a layer of fatalism to the film. While Sonny plays to the crowd, Sal is the reminder that this is a deadly serious situation that will inevitably end in blood." 
    }
  ]
};

const HeistThrillerSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  // Fallback if movie title not found
  const faqs = heistThrillerMovieFAQs[title] || [
    { q: 'What makes this heist thriller unique?', a: "Intricate planning, high-stakes execution, and memorable criminal masterminds make this a must-watch for heist cinema fans." },
    { q: 'Where can I watch this film?', a: "Check major streaming platforms in your region for availability." },
    { q: 'Who directed this movie?', a: "A visionary filmmaker whose craft elevated this heist thriller to cinematic excellence." },
    { q: 'Is there a twist ending?', a: "Many heist films rely on a third-act twist. Watch closely to see if you can spot the deception before the reveal." },
    { q: 'Is this based on a true story?', a: "Some heist films are dramatizations of real robberies, while others are pure fiction. Check the specific film details." }
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
          <h2 className="text-2xl sm:text-3xl font-light text-yellow-100 flex items-center gap-3">
            <Info size={24} className="text-yellow-400" />
            <span>FAQs: Understanding <span className="font-semibold text-yellow-300">{title}</span></span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl">
            Dive deeper into the planning, the execution, and the cinematic legacy of {title}. 
            Warning: Some answers may contain spoilers.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            className={`bg-gray-800/40 rounded-xl overflow-hidden border transition-all duration-300 ${
              openIndex === idx ? 'border-yellow-500/50 bg-gray-800/60' : 'border-gray-700/50 hover:border-yellow-600/30'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            >
              <span className="text-base sm:text-lg font-medium text-yellow-100 pr-4">
                {faq.q}
              </span>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
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

export default HeistThrillerSEOFAQSection;