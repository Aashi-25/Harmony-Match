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

const features = [
  {
    title: 'Voice-Driven Smart Survey',
    desc: 'Conversational 5-question micro-survey powered by Omnidim.io. Adapts to your tone and responses for a personalized experience.',
    icon: '🎤',
  },
  {
    title: 'AI-Based Roommate Matching',
    desc: 'Scientifically-backed compatibility algorithm matches you with the best roommates. Transparent, explainable results.',
    icon: '🤖',
  },
  {
    title: 'Automatic Room Allocation',
    desc: 'Get matched not just to a roommate, but to the most suitable available room based on your preferences.',
    icon: '🏠',
  },
  {
    title: 'User Dashboard',
    desc: 'See your top 3 roommate+room matches, accept or request re-matching, and track your application status.',
    icon: '📊',
  },
  {
    title: 'Admin Dashboard',
    desc: 'Property managers can monitor, override, and optimize room assignments in real-time.',
    icon: '🛠️',
  },
  {
    title: 'Ethical, Fair & Private',
    desc: 'No bias. Data is secure and matching is explainable. Built with IBM AI Fairness 360.',
    icon: '🛡️',
  },
];

const Features = () => (
  <section id="features" className="py-20 bg-white/80">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          custom={i}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-pink-100 hover:shadow-2xl transition"
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-pink-600 mb-2">{feature.title}</h3>
          <p className="text-gray-700">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features; 