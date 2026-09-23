/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const ApproachPrinciplesSection = () => {
  const principles = [
    {
      title: "Innovation",
      description:
        "We put our invention into the product itself. When we tell a client a system can do something, it can already do it, not somewhere on a future roadmap. We build the capability, then we talk about it.",
    },
    {
      title: "Trust",
      description:
        "We earn trust the same way each time. We think carefully before we commit, deliver completely once we do, and keep proof clients can check for themselves, whether that is the numbers, an audit, or a system still running years later.",
    },
    {
      title: "Customer Obsession",
      description:
        "We judge our work by whether the client succeeds. Before we take on a project, we work out exactly what it will take to deliver it in full, and we only commit once we know we can follow through.",
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
