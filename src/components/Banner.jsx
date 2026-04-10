import React from 'react';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full px-4 py-8 relative z-20 mt-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* DON'T MISS Text - Behind Banner */}
        <h2 
          className="text-6xl md:text-7xl font-bold text-center text-[var(--babe-green-dark)] opacity-30 relative z-0 -mb-20"
          style={{
            fontFamily: "'SVN-Georgia', Georgia, serif",
            letterSpacing: '0.1em',
            lineHeight: '1.2'
          }}
        >
          DON'T MISS
        </h2>

        {/* Banner Image with Mascots */}
        <div className="relative flex items-center justify-center mb-8 z-20">
          {/* Banner */}
          <div className="relative flex-1">
            <motion.img
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-100px" }}
              src="/images/dc2026-img-5.png"
              alt="Campaign Banner"
              className="w-full h-auto object-cover rounded-lg border-8 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Title 6.6 */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[var(--babe-green-dark)]"
          style={{
            fontFamily: "'SVN-Georgia', Georgia, serif"
          }}
        >
          MEGA LIVESTREAM 6.6
        </h2>

        {/* Two Images Grid - Smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-lg overflow-hidden shadow-lg border-4 border-white max-w-xs md:max-w-sm mx-auto"
          >
            <img
              src="/images/dc2026-img.png"
              alt="DC2026 Image"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-lg overflow-hidden shadow-lg border-4 border-white max-w-xs md:max-w-sm mx-auto"
          >
            <img
              src="/images/dc2026-img-4.png"
              alt="Livestream Image"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Title 15.6 */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[var(--babe-green-dark)]"
          style={{
            fontFamily: "'SVN-Georgia', Georgia, serif"
          }}
        >
          MEGA LIVESTREAM 15.6
        </h2>

        {/* Third Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-lg overflow-hidden shadow-lg border-8 border-white"
        >
          <img
            src="/images/dc2026-img-6.png"
            alt="Livestream 15.6 Image"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
