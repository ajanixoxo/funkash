"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
  isVisible: boolean
}

export default function PageTransition({ children, isVisible }: PageTransitionProps) {
  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Sliding panels transition effect */}
      <motion.div
        className="absolute inset-0 bg-[#222946] z-50"
        initial={{ x: "0%" }}
        animate={{ x: isVisible ? "-100%" : "0%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="absolute inset-0 bg-[#343B64] z-40"
        initial={{ x: "0%" }}
        animate={{ x: isVisible ? "-100%" : "0%" }}
        transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="absolute inset-0 bg-[#4A5578] z-30"
        initial={{ x: "0%" }}
        animate={{ x: isVisible ? "-100%" : "0%" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      />

      {children}
    </motion.div>
  )
}
