/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import AnimatedButton from "./animated-button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About Us", "Projects", "Leadership", "Recommended Reads", "Brain Test"]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-amber-500 rounded-md flex items-center justify-center mr-3 overflow-hidden">
           
            <img
              src="https://funkash.com/assets/funkash-logo.jpeg"
              alt="Funkash Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`font-bold text-xl ${scrolled ? "text-gray-900" : "text-gray-900"}`}>
            Funkash Technology
          </span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className={`font-medium relative transition-colors ${scrolled ? "text-gray-700" : "text-gray-800"}`}
              whileHover="hover"
              initial="initial"
            >
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#222946]"
                variants={{
                  initial: { width: "0%" },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              {/* Floating effect */}
              <motion.span
                className="block"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -2 },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {item}
              </motion.span>

              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-[#222946]/5 rounded-md -z-10"
                variants={{
                  initial: { scale: 0, opacity: 0 },
                  hover: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}

          <AnimatedButton variant="primary">Get In Touch</AnimatedButton>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={24} />
        </motion.button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="font-medium text-gray-700 hover:text-[#222946] transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}
            <AnimatedButton variant="primary" className="w-full">
              Get In Touch
            </AnimatedButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
