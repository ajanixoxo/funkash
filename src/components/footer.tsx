"use client"
import React, { useState } from 'react';
import { TextAnimate } from './ui/text-animate';
const Footer: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const footerLinks = {
        company: ['About', 'Services', 'Project', 'Contact'],
        services: ['Technical Infrastructure', 'AI Solutions', 'Partnerships', 'Global Expansion'],

    };

    return (
        <footer className="bg-black text-white border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                            FUNKASH
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Building the future through innovative technology and strategic partnerships in emerging markets.
                        </p>
                        <div className="h-0.5 w-20 bg-gradient-to-r from-purple-500 to-blue-500" />
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                        {category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {links.map((link) => (
                                            <li key={link}>
                                                <a
                                                    href="#"
                                                    onMouseEnter={() => setHoveredLink(link)}
                                                    onMouseLeave={() => setHoveredLink(null)}
                                                    className={`text-gray-300 transition-colors duration-300 ${hoveredLink === link ? 'text-purple-400' : 'hover:text-white'}`}
                                                >
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-gray-900 pt-12 mb-12">
                    <h2 className="text-6xl text-white  lg:text-8xl xl:text-9xl font-medium tracking-tight mb-12 lg:mb-16">
                        <TextAnimate animation="blurIn" as="h2">New Tech Era</TextAnimate>
                    </h2>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 Funkash. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 text-sm">
                            Privacy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 text-sm">
                            Terms
                        </a>

                    </div>
                </div>
            </div>


        </footer>
    );
};


export default Footer