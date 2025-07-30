import React from 'react';
import { motion } from 'framer-motion';
import './index.css'; // Ensure Tailwind CSS is included in your project


const NavBar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8 }}
    className="fixed top-0 w-full bg-white shadow-md z-10"
  >
    <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-600">HarmonyMatch</h1>
      <div className="space-x-4">
        <a href="#features" className="text-gray-700 hover:text-pink-600 transition">Features</a>
        <a href="#how-it-works" className="text-gray-700 hover:text-pink-600 transition">How It Works</a>
        <a href="#join" className="text-gray-700 hover:text-pink-600 transition">Join Now</a>
      </div>
    </div>
  </motion.nav>
);

const Hero = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100"
  >
    <div className="px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4"
      >
        Find Your Perfect Roommate with AI
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-600 mb-8"
      >
        HarmonyMatch uses voice-driven AI to match women with safe, compatible roommates and ideal living spaces.
      </motion.p>
      <motion.a
        href="#join"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition"
      >
        Start Your Journey
      </motion.a>
    </div>
  </motion.section>
);

const Features = () => (
  <section id="features" className="py-16 bg-white">
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why HarmonyMatch?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Voice-Driven Survey", desc: "Answer 5 simple questions via voice, and our AI adapts to your preferences.", icon: "🎙️" },
          { title: "Smart Matching", desc: "Our algorithm finds roommates based on lifestyle, habits, and values.", icon: "🤝" },
          { title: "Safe & Secure", desc: "Verified profiles and transparent matching ensure your safety.", icon: "🔒" },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-lg shadow-md text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-16 bg-gray-100">
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { step: "1", title: "Take the Voice Survey", desc: "Answer 3 core + 2 adaptive questions via voice to share your preferences." },
          { step: "2", title: "Get Matched", desc: "Our AI analyzes your responses to find the most compatible roommates and rooms." },
          { step: "3", title: "Move In", desc: "Choose your match, view room details, and start your new journey!" },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">{step.step}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <motion.section
    id="join"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="py-16 bg-pink-600 text-white text-center"
  >
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Roommate?</h2>
      <p className="text-lg mb-8">Join HarmonyMatch today and discover a safe, compatible living space tailored to you.</p>
      <a
        href="/signup"
        className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
      >
        Sign Up Now
      </a>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="py-8 bg-gray-900 text-white">
    <div className="px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; 2025 HarmonyMatch. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:text-pink-600 transition">Privacy Policy</a>
        <a href="#" className="hover:text-pink-600 transition">Terms of Service</a>
        <a href="#" className="hover:text-pink-600 transition">Contact Us</a>
      </div>
    </div>
  </footer>
);

const Home2 = () => (
  <div>
    <NavBar />
    <Hero />
    <Features />
    <HowItWorks />
    <CTA />
    <Footer />
  </div>
);

export default Home2;
