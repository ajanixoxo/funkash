"use client";

import React from "react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-${accentColor}/10`}
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)`,
      }}
    >
      {/* Decorative Border Layer */}
      <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500`} style={{ backgroundColor: accentColor }} />
      
      {/* Card Inner Surface */}
      <div className="relative bg-[#1a1f3a] rounded-[2rem] h-full flex flex-col overflow-hidden">
        
        {/* Visual Header (Spline 3D Scene) */}
        <div className="relative bg-white/5 flex items-center justify-center min-h-[240px] md:min-h-[280px] overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 blur-3xl opacity-10 rounded-full" style={{ backgroundColor: accentColor }} />
          
          <div className={`relative z-10 w-full h-full scale-[1.3] md:scale-[1.6] ${customTransform}`}>
            <Spline scene={splineScene} />
          </div>
        </div>

        {/* Content Footer */}
        <div className="mt-auto p-6 md:p-8 pt-2 md:pt-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
       
          </div>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[90%] font-medium">
            {description}
          </p>
        </div>
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
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

          {/* Placeholder/Extra Card style (Optional) */}
         

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
