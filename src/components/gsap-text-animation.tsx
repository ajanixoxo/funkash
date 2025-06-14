"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPTextAnimationProps {
  children: string
  className?: string
  delay?: number
  trigger?: string
}

export default function GSAPTextAnimation({ children, className = "", delay = 0, trigger }: GSAPTextAnimationProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const chars = children.split("").map((char, i) => {
      const span = document.createElement("span")
      span.textContent = char === " " ? "\u00A0" : char
      span.style.display = "inline-block"
      span.style.opacity = "0"
      console.log(i)
      return span
    })

    textRef.current.innerHTML = ""
    chars.forEach((char) => textRef.current?.appendChild(char))

    const tl = gsap.timeline({
      scrollTrigger: trigger
        ? {
            trigger: trigger,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        : undefined,
      delay,
    })

    // Flicker animation
    chars.forEach((char, i) => {
      tl.to(
        char,
        {
          opacity: 0.3,
          duration: 0.05,
          ease: "power2.inOut",
        },
        i * 0.02,
      )
        .to(
          char,
          {
            opacity: 0,
            duration: 0.05,
            ease: "power2.inOut",
          },
          i * 0.02 + 0.05,
        )
        .to(
          char,
          {
            opacity: 0.7,
            duration: 0.05,
            ease: "power2.inOut",
          },
          i * 0.02 + 0.1,
        )
        .to(
          char,
          {
            opacity: 0,
            duration: 0.05,
            ease: "power2.inOut",
          },
          i * 0.02 + 0.15,
        )
        .to(
          char,
          {
            opacity: 1,
            duration: 0.1,
            ease: "power2.inOut",
          },
          i * 0.02 + 0.2,
        )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [children, delay, trigger])

  return <div ref={textRef} className={className} />
}
