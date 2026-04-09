import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Products = () => {
  const { scrollYProgress } = useScroll();
  
  const productY1 = useTransform(scrollYProgress, [0.1, 0.4], [100, -100]);
  const productRotate1 = useTransform(scrollYProgress, [0.1, 0.4], [-5, 5]);

  const productY2 = useTransform(scrollYProgress, [0.2, 0.5], [150, -50]);
  const productRotate2 = useTransform(scrollYProgress, [0.2, 0.5], [10, -5]);

  return (
    <section id="products" className="py-32 px-4 bg-[var(--medical-white)] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
           <h2 
             className="text-5xl md:text-7xl font-light tracking-tighter mb-4"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: 'var(--text-dark)' }}
           >
             sự cân bằng hoàn hảo.
           </h2>
           <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)] max-w-2xl mx-auto font-medium">Bảo vệ & Phục hồi cho làn da mụn</p>
        </div>

        {/* Cinematic Video Integration */}
        <div className="w-full max-w-5xl mx-auto mb-32 rounded-sm overflow-hidden relative" style={{ boxShadow: '0 40px 100px -20px rgba(0,0,0,0.1)' }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto object-cover aspect-video"
          >
            <source src="/videos/babe-action.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-32 lg:gap-16 pb-24 px-4 lg:px-12">
          
          {/* Cleansing Gel */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <motion.div 
              style={{ y: productY1, rotate: productRotate1 }} 
              className="relative w-full max-w-[500px] aspect-square flex justify-center items-center group"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#f2efe9] rounded-full filter blur-[80px] opacity-50 z-0"></div>
              <img 
                src="/images/Bản_sao_của_241004_STOPAKN_CLEASING_CENITAL_01B_fondo_gris-removebg-preview.png" 
                alt="Purifying Cleansing Gel" 
                className="relative z-10 w-3/5 h-auto transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.08))' }}
              />
            </motion.div>
            <div className="mt-4 text-center z-20 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-widest text-[var(--babe-green)] mb-3 font-bold border border-[var(--babe-green)] px-3 py-1 rounded-full">Bước 1</span>
              <h3 className="text-2xl tracking-widest uppercase text-black font-light mb-6">Purifying Cleansing Gel</h3>
              <div className="text-center space-y-1 text-sm text-gray-500 font-light max-w-sm">
                <p>Làm sạch sâu bụi mịn PM 2.5</p>
                <p>Kiểm soát bã nhờn siêu việt</p>
                <p>Chứa BHA & Cytobiol Iris độc quyền</p>
              </div>
            </div>
          </div>

          {/* Control Pads */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:mt-32">
            <motion.div 
              style={{ y: productY2, rotate: productRotate2 }} 
              className="relative w-full max-w-[500px] aspect-square flex justify-center items-center group"
            >
              <img 
                src="/images/241004_STOPAKN_PADS_CENITAL_01_fondo_gris-removebg-preview.png" 
                alt="Oil Control Pads" 
                className="relative z-10 w-3/4 h-auto transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.08))' }}
              />
            </motion.div>
            <div className="mt-4 text-center z-20 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-widest text-[#a8a092] mb-3 font-bold border border-[#a8a092] px-3 py-1 rounded-full">Bước 2</span>
              <h3 className="text-2xl tracking-widest uppercase text-black font-light mb-6">Oil Control Pads</h3>
              <div className="text-center space-y-1 text-sm text-gray-500 font-light max-w-sm">
                <p>Tẩy tế bào chết hóa học AHA/BHA</p>
                <p>Thiết kế 2 mặt dệt đa năng</p>
                <p>Giảm viêm và giải phóng nang lông</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
