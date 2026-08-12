// pages/partners.js
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, ExternalLink, Zap, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

export default function Partners() {
  const affiliateLink = "https://go.expressvpn.com/c/7564909/1462856/16063";

  return (
    <>
      <Head>
        <title>Official Partners | Filmiway & ExpressVPN Partnership</title>
        <meta
          name="description"
          content="Learn about Filmiway's official partnership with ExpressVPN. Access exclusive Back to Campus deals, secure your family stream, and unblock global catalogs."
        />
        <link rel="canonical" href="https://www.filmiway.com/partners" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-yellow-500/30 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px]" />
        </div>

        <Header />

        <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 rounded-full px-4 py-1.5 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                <Shield className="w-4 h-4 text-red-400" />
                <span>OFFICIAL SECURITY & PRIVACY PARTNER</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.15] mb-6">
                Filmiway &{" "}
                <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-amber-500">
                  ExpressVPN
                </span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
                We have partnered with ExpressVPN to help families watch their favorite movies securely, prevent ISP throttling, and unblock global streaming catalogs safely.
              </p>
            </motion.div>
          </div>

          {/* Campaign Deal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-b from-zinc-900 to-black border border-red-500/20 rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.05)] mb-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center justify-between">
              <div className="flex-1 text-center lg:text-left">
                <span className="text-red-400 text-xs font-extrabold uppercase tracking-widest block mb-2">
                  🎒 BACK TO CAMPUS SPECIAL OFFER
                </span>
                <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4">
                  Get 80% Off + 4 Months Free!
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light mb-6">
                  Protect your browsing history from network admins, block ISP speed limits, and access regional libraries on Netflix, Prime Video, and Disney+ with the world's most trusted VPN.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start text-xs sm:text-sm text-gray-300">
                  <span className="flex items-center gap-1.5 justify-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> $2.99/mo (80% Savings)
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5 justify-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> +4 Bonus Months Free
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5 justify-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> 30-Day Money-Back Guarantee
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0 w-full lg:w-auto text-center">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg cursor-pointer bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto"
                >
                  <span>Claim Filmiway Deal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Partnership Value Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-red-500/20 transition-all duration-300">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 w-fit mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Bypass ISP Throttling</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Internet providers frequently throttle connection speeds when they detect high-bandwidth movie streaming. ExpressVPN encrypts your traffic to prevent speed limits.
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-red-500/20 transition-all duration-300">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 w-fit mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Secure Private Browsing</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Keep your private movie searches and family logs hidden from local network administrators, routers, and ISPs with industry-leading 256-bit encryption standards.
              </p>
            </div>

            <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-red-500/20 transition-all duration-300">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Global Library Access</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Many films in our parents guide are geo-blocked outside the US or UK. ExpressVPN allows you to connect to overseas servers to unlock global content catalogs instantly.
              </p>
            </div>
          </div>

          {/* Legal Partner Disclosure (Crucial for Google HCS Guidelines) */}
          <footer className="text-center pt-8 border-t border-white/5 text-xs text-gray-500 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-2">
              <strong>Affiliate Disclosure:</strong> Filmiway is an official partner and approved affiliate of ExpressVPN. When you click links on our page and purchase a subscription, we receive a commission from ExpressVPN. This comes at no additional cost to you and helps us keep our manual movie guide database 100% free for families worldwide.
            </p>
            <p>
              &copy; 2026 Filmiway Media. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
