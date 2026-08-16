import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  Users, 
  EyeOff,
  BellRing,
  Search
} from "lucide-react";
import Header from "../components/Header";

export default function FilmiwayVsImdbParentsGuide() {
  return (
    <>
      <Head>
        <title>Filmiway vs IMDb Parents Guide | The Real-Time Alternative</title>
        <meta name="description" content="Compare Filmiway vs IMDb Parents Guide. Learn why our curated, spoiler-free, and precise real-time watch-along alerts are better than crowd-sourced movie warnings." />
        <link rel="canonical" href="https://filmiway.com/filmiway-vs-imdb-parents-guide" />
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden select-none">
        
        {/* ✅ BACKGROUND AMBIENCE */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <Header />

        <main className="relative z-20 max-w-5xl mx-auto px-6 pt-32 pb-20">
          
          {/* ✅ HEADER SECTION */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-wide uppercase mb-6">
                <ShieldCheck className="w-3 h-3" />
                <span>Competitor Comparison</span>
              </div>
              
              <div className="text-gray-500 text-sm mb-6 font-light">
                Last Updated: August 6, 2026
              </div>

              <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-6">
                Filmiway vs <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">IMDb Parents Guide</span>
              </h1>
              
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                The IMDb Parents Guide is incredibly popular, but its crowd-sourced structure often leads to massive spoilers, inconsistency, and zero real-time utility. See how Filmiway fixes these problems.
              </p>
            </motion.div>
          </div>

          {/* ✅ COMPARISON TABLE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-white/10 text-gray-400 font-medium text-lg w-1/3">Feature</th>
                    <th className="p-4 border-b border-white/10 text-yellow-400 font-semibold text-xl w-1/3 text-center bg-yellow-500/5 rounded-t-xl">Filmiway</th>
                    <th className="p-4 border-b border-white/10 text-white font-semibold text-xl w-1/3 text-center">IMDb Parents Guide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 flex items-center gap-2"><Clock className="w-4 h-4 text-gray-500"/> Precise Scene Timestamps</td>
                    <td className="p-4 text-center bg-yellow-500/5"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-6 h-6 text-red-400/50 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 flex items-center gap-2"><BellRing className="w-4 h-4 text-gray-500"/> Real-Time Alert System</td>
                    <td className="p-4 text-center bg-yellow-500/5"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="w-6 h-6 text-red-400/50 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 flex items-center gap-2"><EyeOff className="w-4 h-4 text-gray-500"/> 100% Spoiler-Free Guarantee</td>
                    <td className="p-4 text-center bg-yellow-500/5"><CheckCircle2 className="w-6 h-6 text-green-400 mx-auto" /></td>
                    <td className="p-4 text-center text-gray-400 text-sm">High risk of spoilers</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-gray-300 flex items-center gap-2"><Users className="w-4 h-4 text-gray-500"/> Data Source</td>
                    <td className="p-4 text-center bg-yellow-500/5 text-gray-300 text-sm">Curated & Verified</td>
                    <td className="p-4 text-center text-gray-300 text-sm">Crowd-sourced & Unverified</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ✅ DEEP DIVE EXPLANATION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-yellow max-w-3xl mx-auto"
          >
            <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-12">
              
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
                The Problem with Crowd-Sourced Guides
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                The IMDb Parents Guide has been the default choice for years, but its crowd-sourced structure is fundamentally flawed for modern viewing habits. Because anyone can edit the guide, the quality is highly inconsistent. One user might give a vague description of a scene, while another user might accidentally reveal the entire ending of the movie just to explain a moment of violence.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Imagine trying to find out if a movie has a graphic scene, and instead, you accidentally read a massive spoiler about the main character's fate. This happens daily on crowd-sourced platforms because there is no strict editorial control focused purely on utility.
              </p>

              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 mt-12">
                Reading vs. Actionable Utility
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Furthermore, reading block paragraphs of text on IMDb doesn't help you actually <em>skip</em> the scene. By the time you realize the scene they described is happening on your TV, it's often too late. You are left scrambling for the remote, trying to fast-forward while covering your screen.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                Movie guides should be tools, not essays. When you sit down for a family movie night, you want to put your phone away, relax, and trust that you have a system in place to handle the awkward moments. That is exactly where Filmiway comes in.
              </p>

              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 mb-8 mt-8">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-yellow-400" /> Actionable, Accurate Utilities
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Filmiway's team manually verifies our timestamps to the exact second. We provide a clean, beautiful, and distraction-free interface with our <strong>Watch-Along Timer</strong>. You don't have to read paragraphs of spoilers; you just hit start.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed m-0">
                  Our website will silently count down alongside your movie. Just leave your phone on, and exactly 12 seconds before a scene begins, we make a sound to alert you—giving you the perfect window to skip sexual content in movies before it even appears on screen. It is the modern, real-time solution to an outdated problem.
                </p>
              </div>

            </div>
          </motion.div>

          {/* ✅ FOOTER SECTION */}
          <footer className="text-center pt-24 border-t border-white/5 mt-20 relative z-30">
            <h3 className="text-2xl font-light text-white mb-6">Ready to try it?</h3>
            
            <form action="/search" method="GET" className="relative max-w-xl mx-auto mb-12">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-500 group-focus-within:text-yellow-400 transition-colors" />
                </div>
                <input 
                  type="text" 
                  name="q"
                  placeholder="Search for a movie (e.g. Inception)..." 
                  className="w-full bg-zinc-900/80 border border-white/10 rounded-full py-4 pl-12 pr-32 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all shadow-xl"
                  required
                />
                <button type="submit" className="absolute inset-y-1.5 right-1.5 bg-yellow-500 hover:bg-yellow-400 text-black px-6 rounded-full font-bold tracking-wide transition-colors">
                  Try It
                </button>
              </div>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 font-light mt-8">
              <Link href="/how-to-skip-awkward-scenes-in-movies" className="hover:text-yellow-400 underline transition-colors font-medium text-gray-300">
                How to Skip Awkward Scenes in Movies
              </Link>
              <span>•</span>
              <Link href="/vidangel-alternatives" className="hover:text-yellow-400 underline transition-colors">
                Best VidAngel Alternatives (100% Free)
              </Link>
              <span>•</span>
              <Link href="/watch-along-timer" className="hover:text-yellow-400 underline transition-colors">
                Live Watch-Along Sync Timer
              </Link>
            </div>
          </footer>

        </main>
      </div>
    </>
  );
}
