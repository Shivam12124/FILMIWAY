// components/DramaSEOFAQSection.js - FULL COMPLETE CODE FOR ALL 10 FILMS

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const dramaMovieFAQs = {
  "1917": [
    { 
      q: 'Is 1917 filmed in one continuous shot?', 
      a: "1917 appears to be one continuous shot throughout the entire 119-minute film, created through seamless editing of multiple long takes. Director Sam Mendes and cinematographer Roger Deakins meticulously choreographed every camera movement, actor placement, and transition to maintain the illusion of uninterrupted real-time action. This innovative technique keeps viewers emotionally invested in the two soldiers' dangerous journey with no opportunity to mentally disengage, enhancing the tension and immersion significantly."
    },
    { 
      q: 'Is 1917 based on a true story?', 
      a: "1917 is inspired by personal stories shared by director Sam Mendes' grandfather, who served as a lance corporal in World War I. While the film is grounded in authentic WWI experiences and historical context, the specific mission depicted in the narrative is fictionalized for dramatic storytelling. The emotional truth and the dangers soldiers faced are realistically portrayed, drawing heavily from actual wartime accounts and historical research into trench warfare tactics." 
    },
    { 
      q: 'What awards did 1917 win?', 
      a: "1917 won 3 Academy Awards: Best Cinematography (Roger Deakins), Best Visual Effects, and Best Sound Mixing. The film received 10 total nominations including Best Picture and Best Director. Its recognition at the Oscars highlighted the technical achievement of the one-shot cinematography and the emotional impact of its storytelling, earning widespread critical acclaim globally." 
    },
    { 
      q: 'Where was 1917 primarily filmed?', 
      a: "The film was shot primarily across the United Kingdom, with major filming locations including Salisbury Plain, Hankley Common, Shepperton Studios, and Govan Docks in Glasgow. The production team constructed massive trenches and No Man's Land sets to achieve authentic WWI atmosphere and realism. The choice of British locations provided practical advantages and allowed the filmmakers to recreate the Western Front's desolate landscape accurately." 
    },
    { 
      q: 'What is the film\'s runtime and pacing?', 
      a: "The movie runs exactly 119 minutes, which matches the real-time narrative of the soldiers' urgent mission. Every minute counts as the protagonists race against time during a single day of battle. The runtime is deliberately structured without breaks or scene cuts that would disrupt the immersive viewing experience, keeping viewers' hearts pounding throughout the entire journey." 
    }
  ],

  "Roma": [
    { 
      q: 'Why is Roma shot entirely in black and white?', 
      a: "Alfonso Cuarón deliberately chose black and white cinematography to evoke the feel of memory and nostalgia, reflecting how we naturally remember our childhood through an emotional lens rather than vivid colors. This artistic choice removes visual distractions and focuses viewer attention on the characters' faces, emotions, and relationships. Black and white elevates the film from mere documentary to poetic cinema, emphasizing the intimate human connections and cultural richness of 1970s Mexico City while stripping away superficial spectacle." 
    },
    { 
      q: 'Is Roma autobiographical?', 
      a: "Yes, Roma is semi-autobiographical, deeply inspired by Alfonso Cuarón's own childhood in Mexico City's Colonia Roma neighborhood during the early 1970s. The character Cleo is based on Libo Rodríguez, the indigenous domestic worker who served as a second mother and caretaker to Cuarón and his siblings. The film recreates family dynamics, household routines, political events, and personal crises from Cuarón's formative years, transforming personal memory into universal cinema that resonates with audiences worldwide." 
    },
    { 
      q: 'What languages are featured in Roma?', 
      a: "Roma features primarily Spanish dialogue, spoken by the affluent family members throughout the film. However, significant portions are in Mixtec, an indigenous Mexican language spoken by Cleo and other working-class characters. This linguistic authenticity captures the cultural and class divisions within 1970s Mexico City, reflecting how language itself was a marker of social status and identity. The use of indigenous languages brings dignity and voice to marginalized communities often rendered invisible in mainstream cinema." 
    },
    { 
      q: 'Did Roma win Best Picture?', 
      a: "Roma did not win the Oscar for Best Picture in 2019, losing to Green Book in a controversial decision that sparked widespread debate about selection criteria. However, Roma won three Academy Awards: Best Director (Alfonso Cuarón), Best Cinematography (Alfonso Cuarón), and Best Foreign Language Film. The film's recognition as Best Director honored Cuarón's bold artistic vision and intimate storytelling, marking Netflix's entry into serious prestige cinema." 
    },
    { 
      q: 'Where can I watch Roma?', 
      a: "Roma is exclusively available on Netflix worldwide, representing a watershed moment when a streaming platform premiered a serious, award-winning prestige film globally simultaneously. Netflix's commitment to distributing Roma theatrically and on its platform sparked ongoing industry debates about streaming vs. theatrical exhibition. The film\'s accessibility on Netflix allowed millions worldwide to experience this intimate masterpiece, democratizing high art cinema." 
    }
  ],

  "The Irishman": [
    { 
      q: 'What is the runtime of The Irishman?', 
      a: "The Irishman has a runtime of 209 minutes (3 hours and 29 minutes), making it Martin Scorsese's longest film ever made. This epic length allows Scorsese to tell a sweeping, multi-decade story spanning from the 1950s through the 1980s, chronicling Frank Sheeran's life in organized crime with philosophical depth. The extensive runtime serves the narrative's meditation on aging, regret, redemption, and the ultimate emptiness of a violent life, without feeling unnecessarily padded or indulgent." 
    },
    { 
      q: 'Is The Irishman based on a true story?', 
      a: "Yes, The Irishman is based on Frank Sheeran's controversial memoir 'I Heard You Paint Houses,' published in 2004. Sheeran claimed to be a hitman for the mob and confessed to killing Jimmy Hoffa, the legendary Teamsters union leader who disappeared in 1975. While historians and crime experts dispute many of Sheeran's claims, Scorsese treats his account as the film's narrative foundation, creating a character study that examines truth, memory, and the reliability of deathbed confessions." 
    },
    { 
      q: 'What de-aging technology was used?', 
      a: "The Irishman employs groundbreaking de-aging CGI technology developed by Industrial Light & Magic to make Robert De Niro, Al Pacino, and Joe Pesci appear decades younger in flashback sequences. Unlike traditional prosthetic makeup or digital replacement, this innovative technology captured subtle facial movements in real-time during filming, allowing the aging actors to maintain authentic performances while their faces were digitally rejuvenated. The results demonstrate how advanced VFX can enhance storytelling without sacrificing emotional truth." 
    },
    { 
      q: 'Did The Irishman win any Oscars?', 
      a: "Despite receiving 10 Academy Award nominations including Best Picture and Best Director, The Irishman did not win any Oscars. It lost Best Picture to Parasite, a historic sweep that marked the Korean film's unprecedented global recognition. The film's snub surprised many critics who viewed it as a career capstone for Scorsese. However, The Irishman's legacy transcends awards, establishing itself as a definitive meditation on the American gangster film and the passage of time." 
    },
    { 
      q: 'Why did The Irishman have limited theatrical release?', 
      a: "Netflix gave The Irishman a limited 26-day theatrical release before streaming to qualify for Academy Awards eligibility. Major theater chains refused to show the film due to Netflix's short theatrical window, sparking fierce industry debates about streaming platforms versus traditional theatrical distribution. This conflict highlights the ongoing tension between innovation in content delivery and the economic model of cinema exhibition, with filmmakers caught between studio demands and creative control." 
    }
  ],

  "Marriage Story": [
    { 
      q: 'Is Marriage Story based on real events?', 
      a: "While not directly autobiographical, Marriage Story draws heavily from writer-director Noah Baumbach's own divorce from actress Jennifer Jason Leigh. The film synthesizes Baumbach's personal experiences with broader observations about modern marriage, divorce, and custody battles in creative communities. The specificity and emotional authenticity of the screenplay come from lived experience, though characters and situations are fictionalized and universal enough to resonate with millions of viewers facing similar relationship challenges." 
    },
    { 
      q: 'What is the famous fight scene?', 
      a: "The climactic argument scene between Charlie and Nicole is Marriage Story's emotional centerpiece and showstopping moment. In an uninterrupted 10-minute sequence, Adam Driver and Scarlett Johansson unleash years of repressed resentment, pain, and anguish in raw, devastating dialogue. They alternate between tearful vulnerability and brutal honesty, trading accusations and confessions that reveal how two people who loved each other became unable to live together. Driver's performance in particular earned widespread praise for its nuanced portrayal of masculine breakdown." 
    },
    { 
      q: 'Did Marriage Story win any Academy Awards?', 
      a: "Marriage Story won 1 Oscar for Best Supporting Actress (Laura Dern, playing divorce attorney Nora Fanshaw). The film received 6 total nominations including Best Picture, Best Director (Noah Baumbach), Best Actor (Adam Driver), and Best Actress (Scarlett Johansson). Dern's recognition honored her brilliant performance as a tough, pragmatic legal warrior. The film's nominations acknowledged its artistic achievement while its single win reflected voters' preference for ensemble recognition." 
    },
    { 
      q: 'Why is Marriage Story so realistic?', 
      a: "Marriage Story achieves its authenticity through meticulous attention to legal procedure and emotional truth. Baumbach consulted real divorce attorneys and observed actual custody mediations to ensure accuracy. The film refuses to demonize either character—both are flawed, sympathetic, and making understandable choices in an impossible situation. There are no villains, only two people who loved each other but grew in incompatible directions. This nuanced morality makes the film feel lived-in and genuine." 
    },
    { 
      q: 'What does the ending symbolize?', 
      a: "The ending of Marriage Story shows Charlie and Nicole achieving bittersweet acceptance and mature co-parenting. Charlie tying Nicole's shoe in the final moments represents lingering intimacy and care despite legal separation. They've learned to communicate respectfully and prioritize their child's wellbeing above their own pain. The ending suggests that divorce doesn't erase love—it transforms it into something different but still meaningful. Separation becomes a form of maturity rather than failure." 
    }
  ],

  "The Social Network": [
    { 
      q: 'Is The Social Network accurate to Facebook\'s real story?', 
      a: "The Social Network takes significant creative liberties with Facebook's founding for dramatic effect. Mark Zuckerberg himself called the film 'fiction,' particularly challenging the motivation involving a girlfriend breakup. However, the film accurately captures core legal disputes between Zuckerberg and the Winklevoss twins, and the falling out between Zuckerberg and co-founder Eduardo Saverin is grounded in real events. Director David Fincher and writer Aaron Sorkin prioritized dramatic storytelling over documentary accuracy, creating a fictional truth about ambition and betrayal." 
    },
    { 
      q: 'Who wrote The Social Network screenplay?', 
      a: "Aaron Sorkin wrote the Oscar-winning screenplay based on Ben Mezrich's book 'The Accidental Billionaires.' Sorkin brought his signature rapid-fire dialogue, sharp wit, and complex character interactions to the tech world. He transforms lines of code and business negotiations into Shakespearean drama about ambition, friendship, and isolation. Sorkin's screenplay elevated what could have been a simple startup story into an exploration of genius, betrayal, and the human cost of technological success." 
    },
    { 
      q: 'Did The Social Network win Best Picture?', 
      a: "No, The Social Network did not win Best Picture, losing to The King's Speech in what many considered an upset. However, it won 3 Academy Awards: Best Adapted Screenplay (Aaron Sorkin), Best Original Score (Trent Reznor and Atticus Ross), and Best Film Editing. The film's recognition for screenplay excellence honored Sorkin's brilliant writing and the editing team's sharp pacing that kept audiences engaged in corporate meetings and coding." 
    },
    { 
      q: 'Why is The Social Network considered a masterpiece?', 
      a: "David Fincher's precise direction combines with Sorkin's brilliant screenplay to elevate a story about coding and entrepreneurship into a timeless exploration of genius, friendship, betrayal, and the cost of success. The film predicted social media's impact on human connection before Facebook's full cultural dominance emerged. It remains remarkably prescient about technology's role in isolating us while connecting us globally. The performances from Jesse Eisenberg, Andrew Garfield, and Justin Timberlake create memorable characters." 
    },
    { 
      q: 'What is Mark Zuckerberg\'s opinion of The Social Network?', 
      a: "Zuckerberg has acknowledged that the film got his wardrobe right but significantly fabricated his motivations and emotions. He particularly disputes the girlfriend breakup as motivation for creating Facebook, noting he was dating his now-wife Priscilla Chan during the company's founding. However, Zuckerberg acknowledged the film captured the intensity and passion of building a startup, even if it misrepresented specific details. The film remains more dramatically satisfying than factually accurate." 
    }
  ],

  "The Boy Who Harnessed the Wind": [
    { 
      q: 'What is the core story of The Boy Who Harnessed the Wind?', 
      a: "The Boy Who Harnessed the Wind tells the inspiring true story of William Kamkwamba, a Malawian boy who built a windmill from scrap materials to save his impoverished village from drought and starvation. When famine threatened his community in 2002, the resourceful teenager assembled a functioning wind turbine from bicycle parts, wooden materials, and salvaged metal. His innovation generated electricity and pumped water, transforming his village's survival prospects. The film celebrates human ingenuity, determination, and hope in the face of impossible odds." 
    },
    { 
      q: 'Is The Boy Who Harnessed the Wind based on true events?', 
      a: "Yes, the film is inspired by the real William Kamkwamba's incredible true story documented in his memoir of the same name. Kamkwamba\'s actual achievement of building a windmill during Malawi's 2001-2002 famine gained international recognition and has become a symbol of African innovation and problem-solving. The film adapts his remarkable journey, maintaining emotional authenticity while dramatizing key moments for cinematic impact. Kamkwamba's persistence and creativity demonstrate extraordinary individual agency against systemic poverty." 
    },
    { 
      q: 'What themes does The Boy Who Harnessed the Wind explore?', 
      a: "The film explores determination, innovation, hope, family sacrifice, and community resilience in facing environmental crisis. Central themes include the power of education to transform lives, the importance of believing in impossible dreams, and how individual initiative can create collective benefit. The relationship between father and son becomes a powerful metaphor for generational wisdom versus youthful innovation. Climate crisis, resource scarcity, and economic injustice provide context for the hero's struggle." 
    },
    { 
      q: 'Where was The Boy Who Harnessed the Wind filmed?', 
      a: "The film was shot primarily in Malawi and South Africa, with production largely occurring on location in authentic African settings. Filming in the actual region where the story occurred helped filmmakers capture the genuine landscape, climate, and cultural atmosphere that shaped Kamkwamba's experience. The decision to shoot locally rather than in studios enhanced authenticity and supported African film production infrastructure." 
    },
    { 
      q: 'Where can I watch The Boy Who Harnessed the Wind?', 
      a: "The Boy Who Harnessed the Wind is available exclusively on Netflix. The platform's commitment to streaming original dramas with international stories has made this inspiring film accessible to global audiences. Netflix\'s distribution allows the film to reach viewers worldwide who might not encounter it through traditional theatrical releases, democratizing access to powerful, educational narratives about resilience and innovation." 
    }
  ],

  "The Power of the Dog": [
    { 
      q: 'What genre and themes does The Power of the Dog explore?', 
      a: "The Power of the Dog is a slow-burning psychological Western drama exploring toxic masculinity, sexual repression, control, and hidden desire in 1920s Montana. Beneath a veneer of civility and Western tradition lies a volatile undercurrent of emotional cruelty, manipulation, and forbidden attraction. Director Jane Campion deconstructs Western mythology by centering emotional complexity over action, examining how social expectations force characters to conceal authentic selves. Themes include power dynamics in families, class tensions, and the violence inherent in rigid gender roles." 
    },
    { 
      q: 'Who directed The Power of the Dog?', 
      a: "Jane Campion directed The Power of the Dog with extraordinary nuance and precision. Campion's reputation for psychological depth and complex character exploration is evident throughout the film. Her direction transforms rural landscapes into claustrophobic emotional spaces where characters' unspoken tensions become more important than dialogue. Campion's artistic vision earned her Golden Globe and Oscar nominations, affirming her status as one of cinema's most incisive psychological filmmakers." 
    },
    { 
      q: 'What psychological themes drive the narrative?', 
      a: "The Power of the Dog explores psychological manipulation, sexual identity suppression, family power struggles, and the devastating consequences of emotional brutality. Protagonist Phil Burbank uses intellectual superiority and social dominance to control and humiliate others, particularly those perceived as weak or different. The film suggests that Phil's aggressive dominance masks deeper insecurities and forbidden desires. Characters gradually reveal hidden vulnerabilities beneath their public personas as psychological warfare unfolds across the narrative." 
    },
    { 
      q: 'Did The Power of the Dog win awards?', 
      a: "Yes, The Power of the Dog achieved significant critical recognition and awards success. It won multiple Golden Globes including Best Drama Film and Best Director for Jane Campion. The film received numerous nominations from major award bodies, including Oscars recognition. Critical acclaim has positioned it among the finest films of recent years, praised for its artistic ambition, complex characters, and psychological depth." 
    },
    { 
      q: 'Where is The Power of the Dog available?', 
      a: "The Power of the Dog is available on Netflix and through theatrical screenings in select venues. Netflix\'s investment in prestige drama content has made this ambitious psychological Western accessible to streaming audiences globally. The film represents Netflix\'s commitment to supporting visionary filmmakers like Jane Campion and bringing challenging, artistic content to worldwide audiences." 
    }
  ],

  "Mudbound": [
    { 
      q: 'What is the central story of Mudbound?', 
      a: "Mudbound follows two farming families—one Black, one white—struggling with poverty, racism, and land disputes in postwar rural Mississippi. The narrative interweaves their stories as returning soldiers, a white woman seeking escape, and Black farmers fighting for dignity navigate systemic racism and class oppression. The film explores how families survive poverty while confronting explicit racial violence and dehumanization. Mudbound refuses to sanitize American racism, instead depicting its casual brutality and systemic nature with unflinching honesty." 
    },
    { 
      q: 'What themes does Mudbound explore?', 
      a: "Mudbound examines racism, economic hardship, family resilience, generational trauma, and the false promise of postwar American democracy for Black Americans. The film explores how poverty unites the two families across racial lines while racism divides them. Themes include the psychological toll of living under racist oppression, the strength required to maintain dignity in dehumanizing circumstances, and the persistence of racism despite surface-level progress. The bond between two WWI veterans crosses racial boundaries, highlighting common humanity." 
    },
    { 
      q: 'Did Mudbound win critical acclaim and awards?', 
      a: "Yes, Mudbound received significant critical acclaim and was nominated for multiple Academy Awards including Best Cinematography. The film's unflinching portrayal of racism and commitment to Black storytelling earned recognition from prestigious film organizations. While it didn't win major awards, the nominations and critical praise affirmed the film's artistic significance and important contribution to cinema addressing systemic racism and Black American experiences." 
    },
    { 
      q: 'Where can I watch Mudbound?', 
      a: "Mudbound is available on Netflix's streaming platform. Netflix's commitment to premiering important films about American history and racial justice has made this significant drama accessible to global audiences. The film's availability on Netflix allowed millions to engage with its challenging narrative about rural racism and the Black agricultural experience in American history." 
    },
    { 
      q: 'Who directed Mudbound?', 
      a: "Mudbound was directed by Dee Rees, an acclaimed filmmaker known for her powerful storytelling about complex social issues. Rees's direction brings visual richness and emotional depth to the rural Mississippi setting, using cinematography to emphasize both landscape beauty and the oppressive circumstances of the characters' lives. Her artistic vision transformed Hilary Jordan's novel into a visually stunning and emotionally devastating film." 
    }
  ],

  "The Pursuit of Happyness": [
    { 
      q: 'What is the central story of The Pursuit of Happyness?', 
      a: "The Pursuit of Happyness tells the inspiring true story of Chris Gardner, a struggling salesman who becomes homeless while raising his young son. Determined to build a better life and provide his child with education and opportunities, Gardner pursues an unpaid stockbroker internship while living in homeless shelters, struggling daily to survive poverty and despair. His persistence, dignity, and love for his son sustain him through unimaginable hardship as he works relentlessly toward financial security and personal redemption." 
    },
    { 
      q: 'Who stars in The Pursuit of Happyness?', 
      a: "Will Smith delivers an acclaimed performance as Chris Gardner, portraying both vulnerability and relentless determination. Smith plays the role with emotional authenticity, showcasing moments of desperation, tenderness toward his son, and unwavering hope. His performance earned significant critical recognition and Oscar nomination consideration. The chemistry between Will Smith and his real-life son Jaden (playing his character's son) adds genuine familial intimacy to their on-screen relationship." 
    },
    { 
      q: 'Is The Pursuit of Happyness based on a true story?', 
      a: "Yes, The Pursuit of Happyness is based on the real life of Chris Gardner, who experienced homelessness while pursuing a stockbroker career. Gardner documented his experiences in an autobiography that became the basis for the film adaptation. The film maintains the essential truth of his struggle while dramatizing specific moments for emotional impact. Gardner's actual achievement of overcoming homelessness to become a successful businessman and inspirational speaker demonstrates extraordinary human resilience." 
    },
    { 
      q: 'What universal themes does the film explore?', 
      a: "The Pursuit of Happyness explores perseverance, the bonds of fatherhood, economic inequality, hope amid despair, and the human capacity for dignity in dehumanizing circumstances. The film celebrates individual determination while acknowledging systemic barriers that trap people in poverty. Central themes include the importance of belief in oneself and one's child, the sacrifices required for upward mobility, and the transformative power of love and hope. The film resonates with audiences facing economic struggle." 
    },
    { 
      q: 'Where can I watch The Pursuit of Happyness?', 
      a: "The Pursuit of Happyness is available on multiple streaming platforms including Amazon Prime Video and Netflix (depending on your region). The film's availability on popular streaming services makes this inspirational drama accessible to global audiences. Its message of hope and perseverance continues to resonate with viewers facing their own challenges and seeking motivation for personal transformation." 
    }
  ],

  "Minari": [
    { 
      q: 'What is the story of Minari?', 
      a: "Minari tells the intimate story of the Yi family, Korean-American immigrants pursuing the American Dream by establishing an Arkansas farm. After working difficult jobs in California, the family relocates to rural Arkansas to cultivate Korean vegetables for immigrant communities, risking everything to build agricultural independence. Grandmother Soon-ja arrives from Korea to support the family, bringing traditional wisdom and cultural connection. The film chronicles their struggle with language barriers, financial instability, discrimination, and internal family tensions while pursuing economic self-sufficiency." 
    },
    { 
      q: 'What themes are central to Minari?', 
      a: "Minari explores immigrant resilience, cultural identity, family dynamics, intergenerational conflict, economic aspiration, and the American Dream's reality versus mythology. The film examines how immigrant families navigate racism, economic precarity, and the pressure to assimilate while maintaining cultural connection. Grandmotherly love, sibling relationships, and parental sacrifice become vehicles for exploring how families sustain each other through hardship. The growing Minari plant becomes metaphorical—something growing and adapting in a foreign environment." 
    },
    { 
      q: 'Did Minari win awards?', 
      a: "Yes, Minari achieved significant critical recognition and awards success. The film won Golden Globes including recognition for Best Motion Picture—Foreign Language Film. It received Academy Award nominations including Best Picture, Best Director, and Best Supporting Actress (Yuh-Jung Youn won the Oscar). Youn's recognition for playing Grandmother Soon-ja made her the first Korean actress to win an acting Oscar, representing historic recognition for Asian-American cinema." 
    },
    { 
      q: 'Who directed Minari?', 
      a: "Lee Isaac Chung directed Minari with remarkable sensitivity and authenticity. Chung draws on his own experiences as the child of Korean immigrants to create intimate, nuanced storytelling about immigrant family life. His direction balances moments of joy and cultural celebration with genuine hardship and uncertainty. Chung's artistic vision transforms a small family drama into something universally resonant, allowing audiences regardless of cultural background to connect with the Yi family's experiences." 
    },
    { 
      q: 'Where can I watch Minari?', 
      a: "Minari is available on streaming platforms including Hulu and Amazon Prime Video (availability varies by region). The film's accessibility on major streaming services has allowed global audiences to discover this significant American drama. Minari represents a breakthrough moment for Asian-American representation in mainstream cinema, with streaming platforms playing a crucial role in bringing diverse stories to worldwide audiences." 
    }
  ]
};

const DramaSEOFAQSection = ({ movie }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const title = movie.Title;
  
  const faqs = dramaMovieFAQs[title] || [
    { q: 'What makes this drama emotionally powerful?', a: "This compelling drama delivers emotional depth through authentic character development, meaningful performances, and themes exploring the human condition with remarkable nuance and sensitivity." },
    { q: 'Where can I watch this movie?', a: "This film is available on major streaming platforms including Netflix, Amazon Prime Video, and other services depending on your region. Check your local platform availability for current streaming options." },
    { q: 'Who created this film?', a: "An acclaimed director and screenwriter bring together talented cast and crew to craft a memorable exploration of complex human relationships and personal struggles that resonate across cultures." },
    { q: 'Did this film achieve critical success?', a: "The film received significant critical acclaim and major award nominations recognizing its artistic achievement, powerful performances, and meaningful storytelling that explores universal human experiences." },
    { q: 'What are the universal themes?', a: "Central themes include love, loss, family, identity, perseverance, sacrifice, and personal growth—exploring how individuals navigate profound life challenges with dignity, hope, and resilience amid adversity." }
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
        Deep dive into {title} with insider knowledge, production details, and insights about this powerful drama film.
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

      <motion.div
      
        
      >
        <p className="text-sm text-gray-400 leading-relaxed">
        
        </p>
      </motion.div>
    </motion.section>
  );
};

export default DramaSEOFAQSection;
