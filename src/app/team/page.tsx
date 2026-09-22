/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Silk from "@/components/Silk";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/button";
import { TeamCard, TeamMember } from "@/components/team-card";

// Team Members Dataset - easily modifiable content list
const teamMembers: TeamMember[] = [
  {
    id: "olumide-ogunwo",
    name: "Olumide Funkash Ogunwo",
    role: "Founder & Head of Product & Engineering",
    department: "Executive Leadership",
    image: "/olumide.jpg",
    bio: "17+ years building high-scale technology platforms, AI workforce architectures, and distributed systems across emerging markets.",
    socials: {
      linkedin: "https://www.linkedin.com/company/funktech72",
      twitter: "https://x.com/iamfunkash",
    },
  },
  {
    id: "naomi-durosaro",
    name: "Naomi Durosaro",
    role: "Cofounder & Head of Operations",
    department: "Executive Leadership",
    image: "/naomi.jpg",
    bio: "Directs institutional operations, strategic ecosystem partnerships, regulatory compliance, and cross-border expansion.",
    socials: {
      linkedin: "https://www.linkedin.com/company/funktech72",
    },
  },
  {
    id: "head-of-engineering",
    name: "Lead Systems Architect",
    role: "Head of Engineering",
    department: "Engineering & AI",
    bio: "Leads low-latency financial rails, distributed database architecture, and mission-critical cloud infrastructure.",
  },
  {
    id: "head-of-ai",
    name: "Principal AI Scientist",
    role: "Head of AI Infrastructure",
    department: "Engineering & AI",
    bio: "Directs autonomous agent orchestration, behavioral embeddings, and proprietary NLP models across Tharwa platforms.",
  },
  {
    id: "head-of-product",
    name: "Principal Product Manager",
    role: "Head of Product",
    department: "Product & Design",
    bio: "Oversees user research, institutional UX, product strategy, and flagship platform roadmap execution.",
  },
  {
    id: "head-of-security",
    name: "Chief Information Security Lead",
    role: "Head of Security & Governance",
    department: "Security & Governance",
    bio: "Guarantees institution-grade zero-trust posture, cryptographic audits, and compliance with global banking standards.",
  },
  {
    id: "lead-frontend",
    name: "Staff Frontend Engineer",
    role: "Frontend & Interface Systems Lead",
    department: "Engineering & AI",
    bio: "Architects interactive design systems, motion telemetry, and accessible multi-tenant web applications.",
  },
  {
    id: "lead-partnerships",
    name: "Enterprise Growth Lead",
    role: "Head of Institutional Partnerships",
    department: "Operations",
    bio: "Manages government relations, tier-one bank integrations, and pan-African enterprise client deployments.",
  },
];

const departments = [
  "All",
  "Executive Leadership",
  "Engineering & AI",
  "Product & Design",
  "Security & Governance",
  "Operations",
];

interface LeadershipPillar {
  id: string;
  title: string;
  description: string[];
}

const leadershipPillars: LeadershipPillar[] = [
  {
    id: "1",
    title: "Global Perspective",
    description: [
      "With experience building technology across Africa, Asia, and Europe, our leadership brings a unique global perspective to solving systemic institutional problems.",
      "This perspective enables us to engineer platforms that meet international security, resilience, and compliance standards from day one.",
    ],
  },
  {
    id: "2",
    title: "Technical Excellence",
    description: [
      "Our leadership is deeply technical, with a rigorous foundation in scalable distributed architecture, applied machine learning, and secure systems engineering.",
      "We build capability into the code itself, ensuring our solutions perform under high-stakes enterprise load.",
    ],
  },
  {
    id: "3",
    title: "Institutional Stewardship",
    description: [
      "We believe that lasting technology infrastructure requires genuine ownership and long-term stewardship. We partner with clients for durable, compounding impact.",
      "Every system is designed with auditability, transparent operations, and zero black-box dependencies.",
    ],
  },
  {
    id: "4",
    title: "Frontier Innovation",
    description: [
      "We push beyond conventional off-the-shelf software to build sovereign AI infrastructure, autonomous workflow systems, and fraud defense architectures.",
      "From neural model deployment to high-throughput financial rails, we build the technological frontiers of emerging markets.",
    ],
  },
];

const TeamPage: React.FC = () => {
  const [activeDept, setActiveDept] = useState("All");

  const filteredMembers =
    activeDept === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.department === activeDept);

  return (
    <div className="bg-[#111625] text-white min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#161b2e] via-[#111625] to-[#111625] text-white pt-36 pb-20 lg:pt-44 lg:pb-28 px-6 overflow-hidden">
        {/* Silk Ambient Background */}
        <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none">
          <Silk
            speed={4}
            scale={1}
            color="#222946"
            noiseIntensity={1.2}
            rotation={0}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-300">
              The People Behind Tharwa Funkash
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-[1.1]"
          >
            Meet the{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Engineers, researchers, and operators dedicated to building the sovereign digital infrastructure African institutions run on.
          </motion.p>
        </div>
      </section>

      {/* TEAM GRID SECTION */}
      <section className="py-16 lg:py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Department Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeDept === dept
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Consistent Sizing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP PRINCIPLES */}
      <section className="py-20 lg:py-32 px-6 bg-[#161b2e] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-2 block">
              Core Convictions
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              Leadership Principles
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl">
              How our team approaches engineering, governance, and institutional accountability.
            </p>
          </div>

          <div className="space-y-0">
            {leadershipPillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`py-8 lg:py-10 ${
                  index !== leadershipPillars.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-2 sm:col-span-1 text-sm font-mono text-purple-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-10 sm:col-span-4">
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="col-span-12 sm:col-span-7 space-y-3">
                    {pillar.description.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-300 text-sm sm:text-base leading-relaxed font-light"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-28 px-6 bg-gradient-to-br from-[#161b2e] via-gray-950 to-purple-950 text-white relative overflow-hidden border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Work with our engineering team
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 font-light leading-relaxed">
            Whether you are an institution ready to modernize critical infrastructure or an engineer interested in solving structural problems, we would love to speak.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Partner With Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
