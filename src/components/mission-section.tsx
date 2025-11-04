/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

  return (
    <section ref={ref} className="bg-[#1a1f3a] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          style={{ opacity, scale }}
          className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed p2"
        >
         <u> "Our mission is to transform industries through strategic
          <br className="hidden md:block" />
          investments, cutting-edge technology, and a network that
          <br className="hidden md:block" />
          accelerates growth."</u>
        </motion.p>
      </div>
    </section>
  );
};

export default MissionSection;

