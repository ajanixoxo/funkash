"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const lastMousePos = useRef({ x: 0.5, y: 0.5 }); // Default to center

  const updatePosition = () => {
    const scroll = scrollYProgress.get();
    
    // Determine tracking influence: 0 at hero, 1 after hero
    let influence = 0;
    if (scroll >= 0.15) {
      influence = 1; // Full tracking after Hero
    } else if (scroll > 0.05) {
      influence = (scroll - 0.05) / 0.1; // Smoothly fades in tracking as you leave the Hero
    }

    // Calculate full targets
    const targetX = (lastMousePos.current.x * 200 - 150) * influence;
    const targetY = (lastMousePos.current.y * 100 - 50) * influence;

    mouseX.set(targetX);
    mouseY.set(targetY);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      };
      updatePosition();
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); // Empty dependency array is fine since updatePosition doesn't rely on React state

  useMotionValueEvent(scrollYProgress, "change", updatePosition);

  // Convert the numerical spring values into percentage strings for the style prop
  const x = useTransform(springX, (val) => `${val}%`);
  const y = useTransform(springY, (val) => `${val}%`);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Global Persistent 3D Model */}
      <motion.div
        style={{ scale, x, y }}
        className="fixed top-0 right-0 w-full lg:w-[50vw] h-[60vh] lg:h-[100vh] z-[50] pointer-events-none origin-center mt-20 lg:mt-0 lg:-translate-x-45 lg:-translate-y-12"
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
