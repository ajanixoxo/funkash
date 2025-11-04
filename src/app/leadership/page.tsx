/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React, { useState } from 'react';
import Silk from '@/components/Silk';
// TypeScript interface for leadership pillars
interface LeadershipPillar {
  id: string;
  title: string;
  description: string[];
  icon: string;
}

const leadershipPillars: LeadershipPillar[] = [
  {
    id: '1',
    title: 'Global Perspective',
    description: [
      'With experience building technology across Africa, Asia, and Europe, our leadership brings a unique global perspective to solving problems in emerging markets.',
      'This perspective allows us to identify opportunities and solutions that others might miss, and to build technology that is truly global from day one.'
    ],
    icon: '🌍'
  },
  {
    id: '2',
    title: 'Technical Excellence',
    description: [
      "Our leadership is deeply technical, with a strong background in building and scaling technology platforms. This technical expertise is embedded in everything we do.",
      "We're committed to building technology that is robust, scalable, and innovative, and to sharing our technical knowledge with our partners and portfolio companies."
    ],
    icon: '⚡'
  },
  {
    id: '3',
    title: 'Ecosystem Building',
    description: [
      'We believe that technology ecosystems are key to driving sustainable growth in emerging markets. Our leadership is committed to building these ecosystems.',
      "Through our work with startups, investors, and other stakeholders, we're helping to create the conditions for technological innovation to thrive in emerging markets."
    ],
    icon: '🤝'
  },
  {
    id: '4',
    title: 'Frontier Innovation',
    description: [
      "Our leadership is focused on frontier innovation - pushing the boundaries of what's possible with technology in emerging markets.",
      "From AI and machine learning to blockchain and beyond, we're exploring how cutting-edge technology can be applied to solve critical problems in emerging markets."
    ],
    icon: '🚀'
  }
];

const PillarCard: React.FC<{ pillar: LeadershipPillar; index: number; isLast: boolean }> = ({ pillar, index, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group py-8 lg:py-12 transition-all duration-300 ${!isLast ? 'border-b border-gray-200 dark:border-gray-800' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
        {/* Number */}
        <div className="col-span-2 lg:col-span-1">
          <span className={`text-sm lg:text-base font-light transition-colors duration-300 ${isHovered ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-600'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <div className="col-span-10 lg:col-span-5">
          <h3 className={`text-2xl lg:text-4xl xl:text-5xl font-medium tracking-tight transition-all duration-300 ${isHovered ? 'text-purple-600 dark:text-purple-400 translate-x-2' : 'text-gray-900 dark:text-gray-300'}`}>
            {pillar.title}
          </h3>
        </div>

        {/* Description */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="space-y-4">
            {pillar.description.map((paragraph, idx) => (
              <p key={idx} className={`text-base lg:text-lg leading-relaxed transition-all duration-300 ${isHovered ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Hover indicator line */}
      <div className={`h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-8 transition-all duration-500 ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
    </div>
  );
};

const LeadershipPage: React.FC = () => {
  const [founderHovered, setFounderHovered] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="bg-white dark:bg-gray-950">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-purple-950 via-gray-900 to-blue-950 text-white py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
          {/* Background Pattern */}
          <div className='absolute inset-0 bg-black opacity-70 z-0'>
            <Silk
              speed={5}
              scale={1}
              color="#222946"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-base lg:text-lg font-light text-purple-200">
                Leadership
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-8 leading-tight">
              Leadership
            </h1>

            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto">
              Meet the visionary behind Funkash Technology driving innovation across emerging markets.
            </p>

            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center gap-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
            </div>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white dark:bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-600" />
                <span className="text-base lg:text-lg font-light text-purple-600 dark:text-purple-400">
                  Founder & CEO
                </span>
              </div>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setFounderHovered(true)}
              onMouseLeave={() => setFounderHovered(false)}
            >
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-1 transition-all duration-500 ${founderHovered ? 'shadow-2xl shadow-purple-500/50 scale-[1.02]' : ''
                }`}>
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 lg:p-16">
                  <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Profile Image Placeholder */}
                    <div className="lg:col-span-1">
                      <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
                            {/* Placeholder for profile image */}

                            <img
                              src="/olumide.jpg"
                              alt="Olumide M. Ogunwo (Funkash)"
                              className=" object-cover "
                            />

                          </div>
                        </div>
                        {/* Decorative rings */}
                        <div className="absolute -inset-4 border-2 border-purple-300 dark:border-purple-700 rounded-2xl opacity-20 animate-pulse" />
                        <div className="absolute -inset-8 border-2 border-blue-300 dark:border-blue-700 rounded-2xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
                          Olumide M. Ogunwo
                        </h2>
                        <p className="text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 font-light mb-2">
                          (Funkash)
                        </p>
                      </div>

                      <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />

                      <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        Global technology entrepreneur with <span className="font-semibold text-purple-600 dark:text-purple-400">17+ years</span> building in Africa, Asia, and Europe. Founder of <span className="font-semibold text-purple-600 dark:text-purple-400">Funkash Holdings</span>. Builder of technical teams, ecosystems, and frontier innovation platforms.
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 pt-8">
                        <div className="text-center">
                          <div className="text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                            17+
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                        </div>
                        <div className="text-center border-x border-gray-200 dark:border-gray-800">
                          <div className="text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                            3
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Continents</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                            50+
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION & LEADERSHIP SECTION */}
        <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 lg:mb-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-600" />
                <span className="text-base lg:text-lg font-light text-purple-600 dark:text-purple-400">
                  Vision & Leadership
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-medium text-gray-900 dark:text-gray-100 tracking-tight mb-8 leading-tight">
                Vision & Leadership
              </h2>
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl font-light leading-relaxed">
                How our leadership is driving innovation and impact in emerging markets.
              </p>
            </div>

            {/* Leadership Pillars List */}
            <div className="space-y-0">
              {leadershipPillars.map((pillar, index) => (
                <PillarCard
                  key={pillar.id}
                  pillar={pillar}
                  index={index}
                  isLast={index === leadershipPillars.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl lg:text-5xl xl:text-6xl font-semibold tracking-tight mb-8 leading-tight">
              Ready to build the future together?
            </h3>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Join us in transforming emerging markets through technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-10 py-5 bg-white text-gray-900 font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span>Get In Touch</span>
                <svg className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-10 py-5 border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>


      </div>
      <Footer />
    </div>

  );
};

export default LeadershipPage;