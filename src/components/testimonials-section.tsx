"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    quote: "Funkash helped us go from idea to launch in record time. Their team felt like an extension of ours.",
    name: "Adaeze O.",
    role: "Founder, Limpiar",
  },
  {
    quote: "The technical depth and product thinking at Funkash is unmatched. We couldn't have scaled without them.",
    name: "Kwame B.",
    role: "CEO, AfriPay",
  },
  {
    quote: "From strategy to execution, Funkash delivered at every step. Highly recommended!",
    name: "Fatima S.",
    role: "Product Lead, Afriprize",
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll(".testimonial-card")
    gsap.set(cards, { y: 60, opacity: 0 })
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        })
      },
    })
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#222946] mb-4">What Our Partners Say</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from founders and teams we&apos;ve helped grow.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-white rounded-2xl shadow-lg p-8 flex-1 flex flex-col items-center text-center border-t-4 border-b-4 border-transparent hover:border-orange-400 transition-all duration-300"
            >
              <p className="text-xl text-gray-700 font-semibold mb-4">“{t.quote}”</p>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mb-4"></div>
              <div className="text-[#222946] font-bold text-lg">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 