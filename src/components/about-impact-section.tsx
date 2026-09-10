"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutImpactSection = () => {
  const stats = [
    {
      number: "17+",
      label: "Years of Collective Engineering Experience",
      description:
        "Built across enterprise and government infrastructure work.",
    },
    {
      number: "2",
      label: "International Offices",
      description:
        "Headquartered in Lagos, with a second office extending our reach.",
    },
    {
      number: "5",
      label: "Partnered Countries",
      description: "Where we operate through partners today",
    },
    {
      number: "5",
      label: "Flagship Products",
      description:
        "The Tharwa Funkash Universe: our connected set of platforms.",
    },
  ];

  return (
    <section className="bg-[#161b2e] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            Our{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Impact
            </span>{" "}
            in Numbers
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            The scale of our engineering work, in numbers.
          </p>
        </motion.div>

        {/* Stats Grid: 3-column top row, 1 item next row or flexible grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl p-8 sm:p-10 border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6">
                  {stat.number}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-3 leading-snug">
                  {stat.label}
                </h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed mt-4">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutImpactSection;
