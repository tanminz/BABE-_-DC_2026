import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, 40]);
  const textY = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* Immersive Cover Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <img 
          src="/images/cover_hero_new.png" 
          alt="Da thở trong mọi nhịp sống" 
          className="w-full h-full object-cover object-center"
        />
        {/* Softly blending the image back so it feels cinematic without turning into a solid black box */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--medical-white)] via-black/20 to-black/30"></div>
      </motion.div>

      {/* Hero Typography */}
      <div className="relative z-20 flex items-center justify-center text-center px-3 sm:px-6 w-full">
        <motion.div style={{ y: textY }}>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white drop-shadow-2xl leading-tight"
            style={{ 
              fontFamily: "'UTM Candlescript Pro', cursive",
              fontWeight: 400,
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
            }}
          >
            Da thở trong <br/> mọi nhịp sống
          </h1>
        </motion.div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 w-full flex justify-center z-30 pointer-events-none">
         <div className="w-[1px] h-10 sm:h-16 md:h-24 bg-white/40 relative overflow-hidden">
           <div className="absolute top-0 w-full h-full bg-white animate-[scan-line_2.5s_ease-in-out_infinite]"></div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
