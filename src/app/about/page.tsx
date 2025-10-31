"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AboutHeroSection from '@/components/about-hero-section';
import AboutCEOSection from '@/components/about-ceo-section';
import AboutLegacySection from '@/components/about-legacy-section';
import AboutImpactSection from '@/components/about-impact-section';
import AboutVenturesSection from '@/components/about-ventures-section';

const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-[#1a2332]">
            <Navbar />
            <AboutHeroSection />
            <AboutCEOSection />
            <AboutLegacySection />
            <AboutImpactSection />
            <AboutVenturesSection />
            <Footer />
        </div>
    );
};

export default AboutUsPage; 