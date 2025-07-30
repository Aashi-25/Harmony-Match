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

const flowSteps = [
  {
    step: '1',
    title: 'Take the Voice Survey',
    desc: 'Answer 3 core + up to 2 adaptive questions via voice. Omnidim.io adapts to your responses and tone.',
  },
  {
    step: '2',
    title: 'Get Matched',
    desc: 'AI analyzes your answers and recommends the best roommate and room, with clear explanations.',
  },
  {
    step: '3',
    title: 'Move In & Connect',
    desc: 'View your matches, accept, and start your new journey. Enjoy a safe, compatible living space!',
  },
];

const Flow = () => (
  <section id="flow" className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How HarmonyMatch Works</h2>
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-5xl mx-auto">
      {flowSteps.map((step, i) => (
        <motion.div
          key={step.step}
          custom={i}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-pink-400"
        >
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pink-600 text-white flex items-center justify-center text-2xl font-bold">{step.step}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-700">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Flow; 