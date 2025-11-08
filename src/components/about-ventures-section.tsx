/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutVenturesSection = () => {
  return (
    <section className="bg-gradient-to-l from-[#1a1f3a] via-[#1a1f3a] via-10% to-[#C78018]/30 to-90% text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-6xl font-semibold mb-6 leading-tight">
              Our <span className="italic font-normal">Ventures</span>
            </h2>
            <p className="text-base text-gray-300 mb-8">
              At Funkash Tech Studio, we:
            </p>
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p>
              Each product we create is designed to empower the next wave of innovation.
From AI-powered credit scoring (AfriCredify) and digital escrow (CFG Escrow) to personalized learning (EduFlex AI), every Funkash platform is a proof point of our engineering philosophy — build once, scale infinitely.
              </p>
            </div>

            {/* Proprietary Tools */}
            <div className="mt-12  rounded-2xl">
              <h3 className="text-base font-semibold mb-4">Let’s Build the Future</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
              We’re shaping the infrastructure of the digital age — and we’d like you to be part of it.
              Whether you’re a partner, innovator, or enterprise ready to scale — the future is being built here.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
          >
            <img
              src="/ventures-img.png"
              alt="Team workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVenturesSection;

