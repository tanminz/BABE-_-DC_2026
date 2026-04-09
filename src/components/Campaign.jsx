import React from 'react';
import { motion } from 'framer-motion';

const Campaign = () => {
  return (
    <section id="campaign" className="py-32 px-4 bg-[#f8f9fa] relative border-t border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="mb-16 uppercase tracking-[0.3em] text-xs font-bold text-[var(--babe-green)]">
          CÂU CHUYỆN CHIẾN DỊCH
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light leading-tight mb-12 text-[#2d3748]"
        >
          Khói bụi đô thị & PM2.5 không chỉ làm bẩn bề mặt, <br className="hidden md:block"/>
          chúng đang <span className="font-bold italic">rút cạn không khí</span> của làn da bạn.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left">
          
          <div className="border-l border-[var(--babe-green)] pl-6">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Urban Heat</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Nhiệt độ bức xạ từ mặt đường và bêtông kích thích bã nhờn sinh sôi không kiểm soát, tạo lớp màng bí bách.
            </p>
          </div>

          <div className="border-l border-[var(--babe-green)] pl-6">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">PM 2.5 Clogging</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Bụi mịn với kích thước siêu nhỏ dễ dàng xuyên thủng phòng tuyến, mắc kẹt sâu trong nang lông gây viêm nhiễm.
            </p>
          </div>

          <div className="border-l border-[var(--babe-green)] pl-6">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Breathe Again</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Hàng rào bảo vệ vững chắc và không gian nang lông thông thoáng chính là "buồng phổi" để làn da hồi sinh.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Campaign;
