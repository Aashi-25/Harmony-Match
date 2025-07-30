import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Hero = () => (
  <section className="pt-32 pb-20 flex flex-col items-center justify-center text-center">
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Find Your Perfect Roommate.<br/>
        <span className="text-pink-600">Safe. Compatible. Empowering.</span>
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        HarmonyMatch is India's first AI-powered roommate and room matching platform for women—voice-first, bias-free, and built for trust.
      </p>
      <motion.a
        href="#cta"
        whileHover={{ scale: 1.05 }}
        className="inline-block bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-700 transition"
      >
        Start Your Journey
      </motion.a>
    </motion.div>
  </section>
);

export default Hero; 