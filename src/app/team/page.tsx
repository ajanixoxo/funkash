/* eslint-disable @next/next/no-img-element */
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState } from "react";
import Silk from "@/components/Silk";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/button";

interface LeadershipPillar {
  id: string;
  title: string;
  description: string[];
  icon: string;
}

const leadershipPillars: LeadershipPillar[] = [
  {
    id: "1",
    title: "Global Perspective",
    description: [
      "With experience building technology across Africa, Asia, and Europe, our leadership brings a unique global perspective to solving systemic institutional problems.",
      "This perspective enables us to engineer platforms that meet international security, resilience, and compliance standards from day one."
    ],
    icon: "🌍"
  },
  {
    id: "2",
    title: "Technical Excellence",
    description: [
      "Our leadership is deeply technical, with a rigorous foundation in scalable distributed architecture, applied machine learning, and secure systems engineering.",
      "We build capability into the code itself, ensuring our solutions perform under high-stakes enterprise load."
    ],
    icon: "⚡"
  },
  {
    id: "3",
    title: "Institutional Stewardship",
    description: [
      "We believe that lasting technology infrastructure requires genuine ownership and long-term stewardship. We partner with clients for durable, compounding impact.",
      "Every system is designed with auditability, transparent operations, and zero black-box dependencies."
    ],
    icon: "🤝"
  },
  {
    id: "4",
    title: "Frontier Innovation",
    description: [
      "We push beyond conventional off-the-shelf software to build sovereign AI infrastructure, autonomous workflow systems, and fraud defense architectures.",
      "From neural model deployment to high-throughput financial rails, we build the technological frontiers of emerging markets."
    ],
    icon: "🚀"
  }
];

const PillarCard: React.FC<{ pillar: LeadershipPillar; index: number; isLast: boolean }> = ({ pillar, index, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group py-8 lg:py-12 transition-all duration-300 ${!isLast ? "border-b border-gray-200 dark:border-gray-800" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
        {/* Number */}
        <div className="col-span-2 lg:col-span-1">
          <span className={`text-sm lg:text-base font-light transition-colors duration-300 ${isHovered ? "text-purple-600 dark:text-purple-400" : "text-gray-500 dark:text-gray-600"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <div className="col-span-10 lg:col-span-5">
          <h3 className={`text-2xl lg:text-4xl xl:text-5xl font-medium tracking-tight transition-all duration-300 ${isHovered ? "text-purple-600 dark:text-purple-400 translate-x-2" : "text-gray-900 dark:text-gray-300"}`}>
            {pillar.title}
          </h3>
        </div>

        {/* Description */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="space-y-4">
            {pillar.description.map((paragraph, idx) => (
              <p key={idx} className={`text-base lg:text-lg leading-relaxed transition-all duration-300 ${isHovered ? "text-gray-700 dark:text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Hover indicator line */}
      <div className={`h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-8 transition-all duration-500 ${isHovered ? "w-full opacity-100" : "w-0 opacity-0"}`} />
    </div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#161b2e] text-white">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#161b2e] via-gray-950 to-purple-950 text-white py-24 lg:py-36 px-6 lg:px-12 overflow-hidden">
          {/* Background Silk */}
          <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none">
            <Silk speed={5} scale={1} color="#222946" noiseIntensity={1.5} rotation={0} />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm lg:text-base font-medium uppercase tracking-widest text-purple-300">
                Leadership &amp; Team
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-8 leading-tight"
            >
              The Team Driving{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto"
            >
              Meet the founders and engineering minds behind Tharwa Funkash Technology, building institution-grade infrastructure for Africa and beyond.
            </motion.p>
          </div>
        </section>

        {/* FOUNDERS SECTION */}
        <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#111625]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-widest uppercase text-purple-400 mb-2 block">
                Founders
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Executive Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {/* Olumide */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl p-8 sm:p-10 bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-slate-900 border border-white/10 shadow-xl">
                  <img
                    src="/olumide.jpg"
                    alt="Olumide Funkash Ogunwo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                      Olumide Funkash Ogunwo
                    </h3>
                    <p className="text-purple-400 font-medium text-base sm:text-lg mt-1">
                      Founder &amp; Head of Product &amp; Engineering
                    </p>
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed text-base flex-1">
                    Global technology entrepreneur with 17+ years building enterprise platforms across Africa, Asia, and Europe. Architect of high-throughput software architectures, AI workforce engines, and fraud defense systems.
                  </p>
                </div>
              </motion.div>

              {/* Naomi */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-3xl p-8 sm:p-10 bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-slate-900 border border-white/10 shadow-xl">
                  <img
                    src="/naomi.jpg"
                    alt="Naomi Durosaro"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                      Naomi Durosaro
                    </h3>
                    <p className="text-blue-400 font-medium text-base sm:text-lg mt-1">
                      Cofounder &amp; Head of Operations
                    </p>
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed text-base flex-1">
                    Leads institutional partnerships, organizational scaling, governance, and operating execution across all regional entities and portfolio deployments.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#161b2e]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 lg:mb-24">
              <span className="text-sm font-semibold tracking-widest uppercase text-purple-400 mb-2 block">
                Philosophy
              </span>
              <h2 className="text-4xl lg:text-6xl font-medium text-white tracking-tight mb-6">
                Leadership Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
                The core convictions that guide our team&apos;s architectural choices and institutional commitments.
              </p>
            </div>

            <div className="space-y-0">
              {leadershipPillars.map((pillar, index) => (
                <PillarCard
                  key={pillar.id}
                  pillar={pillar}
                  index={index}
                  isLast={index === leadershipPillars.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950 text-white relative overflow-hidden border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              Partner with our leadership team
            </h3>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We collaborate with enterprise executives and government leaders to design, build, and deploy transformative technology.
            </p>
            <div className="flex justify-center">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
