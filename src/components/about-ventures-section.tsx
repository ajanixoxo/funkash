/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutVenturesSection = () => {
  return (
    <section className="bg-[#161b2e] text-white py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Our Ventures Block */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                Our{" "}
                <span
                  className="italic font-normal"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Ventures
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                At Tharwa Funkash, every venture is built on the same
                philosophy: solve real problems with systems that scale across
                continents.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                We design products for real workflows: tools that reduce
                complexity and help organisations grow.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                Our ventures include EduFlex  (workforce skills and training), Flowpense (enterprise spend automation), Maltida, Aegis, and Botpaa (AI assisted ERP). Each is built on the same principle of one initial build and constant scalability.
              </p>
            </div>

            {/* The Work Ahead Block */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                The Work{" "}
                <span
                  className="italic font-normal"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Ahead
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                We are building the digital infrastructure African and global
                institutions will depend on for the next decade.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                If you are an enterprise, an institution, or a partner building
                for the long term, Tharwa Funkash is who you come to. We
                already build this kind of infrastructure for others, and we hold
                new partners to the same standard.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:sticky lg:top-32 h-[450px] sm:h-[550px] md:h-[680px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/20"
          >
            <img
              src="/ventures-img.png"
              alt="Tharwa Funkash ventures workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161b2e]/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVenturesSection;
