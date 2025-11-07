/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const ApproachPrinciplesSection = () => {
  const principles = [
    {
      title: "Technical Expertise",
      description: "We believe that the right technology is key to building a sustainable business. Our team of seasoned developers and tech leaders works closely with founders to implement cutting-edge solutions tailored to their needs. From designing scalable APIs to modernizing legacy systems, we ensure that every company we invest in has the technical foundation to grow and compete globally.",
      image: "/principles1.png",
      imagePosition: "left" as const,
    },
    {
      title: "Data - Driven Strategy",
      description: "At Funkash, we don't make decisions on intuition alone. Our proprietary tool, FunGPTs, leverages historical algorithms and in-depth research to craft informed strategies. This data-driven approach enables us to spot trends, assess risks, and scale businesses more efficiently. By marrying technology with insight, we create adaptable strategies that drive sustained growth.",
      image: "/principles2.png",
      imagePosition: "left" as const,
    },
    {
      title: "Long - Term Partnership",
      description: "We're not here for short-term wins. We commit to building lasting relationships with the entrepreneurs we invest in, providing ongoing technical support, strategic guidance, and resources to help them thrive. Our role goes beyond capital investment; we become a trusted partner, dedicated to supporting the vision and long-term success of every business we work with.",
      image: "/principles3.png",
      imagePosition: "left" as const,
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
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
        >
          Our Core <span>Principles</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-16 max-w-lg"
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
              } gap-12 items-start`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
                  {principle.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
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

