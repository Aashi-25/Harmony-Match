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

const techHighlights = [
  {
    title: 'Omnidim.io Voice AI',
    desc: 'Conversational, sentiment-aware, and multilingual. Adapts questions based on your responses.',
    icon: '🗣️',
  },
  {
    title: 'Matching Engine',
    desc: 'Python, Pandas, and Scikit-learn power a robust, explainable compatibility algorithm.',
    icon: '🔬',
  },
  {
    title: 'Firebase Firestore',
    desc: 'Scalable, secure, and real-time database for user profiles and room assignments.',
    icon: '☁️',
  },
  {
    title: 'IBM AI Fairness 360',
    desc: 'Ensures ethical, unbiased, and transparent matching for all users.',
    icon: '⚖️',
  },
];

const TechnicalArchitecture = () => (
  <section className="py-20 bg-white/90">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Technical Architecture</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
      {techHighlights.map((tech, i) => (
        <motion.div
          key={tech.title}
          custom={i}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow p-8 flex flex-col items-center text-center border border-pink-100"
        >
          <div className="text-4xl mb-4">{tech.icon}</div>
          <h3 className="text-lg font-bold text-pink-600 mb-2">{tech.title}</h3>
          <p className="text-gray-700 text-sm">{tech.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TechnicalArchitecture; 