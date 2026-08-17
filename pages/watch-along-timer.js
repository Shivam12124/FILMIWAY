import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Play, 
  Smartphone, 
  Clock, 
  BellRing,
  ShieldCheck,
  XCircle,
  EyeOff,
  Search
} from "lucide-react";
import Header from "../components/Header";

const steps = [
  {
    title: "Open your streaming app",
    description: "Launch Netflix, Hulu, HBO Max, or whichever platform your movie is on.",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Press play",
    description: "Start your movie from the beginning (0:00).",
    icon: <Play className="w-6 h-6 text-green-400" />
  },
  {
    title: "Tap Watch-Along Timer on Filmiway",
    description: "Find the movie on our site and press the Watch-Along Timer button.",
    icon: <Clock className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Receive alerts before awkward scenes",
    description: "Leave your phone on. We make a sound 12 seconds before an awkward scene begins so you can safely skip it.",
    icon: <BellRing className="w-6 h-6 text-purple-400" />
  }
];

export default function WatchAlongTimer() {
  const timerSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Filmiway Watch-Along Timer Tool",
        "url": "https://filmiway.com/watch-along-timer",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "All (Web-based)",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Real-time web application timer that syncs with film playback to provide audio and visual alerts 12 seconds before awkward or sensitive scenes occur."
      },
      {
        "@type": "HowTo",
        "name": "How to Use the Watch-Along Timer to Skip Awkward Movie Scenes",
        "description": "Step-by-step guide to syncing Filmiway's real-time Watch-Along Timer with movie streaming playback.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Launch your streaming app",
            "text": "Start your movie from 0:00 on Netflix, Hulu, HBO Max, or Prime Video."
          },
          {
            "@type": "HowToStep",
            "name": "Start the Filmiway Watch-Along Timer",
            "text": "Press the Watch-Along Timer button on Filmiway simultaneously as playback begins."
          },
          {
            "@type": "HowToStep",
            "name": "Receive Live Warnings",
            "text": "Listen for the sound notification 12 seconds before explicit or awkward scenes occur."
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Watch Along Timer Tool for Movies | Filmiway</title>
        <meta name="description" content="Use the Filmiway Watch-Along Timer Tool to get real-time alerts 12 seconds before awkward movie scenes begin. The ultimate real-time parents guide." />
        <link rel="canonical" href="https://filmiway.com/watch-along-timer" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(timerSchema) }}

        />
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden select-none">
        
        {/* ✅ BACKGROUND AMBIENCE */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <Header />

        <main className="relative z-20 max-w-4xl mx-auto px-6 pt-24 sm:pt-28 pb-20">
          
          {/* ✅ HEADER SECTION */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-wide uppercase mb-6">
                <BellRing className="w-3 h-3" />
                <span>Real-Time Utility</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-6">
                Watch-Along Timer <br />
                <span className="block font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 mt-2">
                  Get Movie Scene Alerts in Real Time
                </span>
              </h1>
              
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Say goodbye to manually checking timestamps and frantically reaching for the remote. Let our timer run alongside your movie and alert you exactly 12 seconds before awkward scenes happen.
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Utility • Last Updated: August 10, 2026</span>
              </div>
            </motion.div>
          </div>

          {/* ✅ HOW IT WORKS - 4 SIMPLE STEPS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-light text-center mb-12">How It Works: <span className="text-yellow-400 font-medium">4 Simple Steps</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-md hover:border-yellow-500/30 transition-colors">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-black border border-white/10 rounded-full flex items-center justify-center text-yellow-500 font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="bg-black/50 w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ✅ DEEP DIVE ARTICLE SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-yellow max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-b from-zinc-900/80 to-black border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-tight">
                The Missing Utility in Every Movie Guide
              </h2>
              
              <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                Most people assume every parent's guide has skip timestamps. The reality? <strong>Most platforms don't even provide skip timestamps.</strong> They offer massive walls of text detailing the plot, leaving you to guess when the actual awkward moment happens. We are the only free option providing these exact timestamps, allowing you to skip them seamlessly. <em>(We help families skip sexual content, nudity, and awkward scenes in movies).</em>
              </p>
              
              <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                Imagine this: You are watching a highly acclaimed movie with your family. Everyone is enjoying the story, the popcorn is out, and suddenly you get encountered with a sex or nudity scene. In seconds, a great movie night is completely ruined by awkward tension.
              </p>
              
              <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                <strong>But now, the solution is in your hands.</strong> Filmiway's Watch-Along Timer will run silently on your phone, doing all the hard work for you.
              </p>

              <div className="flex items-start gap-4 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 mb-8">
                <BellRing className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">The 12-Second Advantage</h3>
                  <p className="text-gray-300 font-light leading-relaxed m-0">
                    By syncing with your movie at 0:00, our timer actively monitors our curated database. Just leave your phone on. Exactly <strong>12 seconds before</strong> an awkward scene begins, we make a sound and your phone will flash an alert. This gives you the perfect window to simply reach for the remote and skip ahead—without ever breaking your immersion.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 mt-12 leading-tight">
                Where Most Parents Guides Fail
              </h2>

              <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                Traditional movie guides are fundamentally flawed for modern streaming. Here is why the Filmiway Watch-Along Timer is superior:
              </p>

              <div className="space-y-4">
                
                {/* Flaw 1 */}
                <div className="flex items-start gap-4 bg-black/40 border border-white/5 rounded-xl p-5">
                  <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">They Only Tell You "What" Not "When"</h4>
                    <p className="text-gray-400 text-sm">Most sites give you a massive wall of text describing every inappropriate moment in graphic detail, but they completely lack actionable timestamps. You know there is an awkward scene, but you have no idea when it happens.</p>
                  </div>
                </div>

                {/* Flaw 2 */}
                <div className="flex items-start gap-4 bg-black/40 border border-white/5 rounded-xl p-5">
                  <EyeOff className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">Massive Spoiler Risks</h4>
                    <p className="text-gray-400 text-sm">Reading through user-submitted parent guides often ruins major plot twists. Filmiway keeps it clean and spoiler-free, focusing strictly on utility.</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-4 bg-black/40 border border-white/5 rounded-xl p-5">
                  <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">The Filmiway Standard</h4>
                    <p className="text-gray-300 text-sm">We don't just review the movie. We provide precise, actionable, real-time alerts that solve the problem. And while others might lock premium features behind a paywall, <strong>we provide this real-time utility 100% for free.</strong></p>
                  </div>
                </div>

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
            <div className="mt-12 text-[10px] text-gray-600 uppercase tracking-widest">
              &copy; 2026 Filmiway Media. The Ultimate Real-Time Parents Guide.
            </div>
          </footer>

        </main>
      </div>
    </>
  );
}
