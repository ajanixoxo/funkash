"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ApproachHeroSection from '@/components/approach-hero-section';
import ApproachPrinciplesSection from '@/components/approach-principles-section';
import ApproachHowWeWorkSection from '@/components/approach-how-we-work-section';

const ApproachPage: React.FC = () => {
    return (
        <div className="bg-[#1a1f3a]">
            <Navbar />
            <ApproachHeroSection />
            <ApproachPrinciplesSection />
            <ApproachHowWeWorkSection />
            <Footer />
        </div>
    );
};

export default ApproachPage;

