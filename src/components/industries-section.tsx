"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BuildingIcon, 
  CodeIcon, 
  DollarSignIcon, 
  Handshake, 
  ShieldIcon, 
  HeartHandshakeIcon 
} from "lucide-react";
import Spline from '@splinetool/react-spline';
import SpotlightCard from "./SpotlightCard";

const IndustryCard = ({ 
  industry, 
  index 
}: { 
  industry: {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
    splineScene: string;
    accentColor: string;
  };
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <SpotlightCard 
        className="h-full group !bg-[#1a1f3a] !border-white/5 hover:!border-white/10 !p-0 overflow-hidden flex flex-col"
        spotlightColor={industry.accentColor.replace('1)', '0.2)') as any}
      >
        {/* Visual Header (Spline 3D Scene) */}
        <div className="relative w-full h-[200px] md:h-[240px] bg-white/5 overflow-hidden flex items-center justify-center">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 blur-3xl opacity-10 rounded-full" style={{ backgroundColor: industry.accentColor }} />
          
          <div className={`relative z-10 w-full h-full transform transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <Spline scene={industry.splineScene} />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white transition-colors duration-300"
              style={{ color: isHovered ? industry.accentColor : 'white' }}
            >
              {industry.icon}
            </div>
            <h3 className="text-2xl font-semibold leading-tight group-hover:text-white transition-colors">
              {industry.name}
            </h3>
          </div>
          
          <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
            {industry.description}
          </p>
          
          {/* Interactive accent indicator */}
          <motion.div 
            className="h-1 w-12 rounded-full"
            style={{ backgroundColor: industry.accentColor }}
            animate={{ width: isHovered ? "100%" : "3rem" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

const IndustriesSection = () => {
  const industries = [
    { 
      id: 1, 
      name: "Fintech & Payments", 
      icon: <DollarSignIcon className="w-6 h-6" />,
      description: "Automating digital transactions and credit scoring for the next billion users.",
      splineScene: "https://prod.spline.design/IZjEc6A8bmB-2rNK/scene.splinecode", // Abstract placeholder
      accentColor: "rgba(59, 130, 246, 1)" // Blue
    },
    { 
      id: 2, 
      name: "SaaS & Cloud Solutions", 
      icon: <CodeIcon className="w-6 h-6" />,
      description: "Building scalable tools that power businesses worldwide.",
      splineScene: "https://prod.spline.design/SVIpxxTijKsP7Gpg/scene.splinecode", // Abstract placeholder
      accentColor: "rgba(139, 92, 246, 1)" // Purple
    },
    { 
      id: 3, 
      name: "Real Estate & Smart Infrastructure", 
      icon: <BuildingIcon className="w-6 h-6" />,
      description: "Enabling intelligent property and asset management.",
      splineScene: "https://prod.spline.design/IZjEc6A8bmB-2rNK/scene.splinecode", // Abstract placeholder
      accentColor: "rgba(16, 185, 129, 1)" // Green
    },
    { 
      id: 4, 
      name: "Governance & Public Systems", 
      icon: <Handshake className="w-6 h-6" />,
      description: "Driving transparency and efficiency in administration.",
      splineScene: "https://prod.spline.design/SVIpxxTijKsP7Gpg/scene.splinecode", // Abstract placeholder
      accentColor: "rgba(245, 158, 11, 1)" // Amber
    },
    { 
      id: 5, 
      name: "Defense & Security Technology", 
      icon: <ShieldIcon className="w-6 h-6" />,
      description: "Advancing AI-driven protection systems and predictive analytics.",
      splineScene: "https://prod.spline.design/IZjEc6A8bmB-2rNK/scene.splinecode", // Abstract placeholder
      accentColor: "rgba(239, 68, 68, 1)" // Red
    },
    { 
      id: 6, 
      name: "Healthcare & Science", 
      icon: <HeartHandshakeIcon className="w-6 h-6" />,
      description: "Using data to make health systems more proactive and connected.",
      splineScene: "https://prod.spline.design/SVIpxxTijKsP7Gpg/scene.splinecode", // Abstract placeholder
      accentColor: "rgba(236, 72, 153, 1)" // Pink
    },
  ];

  return (
    <section className="bg-[#222946] text-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">
            Industries We <span className="italic font-normal opacity-80">Empower</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
            Our solutions cut across sectors where precision, efficiency, and intelligence matter most.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.id} 
              industry={industry} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
