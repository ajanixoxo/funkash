"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BuildingIcon, 
  CodeIcon, 
  DollarSignIcon, 
  Handshake, 
  ShieldIcon, 
  HeartHandshakeIcon 
} from "lucide-react";
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
    accentColor: string;
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <SpotlightCard 
        className="h-full !bg-[#1a1f3a] !border-white/5 hover:!border-white/10 p-8 flex flex-col group"
        spotlightColor={industry.accentColor.replace('1)', '0.5)')}
      >
        <div className="flex flex-col h-full relative z-20">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-semibold leading-tight">
              {industry.name}
            </h3>
          </div>
          
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            {industry.description}
          </p>
          
          <div 
            className="mt-auto h-1 w-12 rounded-full transition-all duration-300 group-hover:w-full"
            style={{ backgroundColor: industry.accentColor }}
          />

          {/* Large Ghosted Background Icon */}
          <div className="absolute -bottom-10 -right-8 opacity-[0.08] text-white pointer-events-none z-0 transform rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            {React.cloneElement(industry.icon as React.ReactElement<{ className: string }>, { className: "w-48 h-48" })}
          </div>
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
      accentColor: "rgba(59, 130, 246, 1)"
    },
    { 
      id: 2, 
      name: "SaaS & Cloud Solutions", 
      icon: <CodeIcon className="w-6 h-6" />,
      description: "Building scalable tools that power businesses worldwide.",
      accentColor: "rgba(139, 92, 246, 1)"
    },
    { 
      id: 3, 
      name: "Real Estate & Smart Infrastructure", 
      icon: <BuildingIcon className="w-6 h-6" />,
      description: "Enabling intelligent property and asset management.",
      accentColor: "rgba(16, 185, 129, 1)"
    },
    { 
      id: 4, 
      name: "Governance & Public Systems", 
      icon: <Handshake className="w-6 h-6" />,
      description: "Driving transparency and efficiency in administration.",
      accentColor: "rgba(245, 158, 11, 1)"
    },
    { 
      id: 5, 
      name: "Defense & Security Technology", 
      icon: <ShieldIcon className="w-6 h-6" />,
      description: "Advancing AI-driven protection systems and predictive analytics.",
      accentColor: "rgba(239, 68, 68, 1)"
    },
    { 
      id: 6, 
      name: "Healthcare & Science", 
      icon: <HeartHandshakeIcon className="w-6 h-6" />,
      description: "Using data to make health systems more proactive and connected.",
      accentColor: "rgba(236, 72, 153, 1)"
    },
  ];

  return (
    <section className="bg-[#222946] text-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
