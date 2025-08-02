import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Hero = () => (
  <section className="w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 xl:px-12">
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-none mx-auto"
    >
      <div className="text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg typing-container">
        <span className="typing-line-1 block text-pink-400 whitespace-nowrap overflow-hidden border-r-4 border-white pr-3">
          Find Your Perfect Roommate.
        </span>
        <span className="typing-line-2 block text-white whitespace-nowrap overflow-hidden border-r-4 border-white pr-3">
          Safe. Compatible. Empowering.
        </span>
      </div>
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-pink-100 mb-8 drop-shadow-md max-w-4xl mx-auto">
        HarmonyMatch is India's first AI-powered roommate and room matching platform for women—voice-first, bias-free, and built for trust.
      </p>
      {/* <motion.a
        href="#features"
        whileHover={{ scale: 1.05 }}
        className="inline-block bg-pink-600 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-lg sm:text-xl md:text-xl font-semibold shadow-lg hover:bg-pink-700 transition"
      >
        Start Your Journey
      </motion.a> */}

      <button className="px-12 py-6 text-1.5xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full transition-all duration-300 ease-in-out hover:from-pink-400 hover:to-purple-500 hover:shadow-2xl  hover:shadow-pink-500/50 hover:scale-125 transform focus:outline-none focus:ring-4 focus:ring-pink-400/50" onMouseEnter={(e) => {
        e.target.style.filter = 'drop-shadow(0 0 25px rgba(236, 72, 153, 0.9)) drop-shadow(0 0 50px rgba(147, 51, 234, 0.7))';
      }} onMouseLeave={(e) => {
        e.target.style.filter = 'none';
      }}>
       Start Your Journey
      </button>


    </motion.div>
  </section>
);

export default Hero; 


