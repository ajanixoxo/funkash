/* eslint-disable react/no-unescaped-entities */
"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import CircularGallery from '@/components/CircularGallery'
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ProjectCard from '@/components/project-card'
import React from 'react'
import SplitText from '@/components/SplitText';
import { TextAnimate } from '@/components/ui/text-animate';
interface Project {
    _id: string
    title: string
    description: string
    client: string
    services: string[]
    techStack: string[]
    images: string[]
    link: string
    featured: boolean
    createdAt: string
}


function Projects() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("/api/projects")
                setProjects(response.data)
            } catch (error) {
                console.error("Error fetching projects:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])




    return (
        <div>
            <Navbar />
            <div className="bg-white dark:bg-gray-950">
                {/* HERO SECTION */}
                <section className="min-h-screen relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20 px-6 lg:px-12 flex flex-col items-center justify-center">
                    {/* Hero Content */}
                    <div className="max-w-5xl mx-auto text-center mb-16 z-10">
                        <div className="flex items-center justify-center gap-3 mb-6">

                            <SplitText
                                text=" ✦ Our Portfolio"
                                delay={50}
                                duration={0.3}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                                className='!text-white'
                            />
                        </div>

                        <h1 className="text-5xl text-white  lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">

                            <SplitText
                                text=" Featured Projects"
                                delay={60}
                                duration={0.3}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                                className='!text-white'
                            />
                        </h1>


                        <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                            <TextAnimate animation="blurIn" as="p">
                                Transforming ideas into exceptional digital experiences through innovation, design, and cutting-edge technology</TextAnimate>
                        </p>
                    </div>

                    {/* Circular Gallery */}
                    <div className="w-full max-w-6xl mx-auto" style={{ height: '600px', position: 'relative' }}>
                        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
                        <span className="text-sm text-gray-400 font-light">Scroll to explore</span>
                        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </section>

                {/* PROJECTS SECTION */}
                <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white dark:bg-gray-950">
  <div className="max-w-7xl mx-auto">
    {/* Tech & Startups */}
    <div className="mb-20">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 dark:text-white">Tech & Startups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/53b2532e0d8f58c7c83c5d79e1b238146f3b9eea?width=1296"
            alt="Vincerebet"
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Vincerebet</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Online betting with a focus on user experience and technology.</p>
        </div>
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/055296757789e217cd2ba1f05e8f07f98e1ce28a?width=1296"
            alt="Afripay"
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Afripay</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">A digital payment platform streamlining financial transactions across Africa.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c5f852dff2f8887b28820e05e22a90591297cd4e?width=1296"
            alt="Limpiar"
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Limpiar</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">A technology-driven marketplace transforming the cleaning services industry.</p>
        </div>
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d7f0d5c805296ff9517a8549ca00390fb984516a?width=1296"
            alt="Funkash Global Properties"
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Funkash Global Properties</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Property development, modernizing real estate operations with tech.</p>
        </div>
      </div>
    </div>

    {/* AI and Drone Development */}
    <div className="mb-20">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 dark:text-white">AI and Drone Development</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/26b595c27fc896ecf4a7aeeded362801969672ea?width=1296"
            alt="Dunes AI"
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Dunes AI</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Pioneering AI and drone solutions for agriculture and logistics.</p>
        </div>
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f1193f7fd5c103b421ec1d4e6b8d49ce8cd21859?width=1296"
            alt="Nanohosting"
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Nanohosting</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Our cloud hosting solution, delivers fast, reliable, and secure hosting services to businesses around the world.</p>
        </div>
      </div>
    </div>

    {/* Non-profit and Social Innovation */}
    <div>
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 dark:text-white">Non-profit and Social Innovation</h2>
      <div className="max-w-[648px]">
        <div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6281dd7a47bb708cc25c0cb4c73939c72d1ea49a?width=1296"
            alt="Afriprize"
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Afriprize</h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">A non-profit gaming platform utilizing gamification for community development and charitable initiatives.</p>
        </div>
      </div>
    </div>
  </div>
</section>

            </div>
            <Footer />
        </div>

    )
}

export default Projects
