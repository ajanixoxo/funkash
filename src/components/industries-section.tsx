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
    shapeType: "torus" | "cube" | "cylinder" | "dodecahedron" | "octahedron" | "icosahedron";
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
          <div className="flex items-start justify-between gap-4 mb-6">
            <h3 className="text-2xl font-semibold leading-tight pt-1">
              {industry.name}
            </h3>
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
              {industry.icon}
            </div>
          </div>
          
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            {industry.description}
          </p>

          {/* Large Ghosted Background Icon */}
          <div className="absolute -bottom-6 -right-6 opacity-[0.06] pointer-events-none -z-10 transform rotate-12 transition-transform duration-500 group-hover:opacity-[0.14] group-hover:scale-110 group-hover:rotate-6 w-36 h-36 flex items-center justify-center text-white">
            {React.isValidElement(industry.icon) &&
              React.cloneElement(industry.icon as React.ReactElement<{ className?: string }>, {
                className: "w-32 h-32 text-white",
              })}
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
      shapeType: "torus" as const,
      description: "We automate digital transactions and credit scoring for your next billion users.",
      accentColor: "rgba(59, 130, 246, 1)"
    },
    { 
      id: 2, 
      name: "SaaS & Cloud Solutions", 
      icon: <CodeIcon className="w-6 h-6" />,
      shapeType: "cube" as const,
      description: "We build scalable tools that power your businesses worldwide.",
      accentColor: "rgba(139, 92, 246, 1)"
    },
    { 
      id: 3, 
      name: "Real Estate & Smart Infrastructure", 
      icon: <BuildingIcon className="w-6 h-6" />,
      shapeType: "cylinder" as const,
      description: "We enable your intelligent property and better asset management.",
      accentColor: "rgba(16, 185, 129, 1)"
    },
    { 
      id: 4, 
      name: "Governance & Public Systems", 
      icon: <Handshake className="w-6 h-6" />,
      shapeType: "dodecahedron" as const,
      description: "We drive transparency and better efficiency in administration.",
      accentColor: "rgba(245, 158, 11, 1)"
    },
    { 
      id: 5, 
      name: "Defense & Security Technology", 
      icon: <ShieldIcon className="w-6 h-6" />,
      shapeType: "octahedron" as const,
      description: "We advance AI-driven protection systems and predictive analytics.",
      accentColor: "rgba(239, 68, 68, 1)"
    },
    { 
      id: 6, 
      name: "Healthcare & Science", 
      icon: <HeartHandshakeIcon className="w-6 h-6" />,
      shapeType: "icosahedron" as const,
      description: "We use data to make health systems more proactive and connected.",
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
            INDUSTRIES WE <span className="italic font-normal opacity-80" style={{ fontFamily: 'var(--font-playfair), serif' }}>EMPOWER</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
            Our solutions sit at the section where precision, efficiency, and intelligence matter most.
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
