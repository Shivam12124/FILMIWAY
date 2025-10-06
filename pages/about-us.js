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
    title: "Community Reviews",
    description: "Real opinions from movie lovers around the world.",
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

      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
        {/* Subtle film grain overlay */}
        <div className="fixed inset-0 pointer-events-none bg-[url('/film-grain.png')] bg-repeat opacity-5 z-0" />

        {/* Professional gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/30 pointer-events-none z-10" />

        {/* Sidebar with logo and home */}
        <div className="fixed top-6 left-6 z-50 flex flex-col items-center space-y-6">
          <Link href="/" aria-label="Homepage" className="block w-36 h-36">
            <img
              src="/filmiway-logo.svg"
              alt="Filmiway Logo"
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </Link>

          <Link
            href="/"
            className="px-10 py-3 rounded-full bg-yellow-500 text-black font-semibold shadow-lg hover:bg-yellow-600 transition"
            aria-label="Home"
          >
            Home
          </Link>
        </div>

        <main className="relative z-20 max-w-7xl mx-auto px-6 py-20 sm:py-32 lg:py-40 text-center">
          {/* Hero Section */}
          <section className="mb-20 max-w-4xl mx-auto">
            <motion.h1
              className="text-7xl sm:text-8xl font-extralight tracking-tight mb-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent select-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
            >
              Global Cinema, <br />
              <span>Infinite Possibilities</span>
            </motion.h1>
            <FilmReel />
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 1 }}
            >
              Your professional gateway to discovering exceptional films across all genres, cultures, and categories from around the world.
            </motion.p>
          </section>

          {/* Mission Statement */}
          <section className="mb-28 max-w-4xl mx-auto">
            <motion.h2
              className="text-5xl font-light mb-12 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Our Mission
            </motion.h2>
            <motion.div
              className="bg-gray-900 bg-opacity-80 rounded-2xl p-12 border border-gray-700 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                To democratize film discovery by providing a comprehensive, professional platform that celebrates cinema from every corner of the globe. We believe great stories transcend boundaries, and every movie lover deserves access to the world's finest films.
              </p>
            </motion.div>
          </section>

          {/* Features Grid */}
          <section className="mb-28">
            <motion.h2
              className="text-4xl font-light mb-16 text-center bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              What Makes Us Different
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {features.map(({ icon, title, description }, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900 bg-opacity-60 rounded-xl p-8 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-yellow-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="mb-6 flex justify-center">{icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="mb-28">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">50K+</div>
                <p className="text-gray-400">Movies Catalogued</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">200+</div>
                <p className="text-gray-400">Countries Represented</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">25+</div>
                <p className="text-gray-400">Film Categories</p>
              </div>
            </motion.div>
          </section>

          {/* Founder Section */}
          <section className="mb-28 max-w-3xl mx-auto">
            <motion.h2
              className="text-4xl font-light mb-12 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Meet Our Founder
            </motion.h2>
            <motion.div
              className="bg-gray-900 bg-opacity-70 rounded-2xl p-10 border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <User className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Shivam Singh</h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Passionate cinephile and technology enthusiast, Shivam founded Filmiway with the vision of creating a global platform where movie lovers can discover exceptional films from every culture and genre.
              </p>
            </motion.div>
          </section>

          {/* Call to Action */}
          <section className="mb-20 text-center max-w-2xl mx-auto">
            <motion.h2
              className="text-5xl font-light mb-8 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Start Your Journey
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of film enthusiasts who trust Filmiway for their movie discovery.
            </motion.p>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-800 pt-12 mt-20 text-center">
            <div className="mb-8">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg italic max-w-2xl mx-auto">
                "Connecting global audiences with the world's greatest cinema"
              </p>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Filmiway. Celebrating cinema worldwide.
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
