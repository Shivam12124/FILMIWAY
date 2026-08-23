// pages/privacy.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Globe, 
  FileText,
  Cookie,
  Server,
  Mail
} from "lucide-react";
import Image from "next/image";
import Header from "../components/Header";

export default function Privacy() {
  const lastUpdated = "August 23, 2026";

  return (
    <>
      <Head>
        <title>Privacy Policy | Filmiway Transparency Center</title>
        <meta name="description" content="We value your trust. Learn how Filmiway protects your data while you discover cinema and skip awkward movie scenes." />
        <link rel="canonical" href="https://www.filmiway.com/privacy" />
        <meta name="robots" content="index, follow" /> 
      </Head>

      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden select-none">
        
        {/* ✅ BACKGROUND AMBIENCE (Matches About Us) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <Header />

        <main className="relative z-20 max-w-4xl mx-auto px-6 pt-32 pb-20">
          
          {/* ✅ HEADER SECTION */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-wide uppercase mb-6">
                <ShieldCheck className="w-3 h-3" />
                <span>Transparency Center</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-6">
                Your Privacy, 
                <span className="block font-normal text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">
                  Respected & Protected
                </span>
              </h1>
              
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                At Filmiway, we believe in movie discovery and worry-free family viewing, not data brokering. Here is exactly how we handle your privacy.
              </p>
              
              <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>

          {/* ✅ POLICY CONTENT (Styled as Cards) */}
          <div className="space-y-8">
            
            {/* Section 1: Core Philosophy */}
            <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-4">
                <Lock className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">1. Our Core Privacy Promise</h2>
                  <p className="text-gray-400 leading-relaxed font-light">
                    We collect the absolute minimum amount of data required to provide our services. We do not sell, rent, or trade your personal information to third parties. Filmiway is a cinema discovery engine and family safety guide, not a surveillance company.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: What We Collect */}
            <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
                  <p className="text-gray-400 leading-relaxed font-light mb-4">
                    To maintain optimal site performance, we process:
                  </p>
                  <ul className="space-y-3 text-gray-400 font-light">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                      <span><strong>Usage Data:</strong> Aggregate views on movie guides and collections to help us curate better lists.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                      <span><strong>Technical Data:</strong> Browser type, device category, and approximate geographic region to ensure site stability and security.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                      <span><strong>Voluntary Data:</strong> Your email address, only if you choose to email us directly.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Skip Timestamps & Watch-Along Timer Privacy */}
            <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">3. Skip Timestamps & Watch-Along Timer Privacy</h2>
                  <p className="text-gray-400 leading-relaxed font-light mb-4">
                    Filmiway provides verified timestamps to skip awkward scenes and an interactive Watch-Along Sync Timer.
                  </p>
                  <p className="text-gray-400 leading-relaxed font-light">
                    All interactive timer controls and timestamp filtering operate <strong>100% locally inside your web browser</strong>. We do not store, log, or track your private family movie viewing history or timer usage on any external server.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: External Links */}
            <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-4">
                <Globe className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Streaming Platforms</h2>
                  <p className="text-gray-400 leading-relaxed font-light mb-4">
                    Filmiway is a discovery gateway. When you click outbound links to watch movies on platforms like <strong>Hulu, HBO Max, Paramount+, Peacock, Netflix, or Prime Video</strong>, you navigate to third-party services.
                  </p>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Data provided to third-party services (such as subscription info or account details) is governed entirely by their respective privacy policies. Filmiway never accesses your personal credentials or financial details.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 & 6: Cookies & Data Sources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
                <Cookie className="w-6 h-6 text-purple-400 mb-4" />
                <h2 className="text-lg font-semibold text-white mb-3">5. Cookies & Analytics</h2>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  We use minimal essential cookies for core navigation and basic aggregate traffic analytics. You can adjust or disable cookies in your browser settings at any time.
                </p>
              </section>

              <section className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
                <Server className="w-6 h-6 text-orange-400 mb-4" />
                <h2 className="text-lg font-semibold text-white mb-3">6. Data Sources & TMDB</h2>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Film metadata (posters, overviews, release dates, directors) is powered by <strong>The Movie Database (TMDB)</strong> API under their terms of use.
                </p>
              </section>
            </div>

            {/* Section 6: Contact */}
            <section className="bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-3xl p-8 sm:p-10 text-center">
              <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-2xl font-light text-white mb-4">Have Questions?</h2>
              <p className="text-gray-400 mb-6 font-light">
                If you have any questions about this policy or your data rights, our team is ready to help.
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
              &copy; 2026 Filmiway Media. All rights reserved.
            </p>
          </footer>

        </main>
      </div>
    </>
  );
}