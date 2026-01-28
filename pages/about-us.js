// pages/about.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Users,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

// ✅ PREMIUM FILM REEL ANIMATION
const FilmReel = () => (
  <motion.div 
    className="flex justify-center my-6 select-none opacity-80" 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    <svg width={90} height={30} viewBox="0 0 112 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx={19} cy="19" rx="18" ry="18" stroke="#FACC15" strokeWidth="1.5" fill="#18181b" />
      <ellipse cx={93} cy="19" rx="18" ry="18" stroke="#FACC15" strokeWidth="1.5" fill="#18181b" />
      <rect x={31} y={15} width={50} height={8} rx={3} fill="#FACC15" fillOpacity="0.8" />
      <ellipse cx={19} cy="19" rx="4" ry="4" fill="#FACC15" />
      <ellipse cx={93} cy="19" rx="4" ry="4" fill="#FACC15" />
    </svg>
  </motion.div>
);

// ✅ REFINED FEATURES
const features = [
  {
    icon: <Globe className="w-6 h-6 text-yellow-400" />,
    title: "Global Cinema Scope",
    description: "Beyond Hollywood. We curate masterpieces from Korea, Europe, and independent studios worldwide.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    title: "100% Legal Streaming",
    description: "We only recommend movies available on official platforms like Hulu, HBO Max, Netflix, and Prime Video.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Human Curation",
    description: "No algorithms. Our collections are hand-picked by cinephiles who understand the nuance of storytelling.",
  },
];

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Filmiway | The Premium Movie Discovery Platform</title>
        <meta
          name="description"
          content="Filmiway is a premium guide for discovering movies on Netflix, Hulu, HBO Max, and Prime Video. We curate the best of global cinema."
        />
        <link rel="canonical" href="https://filmiway.com/about-us" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden select-none">
        
        {/* ✅ BACKGROUND AMBIENCE */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* ✅ COMPACT NAVIGATION & LOGO (Scaled Down 5%) */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 h-16 sm:h-20 flex items-center">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <Link href="/" aria-label="Homepage" className="group">
              <Image
                src="/filmiway-logo.svg"
                alt="Filmiway Logo"
                width={110} 
                height={38}
                // Custom CSS width to get that perfect 5% reduction (w-[5.5rem] is 88px, sm:w-[7rem] is 112px)
                className="w-[5.5rem] sm:w-[7rem] h-auto object-contain group-hover:opacity-80 transition-opacity" 
                priority
              />
            </Link>
            <Link 
              href="/" 
              className="px-5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-medium transition-colors backdrop-blur-md"
            >
              Back to Home
            </Link>
          </div>
        </nav>

        {/* ✅ ADJUSTED MAIN PADDING */}
        <main className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-20">
          
          {/* ✅ COMPACT HERO SECTION */}
          <section className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-3 py-1 text-yellow-400 text-[10px] sm:text-xs font-semibold tracking-wide uppercase mb-6">
                <Sparkles className="w-3 h-3" />
                <span>Established (2026)</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-4 leading-[1.1]">
                Curating the 
                <span className="block font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">
                  Art of Cinema
                </span>
              </h1>
              
              <FilmReel />
              
              <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                Filmiway is the premier discovery engine for the modern cinephile. We help you cut through the noise of streaming algorithms.
              </p>
            </motion.div>
          </section>

          {/* ✅ "WHAT WE DO" */}
          <section className="mb-24">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {features.map((item, idx) => (
                <div key={idx} className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-yellow-500/30 transition-colors duration-300">
                  <div className="mb-4 bg-black/50 w-12 h-12 rounded-xl flex items-center justify-center border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </section>

          {/* ✅ THE MISSION */}
          <section className="mb-24 max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
                    Why We Built <span className="text-yellow-400 font-normal">Filmiway</span>
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                    <p>
                      In an era of endless scrolling, finding a great movie has become harder, not easier. Algorithms feed you "more of the same," burying cinematic gems.
                    </p>
                    <p>
                      We built Filmiway to bring the <strong className="text-white font-medium">human touch</strong> back to discovery. Whether it's a mind-bending thriller on <span className="text-white">HBO Max</span> or an indie romance on <span className="text-white">Hulu</span>, we find it so you don't have to.
                    </p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-auto grid grid-cols-2 gap-3">
                  <div className="bg-black/40 p-5 rounded-xl border border-white/5 text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">50+</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Genres</div>
                  </div>
                  <div className="bg-black/40 p-5 rounded-xl border border-white/5 text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Legal</div>
                  </div>
                  <div className="bg-black/40 p-5 rounded-xl border border-white/5 text-center col-span-2">
                    <div className="text-2xl font-bold text-white mb-1">Global</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ✅ FOUNDER SECTION (US/Korea/Europe Focus) */}
          <section className="mb-24 max-w-3xl mx-auto text-center">
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
             >
               <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-yellow-500/20">
                 <span className="text-xl font-bold text-black">S</span>
               </div>
               
               <h3 className="text-xl font-medium text-white mb-1">Shivam Singh</h3>
               <p className="text-yellow-500 text-xs tracking-wide uppercase font-semibold mb-6">Founder & Editor-in-Chief</p>
               
               <blockquote className="text-lg text-gray-300 font-light italic leading-relaxed">
                 "I started Filmiway with a simple belief: Cinema is a universal language. It doesn't matter if a masterpiece comes from <strong>Hollywood, Seoul, or the artistic hubs of Europe</strong>—if it pushes the boundaries of storytelling, you will find it here."
               </blockquote>
             </motion.div>
          </section>

          {/* ✅ TRUSTED PLATFORMS */}
          <section className="border-t border-b border-white/5 py-10 mb-16">
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">We Guide You To The Best Content On</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-lg font-bold text-white hover:text-[#1CE783]">Hulu</span>
               <span className="text-lg font-bold text-white hover:text-[#E50914]">Netflix</span>
               <span className="text-lg font-bold text-white hover:text-[#991EEB]">HBO Max</span>
               <span className="text-lg font-bold text-white hover:text-[#00A8E1]">Prime Video</span>
               <span className="text-lg font-bold text-white hover:text-white">Apple TV+</span>
            </div>
          </section>

          {/* ✅ LEGAL DISCLAIMER */}
          <footer className="text-center pt-8 border-t border-white/5">
            <div className="flex items-center justify-center gap-2 mb-3 text-yellow-500">
               <ShieldCheck className="w-4 h-4" />
               <span className="font-semibold text-sm">Official & Legal</span>
            </div>
            <p className="text-gray-500 text-xs max-w-2xl mx-auto leading-relaxed">
              Filmiway is a recommendation and discovery platform. We do not host, upload, or provide illegal links to copyrighted content. All movie recommendations point to official, legal streaming services or theatrical releases.
            </p>
            <div className="mt-6 text-[10px] text-gray-600">
              &copy; {new Date().getFullYear()} Filmiway Media. All rights reserved.
            </div>
          </footer>

        </main>
      </div>
    </>
  );
}