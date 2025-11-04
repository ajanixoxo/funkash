
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
              Building <span className="italic font-normal">Legacies</span>
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            style={{ opacity, y }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              At Funkash Holdings, we are committed to building lasting
              transformational impact across sectors and geographies. We
              focus on impactful and scalable startups and large companies
              with revolutionary products across Africa, Asia, and beyond. We
              believe in empowerment through shared economic success and that
              innovation and creativity are about how you make it impactful at
              scale with sound scalable execution.
            </p>

            <p>
              Funkash currently is headquartered in Africa (Headquartered & Co-Located
              in Nigeria). As a venture funding and tech company, we focus on
              building and growing technology and infrastructure companies.
              Our key focus is on Nigeria & West Africa, currently focusing on
              Nigeria, Ghana, Kenya, Seychelles, Mauritius, and South
              Africa. The Venture Investment arm focus on high Mets & Tech.
            </p>

            <p>
              The company is a Venture Capital firm/ tech company operating in
              the technology and financial service spaces in Sub-Sahara Africa
              and beyond, providing strategic venture capital and support
              empowering startups/ventures to build sustainable and
              profitable businesses throughout emerging economies. We invest and work with
              early-stage and middle-stage companies, and we work with our
              portfolio companies helping them build out their business models
              by co-investing strong leadership teams, building commercial strategies,
              driving growth, and innovation.
            </p>

            <p className="font-medium">
              We see venture firms as not just about startups, where growth, scalability,
              and innovation are all  in building strong companies and value.
            </p>
          </motion.div>
        </div>
essential      </div>
    </section>
  );
};

export default AboutLegacySection;

