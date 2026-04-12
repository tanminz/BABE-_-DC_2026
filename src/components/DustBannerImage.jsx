import React from 'react';
import { motion } from 'framer-motion';

export default function DustBannerImage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full relative z-20"
    >
      <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden">
        {/* Banner Image */}
        <img
          src="/images/cover_model_new.png"
          alt="Bụi PM2.5 Banner"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 via-[var(--babe-green)]/40 to-black/60">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center px-4 drop-shadow-2xl font-bold"
            style={{
              fontFamily: "'SVN-Georgia', Georgia, serif",
              letterSpacing: '0.05em',
              lineHeight: '1.4',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
            }}
          >
            Đừng lo, hè này<br />
            có Babé lo!<br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl block mt-2">Vô vàn sự kiện hấp dẫn đang chờ đón!</span>
          </h2>
        </div>
      </div>
    </motion.section>
  );
}
