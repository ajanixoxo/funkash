/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedButton from "./animated-button"
import { ExternalLink, Calendar, MapPin, Users, TrendingUp } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function StackingProjects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const animationRef = useRef<gsap.core.Timeline | null>(null)

  const projects = [
    {
      id: 1,
      name: "Limpiar",
      category: "Property Management",
      image: "/placeholder.svg?height=400&width=600",
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
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 2,
      name: "Afriprize",
      category: "Gamified Fundraising",
      image: "/placeholder.svg?height=400&width=600",
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
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      name: "AfriPay",
      category: "Fintech Infrastructure",
      image: "/placeholder.svg?height=400&width=600",
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
      color: "from-purple-500 to-pink-600",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return

    const cards = cardsRef.current.filter(Boolean)
    const section = sectionRef.current

    // Create timeline
    const tl = gsap.timeline({ paused: true })
    animationRef.current = tl

    const cardHeight = 500
    const stackOffset = 20

    // Initial setup - stack cards with slight offset
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: index * stackOffset,
        scale: 1 - (index * 0.05),
        zIndex: cards.length - index,
        transformOrigin: "center top",
      })
    })

    // Create stacking animation
    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        // Each card (except the last) moves up and fades out
        tl.to(card, {
          y: -cardHeight,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "power2.inOut",
        }, index * 0.5)
      }
    })

    // Create ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top -20%",
      end: `+=${cardHeight * cards.length}`,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      animation: tl,
      onUpdate: (self) => {
        // Update progress based on scroll
        tl.progress(self.progress)
      },
      onRefresh: () => {
        // Reset on refresh
        cards.forEach((card, index) => {
          gsap.set(card, {
            y: index * stackOffset,
            scale: 1 - (index * 0.05),
            opacity: 1,
            zIndex: cards.length - index,
          })
        })
      }
    })

    return () => {
      scrollTrigger.kill()
      tl.kill()
    }
  }, [projects.length])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-50 ">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222946] mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;ve transformed ideas into successful products that impact millions of users
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative flex justify-center items-center" style={{ height: "600px" }}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="absolute w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                style={{
                  minHeight: "500px",
                  transformOrigin: "center top",
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-90`} />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
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
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-white/90 text-lg">{project.category}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Description & Meta */}
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Metrics */}
                    <div className="space-y-6">
                      <h4 className="font-semibold text-gray-900 text-lg">Key Metrics</h4>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-blue-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{project.metrics.users}</div>
                            <div className="text-sm text-gray-600">User Base</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{project.metrics.growth}</div>
                            <div className="text-sm text-gray-600">Performance</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <ExternalLink className="w-5 h-5 text-purple-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{project.metrics.revenue}</div>
                            <div className="text-sm text-gray-600">Impact</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <AnimatedButton variant="primary" size="medium">
                          View Case Study
                          <ExternalLink className="w-4 h-4" />
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-gray-500">
              <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent mb-2"></div>
              <span className="text-sm">Scroll to explore</span>
            </div>
          </div>
        </div>

        {/* View More Button - positioned after the stacking section */}
        <div className="text-center mt-32">
          <AnimatedButton variant="secondary" size="large">
            View More Projects
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}