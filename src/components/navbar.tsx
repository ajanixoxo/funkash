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
      link: "/products",
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
    { lable: "Projects", href: "/products" },
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
            <div className="flex items-center text-white mr-2">
             <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8364 18.1363C12.1729 18.8173 10.6036 19.4377 10.6036 19.4377C10.1699 19.6094 9.6785 19.3967 9.50685 18.963C9.3352 18.5293 9.54788 18.0379 9.98157 17.8663C9.98157 17.8663 23.054 12.6866 37.9721 15.5836C38.43 15.6726 38.7295 16.1165 38.6406 16.5743C38.5517 17.0322 38.1078 17.3317 37.6499 17.2428C36.1888 16.9591 34.7459 16.7554 33.3326 16.6185V31.4996H34.2752C34.7415 31.4996 35.1203 31.8783 35.1203 32.3447C35.1203 32.8111 34.7415 33.1897 34.2752 33.1897H30.526C30.0596 33.1897 29.681 32.8111 29.681 32.3447C29.681 31.8783 30.0596 31.4996 30.526 31.4996H31.6425V16.4848C29.2936 16.3403 27.0425 16.3718 24.9442 16.5145V23.0471C25.8914 22.7255 27.402 22.4657 29.7813 22.5551C30.2474 22.5727 30.6116 22.9653 30.594 23.4313C30.5765 23.8974 30.1839 24.2616 29.7178 24.2441C27.6992 24.1682 26.4325 24.3488 25.6506 24.5828C25.3197 24.6818 25.0828 24.8017 24.9442 24.8834V31.4996H25.9858C26.4522 31.4996 26.8309 31.8783 26.8309 32.3447C26.8309 32.8111 26.4522 33.1897 25.9858 33.1897H22.2366C21.7702 33.1897 21.3916 32.8111 21.3916 32.3447C21.3916 31.8783 21.7702 31.4996 22.2366 31.4996H23.254V16.6558C20.7045 16.9081 18.4248 17.3111 16.5265 17.7329V31.4996H17.5106C17.977 31.4996 18.3557 31.8783 18.3557 32.3447C18.3557 32.8111 17.977 33.1897 17.5106 33.1897H13.7615C13.2951 33.1897 12.9165 32.8111 12.9165 32.3447C12.9165 31.8783 13.2951 31.4996 13.7615 31.4996H14.8364V18.1363Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9827 3.08594C35.5152 3.08594 44.8782 12.4489 44.8782 23.9814C44.8782 35.5139 35.5152 44.8769 23.9827 44.8769C12.4502 44.8769 3.08716 35.5139 3.08716 23.9814C3.08716 12.4489 12.4502 3.08594 23.9827 3.08594ZM23.9827 3.36763C12.6056 3.36763 3.36885 12.6044 3.36885 23.9814C3.36885 35.3585 12.6056 44.5952 23.9827 44.5952C35.3598 44.5952 44.5965 35.3585 44.5965 23.9814C44.5965 12.6044 35.3598 3.36763 23.9827 3.36763Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9827 0C37.2191 0 47.9654 10.7463 47.9654 23.9828C47.9654 37.2193 37.2191 47.9656 23.9827 47.9656C10.7462 47.9656 -0.00012207 37.2193 -0.00012207 23.9828C-0.00012207 10.7463 10.7462 0 23.9827 0ZM23.9827 1.12678C11.3681 1.12678 1.12665 11.3682 1.12665 23.9828C1.12665 36.5974 11.3681 46.8388 23.9827 46.8388C36.5973 46.8388 46.8387 36.5974 46.8387 23.9828C46.8387 11.3682 36.5973 1.12678 23.9827 1.12678Z" fill="white"/>
</svg>


              <h2
                className={`font-semibold hidden md:flex ml-2 text-lg ${scrolled ? "text-white" : "text-white/90"}`}
              >
                Tharwa Funkash Technology
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
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
          <div className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center shrink-0">
            <span className="text-white font-medium text-xs tracking-wider" style={{ fontFamily: 'var(--font-playfair), serif' }}>TH</span>
          </div>
          <h2 className={`font-semibold ml-3 text-base ${scrolled ? "text-white" : "text-white/90"}`}>
            Tharwa Funkash Technology
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
