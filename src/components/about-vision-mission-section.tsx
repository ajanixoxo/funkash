"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";

const AboutVisionMissionSection = () => {
  return (
    <section className="relative bg-[#111625] text-white py-20 lg:py-28 px-6 border-t border-b border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3 block">
            Guiding Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Our Vision &amp;{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Mission
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-purple-300 uppercase mb-2">
                  Our Vision
                </h3>
                <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                  To build the technology infrastructure African institutions run on and trust.
                </h4>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-gray-400 text-sm font-light">
              Foundational systems engineered for resilience, sovereignty, and enduring trust across the continent.
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-blue-300 uppercase mb-2">
                  Our Mission
                </h3>
                <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                  We build technology that gives African institutions trust, control, and intelligence in everything they run to a standard the world accepts.
                </h4>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-gray-400 text-sm font-light">
              World-class execution powering financial control, behavioural defence, and autonomous workforce capability.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMissionSection;
