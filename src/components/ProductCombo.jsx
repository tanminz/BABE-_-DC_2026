import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProductCombo = () => {
  return (
    <section id="products" className="py-24 md:py-32 px-4 relative bg-transparent overflow-hidden">
      
      {/* Giant Background Text watermark */}
      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-10">
         <span className="text-[12vw] font-black tracking-tighter text-black uppercase leading-none whitespace-nowrap">
           COMBO BABE
         </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 lg:mb-24">
           <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--babe-green)] mb-4 block">Hè này, để Babé</span>
           <h2 
             className="text-4xl md:text-6xl font-normal text-black mb-6"
             style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}
           >
             Cấp cứu làn da mụn
           </h2>
           <p className="text-sm uppercase tracking-[0.1em] text-gray-600 max-w-2xl mx-auto font-medium shadow-sm">Bộ đôi làm sạch sâu & Giải phóng nang lông PM2.5</p>
        </div>

        {/* Clean, perfectly sized grid with overlapping glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative px-4 max-w-5xl mx-auto">
          
          {/* Cleansing Gel */}
          <div className="w-full flex flex-col items-center">
            
            {/* Pill Tags loosely floating on top */}
            <div className="flex gap-2 w-full max-w-[400px] mb-[-20px] relative z-20 px-2 pl-4">
              <span className="bg-white/80 backdrop-blur-md border border-white text-gray-600 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Deep Cleanse</span>
              <span className="bg-gray-200/50 backdrop-blur-md border border-gray-100 text-gray-500 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Comfort</span>
              <span className="bg-gray-200/50 backdrop-blur-md border border-gray-100 text-gray-500 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Care</span>
            </div>

            <div className="w-full max-w-[400px] h-[550px] relative rounded-3xl overflow-hidden shadow-2xl border border-white group bg-white">
              {/* Background extension */}
              <img 
                src="/images/1.webp" 
                alt="" 
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-80"
              />
              {/* Product Image Shifted Up */}
              <img 
                src="/images/1.webp" 
                alt="Purifying Cleansing Gel" 
                className="absolute top-0 left-0 w-full h-[85%] object-contain object-top p-6 pb-0 transition-transform duration-1000 ease-out group-hover:scale-105 z-10"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              />
              
              {/* Glassmorphism Product Card at bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/80 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 mb-1 block">( Oily Skin )</span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                      Purifying Cleansing <br/> Gel BABÉ
                    </h3>
                  </div>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-black hover:bg-[var(--babe-green)] hover:text-white transition-colors flex-shrink-0">
                    <ArrowUpRight strokeWidth={2.5} size={20} />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  {/* Removed Price as requested */}
                  <button className="w-full border border-gray-300 bg-white/50 text-gray-800 hover:border-black hover:text-white hover:bg-black font-semibold text-xs px-5 py-3 rounded-full transition-all backdrop-blur-sm">
                    Khám phá ngay
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Control Pads */}
          <div className="w-full flex flex-col items-center">
            
            {/* Pill Tags loosely floating on top */}
            <div className="flex gap-2 w-full max-w-[400px] mb-[-20px] relative z-20 px-2 pl-4">
              <span className="bg-white/80 backdrop-blur-md border border-white text-gray-600 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Exfoliate</span>
              <span className="bg-gray-200/50 backdrop-blur-md border border-gray-100 text-gray-500 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Comfort</span>
              <span className="bg-gray-200/50 backdrop-blur-md border border-gray-100 text-gray-500 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Care</span>
            </div>

            <div className="w-full max-w-[400px] h-[550px] relative rounded-3xl overflow-hidden shadow-2xl border border-white group bg-white">
              {/* Background extension */}
              <img 
                src="/images/2.jpg" 
                alt="" 
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-80"
              />
              {/* Product Image Shifted Up */}
              <img 
                src="/images/2.jpg" 
                alt="Oil Control Pads" 
                className="absolute top-0 left-0 w-full h-[85%] object-contain object-top p-6 pb-0 transition-transform duration-1000 ease-out group-hover:scale-105 z-10"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              />
              
              {/* Glassmorphism Product Card at bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/80 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 mb-1 block">( Acne Care )</span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                      AHA/BHA Oil Control <br/> Pads BABÉ
                    </h3>
                  </div>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-black hover:bg-[var(--babe-green)] hover:text-white transition-colors flex-shrink-0">
                    <ArrowUpRight strokeWidth={2.5} size={20} />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  {/* Removed Price as requested */}
                  <button className="w-full border border-gray-300 bg-white/50 text-gray-800 hover:border-black hover:text-white hover:bg-black font-semibold text-xs px-5 py-3 rounded-full transition-all backdrop-blur-sm">
                    Khám phá ngay
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductCombo;
