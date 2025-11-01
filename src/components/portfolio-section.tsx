/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      name: "VincereBet",
      description: "Leading sports betting platform in emerging markets",
      bgColor: "bg-cyan-500",
      logo: "V",
    },
    {
      name: "OP Gaming",
      description: "Next-gen gaming and esports ecosystem",
      bgColor: "bg-orange-500",
      logo: "OP",
    },
    {
      name: "LUMINEBOT",
      description: "AI-powered business automation platform",
      bgColor: "bg-purple-600",
      logo: "⚡",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#1a1f3a] via-[#1a1f3a] via-10% to-green-900/70 to-90% text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            We've invested in and built solutions with visionary companies across
            multiple sectors
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Logo Area */}
              <div
                className={`${item.bgColor} h-64 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-white text-8xl font-bold opacity-90">
                  {item.logo}
                </div>
                {/* Decorative elements */}
                {item.name === "VincereBet" && (
                  <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                    VincereBet
                  </div>
                )}
                {item.name === "LUMINEBOT" && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-xl font-bold">LUMINEBOT</div>
                    <div className="text-white text-sm opacity-80">
                      Unlocking Potential
                    </div>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors text-lg font-medium"
          >
            Explore all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

