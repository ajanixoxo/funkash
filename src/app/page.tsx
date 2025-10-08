"use client"

import AboutSection from "@/components/about-sectiont";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar";
import ProjectsSections from "@/components/project-section";
import ServicesSection from "@/components/service-section";
import { SpinningText } from "@/components/ui/spinning-text";
import MeetCEOSection from "@/components/meet-ceo";
export default function Home() {
  return (
    <div className="relative w-full"  >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSections />
      <ServicesSection />
      <MeetCEOSection />
      <ContactSection />
      <Footer />
      <div className="fixed bottom-19 right-12 text-white"> <SpinningText>learn more • earn more • grow more •</SpinningText></div>
      
    </div>
  )
}