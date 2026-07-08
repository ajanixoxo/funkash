
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutLegacySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  return (
    <section ref={ref} className="bg-gradient-to-r from-[#1a1f3a] via-[#1a1f3a] via-10% to-[#C78018]/30 to-90% text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <motion.div
            style={{ opacity, y }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Transforming <span className="italic font-normal">Ideas</span>,
              <br />
              Engineering <span className="italic font-normal">Legacies</span>
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            style={{ opacity, y }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Funkash Technology Limited is a product and engineering company that
              builds software for large, structural problems.
            </p>

            <p>
              We began by building alongside founders as a venture studio; that
              chapter is complete. Today we concentrate on engineering and operating
              our own flagship platforms — the Funkash Universe — across financial
              infrastructure, fraud intelligence, AI workforce, policy intelligence,
              and workforce capability.
            </p>

            <p>
              We build for institutions: banks, enterprises, and the public sector.
              Headquartered in Lagos, we work through offices and partners across
              multiple countries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLegacySection;

