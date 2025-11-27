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
              At Funkash Technology, every venture is built with one philosophy in mind:
            </p>
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p>
                solve real problems with systems that can scale across continents.
              </p>
              <p>
                We design products that sit at the intersection of engineering, culture, and human need tools that simplify complexity, accelerate growth, and unlock opportunity.
              </p>
              <p>
                From AI-powered credit intelligence (AfriCredify) and secure digital escrow (CFG Escrow) to personalized learning ecosystems (EduFlex AI) and enterprise spend automation (Flowpense), each product is crafted with the same principle:
              </p>
              <p className="font-semibold text-white">
                Build it once. Make it useful everywhere. Scale it infinitely.
              </p>
            </div>

            {/* Building the Infrastructure */}
            <div className="mt-12 rounded-2xl">
              <h3 className="text-base font-semibold mb-4">Building the Infrastructure of Tomorrow</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We are not just shipping products we are laying the digital foundation for the next decade of African and global innovation.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Whether you&apos;re:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed mb-4 ml-4">
                <li>an enterprise expanding into the digital future,</li>
                <li>an innovator solving real-world problems, or</li>
                <li>a partner aligned with long-term value creation…</li>
              </ul>
              <p className="text-gray-300 text-sm leading-relaxed">
                You belong here.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mt-4">
                The future is being engineered and it&apos;s happening at Funkash Technology.
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

