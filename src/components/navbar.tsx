/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import StaggeredMenu from "./StaggeredMenu";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import GlassSurface from "./GlassSurface";
import Button from "./ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Approach", ariaLabel: "Our approach", link: "/approach" },
    {
      label: "Projects",
      ariaLabel: "Check out our project",
      link: "/projects",
    },
    { label: "Essay", ariaLabel: "Explore our essays", link: "/essay" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { lable: "Home", href: "/" },
    { lable: "About", href: "/about" },
    { lable: "Approach", href: "/approach" },
    { lable: "Projects", href: "/projects" },
    { lable: "Essay", href: "/essay" },
  ];

  return (
    <>
    {/* DESKTOP NAVBAR */}
    <motion.header
      className="hidden md:block fixed top-2 left-0 w-full z-50 px-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/* GLASS CONTAINER */}
      <GlassSurface
        width={"70%"}
        height={"auto"}
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        mixBlendMode="screen"
        className="w-full transition-all duration-300 mx-auto"
        style={
          !scrolled
            ? {
                background: "transparent",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                boxShadow: "none",
                border: "none",
              }
            : {
                backdropFilter: "blur(5px) var(--filter-id, url(#glass-filter))",
                WebkitBackdropFilter: "blur(5px) var(--filter-id, url(#glass-filter))",
              }
        }
      >
        <motion.div>
          <div className="flex justify-between gap-8  w-auto  items-center">
            {/* LOGO */}
            <div className="flex items-center text-white">
              <div className="w-10 md:w-16 h-16 rounded-md flex items-center justify-center mr-3 overflow-hidden">
                <img src="/logo.png" alt="Funkash Logo" className="w-full" />
              </div>

              <h2
                className={`font-semibold hidden md:flex text-xl ${scrolled ? "text-white" : "text-white/80"}`}
              >
                Funkash Technology
              </h2>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(({ lable, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`font-medium relative transition-colors ${scrolled ? "text-white" : "text-white/70"}`}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1.5px] bg-white/80"
                    variants={{
                      initial: { width: "0%" },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.25 }}
                  />

                  {/* text float */}
                  <motion.p
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -2 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {lable}
                  </motion.p>

                  {/* soft glass hover */}
                  <motion.div
                    className="absolute inset-0 rounded-md -z-10 backdrop-blur-sm"
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      hover: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                    }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex">
              <Button asChild variant="primary" size="md">
                <Link href="/contact" className="flex items-center gap-2">
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
                </Link>
              </Button>
            </div>

          </div>

        </motion.div>
      </GlassSurface>
    </motion.header>

    {/* MOBILE NAVBAR */}
    <motion.header
      className="md:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
         background: scrolled ? "rgba(255, 255, 255, 0.05)" : "transparent",
         backdropFilter: scrolled ? "blur(16px)" : "none",
         WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
         borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "transparent",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex justify-between items-center px-4 py-4">
        {/* LOGO */}
        <div className="flex items-center text-white">
          <div className="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="Funkash Logo" className="w-full" />
          </div>
          <h2 className={`font-semibold ml-2 text-lg ${scrolled ? "text-white" : "text-white/80"}`}>
            Funkash Technology
          </h2>
        </div>

        {/* MOBILE BUTTON */}
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full !px-3 !py-3"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <ChartNoAxesColumnIncreasing className="rotate-270" />
        </Button>
      </div>
    </motion.header>

    <AnimatePresence>
      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 z-[110] text-white"
          >
            ✕
          </motion.button>

          <StaggeredMenu
            position="right"
            items={menuItems}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            logoUrl="/logo.png"
            accentColor="#ff6b6b"
            onMenuClose={() => setMobileMenuOpen(false)}
            isFixed={false}
            hideHeader={true}
            isOpen={mobileMenuOpen}
          />
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
