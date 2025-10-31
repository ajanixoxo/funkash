/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Silk from "./Silk";

const NewHeroSection = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  // Images for the hero section
  const column1Images = [
    { src: "/hero-img1.png" },
    { src: "/hero-img2.png" },
    { src: "/hero-img3.png" },
  ];

  const column2Images = [
    { src: "/hero-img4.png" },
    { src: "/hero-img5.png" },
    { src: "/hero-img6.png" },
  ];

  useEffect(() => {
    let animationFrame: number;
    let scrollY1 = 0;
    let scrollY2 = 0;

    const animateScroll = () => {
      // Only animate first column - scrolling up
      if (scrollRef1.current) {
        scrollY1 += 0.5;
        const maxScroll = scrollRef1.current.scrollHeight / 2;
        if (scrollY1 >= maxScroll) {
          scrollY1 = 0;
        }
        scrollRef1.current.style.transform = `translateY(-${scrollY1}px)`;
      }

      // Only animate second column - scrolling down (mirror first column)
      if (scrollRef2.current) {
        scrollY2 += 0.5;
        const maxScroll = scrollRef2.current.scrollHeight / 2;
        if (scrollY2 >= maxScroll) {
          scrollY2 = 0;
        }
        scrollRef2.current.style.transform = `translateY(${scrollY2}px)`;
      }

      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Empowering Bold Ideas with{" "}
              <span className="italic font-normal">Capital,</span>
              <br />
              <span className="italic font-normal">Technology</span> &{" "}
              <span className="italic font-normal">Strategy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 max-w-lg"
            >
              Building technology that transforms industries and empowers growth
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="inline-block bg-white text-[#1a1f3a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Work with Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Image Grid */}
          <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* First Column - Scrolling Up */}
              <div className="relative overflow-hidden h-full">
                <div ref={scrollRef1} className="space-y-4">
                  {/* Duplicate images for infinite scroll */}
                   {[...column1Images, ...column1Images].map((item, index) => (
                     <div
                       key={index}
                       className="relative h-[280px] rounded-xl overflow-hidden bg-gray-800"
                     >
                       <img
                         src={item.src}
                         alt={`Hero ${index + 1}`}
                         className="w-full h-full object-cover"
                       />
                     </div>
                   ))}
                </div>
              </div>

              {/* Second Column - Static */}
              <div className="relative overflow-hidden h-full mt-8">
                <div ref={scrollRef2} className="space-y-4">
                  {[...column2Images, ...column2Images].map((item, index) => (
                    <div
                      key={index}
                      className="relative h-[280px] rounded-xl overflow-hidden bg-gray-800"
                    >
                      <img
                        src={item.src}
                        alt={`Hero ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gradient overlays for smooth fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1f3a] to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1f3a] to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;

