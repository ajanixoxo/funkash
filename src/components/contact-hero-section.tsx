/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import { motion } from "framer-motion";
import Silk from "./Silk";

const ContactHeroSection = () => {
  return (
    <section className="relative min-h-[60vh] bg-[#1a1f3a] text-white overflow-hidden pt-32 pb-16 px-6">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight mb-8 max-w-5xl"
          >
            Let's  <span className="italic font-normal">Build</span> What's Next. Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl leading-relaxed"
          >
Whether you’re exploring AI solutions, looking to modernize your systems, or seeking a trusted engineering partner — our team is ready to collaborate.
Tell us about your challenge, and we’ll help you turn it into a breakthrough.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;

