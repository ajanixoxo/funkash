
"use client";

import React from "react";
import { motion } from "framer-motion";
import { BuildingIcon, CodeIcon, DollarSignIcon, Handshake } from "lucide-react";
import { ShieldIcon } from "lucide-react";
import { HeartHandshakeIcon } from "lucide-react";
const IndustriesSection = () => {
  const industries = [
    { 
      id: 1, 
      name: "Fintech & Payments", 
      icon: <DollarSignIcon/>,
      description: "Automating digital transactions and credit scoring for the next billion users."
    },
    { 
      id: 2, 
      name: "SaaS & Cloud Solutions", 
      icon:<CodeIcon/>,
      description: "Building scalable tools that power businesses worldwide."
    },
    { 
      id: 3, 
      name: "Real Estate & Smart Infrastructure", 
      icon: <BuildingIcon/>,
      description: "Enabling intelligent property and asset management."
    },
    { 
      id: 4, 
      name: "Governance & Public Systems", 
      icon: <Handshake/>,
      description: "Driving transparency and efficiency in administration."
    },
    { 
      id: 5, 
      name: "Defense & Security Technology", 
      icon: <ShieldIcon/>,
      description: "Advancing AI-driven protection systems and predictive analytics."
    },
    { 
      id: 6, 
      name: "Healthcare & Science", 
      icon: <HeartHandshakeIcon/>,
      description: "Using data to make health systems more proactive and connected."
    },
  ];

  return (
    <section className="bg-[#222946] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image Section */}
  

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Industries We<span>Empower.</span>
            <br />
            With
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl font-normal">
          Our solutions cut across sectors where precision, efficiency, and intelligence matter most.

          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative  rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-white/5 hover:border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{industry.icon}</span>
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                {industry.name}
              </h3>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {industry.description}
              </p>
              
              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

