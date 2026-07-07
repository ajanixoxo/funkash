/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  image: string;
  isLogo?: boolean;
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
          image: "/projects/project10.png",
          isLogo: false,
        },
        {
          name: "BOTPAA",
          description: "AI workforce infrastructure. Botpaa lets organisations deploy reliable AI employees into real operations — trained, governed, and accountable — to do work, not just answer questions.",
          image: "",
          isLogo: true,
        },
        {
          name: "MALTIDA",
          description: "A policy and regulation intelligence engine. Maltida turns dense policy and regulatory text into structured, queryable insight, so teams can understand and act on the rules that govern them.",
          image: "",
          isLogo: true,
        },
        {
          name: "EDUFLEX",
          description: "A workforce capability system. Eduflex measures skills and builds them across an organisation through a continuous assess, train, practise, and evaluate loop.",
          image: "/projects/project9.png",
          isLogo: false,
        },
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
                  <div
                    className={`rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl ${
                      project.isLogo ? "bg-white aspect-[0.81] p-8 md:p-12" : ""
                    }`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[200px] flex items-center justify-center text-5xl">✨</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
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

