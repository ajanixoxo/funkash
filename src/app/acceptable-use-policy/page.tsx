/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AcceptableUsePolicyPage() {
  return (
    <div className="bg-[#1a1f3a] min-h-screen font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto py-32 px-6 text-white min-h-[70vh]">
        <div className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Acceptable Use Policy</h1>
          <p className="text-gray-400">Effective Date: April 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            This Acceptable Use Policy ("AUP") sets out the rules and standards for the use of funkash.com and all services, platforms, and products provided by Funkash Technology Limited. This AUP supplements and forms part of our Terms of Service.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Prohibited Activities</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">1.1</span> You shall not use the Website, Services, or Products to:
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Engage in any activity that is illegal, fraudulent, deceptive, or harmful under Nigerian law or any other applicable jurisdiction;</li>
                  <li>Transmit, distribute, or store material that is defamatory, obscene, threatening, abusive, or that violates the rights of any third party;</li>
                  <li>Attempt to gain unauthorised access to systems, networks, accounts, or data belonging to Funkash or its clients;</li>
                  <li>Interfere with, disrupt, or degrade the performance, security, or integrity of the Website, Services, or any connected systems;</li>
                  <li>Reverse-engineer, decompile, disassemble, or attempt to derive the source code of any Funkash Product or technology;</li>
                  <li>Use the Website or Services to distribute malware, viruses, trojans, worms, or any other harmful software;</li>
                  <li>Scrape, harvest, or collect data from the Website using automated tools without our express written permission;</li>
                  <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity;</li>
                  <li>Use the Website or Services for competitive intelligence, benchmarking, or to develop a competing product without our written consent;</li>
                  <li>Violate any applicable data protection, privacy, or intellectual property laws.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Security</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">2.1</span> You shall not attempt to probe, scan, or test the vulnerability of the Website or any associated system or network.</li>
              <li><span className="font-medium text-white">2.2</span> You shall not attempt to breach, circumvent, or disable any security or authentication measures implemented by Funkash.</li>
              <li><span className="font-medium text-white">2.3</span> If you discover a security vulnerability, you are encouraged to report it responsibly to hello@funkash.com. Do not exploit any vulnerability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property Protection</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">3.1</span> All Funkash Products, source code, designs, architectures, documentation, and proprietary materials are protected by intellectual property laws. Unauthorised use, reproduction, distribution, or modification is strictly prohibited.</li>
              <li><span className="font-medium text-white">3.2</span> You may not use Funkash's name, logo, trademarks, or brand elements without our prior written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Enforcement</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">4.1</span> Funkash reserves the right, in its sole discretion, to investigate and take appropriate action against any violation of this AUP, including:
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Issuing warnings;</li>
                  <li>Suspending or terminating access to the Website or Services;</li>
                  <li>Removing or disabling access to content that violates this AUP;</li>
                  <li>Reporting violations to law enforcement authorities;</li>
                  <li>Pursuing legal remedies, including injunctive relief and damages.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Reporting Violations</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">5.1</span> If you become aware of any violation of this AUP, please report it to hello@funkash.com. We take all reports seriously and will investigate promptly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Modifications</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">6.1</span> Funkash reserves the right to modify this AUP at any time. Updated versions will be posted on the Website with a revised effective date.</li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
