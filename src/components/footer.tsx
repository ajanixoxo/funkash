/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const quickLinks = ['Home', 'About', 'Approach', 'Portfolio', 'Contact'];

    const socialIcons = [
        { Icon: Linkedin, href: 'https://www.linkedin.com/company/funktech72', label: 'LinkedIn' },
        { Icon: Twitter, href: 'https://x.com/iamfunkash', label: 'Twitter' },
        { Icon: Instagram, href: 'https://www.instagram.com/iamfunkash/', label: 'Instagram' },
    ];

    return (
        <footer className="bg-black text-white border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
                    {/* Left Side - Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8364 18.1363C12.1729 18.8173 10.6036 19.4377 10.6036 19.4377C10.1699 19.6094 9.6785 19.3967 9.50685 18.963C9.3352 18.5293 9.54788 18.0379 9.98157 17.8663C9.98157 17.8663 23.054 12.6866 37.9721 15.5836C38.43 15.6726 38.7295 16.1165 38.6406 16.5743C38.5517 17.0322 38.1078 17.3317 37.6499 17.2428C36.1888 16.9591 34.7459 16.7554 33.3326 16.6185V31.4996H34.2752C34.7415 31.4996 35.1203 31.8783 35.1203 32.3447C35.1203 32.8111 34.7415 33.1897 34.2752 33.1897H30.526C30.0596 33.1897 29.681 32.8111 29.681 32.3447C29.681 31.8783 30.0596 31.4996 30.526 31.4996H31.6425V16.4848C29.2936 16.3403 27.0425 16.3718 24.9442 16.5145V23.0471C25.8914 22.7255 27.402 22.4657 29.7813 22.5551C30.2474 22.5727 30.6116 22.9653 30.594 23.4313C30.5765 23.8974 30.1839 24.2616 29.7178 24.2441C27.6992 24.1682 26.4325 24.3488 25.6506 24.5828C25.3197 24.6818 25.0828 24.8017 24.9442 24.8834V31.4996H25.9858C26.4522 31.4996 26.8309 31.8783 26.8309 32.3447C26.8309 32.8111 26.4522 33.1897 25.9858 33.1897H22.2366C21.7702 33.1897 21.3916 32.8111 21.3916 32.3447C21.3916 31.8783 21.7702 31.4996 22.2366 31.4996H23.254V16.6558C20.7045 16.9081 18.4248 17.3111 16.5265 17.7329V31.4996H17.5106C17.977 31.4996 18.3557 31.8783 18.3557 32.3447C18.3557 32.8111 17.977 33.1897 17.5106 33.1897H13.7615C13.2951 33.1897 12.9165 32.8111 12.9165 32.3447C12.9165 31.8783 13.2951 31.4996 13.7615 31.4996H14.8364V18.1363Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9827 3.08594C35.5152 3.08594 44.8782 12.4489 44.8782 23.9814C44.8782 35.5139 35.5152 44.8769 23.9827 44.8769C12.4502 44.8769 3.08716 35.5139 3.08716 23.9814C3.08716 12.4489 12.4502 3.08594 23.9827 3.08594ZM23.9827 3.36763C12.6056 3.36763 3.36885 12.6044 3.36885 23.9814C3.36885 35.3585 12.6056 44.5952 23.9827 44.5952C35.3598 44.5952 44.5965 35.3585 44.5965 23.9814C44.5965 12.6044 35.3598 3.36763 23.9827 3.36763Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9827 0C37.2191 0 47.9654 10.7463 47.9654 23.9828C47.9654 37.2193 37.2191 47.9656 23.9827 47.9656C10.7462 47.9656 -0.00012207 37.2193 -0.00012207 23.9828C-0.00012207 10.7463 10.7462 0 23.9827 0ZM23.9827 1.12678C11.3681 1.12678 1.12665 11.3682 1.12665 23.9828C1.12665 36.5974 11.3681 46.8388 23.9827 46.8388C36.5973 46.8388 46.8387 36.5974 46.8387 23.9828C46.8387 11.3682 36.5973 1.12678 23.9827 1.12678Z" fill="white"/>
</svg>
                            <h2 className="font-semibold text-xl text-white">
                                Funkash Technology
                            </h2>
                        </div>

                        <div className="text-gray-300 leading-relaxed space-y-1">
                            <p className="font-semibold text-white">Funkash Technology (RC 8114457)</p>
                            <p>Flat 21, Adeline Court, Banana Island, Ikoyi, Lagos, Nigeria</p>
                            <p>hello@funkash.com &middot; funkash.com</p>
                        </div>
                    </div>
                    <div className="mb-8 flex items-start md:items-center justify-center flex-col">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href={link === 'Home' ? '/' : link === 'Portfolio' ? '/products' : `/${link.toLowerCase()}`}
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
                        © 2026 Funkash Technology Limited. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/privacy-policy"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                        >
                            Privacy Policy
                        </a>
                        <span className="text-gray-600 hidden md:inline">&middot;</span>
                        <a
                            href="/terms-of-use"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                        >
                            Terms of Service
                        </a>
                        <span className="text-gray-600 hidden md:inline">&middot;</span>
                        <a
                            href="/cookie-policy"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                        >
                            Cookie Policy
                        </a>
                        <span className="text-gray-600 hidden md:inline">&middot;</span>
                        <a
                            href="/acceptable-use-policy"
                            className="text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                        >
                            Acceptable Use Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer