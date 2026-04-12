import React from 'react';
import { motion } from 'framer-motion';

export default function UniversityBooth() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center order-2 md:order-1"
          >
            <img 
              src="/images/university_booth.png" 
              alt="University Booth Tour" 
              className="w-full max-w-sm md:max-w-md h-auto object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[var(--babe-green)] mb-3 block">Campus Tour</span>
              <h3 
                className="text-3xl md:text-4xl font-normal text-black mb-4"
                style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}
              >
                University Booth Tour
              </h3>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
              Diễn ra nối tiếp ở các trường Đại Học ở Thành phố Hồ Chí Minh, Đà Nẵng và Hà Nội bắt đầu từ tháng 5
            </p>

            <div className="mt-8 flex gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--babe-green)] mt-2"></div>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold">Tìm hiểu thêm tại gian hàng Babé</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
