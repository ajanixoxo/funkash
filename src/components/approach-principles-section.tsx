/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const ApproachPrinciplesSection = () => {
  const principles = [
    {
      title: "Technical Mastery",
      description:
        "Systems are only as good as the engineering behind them. Our developers, data scientists, and AI architects build technology from the ground up: scalable, efficient, and secure. We design every product to be maintained and extended, not replaced.",
    },
    {
      title: "Data-Led Design",
      description:
        "We design from evidence, not assumptions. Our systems analyse patterns, predict outcomes, and optimise performance in real time, and they improve as they are used.",
    },
    {
      title: "Human-Centric Partnership",
      description:
        "We work closely with clients to understand their users, workflows, and goals, not just their technical specifications. Our goal is not software for its own sake. It is systems that make teams more effective.",
    },
    {
      title: "How we build",
      description:
        "Every project moves through the same four stages, from idea to implementation.",
    },
    {
      title: "Technical Architecture",
      description:
        "We design scalable systems, robust APIs, and adaptive data structures.",
    },
  ];

  return (
    <section className="bg-[#161b2e] text-white py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight text-white">
            Our Core{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Principles
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light max-w-2xl">
            At Tharwa Funkash, three principles guide how we think, build, and
            collaborate
          </p>
        </motion.div>

        {/* 2-Column Grid: Image Left, Principles List Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Vertical Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full h-[480px] sm:h-[600px] lg:h-[720px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 lg:sticky lg:top-32"
          >
            <img
              src="/team.jpg"
              alt="Core Principles in practice"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161b2e]/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column - Principles Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            {principles.map((item, index) => (
              <div
                key={index}
                className="pb-8 border-b border-white/10 last:border-b-0 space-y-3"
              >
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachPrinciplesSection;
