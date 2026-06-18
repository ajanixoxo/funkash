"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Button from "./ui/button";
import Silk from "./Silk";

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#1a1f3a] text-white overflow-hidden flex flex-col justify-center">
      {/* Silk Background */}
      <div className="absolute inset-0 bg-black opacity-70 z-0 pointer-events-none">
        <Silk
          speed={5} 
          scale={1}
          color="#1a1f3a"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column Content */}
        <div className="text-left pt-20 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
          >
            Empowering Intelligent Systems for a{" "}
            <span className="italic font-normal">Smarter World</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg"
          >
            We engineer scalable AI and automation platforms that help governments, enterprises, and innovators move faster, think sharper, and grow stronger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild variant="primary" size="lg" className="!rounded-full px-10">
              <Link href="/contact">Let’s Build Together</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Column Layout Placeholder */}
        {/* We keep this empty div to maintain the grid structure, since the 3D model is now global */}
        <div className="relative h-[500px] md:h-[800px] lg:h-[1000px] w-full pointer-events-none -my-12 md:-my-24"></div>
      </div>
    </section>
  );
};

export default NewHeroSection;
