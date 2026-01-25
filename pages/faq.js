// pages/faq.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  HelpCircle, 
  ShieldCheck, 
  Globe, 
  MonitorPlay,
  XCircle,
  Tv 
} from "lucide-react";
import Image from "next/image";

// ✅ FAQ DATA
const faqs = [
  {
    question: "Is Filmiway a movie download or piracy site?",
    answer: "No. Filmiway is strictly a legal movie discovery platform. We do not host, upload, or provide links to pirated content. We help you find movies available to stream legally on every major streaming platform (including Netflix, Prime Video, HBO Max, Hulu, Disney+, and more).",
    icon: <XCircle className="w-5 h-5 text-red-500" />
  },
  {
    question: "Which streaming services do you cover?",
    answer: "We focus on every major global streaming platform. This includes Netflix, Amazon Prime Video, Hulu, HBO Max, Disney+, Apple TV+, Paramount+, Peacock and Mubi. If a movie is available to stream legally, we will guide you to it.",
    icon: <Tv className="w-5 h-5 text-pink-400" />
  },
  {
    question: "Which film industries and regions does Filmiway focus on?",
    answer: "We focus on Hollywood, Korean Cinema (K-Wave), and European Cinema, as well as the best of Global Cinema. Our platform is dedicated to showcasing high-quality international storytelling with universal appeal.",
    icon: <MonitorPlay className="w-5 h-5 text-yellow-400" />
  },
  {
    question: "Which countries is Filmiway designed for?",
    answer: "Filmiway is curated specifically for audiences in the USA, UK, Canada, and Australia. Our recommendations focus on streaming libraries available in these Tier 1 regions.",
    icon: <Globe className="w-5 h-5 text-blue-400" />
  },
  {
    question: "Is Filmiway free to use?",
    answer: "Yes, using Filmiway to find recommendations is 100% free. However, to watch the movies we recommend, you will need a subscription to the respective official streaming service (like Netflix or Hulu).",
    icon: <ShieldCheck className="w-5 h-5 text-green-400" />
  }
];

// ✅ STATIC ITEM (No Clicking Required - Text Always Visible)
const FAQItem = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-white/5 bg-zinc-900/40 backdrop-blur-sm rounded-2xl overflow-hidden mb-6 p-8 hover:border-yellow-500/20 transition-colors"
    >
      <div className="flex items-start gap-4">
        {/* Icon Box */}
        <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex-shrink-0 mt-1">
          {item.icon}
        </div>
        
        {/* Text Content */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
            {item.question}
          </h3>
          <p className="text-gray-400 font-light leading-relaxed text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Filmiway Help</title>
        <meta name="description" content="Common questions about Filmiway. Learn about our legal streaming focus, supported regions, and cinematic coverage." />
        <link rel="canonical" href="https://filmiway.com/faq" />
        
        {/* ✅ GOOGLE FAQ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden select-none">
        
        {/* ✅ BACKGROUND AMBIENCE */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* ✅ COMPACT NAVIGATION */}
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

        <main className="relative z-20 max-w-3xl mx-auto px-6 pt-32 pb-20">
          
          {/* ✅ HEADER SECTION */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-wide uppercase mb-6">
                <HelpCircle className="w-3 h-3" />
                <span>Help Center</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-6">
                Frequently Asked 
                <span className="block font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">
                  Questions
                </span>
              </h1>
              
              <p className="text-gray-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
                Everything you need to know about Filmiway's mission, regions, and content.
              </p>
            </motion.div>
          </div>

          {/* ✅ FAQ LIST (Always Visible) */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} item={faq} index={index} />
            ))}
          </div>

          {/* ✅ CONTACT FOOTER - EMAIL VISIBLE */}
          <footer className="text-center pt-16 border-t border-white/5 mt-12">
            <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
            {/* The Email is now plainly visible as text */}
            <a 
              href="mailto:filmiway.media@gmail.com" 
              className="text-yellow-400 hover:text-white transition-colors border-b border-yellow-400/50 pb-0.5 text-lg"
            >
              filmiway.media@gmail.com
            </a>
            <div className="mt-8 text-[10px] text-gray-600 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Filmiway Media
            </div>
          </footer>

        </main>
      </div>
    </>
  );
}