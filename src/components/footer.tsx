/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const quickLinks = ['Home', 'About', 'Approach', 'Portfolio', 'Contact'];

    const socialIcons = [
        { Icon: Linkedin, href: '#', label: 'LinkedIn' },
        { Icon: Twitter, href: '#', label: 'Twitter' },
        { Icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <footer className="bg-black text-white border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
                    {/* Left Side - Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className=" overflow-hidden">
                                <img
                                    src="/logo3.png"
                                    alt="Funkash Logo"
                                    className="w-full h-full "
                                />
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                        Building the systems that power tomorrow.
                        </p>
                    </div>
                    <div className="mb-8 flex items-start md:items-center justify-center flex-col">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href={link === 'Home' ? '/' : link === 'Contact' ? '/contact' : `/${link.toLowerCase()}`}
                                        onMouseEnter={() => setHoveredLink(link)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className={`text-white transition-colors duration-300 ${hoveredLink === link ? 'text-gray-400' : 'hover:text-gray-300'}`}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Side - Links and Social */}
                    <div className="flex flex-col md:items-end">


                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                {socialIcons.map(({ Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <Icon className="w-5 h-5 text-white" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm">
                        © 2025 Funkash Family Holdings. All Right Reserved.
                    </p>
                    <a
                        href="#"
                        className="text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};


export default Footer