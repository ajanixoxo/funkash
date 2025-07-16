/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Rocket, Lightbulb, Users } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: Code,
    title: "Product Engineering",
    description: "We design, build, and scale robust digital products for startups and enterprises.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Rocket,
    title: "Startup Acceleration",
    description: "Accelerate your go-to-market with our proven frameworks and hands-on support.",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Technical Strategy",
    description: "Get expert guidance on architecture, scaling, and technology choices.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Expand your team with top-tier engineers and product talent on demand.",
    color: "from-green-400 to-emerald-500",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll(".service-card")
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    if (isMobile) {
      gsap.set(cards, { y: 0, opacity: 1 })
      return
    }
    gsap.set(cards, { y: 60, opacity: 0 })
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 90%",
      onEnter: () => {
        console.log("ServicesSection ScrollTrigger fired")
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        })
      },
    })
    ScrollTrigger.refresh()
    return () => {
      trigger && trigger.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#222946] mb-4">What We Do</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We empower founders and teams to build, launch, and scale world-class products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className={`service-card bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-b-4 border-transparent hover:border-indigo-400 transition-all duration-300`}
              >
                <div className={`p-4 rounded-full bg-gradient-to-br ${service.color} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#222946] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 