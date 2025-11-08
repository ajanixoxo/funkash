/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const ApproachPrinciplesSection = () => {
  const principles = [
    {
      title: "Technical Mastery",
      description: "Great systems begin with great engineering. Our developers, data scientists, and AI architects build technology from the ground up — scalable, efficient, and secure. From designing APIs to deploying full automation ecosystems, we ensure every product we touch is built to evolve, not expire.",
      image: "/principles1.png",
      imagePosition: "left" as const,
    },
    {
      title: "Data-Led Design",
      description: "We don’t rely on assumptions: we rely on intelligence. Our frameworks analyze patterns, predict outcomes, and optimize performance in real time. By fusing analytics with design thinking, we craft adaptive digital systems that get smarter the more they’re used.",
      image: "/principles2.png",
      imagePosition: "left" as const,
    },
    {
      title: "Human-Centric Partnership",
      description: "Every collaboration begins with empathy. We work closely with clients to understand their users, workflows, and ambitions — not just their technical specs. Our goal isn’t to build software for software’s sake, but to engineer solutions that empower teams and accelerate human creativity.",
      image: "/principles3.png",
      imagePosition: "left" as const,
    },
  ];

  return (
    <section className="relative bg-[#1a1f3a] text-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
        >
          Our Core <span>Principles</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-16 max-w-lg"
        >
          At Funkash Technology, our philosophy is built on three enduring principles that define how we think, code, and collaborate
        </motion.p>

        <div className="space-y-24 md:space-y-32">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${principle.imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-start`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
                  {principle.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachPrinciplesSection;

