"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';
import Link from "next/link";
import Button from "./ui/button";
import { LayoutGrid, Maximize } from "lucide-react";

const NewHeroSection = () => {
  const [heroMode, setHeroMode] = useState<'background' | 'split'>('background');

  const backgroundScene = "https://prod.spline.design/amB58F-hyJVvewnJ/scene.splinecode";
  const splitScene = "https://prod.spline.design/6Ky6qhr3M-f-Xmok/scene.splinecode";

  return (
    <section className="relative min-h-screen bg-[#1a1f3a] text-white overflow-hidden flex flex-col justify-center">
      
      <AnimatePresence mode="wait">
        {heroMode === 'background' ? (
          <motion.div
            key="background-mode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Full Background 3D Model */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
               {/* 
                  Applying a subtle scale/shift to the orb 
                  as requested in previous iterations 
                */}
              <div className="w-full h-full  opacity-60 lg:opacity-100">
                <Spline scene={backgroundScene} className="w-full h-full" />
              </div>
            </div>

            {/* Centered Text Content */}
            <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-6 pt-16 md:pt-24">
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
                  className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-8"
                >
                  Empowering Intelligent Systems for a {" "}
                  <span className="italic font-normal">Smarter World </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl"
                >
                  We engineer scalable AI and automation platforms that help governments, enterprises, and innovators move faster, think sharper, and grow stronger.
                </motion.p>
       
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button asChild variant="primary" size="lg" className="!rounded-full px-10">
                    <Link href="/contact">Let’s Build Together</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="split-mode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column Content */}
            <div className="text-left pt-20 md:pt-0">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
              >
                AI & Systems <br />
                <span className="italic font-normal">Redefined.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg"
              >
                Precision engineering meets adaptive intelligence. We don&apos;t just build software; we architect the future of operational autonomy.
              </motion.p>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button asChild variant="primary" size="lg" className="!rounded-full px-10">
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right Column 3D Model */}
            <div className="relative h-[400px] md:h-[600px] lg:h-[800px] w-full">
              <Spline scene={splitScene} className="w-full h-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mode Toggle - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-[100] flex gap-2">
        <button
          onClick={() => setHeroMode('background')}
          className={`p-3 rounded-full border transition-all duration-300 ${
            heroMode === 'background' 
            ? 'bg-white text-[#1a1f3a] border-white scale-110' 
            : 'bg-transparent text-white border-white/20 hover:border-white/50'
          }`}
          title="Background View"
        >
          <Maximize size={20} />
        </button>
        <button
          onClick={() => setHeroMode('split')}
          className={`p-3 rounded-full border transition-all duration-300 ${
            heroMode === 'split' 
            ? 'bg-white text-[#1a1f3a] border-white scale-110' 
            : 'bg-transparent text-white border-white/20 hover:border-white/50'
          }`}
          title="Split View"
        >
          <LayoutGrid size={20} />
        </button>
      </div>
    </section>
  );
};

export default NewHeroSection;
