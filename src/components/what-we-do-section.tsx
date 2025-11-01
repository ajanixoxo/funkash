/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WhatWeDoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Tech Investments",
      description:
        "Making strategic capital investments in innovative technologies that drive industry transformation",
      image: "/hero-img1.png",
    },
    {
      title: "Product Development",
      description:
        "Building cutting-edge solutions that solve real-world problems and create lasting impact",
      image: "/hero-img2.png",
    },
    {
      title: "Strategic Partners",
      description:
        "Collaborating with visionary founders and companies to accelerate growth and scale",
      image: "/hero-img3.png",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-r from-[#1a1f3a] via-[#1a1f3a] via-10% to-green-900/70 to-90% text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Navigation */}
        <div className="flex items-start justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              We combine capital, technology, and strategic expertise to empower
              startups and innovators
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative  rounded-2xl transition-all duration-300 "
                >
                  {/* Card Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-[#222946] to-transparent opacity-80" /> */}
                  </div>

                  {/* Card Content */}
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

