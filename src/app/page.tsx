"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NewHeroSection from "@/components/new-hero-section";
import MissionSection from "@/components/mission-section";
import WhatWeDoSection from "@/components/what-we-do-section";
import IndustriesSection from "@/components/industries-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialSection from "@/components/testimonial-section";
import CTASection from "@/components/cta-section";
import PartnerSection from "@/components/partner-section";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const splitScene ="https://draft.spline.design/k-eznvo7nhyOQJPP/scene.splinecode";

  // Complex timeline: [Hero, Mission, Service 1, Service 2, Service 3, Rest of site...]
  const scrollKeyframes = [0, 0.15, 0.25, 0.35, 0.45, 0.6, 1];

  const scale = useTransform(scrollYProgress, scrollKeyframes, [
    1.15, // Hero (Large)
    0.4, // Mission (Small, pointing to text)
    0.5, // Services Card 1
    0.5, // Services Card 2
    0.5, // Services Card 3
    0.4, // Docked out of the way
    0.4, // End
  ]);

  const rotateY = useTransform(scrollYProgress, scrollKeyframes, [
    0,   // Hero
    360, // Spins 360 degrees when moving to Mission
    360, // Services 1 (Stopped)
    360, // Services 2 (Stopped)
    360, // Services 3 (Stopped)
    360, // Docked (Stopped)
    360, // End (Stopped)
  ]);

  const x = useTransform(scrollYProgress, scrollKeyframes, [
    "0%", // Hero (Center-Right)
    "25%", // Mission (Top Right)
    "-70%", // Services 1 (Top Left)
    "-60%", // Services 2 (Top Right)
    "-70%", // Services 3 (Bottom Left)
    "40%", // Docked (Bottom Right corner)
    "25%",
  ]);

  const y = useTransform(scrollYProgress, scrollKeyframes, [
    "0%", // Hero center
    "-25%", // Mission top
    "-10%", // Services top row
    "-10%", // Services top row
    "25%", // Services bottom row
    "40%", // Docked bottom corner
    "40%",
  ]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Global Persistent 3D Model */}
      <motion.div
        style={{ scale, rotateY, x, y }}
        className="fixed top-0 right-0 w-full lg:w-[50vw] h-[60vh] lg:h-[100vh] z-[50] pointer-events-none origin-center mt-20 lg:mt-0"
      >
        <Spline scene={splitScene} className="w-full h-full" />
      </motion.div>

      <Navbar />
      <NewHeroSection />
      <MissionSection />
      <WhatWeDoSection />
      <IndustriesSection />
      <PortfolioSection />
      <PartnerSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
