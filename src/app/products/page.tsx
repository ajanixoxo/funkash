"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PortfolioHeroSection from '@/components/portfolio-hero-section';
import PortfolioSections from '@/components/portfolio-sections';

const ProjectsPage: React.FC = () => {
    return (
        <div className="bg-[#222946]">
            <Navbar />
            <PortfolioHeroSection />
            <PortfolioSections />
            <Footer />
        </div>
    );
};

export default ProjectsPage;