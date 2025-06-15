/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedButton from "./animated-button"
import { ExternalLink, Calendar, MapPin, Users, TrendingUp, ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProjectsSections() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const projects = [
    {
      id: 1,
      name: "Limpiar",
      category: "Property Management",
      image: "/projects/limpiar.png",
      description:
        "Revolutionary cleaning marketplace connecting property managers with verified professionals across the United States. Our platform streamlines the entire cleaning process from booking to payment.",
      location: "United States",
      year: "2024",
      status: "Active",
      metrics: {
        users: "85+ Partners",
        growth: "92% Response Rate",
        revenue: "$2.5M+ GMV",
      },
      tags: ["React Native", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      accentColor: "emerald",
    },
    {
      id: 2,
      name: "Afriprize",
      category: "Gamified Fundraising",
      image: "/projects/afri-price.png",
      description:
        "Innovative platform merging gaming with charitable giving across African communities. Users participate in engaging games while contributing to meaningful causes and community development.",
      location: "Nigeria",
      year: "2023",
      status: "Live",
      metrics: {
        users: "21,000+ Active Users",
        growth: "68% Conversion Rate",
        revenue: "₦20M+ Raised",
      },
      tags: ["Vue.js", "Python", "MongoDB", "PayStack", "Firebase"],
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      accentColor: "blue",
    },
    {
      id: 3,
      name: "AfriPay",
      category: "Fintech Infrastructure",
      image: "/projects/afri-pay.png",
      description:
        "Cross-border payment solution enabling seamless financial transactions across Africa. Built with cutting-edge blockchain technology to ensure security and reliability.",
      location: "Pan-African",
      year: "2023",
      status: "MVP",
      metrics: {
        users: "Multi-currency Support",
        growth: "99.8% Success Rate",
        revenue: "₦2.5B+ Volume",
      },
      tags: ["React", "Go", "Redis", "Blockchain", "Docker"],
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      accentColor: "purple",
    },
  ]

  const getAccentColors = (color: string) => {
    const colors = {
      emerald: {
        primary: "text-emerald-600",
        bg: "bg-emerald-500",
        border: "border-emerald-200",
        light: "bg-emerald-100",
      },
      blue: {
        primary: "text-blue-600",
        bg: "bg-blue-500",
        border: "border-blue-200",
        light: "bg-blue-100",
      },
      purple: {
        primary: "text-purple-600",
        bg: "bg-purple-500",
        border: "border-purple-200",
        light: "bg-purple-100",
      },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return

    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current
    const sections = scrollContainer.querySelectorAll(".project-section")

    if (sections.length === 0) return

    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    // On mobile, use vertical scrolling
    if (isMobile) {
      // Reset any horizontal transforms
      gsap.set(scrollContainer, {
        x: 0,
        width: "100%",
        display: "block",
      })

      sections.forEach((section) => {
        gsap.set(section, {
          width: "100%",
          minWidth: "auto",
          flexShrink: "initial",
        })
      })

      // Add simple fade-in animations for mobile
      sections.forEach((section) => {
        const image = section.querySelector(".project-image")
        const content = section.querySelector(".project-content")

        if (image && content) {
          gsap.fromTo(
            [image, content],
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }
      })

      return
    }

    // Desktop horizontal scrolling
    const getViewportWidth = () => window.innerWidth
    const sectionWidth = getViewportWidth()
    const totalWidth = sectionWidth * sections.length

    // Set the width of the scroll container
    gsap.set(scrollContainer, {
      width: totalWidth,
      display: "flex",
      x: 0, // Reset any previous transforms
    })

    // Set each section width to full viewport
    sections.forEach((section) => {
      gsap.set(section, {
        width: sectionWidth,
        minWidth: sectionWidth,
        flexShrink: 0,
      })
    })

    // Create horizontal scroll animation
    const horizontalScroll = gsap.to(scrollContainer, {
      x: () => -(totalWidth - sectionWidth),
      ease: "none",
    })

    // Create ScrollTrigger for horizontal scroll
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: 1,
      animation: horizontalScroll,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    })

    // Add individual section animations
    sections.forEach((section, index) => {
      const image = section.querySelector(".project-image")
      const content = section.querySelector(".project-content")
      const metrics = section.querySelectorAll(".metric-item")

      if (image && content) {
        const isEven = index % 2 === 0

        // Image animation
        gsap.fromTo(
          image,
          {
            opacity: 0,
            scale: 0.8,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "left 80%",
              end: "left 20%",
              horizontal: true,
              containerAnimation: horizontalScroll,
              toggleActions: "play none none reverse",
            },
          }
        )

        // Content animation
        gsap.fromTo(
          content,
          {
            opacity: 0,
            x: isEven ? 50 : -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "left 80%",
              end: "left 20%",
              horizontal: true,
              containerAnimation: horizontalScroll,
              toggleActions: "play none none reverse",
            },
          }
        )

        // Metrics animation
        if (metrics.length > 0) {
          gsap.fromTo(
            metrics,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.4,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: section,
                start: "left 70%",
                end: "left 30%",
                horizontal: true,
                containerAnimation: horizontalScroll,
                toggleActions: "play none none reverse",
              },
            }
          )
        }
      }
    })

    // Handle resize
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
        return
      }

      const newSectionWidth = getViewportWidth()
      const newTotalWidth = newSectionWidth * sections.length

      // Update container width
      gsap.set(scrollContainer, { width: newTotalWidth })

      // Update section widths
      sections.forEach((section) => {
        gsap.set(section, {
          width: newSectionWidth,
          minWidth: newSectionWidth,
        })
      })

      // Refresh ScrollTrigger
      ScrollTrigger.refresh()
    }

    const debouncedResize = debounce(handleResize, 250)
    window.addEventListener("resize", debouncedResize)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.removeEventListener("resize", debouncedResize)
    }
  }, [isMobile])

  // Debounce utility
  function debounce(func: Function, wait: number) {
    let timeout: NodeJS.Timeout
    return function executedFunction(...args: unknown[]) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  return (
    <section className="relative bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222946] mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;ve transformed ideas into successful products that impact millions of users across
            emerging markets
          </p>
          {!isMobile && (
            <div className="mt-8 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <span>Scroll to explore</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Projects Container */}
      <div ref={containerRef} className="relative overflow-hidden">
        <div ref={scrollContainerRef} className={isMobile ? "space-y-0" : "flex"}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            const colors = getAccentColors(project.accentColor)

            return (
              <div
                key={project.id}
                className={`project-section relative ${project.bgColor} ${
                  isMobile ? "min-h-screen" : "flex-shrink-0"
                }`}
                style={isMobile ? {} : { minHeight: "100vh" }}
              >
                <div className="w-full h-full px-4 sm:px-6 lg:px-8">
                  <div className="h-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 items-center justify-center py-8 lg:py-16">
                    {/* Image Section */}
                    <div className={`w-full ${isEven ? "lg:order-1" : "lg:order-2"} mb-6 lg:mb-0`}>
                      <div className="project-image relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-none">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                        <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                          <span
                            className={`px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium text-white ${
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

                        {/* Mobile Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.name}</h3>
                          <p className="text-white/90">{project.category}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className={`w-full ${isEven ? "lg:order-2" : "lg:order-1"} max-w-md lg:max-w-xl mx-auto lg:mx-0`}
                    >
                      <div className="project-content space-y-4 lg:space-y-6">
                        {/* Desktop Title */}
                        <div className="hidden lg:block">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>{project.year}</span>
                            </div>
                          </div>

                          <h3 className={`text-2xl xl:text-3xl 2xl:text-4xl font-bold ${colors.primary} mb-2`}>
                            {project.name}
                          </h3>
                          <p className="text-lg xl:text-xl text-gray-600 mb-6">{project.category}</p>
                        </div>

                        {/* Mobile Meta Info */}
                        <div className="lg:hidden flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, isMobile ? 3 : 4).map((tag) => (
                              <span
                                key={tag}
                                className={`px-2 py-1 lg:px-3 lg:py-1 ${colors.light} ${colors.primary} rounded-full text-xs lg:text-sm font-medium`}
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > (isMobile ? 3 : 4) && (
                              <span className="px-2 py-1 lg:px-3 lg:py-1 bg-gray-100 text-gray-500 rounded-full text-xs lg:text-sm font-medium">
                                +{project.tags.length - (isMobile ? 3 : 4)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Metrics - Hidden on Mobile */}
                        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4">
                          <div className="metric-item">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className={`w-4 h-4 lg:w-5 lg:h-5 ${colors.primary}`} />
                              <span className="text-xs lg:text-sm text-gray-600">User Base</span>
                            </div>
                            <div className="font-bold text-gray-900 text-sm lg:text-base">{project.metrics.users}</div>
                          </div>

                          <div className="metric-item">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className={`w-4 h-4 lg:w-5 lg:h-5 ${colors.primary}`} />
                              <span className="text-xs lg:text-sm text-gray-600">Performance</span>
                            </div>
                            <div className="font-bold text-gray-900 text-sm lg:text-base">{project.metrics.growth}</div>
                          </div>

                          <div className="metric-item">
                            <div className="flex items-center gap-2 mb-2">
                              <ExternalLink className={`w-4 h-4 lg:w-5 lg:h-5 ${colors.primary}`} />
                              <span className="text-xs lg:text-sm text-gray-600">Impact</span>
                            </div>
                            <div className="font-bold text-gray-900 text-sm lg:text-base">
                              {project.metrics.revenue}
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4 lg:pt-6">
                          <AnimatedButton variant="primary" size="medium" className="w-full sm:w-auto">
                            View Case Study
                            <ArrowRight className="w-4 h-4" />
                          </AnimatedButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator - Only on Desktop */}
                {!isMobile && (
                  <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex gap-2">
                      {projects.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === index ? colors.bg : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* View More Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-xl lg:text-2xl font-bold text-[#222946] mb-4">Explore More Projects</h3>
            <p className="text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto text-sm lg:text-base">
              These are just a few examples of our work. We&apos;ve helped dozens of startups build and scale their
              products across various industries.
            </p>
            <AnimatedButton variant="secondary" size="large">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}