/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Silk from "./Silk";

const AboutHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#1a2332] text-white overflow-hidden pt-32 pb-16 px-6">
      {/* Silk Background */}
      <div className="absolute inset-0 bg-black opacity-70 z-0">
        <Silk
          speed={5} 
          scale={1}
          color="#1a2332"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Visionaries <span className="italic font-normal">Driving</span>
              <br />
              <span className="italic font-normal">Innovation</span> and Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 text-center"
            >
              Innovating based on a proven vision for transforming ideas
              into products, in scalable ventures.
            </motion.p>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[500px] lg:h-[600px] opacity overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none"
            style={{ position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}
          >
            <img
              src="/about-hero.png"
              alt="Team collaboration"
              className="w-screen h-full object-cover block"
              style={{ width: "100vw" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;

