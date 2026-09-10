/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutLegacySection = () => {
  const standForItems = [
    {
      title: "Customer Obsession",
      desc: "We are committed to the success of every client, and take on what we can deliver in full.",
    },
    {
      title: "Innovation",
      desc: "We invent in the product, and hold our promises to what it can do.",
    },
    {
      title: "Trust",
      desc: "We commit carefully, deliver completely and can show it.",
    },
  ];

  return (
    <section className="bg-[#463524] text-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
        {/* ROW 1: What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[320px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/20"
          >
            <img
              src="/principles1.png"
              alt="What We Do at Tharwa Funkash"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed font-light"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8">
              What We{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Do
              </span>
            </h2>

            <p>
              Tharwa Funkash Technologies Limited is a product and engineering
              company that builds software for large, structural problems.
            </p>

            <p>
             We began by building alongside founders, as a venture studio. That chapter is complete. Today we engineer and operate our own flagship platforms: across financial infrastructure, fraud intelligence, AI workforce, policy intelligence, and workforce capability.

            </p>

            <p>
              We build for institutions: banks, enterprises, and the public
              sector. Headquartered in Lagos, we work through offices and
              partners across multiple countries.
            </p>
          </motion.div>
        </div>

        {/* ROW 2: What We Stand For */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text & Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed font-light"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8">
              What We{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Stand For
              </span>
            </h2>

            <ul className="space-y-6 pt-2">
              {standForItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white mt-2.5 shrink-0" />
                  <p className="text-gray-200 text-base sm:text-lg font-light">
                    <strong className="text-white font-semibold italic mr-2" style={{ fontFamily: "var(--font-playfair), serif" }}>
                      {item.title}:
                    </strong>
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[320px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/20"
          >
            <img
              src="/what-we-stand.jpg"
              alt="What We Stand For at Tharwa Funkash"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLegacySection;
