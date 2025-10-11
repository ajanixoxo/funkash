/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServicesSection from '@/components/service-section';
import { TextAnimate } from '@/components/ui/text-animate';
// TypeScript interface for service data

const AboutUsPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-white dark:bg-gray-950">
                {/* HERO SECTION */}
                <section className="relative bg-gradient-to-br from-purple-950 via-gray-900 to-blue-950 text-white py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
                    </div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-base lg:text-lg font-light text-purple-200">
                                About Us
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-tight">
                            About Us
                        </h1>

                        <p className="text-xl lg:text-2xl xl:text-3xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto">
                            Learn about our mission, vision, and how we're transforming emerging markets through technology.
                        </p>

                        {/* Decorative Elements */}
                        <div className="mt-16 flex justify-center gap-8">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
                        </div>
                    </div>
                </section>

                {/* MISSION SECTION */}
                <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white dark:bg-gray-950">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">

                                    <span className="text-base lg:text-lg font-light text-purple-600 dark:text-purple-400">
                                        <TextAnimate animation="blurIn" as="p">✦  Our Goal</TextAnimate>
                                    </span>
                                </div>
                                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-8 leading-tight">
                                    <TextAnimate animation="blurIn" as="h1">Our Mission</TextAnimate>
                                </h2>
                                <div className="space-y-6 text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                    <p>
                                        At <span className="font-semibold text-purple-600 dark:text-purple-400">Funkash Technology</span>, we partner with startups to build and scale through deep tech infrastructure, enabling them to create impactful solutions across Africa, Asia, and beyond.
                                    </p>
                                    <p>
                                        We believe that technology can be a powerful catalyst for growth in emerging markets, and our mission is to make that technology accessible, reliable, and innovative.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 p-1 overflow-hidden">
                                    <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-900 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="mb-4 flex justify-center items-center p-2">
                                                <img
                                                    src="/about.avif"
                                                    alt="Olumide M. Ogunwo (Funkash)"
                                                    className="object-cover rounded-2xl"
                                                />
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-lg">Startups Partnered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full filter blur-2xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT WE DO SECTION */}
                <div className='bg-[#222946]'>
                    <ServicesSection />
                </div>


                {/* VISION SECTION */}
                <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full" style={{
                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-12 lg:mb-16">
                            <div className="flex items-center justify-center gap-3 mb-6">

                                <span className="text-base lg:text-lg font-light text-purple-200">
                                    <TextAnimate animation="blurIn" as="p">✦ Our Vision</TextAnimate>
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
                                <TextAnimate animation="blurIn" as="p">Our Vision</TextAnimate>
                            </h2>
                        </div>

                        <div className="space-y-8 text-lg lg:text-xl text-gray-200 leading-relaxed max-w-5xl mx-auto">
                            <p className="text-center text-2xl lg:text-3xl font-light text-white">
                                <TextAnimate animation="blurIn" as="p"> We envision a future where emerging markets lead global innovation, powered by accessible technology and local talent.</TextAnimate>
                            </p>

                            <div className="grid lg:grid-cols-2 gap-8 mt-12">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-colors">
                                    <p>
                                        At Funkash Technology, we believe that the next wave of global innovation will come from emerging markets. Our vision is to be at the forefront of this transformation, building the technical infrastructure that will power the next generation of startups and enterprises in Africa, Asia, and beyond.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-colors">
                                    <p>
                                        We're committed to building technology that is accessible, reliable, and innovative. We believe that by democratizing access to cutting-edge technology, we can help entrepreneurs in emerging markets compete on a global stage.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-400/20 mt-12">
                                <p className="text-xl lg:text-2xl text-center font-light">
                                    Our ultimate goal is to create a world where location is no longer a barrier to technological innovation, where talented individuals from any country can build world-class products and services.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-16">
                            <button className="group px-10 py-5 bg-white text-gray-900 font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                <span>Join Our Mission</span>
                                <svg className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>


            </div>
            <Footer />
        </div>

    );
};

export default AboutUsPage;