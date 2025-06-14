"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedButton from "./animated-button"
import { CheckCircle, Zap, Target, Users, Lightbulb, TrendingUp } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FunkashFounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  const founderQualities = [
    {
      icon: Target,
      title: "Clear product-thinking and a bias for execution",
      description: "You see solutions where others see problems, and you're driven to build rather than just plan.",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Lightbulb,
      title: "A deep problem with technical blind spots to solve",
      description: "You understand your market deeply but need technical expertise to bring your vision to life.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Users,
      title: "Willingness to collaborate, not just outsource",
      description: "You want a true partnership where we build together, sharing both risks and rewards.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Zap,
      title: "High agency and storytelling ability",
      description: "You can articulate your vision compellingly and take ownership of driving results.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Long-term mindset with real market exposure",
      description: "You're building for the future and understand your market through real customer interactions.",
      color: "from-yellow-400 to-orange-500",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    // Floating animation for background elements
    gsap.to(".floating-orb", {
      y: -30,
      x: 20,
      rotation: 360,
      duration: 8,
      ease: "none",
      repeat: -1,
      stagger: 2,
    })

    // Cards entrance animation
    const cards = sectionRef.current.querySelectorAll(".founder-card")

    gsap.set(cards, {
      y: 100,
      opacity: 0,
      rotationY: 45,
      transformPerspective: 1000,
    })

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 60%",
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          stagger: {
            amount: 1.5,
            from: "start",
          },
        })
      },
    })

    // Auto-cycle through cards
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % founderQualities.length)
    }, 4000)

    return () => {
      clearInterval(interval)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [founderQualities.length])

  return (
    <section ref={sectionRef} className="py-20 bg-[#0A0E27] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl"></div>
        <div className="floating-orb absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="floating-orb absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
        <div className="floating-orb absolute bottom-40 right-1/3 w-36 h-36 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Makes a
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Funkash Founder
            </h2>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Not every founder needs to code. But every Funkash founder builds with conviction, clarity, and an
            unwavering commitment to solving real problems.
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Active Card Display */}
            <div className="relative">
              <div className="sticky top-20">
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${founderQualities[activeCard].color} opacity-10 rounded-3xl`}
                  ></div>

                  <div className="relative z-10">
                    {(() => {
                      const IconComponent = founderQualities[activeCard].icon;
                      return (
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${founderQualities[activeCard].color} mb-6`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      );
                    })()}

                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {founderQualities[activeCard].title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed">{founderQualities[activeCard].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - All Cards */}
            <div className="space-y-4">
              {founderQualities.map((quality, index) => {
                const IconComponent = quality.icon;
                return (
                  <div
                    key={index}
                    className={`founder-card relative cursor-pointer transition-all duration-500 ${
                      activeCard === index
                        ? "bg-white/10 border-white/20 scale-105"
                        : "bg-white/5 border-white/10 hover:bg-white/8"
                    } backdrop-blur-sm rounded-2xl p-6 border`}
                    onClick={() => setActiveCard(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${quality.color} ${
                          activeCard === index ? "scale-110" : ""
                        } transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2 leading-tight">{quality.title}</h4>
                        <p className="text-gray-400 text-sm">{quality.description.substring(0, 80)}...</p>
                      </div>

                      <CheckCircle
                        className={`w-5 h-5 transition-all duration-300 ${
                          activeCard === index ? "text-green-400 scale-110" : "text-gray-600"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Extraordinary?</h3>
              <p className="text-gray-300 mb-8">
                If you recognize yourself in these qualities, let&apos;s explore how we can build your vision together.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <AnimatedButton
                  variant="primary"
                  size="large"
                  className="bg-gradient-to-r from-orange-500 to-red-500 border-orange-500"
                >
                  Start Building With Us
                </AnimatedButton>
                <AnimatedButton
                  variant="secondary"
                  size="large"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Learn Our Process
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}