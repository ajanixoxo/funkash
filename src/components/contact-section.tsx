/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedButton from "./animated-button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.set(sectionRef.current, { y: 60, opacity: 0 })
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(sectionRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        })
      },
    })
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="contact-section" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#222946] mb-4">Let’s Connect</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to build? Reach out and let’s start your journey.
          </p>
        </div>
        <form className="max-w-xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
          />
          <AnimatedButton variant="primary" size="large" type="submit">
            Send Message
          </AnimatedButton>
        </form>
      </div>
    </section>
  )
} 