/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
// import AnimatedButton from './animated-button';
// import { ArrowRight } from 'lucide-react';
import GradualBlur from './GradualBlur';
import { TextAnimate } from './ui/text-animate';
// TypeScript interface for project data
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

// Mock project data
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={project.link}
        className="block flex flex-col-reverse  gap-5 transform transition-all duration-300 hover:scale-[1.02]"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 mb-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </div>

          {/* Services Tags - Slide in on hover */}
          <div className={`absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-2">
          {/* Client Name */}
          <div className="flex items-center gap-2 text-sm">
            <span className='text-white'>✦ </span>
            <span className="font-light text-white">{project.client}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white text-sm lg:text-base leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.techStack && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Hover Arrow Indicator */}
        <div className={`absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-tl-2xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'}`}>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </a>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  return (
    <div className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-12 overflow-hidden" id="projects">
     <div className='w-full h-[1px] mb-5  bg-gray-300 relative'></div>
      <div className="max-w-7xl mx-auto" style={{ height: '100%',overflowY: 'auto',padding: '6rem 2rem' }}>
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-end gap-3 mb-8">

            <div className='flex flex-col items-end w-full'>
              <h1 className="text-base text-white lg:text-lg font-light">

                <TextAnimate animation="blurIn" as="h1">    ✦   Our Projects</TextAnimate>
              </h1>
              <h2 className="text-6xl text-white max-w-3xl text-right lg:text-7xl xl:text-9xl font-medium tracking-tight mb-12 lg:mb-16">
                <TextAnimate animation="blurIn" as="h2"> Our Masterpieces.</TextAnimate>
              </h2>
            </div>

          </div>


        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={index % 2 === 1 ? 'md:mt-12 lg:mt-20' : ''}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-16">
          <AnimatedButton variant='secondary' >
            <span>View More Projects</span>
            <ArrowRight />
          </AnimatedButton>
        </div> */}

      </div>
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  );
};

export default PortfolioSection;