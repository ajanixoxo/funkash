/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef, useState } from "react"
import { motion, } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
// import GSAPTextAnimation from "./gsap-text-animation"
import FlickerText from "./fllcker_text"
import AnimatedButton from "./animated-button"
import { ArrowRight, } from "lucide-react"
import FunkashFounderSection from "./funkash-founder-section"
// import StackingProjects from "./stacking-projects"
import ProjectsSections from "./project-section"
import AboutSection from "./about-sectiont"
// Add new imports for new sections
import ServicesSection from "./services-section"
import ProcessSection from "./process-section"
import TestimonialsSection from "./testimonials-section"
import ContactSection from "./contact-section"

interface HomePageProps {
  startTextAnimations?: boolean
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export default function HomePage({ startTextAnimations = true }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const mobileProjectsRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      const tl = gsap.timeline()
      if (!isMobile) {
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
    }

    // Regular projects stacking animation
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
  }, [isMobile])

  return (
    <div className="bg-white overflow-hidden">
      <main className="container mx-auto px-4 pt-24 pb-32 relative">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-gray-50 opacity-50 -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gray-50 opacity-50 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gray-100 -z-10 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gray-100 -z-10 -rotate-45"></div>

        {/* Hero section */}
        <section ref={heroRef} className="relative min-h-[80vh] flex items-center">
          {/* Desktop project showcases */}
          <motion.div
            className="project-left absolute hidden md:block left-0 top-20 w-[280px] h-[350px] z-10"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={startTextAnimations ? { opacity: 1, x: 0, rotate: -5 } : { opacity: 0, x: -100, rotate: -5 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-400 to-purple-600 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/90 to-purple-600/90"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-white text-3xl font-bold mb-4">Afri Pay</div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/projects/afri-mobile.png"
                    alt="Afri Pay showcase"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project-right absolute hidden md:block right-0 top-32 w-[300px] h-[430px] z-10"
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
                    alt="Sharp Sharp showcase"
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
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                  <FlickerText text="Build What You Were" delay={500} startAnimation={startTextAnimations} />
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                  <FlickerText text="Born to Lead" color="#222946" delay={1500} startAnimation={startTextAnimations} />
                </h1>
              </div>

              <motion.p
                className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-8 md:mb-10 px-4"
                initial={{ opacity: 0 }}
                animate={startTextAnimations ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
              >
                Most startup founders are forced to guess, grind, and gamble. At Funkash, we engineer both product and
                process — giving you the technical backbone, team, and tools to build faster and smarter.
              </motion.p>

              {/* Mobile project showcase - diagonal X pattern cards */}
              <div ref={mobileProjectsRef} className="md:hidden flex justify-center mb-8">
                <div className="relative w-[280px] h-[200px]">
                  {/* Left card - Afri Pay (backslash \) */}
                  <motion.div
                    className="mobile-project-left absolute left-0 top-0 w-[130px] h-[180px] z-10"
                    initial={{ opacity: 0, x: -30, rotate: -25 }}
                    animate={startTextAnimations ? { opacity: 1, x: 0, rotate: -25 } : { opacity: 0, x: -30, rotate: -25 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="relative h-full rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-400 to-purple-600 p-3">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/90 to-purple-600/90"></div>
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="text-white text-sm font-bold mb-2">Afri Pay</div>
                        <div className="flex-1 flex items-center justify-center">
                          <img
                            src="/projects/afri-mobile.png"
                            alt="Afri Pay showcase"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right card - Sharp Sharp (forward slash /) */}
                  <motion.div
                    className="mobile-project-right absolute right-0 top-0 w-[130px] h-[180px] z-10"
                    initial={{ opacity: 0, x: 30, rotate: 25 }}
                    animate={startTextAnimations ? { opacity: 1, x: 0, rotate: 25 } : { opacity: 0, x: 30, rotate: 25 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="relative h-full rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 p-3">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 to-gray-900/95"></div>
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="text-white text-sm font-bold mb-2">Sharp Sharp</div>
                        <div className="flex-1 flex items-center justify-center">
                          <img
                            src="/projects/sharp-mobile.png"
                            alt="Sharp Sharp showcase" 
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="absolute bottom-2 right-2 w-8 h-8 p-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">S</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center px-4"
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

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Projects Section */}
        <ProjectsSections />    

        {/* Funkash Founder Section */}
        <FunkashFounderSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  )
}