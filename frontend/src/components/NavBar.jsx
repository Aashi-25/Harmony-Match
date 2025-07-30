import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => (
  <motion.nav
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow z-20"
  >
    <div className="flex justify-between items-center px-8 py-4">
      <span className="text-2xl font-extrabold text-pink-600 tracking-tight">AI-Powered Roommate Matching</span>
      <div className="space-x-6">
        <a href="#features" className="text-gray-700 hover:text-pink-600 font-medium transition">Features</a>
        <a href="#flow" className="text-gray-700 hover:text-pink-600 font-medium transition">How it Works</a>
        <a href="#impact" className="text-gray-700 hover:text-pink-600 font-medium transition">Impact</a>
        <a href="#cta" className="bg-pink-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-700 transition">Get Started</a>
      </div>
    </div>
  </motion.nav>
);

export default NavBar; 