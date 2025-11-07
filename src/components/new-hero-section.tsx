/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Silk from "./Silk";
import Link from "next/link";

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
    let scrollX1 = 0; // For horizontal scrolling on mobile

    const animateScroll = () => {
      const isMobile = window.innerWidth < 1024; // lg breakpoint

      if (isMobile) {
        // Mobile: Horizontal scrolling for first column
        if (scrollRef1.current) {
          scrollX1 += 0.5;
          const maxScroll = scrollRef1.current.scrollWidth / 2;
          if (scrollX1 >= maxScroll) {
            scrollX1 = scrollX1 - maxScroll;
          }
          scrollRef1.current.style.transform = `translateX(-${scrollX1}px)`;
        }
      } else {
        // Desktop: Vertical scrolling
        // Only animate first column - scrolling up
        if (scrollRef1.current) {
          scrollY1 += 0.5;
          const maxScroll = scrollRef1.current.scrollHeight / 2;
          if (scrollY1 >= maxScroll) {
            scrollY1 = 0;
          }
          scrollRef1.current.style.transform = `translateY(-${scrollY1}px)`;
        }

        // Second column - scrolling down with seamless infinite loop
        if (scrollRef2.current) {
          scrollY2 += 0.5;
          // Calculate the height of one set (half of total scrollHeight)
          const maxScroll = scrollRef2.current.scrollHeight / 2;
          
          // Reset seamlessly when we've scrolled one complete set
          // Instead of resetting to 0, we subtract the maxScroll to continue seamlessly
          if (scrollY2 >= maxScroll) {
            scrollY2 = scrollY2 - maxScroll;
          }
          scrollRef2.current.style.transform = `translateY(${scrollY2}px)`;
        }
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
            className="z-10 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
            >
          Empowering Intellignet System for a {" "}

              <span className="italic font-normal">Smarter World </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            >
            We engineer scalable AI and automation platforms that help governments, enterprises, and innovators move faster, think sharper, and grow stronger.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-[#1a1f3a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
             Let’s Build Together
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Image Grid */}
          <div className="relative h-[400px] lg:h-[700px] overflow-hidden rounded-2xl">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* First Column - Scrolling Up (Desktop) / Horizontal (Mobile) */}
              <div className="relative overflow-hidden h-full lg:col-span-1 col-span-2 lg:overflow-hidden overflow-x-hidden">
                {/* Mobile: Horizontal layout */}
                <div ref={scrollRef1} className="lg:space-y-4 flex lg:flex-col flex-row gap-4 h-full lg:h-auto">
                  {/* Duplicate images for infinite scroll */}
                   {[...column1Images, ...column1Images].map((item, index) => (
                     <div
                       key={index}
                       className="relative h-[280px] lg:h-[280px] w-[240px] sm:w-[280px] lg:w-full flex-shrink-0 rounded-xl overflow-hidden bg-gray-800"
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

              {/* Second Column - Hidden on mobile */}
              <div className="hidden lg:block relative overflow-hidden h-full mt-8">
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
            {/* Vertical gradients for desktop */}
            <div className="hidden lg:block absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1f3a] to-transparent pointer-events-none z-10" />
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1f3a] to-transparent pointer-events-none z-10" />
            {/* Horizontal gradients for mobile */}
            <div className="lg:hidden absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1f3a] to-transparent pointer-events-none z-10" />
            <div className="lg:hidden absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1f3a] to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;

