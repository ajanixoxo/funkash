"use client";
import React, { useState } from 'react';
import { TextAnimate } from './ui/text-animate';
// import AnimatedButton from './animated-button';
// TypeScript interface for service data
interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

// Services data
const services: Service[] = [
  {
    id: '1',
    number: '01',
    title: 'Technical Infrastructure',
    description: 'We build robust, scalable technical infrastructure that serves as the foundation for innovative applications and platforms.'
  },
  {
    id: '2',
    number: '02',
    title: 'Startup Partnerships',
    description: 'We partner with visionary founders to bring their ideas to life, providing the technical expertise they need to succeed.'
  },
  {
    id: '3',
    number: '03',
    title: 'AI Solutions',
    description: 'We develop AI-powered solutions for complex challenges, making advanced technology accessible to emerging markets.'
  },
  {
    id: '4',
    number: '04',
    title: 'Innovation Platforms',
    description: 'We create innovative platforms that drive economic growth and solve critical problems in emerging markets.'
  },
  {
    id: '5',
    number: '05',
    title: 'Technical Talent',
    description: 'We identify, train, and deploy world-class technical talent to work on challenging problems across our portfolio.'
  },
  {
    id: '6',
    number: '06',
    title: 'Global Expansion',
    description: 'We help companies expand globally, with a particular focus on emerging markets in Africa and Asia.'
  }
];

const ServiceItem: React.FC<{ service: Service; isLast: boolean }> = ({ service, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group py-8 lg:py-12 transition-all duration-300 ${!isLast ? 'border-b border-gray-800' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
        {/* Number */}
        <div className="col-span-2 lg:col-span-1">
          <span className={`text-sm lg:text-base font-light transition-colors duration-300 ${isHovered ? 'text-purple-400' : 'text-gray-500'}`}>
            {service.number}
          </span>
        </div>

        {/* Service Title */}
        <div className="col-span-10 lg:col-span-5">
          <h3 className={`text-2xl lg:text-4xl xl:text-5xl font-medium tracking-tight transition-all duration-300 ${isHovered ? 'text-white translate-x-2' : 'text-gray-300'}`}>
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <p className={`text-base lg:text-lg text-gray-400 leading-relaxed transition-all duration-300 ${isHovered ? 'text-gray-300' : ''}`}>
            {service.description}
          </p>
        </div>
      </div>

      {/* Hover indicator line */}
      <div className={`h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-8 transition-all duration-500 ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className=" text-white py-16 lg:py-24 px-6 lg:px-12" id='services'>
        <div className='w-full h-[1px] mb-5  bg-gray-300 relative'></div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <h1 className="text-base text-white lg:text-lg font-light">
            <TextAnimate animation="blurIn" as="h1"> ✦ Our Services </TextAnimate>
          </h1>
          <p className="text-6xl lg:text-8xl xl:text-9xl font-medium tracking-tight mb-12 lg:mb-16">
        <TextAnimate animation="blurIn" as="p">What We Do</TextAnimate>    
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              isLast={index === services.length - 1}
            />
          ))}
        </div>

        {/* Optional CTA */}
        {/* <div className="mt-16 lg:mt-24 text-center">
          <AnimatedButton variant='secondary' >
            <span>Explore Our Services</span>
            <svg
              className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </AnimatedButton>
        </div> */}

        {/* Decorative Element - Similar to the circular badge in your image */}
       
      </div>
    </section>
  );
};

export default ServicesSection;