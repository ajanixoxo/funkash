/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "success" | "danger" | "outline"
  size?: "small" | "medium" | "large"
  onClick?: (e:any) => void
  disabled?: boolean
  className?: string
}

export default function AnimatedButton({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses =
    "relative overflow-hidden font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"

  const variantClasses = {
    primary: "bg-[#222946] hover:bg-[#222946] text-white border-2 border-[#222946]",
    secondary: "bg-white hover:bg-white text-[#222946] border-2 border-[#222946]",
    success: "bg-green-600 hover:bg-green-700 text-white border-2 border-green-600 hover:border-green-700",
    danger: "bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700",
    outline: "bg-transparent hover:bg-[#222946]/10 text-[#222946] border-2 border-[#222946]",
  }

  const sizeClasses = {
    small: "px-4 py-2 text-sm rounded-md",
    medium: "px-6 py-3 text-base rounded-3xl",
    large: "px-8 py-4 text-lg rounded-xl",
  }

  const swipeColors = {
    primary: "bg-white", // Primary swipes to white
    secondary: "bg-[#222946]", // Secondary swipes to dark blue
    success: "bg-green-700",
    danger: "bg-red-700",
    outline: "bg-[#222946]",
  }

  // Text color changes on hover for primary and secondary variants
  const textColorClasses = {
    primary: isHovered ? "text-[#222946]" : "text-white",
    secondary: isHovered ? "text-white" : "text-[#222946]",
    success: "text-white",
    danger: "text-white",
    outline: isHovered ? "text-white" : "",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    >
      {/* Swipe animation background */}
      <div
        className={cn("absolute inset-0", swipeColors[variant])}
        style={{
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Button content */}
      <span className={cn("relative z-10 flex items-center justify-center gap-2", textColorClasses[variant])}>
        {children}
      </span>
    </button>
  )
}
