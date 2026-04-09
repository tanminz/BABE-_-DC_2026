import React from 'react';
import { motion } from 'framer-motion';

const TechnologyVideo = () => {
  return (
    <section id="technology" className="relative py-24 px-4 border-t border-gray-100 bg-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/pad_bg.jpg" 
          alt="Technology Background" 
          className="absolute top-1/2 -translate-y-1/2 -right-32 md:-right-4 lg:-right-0 w-[90%] md:w-[50%] h-[110%] object-contain object-right opacity-100 mix-blend-multiply"
        />
        {/* Gradients to gently fade the image towards the center for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/60 to-white/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[var(--babe-green)] mb-4 block">Advanced Tech</span>
          <h2 
            className="text-4xl md:text-5xl font-normal text-black"
            style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}
          >
            Công nghệ Action 360
          </h2>
        </div>

        {/* Cinematic Video Integration Without Borders */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mx-auto overflow-hidden shadow-2xl relative bg-black"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto object-cover aspect-video opacity-95"
          >
            <source src="/videos/babe-action.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient to blend video edges */}
          <div className="absolute inset-0 border border-black/10 pointer-events-none"></div>
        </motion.div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto px-4">
          <p className="text-sm tracking-widest leading-relaxed text-gray-500 uppercase">
            Cơ chế tạo bọt Micellar kết hợp tẩy tế bào chết hóa học gỡ rối tận sâu vi nang lông, tiêu diệt sự kìm kẹp của bụi mịn công nghiệp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologyVideo;
