/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#222946] via-[#222946] to-green-900/20 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build the <span className="italic font-normal">Future</span>
              <br />
              <span className="italic font-normal">Together</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Whether you're ready to scale, raise capital, or simply explore how
              our network and tech can help, we're here to build it with you —
              from idea to execution, every step of the way.
            </p>
            <div className="space-y-4 mt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-[#222946] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Start the Dialog
              </motion.a>
              <div className="flex items-center  gap-4 text-sm">
                <a
                  href="/projects"
                  className="text-gray-300 border border-gray-300 rounded-full px-8 py-4 hover:text-white transition-colors inline-flex items-center gap-2"
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
                <a
                  href="/projects"
                  className="text-gray-300 rounded-full px-8 py-4 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Contact Us
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
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative h-full rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0  opacity-30" />
            <img
              src="/cta.png"
              alt="Future Building"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Text/Form */}
            <div className="absolute bottom-0 flex items-center justify-center p-8">
              <div className=" rounded-xl p-8 w-full max-w-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Sign up for the alpha on the future of investing.
                </h3>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-100 focus:outline-none focus:border-white/50 transition-colors"
                  />
                  {/* <button
                    type="submit"
                    className="w-full bg-white text-[#222946] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Join Waitlist
                  </button> */}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-2">Prefer Email?</p>
          <a
            href="mailto:hello@funkash.com"
            className="text-2xl md:text-3xl font-semibold hover:text-purple-400 transition-colors"
          >
            hello@funkash.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

