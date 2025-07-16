/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, PenTool, Code, Rocket } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We dive deep to understand your vision, market, and users.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "We craft intuitive, beautiful, and scalable product experiences.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Build",
    description: "Our engineers bring your product to life with robust, modern tech.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We help you go live, iterate, and scale for real-world impact.",
    color: "from-orange-400 to-red-500",
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const stepsEls = sectionRef.current.querySelectorAll(".process-step")
    // gsap.set(stepsEls, { y: 60, opacity: 0 })
    // ScrollTrigger.create({
    //   trigger: sectionRef.current,
    //   start: "top 70%",
    //   onEnter: () => {
    //     gsap.to(stepsEls, {
    //       y: 0,
    //       opacity: 1,
    //       duration: 1,
    //       ease: "power3.out",
    //       stagger: 0.2,
    //     })
    //   },
    // })
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#222946] mb-4">How We Work</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our process is designed to turn your ideas into impactful products, fast.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className={`process-step bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-b-4 border-transparent hover:border-blue-400 transition-all duration-300`}
              >
                <div className={`p-4 rounded-full bg-gradient-to-br ${step.color} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#222946] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 