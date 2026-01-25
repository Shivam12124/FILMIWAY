// pages/terms.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, 
  ShieldAlert, 
  CheckCircle, 
  Scale, 
  ServerCrash,
  Mail,
  Copyright
} from "lucide-react";
import Image from "next/image";

export default function Terms() {
  const lastUpdated = "January 24, 2026";

  return (
    <>
      <Head>
        <title>Terms of Service | Filmiway Legal</title>
        <meta name="description" content="Filmiway Terms of Service. Our commitment to legal streaming and zero-tolerance policy towards piracy." />
        <link rel="canonical" href="https://filmiway.com/terms" />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden select-none">
        
        {/* ✅ BACKGROUND AMBIENCE (Matches About/Privacy) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* ✅ COMPACT NAVIGATION & LOGO */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 h-16 sm:h-20 flex items-center">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <Link href="/" aria-label="Homepage" className="group">
              <Image
                src="/filmiway-logo.svg"
                alt="Filmiway Logo"
                width={110} 
                height={38}
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

        <main className="relative z-20 max-w-4xl mx-auto px-6 pt-32 pb-20">
          
          {/* ✅ HEADER SECTION */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-wide uppercase mb-6">
                <Scale className="w-3 h-3" />
                <span>Legal Agreements</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-6">
                Terms of 
                <span className="block font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">
                  Service
                </span>
              </h1>
              
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Please read these terms carefully. By using Filmiway, you agree to abide by the rules set forth below.
              </p>
              
              <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>

          {/* ✅ TERMS CONTENT */}
          <div className="space-y-8">
            
            {/* Section 1: Acceptance */}
            <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                  <p className="text-gray-400 leading-relaxed font-light">
                    By accessing Filmiway ("the Service"), you agree to be bound by these Terms. If you do not agree to these terms, you may not use the Service.
                  </p>
                </div>
              </div>
            </section>

            {/* ✅ Section 2: THE ANTI-PIRACY CLAUSE (Most Important for Google) */}
            <section className="bg-red-950/20 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-4">
                <ShieldAlert className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Content Legality & Zero Piracy Policy</h2>
                  <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                    <p>
                      <strong>Filmiway is NOT a piracy site.</strong> We strictly operate as a movie discovery and recommendation engine.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>We <strong>DO NOT</strong> host, store, upload, or index any copyrighted video files (such as .mp4, .mkv, .avi) on our servers.</li>
                      <li>We <strong>DO NOT</strong> provide links to illegal streaming sites, torrents, or unauthorized downloads.</li>
                      <li>All "Watch" buttons on our platform redirect users exclusively to official, legal streaming services (e.g., Hulu, Netflix, HBO Max) or theatrical ticketing platforms.</li>
                    </ul>
                    <p className="text-sm italic text-gray-500 mt-4">
                      Any user attempts to post, share, or request illegal content will result in an immediate ban.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Data Source */}
            <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-4">
                <Copyright className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
                  <p className="text-gray-400 leading-relaxed font-light mb-4">
                    <strong>Filmiway Branding:</strong> The Filmiway logo, site design, and curated text lists are the property of Filmiway Media.
                  </p>
                  <p className="text-gray-400 leading-relaxed font-light">
                    <strong>Movie Data:</strong> Film posters, backdrops, and plot summaries are provided via the <strong>TMDB API</strong>. This content remains the property of its respective owners and is used here under fair use for informational purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Disclaimers */}
            <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-4">
                <ServerCrash className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Disclaimer of Warranties</h2>
                  <p className="text-gray-400 leading-relaxed font-light">
                    The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We do not guarantee that the information (such as release dates or streaming availability) is 100% accurate at all times, as streaming licensing deals change frequently.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Contact */}
            <section className="bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-3xl p-8 sm:p-10 text-center">
              <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-2xl font-light text-white mb-4">Contact Legal</h2>
              <p className="text-gray-400 mb-6 font-light">
                For legal inquiries or DMCA notices, please contact us directly.
              </p>
              <a 
                href="mailto:filmiway.media@gmail.com" 
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-lg font-medium border-b border-yellow-400/30 pb-1"
              >
                filmiway.media@gmail.com
              </a>
            </section>

          </div>

          {/* ✅ FOOTER */}
          <footer className="text-center pt-16 border-t border-white/5 mt-16">
            <div className="flex items-center justify-center gap-2 mb-3 text-gray-500">
               <FileText className="w-4 h-4" />
               <span className="font-semibold text-xs uppercase tracking-widest">Legal Documentation</span>
            </div>
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} Filmiway Media. All rights reserved.
            </p>
          </footer>

        </main>
      </div>
    </>
  );
}