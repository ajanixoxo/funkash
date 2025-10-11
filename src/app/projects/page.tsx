/* eslint-disable react/no-unescaped-entities */
import CircularGallery from '@/components/CircularGallery'
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ProjectCard from '@/components/project-card'
import React from 'react'
import SplitText from '@/components/SplitText';
import { TextAnimate } from '@/components/ui/text-animate';
interface Project {
    id: string;
    title: string;
    client: string;
    description: string;
    services: string[];
    image: string;
    link: string;
    techStack?: string[];
}

function Projects() {

    const projects: Project[] = [
        {
            id: '1',
            title: 'AI Chatbot Platform',
            client: 'TechFlow Solutions',
            description: 'Intelligent conversational AI platform for customer support automation',
            services: ['Branding', 'Website', 'UI/UX Design'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
            link: '/projects/ai-chatbot',
            techStack: ['React', 'Node.js', 'OpenAI', 'MongoDB']
        },
        {
            id: '2',
            title: 'E-Commerce Marketplace',
            client: 'ShopHub',
            description: 'Modern multi-vendor marketplace with real-time inventory management',
            services: ['Website', 'UI/UX Design', 'Backend Development'],
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
            link: '/projects/ecommerce',
            techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe']
        },
        {
            id: '3',
            title: 'HealthTech Dashboard',
            client: 'MediCare Pro',
            description: 'Comprehensive patient management system with analytics and reporting',
            services: ['Branding', 'Web App', 'Data Visualization'],
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
            link: '/projects/healthtech',
            techStack: ['React', 'D3.js', 'Python', 'AWS']
        },
        {
            id: '4',
            title: 'Fintech Mobile App',
            client: 'PayFlow',
            description: 'Secure payment processing and financial management mobile application',
            services: ['Mobile App', 'UI/UX Design', 'Branding'],
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
            link: '/projects/fintech',
            techStack: ['React Native', 'Node.js', 'Redis', 'Blockchain']
        },
        {
            id: '5',
            title: 'Travel Booking Platform',
            client: 'WanderLust',
            description: 'Seamless travel planning and booking experience with AI recommendations',
            services: ['Website', 'Branding', 'Content Strategy'],
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
            link: '/projects/travel',
            techStack: ['Vue.js', 'Firebase', 'Google Maps API']
        },
        {
            id: '6',
            title: 'EdTech Learning Portal',
            client: 'BrightMinds',
            description: 'Interactive online learning platform with gamification features',
            services: ['Web App', 'UI/UX Design', 'LMS Development'],
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
            link: '/projects/edtech',
            techStack: ['Angular', 'Django', 'WebRTC', 'MySQL']
        }
    ];

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
                <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white dark:bg-gray-950">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="mb-12 lg:mb-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 rounded-full bg-purple-600" />
                                <h2 className="text-base text-white lg:text-lg font-light">
                                    <TextAnimate animation="blurIn"       as="h1">
                                        ✦ All Projects
                                    </TextAnimate>
                                </h2>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                                <h2 className="text-5xl  max-w-3xl t lg:text-7xl xl:text-7xl font-medium tracking-tight mb-12 lg:mb-16">
                                    <TextAnimate animation="blurIn" as="h2">
                                        Building tomorrow's solutions today
                                    </TextAnimate>
                                </h2>

                               
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={index % 2 === 1 ? 'md:mt-12 lg:mt-20' : ''}
                                >
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>

                        {/* Load More */}
                    
                    </div>
                </section>


            </div>
            <Footer />
        </div>

    )
}

export default Projects