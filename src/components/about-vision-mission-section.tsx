"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, DirectRight } from "iconsax-react";

const AboutVisionMissionSection = () => {
  return (
    <section className="relative bg-[#0B1226] text-white py-20 lg:py-28 px-6 border-t border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#C7A56A] mb-3 block">
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-8 sm:p-12 bg-[#101A38] border border-white/[0.06] hover:border-[#C7A56A]/30 transition-colors duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#C7A56A]">
                <Eye size="24" color="#C7A56A" variant="Outline" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-[#C7A56A] uppercase mb-3">
                  Our Vision
                </h3>
                <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                  To build the technology infrastructure African institutions run on and trust.
                </h4>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.06] text-gray-400 text-sm font-light leading-relaxed">
              Foundational systems engineered for resilience, sovereignty, and enduring trust across the continent.
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-8 sm:p-12 bg-[#101A38] border border-white/[0.06] hover:border-[#C7A56A]/30 transition-colors duration-300 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#C7A56A]">
                <DirectRight size="24" color="#C7A56A" variant="Outline" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-[#C7A56A] uppercase mb-3">
                  Our Mission
                </h3>
                <h4 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                  We build technology that gives African institutions trust, control, and intelligence in everything they run to a standard the world accepts.
                </h4>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.06] text-gray-400 text-sm font-light leading-relaxed">
              World-class execution powering financial control, behavioural defence, and autonomous workforce capability.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMissionSection;
