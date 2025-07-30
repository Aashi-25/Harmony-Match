"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; // Your folder structure uses relative import

const techHighlights = [
  {
    quote: "Conversational, sentiment-aware, and multilingual. Adapts questions based on your responses.",
    name: "Omnidim.io Voice AI",
    title: "Voice Interaction",
  },
  {
    quote: "Python, Pandas, and Scikit-learn power a robust, explainable compatibility algorithm.",
    name: "Matching Engine",
    title: "Compatibility Algorithm",
  },
  {
    quote: "Scalable, secure, and real-time database for user profiles and room assignments.",
    name: "Firebase Firestore",
    title: "Database",
  },
  {
    quote: "Ensures ethical, unbiased, and transparent matching for all users.",
    name: "IBM AI Fairness 360",
    title: "Fairness Framework",
  },
];

const TechnicalArchitecture = () => (
  <section className="py-28 bg-gradient-to-br from-slate-900/80 via-indigo-900/60 to-purple-800/70 backdrop-blur-lg flex flex-col items-center justify-center relative overflow-hidden border-y border-indigo-400/20">
    <h2 className="text-5xl font-bold text-center text-white mb-16 drop-shadow-lg dark:text-gray-100">
      The Intelligence Behind HarmonyMatch
    </h2>
    <InfiniteMovingCards
      items={techHighlights}
      direction="right"
      speed="slow"
      pauseOnHover={true}
      className="max-w-7xl"
    />
  </section>
);

export default TechnicalArchitecture;
