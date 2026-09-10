/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutCEOSection = () => {
  return (
    <section className="bg-[#161b2e] text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Meet Our{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Founders
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            Naomi Durosaro and Olumide Ogunwo founded Tharwa Funkash to build
            institution-grade software for problems that matter at scale:
            enterprise financial control, behavioural fraud defence, and AI
            workforce infrastructure. Olumide leads Product and Engineering,
            while Naomi leads Operations across the Tharwa Funkash Universe.
          </p>
        </motion.div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-20">
          {/* Olumide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10 shadow-xl">
              <img
                src="/olumide.jpg"
                alt="Olumide Funkash Ogunwo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-white">
              Olumide Funkash Ogunwo
            </h3>
            <p className="text-gray-400 text-sm sm:text-base font-normal">
              Founder &amp; CEO
            </p>
          </motion.div>

          {/* Naomi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10 shadow-xl">
              <img
                src="/olumide.jpg"
                alt="Naomi Durosaro"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-white">
              Naomi Durosaro
            </h3>
            <p className="text-gray-400 text-sm sm:text-base font-normal">
              Co-Founder &amp; COO
            </p>
          </motion.div>
        </div>

        {/* Origin / Legacy Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            The name is deliberate. Tharwa is Arabic for wealth, the kind that
            is stewarded and passed down rather than won, and it is the part of
            the name that comes from Naomi. Funkash comes from Olumide: it joins
            Funke, his mother&apos;s name, with Kashamadupe, the name his
            grandmother gave him. Read in full, Tharwa Funkash means wealth
            built on the legacy of the women who came before.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCEOSection;
