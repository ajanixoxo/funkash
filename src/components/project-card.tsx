/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import React from 'react';

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




const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative mb-8 lg:mb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={project.link}
        className="block transform transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 mb-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </div>

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

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="font-light">{project.client}</span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed line-clamp-2">
            {project.description}
          </p>

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

        <div className={`absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-tl-2xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'}`}>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;