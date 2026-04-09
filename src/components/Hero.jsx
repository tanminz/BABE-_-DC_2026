import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, 80]);
  const textY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[var(--medical-white)]">
      
      {/* Floating Header */}
      <header className="absolute top-0 w-full z-50 px-6 py-8 flex justify-between items-center text-white pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <span className="font-bold tracking-[0.2em] text-xl drop-shadow-md">BABÉ</span>
          <span className="w-[1px] h-4 bg-white/50 drop-shadow-md"></span>
          <span className="tracking-widest text-sm uppercase drop-shadow-md">Stop AKN</span>
        </div>
        <nav className="hidden md:flex gap-10 text-white/90 text-[10px] tracking-[0.2em] uppercase font-bold pointer-events-auto drop-shadow-md">
          <a href="#products" className="hover:text-[var(--babe-green)] transition-colors">Sản phẩm</a>
          <a href="#technology" className="hover:text-[var(--babe-green)] transition-colors">Công nghệ</a>
          <a href="#scan" className="hover:text-[var(--babe-green)] transition-colors">AI Scan</a>
          <a href="#gallery" className="hover:text-[var(--babe-green)] transition-colors">Hình ảnh</a>
        </nav>
      </header>

      {/* Immersive Cover Image */}
      <motion.div 
        className="absolute inset-0 w-full h-[110%] origin-top"
        style={{ y: imageY, top: '-5%' }}
      >
        <img 
          src="/images/cover_model.jpg" 
          alt="Da thở trong mọi nhịp sống" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Softly blending the image back so it feels cinematic without turning into a solid black box */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--medical-white)] via-black/20 to-black/30"></div>
      </motion.div>

      {/* Hero Typography */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-20 px-4">
        <motion.div style={{ y: textY }}>
          <h1 
            className="text-5xl md:text-7xl lg:text-9xl text-white drop-shadow-2xl"
            style={{ 
              fontFamily: "'UTM Candlescript Pro', cursive",
              fontWeight: 400, 
              lineHeight: 1.2
            }}
          >
            Da thở trong <br/> mọi nhịp sống
          </h1>
        </motion.div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center z-30 pointer-events-none">
         <div className="w-[1px] h-24 bg-white/40 relative overflow-hidden">
           <div className="absolute top-0 w-full h-full bg-white animate-[scan-line_2.5s_ease-in-out_infinite]"></div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
