/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef } from "react"
import { motion, } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GSAPTextAnimation from "./gsap-text-animation"
import AnimatedShapes from "./animated-shapes"
import FlickerText from "./fllcker_text"
import AnimatedButton from "./animated-button"
import { ArrowRight, CheckCircle, } from "lucide-react"
import AboutSection from "./about-sectiont"
import FunkashFounderSection from "./funkash-founder-section"
import StackingProjects from "./stacking-projects"

interface HomePageProps {
  startTextAnimations?: boolean
}
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage({ startTextAnimations = true }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      const tl = gsap.timeline()

      // Project showcases entrance
      tl.from(".project-left", {
        x: -200,
        rotation: -10,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      }).from(
        ".project-right",
        {
          x: 200,
          rotation: 10,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      )
    }

    // Projects stacking animation
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll(".project-card")

      gsap.set(projectCards, { y: 100, opacity: 0, rotationX: 45 })

      ScrollTrigger.create({
        trigger: projectsRef.current,
        start: "top 60%",
        onEnter: () => {
          gsap.to(projectCards, {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: {
              amount: 1.2,
              from: "start",
            },
          })
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const boxes = [
    {
      title: "Build",
      description: "We build the foundation of your vision with cutting-edge technology and innovative solutions.",
      color: "bg-[#222946]",
      type: "build" as const,
    },
    {
      title: "Execution",
      description: "Skip the painful team hunt and onboarding. You build the vision, we deploy the code.",
      color: "bg-[#2A3256]",
      type: "execute" as const,
    },
    {
      title: "Strategic Advantage",
      description: "Tap into internal frameworks, product playbooks, and market validation tools.",
      color: "bg-[#343B64]",
      type: "strategy" as const,
    },
  ]

  const founderQualities = [
    "Clear product-thinking and a bias for execution",
    "A deep problem with technical blind spots to solve",
    "Willingness to collaborate, not just outsource",
    "High agency and storytelling ability",
    "Long-term mindset with real market exposure",
  ]

  const projects = [
    {
      name: "Limpiar",
      category: "PROPERTY MANAGEMENT / ON-DEMAND SERVICES",
      status: "Active",
      location: "United States • 2024",
      type: "Co-built & Co-owned",
      role: "CTO / Full Technical Infrastructure Partner",
      metrics: [
        { label: "Cleaner Partners", value: "85+", color: "text-green-500" },
        { label: "Response Rate", value: "92%", color: "text-yellow-500" },
      ],
      color: "from-green-400 to-green-600",
    },
    {
      name: "Afriprize",
      category: "NONPROFIT / GAMIFIED FUNDRAISING",
      status: "Live",
      location: "Nigeria • 2023",
      type: "Built & Owned",
      role: "Full Product Design, Development & Strategy",
      metrics: [
        { label: "Active Users", value: "21000+", color: "text-blue-500" },
        { label: "Charitable Funding", value: "20M", color: "text-green-500" },
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "AfriPay",
      category: "FINTECH / PAYMENTS INFRASTRUCTURE",
      status: "MVP",
      location: "Pan-African • 2023",
      type: "Built & Owned",
      role: "Technical Build, Product Strategy",
      metrics: [
        { label: "Transaction Volume", value: "₦2.5B+", color: "text-purple-500" },
        { label: "Success Rate", value: "99.8%", color: "text-green-500" },
      ],
      color: "from-purple-400 to-purple-600",
    },
  ]





  return (
    <div className="bg-white overflow-hidden">


      <main className="container mx-auto px-4 pt-24 pb-32 relative">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-gray-50 opacity-50 -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gray-50 opacity-50 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gray-100 -z-10 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gray-100 -z-10 -rotate-45"></div>

        {/* Hero section with images on left and right */}
        <section className="relative min-h-[80vh] flex items-center">
          {/* Left project showcase */}
          <motion.div
            className="absolute left-0 top-20 w-[280px] h-[350px] z-10"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={startTextAnimations ? { opacity: 1, x: 0, rotate: -5 } : { opacity: 0, x: -100, rotate: -5 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-400 to-purple-600 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/90 to-purple-600/90"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-white text-3xl font-bold mb-4">Afri pay</div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/projects/afri-mobile.png"
                    alt="Project showcase"
                    className=" object-cover"
                  />
                </div>
                <div className="text-white/80 text-sm"></div>
              </div>
            </div>
          </motion.div>

          {/* Right project showcase */}
          <motion.div
            className="absolute right-0 top-32 w-[300px] h-[430px] z-10"
            initial={{ opacity: 0, x: 100, rotate: 3 }}
            animate={startTextAnimations ? { opacity: 1, x: 0, rotate: 3 } : { opacity: 0, x: 100, rotate: 3 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >

            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 to-gray-900/95"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-white text-3xl font-bold mb-4">Sharp Sharp</div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/projects/sharp-mobile.png"
                    alt="Project showcase"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 p-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center content */}
          <div className="w-full text-center relative z-20">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-2 mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <FlickerText text="Build What You Were" delay={500} startAnimation={startTextAnimations} />
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <FlickerText text="Born to Lead" color="#222946" delay={1500} startAnimation={startTextAnimations} />
                </h1>
              </div>

              <motion.p
                className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0 }}
                animate={startTextAnimations ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
              >
                Most startup founders are forced to guess, grind, and gamble. At Funkash, we engineer both product and
                process — giving you the technical backbone, team, and tools to build faster and smarter.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={startTextAnimations ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 3.2, duration: 0.5 }}
              >
                <AnimatedButton variant="primary">
                  Partner With Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </AnimatedButton>
                <AnimatedButton variant="secondary">View Our Projects</AnimatedButton>
              </motion.div>
            </div>
          </div>


        </section>

        {/* Build, Execute, Strategy Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GSAPTextAnimation
                trigger=".strategy-section"
                className="text-4xl md:text-5xl font-bold text-[#222946] mb-4"
              >
                Our Approach
              </GSAPTextAnimation>
            </div>

            <div className="strategy-section grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {boxes.map((box) => (
                <div
                  key={box.title}
                  className={`rounded-2xl p-8 ${box.color} text-white relative overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute top-6 right-6">
                    <AnimatedShapes type={box.type} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">{box.title}</h3>
                    <p className="text-white/90 leading-relaxed">{box.description}</p>
                  </div>

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stacking Projects Section */}
        <StackingProjects />

        {/* Funkash Founder Section */}
        <FunkashFounderSection />

        
        {/* <AboutSection /> */}
        {/* <WhatWeDoSection />
        <VisionSection /> */}

      </main>
    </div>
  )
}
