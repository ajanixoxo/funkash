/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  image: string;
  // bgColor: string;
}

interface ProjectSection {
  title: string;
  projects: Project[];
}

const PortfolioSections = () => {
  const sections: ProjectSection[] = [
    {
      title: "Tech & Startups",
      projects: [
        {
          name: "VincereBet",
          description: "Vincerebet: Online betting with a focus on user experience and technology.",
          image: "/projects/project1.png",
          // bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
        },
        {
          name: "Afripay",
          description: "Afripay: A digital payment platform streamlining financial transactions across Africa.",
          image: "/projects/project2.png",
          // bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
        },
        {
          name: "Limpiador",
          description: "Limpiar: A technology-driven marketplace transforming the cleaning services industry.",
          image: "/projects/project3.png",
          // bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
        },
        {
          name: "Funkash Global Properties",
          description: "Funkash Global Properties: Property development, modernizing real estate operations with tech.",
          image: "/projects/project4.png",
          // bgColor: "bg-gradient-to-br from-yellow-500 to-yellow-600",
        },
      ],
    },
    {
      title: "AI and Drone Development",
      projects: [
        {
          name: "Dunes Ai",
          description: "Dunes Ai: Pioneering AI and drone solutions for agriculture and logistics.",
          image: "/projects/project5.png",
          // bgColor: "bg-gradient-to-br from-gray-900 to-black",
        },
        {
          name: "Nanohosting",
          description: "Nanohosting: Our cloud hosting solution, delivers fast, reliable, and secure hosting services to businesses around the world.",
          image: "/projects/project6.png",
          // bgColor: "bg-gradient-to-br from-blue-700 to-blue-900",
        },
      ],
    },
    {
      title: "Non-profit and Social Innovation",
      projects: [
        {
          name: "Afriprize",
          description: "Afriprize: A non-profit gaming platform utilizing gamification for community development and charitable initiatives.",
          image: "/projects/project7.png",
          // bgColor: "bg-white",
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
                section.projects.length === 4
                  ? "md:grid-cols-2 lg:grid-cols-2"
                  : section.projects.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2  mx-auto"
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
                    className={` rounded-2xl  flex items-center justify-start relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110"
                    />
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

