/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Silk from "./Silk";

const ApproachHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#1a1f3a] text-white overflow-hidden pt-32 pb-16 px-6">
      {/* Silk Background */}
      <div className="absolute inset-0 bg-black opacity-70 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#222946"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-hero.png"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-30"
          style={{ filter: "blur(4px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl"
          >
            Turning Visionary <span className="italic font-normal">Ideas</span> into Long Term <span className="italic font-normal">Success</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl"
          >
            We provide the technical expertise, strategic guidance, and data-driven decisions that fuel sustainable growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ApproachHeroSection;

