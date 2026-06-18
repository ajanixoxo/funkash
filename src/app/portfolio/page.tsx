"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Silk from "@/components/Silk";
import { motion } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";

const projects = [
  {
    name: "Vaulta",
    subtitle: "CFG Trustees Escrow Platform",
    description: "A secure escrow payment platform that holds a buyer’s funds until agreed conditions are met and then releases them to the seller, built to enable trusted local and diaspora transactions across Africa.",
    logo: "/projects/portfolio_logo_1.png",
    bgClass: "bg-gradient-to-br from-blue-900/20 to-purple-900/20"
  },
  {
    name: "Flowpense",
    subtitle: "Corporate Card & Expense Management",
    description: "A corporate card and expense-management platform that lets Nigerian and African businesses issue controlled virtual and physical cards, automate approvals, capture receipts, and track spend in real time.",
    logo: "/projects/portfolio_logo_2.png",
    bgClass: "bg-gradient-to-br from-green-900/20 to-emerald-900/20"
  },
  {
    name: "TRAD Africa",
    subtitle: "Multi-vendor E-commerce",
    description: "A multi-vendor e-commerce marketplace with a centralised logistics model, where TRAD handles all customer deliveries and earns a commission from vendors.",
    logo: "/projects/portfolio_logo_3.png",
    bgClass: "bg-gradient-to-br from-orange-900/20 to-amber-900/20"
  },
  {
    name: "DAW",
    subtitle: "Digital African Woman",
    description: "A dual-purpose cooperative-management and e-commerce platform that empowers African women entrepreneurs with member shops, contributions, loans, and masterclasses.",
    logo: "/projects/portfolio_logo_4.png",
    bgClass: "bg-gradient-to-br from-pink-900/20 to-rose-900/20"
  },
  {
    name: "Edu Flex (Eduflex AI)",
    subtitle: "Personalised AI Learning",
    description: "A personalised AI learning platform that turns user topics or documents into tailored video and audio lessons, delivered by AI tutors with proprietary voice cloning and custom avatars.",
    logo: "/projects/portfolio_logo_5.png",
    bgClass: "bg-gradient-to-br from-violet-900/20 to-purple-900/20"
  },
  {
    name: "AegisMail",
    subtitle: "Email Security & Tracking",
    description: "An intelligent email-security and tracking app that monitors connected Gmail and Microsoft mailboxes for setting changes and unauthorised access, sending proactive near-real-time alerts.",
    logo: "/projects/portfolio_logo_6.png",
    bgClass: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
  },
  {
    name: "Fueldrop",
    subtitle: "On-Demand Fuel Delivery",
    description: "An on-demand fuel-delivery platform, a customer app, a driver app, and a super-admin portal that lets users order petrol or diesel to their location with live tracking and in-app payment.",
    logo: "/projects/portfolio_logo_7.png",
    bgClass: "bg-gradient-to-br from-red-900/20 to-orange-900/20"
  },
  {
    name: "Funkash HR",
    subtitle: "Modular HR Platform",
    description: "Funkash HR is a modular HR platform managing the entire employee lifecycle recruitment, onboarding, attendance, payroll, expenses, benefits, performance, and communication.",
    logo: "/projects/portfolio_logo_8.png",
    bgClass: "bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20"
  },
  {
    name: "AI Ultrasound",
    subtitle: "Breast Cancer Detection System",
    description: "A low-cost, portable pulse-echo ultrasound system that fires 5 MHz pulses, digitises the returning echoes, and reconstructs them into B-scan images analysed by an AI anomaly-detection pipeline.",
    logo: null,
    bgClass: "bg-gradient-to-br from-indigo-900/20 to-sky-900/20"
  }
];

export default function PortfolioPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-70 z-0 pointer-events-none">
            <Silk speed={5} scale={1} color="#222946" noiseIntensity={1.5} rotation={0} />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 pt-10">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-8 leading-tight">
              <TextAnimate animation="blurIn" as="span">Our Portfolio</TextAnimate>
            </h1>

            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-12">
              <TextAnimate animation="blurIn" as="span">Building What You Were Born to Lead</TextAnimate>
            </p>

            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - Grid */}
        <section className="py-16 lg:py-24 px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                  className={`group relative flex flex-col h-full bg-gray-900/50 backdrop-blur-md rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 overflow-hidden shadow-xl`}
                >
                  <div className={`w-full h-56 ${project.bgClass} flex items-center justify-center p-6 shrink-0 relative overflow-hidden`}>
                    {project.logo ? (
                      <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.logo} alt={project.name} className="max-w-[85%] max-h-[85%] object-contain drop-shadow-xl" />
                      </div>
                    ) : (
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500">✨</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-gray-900 to-gray-950">
                    <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">
                      {project.subtitle}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base flex-1">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
