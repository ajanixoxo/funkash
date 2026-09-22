import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About — Tharwa Funkash Technology",
  description: "A product and engineering company building institution-grade software across finance, fraud defence, AI workforce, and governance.",
};
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AboutHeroSection from '@/components/about-hero-section';
import AboutVisionMissionSection from '@/components/about-vision-mission-section';
import AboutCEOSection from '@/components/about-ceo-section';
import AboutLegacySection from '@/components/about-legacy-section';
import AboutImpactSection from '@/components/about-impact-section';
import AboutVenturesSection from '@/components/about-ventures-section';

const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-[#161b2e]">
            <Navbar />
            <AboutHeroSection />
            <AboutVisionMissionSection />
            <AboutCEOSection />
            <AboutLegacySection />
            <AboutImpactSection />
            <AboutVenturesSection />
            <Footer />
        </div>
    );
};

export default AboutUsPage; 