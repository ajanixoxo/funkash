"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Code, Lightbulb, Rocket, Zap } from "lucide-react"

interface SlotMachineProps {
  onComplete?: () => void
}

export default function SlotMachine({ onComplete }: SlotMachineProps) {
  const targetText = "FUNKASH"
  const [animationComplete, setAnimationComplete] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(0)
  const containerRefs = useRef<(HTMLDivElement | null)[]>([])
  // const [particles, setParticles] = useState<{ x: number; y: number; size: number; opacity: number }[]>([])

  const inspirationalQuotes = [
    "Startup success can be engineered by following the right process.",
    "Greatness is not a function of circumstance. Greatness is a matter of conscious choice",
    "You do not rise to the level of your goals. You fall to the level of your systems",
    "A well-known principle of human behavior says that when we ask someone to do us a favor, we will be more successful if we provide a reason",
  ]

  const vectorElements = [
    { icon: Code, position: "top-20 left-20", delay: 0 },
    { icon: Lightbulb, position: "top-32 right-32", delay: 0.5 },
    { icon: Rocket, position: "bottom-32 left-32", delay: 1 },
    { icon: Zap, position: "bottom-20 right-20", delay: 1.5 },
  ]

  useEffect(() => {
    // Initialize container refs array
    containerRefs.current = containerRefs.current.slice(0, targetText.length)

    // Generate background particles
    // const newParticles = Array.from({ length: 50 }, () => ({
    //   x: Math.random() * 100,
    //   y: Math.random() * 100,
    //   size: Math.random() * 4 + 2,
    //   opacity: Math.random() * 0.6 + 0.2,
    // }))
    // setParticles()

    // Start animations with staggered timing
    targetText.split("").forEach((_, index) => {
      setTimeout(() => {
        const container = containerRefs.current[index]
        if (container) {
          container.classList.add("animate-slot")
        }
      }, index * 300) // Stagger start times
    })

    // Cycle through quotes
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length)
    }, 2000)

    // Set animation complete after all letters have finished
    const totalDuration = targetText.length * 300 + 2000 // Total animation time
    const timer = setTimeout(() => {
      setAnimationComplete(true)
      if (onComplete) {
        setTimeout(onComplete, 2000) // Give a moment to see the completed state
      }
    }, totalDuration)

    return () => {
      clearTimeout(timer)
      clearInterval(quoteInterval)
    }
  }, [targetText, onComplete, inspirationalQuotes.length])

  // Generate random letters for each position
  const generateLetterStrip = (targetLetter: string) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const randomLetters = Array.from({ length: 20 }, () => letters[Math.floor(Math.random() * letters.length)])

    // Add the target letter at the end
    return [...randomLetters, targetLetter]
  }

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      {/* Enhanced background with vector elements */}
      {vectorElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} opacity-20`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
          transition={{ delay: element.delay, duration: 1, ease: "easeOut" }}
        >
          <element.icon className="w-10 h-10 md:w-16 md:h-16 text-[#222946]" />
        </motion.div>
      ))}

      {/* Background particles */}
      {/* {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#222946] animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${Math.random() * 15 + 10}s`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
        />
      ))} */}

      {/* Geometric background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#222946] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#222946] to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#222946] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#222946] to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* Logo or brand mark (optional) */}
        {animationComplete && (
          <motion.div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-12 h-12 border-2 border-[#222946] rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-[#222946] rounded-full" />
            </div>
          </motion.div>
        )}

        {/* Slot machine animation */}
        <div className="flex space-x-1 sm:space-x-2 md:space-x-4 mb-4 sm:mb-8 justify-center w-full px-2 sm:px-0">
          {targetText.split("").map((letter, index) => (
            <div
              key={index}
              className="relative h-16 w-12 overflow-hidden flex-shrink-0 border-2 border-red-500" // debug border
            >
              {/* Container for the scrolling letters */}
              <div
                ref={(el) => {
                  containerRefs.current[index] = el
                }}
                className={cn(
                  "absolute top-0 left-0 w-full transition-transform",
                  animationComplete ? "slot-stopped" : "",
                )}
                style={{
                  height: `${21 * 4}rem`, // 21 letters, each 4rem tall
                }}
              >
                {/* Generate the letter strip with random letters and the target letter */}
                {generateLetterStrip(letter).map((char, charIndex) => (
                  <div
                    key={charIndex}
                    className={cn(
                      "flex items-center justify-center w-full h-16 font-bold text-4xl leading-none border border-blue-500", // debug border
                      charIndex === 20 ? "text-[#222946]" : "text-[#222946]/80",
                      animationComplete && charIndex !== 20 ? "opacity-0" : "opacity-100",
                      "transition-opacity duration-300",
                      animationComplete && charIndex === 20 ? "text-glow" : "",
                    )}
                  >
                    {char}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational quotes section */}
        <motion.div
          className="text-center max-w-2xl px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.p
            key={currentQuote}
            className="text-base sm:text-lg md:text-xl text-[#222946]/80 font-medium italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 5 }}
          >
            {inspirationalQuotes[currentQuote]}
          </motion.p>

       
          {/* <div className="flex justify-center gap-2 mt-4">
            {inspirationalQuotes.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentQuote === index ? "bg-[#222946] w-6" : "bg-[#222946]/30",
                )}
              />
            ))}
          </div> */}
        </motion.div>

        {/* Subtle line under text */}
        {animationComplete && (
          <motion.div
            className="mt-4 sm:mt-8 h-px w-40 sm:w-64 bg-gradient-to-r from-transparent via-[#222946]/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </div>
    </div>
  )
}
