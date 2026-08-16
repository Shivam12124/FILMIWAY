import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Sparkles, 
  DollarSign, 
  Smartphone, 
  Zap, 
  Lock, 
  HelpCircle, 
  Play, 
  Search, 
  ArrowRight, 
  Award,
  ChevronDown,
  Monitor,
  EyeOff,
  Film,
  ExternalLink
} from 'lucide-react';
import Header from '../components/Header';

export default function VidAngelAlternatives() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const publishDateDisplay = "August 14, 2026";

  // ⚡ ENHANCED SEO SCHEMAS
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://filmiway.com/vidangel-alternatives#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://filmiway.com/vidangel-alternatives"
        },
        "headline": "Best VidAngel Alternatives (100% Free & No Subscription Required)",
        "description": "Compare the best free VidAngel alternatives for movie content filtering and scene skipping. Learn how to skip explicit scenes without a $9.99/mo subscription.",
        "datePublished": "2026-08-14T08:00:00.000Z",
        "dateModified": "2026-08-14T08:00:00.000Z",
        "author": {
          "@type": "Organization",
          "name": "Filmiway Editorial Team",
          "url": "https://filmiway.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Filmiway",
          "url": "https://filmiway.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://filmiway.com/icon-512.png"
          }
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Filmiway Watch-Along & Skip Timestamps Tool",
        "operatingSystem": "Web, iOS, Android, Smart TV",
        "applicationCategory": "EntertainmentApplication",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is there a 100% free alternative to VidAngel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Filmiway is a 100% free VidAngel alternative. Unlike VidAngel, which costs $9.99 per month plus streaming subscriptions, Filmiway provides free skip timestamps, Parents Guide alerts, and a real-time Watch-Along Sync Timer with zero subscription fees or registration."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to give credit card info or install software for Filmiway?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Filmiway requires no credit card, no monthly subscription, no account registration, and no browser extension installations. It runs directly in any web browser on your phone, tablet, or PC."
            }
          },
          {
            "@type": "Question",
            "name": "How does Filmiway work on Smart TVs, Firestick, and Roku?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply play the movie on your Smart TV or streaming device using your favorite service (Netflix, Prime Video, HBO Max, etc.), open Filmiway on your mobile phone, and tap Launch Watch-Along Timer when the film starts. Filmiway syncs in real-time and alerts you 12 seconds before explicit scenes occur so you can skip ahead."
            }
          },
          {
            "@type": "Question",
            "name": "Why are users looking for alternatives to VidAngel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VidAngel requires a $9.99/month paid subscription, linking personal streaming credentials, and installing browser extensions. Users seeking privacy, zero fees, and compatibility across all platforms prefer web-based timestamp alternatives like Filmiway."
            }
          }
        ]
      }
    ]
  };

  const alternativesList = [
    {
      rank: 1,
      name: "Filmiway",
      isEditorChoice: true,
      tagline: "The #1 Free VidAngel Alternative & Real-Time Skip Timestamp Tool",
      cost: "100% Free (No Fees)",
      subscriptionRequired: "No Subscription Needed",
      creditCardRequired: "No Credit Card Required",
      setupTime: "Instant (0 Seconds)",
      precision: "Exact Millisecond Timestamps",
      liveSync: "Live Watch-Along Sync Timer",
      privacy: "100% Private (No Account Login)",
      pros: [
        "Completely free forever with zero hidden fees",
        "Works with Netflix, Prime Video, HBO Max, Hulu, Paramount+, Disney+, and 4K Blu-ray",
        "Includes real-time Watch-Along timer that alerts you 12 seconds before explicit scenes",
        "No account creation, no password linking, no credit card required",
        "Provides curated Parents Guides, Age Ratings, and Family Safety Scores"
      ],
      cons: [
        "Requires manual skipping on TV via remote when prompted by phone timer alert"
      ],
      summary: "Filmiway is the leading free alternative to VidAngel. Instead of charging $9.99/month and asking for your Netflix login credentials, Filmiway provides curated skip timestamps and a real-time mobile sync timer that lets you skip explicit content on any device for free.",
      officialUrl: "https://www.filmiway.com"
    },
    {
      rank: 2,
      name: "IMDb Parents Guide",
      officialUrl: "https://www.imdb.com",
      isEditorChoice: false,
      tagline: "Crowd-Sourced Content Warnings & Maturity Categories",
      cost: "Free (Ad-Supported)",
      subscriptionRequired: "No",
      creditCardRequired: "No",
      setupTime: "Instant",
      precision: "Low (No Timestamps)",
      liveSync: "None",
      privacy: "Public Web Page",
      pros: [
        "Covers almost every released movie and TV show",
        "Breakdown by Nudity, Violence, Profanity, Alcohol, and Frightening Scenes"
      ],
      cons: [
        "Provides text descriptions but NO exact timestamp markers",
        "High risk of major plot spoilers",
        "Crowd-sourced content can be inconsistent or missing"
      ],
      summary: "IMDb’s Parents Guide tells you whether a movie contains explicit content, but it does not tell you exactly when the scenes happen. It is useful for general research but cannot help you skip scenes in real-time."
    },
    {
      rank: 3,
      name: "Common Sense Media",
      officialUrl: "https://www.commonsensemedia.org",
      isEditorChoice: false,
      tagline: "Educational Age Ratings & Family Reviews",
      cost: "Freemium ($3/mo for Full Access)",
      subscriptionRequired: "Yes for Unlimited Access",
      creditCardRequired: "Yes for Premium",
      setupTime: "Requires Account",
      precision: "Low (General Summaries)",
      liveSync: "None",
      privacy: "Account Required",
      pros: [
        "High-quality educational analysis for parents with young children",
        "Includes positive messages and role model assessments"
      ],
      cons: [
        "Limits free article views behind a monthly paywall",
        "No exact scene timestamps or skip tools"
      ],
      summary: "Common Sense Media is tailored for parents evaluating movie suitability for young children, but its paywall and lack of timestamp data make it less useful for viewers wanting to filter scenes."
    },
    {
      rank: 4,
      name: "ClearPlay",
      officialUrl: "https://www.clearplay.com",
      isEditorChoice: false,
      tagline: "Hardware & Extension Based Filter for Custom Media",
      cost: "$7.99 / Month",
      subscriptionRequired: "Yes ($7.99/mo)",
      creditCardRequired: "Yes",
      setupTime: "15–30 Minutes",
      precision: "High (Automated Mute/Skip)",
      liveSync: "Integrated Extension",
      privacy: "Requires Account & Software",
      pros: [
        "Mutes audio and skips video automatically on supported web browsers"
      ],
      cons: [
        "Requires $7.99/mo subscription fee",
        "Limited device support (requires specific browser extensions or specialized hardware)",
        "Complex setup process"
      ],
      summary: "ClearPlay is a traditional filtering service that automatically mutes and skips content on supported web browsers, but it requires a monthly paid subscription and software installation."
    },
    {
      rank: 5,
      name: "VidAngel (Paid Filter)",
      officialUrl: "https://www.vidangel.com",
      isEditorChoice: false,
      tagline: "Paid Subscription Filter ($9.99/mo)",
      cost: "$9.99 / Month",
      subscriptionRequired: "Yes ($9.99/mo)",
      creditCardRequired: "Yes",
      setupTime: "10-15 Minutes",
      precision: "High (Automated Mute/Skip)",
      liveSync: "Integrated App",
      privacy: "Requires Account & Credentials",
      pros: [
        "Automated audio muting and video skipping"
      ],
      cons: [
        "Requires $9.99/mo paid subscription",
        "Breaks when streaming platforms update DRM"
      ],
      summary: "VidAngel is a paid filtering app that requires a monthly subscription and account linking, but provides automated skipping for supported streaming services."
    }
  ];

  const faqs = [
    {
      q: "Is VidAngel free to use?",
      a: "No. VidAngel charges a $9.99 per month subscription fee in addition to requiring you to maintain active subscriptions to streaming services like Netflix, Amazon Prime Video, or Apple TV+."
    },
    {
      q: "What is the best 100% free alternative to VidAngel?",
      a: "Filmiway is the best 100% free alternative to VidAngel. Filmiway gives you exact start-and-end skip timestamps for mature content, curated Parents Guides, and a live Watch-Along Sync Timer that runs on your smartphone while watching any film on your TV."
    },
    {
      q: "Do I need to install a browser extension or enter credit card info for Filmiway?",
      a: "No. Filmiway requires no software installations, no browser extensions, no credit cards, and no account creation. It works directly in any standard web browser on your phone, tablet, or PC."
    },
    {
      q: "How does Filmiway work on Smart TVs, Firestick, Roku, and Apple TV?",
      a: "You simply play the movie on your Smart TV via any service. Open Filmiway's Watch-Along Timer on your mobile phone and tap start when the movie title card appears. The phone timer syncs in real-time and alerts you 12 seconds before explicit scenes occur, allowing you to easily skip ahead with your TV remote."
    },
    {
      q: "Is Filmiway safe and legal to use?",
      a: "Yes, Filmiway is 100% legal, safe, and privacy-focused. Filmiway does not stream, host, edit, or modify video files. It acts as an educational index providing time markers and synchronization tools to help viewers manage their viewing experience."
    }
  ];

  return (
    <>
      <Head>
        <title>Best VidAngel Alternatives (100% Free & No Subscription Required) - Filmiway</title>
        <meta name="description" content="Discover the best free VidAngel alternatives for filtering movie content and skipping explicit scenes. Compare Filmiway, IMDb, ClearPlay, and Common Sense Media without paying $9.99/mo." />
        <link rel="canonical" href="https://filmiway.com/vidangel-alternatives" />
        
        {/* OpenGraph & Twitter Cards */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best VidAngel Alternatives (100% Free & No Subscription Required)" />
        <meta property="og:description" content="Looking for free VidAngel alternatives? Discover the top free movie skip timestamp tools that require no monthly subscription or credit card." />
        <meta property="og:url" content="https://filmiway.com/vidangel-alternatives" />
        <meta property="og:image" content="https://filmiway.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      </Head>

      <div className="relative min-h-screen bg-[#030303] text-white font-sans overflow-x-hidden selection:bg-yellow-500/30 selection:text-yellow-200">
        
        {/* Iconic Yellow & Black Background Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-yellow-500/10 via-amber-500/5 to-transparent blur-[140px]" />
          <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px]" />
        </div>

        <Header />

        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 sm:pt-56 lg:pt-60 pb-24">
          
          {/* HERO SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* HERO BADGES */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8 pt-4" suppressHydrationWarning>
                <div className="inline-flex items-center gap-2 border border-yellow-500/40 bg-zinc-900/95 rounded-full px-5 py-2 text-gray-200 text-xs sm:text-sm font-medium tracking-wide uppercase backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all" suppressHydrationWarning>
                  {isMounted ? <Clock className="w-4 h-4 text-yellow-400 shrink-0" /> : <div className="w-4 h-4" />}
                  <span>Updated: <strong className="text-yellow-400 font-bold">{publishDateDisplay}</strong> • Editorial Review</span>
                </div>
                <div className="inline-flex items-center gap-2 border border-amber-500/50 bg-amber-500/15 rounded-full px-5 py-2 text-yellow-400 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.2)]" suppressHydrationWarning>
                  {isMounted ? <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" /> : <div className="w-4 h-4" />}
                  <span>100% Free & No Subscription</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-[1.15]">
                Best <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">VidAngel Alternatives</span> for Free Movie Filtering
              </h1>
              
              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                Love watching movies with family but hate paying <strong className="text-amber-400 font-medium">$9.99/month</strong> for VidAngel or linking sensitive account passwords? Here are the top free alternatives to filter explicit scenes, awkward moments, and profanity effortlessly.
              </p>

              {/* QUICK SEARCH BOX */}
              <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search any movie to get free skip timestamps..."
                    className="w-full bg-white/[0.04] border border-white/15 focus:border-yellow-500/60 rounded-full py-4 pl-12 pr-32 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 backdrop-blur-md transition-all duration-300 shadow-xl"
                  />
                  <Search className="absolute left-4 text-gray-400 w-5 h-5" />
                  <button
                    type="submit"
                    className="absolute right-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-1.5"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-light">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> $0 Monthly Cost</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> No Credit Card Required</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Works on TV & Mobile</span>
              </div>
            </motion.div>
          </div>

          {/* COMPARISON MATRIX TABLE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">
                VidAngel vs Free Alternatives Comparison
              </h2>
              <p className="text-gray-400 text-sm font-light">
                Compare costs, requirements, and features at a glance
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="p-4 sm:p-5 text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Platform</th>
                    <th className="p-4 sm:p-5 text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Monthly Cost</th>
                    <th className="p-4 sm:p-5 text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Credit Card Needed?</th>
                    <th className="p-4 sm:p-5 text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Timestamp Precision</th>
                    <th className="p-4 sm:p-5 text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Live Sync Timer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {/* Filmiway Row */}
                  <tr className="bg-yellow-500/10 hover:bg-yellow-500/15 transition-colors border-l-4 border-l-yellow-500">
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400 shrink-0" />
                      <div>
                        <span className="block text-sm sm:text-base text-white font-semibold">Filmiway</span>
                        <span className="text-[10px] text-yellow-400 font-normal">Rank #1 (Best Free Alternative)</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-yellow-400">$0 (100% Free)</td>
                    <td className="p-4 sm:p-5 text-yellow-400 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> NO</td>
                    <td className="p-4 sm:p-5 text-gray-200">Exact Milliseconds</td>
                    <td className="p-4 sm:p-5 text-yellow-400 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> YES (Included)</td>
                  </tr>

                  {/* VidAngel Row */}
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-gray-300">VidAngel</td>
                    <td className="p-4 sm:p-5 text-red-400 font-medium">$9.99 / Month</td>
                    <td className="p-4 sm:p-5 text-gray-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400/70" /> YES</td>
                    <td className="p-4 sm:p-5 text-gray-300">Automated Mute/Skip</td>
                    <td className="p-4 sm:p-5 text-gray-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-gray-600" /> NO</td>
                  </tr>

                  {/* ClearPlay Row */}
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-gray-300">ClearPlay</td>
                    <td className="p-4 sm:p-5 text-red-400 font-medium">$7.99 / Month</td>
                    <td className="p-4 sm:p-5 text-gray-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400/70" /> YES</td>
                    <td className="p-4 sm:p-5 text-gray-300">Automated Mute/Skip</td>
                    <td className="p-4 sm:p-5 text-gray-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-gray-600" /> NO</td>
                  </tr>

                  {/* IMDb Parents Guide Row */}
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-gray-300">IMDb Parents Guide</td>
                    <td className="p-4 sm:p-5 text-yellow-400 font-medium">$0 (Free)</td>
                    <td className="p-4 sm:p-5 text-yellow-400 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> NO</td>
                    <td className="p-4 sm:p-5 text-red-400/80">No Timestamps</td>
                    <td className="p-4 sm:p-5 text-gray-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-gray-600" /> NO</td>
                  </tr>

                  {/* Common Sense Media Row */}
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-gray-300">Common Sense Media</td>
                    <td className="p-4 sm:p-5 text-amber-300 font-medium">Freemium ($3/mo)</td>
                    <td className="p-4 sm:p-5 text-gray-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400/70" /> YES for Premium</td>
                    <td className="p-4 sm:p-5 text-red-400/80">No Timestamps</td>
                    <td className="p-4 sm:p-5 text-gray-400 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-gray-600" /> NO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* DETAILED REVIEWS OF TOP 5 ALTERNATIVES */}
          <div className="space-y-12 mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-3">
                Top 5 VidAngel Alternatives Reviewed
              </h2>
              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                Detailed breakdowns of costs, privacy, setup ease, and timestamp accuracy.
              </p>
            </div>

            {alternativesList.map((alt) => (
              <motion.div
                key={alt.rank}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition-all duration-300 shadow-xl ${
                  alt.isEditorChoice 
                    ? 'border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 via-black to-black shadow-[0_0_30px_rgba(245,158,11,0.15)]' 
                    : 'border-white/10 bg-black/40 hover:border-white/20'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
                  <div>
                    {alt.isEditorChoice && (
                      <div className="inline-flex items-center gap-1.5 bg-yellow-500 text-black font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md mb-3">
                        <Award className="w-3.5 h-3.5" />
                        <span>Rank #1 • Editor's Choice</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono font-bold text-black bg-yellow-500 px-2.5 py-1 rounded-md">
                        #{alt.rank}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-wide flex items-center gap-2">
                        {alt.name}
                        {alt.officialUrl && (
                          <a
                            href={alt.officialUrl}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-yellow-400 font-normal transition-colors ml-1"
                            title={`Visit ${alt.name} official website`}
                          >
                            <span>Visit Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-light text-amber-300/90">{alt.tagline}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1.5 rounded-lg border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-semibold">
                      {alt.cost}
                    </span>
                    <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 text-xs">
                      {alt.subscriptionRequired}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {alt.summary}
                </p>

                {/* PROS & CONS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Pros
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-light list-none p-0 m-0">
                      {alt.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-red-400/80" /> Cons
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-light list-none p-0 m-0">
                      {alt.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-gray-500 mt-1">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {alt.isEditorChoice && (
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <Smartphone className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span>Ready to skip scenes for free? Search any movie or test our live Watch-Along Timer.</span>
                    </div>
                    <Link
                      href="/how-to-skip-awkward-scenes-in-movies"
                      className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap"
                    >
                      <span>Try Free Skip Tool</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* HOW FILMIWAY WORKS AS A FREE VIDANGEL ALTERNATIVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2 block">Zero Software Installation</span>
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-4">
                How Filmiway Replaces VidAngel for Free
              </h2>
              <p className="text-gray-400 text-sm sm:text-base font-light">
                Skip awkward scenes on any TV or phone in 4 simple steps without linking account passwords.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 font-bold text-base flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                  1
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Search Any Movie</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Type any movie title into Filmiway on your phone, tablet, or laptop.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold text-base flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                  2
                </div>
                <h3 className="text-base font-semibold text-white mb-2">View Skip Timestamps</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  See exact start and end times (<code className="text-yellow-300">0:23:14 → 0:24:46</code>) for explicit scenes.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 font-bold text-base flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                  3
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Launch Sync Timer</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Tap <strong className="text-white font-normal">Launch Watch-Along Timer</strong> when starting the film on your TV.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold text-base flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                  4
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Get 12s Pre-Alerts</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Your phone vibrates & alerts you 12 seconds before scenes occur so you skip smoothly with your remote!
                </p>
              </div>
            </div>
          </motion.div>

          {/* FAQ ACCORDION SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-3xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-2 flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-yellow-400" />
                <span>Frequently Asked Questions</span>
              </h2>
              <p className="text-gray-400 text-sm font-light">
                Everything you need to know about free VidAngel alternatives
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-black/40 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-medium text-sm sm:text-base text-white">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-yellow-400 shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-white/5 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FINAL CTA FOOTER BANNER - ICONIC YELLOW & BLACK PALETTE */}
          <div className="rounded-3xl border border-yellow-500/30 bg-gradient-to-r from-yellow-950/30 via-black to-amber-950/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto relative z-10">
              <h2 className="text-2xl sm:text-4xl font-light text-white mb-4">
                Ready to Skip Explicit Scenes for Free?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                Explore our curated collection of verified Parents Guides, exact skip timestamps, and real-time Watch-Along alerts.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/collections"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm px-8 py-3.5 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Film className="w-4 h-4" />
                  <span>Browse Movie Collections</span>
                </Link>
                <Link
                  href="/watch-along-timer"
                  className="bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-sm px-7 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>Launch Watch-Along Timer</span>
                </Link>
              </div>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
