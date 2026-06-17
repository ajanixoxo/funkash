"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Invest Africa", url: "investafrica.com", logo: "/invest-africa.webp" },
  { name: "", url: "jerseyfinance.com", logo: "/Jersey Finance.png" },
  { name: "", url: "comarch.com", logo: "https://www.comarch.com/files-com/file_342/logo_comarch_dark_blue_w240.svg" },
  { name: "", url: "kaspersky.com", logo: "/kaspersky.svg" },
  { name: "", url: "g42.ai", logo: "/custom-partner.svg" },
  // { name: "SenseTime", url: "sensetime.com" },
  { name: "Hugging Face", url: "huggingface.co", logo: "/huggingface.svg" },
  { name: "MBZUAI", url: "mbzuai.ac.ae", logo: "/mohamde .svg" },
];

export default function PartnerSection() {
  return (
    <section className="py-24 bg-[#1a1f3a] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6"
        >
          Our Global Partners
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
        >
          We collaborate with global leaders across various industries to deliver intelligent engineering and transformative technology to our clients.
        </motion.p>
      </div>

      <div className="relative w-full flex overflow-x-hidden pt-8">
        {/* Gradients for fading effect on edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#1a1f3a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#1a1f3a] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {/* Double the array for seamless looping */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 md:mx-20 flex flex-col items-center justify-center group"
            >
              <div className="h-20 flex items-center justify-center gap-4 w-auto px-6 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo || `https://logo.clearbit.com/${partner.url}`}
                  alt={`${partner.name} logo`}
                  className="h-10 w-auto object-contain filter  opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if logo is not found
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="text-white/60 font-medium tracking-wide text-xl group-hover:text-white transition-colors duration-500">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
