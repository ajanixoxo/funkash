"use client";

import React from "react";
import { motion } from "framer-motion";

const ApproachHowWeWorkSection = () => {
  const steps = [
    {
      title: "Discovery & Evaluation",
      description: "We map challenges, define data needs, and identify automation opportunities.",
    },
    {
      title: "Technical Architecture",
      description: "We design scalable systems, robust APIs, and adaptive data structures.",
    },
    {
      title: "Strategic Integration",
      description: "We deploy AI layers, analytics, and interface logic; ensuring every part communicates with precision",
    },
    {
      title: "Partnership & Growth",
      description: "We continue iterating, monitoring, and scaling systems to meet new challenges.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-[#1a1f3a] via-[#1a1f3a] via-10% to-[#C78018]/30 to-90% text-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-2xl lg:text-4xl font-semibold mb-6"
        >
          How We <span>Build</span> 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 t mb-16 lg:max-w-xs"
        >
       Our approach blends creative vision with technical precision, ensuring every project we take moves seamlessly from idea to implementation.

        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bp-6 md:p-8  transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl w-max font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachHowWeWorkSection;

