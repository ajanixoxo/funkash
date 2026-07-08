/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#1a1f3a] min-h-screen font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto py-32 px-6 text-white min-h-[70vh]">
        <div className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Privacy Policy</h1>
          <p className="text-gray-400">Effective Date: April 2026 | Last Updated: April 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            Funkash Technology Limited ("Funkash," "we," "us") is committed to protecting the privacy and personal data of individuals who visit our Website (funkash.com), use our Products, or engage with our Services. This Privacy Policy explains how we collect, use, store, share, and protect your personal information in accordance with the Nigeria Data Protection Act 2023 (NDPA) and other applicable data protection legislation.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Data Controller</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">1.1</span> The data controller for the purposes of this Privacy Policy is Funkash Technology Limited, Flat 21, Adeline Court, Banana Island, Ikoyi, Lagos, Nigeria. Contact: hello@funkash.com.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">2.1 Information You Provide Directly:</span>
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Contact information: name, email address, phone number, company name, job title;</li>
                  <li>Account information: username, password, and profile details;</li>
                  <li>Communication data: messages, enquiries, and correspondence you send to us;</li>
                  <li>Commercial information: details provided during product enquiries, proposals, or contract negotiations.</li>
                </ul>
              </li>
              <li><span className="font-medium text-white mt-4 block">2.2 Information Collected Automatically:</span>
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Device information: browser type, operating system, device type, screen resolution;</li>
                  <li>Usage data: pages visited, time spent, navigation paths, referral sources;</li>
                  <li>Network information: IP address, approximate geographic location;</li>
                  <li>Cookie data: as described in our Cookie Policy.</li>
                </ul>
              </li>
              <li><span className="font-medium text-white mt-4 block">2.3 Information from Third Parties:</span> We may receive information about you from business partners, publicly available sources, or third-party services you authorise to share data with us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">3.1</span> We process your personal data for the following purposes:
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>To provide, maintain, and improve our Website and Services;</li>
                  <li>To respond to your enquiries, requests, and communications;</li>
                  <li>To process commercial engagements, contracts, and transactions;</li>
                  <li>To send administrative communications, including service updates and security alerts;</li>
                  <li>To analyse Website usage and improve user experience;</li>
                  <li>To comply with legal obligations, regulatory requirements, and law enforcement requests;</li>
                  <li>To protect the rights, property, and safety of Funkash, our users, and the public;</li>
                  <li>To detect, prevent, and address fraud, security incidents, and technical issues.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Legal Basis for Processing</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">4.1</span> We process personal data on one or more of the following legal bases:
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Consent: where you have given explicit consent for a specific purpose;</li>
                  <li>Contractual necessity: where processing is necessary for the performance of a contract with you;</li>
                  <li>Legal obligation: where processing is required to comply with applicable law;</li>
                  <li>Legitimate interest: where processing is necessary for our legitimate business interests, provided those interests are not overridden by your rights and freedoms.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Sharing</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">5.1</span> We do not sell your personal data to third parties.</li>
              <li><span className="font-medium text-white">5.2</span> We may share your personal data with:
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Service providers who assist in operating the Website, hosting services, analytics, and communication (subject to data processing agreements);</li>
                  <li>Professional advisors, including legal, accounting, and audit professionals;</li>
                  <li>Law enforcement or regulatory authorities when required by law or to protect our legal rights;</li>
                  <li>Affiliated entities within the Funkash group for operational and administrative purposes.</li>
                </ul>
              </li>
              <li><span className="font-medium text-white">5.3</span> Where personal data is transferred outside Nigeria, we ensure adequate safeguards are in place in accordance with the NDPA.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">6.1</span> We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.</li>
              <li><span className="font-medium text-white">6.2</span> When personal data is no longer required, it is securely deleted or anonymised.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Data Security</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">7.1</span> We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include:
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Encryption of data at rest (AES-256) and in transit (TLS 1.3);</li>
                  <li>Access controls and authentication mechanisms;</li>
                  <li>Regular security assessments and vulnerability testing;</li>
                  <li>Staff training on data protection and information security.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">8.1</span> Under the Nigeria Data Protection Act 2023, you have the following rights:
                <ul className="list-[lower-alpha] pl-8 mt-2 space-y-2">
                  <li>Right of access: to obtain confirmation of whether we process your personal data and to access that data;</li>
                  <li>Right to rectification: to request correction of inaccurate or incomplete personal data;</li>
                  <li>Right to erasure: to request deletion of your personal data, subject to legal and contractual obligations;</li>
                  <li>Right to restrict processing: to request limitation of processing in certain circumstances;</li>
                  <li>Right to data portability: to receive your personal data in a structured, commonly used, machine-readable format;</li>
                  <li>Right to object: to object to processing based on legitimate interests;</li>
                  <li>Right to withdraw consent: to withdraw consent at any time where processing is based on consent.</li>
                </ul>
              </li>
              <li><span className="font-medium text-white">8.2</span> To exercise any of these rights, contact us at hello@funkash.com. We will respond within thirty (30) days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">9.1</span> The Website and Services are not directed at individuals under the age of eighteen (18). We do not knowingly collect personal data from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
            <ul className="list-none space-y-2">
              <li><span className="font-medium text-white">10.1</span> We may update this Privacy Policy from time to time. The updated version will be posted on the Website with a revised effective date. We encourage you to review this Policy periodically.</li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
