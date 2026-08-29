/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  const portfolioItems = [
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
  ];

  return (
    <section className="bg-gradient-to-r from-[#1a1f3a] via-[#1a1f3a] via-10% to-[#C78018]/30 to-90% text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 uppercase">The Funkash <span className="italic font-normal">Universe</span></h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            Our flagship products — a connected set of platforms engineered to solve hard problems across finance, security, work, and governance.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl hover:shadow-2xl p-2 transition-all duration-300"
            >
              {/* Logo Area */}
              <div className="h-64 flex items-center justify-center relative overflow-hidden">
                <div
                  className={`rounded-2xl w-full h-full flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl ${
                    item.isLogo || !item.image ? `${item.bgColor || "bg-white"} p-8` : ""
                  }`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110 ${
                        item.isLogo ? "object-contain" : "object-cover"
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full min-h-[200px] flex items-center justify-center">
                      <span className="text-3xl md:text-4xl font-black text-[#1a1f3a] tracking-tight uppercase px-6 text-center">{item.name}</span>
                    </div>
                  )}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" /> */}
                </div>
              </div>

              {/* Content Area */}
              <div className="pt-4">
                <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors text-lg font-medium"
          >
            Explore our products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

