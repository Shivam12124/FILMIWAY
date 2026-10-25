import React, { useState, useEffect } from 'react';
import { Headphones, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// 📚 Curated Book Adaptation Database for Filmiway Movies
const BOOK_ADAPTATIONS = {
  "oppenheimer": {
    bookTitle: "American Prometheus",
    author: "Kai Bird & Martin J. Sherwin",
    customText: "Listen to the Pulitzer Prize-winning biography that inspired Christopher Nolan's cinematic masterpiece."
  },
  "the-godfather": {
    bookTitle: "The Godfather",
    author: "Mario Puzo",
    customText: "Experience the original novel of power, family, and betrayal that spawned the legendary film trilogy."
  },
  "the-godfather-part-ii": {
    bookTitle: "The Godfather",
    author: "Mario Puzo",
    customText: "Experience the original novel of power, family, and betrayal that inspired Francis Ford Coppola's masterpiece."
  },
  "fight-club": {
    bookTitle: "Fight Club",
    author: "Chuck Palahniuk",
    customText: "Chuck Palahniuk's original novel features an even darker, raw alternate ending than Fincher's film."
  },
  "dune": {
    bookTitle: "Dune",
    author: "Frank Herbert",
    customText: "Explore Frank Herbert's epic sci-fi universe in a rich, multi-cast audio performance."
  },
  "dune-part-two": {
    bookTitle: "Dune",
    author: "Frank Herbert",
    customText: "Continue the legendary sci-fi saga with the complete unabridged Dune audiobook on Audible."
  },
  "the-shawshank-redemption": {
    bookTitle: "Rita Hayworth and Shawshank Redemption",
    author: "Stephen King",
    customText: "Listen to Stephen King's timeless novella of hope, patience, and resilience behind the #1 rated film."
  },
  "the-green-mile": {
    bookTitle: "The Green Mile",
    author: "Stephen King",
    customText: "Experience the deeply emotional, magical realism masterpiece of death row in full audio depth."
  },
  "the-shining": {
    bookTitle: "The Shining",
    author: "Stephen King",
    customText: "Stephen King's original psychological horror novel reveals a completely different Overlook Hotel descent."
  },
  "no-country-for-old-men": {
    bookTitle: "No Country for Old Men",
    author: "Cormac McCarthy",
    customText: "Cormac McCarthy's sparse, poetic prose delves even deeper into Sheriff Bell's thoughts and philosophy."
  },
  "eyes-wide-shut": {
    bookTitle: "Dream Story (Traumnovelle)",
    author: "Arthur Schnitzler",
    customText: "The dark, psychological novella of dreamlike obsession that Stanley Kubrick adapted into his final film."
  },
  "goodfellas": {
    bookTitle: "Wiseguy",
    author: "Nicholas Pileggi",
    customText: "Hear the gritty real-life testimony of mobster Henry Hill that Martin Scorsese turned into a classic."
  },
  "zodiac": {
    bookTitle: "Zodiac",
    author: "Robert Graysmith",
    customText: "Listen to the chilling, exhaustive investigative chronicle behind David Fincher's masterpiece."
  },
  "drive": {
    bookTitle: "Drive",
    author: "James Sallis",
    customText: "Listen to the stylish, neo-noir story of a stuntman and getaway driver with nothing left to lose."
  },
  "forrest-gump": {
    bookTitle: "Forrest Gump",
    author: "Winston Groom",
    customText: "Listen to the wildly humorous and touching novel behind Tom Hanks' Oscar-winning phenomenon."
  },
  "psycho": {
    bookTitle: "Psycho",
    author: "Robert Bloch",
    customText: "Experience the original horror novel that inspired Alfred Hitchcock's most legendary thriller."
  },
  "shutter-island": {
    bookTitle: "Shutter Island",
    author: "Dennis Lehane",
    customText: "Dive into Dennis Lehane's atmospheric asylum mystery that keeps you questioning reality until the final second."
  },
  "kramer-vs-kramer": {
    bookTitle: "Kramer Versus Kramer",
    author: "Avery Corman",
    customText: "Listen to the heartbreaking story of divorce, fatherhood, and healing that swept the Oscars."
  },
  "the-lord-of-the-rings-the-return-of-the-king": {
    bookTitle: "The Return of the King",
    author: "J.R.R. Tolkien",
    customText: "Complete Tolkien's timeless high fantasy masterwork in an immersive, full-length audio performance."
  },
  "one-flew-over-the-cuckoos-nest": {
    bookTitle: "One Flew Over the Cuckoo's Nest",
    author: "Ken Kesey",
    customText: "Listen to Ken Kesey's rebellious, anti-institutional classic narrated with raw emotional power."
  },
  "trainspotting": {
    bookTitle: "Trainspotting",
    author: "Irvine Welsh",
    customText: "Hear Irvine Welsh's kinetic plunge into Edinburgh counterculture in authentic Scottish dialect."
  },
  "room": {
    bookTitle: "Room",
    author: "Emma Donoghue",
    customText: "Experience the moving, bestselling story of motherly devotion and survival told from a child's perspective."
  },
  "brokeback-mountain": {
    bookTitle: "Brokeback Mountain",
    author: "Annie Proulx",
    customText: "Listen to Annie Proulx's acclaimed story of longing, heartbreak, and silence in the American West."
  },
  "the-reader": {
    bookTitle: "The Reader",
    author: "Bernhard Schlink",
    customText: "Explore the moral complexity and generational guilt of post-war Germany in this international bestseller."
  },
  "carol": {
    bookTitle: "The Price of Salt",
    author: "Patricia Highsmith",
    customText: "Dive into Patricia Highsmith's groundbreaking 1950s romance novel of deep longing and subtext."
  },
  "under-the-skin": {
    bookTitle: "Under the Skin",
    author: "Michel Faber",
    customText: "Explore the cerebral science fiction concepts and uncanny prose behind the Scarlett Johansson film."
  },
  "wuthering-heights": {
    bookTitle: "Wuthering Heights",
    author: "Emily Brontë",
    customText: "Listen to Emily Brontë's gothic masterpiece of turbulent passion and revenge on the Yorkshire moors."
  }
};

const AudibleBookPromo = ({ movie, movieSlug, movieTitle, compact = true, className = "" }) => {
  const [userCountry, setUserCountry] = useState('US');

  // Normalize movie inputs
  const slug = (movieSlug || movie?.slug || '').toLowerCase();
  const title = movieTitle || movie?.Title || movie?.title || 'this movie';

  // Check if movie has a tailored book match
  const adaptation = BOOK_ADAPTATIONS[slug];

  // Detect user country for international Amazon Storefront routing
  useEffect(() => {
    let isCancelled = false;
    const detectCountry = async () => {
      try {
        const res = await fetch('https://ipinfo.io/json');
        if (res.ok && !isCancelled) {
          const data = await res.json();
          if (data?.country) {
            setUserCountry(data.country.toUpperCase());
          }
        }
      } catch (e) {
        // Fallback silently to US
      }
    };
    detectCountry();
    return () => { isCancelled = true; };
  }, []);

  // International Storefront & Tracking Tag Resolution
  const getAudibleLink = () => {
    const isUK = userCountry === 'GB';
    const isCA = userCountry === 'CA';
    const isIN = userCountry === 'IN';

    // Storefront domains
    const domain = isUK ? 'amazon.co.uk' : isCA ? 'amazon.ca' : isIN ? 'amazon.in' : 'amazon.com';

    // Regional Amazon Affiliate tracking tags
    const tag = isUK ? 'filmiway09-21' : isCA ? 'filmiway06-20' : isIN ? 'filmiway-21' : 'filmiway0d-20';

    if (adaptation) {
      // 📖 Scenario A: Direct search for the specific audiobook edition
      const searchQuery = `${adaptation.bookTitle} audiobook ${adaptation.author}`;
      return `https://www.${domain}/s?k=${encodeURIComponent(searchQuery)}&tag=${tag}`;
    }

    // 🎁 Scenario B: Universal 30-Day Free Trial Landing Page
    if (isUK) {
      return `https://www.amazon.co.uk/hz/audible/arya/mlp?tag=${tag}`;
    }
    if (isCA) {
      return `https://www.amazon.ca/hz/audible/arya/mlp?tag=${tag}`;
    }
    return `https://www.amazon.com/hz/audible/arya/mlp?ref_=null&_encoding=UTF8&tag=${tag}&purchaseType=MTRIAL&SHOPPING_PORTAL_MODE=AUGMENTED`;
  };

  const handleAudibleClick = async () => {
    const targetUrl = getAudibleLink();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    try {
      await addDoc(collection(db, 'audible_clicks'), {
        promoType: 'audible',
        mode: adaptation ? 'book_match' : 'generic_trial',
        movieSlug: slug || 'unknown',
        movieTitle: title,
        bookTitle: adaptation ? adaptation.bookTitle : 'General 30-Day Trial',
        author: adaptation ? adaptation.author : 'N/A',
        country: userCountry,
        deal: '30-Day Free Trial ($0.00)',
        targetUrl: targetUrl,
        timestamp: serverTimestamp(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
      });
    } catch (e) {
      // Non-blocking analytics
    }
  };

  const headline = adaptation
    ? `Listen to "${adaptation.bookTitle}" on Amazon Audible`
    : `Love Storytelling? Try Amazon Audible Free for 30 Days`;

  const description = adaptation
    ? `${adaptation.customText} Get the complete unabridged audiobook 100% free with an Amazon Audible 30-day trial.`
    : `Get 1 free premium audiobook of your choice plus unlimited access to thousands of audiobooks and podcasts on Amazon Audible. Cancel anytime before day 30 at zero cost.`;

  const buttonText = adaptation
    ? `Listen Free on Amazon Audible`
    : `Start 30-Day Free Trial on Amazon`;

  return (
    <aside 
      aria-label="Amazon Audible Audiobook Deal"
      className={`relative p-3.5 sm:p-4 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#140e06] via-[#0d0904] to-[#070503] shadow-lg shadow-black/70 overflow-hidden group transition-all duration-300 hover:border-amber-500/40 ${className}`}
    >
      {/* Subtle top amber highlight accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="flex flex-col gap-3">
        {/* Content Header: Icon + Eyebrow + Full Title */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-black/60 border border-amber-500/30 p-1.5 shrink-0 flex items-center justify-center shadow-md shadow-amber-950/40 mt-0.5">
            {adaptation ? (
              <BookOpen size={18} className="text-amber-400 shrink-0" />
            ) : (
              <Headphones size={18} className="text-amber-400 shrink-0" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-400/90 block mb-0.5">
              {adaptation ? "Amazon Audible • Original Novel" : "Amazon Audible 30-Day Free Trial"}
            </span>
            <h4 className="text-white text-sm sm:text-[14.5px] font-bold group-hover:text-amber-300 transition-colors leading-snug break-words">
              {headline}
            </h4>
            <p className="text-gray-300/90 text-xs sm:text-[12.5px] leading-relaxed mt-1 font-normal break-words">
              {description}
            </p>
          </div>
        </div>

        {/* Compact Solid Amber CTA Button: Sleek, punchy, high-converting */}
        <button
          type="button"
          onClick={handleAudibleClick}
          className="flex flex-col items-center justify-center gap-0.5 px-4 py-2.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#fbbf24] hover:to-[#ea580c] text-black rounded-xl shadow-md shadow-amber-600/20 transition-all border border-amber-400/50 group-hover:scale-[1.01] w-full text-center cursor-pointer"
        >
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-[13px] font-bold text-black tracking-wide">
            <span>{buttonText}</span>
            <ExternalLink size={13} className="shrink-0 text-black stroke-[2.5]" />
          </div>
          <span className="text-[10.5px] font-semibold text-black/80 tracking-wide">
            {adaptation ? "Amazon Audible 30-Day Trial • Cancel Anytime" : "Amazon Audible 30 Days Free • Cancel Anytime"}
          </span>
        </button>

        {/* Reassurance Micro-Footer: Properly Aligned */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-300/90 pt-0.5">
          <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
          <span>Cancel anytime online • Keep your book forever</span>
        </div>

        {/* Affiliate Disclosure */}
        <p className="text-[10px] sm:text-[10.5px] text-gray-500 leading-relaxed text-center pt-2 border-t border-white/[0.06]">
          If you want to support Filmiway, buying through our links earns us a small commission at no extra cost to you.
        </p>
      </div>
    </aside>
  );
};

export default AudibleBookPromo;
