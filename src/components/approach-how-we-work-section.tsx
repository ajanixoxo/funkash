"use client";

import React from "react";
import { motion } from "framer-motion";

const ApproachHowWeWorkSection = () => {
  const steps = [
    {
      title: "Discovery & Evaluation",
      description: "We begin by understanding your vision, evaluating market opportunities, and identifying technical requirements for your business.",
    },
    {
      title: "Technical Leadership",
      description: "Our team provides hands-on technical expertise, building scalable infrastructure and implementing cutting-edge solutions.",
    },
    {
      title: "Strategic Insights",
      description: "Leveraging data-driven analysis through FunGPTs, we provide strategic guidance to help you make informed decisions and spot trends.",
    },
    {
      title: "Long-Term Partnership",
      description: "We commit to ongoing support, evolving with your business needs, and becoming a trusted partner for sustainable growth.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#1a1f3a] via-[#2a1f4a] to-[#1a1f3a] text-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          How We Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-16 max-w-4xl"
        >
          Our approach is rooted in collaboration, innovation, and data-driven decisions. We partner with founders to provide technical expertise and strategic insight.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
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

