/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
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
            Meet Our <span className="italic font-normal" style={{ fontFamily: 'var(--font-playfair), serif' }}>Founders</span>
          </h2>
          <p className="text-gray-300 text-lg lg:max-w-3xl mx-auto">
            Tharwa means wealth in Arabic. Funkash is a Yoruba family name associated with determination and building. Together, Tharwa Funkash Technology means creating enduring value through engineering.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Olumide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center group"
          >
            <div className="relative h-[420px] rounded-2xl overflow-hidden mb-6 bg-gray-800">
              <img
                src="/olumide.jpg"
                alt="Olumide Funkash Ogunwo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-transparent to-transparent opacity-60" />
            </div>
            <h3 className="text-2xl font-semibold mb-1">
              Olumide Funkash Ogunwo
            </h3>
            <p className="text-gray-400 text-base">Founder & CEO</p>
          </motion.div>

          {/* Naomi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center group"
          >
            <div className="relative h-[420px] rounded-2xl overflow-hidden mb-6 bg-gray-800">
              <img
                src="/user.jpg"
                alt="Naomi Durosaro"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-transparent to-transparent opacity-60" />
            </div>
            <h3 className="text-2xl font-semibold mb-1">
              Naomi Durosaro
            </h3>
            <p className="text-gray-400 text-base">Co-Founder & COO</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEOSection;

