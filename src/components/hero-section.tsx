import React from 'react'
// import Beams from './Beams';
import AnimatedButton from './animated-button';
import SplitText from "./SplitText";
// import ScrollVelocity from './ScrollVelocity';
import Silk from './Silk';
import CurvedLoop from './CurvedLoop';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


function HeroSection() {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center w-full" style={{ width: '100%', position: 'relative' }} id='home'>
      <div className='absolute inset-0 bg-black opacity-70 z-0'>
        <Silk
          speed={5}
          scale={1}
          color="#222946"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative flex flex-col items-center justify-center w-full z-10 px-6">
      

        <h1 className="text-5xl text-white md:max-w-6xl md:text-8xl font-bold leading-tight mb-4">
          <SplitText
            text="We build, partner, and launch with visionaries."

            delay={50}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />


        </h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}

          className="text-gray-300 text-lg mb-8">
          Funkash collaborates with startups and founders to deliver scalable, production-grade technology — from concept to growth.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}

          className="flex flex-wrap justify-center gap-4">
          <AnimatedButton >
          <a href="#projects"className='w-full'>See Our Work</a>  
          </AnimatedButton>
          <AnimatedButton variant="outline" className="!border-white !text-white hover:bg-white hover:text-[#222946]">
          <a href="#contact" className='w-full'> Let’s Talk</a>   
          </AnimatedButton>
        </motion.div>


      </div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className='absolute bottom-25 w-full flex justify-center'>
        {/* <ScrollVelocity
          texts={['Built-In Execution • Strategic Advantage • Compounding Value']}
          velocity={100}
          className="custom-scroll-text text-white"
        /> */}
        <CurvedLoop
          marqueeText="Built-In Execution ✦ Strategic Advantage ✦ Compounding Value✦"
          speed={2}
          curveAmount={200}
          direction="right"
          interactive={true}
          className="custom-text-style text-7xl"
        />
      </motion.div>

    </div>
  )
}

export default HeroSection