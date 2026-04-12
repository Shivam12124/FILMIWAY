import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, FastForward, Search, MonitorPlay, CheckCircle2, HelpCircle } from 'lucide-react';
import Header from '../components/Header';

export default function HowToSkipAwkwardScenes() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const publishDateStr = "2026-04-12";
  const publishDateDisplay = new Date(publishDateStr).toLocaleDateString('en-US', { 
    year: 'numeric', month: 'long', day: 'numeric' 
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // ⚡ ENHANCED SEO ARTICLE SCHEMA
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://filmiway.com/how-to-skip-awkward-scenes-in-movies"
    },
    "headline": "How to Skip Awkward Scenes in Movies with Exact Timestamps",
    "description": "A guide on how to skip explicit scenes in movies using Filmiway's exact timestamp database.",
    "image": "https://filmiway.com/filmiway-logo.svg",
    "keywords": "skip awkward scenes, parents guide movie timestamps, skip sex scenes in movies, family safe movies, movie explicit timestamps",
    "author": {
      "@type": "Organization",
      "name": "Filmiway Editors"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Filmiway",
      "logo": {
        "@type": "ImageObject",
        "url": "https://filmiway.com/filmiway-logo.svg"
      }
    },
    "datePublished": publishDateStr,
    "dateModified": publishDateStr,
    "articleBody": "We’ve all been through this before. You are sitting relaxed in your living room, watching a movie with your family members, and then out of nowhere, you sense the change in music in the background, along with the dimming lights, signaling the onset of something very graphic. You frantically search for your remote control, moving forward to those particular parts of the movie that you need to see. While conventional websites like the IMDb Parent’s Guide let you know what occurs in the movie, they don’t inform you when these events happen. This is precisely why Filmiway exists as the most accurate movie database providing verified timestamps at exact points."
  };

  // ⚡ BREADCRUMB SCHEMA (For better Google Hierarchy)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://filmiway.com/" },
      { 
        "@type": "ListItem", 
        "position": 2, 
        "name": "Parents Guide & Safety", 
        "item": "https://filmiway.com/how-to-skip-awkward-scenes-in-movies" 
      }
    ]
  };

  // ⚡ FAQ DATA & SCHEMA
  const faqs = [
    {
      question: "How accurate are the Filmiway timestamps?",
      answer: "All timestamps are manually verified against the official theatrical or home release runtime by our editors, ensuring pinpoint accuracy down to the exact second."
    },
    {
      question: "Does Filmiway cover every movie?",
      answer: "We currently have over 500 films with exact timestamps, focusing on popular blockbusters, critically acclaimed classics, and frequently requested titles. Our editors add new movies to the catalog daily."
    },
    {
      question: "Are the timestamps safe for family viewing?",
      answer: "Yes. We rate the severity (Mild, Moderate, High) and clearly label content types (Sex, Nudity, Sexual Content, etc.) so you have complete control over what to skip."
    },
    {
      question: "Is Filmiway free to use?",
      answer: "Yes, Filmiway is absolutely free to use. Our goal is to provide a stress-free movie night for everyone without paywalls."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // ⚡ HOW-TO SCHEMA
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Find Timestamps for Your Next Movie",
    "description": "Learn how to use Filmiway to find exact timestamps to skip awkward scenes in movies.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Use Our Instant Search",
        "text": "Click the magnifying glass icon at the top of any page to instantly search our 500+ movie database."
      },
      {
        "@type": "HowToStep",
        "name": "Search Google",
        "text": "Type '[Movie Name] Parents Guide and Timestamps Filmiway.com' directly into Google."
      },
      {
        "@type": "HowToStep",
        "name": "Visit Us Directly",
        "text": "Go to filmiway.com/movie-directory to browse our complete A-Z index of safe viewing guides."
      }
    ]
  };

  const proseClasses = "prose prose-invert prose-lg max-w-none prose-headings:font-light prose-a:text-yellow-400 hover:prose-a:text-yellow-300";

  return (
    <>
      <Head>
        <title>How to Skip Awkward Scenes in Movies (Exact Timestamps) | Filmiway</title>
        <meta name="description" content="Tired of awkward family movie nights? Learn how to use Filmiway to get exact, pinpoint timestamps to skip sex, nudity, and explicit scenes in over 500 movies." />
        <link rel="canonical" href="https://filmiway.com/how-to-skip-awkward-scenes-in-movies" />
        
        {/* ⚡ OPEN GRAPH & TWITTER META TAGS */}
        <meta property="og:title" content="How to Skip Awkward Scenes in Movies (Exact Timestamps) | Filmiway" />
        <meta property="og:description" content="Tired of awkward family movie nights? Learn how to use Filmiway to get exact, pinpoint timestamps to skip sex, nudity, and explicit scenes in over 500 movies." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://filmiway.com/how-to-skip-awkward-scenes-in-movies" />
        <meta property="og:image" content="https://filmiway.com/filmiway-logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ⚡ SEO ARTICLE SCHEMA FOR GOOGLE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema, howToSchema]) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30">
        <Header />

        <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
          <article>
            {/* HEADER */}
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-wide uppercase mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Parents Guide & Safety</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white mb-6 leading-tight">
                How to Skip Awkward Scenes in <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">Movies</span>
              </h1>
              <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                <span>By Filmiway Editors</span>
                <span>•</span>
                <time dateTime={publishDateStr}>{publishDateDisplay}</time>
              </div>
            </header>

            {/* CONTENT */}
            <div className={proseClasses}>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
We’ve all had this experience. You’re comfortably seated on your couch, watching a film with your family, when suddenly you notice a shift in the background music and low lights that indicate something very graphic is about to occur. You start rummaging for your remote control, rapidly skipping through parts of the story you need to know.
              </p>
              <p>
                Traditional sites like IMDb's Parents Guide will tell you <em>what</em> happens in a movie, but they completely fail to tell you <strong>when</strong> it happens. 
              </p>
              <p>
                That is exactly why we built <Link href="/">Filmiway</Link> — the most precise movie database that provides pinpoint, editor-verified timestamps so you know exactly when to skip awkward scenes and when it’s safe to press play again.
              </p>

              <h2 className="text-3xl text-white mt-12 mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-500" />
                The Filmiway Timestamp Advantage
              </h2>
              <p>
                At Filmiway, each editor verifies each minute of the film's official runtime by hand at Filmiway, from a huge Hollywood blockbuster to a highly regarded, independent film from A24. The precise seconds to skip over any sex, nudity, or explicit sexual content are tracked so that viewers may know which seconds to skip.
              </p>

              {/* EXAMPLES BOX */}
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 my-10">
                <h3 className="text-xl font-semibold text-white mb-6 mt-0">Real Examples from our 500+ Movie Database:</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-yellow-500 pl-4">
                    <Link href="/search?q=Oppenheimer" className="text-white block text-lg font-bold mb-1 hover:text-yellow-400 transition-colors">
                      Oppenheimer (2023)
                    </Link>
                    <span className="text-gray-400 text-sm">You want to watch Christopher Nolan's epic, but want to avoid the R-rated moments. Filmiway tells you exactly when to jump:</span>
                    <ul className="text-sm mt-2 space-y-1 text-gray-300 list-none pl-0">
                      <li><span className="text-yellow-500 mr-2">▶</span> Skip from <strong>0:23:14 to 0:24:46</strong> (Sex & Nudity - High)</li>
                      <li><span className="text-yellow-500 mr-2">▶</span> Skip from <strong>1:14:38 to 1:15:14</strong> (Nudity - High)</li>
                      <li><span className="text-yellow-500 mr-2">▶</span> Skip from <strong>1:15:43 to 1:16:00</strong> (Sex & Nudity - High)</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-yellow-500 pl-4">
                    <Link href="/search?q=Blade+Runner" className="text-white block text-lg font-bold mb-1 hover:text-yellow-400 transition-colors">
                      Blade Runner (1982)
                    </Link>
                    <span className="text-gray-400 text-sm">Ridley Scott's sci-fi noir classic is a cinematic masterpiece, but it contains a sensitive scene. Filmiway mapped it out so you can navigate safely:</span>
                    <ul className="text-sm mt-2 space-y-1 text-gray-300 list-none pl-0">
                      <li><span className="text-yellow-500 mr-2">▶</span> Skip from <strong>53:50 to 55:00</strong> (Nudity - Moderate)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl text-white mt-12 mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <MonitorPlay className="w-8 h-8 text-yellow-500" />
                Over 500+ Curated Films (And Growing)
              </h2>
              <p>
                We don't just cover the blockbusters. Our database features over 500 expertly curated films, spanning from international cinema (like <em>Parasite</em> and <em>The Handmaiden</em>) to deeply psychological thrillers and classic romances. And our editors are adding new films and timestamps to our catalog every single day.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
                <div className="bg-black border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-300">Exact Start & End Times</span>
                </div>
                <div className="bg-black border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-300">Severity Ratings (Mild to High)</span>
                </div>
                <div className="bg-black border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-300">Content Type Warnings</span>
                </div>
                <div className="bg-black border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-300">Verified against Official Runtimes</span>
                </div>
              </div>

              <h2 className="text-3xl text-white mt-12 mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <Search className="w-8 h-8 text-yellow-500" />
                How to Find Timestamps for Your Next Movie
              </h2>
              <p>
                It’s incredibly simple to protect your movie night. Before you press play on Netflix, Hulu, HBO Max, or Prime Video, just follow these three easy steps:
              </p>
              <ol className="text-gray-300 space-y-4">
                <li>
                  <strong>Use Our Instant Search:</strong> Click the magnifying glass icon at the top of any page to instantly search our 500+ movie database.
                </li>
                <li>
                  <strong>Search Google:</strong> Type <em>"[Movie Name] Parents Guide and Timestamps Filmiway.com"</em> directly into Google.
                </li>
                <li>
                  <strong>Visit Us Directly:</strong> Go to <Link href="/movie-directory">filmiway.com/movie-directory</Link> to browse our complete A-Z index of safe viewing guides.
                </li>
              </ol>

              {/* ⚡ FAQ SECTION */}
              <h2 className="text-3xl text-white mt-16 mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-yellow-500" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 mb-12 not-prose">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* ⚡ INTERACTIVE CTA BOX */}
              <div className="mt-12 p-8 bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl text-center not-prose shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-4">Ready for a stress-free movie night?</h3>
                <p className="text-gray-400 mb-8 font-light">Search our massive database of cinematic masterpieces and keep your family viewing safe.</p>
                
                <form onSubmit={handleSearch} className="max-w-md mx-auto relative mb-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Try searching for a movie..."
                    className="w-full bg-black/50 border border-white/20 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                  />
                </form>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/movie-directory" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                    <FastForward className="w-5 h-5" />
                    Browse A-Z Directory
                  </Link>
                </div>
              </div>

            </div>
          </article>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Filmiway. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}