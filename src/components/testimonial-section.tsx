
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TestimonialSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  return (
    <section ref={ref} className="bg-[#1a1f3a] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div style={{ opacity, y }}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 p2">
          Funkash Technology isn’t just a developer — they’re a long-term . 
            <br className="hidden md:block" />
           innovation partner Their engineering precision and expertise
            <br className="hidden md:block" />  helped us scale faster than we thought possible.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
              <img
                src="/olumide.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold">— Founder, LogisticsX</p>
              <p className="text-gray-400 text-sm">Portfolio Company</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;

