"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextAnimate } from './ui/text-animate';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: i * 0.2, // stagger effect for paragraphs
            ease: "easeOut",
        },
    }),
};

const AboutSection = () => {
    const paragraphs = [
        `At Funkash Technology, we partner with startups to build and scale through deep tech infrastructure, enabling them to create impactful solutions across Africa, Asia, and beyond. We believe technology can be a catalyst for growth in emerging markets — our mission is to make that technology accessible, reliable, and innovative.`,

        `What Funkash does: We build robust, scalable technical infrastructure, develop AI-powered solutions, and empower visionary founders to bring their ideas to life. Our innovation platforms and global expansion initiatives drive growth and solve critical challenges in emerging markets.`,

        `We also identify, train, and deploy exceptional technical talent across our network — ensuring our partners have the expertise to scale fast and sustainably.`,

        `Empowering startups through technology, talent, and innovation.`,
    ];

    return (
        <section className="bg-[#222946] text-white py-20 px-6 md:px-16 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left Column */}
                <div>
                    <TextAnimate animation="blurIn" as="p"
                        className="text-base text-white mb-2">✦  About us</TextAnimate>
                    <h2
                       className="text-6xl lg:text-8xl xl:text-9xl font-medium tracking-tight mb-12 lg:mb-16">
                        <TextAnimate animation="blurIn" as="p">
                            We are  Funkash Technology.
                        </TextAnimate>
                        <br />

                    </h2>
                </div>

                {/* Right Column with Animated Paragraphs */}
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    {paragraphs.map((text, i) => (
                        <motion.p
                            key={i}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className={
                                i === 1
                                    ? "text-gray-300 text-lg leading-relaxed"
                                    : i === 3
                                        ? "text-gray-400 text-base italic"
                                        : "text-gray-300 text-lg leading-relaxed"
                            }
                        >
                            {i === 1 ? (
                                <>
                                    <strong>What Funkash does:</strong>{" "}
                                    {text.replace("What Funkash does: ", "")}
                                </>
                            ) : (
                                text
                            )}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
