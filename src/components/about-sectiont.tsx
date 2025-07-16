/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import GSAPTextAnimation from "./gsap-text-animation"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Parallax effect for the image
    gsap.to(imageRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    // Text reveal animation
    // const textElements = textRef.current?.querySelectorAll(".reveal-text")
    // if (textElements) {
    //   gsap.set(textElements, { y: 100, opacity: 0 })

    //   ScrollTrigger.create({
    //     trigger: textRef.current,
    //     start: "top 70%",
    //     onEnter: () => {
    //       gsap.to(textElements, {
    //         y: 0,
    //         opacity: 1,
    //         duration: 1,
    //         ease: "power3.out",
    //         stagger: 0.2,
    //       })
    //     },
    //   })
    // }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GSAPTextAnimation trigger=".about-section" className="text-4xl md:text-5xl font-bold text-[#222946] mb-4">
            About Us
          </GSAPTextAnimation>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our mission, vision, and how we&aposre transforming emerging markets through technology.
          </p>
        </div>

        <div className="about-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div ref={textRef} className="space-y-8">
            <div>
              <h3 className="reveal-text text-3xl font-bold text-[#222946] mb-6">Our Mission</h3>
              <div className="reveal-text space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Funkash Technology, we partner with startups to build and scale through deep tech infrastructure,
                  enabling them to create impactful solutions across Africa, Asia, and beyond.
                </p>
                <p>
                  We believe that technology can be a powerful catalyst for growth in emerging markets, and our mission
                  is to make that technology accessible, reliable, and innovative.
                </p>
              </div>
            </div>

            <div>
              <h3 className="reveal-text text-2xl font-bold text-[#222946] mb-4">What Sets Us Apart</h3>
              <div className="reveal-text space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Deep technical expertise in emerging market challenges</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Co-building approach that ensures long-term success</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Proven track record across multiple industries</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222946]/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
