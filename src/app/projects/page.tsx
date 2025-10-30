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
    {/* Section Header */}
    <div className="mb-12 lg:mb-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-purple-600" />
        <h2 className="text-base text-gray-700 dark:text-gray-300 lg:text-lg font-light">
          <TextAnimate animation="blurIn" as="span">
            ✦ All Projects
          </TextAnimate>
        </h2>
      </div>

      <h2 className="text-5xl max-w-3xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 dark:text-white">
        <TextAnimate animation="blurIn" as="h2">
          Building tomorrow's solutions today
        </TextAnimate>
      </h2>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {loading ? (
        <div className="col-span-full min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        </div>
      ) : projects.length === 0 ? (
        <div className="col-span-full min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Projects Yet</h3>
            <p className="text-gray-600 dark:text-gray-400">There are no projects to display at the moment.</p>
          </div>
        </div>
      ) : (
        projects.map((project, index) => (
          <div
            key={project._id}
            className={index % 2 === 1 ? 'md:mt-12 lg:mt-20' : ''}
          >
            <ProjectCard project={project} />
          </div>
        ))
      )}
    </div>
  </div>
</section>


            </div>
            <Footer />
        </div>

    )
}

export default Projects
