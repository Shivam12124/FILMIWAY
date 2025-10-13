// pages/about.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Film,
  Globe,
  Shield,
  Search,
  Users,
  Heart,
  Star,
  Award,
  User,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const FilmReel = () => (
  <div className="flex justify-center my-10 select-none">
    <svg
      width={112}
      height={38}
      viewBox="0 0 112 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx={19}
        cy="19"
        rx="18"
        ry="18"
        stroke="#FFD600"
        strokeWidth="2.5"
        fill="#292524"
      />
      <ellipse
        cx={93}
        cy="19"
        rx="18"
        ry="18"
        stroke="#FFD600"
        strokeWidth="2.5"
        fill="#292524"
      />
      <rect
        x={31}
        y={15}
        width={50}
        height={8}
        rx={3}
        fill="#FFD600"
        fillOpacity="0.4"
      />
      <ellipse cx={19} cy="19" rx="4" ry="4" fill="#FFD600" />
      <ellipse cx={93} cy="19" rx="4" ry="4" fill="#FFD600" />
    </svg>
  </div>
);

const features = [
  {
    icon: <Film className="w-10 h-10 text-yellow-400" />,
    title: "Global Film Library",
    description: "Discover movies from every genre, culture, and era worldwide.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-400" />,
    title: "Universal Categories",
    description: "From action to drama, comedy to thriller - we cover it all.",
  },
  {
    icon: <Shield className="w-10 h-10 text-purple-400" />,
    title: "Smart Recommendations",
    description: "Personalized suggestions based on your viewing preferences.",
  },
  {
    icon: <Search className="w-10 h-10 text-green-400" />,
    title: "Advanced Discovery",
    description: "Powerful search and filtering to find exactly what you want.",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-400" />,
    title: "Curated Collections",
    description: "Expertly selected films grouped by themes and similarities.",
  },
  {
    icon: <Award className="w-10 h-10 text-red-400" />,
    title: "Quality Curation",
    description: "Hand-picked selections ensuring the best viewing experience.",
  },
];

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Filmiway – Global Film Discovery Platform</title>
        <meta
          name="description"
          content="Filmiway is your global platform for discovering movies across all genres, cultures, and categories. Professional film curation for every taste."
        />
        <link rel="canonical" href="https://filmiway.com/about" />
      </Head>

      {/* ADDED: select-none class to prevent text selection */}
      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden select-none">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/30" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Navigation Header */}
       <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <Link href="/" aria-label="Homepage">
      <img 
        src="/filmiway-logo.svg" 
        alt="Filmiway Logo" 
        className="w-40 h-28 sm:w-48 sm:h-32 object-contain hover:scale-105 transition-transform duration-300" 
        draggable={false} 
      />
    </Link>
    <Link 
      href="/" 
      className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition shadow-lg"
    >
      Home
    </Link>
  </div>
</nav>


        <main className="relative z-20 max-w-7xl mx-auto px-6 py-32 text-center">
          {/* Hero Section */}
          <section className="mb-32 max-w-5xl mx-auto pt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 border border-yellow-400/20 rounded-full px-6 py-2 text-yellow-400 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>About Filmiway</span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extralight tracking-tight mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Where Cinema
                <br />
                <span className="font-light">Meets Discovery</span>
              </h1>
              
              <FilmReel />
              
              <p className="text-xl sm:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
                Your professional gateway to discovering exceptional films across all genres, cultures, and categories from around the world.
              </p>
            </motion.div>
          </section>

          {/* Mission Statement */}
          <section className="mb-32 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <Target className="w-8 h-8 text-yellow-400" />
                <h2 className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
                <Heart className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                  To democratize film discovery by providing a comprehensive, professional platform that celebrates cinema from every corner of the globe. We believe great stories transcend boundaries, and every movie lover deserves access to the world's finest films.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Core Values */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-16">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h2 className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  What Makes Us Different
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map(({ icon, title, description }, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:border-yellow-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="mb-6 flex justify-center">{icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
                    <p className="text-gray-400 leading-relaxed">{description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Founder Section */}
          <section className="mb-32 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-12">
                <User className="w-8 h-8 text-yellow-400" />
                <h2 className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  Meet Our Founder
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Shivam Singh</h3>
                <p className="text-yellow-400 text-lg mb-6">Founder & Lead Curator</p>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Passionate cinephile and technology enthusiast, Shivam founded Filmiway with the vision of creating a global platform where movie lovers can discover exceptional films from every culture and genre. With expertise in web development and a deep love for cinema, he curates collections that connect audiences with unforgettable storytelling.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Call to Action */}
          <section className="mb-20 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl font-light mb-6 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Start Your Journey
              </h2>
              <p className="text-lg text-gray-300 mb-10">
                Join thousands of film enthusiasts who trust Filmiway for their movie discovery.
              </p>
              <Link href="/">
                <motion.button
                  className="bg-gradient-to-r from-yellow-400 to-amber-400 text-black px-10 py-5 rounded-2xl font-semibold text-lg hover:from-yellow-300 hover:to-amber-300 transition-all shadow-2xl shadow-yellow-400/25"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Collections
                </motion.button>
              </Link>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-800 pt-16 mt-20">
            <div className="mb-8">
              <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg italic max-w-2xl mx-auto mb-8">
                "Connecting global audiences with the world's greatest cinema"
              </p>
            </div>
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Filmiway. Celebrating cinema worldwide.
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
