/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const ApproachHowWeWorkSection = () => {
  const steps = [
    {
      title: "Discovery and Evaluation",
      description:
        "We map the challenge, define data needs, and identify where automation can help.",
    },
    {
      title: "Technical Architecture",
      description:
        "We design scalable systems, robust APIs, and adaptive data structures.",
    },
    {
      title: "Strategic Integration",
      description:
        "We deploy AI layers, analytics, and interface logic, and make sure every part communicates correctly.",
    },
    {
      title: "Partnership and Growth",
      description:
        "We keep iterating, monitoring, and scaling the system as new challenges come up.",
    },
  ];

  return (
    <section className="bg-[#463524] text-white py-24 md:py-32 px-6">
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
            How we{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Build
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl">
            Every project moves through the same four stages, from idea to
            implementation.
          </p>
        </motion.div>

        {/* 2-Column Grid: 4 Stages Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Steps List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            {steps.map((step, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full h-[380px] sm:h-[480px] lg:h-[580px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/20"
          >
            <img
              src="/principles1.png"
              alt="How we build systems at Tharwa Funkash"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachHowWeWorkSection;
