/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Silk from "./Silk";

const AboutHeroSection = () => {
  return (
    <section className="relative bg-[#161b2e] text-white overflow-hidden pt-36 pb-16 px-6">
      {/* Silk Background */}
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none">
        <Silk
          speed={4}
          scale={1}
          color="#161b2e"
          noiseIntensity={1.2}
          rotation={0}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] mb-6 max-w-5xl tracking-tight"
          >
            Building Intelligent Systems for{" "}
            <br className="hidden sm:inline" />
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Institutions &amp; Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            We are a technology company. We build AI systems, digital
            infrastructure, and software for businesses, governments, and
            institutions.
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full h-[380px] sm:h-[480px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
            src="/about.png"
            alt="Team collaborating at Tharwa Funkash"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161b2e]/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
