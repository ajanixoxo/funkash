/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  description: string;
  image: string;
  isLogo?: boolean;
  bgColor?: string;
  url?: string;
}

interface ProjectSection {
  title: string;
  projects: Project[];
}

const PortfolioSections = () => {
  const sections: ProjectSection[] = [
    {
      title: "What we built for clients",
      projects: [
        {
          name: "VAULTA",
          description: "A secure escrow payment platform that holds a buyer’s funds until agreed conditions are met and then releases them to the seller, built to enable trusted local and diaspora transactions across Africa.",
          image: "/projects/portfolio_logo_1.png",
          isLogo: true,
          url: "https://vaulta.com",
        },
        {
          name: "VINCEREBET",
          description: "Online betting with a focus on user experience and technology.",
          image: "/projects/project1.png",
          isLogo: false,
          url: "https://vincerebet.com",
        },
        {
          name: "AFRIPAY",
          description: "A digital payment platform streamlining financial transactions across Africa.",
          image: "/projects/project2.png",
          isLogo: false,
          url: "https://afripay.com",
        },
        {
          name: "LIMPIAR",
          description: "A technology-driven marketplace transforming the cleaning services industry.",
          image: "/projects/project3.png",
          isLogo: false,
          url: "https://limpiar.com",
        },
        {
          name: "FUEL DROP",
          description: "Professional automotive services delivered to your location with certified technicians across Lagos, Abuja, and Port Harcourt.",
          image: "/projects/project8.png",
          isLogo: false,
          url: "https://fueldrop.com",
        },
        {
          name: "FUNKASH HR",
          description: "A modular HR platform managing the entire employee lifecycle: recruitment, onboarding, attendance, payroll, expenses, benefits, performance, and communication.",
          image: "/projects/portfolio_logo_8.png",
          isLogo: true,
          url: "https://funkash.com",
        },
        {
          name: "DUNES AI",
          description: "Pioneering AI and drone solutions for agriculture and logistics.",
          image: "/projects/project5.png",
          isLogo: false,
          url: "https://dunes.ai",
        },
        {
          name: "NANOHOSTING",
          description: "Our cloud hosting solution, delivers fast, reliable, and secure hosting services to businesses around the world.",
          image: "/projects/project6.png",
          isLogo: false,
          url: "https://nanohosting.com",
        },
        {
          name: "TRAD",
          description: "A fashion ecommerce platform for buying and selling goods and services across Africa.",
          image: "/projects/project11.png",
          isLogo: false,
          url: "https://trad.africa",
        },
        {
          name: "DIGITAL AFRICA WOMEN (DAW)",
          description: "A Cooperative Society for the promotion of digital technology and innovation in Africa.",
          image: "/projects/project12.png",
          isLogo: false,
          url: "https://digitalafricawomen.org",
        },
        {
          name: "AI ULTRASOUND",
          description: "AI-Enhanced Ultrasound Breast Cancer Detection System: A low-cost, portable pulse-echo ultrasound system with AI anomaly-detection to flag possible breast tumours.",
          image: "",
          isLogo: true,
          url: "https://aiultrasound.com",
        },
        {
          name: "AFRIPRIZE",
          description: "A non-profit gaming platform utilizing gamification for community development and charitable initiatives.",
          image: "/projects/project7.png",
          isLogo: false,
          url: "https://afriprize.com",
        }
      ],
    },
  ];

  return (
    <section className="relative bg-[#1a1f3a] text-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="mb-20 md:mb-32"
          >
            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 md:mb-16"
            >
              {section.title}
            </motion.h2>

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
                <motion.a
                  key={projectIndex}
                  href={project.url || "#"}
                  target={project.url ? "_blank" : undefined}
                  rel={project.url ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (projectIndex % 3) * 0.1 }}
                  className="group flex flex-col cursor-pointer"
                >
                  {/* Project Card */}
                  <div className="h-64 sm:h-72 lg:h-80 w-full mb-4 flex items-center justify-center relative overflow-hidden">
                    <div
                      className={`rounded-2xl w-full h-full flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-all duration-300 shadow-lg group-hover:shadow-2xl ${
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
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors">{project.name}</h3>
                      {project.url && (
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSections;

