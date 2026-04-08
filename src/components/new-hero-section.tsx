/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Silk from "./Silk";
import Spline from '@splinetool/react-spline';
import Link from "next/link";

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#1a1f3a] text-white overflow-hidden pt-32 pb-0 flex flex-col justify-start">
      {/* Silk Background (Commented Out) */}
      {/* <div className="absolute inset-0 bg-black opacity-70 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#222946"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div> */}

      {/* Full Background 3D Model Embed */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Spline
          scene="https://prod.spline.design/amB58F-hyJVvewnJ/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Center Text Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-6 mt-8 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
          >
            Empowering Intelligent System for a {" "}
            <span className="italic font-normal">Smarter World </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg mb-8 max-w-2xl"
          >
            We engineer scalable AI and automation platforms that help governments, enterprises, and innovators move faster, think sharper, and grow stronger.
          </motion.p>
 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-[#1a1f3a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Let’s Build Together
            </Link>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default NewHeroSection;

