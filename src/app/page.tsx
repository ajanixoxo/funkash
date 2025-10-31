"use client"

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NewHeroSection from "@/components/new-hero-section";
import MissionSection from "@/components/mission-section";
import WhatWeDoSection from "@/components/what-we-do-section";
import IndustriesSection from "@/components/industries-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialSection from "@/components/testimonial-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <Navbar />
      <NewHeroSection />
      <MissionSection />
      <WhatWeDoSection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  )
}