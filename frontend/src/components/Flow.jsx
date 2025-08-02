import React from "react";
import { Timeline } from "./ui/timeline";
import Typewriter from "./ui/Typewriter";

const flowSteps = [
  {
    step: "1",
    title: "Take the Voice Survey",
    desc: "Answer 3 core + up to 2 adaptive questions via voice. Omnidim.io adapts to your responses and tone.",
    image: "src/assets/Voice_ss.jpg"
  },
  {
    step: "2",
    title: "Get Matched",
    desc: "AI analyzes your answers and recommends the best roommate and room, with clear explanations.",
    image: "src/assets/Move_in1.jpg"
  },
  {
    step: "3",
    title: "Move In & Connect",
    desc: "View your matches, accept, and start your new journey. Enjoy a safe, compatible living space!",
    image: "src/assets/Move_in2.jpg"
  },
];

export default function Flow() {
  const data = flowSteps.map((step, index) => ({
    title: `Step ${step.step}`,
    content: (
      <div>
        <h3 className="text-3xl font-semibold text-pink-100 mb-2">
          <Typewriter 
            text={step.title}
            speed={80}
            delay={index * 500}
            className="text-3xl font-semibold text-pink-100"
            loop={true}
            loopDelay={3000}
          />
        </h3>
        <p className="text-xl text-rose-100 mb-4">
          {step.desc}
        </p>
        <div className="w-[600px] mx-auto">
          <img
            src={step.image}
            alt={`${step.title} screenshot`}
            className="w-full h-full rounded-lg object-contain shadow-[0_0_24px_rgba(236,_72,_153,_0.2),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(236,_72,_153,_0.1),_0_0_4px_rgba(236,_72,_153,_0.15),_0_16px_68px_rgba(236,_72,_153,_0.1),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip ">
      <Timeline data={data} />
    </div>
  );
}

