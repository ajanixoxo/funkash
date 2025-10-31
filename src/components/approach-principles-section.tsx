/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const ApproachPrinciplesSection = () => {
  const principles = [
    {
      title: "Technical Expertise",
      description: "At Funkash Family Holdings, our approach is anchored by two guiding principles. We build sustainable businesses with cutting-edge solutions, scalable APIs, and modernize legacy systems.",
      image: "/principles1.png",
      imagePosition: "right" as const,
    },
    {
      title: "Data - Driven Strategy",
      description: "We leverage data-driven decision-making through our proprietary tool, FunGPTs, enabling informed strategies, trend spotting, risk assessment, and efficient scaling.",
      image: "/principles2.png",
      imagePosition: "left" as const,
    },
    {
      title: "Long - Term Partnership",
      description: "We are committed to lasting relationships, providing ongoing technical support, strategic guidance, and becoming a trusted partner beyond just capital investment.",
      image: "/principles3.png",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section className="relative bg-[#1a1f3a] text-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Our Core Principles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-16 max-w-4xl"
        >
          At Funkash Family Holdings, our approach is anchored by two guiding principles.
        </motion.p>

        <div className="space-y-24 md:space-y-32">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                principle.imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {principle.title}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachPrinciplesSection;

