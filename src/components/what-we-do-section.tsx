/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { ArrowUpRight } from "lucide-react";

/**
 * Service Pack Card Component
 * Inspired by the "Extend Your Packs" bento layout.
 */
const ServicePackCard = ({ 
  title, 
  description, 
  splineScene, 
  accentColor, 
  index,
  customTransform = ""
}: { 
  title: string; 
  description: string; 
  splineScene: string; 
  accentColor: string;
  index: number;
  customTransform?: string;
}) => {
  const formattedNumber = String(index + 1).padStart(2, '0');

  // Determine border styles to form a clean grid
  const borderClasses = `
    border-b border-white/10
    ${index % 2 === 0 ? 'md:border-r md:border-white/10' : ''}
    ${index >= 2 ? 'md:border-b-0' : ''}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-8 md:p-12 lg:p-16 flex justify-between items-start transition-all duration-300 hover:bg-white/[0.02] ${borderClasses}`}
    >
      {/* Decorative Border Layer (Commented out) */}
      {/* <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500`} style={{ backgroundColor: accentColor }} /> */}
      
      {/* Visual / Spline scene (Commented out as requested) */}
      {/* 
      <div className="relative bg-white/5 flex items-center justify-center min-h-[300px] lg:min-h-[400px] overflow-hidden order-1 lg:order-2 lg:col-span-5">
        <div className="absolute inset-0 blur-3xl opacity-10 rounded-full" style={{ backgroundColor: accentColor }} />
        <div className={`relative z-10 w-full h-full scale-[1.3] md:scale-[1.6] ${customTransform}`}>
          <Spline scene={splineScene} />
        </div>
      </div>
      */}

      {/* Main Content Layout */}
      <div className="flex gap-6 md:gap-10 items-start">
        {/* Step Number */}
        <span className="text-xs md:text-sm font-mono text-gray-500 pt-2">{formattedNumber}</span>
        
        <div>
          {/* Title */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 group-hover:text-white/95 transition-colors">
            {title}
          </h3>
          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-normal">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow Link Icon */}
      <div className="flex-shrink-0 pt-2 pl-4">
        <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
};

const WhatWeDoSection = () => {
  const services = [
    {
      title: "AI Systems & Automation",
      description: "Engineering robust toolchains for coding, large-scale cloud debugging, and high-performance API architectures.",
      splineScene: "https://prod.spline.design/IZjEc6A8bmB-2rNK/scene.splinecode",
      accentColor: "#60a5fa", // Blue
    },
    {
      title: "Product Engineering ",
      description: "Powering your intelligence with specialized frameworks for deep learning, automation, and real-time data synthesis.",
      splineScene: "https://prod.spline.design/SVIpxxTijKsP7Gpg/scene.splinecode",
      accentColor: "#a855f7", // Purple
      customTransform: "-translate-x-[15%] md:-translate-x-[20%]"
    },
    {
      title: "Technology Partnerships",
      description: "A comprehensive design suite for high-end digital identity, content creation, and experimental product design.",
      splineScene: "https://prod.spline.design/IZjEc6A8bmB-2rNK/scene.splinecode",
      accentColor: "#fb923c", // Orange
    }
  ];

  return (
    <section className="bg-[#222946] text-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold mb-4 leading-tight">
                Our Service <br /> 
                <span className="italic font-normal opacity-80">Ecosystems</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium">
                Curated technological stacks synced to your business goals; add or prune tools per ecosystem.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Services Grid (Horizontal lines & vertical middle divide) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10 w-full">
          {services.map((service, index) => (
            <ServicePackCard 
              key={index} 
              index={index}
              title={service.title}
              description={service.description}
              splineScene={service.splineScene}
              accentColor={service.accentColor}
              customTransform={service.customTransform}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
