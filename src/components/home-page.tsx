/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import Navbar from "./navbar"
import FlickerText from "./fllcker_text"
import AnimatedButton from "./animated-button"
import { ArrowRight, Circle, Square, Triangle } from "lucide-react"

interface HomePageProps {
  startTextAnimations?: boolean
}

export default function HomePage({ startTextAnimations = true }: HomePageProps) {
  const [activeBox, setActiveBox] = useState(0)
  const controls = useAnimation()
  const boxRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])

  const boxes = [
    {
      title: "Build",
      description: "We build the foundation of your vision with cutting-edge technology and innovative solutions.",
      color: "bg-[#222946]",
      shape: "circle",
      shapeColor: "bg-white",
      position: "top-0 left-0 lg:left-8",
    },
    {
      title: "Execution",
      description: "Skip the painful team hunt and onboarding. You build the vision, we deploy the code.",
      color: "bg-[#2A3256]",
      shape: "square",
      shapeColor: "bg-white",
      position: "top-0 right-0 lg:right-8",
    },
    {
      title: "Strategic Advantage",
      description: "Tap into internal frameworks, product playbooks, and market validation tools.",
      color: "bg-[#343B64]",
      shape: "diamond",
      shapeColor: "bg-white",
      position: "top-0 left-1/2 transform -translate-x-1/2",
    },
  ]

  useEffect(() => {
    if (startTextAnimations) {
      controls.start("visible")

      const interval = setInterval(() => {
        setActiveBox((prev) => (prev + 1) % boxes.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [controls, boxes.length, startTextAnimations])

  const handleBoxClick = (index: number) => {
    setActiveBox(index)
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-32 relative">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-gray-50 opacity-50 -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gray-50 opacity-50 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gray-100 -z-10 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gray-100 -z-10 -rotate-45"></div>

        {/* Hero section with images on left and right */}
        <section className="relative min-h-[80vh] flex items-center">
          {/* Left project showcase */}
          <motion.div
            className="absolute left-0 top-20 w-[280px] h-[350px] z-10"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={startTextAnimations ? { opacity: 1, x: 0, rotate: -5 } : { opacity: 0, x: -100, rotate: -5 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-400 to-purple-600 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/90 to-purple-600/90"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-white text-3xl font-bold mb-4">Afri pay</div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/projects/afri-mobile.png"
                    alt="Project showcase"
                    className=" object-cover"
                  />
                </div>
                <div className="text-white/80 text-sm"></div>
              </div>
            </div>
          </motion.div>

          {/* Right project showcase */}
          <motion.div
            className="absolute right-0 top-32 w-[300px] h-[430px] z-10"
            initial={{ opacity: 0, x: 100, rotate: 3 }}
            animate={startTextAnimations ? { opacity: 1, x: 0, rotate: 3 } : { opacity: 0, x: 100, rotate: 3 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >

            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 to-gray-900/95"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-white text-3xl font-bold mb-4">Sharp Sharp</div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/projects/sharp-mobile.png"
                    alt="Project showcase"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 p-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center content */}
          <div className="w-full text-center relative z-20">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-2 mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <FlickerText text="Build What You Were" delay={500} startAnimation={startTextAnimations} />
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <FlickerText text="Born to Lead" color="#222946" delay={1500} startAnimation={startTextAnimations} />
                </h1>
              </div>

              <motion.p
                className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0 }}
                animate={startTextAnimations ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
              >
                Most startup founders are forced to guess, grind, and gamble. At Funkash, we engineer both product and
                process — giving you the technical backbone, team, and tools to build faster and smarter.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={startTextAnimations ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 3.2, duration: 0.5 }}
              >
                <AnimatedButton variant="primary">
                  Partner With Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </AnimatedButton>
                <AnimatedButton variant="secondary">View Our Projects</AnimatedButton>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={startTextAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 4, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                ↓
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Scattered feature boxes */}
        <motion.div
          className="relative h-[600px] md:h-max mt-20"
          initial={{ opacity: 0 }}
          animate={startTextAnimations ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.7 }}
        >
          {/* Box indicators */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {boxes.map((_, index) => (
              <button
                key={index}
                onClick={() => handleBoxClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeBox === index ? "bg-[#222946] w-8" : "bg-gray-300",
                )}
                aria-label={`View ${boxes[index].title}`}
              />
            ))}
          </div>

          {/* Animated boxes */}
          {startTextAnimations &&
            boxes.map((box, index) => (
              <motion.div
                key={box.title}
                ref={(el) => {
                  boxRefs.current[index] = el
                }}
                className={cn(
                  "absolute w-full md:w-[350px] lg:w-[400px] rounded-2xl p-6 flex flex-col justify-between",
                  box.color,
                  box.position,
                  activeBox === index ? "z-10 h-[300px]" : "z-0 h-[250px] opacity-70",
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeBox === index ? 1 : 0.7,
                  scale: activeBox === index ? 1 : 0.95,
                  y: activeBox === index ? 0 : 10,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated shape */}
                <motion.div
                  className="absolute right-8 top-8 opacity-80"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 0.8, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {box.shape === "circle" && <Circle className="w-12 h-12 text-white" />}
                  {box.shape === "square" && <Square className="w-12 h-12 text-white" />}
                  {box.shape === "diamond" && <Triangle className="w-12 h-12 text-white rotate-45" />}
                </motion.div>

                {/* Small decorative shapes */}
                <motion.div
                  className="absolute left-12 top-12"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {box.shape === "circle" && <Circle className="w-6 h-6 text-white opacity-30" />}
                  {box.shape === "square" && <Square className="w-6 h-6 text-white opacity-30" />}
                  {box.shape === "diamond" && <Triangle className="w-6 h-6 text-white opacity-30 rotate-45" />}
                </motion.div>

                <div className="mt-auto">
                  <h2 className="text-3xl font-bold text-white mb-4">{box.title}</h2>
                  <p className="text-white/90 text-lg">{box.description}</p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </main>
    </div>
  )
}
