"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactHeroSection from '@/components/contact-hero-section';
import ContactFormSection from '@/components/contact-form-section';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-[#1a1f3a]">
            <Navbar />
            <ContactHeroSection />
            <ContactFormSection />
            <Footer />
        </div>
    );
};

export default ContactPage;

