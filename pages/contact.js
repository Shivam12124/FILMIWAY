// pages/contact.js
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Compose email with proper formatting
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open user's email client with pre-filled data
    const mailtoLink = `mailto:filmiway9893@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us – Filmiway</title>
        <meta name="description" content="Get in touch with Filmiway. Contact us for inquiries, partnerships, feedback, or support." />
        <link rel="canonical" href="https://filmiway.com/contact" />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans select-none">
        {/* Navigation */}
       <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
<Link href="/" aria-label="Homepage">
  <Image
    src="/filmiway-logo.svg"
    alt="Filmiway Logo"
    width={192}      // approximate for w-40
    height={112}     // approximate for h-28
    className="w-40 h-28 sm:w-48 sm:h-32 object-contain hover:scale-105 transition-transform duration-300"
    draggable={false}
    priority
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


        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-32 pt-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <Mail className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h1 className="text-5xl sm:text-6xl font-extralight mb-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-gray-400 text-lg">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Success Message */}
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/50 rounded-2xl p-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-white mb-3">Email Client Opening...</h2>
                <p className="text-gray-300">Your default email app should open with your message pre-filled. Thank you for reaching out!</p>
              </motion.div>
            ) : (
              // Contact Form
              <form 
                onSubmit={handleSubmit} 
                className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl"
              >
                {/* Name Field */}
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-400" />
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition" 
                    placeholder="John Doe" 
                  />
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition" 
                    placeholder="john@example.com" 
                  />
                </div>

                {/* Message Field */}
                <div className="mb-8">
                  <label className="block text-gray-300 mb-2 font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-yellow-400" />
                    Your Message
                  </label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="6" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition resize-none" 
                    placeholder="Tell us what's on your mind..." 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-400 to-amber-400 text-black py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:from-yellow-300 hover:to-amber-300 transition-all shadow-xl hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}

            {/* Direct Email Contact */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Or reach us directly at:</p>
              <a 
                href="mailto:filmiway9893@gmail.com" 
                className="text-yellow-400 text-xl font-medium hover:text-yellow-300 transition"
              >
                filmiway9893@gmail.com
              </a>
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Filmiway. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
