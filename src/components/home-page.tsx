/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef, useState } from "react"
import { motion, } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
// import GSAPTextAnimation from "./gsap-text-animation"
import AnimatedShapes from "./animated-shapes"
import FlickerText from "./fllcker_text"
import AnimatedButton from "./animated-button"
import { ArrowRight, } from "lucide-react"
// import AboutSection from "./about-sectiont"
import FunkashFounderSection from "./funkash-founder-section"
// import StackingProjects from "./stacking-projects"
import ProjectsSections from "./project-section"

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
  const horizontalSectionRef = useRef<HTMLDivElement>(null)
  const horizontalContainerRef = useRef<HTMLDivElement>(null)
  const strategyTitleRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [frontCardIndex, setFrontCardIndex] = useState(0)
  const [visibleShapeIndex, setVisibleShapeIndex] = useState(-1)

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

      // Desktop project showcases entrance
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

    // Mobile projects stacking animation - FIXED
    if (isMobile && mobileProjectsRef.current) {
      const mobileCards = mobileProjectsRef.current.querySelectorAll(".mobile-project-card")

      // Set initial positions for X formation
      gsap.set(mobileCards, {
        rotation: (i) => i === 0 ? -8 : 8,
        y: (i) => i === frontCardIndex ? 0 : 10,
        x: (i) => i === 0 ? -5 : 5,
        scale: (i) => i === frontCardIndex ? 1 : 0.95,
        zIndex: (i) => i === frontCardIndex ? 10 : 5
      })

      // Animate entrance
      ScrollTrigger.create({
        trigger: mobileProjectsRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(mobileCards,
            {
              opacity: 0,
              y: 50,
              rotation: (i) => i === 0 ? -15 : 15
            },
            {
              opacity: 1,
              y: (i) => i === frontCardIndex ? 0 : 10,
              rotation: (i) => i === 0 ? -8 : 8,
              duration: 0.8,
              ease: "back.out(1.2)",
              stagger: 0.2
            }
          )
        }
      })
    }

    // Strategy title animation - FIXED
    if (strategyTitleRef.current) {
      gsap.fromTo(strategyTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: strategyTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Horizontal scrolling for mobile strategy boxes - FIXED
    if (isMobile && horizontalSectionRef.current && horizontalContainerRef.current) {
      const panels = horizontalContainerRef.current.querySelectorAll(".strategy-panel")

      if (panels.length > 0) {
        // Calculate proper scroll distance to show last card fully
        const containerWidth = horizontalContainerRef.current.scrollWidth
        const windowWidth = window.innerWidth
        const scrollDistance = containerWidth - windowWidth + 100 // Added padding

        gsap.to(panels, {
          x: () => -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalSectionRef.current,
            pin: true,
            start: "top center",
            scrub: 1,
            end: () => "+=" + scrollDistance,
            onUpdate: (self) => {
              // Determine which panel is most visible and trigger shape animation
              const progress = self.progress
              const panelIndex = Math.min(Math.floor(progress * panels.length), panels.length - 1)
              if (panelIndex !== visibleShapeIndex) {
                setVisibleShapeIndex(panelIndex)
              }
            }
          }
        })

        // Trigger shape animations when cards come into view
        panels.forEach((panel, index) => {
          const shape = panel.querySelector('.animated-shape')
          if (shape && index === visibleShapeIndex) {
            // Trigger shape animation
            shape.classList.add('active')
          }
        })
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
  }, [isMobile, frontCardIndex, visibleShapeIndex])

  // Handle card tap to flip - ENHANCED
  const handleCardTap = (cardIndex: number) => {
    if (!isMobile) return

    const newFrontIndex = cardIndex === frontCardIndex ? (frontCardIndex === 0 ? 1 : 0) : cardIndex
    setFrontCardIndex(newFrontIndex)

    const mobileCards = mobileProjectsRef.current?.querySelectorAll(".mobile-project-card")
    if (mobileCards) {
      mobileCards.forEach((card, index) => {
        gsap.to(card, {
          y: index === newFrontIndex ? 0 : 10,
          scale: index === newFrontIndex ? 1 : 0.95,
          zIndex: index === newFrontIndex ? 10 : 5,
          duration: 0.4,
          ease: "power2.out"
        })
      })
    }
  }

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

  const mobileProjects = [
    {
      name: "Sharp Sharp",
      gradient: "from-gray-800 to-gray-900",
      image: "/projects/sharp-mobile.png"
    },
    {
      name: "Afri Pay",
      gradient: "from-purple-400 to-purple-600",
      image: "/projects/afri-mobile.png"
    }
  ]

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

              {/* Mobile project showcase - stacked cards - ENHANCED */}
              <div ref={mobileProjectsRef} className="md:hidden flex justify-center mb-8">
                <div className="relative w-[240px] h-[300px]">
                  {mobileProjects.map((project, index) => (
                    <div
                      key={project.name}
                      className={`mobile-project-card absolute inset-0 rounded-xl overflow-hidden shadow-xl bg-gradient-to-br ${project.gradient} p-4 cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                      style={{
                        transform: `
                          translateY(${index === frontCardIndex ? 0 : 10}px) 
                          translateX(${index === 0 ? -5 : 5}px)
                          rotate(${index === 0 ? -8 : 8}deg) 
                          scale(${index === frontCardIndex ? 1 : 0.95})
                        `,
                        zIndex: index === frontCardIndex ? 10 : 5
                      }}
                      onClick={() => handleCardTap(index)}
                      onTouchStart={() => handleCardTap(index)}
                    >
                      <div className="relative h-full flex flex-col">
                        <div className="text-white text-lg font-bold mb-2">{project.name}</div>
                        <div className="flex-1 flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={`${project.name} showcase`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        {project.name === "Sharp Sharp" && (
                          <div className="absolute bottom-4 right-4 w-12 h-12 p-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">S</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
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

        {/* Build, Execute, Strategy Section - FIXED */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* FIXED: Title now shows on mobile */}
            <div className="text-center mb-16">
              <div
                ref={strategyTitleRef}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222946] mb-4"
              >
                Our Approach
              </div>
            </div>

            {/* Desktop grid */}
            <div className="strategy-section hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {boxes.map((box,) => (
                <div
                  key={box.title}
                  className={`rounded-2xl p-8 ${box.color} text-white relative overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute top-6 right-6">
                    <AnimatedShapes type={box.type} />
                    {/* <BuildingBlocks isActive={true} /> */}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">{box.title}</h3>
                    <p className="text-white/90 leading-relaxed">{box.description}</p>
                  </div>

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Mobile horizontal scroll - FIXED */}
            <div
              ref={horizontalSectionRef}
              className="md:hidden overflow-hidden"
            >
              <div
                ref={horizontalContainerRef}
                className="flex gap-6 w-max pr-20" // Added right padding to ensure last card is fully visible
              >
                {boxes.map((box) => (
                  <div
                    key={box.title}
                    className={`strategy-panel flex-shrink-0 w-[280px] h-[200px] rounded-2xl p-6 ${box.color} text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-4 right-4 animated-shape">
                      <AnimatedShapes
                        type={box.type}
                        // isActive={visibleShapeIndex === index} // FIXED: Shape animates when card is visible
                      />
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      <h3 className="text-xl font-bold mb-3">{box.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed flex-1">{box.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stacking Projects Section */}
        {/* <StackingProjects /> */}
        <ProjectsSections />

        {/* Funkash Founder Section */}
        <FunkashFounderSection />
      </main>
    </div>
  )
}