
"use client"

import React, { useState } from 'react';
import { TextAnimate } from './ui/text-animate';
import AnimatedButton from './animated-button';
import { Twitter, Gitlab, Instagram, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
    const [hoveredField, setHoveredField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const socialIcons = [
        { Icon: Twitter, href: "#" },
        { Icon: Linkedin, href: "#" },
        { Icon: Gitlab, href: "#" },
        { Icon: Instagram, href: "#" },
    ];


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        { id: '01', label: 'Email', value: 'hello@company.com' },
        { id: '02', label: 'Phone', value: '+1 (555) 123-4567' },
        { id: '03', label: 'Location', value: 'San Francisco, CA' }
    ];

    return (
        <section className=" text-white py-16 lg:py-24 px-6 lg:px-12" id="contact">
            <div className='w-full h-[1px] mb-5  bg-gray-300 relative'></div>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className='flex flex-col items-end w-full'>
                    <h1 className="text-base text-white lg:text-lg font-light">

                        <TextAnimate animation="blurIn" as="h1">    ✦  Contact Us</TextAnimate>
                    </h1>
                    <h2 className="text-6xl text-white max-w-3xl text-right lg:text-8xl xl:text-9xl font-medium tracking-tight mb-12 lg:mb-16">
                        <TextAnimate animation="blurIn" as="h2">Impressed ?
                            Reach Out</TextAnimate>
                    </h2>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-light text-gray-200 mb-3">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setHoveredField('name')}
                                        onBlur={() => setHoveredField(null)}
                                        className={`w-full bg-transparent border-b-2 px-2 ${hoveredField === 'name' ? 'border-purple-100' : 'border-gray-800'} py-3 px-0 text-white placeholder-gray-400 focus:outline-none transition-colors duration-300`}
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-light text-gray-200 mb-3">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setHoveredField('email')}
                                        onBlur={() => setHoveredField(null)}
                                        className={`w-full bg-transparent border-b-2 px-2 ${hoveredField === 'email' ? 'border-purple-500' : 'border-gray-800'} py-3 px-0 text-white placeholder-gray-400 focus:outline-none transition-colors duration-300`}
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-light text-gray-200 mb-3">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    onFocus={() => setHoveredField('company')}
                                    onBlur={() => setHoveredField(null)}
                                    className={`w-full bg-transparent border-b-2 px-2 ${hoveredField === 'company' ? 'border-purple-500' : 'border-gray-800'} py-3 px-0 text-white placeholder-gray-400 focus:outline-none transition-colors duration-300`}
                                    placeholder="Your company name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-light text-gray-200 mb-3">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setHoveredField('message')}
                                    onBlur={() => setHoveredField(null)}
                                    rows={5}
                                    className={`w-full bg-transparent border-b-2 px-2 ${hoveredField === 'message' ? 'border-purple-500' : 'border-gray-800'} py-3 px-0 text-white placeholder-gray-400 focus:outline-none resize-none transition-colors duration-300`}
                                    placeholder="Tell us about your project"
                                />
                            </div>

                            <div className="pt-4">
                                <AnimatedButton
                                    onClick={handleSubmit}
                                    variant="secondary"
                                >
                                    <span>Send Message</span>
                                    <svg
                                        className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </AnimatedButton>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-5">
                        <div className="space-y-8">
                            {contactInfo.map((info) => (
                                <div
                                    key={info.id}
                                    className="group border-b border-gray-800 pb-8 transition-all duration-300 hover:border-purple-500/50"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-sm font-light text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                                            {info.id}
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-light text-gray-300 mb-2">
                                                {info.label}
                                            </h3>
                                            <p className="text-xl lg:text-2xl font-medium text-gray-100 group-hover:text-white transition-colors duration-300">
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="mt-12">
                            <h3 className="text-sm font-light text-gray-400 mb-6">Follow Us</h3>
                            <div className="flex gap-4">
                                {socialIcons.map(({ Icon, href }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 group"
                                    >
                                        <Icon className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactSection;