/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#1a1f3a] min-h-screen font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto py-32 px-6 text-white min-h-[70vh]">
        <div className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Cookie Policy</h1>
          <p className="text-gray-400">Effective Date: April 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            This Cookie Policy explains how Funkash Technology Limited uses cookies and similar tracking technologies on funkash.com.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">1.1</span> Cookies are small text files stored on your device when you visit a website. They enable the website to recognise your device, remember your preferences, and provide a personalised experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Types of Cookies We Use</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">2.1 Strictly Necessary Cookies:</span> Essential for the Website to function properly. These cannot be disabled. They enable core functionality such as security, network management, and accessibility.</li>
              <li><span className="font-medium text-white">2.2 Analytics Cookies:</span> Help us understand how visitors interact with the Website by collecting and reporting information anonymously. We use this data to improve the Website's performance and user experience.</li>
              <li><span className="font-medium text-white">2.3 Functional Cookies:</span> Allow the Website to remember choices you make (such as language preferences) and provide enhanced, personalised features.</li>
              <li><span className="font-medium text-white">2.4 Marketing Cookies:</span> Used to track visitors across websites. The intention is to display advertisements that are relevant and engaging for the individual user. We currently do not use marketing cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Managing Cookies</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">3.1</span> You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling certain cookies may affect the functionality of the Website.</li>
              <li><span className="font-medium text-white">3.2</span> For more information about managing cookies, visit your browser's help documentation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">4.1</span> Some cookies may be set by third-party services that appear on our pages, including analytics providers (such as Google Analytics). We do not control these third-party cookies. Please refer to the respective third party's cookie policy for more information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Updates</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">5.1</span> We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.</li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
