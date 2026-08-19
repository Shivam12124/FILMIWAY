// pages/how-we-work.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  Eye,
  Search,
  Award,
  FileText,
  Lock,
  Sparkles,
  ChevronRight,
  Tv,
  Users
} from 'lucide-react';
import Header from '../components/Header';

export default function HowWeWork() {
  const publishDateStr = "2026-08-10";
  const lastUpdatedDisplay = "August 10, 2026";

  // ⚡ E-E-A-T SCHEMAS FOR GOOGLE CRAWLERS
  const methodologySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.filmiway.com/how-we-work",
        "url": "https://www.filmiway.com/how-we-work",
        "name": "How We Work: Manual Timestamp Verification & Methodology | Filmiway",
        "description": "Discover how Filmiway editors manually audit, timestamp, and verify movie content to provide 100% reliable family skip guides.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Filmiway",
          "url": "https://www.filmiway.com"
        }
      },
      {
        "@type": "HowTo",
        "name": "How Filmiway Manually Verifies Movie Skip Timestamps",
        "description": "Our 4-step editorial methodology for creating 100% accurate, second-by-second movie skip guides.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Full-Length Editorial Review",
            "text": "Editors watch the official release version of the movie from start to finish to log sensitive scenes."
          },
          {
            "@type": "HowToStep",
            "name": "Pinpoint Timecode Logging",
            "text": "Start and end timecodes are recorded down to the exact second for sexual content, nudity, and violence."
          },
          {
            "@type": "HowToStep",
            "name": "Text-Only Description & Categorization",
            "text": "Content is cataloged into clear, objective categories without hosting explicit images or screenshots."
          },
          {
            "@type": "HowToStep",
            "name": "Runtime & Cut Verification",
            "text": "Timestamps are cross-checked against theatrical, streaming, and physical media cuts for accuracy."
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>How We Work: Timestamp Verification & Methodology | Filmiway</title>
        <meta
          name="description"
          content="Learn how Filmiway editors manually audit, verify, and timecode movies to deliver 100% reliable skip timestamps and educational family guides."
        />
        <link rel="canonical" href="https://www.filmiway.com/how-we-work" />
        <meta name="robots" content="index, follow" />

        {/* Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologySchema) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-yellow-500/30 relative overflow-hidden">

        {/* Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-500/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
        </div>

        <Header />

        <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24">

          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                <ShieldCheck className="w-4 h-4 text-yellow-400" />
                <span>Editorial Methodology & Quality Standards</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.15] mb-6">
                How We Audit & Verify <br className="hidden sm:inline" />
                <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">
                  Every Skip Timestamp
                </span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
                At Filmiway, we believe families deserve total transparency and reliability when planning movie nights. Here is how our human editorial team reviews, timecodes, and verifies every film in our library.
              </p>

              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
                <span>100% Human Audited</span>
                <span>•</span>
                <span>Last Updated: {lastUpdatedDisplay}</span>
              </div>
            </motion.div>
          </div>

          {/* Core Trust Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
              <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 w-fit mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">100% Manually Watched</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                We never rely on automated scripts or AI hallucinations. Our human editors watch official releases from start to finish to log exact timestamps.
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Second-Level Precision</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Start and end timecodes are recorded down to the exact second (`0:23:14 → 0:24:46`), allowing seamless skips without missing crucial plot lines.
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Strict Text-Only Safety</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                We strictly maintain a safe environment. Filmiway never hosts explicit images or video clips—only objective, educational text summaries.
              </p>
            </div>
          </div>

          {/* Detailed 4-Step Process Section */}
          <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl mb-20">
            <div className="border-b border-white/10 pb-6 mb-8">
              <span className="text-yellow-500 text-xs font-semibold uppercase tracking-widest">Step-by-Step Breakdown</span>
              <h2 className="text-2xl sm:text-3xl font-light text-white mt-1">Our 4-Step Editorial Process</h2>
            </div>

            <div className="space-y-10">

              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 font-bold flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">Full Film Audit & Timestamps</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    An editor watches the official release of the film in real-time. Whenever an awkward or uncomfortable scene occurs, the exact start and end cues are marked to provide 100% reliable skip timestamps for families.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 font-bold flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">Objective Content Categorization & Age Recommendations</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Scenes are categorized into standardized advisories (<span className="text-gray-200">Sex & Nudity, Violence & Gore, Profanity</span>) with severity ratings (<span className="text-gray-200">Mild, Moderate, High</span>). We also provide tailored <span className="text-gray-200">Age Recommendations</span> and Family Safety Scores to guide parents on exact viewing suitability.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 font-bold flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">Runtime & Version Cross-Checking</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Because streaming services (Netflix, Prime Video, HBO Max) and physical media (Blu-ray, DVD) can differ by several seconds, we cross-check timestamps against official runtime figures so they remain accurate across platforms.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 font-bold flex items-center justify-center shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">Family Safety Score Calculation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Finally, our algorithm calculates the <span className="text-gray-200">Family Safety Score (1 to 10)</span> by factoring in total scene duration, intensity, and age recommendations. This gives parents an instant overview at a glance.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Comparison Table: Filmiway vs Crowd-Sourced */}
          <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl mb-20">
            <div className="border-b border-white/10 pb-6 mb-8">
              <span className="text-yellow-500 text-xs font-semibold uppercase tracking-widest">Quality Standard</span>
              <h2 className="text-2xl sm:text-3xl font-light text-white mt-1">Filmiway vs. Unverified Sources</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Feature</th>
                    <th className="py-3 px-4 text-yellow-400">Filmiway (Our Method)</th>
                    <th className="py-3 px-4 text-gray-500">Crowdsourced Forums / AI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">Verification Method</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">100% Manually Watched by Editors</td>
                    <td className="py-4 px-4 text-gray-500">Unverified Crowd Posts or AI Models</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">Timestamp Accuracy</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">Second-Level (`0:23:14 → 0:24:46`)</td>
                    <td className="py-4 px-4 text-gray-500">Vague Approximations or None</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">Platform Safety</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">100% Text-Only (No explicit media)</td>
                    <td className="py-4 px-4 text-gray-500">Varies / Unfiltered Links</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">Runtime Consistency</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">Cross-Checked Across Cuts</td>
                    <td className="py-4 px-4 text-gray-500">Often Off by Minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Footer Banner */}
          <div className="text-center bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-light text-white mb-4">
              Experience Worry-Free Family Movie Nights
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
              Explore our verified database of over 600+ movies equipped with exact skip timestamps, age recommendations, and watch-along timers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => window.location.href = '/movie-directory'}
                className="inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg border-0 cursor-pointer"
                style={{ backgroundColor: '#eab308', color: '#000000' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ca8a04'; e.currentTarget.style.color = '#000000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eab308'; e.currentTarget.style.color = '#000000'; }}
              >
                <span style={{ color: '#000000' }}>Browse Movie Directory</span>
                <ChevronRight className="w-4 h-4 text-black" style={{ color: '#000000' }} />
              </button>

              <button
                onClick={() => window.location.href = '/filmiway-vs-imdb-parents-guide'}
                className="inline-flex items-center justify-center gap-2 font-medium text-xs sm:text-sm px-7 py-3.5 rounded-xl transition-all duration-200 border cursor-pointer"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                <span style={{ color: '#FFFFFF' }}>Filmiway vs IMDb Parents Guide</span>
              </button>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
