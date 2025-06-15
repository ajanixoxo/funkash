"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Circle, Square, Triangle } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedShapesProps {
  type: "build" | "execute" | "strategy"
}

export default function AnimatedShapes({ type }: AnimatedShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const shapes = containerRef.current.querySelectorAll(".shape")

    if (type === "build") {
      // Building animation - shapes come together to form a structure
      gsap.set(shapes, { scale: 0, rotation: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })

      shapes.forEach((shape, i) => {
        tl.to(
          shape,
          {
            scale: 1,
            rotation: 360,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          i * 0.2,
        )
      })

      // Continuous building motion
      gsap.to(shapes, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    } else if (type === "execute") {
      // Execution animation - rapid, precise movements
      gsap.set(shapes, { x: -100, opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })

      shapes.forEach((shape, i) => {
        tl.to(
          shape,
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
          },
          i * 0.1,
        )
      })

      // Execution pulse
      gsap.to(shapes, {
        scale: 1.2,
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
      })
    } else if (type === "strategy") {
      // Strategy animation - thoughtful, calculated movements
      gsap.set(shapes, { rotation: 0, scale: 0.5, opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })

      shapes.forEach((shape, i) => {
        tl.to(
          shape,
          {
            scale: 1,
            opacity: 1,
            rotation: 180,
            duration: 1,
            ease: "power2.inOut",
          },
          i * 0.3,
        )
      })

      // Strategic orbit
      gsap.to(shapes, {
        rotation: "+=360",
        duration: 8,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [type])

  const renderShapes = () => {
    if (type === "build") {
      return (
        <>
          <Circle className="shape w-8 h-8 text-white absolute top-0 left-0" />
          <Square className="shape w-8 h-8 text-white absolute top-0 right-0" />
          <Triangle className="shape w-8 h-8 text-white absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        </>
      )
    } else if (type === "execute") {
      return (
        <>
          <Square className="shape w-6 h-6 text-white absolute top-2 left-2" />
          <Square className="shape w-6 h-6 text-white absolute top-2 right-2" />
          <Square className="shape w-6 h-6 text-white absolute bottom-2 left-2" />
          <Square className="shape w-6 h-6 text-white absolute bottom-2 right-2" />
        </>
      )
    } else {
      return (
        <>
          <Triangle className="shape w-10 h-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <Circle className="shape w-4 h-4 text-white absolute top-0 left-0" />
          <Circle className="shape w-4 h-4 text-white absolute top-0 right-0" />
          <Circle className="shape w-4 h-4 text-white absolute bottom-0 left-0" />
          <Circle className="shape w-4 h-4 text-white absolute bottom-0 right-0" />
        </>
      )
    }
  }

  return (
    <div ref={containerRef} className="relative w-16 h-16">
      {renderShapes()}
    </div>
  )
}

// BuildingBlocks Component
export function BuildingBlocks({ isActive, onComplete }: { isActive: boolean, onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isBuilding, setIsBuilding] = useState(false)

  useEffect(() => {
    if (!containerRef.current || !isActive) return

    const blocks = containerRef.current.querySelectorAll(".building-block")
    
    // Initial setup - blocks stacked
    gsap.set(blocks, { 
      y: (i) => -i * 20,
      opacity: 1,
      scale: 1
    })

    setIsBuilding(true)

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsBuilding(false)
        onComplete?.()
      }
    })

    // Animate blocks building up
    timeline.from(blocks, {
      y: 100,
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.15
    })

    return () => {
      timeline.kill()
    }
  }, [isActive, onComplete])

  const handleClick = () => {
    if (!containerRef.current || isBuilding) return

    const blocks = containerRef.current.querySelectorAll(".building-block")
    setIsBuilding(true)

    // Fall animation
    gsap.to(blocks, {
      y: 200,
      rotation: () => Math.random() * 360,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
      stagger: 0.1,
      onComplete: () => {
        // Reset and rebuild
        gsap.set(blocks, { y: 100, rotation: 0, opacity: 0, scale: 0.5 })
        gsap.to(blocks, {
          y: (i) => -i * 20,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          onComplete: () => setIsBuilding(false)
        })
      }
    })
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-16 h-16 cursor-pointer"
      onClick={handleClick}
    >
      <div className="building-block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-sm"></div>
      <div className="building-block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-sm"></div>
      <div className="building-block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-sm"></div>
      <div className="building-block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-sm"></div>
    </div>
  )
}
