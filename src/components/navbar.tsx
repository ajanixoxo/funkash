/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { ChartNoAxesColumnIncreasing } from "lucide-react"
// import AnimatedButton from "./animated-button"
import StaggeredMenu from "./StaggeredMenu"
import { motion } from "framer-motion"
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Approach', ariaLabel: 'Our approach', link: '/approach' },
    { label: 'Projects', ariaLabel: 'Check out our project', link: '/projects' },
    // { label: 'Essay', ariaLabel: 'View our services', link: '/essay' },
    //  { label: 'Leadership', ariaLabel: 'Meet Our CEO', link: '/learedership' },
    // { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  const navItems = [
    { lable: "Home", href: "/" },
    { lable: "About", href: "/about" },
    { lable: "Approach", href: "/approach" },
    { lable: "Projects", href: "/projects" },
    // { lable: "Essay", href: "/essay" },
    // { lable: "Leadership", href: "/leadership" },
    // { lable: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 px-3 w-screen right-0 z-50 transition-all duration-300 py-5`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className={` mx-auto   transition-all  ${scrolled ? " transition-all max-w-5xl  border-gray-500 rounded-[50px] bg-white/20 backdrop-blur-xl  shadow-md py-3 " : " block bg-transparent py-5"
        }   px-4  py-2`}>
        <div className="  flex justify-between rounded-4xl items-center">
          <div className="flex items-center text-white">
            <div className="w-10 md:w-16 h-16 rounded-md flex items-center justify-center mr-3 overflow-hidden">

              <img
                src="/logo.png"
                alt="Funkash Logo"
                className="w-full"
              />
            </div>
            <span className={`font-bold hidden md:flex  text-xl ${scrolled ? "text-gray-100" : "text-white"}`}>
              Funkash Technology
            </span>
            {/* <span className={`font-bold md:hidden   text-xl ${scrolled ? "text-gray-900" : "text-gray-900"}`}>
            FunTech
          </span> */}
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ lable, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className={`font-medium relative transition-colors ${scrolled ? "text-white" : "text-gray-100"}`}
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
                  {lable}
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


          </nav>
          {/* <div className="hidden md:flex items-center space-x-8"> <AnimatedButton variant="primary">Get In Touch</AnimatedButton></div> */}

          <a
            href="/projects"
            className="text-gray-900 bg-gray-300  hidden md:flex border border-gray-300 rounded-full px-8 py-4 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            Partner With Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <ChartNoAxesColumnIncreasing className="rotate-270" />
          </motion.button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh'
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 z-[110] text-gray-800 hover:text-gray-600"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>

            <StaggeredMenu
              position="right"
              items={menuItems}
              displayItemNumbering={true}
              menuButtonColor="#fff"
              openMenuButtonColor="#fff"
              changeMenuColorOnOpen={true}
              colors={['#B19EEF', '#5227FF']}
              logoUrl="/logo.png"
              accentColor="#ff6b6b"
              onMenuOpen={() => console.log('Menu opened')}
              onMenuClose={() => {
                console.log('Menu closed')
                setMobileMenuOpen(false)
              }}
              isFixed={false}
              hideHeader={true}
              isOpen={mobileMenuOpen}
            />
          </motion.div>
        )}
      </div>


    </motion.header>
  )
}
