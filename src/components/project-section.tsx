/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedButton from "./animated-button"
import { ExternalLink, Calendar, MapPin, Users, TrendingUp, ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// export default function ProjectsSections() {
//   const sectionsRef = useRef<HTMLDivElement[]>([])

//   const projects = [
//     {
//       id: 1,
//       name: "Limpiar",
//       category: "Property Management",
//       image: "/projects/limpiar.png",
//       description:
//         "Revolutionary cleaning marketplace connecting property managers with verified professionals across the United States. Our platform streamlines the entire cleaning process from booking to payment.",
//       location: "United States",
//       year: "2024",
//       status: "Active",
//       metrics: {
//         users: "85+ Partners",
//         growth: "92% Response Rate",
//         revenue: "$2.5M+ GMV",
//       },
//       tags: ["React Native", "Node.js", "PostgreSQL", "Stripe", "AWS"],
//       bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
//       accentColor: "emerald",
//     },
//     {
//       id: 2,
//       name: "Afriprize",
//       category: "Gamified Fundraising",
//       image: "/projects/afri-price.png",
//       description:
//         "Innovative platform merging gaming with charitable giving across African communities. Users participate in engaging games while contributing to meaningful causes and community development.",
//       location: "Nigeria",
//       year: "2023",
//       status: "Live",
//       metrics: {
//         users: "21,000+ Active Users",
//         growth: "68% Conversion Rate",
//         revenue: "₦20M+ Raised",
//       },
//       tags: ["Vue.js", "Python", "MongoDB", "PayStack", "Firebase"],
//       bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
//       accentColor: "blue",
//     },
//     {
//       id: 3,
//       name: "AfriPay",
//       category: "Fintech Infrastructure",
//       image: "/projects/afri-pay.png",
//       description:
//         "Cross-border payment solution enabling seamless financial transactions across Africa. Built with cutting-edge blockchain technology to ensure security and reliability.",
//       location: "Pan-African",
//       year: "2023",
//       status: "MVP",
//       metrics: {
//         users: "Multi-currency Support",
//         growth: "99.8% Success Rate",
//         revenue: "₦2.5B+ Volume",
//       },
//       tags: ["React", "Go", "Redis", "Blockchain", "Docker"],
//       bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
//       accentColor: "purple",
//     },
//   ]

//   const getAccentColors = (color: string) => {
//     const colors = {
//       emerald: {
//         primary: "text-emerald-600",
//         bg: "bg-emerald-500",
//         border: "border-emerald-200",
//         light: "bg-emerald-100",
//       },
//       blue: {
//         primary: "text-blue-600",
//         bg: "bg-blue-500",
//         border: "border-blue-200",
//         light: "bg-blue-100",
//       },
//       purple: {
//         primary: "text-purple-600",
//         bg: "bg-purple-500",
//         border: "border-purple-200",
//         light: "bg-purple-100",
//       },
//     }
//     return colors[color as keyof typeof colors] || colors.blue
//   }

//   useEffect(() => {
//     const panels = sectionsRef.current.filter(Boolean)
//     if (panels.length === 0) return

//     // Clear existing ScrollTriggers
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

//     // Create the overlapping/stacking effect
//     panels.forEach((panel, i) => {
//       ScrollTrigger.create({
//         trigger: panel,
//         start: "bottom bottom",
//         pin: i === panels.length - 1 ? false : true,
//         pinSpacing: false,
//       })
//     })

//     // Add content animations for each panel
//     panels.forEach((panel, index) => {
//       const isEven = index % 2 === 0
//       const image = panel.querySelector(".project-image")
//       const content = panel.querySelector(".project-content")
//       const metrics = panel.querySelectorAll(".metric-item")

//       // Animate content when panel comes into view
//       if (image && content) {
//         gsap.fromTo(
//           image,
//           {
//             opacity: 0,
//             x: isEven ? -50 : 50,
//             scale: 0.9,
//           },
//           {
//             opacity: 1,
//             x: 0,
//             scale: 1,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: panel,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           },
//         )

//         gsap.fromTo(
//           content,
//           {
//             opacity: 0,
//             x: isEven ? 50 : -50,
//           },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 1,
//             delay: 0.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: panel,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           },
//         )
//       }

//       // Animate metrics with stagger
//       if (metrics.length > 0) {
//         gsap.fromTo(
//           metrics,
//           {
//             opacity: 0,
//             y: 30,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.6,
//             delay: 0.4,
//             ease: "power3.out",
//             stagger: 0.1,
//             scrollTrigger: {
//               trigger: panel,
//               start: "top 70%",
//               toggleActions: "play none none reverse",
//             },
//           },
//         )
//       }
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   return (
//     <section className="relative bg-white">
//       {/* Header Section */}
//       <div className="container mx-auto px-4 py-20">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#222946] mb-6">Featured Projects</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover how we&apos;ve transformed ideas into successful products that impact millions of users across
//             emerging markets
//           </p>
//           <div className="mt-8 text-sm text-gray-500">
//             <span className="inline-flex items-center gap-2">
//               <span>Scroll to explore</span>
//               <ArrowRight className="w-4 h-4" />
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Project Panels */}
//       {projects.map((project, index) => {
//         const isEven = index % 2 === 0
//         const colors = getAccentColors(project.accentColor)

//         return (
//           <div
//             key={project.id}
//             ref={(el) => {
//               if (el) sectionsRef.current[index] = el
//             }}
//             className={`panel relative ${project.bgColor} min-h-screen flex items-center`}
//           >
//             <div className="container mx-auto px-4">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                 {/* Image Section */}
//                 <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
//                   <div className="project-image relative">
//                     <div className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
//                       <img
//                         src={project.image || "/placeholder.svg"}
//                         alt={project.name}
//                         className="w-full h-full object-cover"
//                       />

//                       {/* Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

//                       {/* Status Badge */}
//                       <div className="absolute top-6 left-6">
//                         <span
//                           className={`px-4 py-2 rounded-full text-sm font-medium text-white ${
//                             project.status === "Active"
//                               ? "bg-green-500"
//                               : project.status === "Live"
//                                 ? "bg-blue-500"
//                                 : "bg-purple-500"
//                           }`}
//                         >
//                           {project.status}
//                         </span>
//                       </div>

//                       {/* Mobile Title Overlay */}
//                       <div className="absolute bottom-6 left-6 right-6 lg:hidden">
//                         <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
//                         <p className="text-white/90">{project.category}</p>
//                       </div>
//                     </div>

//                     {/* Decorative Elements */}
//                     <div
//                       className={`absolute -top-4 -right-4 w-24 h-24 ${colors.light} rounded-full opacity-50 -z-10`}
//                     ></div>
//                     <div
//                       className={`absolute -bottom-4 -left-4 w-16 h-16 ${colors.bg} rounded-full opacity-30 -z-10`}
//                     ></div>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
//                   <div className="project-content space-y-6 max-w-xl">
//                     {/* Desktop Title */}
//                     <div className="hidden lg:block">
//                       <div className="flex items-center gap-3 mb-4">
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <MapPin className="w-4 h-4" />
//                           <span>{project.location}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Calendar className="w-4 h-4" />
//                           <span>{project.year}</span>
//                         </div>
//                       </div>

//                       <h3 className={`text-4xl lg:text-5xl font-bold ${colors.primary} mb-2`}>{project.name}</h3>
//                       <p className="text-xl text-gray-600 mb-6">{project.category}</p>
//                     </div>

//                     {/* Mobile Meta Info */}
//                     <div className="lg:hidden flex items-center gap-4 text-sm text-gray-600">
//                       <div className="flex items-center gap-1">
//                         <MapPin className="w-4 h-4" />
//                         <span>{project.location}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>{project.year}</span>
//                       </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>

//                     {/* Tech Stack */}
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-3">Tech Stack</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {project.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className={`px-3 py-1 ${colors.light} ${colors.primary} rounded-full text-sm font-medium`}
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Metrics */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
//                       <div className="metric-item">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Users className={`w-5 h-5 ${colors.primary}`} />
//                           <span className="text-sm text-gray-600">User Base</span>
//                         </div>
//                         <div className="font-bold text-gray-900">{project.metrics.users}</div>
//                       </div>

//                       <div className="metric-item">
//                         <div className="flex items-center gap-2 mb-2">
//                           <TrendingUp className={`w-5 h-5 ${colors.primary}`} />
//                           <span className="text-sm text-gray-600">Performance</span>
//                         </div>
//                         <div className="font-bold text-gray-900">{project.metrics.growth}</div>
//                       </div>

//                       <div className="metric-item">
//                         <div className="flex items-center gap-2 mb-2">
//                           <ExternalLink className={`w-5 h-5 ${colors.primary}`} />
//                           <span className="text-sm text-gray-600">Impact</span>
//                         </div>
//                         <div className="font-bold text-gray-900">{project.metrics.revenue}</div>
//                       </div>
//                     </div>

//                     {/* CTA */}
//                     <div className="pt-6">
//                       <AnimatedButton variant="primary" size="large">
//                         View Case Study
//                         <ArrowRight className="w-4 h-4" />
//                       </AnimatedButton>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Section Number */}
//             <div className="absolute top-8 right-8">
//               <div
//                 className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-lg`}
//               >
//                 {index + 1}
//               </div>
//             </div>
//           </div>
//         )
//       })}

//       {/* View More Section */}
//       <div className="container mx-auto px-4 py-20">
//         <div className="text-center">
//           <div className="bg-gray-50 rounded-3xl p-12">
//             <h3 className="text-2xl font-bold text-[#222946] mb-4">Explore More Projects</h3>
//             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//               These are just a few examples of our work. We&apos;ve helped dozens of startups build and scale their
//               products across various industries.
//             </p>
//             <AnimatedButton variant="secondary" size="large">
//               View All Projects
//               <ArrowRight className="w-4 h-4" />
//             </AnimatedButton>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



export default function ProjectsSections() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return

    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current
    const sections = scrollContainer.querySelectorAll(".project-section")

    if (sections.length === 0) return

    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    // Calculate total width needed for horizontal scroll
    const sectionWidth = window.innerWidth
    const totalWidth = sectionWidth * sections.length

    // Set the width of the scroll container
    gsap.set(scrollContainer, {
      width: totalWidth,
      display: "flex",
    })

    // Set each section width
    sections.forEach((section) => {
      gsap.set(section, {
        width: sectionWidth,
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

      // Animate content when section comes into view
      if (image && content) {
        const isEven = index % 2 === 0

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
          },
        )

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
          },
        )
      }

      // Animate metrics
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
          },
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

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
          <div className="mt-8 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span>Scroll to explore</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative overflow-hidden">
        <div ref={scrollContainerRef} className="flex">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            const colors = getAccentColors(project.accentColor)

            return (
              <div
                key={project.id}
                className={`project-section relative ${project.bgColor} flex-shrink-0`}
                style={{ minHeight: "100vh" }}
              >
                <div className="container mx-auto px-4 h-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full items-center">
                    {/* Image Section */}
                    <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="project-image relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                        {/* Status Badge */}
                        <div className="absolute top-6 left-6">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-medium text-white ${
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
                        <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                          <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                          <p className="text-white/90">{project.category}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`${isEven ? "lg:order-2" : "lg:order-1"} p-8 lg:p-12`}>
                      <div className="project-content space-y-6 max-w-xl">
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

                          <h3 className={`text-4xl lg:text-5xl font-bold ${colors.primary} mb-2`}>{project.name}</h3>
                          <p className="text-xl text-gray-600 mb-6">{project.category}</p>
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
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">{project.description}</p>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`px-3 py-1 ${colors.light} ${colors.primary} rounded-full text-sm font-medium`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                          <div className="metric-item">
                            <div className="flex items-center gap-2 mb-2">
                              <Users className={`w-5 h-5 ${colors.primary}`} />
                              <span className="text-sm text-gray-600">User Base</span>
                            </div>
                            <div className="font-bold text-gray-900">{project.metrics.users}</div>
                          </div>

                          <div className="metric-item">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className={`w-5 h-5 ${colors.primary}`} />
                              <span className="text-sm text-gray-600">Performance</span>
                            </div>
                            <div className="font-bold text-gray-900">{project.metrics.growth}</div>
                          </div>

                          <div className="metric-item">
                            <div className="flex items-center gap-2 mb-2">
                              <ExternalLink className={`w-5 h-5 ${colors.primary}`} />
                              <span className="text-sm text-gray-600">Impact</span>
                            </div>
                            <div className="font-bold text-gray-900">{project.metrics.revenue}</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                          <AnimatedButton variant="primary" size="large">
                            View Case Study
                            <ArrowRight className="w-4 h-4" />
                          </AnimatedButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
                </div> */}
              </div>
            )
          })}
        </div>
      </div>

      {/* View More Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-[#222946] mb-4">Explore More Projects</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
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
