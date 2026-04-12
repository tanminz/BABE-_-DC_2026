import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SkinHeroBanner() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-0 px-0 bg-white">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden"
        >
          {/* Banner Image */}
          <img 
            src="/images/skin_hero_banner.png" 
            alt="Skin Hero Minigame" 
            className="w-full h-48 md:h-72 lg:h-96 object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent flex flex-col items-start justify-center pl-6 md:pl-16 lg:pl-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 tracking-wide drop-shadow-lg">
                SKIN HERO MINIGAME
              </h3>
              <p className="text-sm md:text-lg lg:text-xl text-[var(--babe-green)] font-semibold mb-6 md:mb-8 drop-shadow-lg">
                Nhận quà liền tay
              </p>
              
              <Link 
                to="/mini-game"
                className="inline-flex items-center justify-center bg-[var(--babe-green)] text-white text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] font-bold py-3 md:py-4 lg:py-5 px-10 md:px-14 lg:px-16 hover:bg-white hover:text-[var(--babe-green)] transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-[var(--babe-green)] hover:border-[var(--babe-green)]"
              >
                Chơi Ngay →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
