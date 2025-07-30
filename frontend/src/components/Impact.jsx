import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const impactPoints = [
  'Verified & safe profiles with optional KYC and safety badges',
  'Emergency button and community rating system',
  'Multilingual voice onboarding for regional inclusivity',
  "Partnerships with women's hostels and co-living brands",
  'Financial inclusion: rent negotiation, scholarships, micro-loans',
  'Empowering women to find comfort, safety, and community',
];

const Impact = () => (
  <section id="impact" className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">From Hack to Impact</h2>
    <div className="max-w-3xl mx-auto text-center mb-10">
      <p className="text-xl text-gray-700">
        Our mission: Empower women across India to find safe, compatible, and comforting living spaces. HarmonyMatch is more than a matcher—it's a movement.
      </p>
    </div>
    <ul className="max-w-2xl mx-auto space-y-6">
      {impactPoints.map((point, i) => (
        <motion.li
          key={point}
          custom={i}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 text-lg text-gray-800"
        >
          <span className="text-pink-600 text-2xl">•</span> {point}
        </motion.li>
      ))}
    </ul>
  </section>
);

export default Impact; 