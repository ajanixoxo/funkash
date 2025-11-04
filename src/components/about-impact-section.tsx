"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutImpactSection = () => {
  const stats = [
    {
      number: "17",
      label: "Years of Experience",
      description:
        "With over 17 years of experience in building and scaling technology companies in emerging markets.",
    },
    {
      number: "5",
      label: "Key Focus Areas",
      description:
        "Our strategic focus spans fintech, gaming, and SaaS. We identify high-impact sectors for sustainable growth.",
    },
    {
      number: "7",
      label: "Countries of Operation",
      description:
        "Current focus on emerging markets across four continents. Global strategies, local execution.",
    },
  ];

  return (
    <section className="bg-[#222946] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Our <span className="italic font-normal">Impact</span> in
            <br />
            Numbers
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Measurable success in transforming startups and enterprises across
            key innovation hubs around the world.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card */}
              <div className=" rounded-2xl p-8 h-full border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                {/* Number */}
                <div className="text-7xl md:text-8xl font-semibold mb-4 ">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-2xl font-semibold mb-4">{stat.label}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutImpactSection;

