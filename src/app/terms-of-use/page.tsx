/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsOfUsePage() {
  return (
    <div className="bg-[#1a1f3a] min-h-screen font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto py-32 px-6 text-white min-h-[70vh]">
        <div className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Terms of Service</h1>
          <p className="text-gray-400">Effective Date: April 2026 | Last Updated: April 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the website funkash.com (the "Website") and any products, services, platforms, or applications (collectively, the "Services") provided by Funkash Technology Limited ("Funkash," "we," "us," or "our"), a company incorporated under the laws of the Federal Republic of Nigeria (RC 8114457).
          </p>
          <p>
            By accessing the Website or using any of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access the Website or use our Services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Company Information</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">1.1</span> Funkash Technology Limited is a technology holding company and venture studio that designs, develops, and operates enterprise software products, AI systems, and digital infrastructure.</li>
              <li><span className="font-medium text-white">1.2 Registered Address:</span> Flat 21, Adeline Court, Banana Island, Ikoyi, Lagos, Nigeria.</li>
              <li><span className="font-medium text-white">1.3 Contact:</span> hello@funkash.com | +234 907 711 1176 | funkash.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Definitions</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">2.1</span> "User," "you," or "your" refers to any individual or entity that accesses the Website or uses the Services.</li>
              <li><span className="font-medium text-white">2.2</span> "Content" means all text, images, data, software, code, designs, documentation, and other materials available on the Website or through the Services.</li>
              <li><span className="font-medium text-white">2.3</span> "Products" refers to the enterprise software platforms developed by Funkash, including but not limited to Flowpense, Eduflex, Aegis BIP, Botpaa, Maltida, and any future products.</li>
              <li><span className="font-medium text-white">2.4</span> "Intellectual Property" means all patents, trademarks, trade names, service marks, copyrights, trade secrets, source code, algorithms, designs, architectures, documentation, and proprietary information owned by Funkash.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Use of the Website</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">3.1</span> The Website is provided for informational and commercial purposes. You may access the Website to learn about Funkash Technology, its products, and its services.</li>
              <li><span className="font-medium text-white">3.2</span> You agree to use the Website only for lawful purposes and in accordance with these Terms. You shall not:
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Use the Website in any manner that could damage, disable, overburden, or impair its functioning;</li>
                  <li>Attempt to gain unauthorised access to any part of the Website, its servers, or any systems connected to the Website;</li>
                  <li>Use any automated system, including bots, scrapers, or crawlers, to access the Website without our prior written consent;</li>
                  <li>Introduce any malicious code, virus, or harmful component to the Website;</li>
                  <li>Use the Website to collect personal information about other users without their consent;</li>
                  <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Website without our express written permission.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property Rights</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">4.1</span> All Content, Products, and Intellectual Property displayed on or accessible through the Website are the exclusive property of Funkash Technology Limited, unless otherwise indicated.</li>
              <li><span className="font-medium text-white">4.2</span> This includes, without limitation: the Funkash name, logo, FF monogram, brand identity, product names (Flowpense, Eduflex, Aegis BIP, Botpaa, Maltida), source code, software architecture, documentation, designs, text, graphics, and all related materials.</li>
              <li><span className="font-medium text-white">4.3</span> No licence or right is granted to you by implication, estoppel, or otherwise under any Intellectual Property rights owned or controlled by Funkash, except as expressly provided in a separate written agreement.</li>
              <li><span className="font-medium text-white">4.4</span> You may not reproduce, modify, distribute, display, perform, create derivative works from, or commercially exploit any Content from the Website without our prior written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Products and Services</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">5.1</span> Information about Funkash Products presented on the Website is for general informational purposes. Specific product terms, licensing, pricing, and service-level agreements are governed by separate agreements executed between Funkash and the client.</li>
              <li><span className="font-medium text-white">5.2</span> Funkash reserves the right to modify, update, discontinue, or change any Product or Service at any time without prior notice.</li>
              <li><span className="font-medium text-white">5.3</span> Access to specific Products may require registration, authentication, and execution of a separate commercial agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. User Accounts</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">6.1</span> Certain features of the Website or Services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
              <li><span className="font-medium text-white">6.2</span> You agree to provide accurate, current, and complete information during registration and to update such information as necessary.</li>
              <li><span className="font-medium text-white">6.3</span> Funkash reserves the right to suspend or terminate your account at any time, without notice, for conduct that we determine, in our sole discretion, violates these Terms or is harmful to the Website, Services, or other users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Links and Services</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">7.1</span> The Website may contain links to third-party websites, services, or resources. Funkash does not endorse and is not responsible for the content, products, or services available through third-party links.</li>
              <li><span className="font-medium text-white">7.2</span> Your use of third-party websites and services is at your own risk and subject to the terms and conditions of those third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Disclaimer of Warranties</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">8.1</span> The Website and all Content are provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</li>
              <li><span className="font-medium text-white">8.2</span> Funkash does not warrant that the Website will be uninterrupted, error-free, secure, or free from viruses or other harmful components.</li>
              <li><span className="font-medium text-white">8.3</span> Funkash does not warrant the accuracy, completeness, or reliability of any Content or information provided on the Website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">9.1</span> To the maximum extent permitted by applicable law, Funkash Technology, its directors, officers, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, goodwill, or other intangible losses, arising out of or in connection with your use of or inability to use the Website or Services.</li>
              <li><span className="font-medium text-white">9.2</span> Funkash's total aggregate liability for all claims arising from or related to these Terms or your use of the Website shall not exceed the greater of: (a) the amount you paid to Funkash in the twelve (12) months preceding the claim, or (b) One Hundred Thousand Naira (NGN 100,000).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Indemnification</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">10.1</span> You agree to indemnify, defend, and hold harmless Funkash Technology, its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising from or related to: your use of the Website; your violation of these Terms; your violation of any third-party rights; or any Content you submit or transmit through the Website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Modifications to Terms</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">11.1</span> Funkash reserves the right to modify these Terms at any time. Updated Terms will be posted on the Website with the revised effective date. Your continued use of the Website after any modifications constitutes acceptance of the updated Terms.</li>
              <li><span className="font-medium text-white">11.2</span> We encourage you to review these Terms periodically.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Governing Law and Dispute Resolution</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">12.1</span> These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</li>
              <li><span className="font-medium text-white">12.2</span> Any dispute arising out of or in connection with these Terms shall first be resolved through good-faith negotiation. If unresolved within thirty (30) days, the dispute shall be submitted to the exclusive jurisdiction of the courts of Lagos State, Nigeria.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Severability</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">13.1</span> If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Entire Agreement</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">14.1</span> These Terms, together with the Privacy Policy, Cookie Policy, and Acceptable Use Policy, constitute the entire agreement between you and Funkash regarding your use of the Website.</li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
