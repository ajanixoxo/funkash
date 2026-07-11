/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  image: string;
  isLogo?: boolean;
  bgColor?: string;
}

interface ProjectSection {
  title: string;
  projects: Project[];
}

const PortfolioSections = () => {
  const sections: ProjectSection[] = [
    {
      title: "The Funkash Universe",
      projects: [
        {
          name: "FLOWPENSE",
          description: "The financial control layer between an enterprise's ERP and its bank. Flowpense automates accounts payable, approvals, spend controls, and reconciliation — so finance teams move money with speed and control.",
          image: "/projects/project13.png",
          isLogo: false,
        },
        {
          name: "AEGIS BIP",
          description: "A behavioural identity platform that detects fraud and mule networks from how people actually transact — not just who they claim to be. Aegis turns behaviour into a real-time defence layer.",
          image: "/projects/aegis-bip_icon.png",
          isLogo: true,
        },
        {
          name: "BOTPAA",
          description: "AI workforce infrastructure. Botpaa lets organisations deploy reliable AI employees into real operations — trained, governed, and accountable — to do work, not just answer questions.",
          image: "/projects/botpaa.png",
          isLogo: true,
          bgColor: "bg-emerald-800",
        },
        {
          name: "MALTIDA",
          description: "A policy and regulation intelligence engine. Maltida turns dense policy and regulatory text into structured, queryable insight, so teams can understand and act on the rules that govern them.",
          image: "/maltida_icon.png",
          isLogo: true,
        },
        {
          name: "EDUFLEX",
          description: "A workforce capability system. Eduflex measures skills and builds them across an organisation through a continuous assess, train, practise, and evaluate loop.",
          image: "/projects/project9.png",
          isLogo: false,
        },
        {
          name: "Vaulta",
          description: "Vaulta: A secure escrow payment platform that holds a buyer’s funds until agreed conditions are met and then releases them to the seller, built to enable trusted local and diaspora transactions across Africa.",
          image: "/projects/portfolio_logo_1.png",
          isLogo: true,
        },
        {
          name: "VincereBet",
          description: "Vincerebet: Online betting with a focus on user experience and technology.",
          image: "/projects/project1.png",
          isLogo: false,
        },
        {
          name: "Afripay",
          description: "Afripay: A digital payment platform streamlining financial transactions across Africa.",
          image: "/projects/project2.png",
          isLogo: false,
        },
        {
          name: "Limpiar",
          description: "Limpiar: A technology-driven marketplace transforming the cleaning services industry.",
          image: "/projects/project3.png",
          isLogo: false,
        },
        {
          name: "Funkash Global Properties",
          description: "Funkash Global Properties: Property development, modernizing real estate operations with tech.",
          image: "/projects/project4.png",
          isLogo: false,
        },
        {
          name: "Fuel Drop",
          description: "Fuel Drop: Professional automotive services delivered to your location with certified technicians across Lagos, Abuja, and Port Harcourt.",
          image: "/projects/project8.png",
          isLogo: false,
        },
        {
          name: "Funkash HR",
          description: "Funkash HR: A modular HR platform managing the entire employee lifecycle recruitment, onboarding, attendance, payroll, expenses, benefits, performance, and communication.",
          image: "/projects/portfolio_logo_8.png",
          isLogo: true,
        },
        {
          name: "Dunes Ai",
          description: "Dunes Ai: Pioneering AI and drone solutions for agriculture and logistics.",
          image: "/projects/project5.png",
          isLogo: false,
        },
        {
          name: "Nanohosting",
          description: "Nanohosting: Our cloud hosting solution, delivers fast, reliable, and secure hosting services to businesses around the world.",
          image: "/projects/project6.png",
          isLogo: false,
        },
        {
          name: "TRAD",
          description: "TRAD: A fashion ecommerce platform for buying and selling goods and services across Africa.",
          image: "/projects/project11.png",
          isLogo: false,
        },
        {
          name: "Digital Africa Wowen",
          description: "DAW: A Cooperative Society for the promotion of digital technology and innovation in Africa.",
          image: "/projects/project12.png",
          isLogo: false,
        },
        {
          name: "AI Ultrasound",
          description: "AI-Enhanced Ultrasound Breast Cancer Detection System: A low-cost, portable pulse-echo ultrasound system with AI anomaly-detection to flag possible breast tumours.",
          image: "",
          isLogo: true,
        },
        {
          name: "Afriprize",
          description: "Afriprize: A non-profit gaming platform utilizing gamification for community development and charitable initiatives.",
          image: "/projects/project7.png",
          isLogo: false,
        }
      ],
    },
  ];

  return (
    <section className="relative bg-[#1a1f3a] text-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
            className="mb-20 md:mb-32"
          >
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 md:mb-16">
              {section.title}
            </h2>

            {/* Projects Grid */}
            <div
              className={`grid grid-cols-1 ${
                section.projects.length >= 4
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : section.projects.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 mx-auto"
              } gap-8 md:gap-12`}
            >
              {section.projects.map((project, projectIndex) => (
                <motion.div
                  key={projectIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                  className="flex flex-col"
                >
                  {/* Project Card */}
                  <div className="h-64 sm:h-72 lg:h-80 w-full mb-4 flex items-center justify-center relative overflow-hidden">
                    <div
                      className={`rounded-2xl w-full h-full flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl ${
                        project.isLogo || !project.image ? `${project.bgColor || "bg-white"} p-8 md:p-12` : ""
                      }`}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className={`w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110 ${
                            project.isLogo ? "object-contain" : "object-cover"
                          }`}
                        />
                      ) : (
                        <div className="w-full h-full min-h-[200px] flex items-center justify-center">
                          <span className="text-3xl md:text-4xl font-black text-[#1a1f3a] tracking-tight uppercase px-6 text-center">{project.name}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="mt-2">
                    <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSections;

