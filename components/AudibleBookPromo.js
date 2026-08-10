import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, ExternalLink } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Lookup mapping for all major book adaptations in our database
const BOOK_ADAPTATIONS = {
  "oppenheimer": {
    bookTitle: "American Prometheus",
    author: "Kai Bird and Martin J. Sherwin",
    customText: "Listen to the Pulitzer Prize-winning biography that inspired Christopher Nolan's cinematic masterpiece."
  },
  "the-godfather": {
    bookTitle: "The Godfather",
    author: "Mario Puzo",
    customText: "Experience the original masterpiece of crime and family honor that spawned the legendary film trilogy."
  },
  "fight-club": {
    bookTitle: "Fight Club",
    author: "Chuck Palahniuk",
    customText: "Dive into the raw, cynical social satire that David Fincher adapted into a cult classic."
  },
  "dune": {
    bookTitle: "Dune",
    author: "Frank Herbert",
    customText: "Explore the legendary sci-fi world-building in full audio format before watching the films."
  },
  "the-shawshank-redemption": {
    bookTitle: "Rita Hayworth and Shawshank Redemption",
    author: "Stephen King",
    customText: "Listen to the timeless novella of hope, patience, and resilience behind the #1 rated movie of all time."
  },
  "the-green-mile": {
    bookTitle: "The Green Mile",
    author: "Stephen King",
    customText: "Experience the emotional, magical realism masterpiece of death row in full audio depth."
  },
  "no-country-for-old-men": {
    bookTitle: "No Country for Old Men",
    author: "Cormac McCarthy",
    customText: "Listen to the tense, philosophical Neo-Western thriller that the Coen brothers adapted frame-for-frame."
  },
  "eyes-wide-shut": {
    bookTitle: "Dream Story (Traumnovelle)",
    author: "Arthur Schnitzler",
    customText: "Read the dark, psychological novella that Stanley Kubrick adapted into his final film."
  },
  "goodfellas": {
    bookTitle: "Wiseguy",
    author: "Nicholas Pileggi",
    customText: "Hear the true story of life inside the mob that inspired Martin Scorsese's masterpiece."
  },
  "zodiac": {
    bookTitle: "Zodiac",
    author: "Robert Graysmith",
    customText: "Listen to the obsessive investigation chronicle behind David Fincher's thriller."
  },
  "drive": {
    bookTitle: "Drive",
    author: "James Sallis",
    customText: "Listen to the stylish, neo-noir story of a stuntman and getaway driver."
  },
  "psycho": {
    bookTitle: "Psycho",
    author: "Robert Bloch",
    customText: "Experience the original horror novel that inspired Alfred Hitchcock's masterpiece."
  },
  "shutter-island": {
    bookTitle: "Shutter Island",
    author: "Dennis Lehane",
    customText: "Dive into the mind-bending asylum mystery that Martin Scorsese adapted for the screen."
  },
  "kramer-vs-kramer": {
    bookTitle: "Kramer Versus Kramer",
    author: "Avery Corman",
    customText: "Listen to the heartbreaking story of divorce and fatherhood that swept the Oscars."
  },
  "the-lord-of-the-rings-the-return-of-the-king": {
    bookTitle: "The Return of the King",
    author: "J.R.R. Tolkien",
    customText: "Complete the legendary literary trilogy in full audio format."
  },
  "one-flew-over-the-cuckoos-nest": {
    bookTitle: "One Flew Over the Cuckoo's Nest",
    author: "Ken Kesey",
    customText: "Listen to the rebellious anti-institutional struggle that won 5 Academy Awards."
  },
  "trainspotting": {
    bookTitle: "Trainspotting",
    author: "Irvine Welsh",
    customText: "Hear Irvine Welsh's kinetic plunge into Edinburgh's counterculture."
  },
  "room": {
    bookTitle: "Room",
    author: "Emma Donoghue",
    customText: "Experience the powerful story of motherly love and survival told from a child's perspective."
  },
  "brokeback-mountain": {
    bookTitle: "Brokeback Mountain",
    author: "Annie Proulx",
    customText: "Listen to the celebrated short story of repressed love in the American West."
  },
  "the-reader": {
    bookTitle: "The Reader",
    author: "Bernhard Schlink",
    customText: "Explore the moral complexity and generational guilt of post-war Germany."
  },
  "carol": {
    bookTitle: "The Price of Salt",
    author: "Patricia Highsmith",
    customText: "Dive into the groundbreaking 1950s romance novel of longing and subtext."
  },
  "under-the-skin": {
    bookTitle: "Under the Skin",
    author: "Michel Faber",
    customText: "Explore the cerebral science fiction concepts behind the Scarlett Johansson film."
  },
  "wuthering-heights": {
    bookTitle: "Wuthering Heights",
    author: "Emily Brontë",
    customText: "Listen to the gothic romance of passion and revenge that inspired Emerald Fennell's adaptation."
  }
};

const AudibleBookPromo = ({ movieSlug, movieTitle }) => {
  const adaptation = BOOK_ADAPTATIONS[movieSlug];
  
  // General landing page link on US Amazon (.com) with tracking ID
  const generalLink = "https://www.amazon.com/hz/audible/arya/mlp?ref_=null&_encoding=UTF8&tag=filmiway0d-20&purchaseType=MTRIAL&SHOPPING_PORTAL_MODE=AUGMENTED";
  
  // Direct specific book search page on US Amazon (.com) with affiliate tracking tag
  const directLink = adaptation 
    ? `https://www.amazon.com/s?k=${encodeURIComponent(adaptation.bookTitle + " audiobook " + adaptation.author)}&tag=filmiway0d-20`
    : generalLink;

  const handleButtonClick = async () => {
    // Open the affiliate link immediately in a new tab to avoid blocking user navigation
    window.open(directLink, '_blank');

    // Asynchronously log the click event to Firebase Firestore
    try {
      let country = 'US';
      let city = 'Unknown';
      
      try {
        const response = await fetch('https://ipinfo.io/json');
        if (response.ok) {
          const data = await response.json();
          country = data.country?.toUpperCase() || 'US';
          city = data.city || 'Unknown';
        }
      } catch (e) {
        // Fallback silently if geolocation fetch fails
      }

      await addDoc(collection(db, 'affiliate_clicks'), {
        movieSlug: movieSlug || 'unknown',
        movieTitle: movieTitle || 'Unknown Movie',
        promoType: 'audible',
        isSpecific: !!adaptation,
        bookTitle: adaptation ? adaptation.bookTitle : 'General Promo',
        author: adaptation ? adaptation.author : 'N/A',
        country,
        city,
        timestamp: serverTimestamp(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
      });
    } catch (err) {
      console.error("Firebase analytics click tracking failed:", err);
    }
  };

  return (
    <motion.div 
      className="w-full bg-[#0a0a0c] rounded-2xl border border-white/10 shadow-xl p-5 sm:p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 justify-between relative z-10">
        
        {/* Left Side: Copywriting */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 text-yellow-500/80 text-xs tracking-wider uppercase font-medium">
            <Headphones className="w-4 h-4 text-yellow-500" />
            <span>Audible Special Offer</span>
          </div>
          
          {adaptation ? (
            <div>
              <h3 className="text-base sm:text-lg font-light text-white leading-snug">
                Read the book: <span className="font-semibold text-yellow-400 italic">"{adaptation.bookTitle}"</span> by {adaptation.author}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-2xl font-light">
                {adaptation.customText} Get the original audiobook for <span className="font-semibold text-yellow-400">100% Free</span> with a 30-day trial of Audible.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-base sm:text-lg font-light text-white leading-snug">
                Wanna enjoy audiobooks while relaxing?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-2xl font-light">
                Get a <span className="font-semibold text-yellow-400">30-Day Free Audible Trial</span> on Amazon and choose any bestseller or movie companion audiobook to listen for free.
              </p>
            </div>
          )}
        </div>

        {/* Right Side: CTA Button */}
        <div className="shrink-0 w-full md:w-auto text-center">
          <button 
            onClick={handleButtonClick}
            className="inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200 w-full md:w-auto shadow-md border-0 cursor-pointer"
            style={{ 
              backgroundColor: '#eab308', 
              color: '#000000'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ca8a04'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eab308'; }}
          >
            <span>{adaptation ? "Listen for FREE" : "Get 30 Days Free"}</span>
            <ExternalLink className="w-4 h-4 text-black" style={{ color: '#000000' }} />
          </button>
          <span className="block text-[10px] text-gray-500 mt-2">
            Cancel anytime. Keep the book forever.
          </span>
        </div>

      </div>
    </motion.div>
  );
};

export default AudibleBookPromo;
