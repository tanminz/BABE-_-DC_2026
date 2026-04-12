import React from 'react';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full py-16 md:py-24 relative z-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Banner Image with Mascots */}
        <div className="relative flex items-center justify-center mb-12 md:mb-16 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            <img
              src="/images/dc2026-img-5.png"
              alt="Campaign Banner"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Title 6.6 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold text-center text-[var(--babe-green-dark)]"
            style={{ fontFamily: "'SVN-Georgia', Georgia, serif" }}
          >
            MEGA LIVESTREAM 6.6
          </h2>
        </motion.div>

        {/* Two Images Grid - Professional Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
          >
            <img
              src="/images/dc2026-img.png"
              alt="DC2026 Image"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
          >
            <img
              src="/images/dc2026-img-4.png"
              alt="Livestream Image"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Title 15.6 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold text-center text-[var(--babe-green-dark)]"
            style={{ fontFamily: "'SVN-Georgia', Georgia, serif" }}
          >
            MEGA LIVESTREAM 15.6
          </h2>
        </motion.div>

        {/* Third Image - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow"
        >
          <img
            src="/images/dc2026-img-6.png"
            alt="Livestream 15.6 Image"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
