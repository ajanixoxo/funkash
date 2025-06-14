"use client"

import { useState, useEffect } from "react"
import SlotMachine from "@/components/FunkashLoader"
import HomePage from "@/components/home-page"
import PageTransition from "@/components/page-transition"
import Navbar from "@/components/navbar"
export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // After slot machine animation completes, start the zoom transition
    const timer = setTimeout(() => {
      setIntroComplete(true)

      // After zoom animation, show the actual content
      setTimeout(() => {
        setShowContent(true)
      }, 1000) // Match this with the zoom animation duration
    }, 4000) // Adjust based on slot machine animation duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full">
      {/* Slot machine intro */}
      <div
        className={`absolute inset-0 z-20 transition-all duration-1000 ${introComplete ? "scale-150 opacity-0 pointer-events-none" : "scale-100 opacity-100"
          }`}
      >
        <SlotMachine />
      </div>

      {/* Main homepage content */}
      {/* <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"
          }`}
      > */}
      <PageTransition isVisible={showContent}>
        <Navbar />
        <HomePage startTextAnimations={showContent} />
      </PageTransition>
      {/* </div> */}
    </div>
  )
}