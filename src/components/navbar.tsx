/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import { ChartNoAxesColumnIncreasing, ChevronDown } from "lucide-react";
import StaggeredMenu from "./StaggeredMenu";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import GlassSurface from "./GlassSurface";
import Button from "./ui/button";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About Us", ariaLabel: "Learn about us", link: "/about" },
    { label: "Team", ariaLabel: "Meet our leadership and team", link: "/team" },
    { label: "Approach", ariaLabel: "Our engineering approach", link: "/approach" },
    {
      label: "Projects",
      ariaLabel: "Check out our projects",
      link: "/projects",
    },
    { label: "Media", ariaLabel: "Explore our media and publications", link: "/media" },
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

  const handleMouseEnterAbout = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setAboutDropdownOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

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
            <div className="flex justify-between gap-8 w-auto items-center">
              {/* LOGO */}
              <div className="flex items-center text-white mr-2">
                <Link href="/" className="flex items-center text-white mr-2">
                  <Logo size={42} className="text-white shrink-0" />
                  <h2
                    className={`font-semibold hidden md:flex ml-3 text-lg ${scrolled ? "text-white" : "text-white/90"}`}
                  >
                    Tharwa Funkash Technology
                  </h2>
                </Link>
              </div>

              {/* DESKTOP MENU */}
              <nav className="hidden md:flex items-center space-x-7">
                {/* Home */}
                <motion.a
                  href="/"
                  className={`font-medium relative transition-colors ${scrolled ? "text-white" : "text-white/70"}`}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1.5px] bg-white/80"
                    variants={{
                      initial: { width: "0%" },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.25 }}
                  />
                  <motion.p
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -2 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Home
                  </motion.p>
                </motion.a>

                {/* About with Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnterAbout}
                  onMouseLeave={handleMouseLeaveAbout}
                >
                  <Link
                    href="/about"
                    className={`font-medium relative transition-colors flex items-center gap-1 py-1 ${scrolled ? "text-white" : "text-white/70"}`}
                  >
                    <p>About</p>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180 text-white" : "opacity-70"}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {aboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-[#161b2e]/95 backdrop-blur-xl border border-white/15 p-2 shadow-2xl z-50 flex flex-col gap-1"
                      >
                        <Link
                          href="/about"
                          onClick={() => setAboutDropdownOpen(false)}
                          className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                        >
                          <span>About Us</span>
                        </Link>
                        <Link
                          href="/team"
                          onClick={() => setAboutDropdownOpen(false)}
                          className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                        >
                          <span>Team</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Approach */}
                <motion.a
                  href="/approach"
                  className={`font-medium relative transition-colors ${scrolled ? "text-white" : "text-white/70"}`}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1.5px] bg-white/80"
                    variants={{
                      initial: { width: "0%" },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.25 }}
                  />
                  <motion.p
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -2 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Approach
                  </motion.p>
                </motion.a>

                {/* Projects */}
                <motion.a
                  href="/projects"
                  className={`font-medium relative transition-colors ${scrolled ? "text-white" : "text-white/70"}`}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1.5px] bg-white/80"
                    variants={{
                      initial: { width: "0%" },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.25 }}
                  />
                  <motion.p
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -2 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Projects
                  </motion.p>
                </motion.a>

                {/* Media */}
                <motion.a
                  href="/media"
                  className={`font-medium relative transition-colors ${scrolled ? "text-white" : "text-white/70"}`}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1.5px] bg-white/80"
                    variants={{
                      initial: { width: "0%" },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.25 }}
                  />
                  <motion.p
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -2 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Media
                  </motion.p>
                </motion.a>
              </nav>

              {/* CTA */}
              <div className="hidden md:flex">
                <Button asChild variant="primary" size="md">
                  <Link href="/contact" className="flex items-center gap-2">
                    Partner With Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
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
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "transparent",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex justify-between items-center px-4 py-4">
          {/* LOGO */}
          <div className="flex items-center text-white">
            <Link href="/" className="flex items-center text-white mr-2">
              <Logo size={36} className="text-white shrink-0" />
              <h2
                className={`font-semibold ml-3 text-base ${scrolled ? "text-white" : "text-white/90"}`}
              >
                Tharwa Funkash Technology
              </h2>
            </Link>
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
