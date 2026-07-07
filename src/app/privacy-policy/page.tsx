"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#1a1f3a] min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-32 px-6 text-white min-h-[70vh]">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-300">
          This page is a placeholder for the Privacy Policy.
        </p>
      </main>
      <Footer />
    </div>
  );
}
