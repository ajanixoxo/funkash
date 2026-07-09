
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MissionSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0.85, 1, 1, 0.85]);

  return (
    <section ref={ref} className="bg-[#1a1f3a] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <motion.div
          style={{ opacity, scale }}
          className="mb-6"
        >
          <Quote className="w-10 h-10 text-white/70 rotate-180" />
        </motion.div>
        
        <ScrollReveal
          textClassName="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed p2 text-white"
          containerClassName="w-full"
          baseOpacity={0.15}
          blurStrength={6}
        >
          We are a product- and engineering-focused technology company. We build and operate software that solves large, structural problems — in how money moves, how fraud is stopped, how organisations work, and how policy is understood.
        </ScrollReveal>

        <div className="h-6 md:h-8"></div>

        <ScrollReveal
          textClassName="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed p2 text-white"
          containerClassName="w-full"
          baseOpacity={0.15}
          blurStrength={6}
        >
          We build for institutions: banks, enterprises, and the public sector. Our focus today is our own flagship platforms — the Funkash Universe.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MissionSection;

