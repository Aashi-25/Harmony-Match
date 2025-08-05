import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from './ui/Typewriter';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const headings = [
  [
    { text: 'Find Your Perfect Roommate.', className: 'text-pink-400' },
    { text: 'Safe. Compatible. Empowering.', className: 'text-white' },
  ],
  [
    { text: 'HarmonyMatch', className: 'text-pink-400' },
  ],
];

const TYPEWRITER_SPEED = 50;

const Hero = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (typingDone) {
      const timer = setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % headings.length);
        setTypingDone(false);
        setShowSecondLine(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [typingDone]);

  const handleFirstLineComplete = () => {
    if (headings[currentSet][1]) {
      setShowSecondLine(true);
    } else {
      setTypingDone(true);
    }
  };

  const handleSecondLineComplete = () => {
    setTypingDone(true);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 xl:px-12">
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-none mx-auto"
      >
        <div className="text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg typing-container">
          {/* First line */}
          <Typewriter
            key={`line1-${currentSet}`}
            text={headings[currentSet][0].text}
            speed={TYPEWRITER_SPEED}
            delay={0}
            className={`block whitespace-nowrap overflow-hidden pr-3 ${headings[currentSet][0].className}`}
            loop={false}
            onComplete={handleFirstLineComplete}
          />
          
          {/* Second line - only show after first is done */}
          {showSecondLine && headings[currentSet][1] && (
            <Typewriter
              key={`line2-${currentSet}`}
              text={headings[currentSet][1].text}
              speed={TYPEWRITER_SPEED}
              delay={0}
              className={`block whitespace-nowrap overflow-hidden pr-3 mt-2 ${headings[currentSet][1].className}`}
              loop={false}
              onComplete={handleSecondLineComplete}
            />
          )}
        </div>
        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-pink-100 mb-8 drop-shadow-md max-w-4xl mx-auto">
          HarmonyMatch is India's first AI-powered roommate and room matching platform for women—voice-first, bias-free, and built for trust.
        </p>
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
};

export default Hero;


