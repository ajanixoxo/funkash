/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutCEOSection = () => {
  return (
    <section className="bg-[#1a2332] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Meet Our <span className="italic font-normal">CEO</span>
          </h2>
          <p className="text-gray-300 text-lg lg:max-w-xl mx-auto">
          He brings decades of experience, blending technical expertise with strategic leadership to drive innovation and growth. Together, we’re turning visionary ideas into reality.
          </p>
        </motion.div>

        {/* CEO Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="relative group">
            {/* Image Container */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden mb-6">
              <img
                src="/olumide.jpg"
                alt="Olumide Funkash Ogunwo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-transparent to-transparent opacity-60" />
            </div>

            {/* CEO Info */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">
                Olumide Funkash Ogunwo
              </h3>
              <p className=" text-lg">Founder & CEO</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCEOSection;

