/* eslint-disable @next/next/no-img-element */
 
"use client"
import React, { useState } from 'react';
import { TextAnimate } from './ui/text-animate';
import { Twitter, Mail, Linkedin } from 'lucide-react';

const MeetCEOSection: React.FC = () => {
    const [isImageHovered, setIsImageHovered] = useState(false);
    const socialIcons = [
        { Icon: Twitter, href: "https://x.com/power_wealth11?s=21 " },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/olumide-m-ogunwo-funkash-7381a7241" },
        { Icon: Mail, href: "mailto:oogunwo@funkash.com" },

    ];
    const stats = [
        { id: '01', number: '17+', label: 'Years Experience' },
        { id: '02', number: '10+', label: 'Companies Built' },
        { id: '03', number: '$1+', label: 'Value Created' },
        { id: '04', number: '20+', label: 'Countries' }
    ];

    // const achievements = [
    //     {
    //         id: '01',
    //         title: 'Forbes 30 Under 30',
    //         description: 'Recognized for innovative approach to emerging market technology solutions.'
    //     },
    //     {
    //         id: '02',
    //         title: 'TechCrunch Founder',
    //         description: 'Featured for building scalable infrastructure across three continents.'
    //     },
    //     {
    //         id: '03',
    //         title: 'YC Alumni',
    //         description: 'Y Combinator graduate with focus on AI-powered platforms for developing markets.'
    //     }
    // ];

    return (
        <section className=" text-white py-16 lg:py-24 px-6 lg:px-12" id="meet-ceo">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 lg:mb-24">
                    <h1 className="text-base text-white lg:text-lg font-light">
                        <TextAnimate animation="blurIn" as="h1"> ✦ Leadership</TextAnimate>
                    </h1>
                    <h2 className="text-6xl text-white max-w-6xl  lg:text-8xl xl:text-9xl font-medium tracking-tight mb-12 lg:mb-16">
                        <TextAnimate animation="blurIn" as="h2">Meet the Visionary.</TextAnimate>
                    </h2>
                </div>

                {/* CEO Profile Grid */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
                    {/* Image Column */}
                    <div className="w-full lg:w-[60%]">
                        <div
                            className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-gray-800 group"
                            onMouseEnter={() => setIsImageHovered(true)}
                            onMouseLeave={() => setIsImageHovered(false)}
                        >
                            {/* Placeholder for CEO image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-end justify-center p-8">
                                    

                                        <img
                                            src="/olumide.jpg"
                                            alt="Olumide M. Ogunwo (Funkash)"
                                            className=" object-cover "
                                        />

                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent transition-opacity duration-500 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`} />

                            {/* Decorative corner */}
                            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-purple-500/50" />
                        </div>

                        {/* Social Links */}
                        <div  className="flex gap-4 mt-8 items-center justify-center">
                            {socialIcons.map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="flex-1 py-3 border border-gray-800 rounded-full text-center text-sm text-gray-400 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/5 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bio Column */}
                    <div className="">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl lg:text-6xl font-medium tracking-tight mb-4">
                                    Olumide M. Ogunwo (Funkash)
                                </h2>
                                <p className="text-xl lg:text-2xl text-purple-400 font-light mb-8">
                                    Founder & Chief Executive Officer
                                </p>
                                <div className="h-0.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-8" />
                            </div>

                            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                                <p>
                                    Global technology entrepreneur with 17+ years building in Africa, Asia, and Europe. Founder of Funkash Holdings. Builder of technical teams, ecosystems, and frontier innovation platforms.
                                </p>

                            </div>


                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="border-t border-gray-100 pt-16 mb-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.id}
                                className="group text-center lg:text-left"
                            >
                                <div className="mb-3">
                                    <span className="text-sm font-light text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                                        {stat.id}
                                    </span>
                                </div>
                                <div className="text-4xl lg:text-5xl xl:text-6xl font-medium mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    {stat.label}
                                </div>
                                <div className={`h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 transition-all duration-500 ${index === 0 ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MeetCEOSection;