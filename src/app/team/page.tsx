/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Silk from "@/components/Silk";
import { motion } from "framer-motion";
import Link from "next/link";
import { TeamCard, TeamMember } from "@/components/team-card";
import { ArrowRight, Global, Flash, ShieldSecurity, Hierarchy, Icon } from "iconsax-react";

// Team Members Dataset - easy to edit when final names & photos land
const teamMembers: TeamMember[] = [
  {
    id: "olumide-ogunwo",
    name: "Olumide Funkash Ogunwo",
    role: "Founder & Head of Product & Engineering",
    department: "Executive Leadership",
    image: "/olumide.jpg",
    bio: "17+ years building enterprise platforms, AI workforce architectures, and distributed systems across emerging markets.",
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
    name: "Head of Engineering",
    role: "Lead Systems Architect",
    department: "Engineering & AI",
    bio: "Leads low-latency financial rails, distributed database architecture, and mission-critical infrastructure.",
  },
  {
    id: "head-of-ai",
    name: "Head of AI Infrastructure",
    role: "Principal AI Scientist",
    department: "Engineering & AI",
    bio: "Directs autonomous agent orchestration, behavioral models, and proprietary language intelligence engines.",
  },
  {
    id: "head-of-product",
    name: "Head of Product",
    role: "Principal Product Manager",
    department: "Product & Design",
    bio: "Oversees institutional UX, product strategy, and flagship platform roadmap execution.",
  },
  {
    id: "head-of-security",
    name: "Head of Security & Governance",
    role: "Chief Information Security Lead",
    department: "Security & Governance",
    bio: "Guarantees zero-trust posture, cryptographic audits, and compliance with international banking standards.",
  },
  {
    id: "lead-frontend",
    name: "Frontend & Interface Lead",
    role: "Staff Frontend Engineer",
    department: "Engineering & AI",
    bio: "Architects responsive design systems, motion telemetry, and accessible multi-tenant web applications.",
  },
  {
    id: "lead-partnerships",
    name: "Head of Institutional Partnerships",
    role: "Enterprise Growth Lead",
    department: "Operations",
    bio: "Manages government relations, tier-one bank integrations, and pan-African enterprise client deployments.",
  },
  {
    id: "head-of-marketing",
    name: "Head of Marketing & Growth",
    role: "Director of Brand & Growth Strategy",
    department: "Marketing",
    bio: "Directs global brand presence, developer ecosystem engagement, and pan-African institutional narratives.",
  },
  {
    id: "lead-communications",
    name: "Lead Communications Strategist",
    role: "Brand & Content Lead",
    department: "Marketing",
    bio: "Shapes executive thought leadership, media publications, and technical storytelling across all Tharwa platforms.",
  },
];

const departments = [
  "All",
  "Executive Leadership",
  "Engineering & AI",
  "Product & Design",
  "Marketing",
  "Operations",
  "Security & Governance",
];

interface LeadershipPillar {
  id: string;
  title: string;
  description: string[];
  Icon: Icon;
}

const leadershipPillars: LeadershipPillar[] = [
  {
    id: "1",
    title: "Global Perspective",
    description: [
      "With experience building technology across Africa, Asia, and Europe, our leadership brings a unique global perspective to solving systemic institutional problems.",
      "This perspective enables us to engineer platforms that meet international security, resilience, and compliance standards from day one.",
    ],
    Icon: Global,
  },
  {
    id: "2",
    title: "Technical Excellence",
    description: [
      "Our leadership is deeply technical, with a rigorous foundation in scalable distributed architecture, applied machine learning, and secure systems engineering.",
      "We build capability into the code itself, ensuring our solutions perform under high-stakes enterprise load.",
    ],
    Icon: Flash,
  },
  {
    id: "3",
    title: "Institutional Stewardship",
    description: [
      "We believe that lasting technology infrastructure requires genuine ownership and long-term stewardship. We partner with clients for durable, compounding impact.",
      "Every system is designed with auditability, transparent operations, and zero black-box dependencies.",
    ],
    Icon: Hierarchy,
  },
  {
    id: "4",
    title: "Frontier Innovation",
    description: [
      "We push beyond conventional off-the-shelf software to build sovereign AI infrastructure, autonomous workflow systems, and fraud defense architectures.",
      "From neural model deployment to high-throughput financial rails, we build the technological frontiers of emerging markets.",
    ],
    Icon: ShieldSecurity,
  },
];

const TeamPage: React.FC = () => {
  const [activeDept, setActiveDept] = useState("All");

  const filteredMembers =
    activeDept === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.department === activeDept);

  return (
    <div className="bg-[#161b2e] text-white min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#161b2e] text-white pt-36 pb-20 lg:pt-44 lg:pb-24 px-6 overflow-hidden">
        {/* Silk Background */}
        <div className="absolute inset-0 bg-black opacity-50 z-0 pointer-events-none">
          <Silk
            speed={3.5}
            scale={1}
            color="#161b2e"
            noiseIntensity={1.0}
            rotation={0}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.15]"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            Engineers, researchers, and operators dedicated to building the sovereign digital infrastructure African institutions run on and trust.
          </motion.p>
        </div>
      </section>

      {/* TEAM GRID SECTION */}
      <section className="py-16 lg:py-24 px-6 bg-[#111625] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          {/* Department Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeDept === dept
                    ? "bg-white text-gray-950 font-semibold"
                    : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.04]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP CONVICTIONS */}
      <section className="py-20 lg:py-32 px-6 bg-[#161b2e] border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              Leadership{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Principles
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              The foundational convictions that guide our team&apos;s architectural choices and institutional commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {leadershipPillars.map((pillar) => {
              const IconComp = pillar.Icon;
              return (
                <div
                  key={pillar.id}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 text-gray-300">
                      <IconComp size="24" color="#e2e8f0" variant="Outline" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
                      {pillar.title}
                    </h3>
                    <div className="space-y-3">
                      {pillar.description.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-gray-400 text-sm sm:text-base leading-relaxed font-light"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 lg:py-28 px-6 bg-[#111625] text-white border-t border-white/[0.06] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Work with our engineering team
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
            Whether you are an institution modernizing mission-critical operations or an engineer building for scale, we would love to connect.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-950 font-semibold hover:bg-gray-200 transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowRight size="18" color="#030712" variant="Outline" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
