/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedButton from "./animated-button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function StackingProjects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [isMobile, setIsMobile] = useState(false)

  const projects = [
    {
      id: 1,
      name: "Limpiar",
      category: "Property Management",
      image: "/projects/limpiar.png",
      description: "Revolutionary cleaning marketplace connecting property managers with verified professionals",
      location: "United States",
      year: "2024",
      status: "Active",
      metrics: {
        users: "85+ Partners",
        growth: "92% Response Rate",
        revenue: "$2.5M+ GMV",
      },
      tags: ["React Native", "Node.js", "PostgreSQL", "Stripe"],
      textColor: "text-white",
    },
    {
      id: 2,
      name: "Afriprize",
      category: "Gamified Fundraising",
      image: "/projects/afri-prize.png",
      description: "Innovative platform merging gaming with charitable giving across African communities",
      location: "Nigeria",
      year: "2023",
      status: "Live",
      metrics: {
        users: "21,000+ Active Users",
        growth: "68% Conversion Rate",
        revenue: "₦20M+ Raised",
      },
      tags: ["Vue.js", "Python", "MongoDB", "PayStack"],
      textColor: "text-white",
    },
    {
      id: 3,
      name: "AfriPay",
      category: "Fintech Infrastructure",
      image: "/projects/afri-pay.png",
      description: "Cross-border payment solution enabling seamless financial transactions across Africa",
      location: "Pan-African",
      year: "2023",
      status: "MVP",
      metrics: {
        users: "Multi-currency Support",
        growth: "99.8% Success Rate",
        revenue: "₦2.5B+ Volume",
      },
      tags: ["React", "Go", "Redis", "Blockchain"],
      textColor: "text-white",
    },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = cardsRef.current.filter(Boolean)
    if (cards.length === 0) return

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    const cardHeight = isMobile ? 450 : 550
    const stackOffset = isMobile ? 15 : 20

    // Initialize card positions
    const initCards = () => {
      cards.forEach((card, index) => {
        gsap.set(card, {
          y: index * stackOffset,
          scale: 1 - index * (isMobile ? 0.03 : 0.05),
          zIndex: cards.length - index,
          transformOrigin: "center top",
          opacity: 1,
        })
      })
    }

    initCards()

    // Create animation timeline
    const tl = gsap.timeline({ paused: true })

    // Animate each card except the last one
    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        tl.to(
          card,
          {
            y: -cardHeight * 1.2,
            opacity: 0,
            scale: 0.7,
            duration: 1,
            ease: "power2.inOut",
          },
          index * 0.3,
        )
      }
    })

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: isMobile ? "top 10%" : "top -10%",
      end: `+=${cardHeight * cards.length * (isMobile ? 1.2 : 1.5)}`,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      animation: tl,
      invalidateOnRefresh: true,
      onRefresh: initCards,
      refreshPriority: -1,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isMobile])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222946] mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;ve transformed ideas into successful products that impact millions of users
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative flex justify-center items-start" style={{ height: isMobile ? "500px" : "650px" }}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className={`absolute w-full ${isMobile ? "max-w-sm" : "max-w-3xl"} bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100`}
                style={{
                  minHeight: isMobile ? "450px" : "550px",
                  transformOrigin: "center top",
                }}
              >
                {/* Project Image */}
                <div className={`relative ${isMobile ? "h-40" : "h-64 md:h-80"} overflow-hidden`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                        project.status === "Active"
                          ? "bg-green-500"
                          : project.status === "Live"
                            ? "bg-blue-500"
                            : "bg-purple-500"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3
                      className={`${isMobile ? "text-xl" : "text-3xl md:text-4xl"} font-bold ${project.textColor} mb-1`}
                    >
                      {project.name}
                    </h3>
                    <p className={`${project.textColor}/90 ${isMobile ? "text-sm" : "text-lg"}`}>{project.category}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${isMobile ? "p-4" : "p-8"}`}>
                  <div className={`grid grid-cols-1 ${isMobile ? "gap-4" : "lg:grid-cols-2 gap-8"}`}>
                    {/* Description & Meta */}
                    <div className={`space-y-${isMobile ? "3" : "4"}`}>
                      <p className={`text-gray-700 ${isMobile ? "text-sm" : "text-lg"} leading-relaxed`}>
                        {isMobile ? project.description.substring(0, 120) + "..." : project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <span>📍</span>
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>📅</span>
                          <span>{project.year}</span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className={`font-semibold text-gray-900 mb-2 ${isMobile ? "text-sm" : ""}`}>Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, isMobile ? 3 : 4).map((tag) => (
                            <span
                              key={tag}
                              className={`px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium ${
                                isMobile ? "text-xs" : "text-sm"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                          {isMobile && project.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Mobile CTA */}
                      {isMobile && (
                        <div className="pt-2">
                          <AnimatedButton variant="primary" size="small">
                            View Case Study
                          </AnimatedButton>
                        </div>
                      )}
                    </div>

                    {/* Desktop Metrics */}
                    {!isMobile && (
                      <div className="space-y-6">
                        <h4 className="font-semibold text-gray-900 text-lg">Key Metrics</h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="text-blue-500 text-xl">👥</span>
                            <div>
                              <div className="font-semibold text-gray-900">{project.metrics.users}</div>
                              <div className="text-sm text-gray-600">User Base</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-green-500 text-xl">📈</span>
                            <div>
                              <div className="font-semibold text-gray-900">{project.metrics.growth}</div>
                              <div className="text-sm text-gray-600">Performance</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-purple-500 text-xl">💰</span>
                            <div>
                              <div className="font-semibold text-gray-900">{project.metrics.revenue}</div>
                              <div className="text-sm text-gray-600">Impact</div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4">
                          <AnimatedButton variant="primary" size="medium">
                            View Case Study
                          </AnimatedButton>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <AnimatedButton variant="secondary" size={isMobile ? "medium" : "large"}>
              View More Projects
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
