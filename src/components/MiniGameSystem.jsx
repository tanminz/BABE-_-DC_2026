import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MiniGameSystem = () => {
  const [currentStage, setCurrentStage] = useState('start'); // start, round1, round2, round3

  return (
    <section id="game" className="py-24 px-4 bg-[var(--medical-white)] relative border-t border-gray-100">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[var(--text-muted)] mb-3 block">Interactive Challenge</span>
          <h3 
             className="text-4xl md:text-5xl font-normal text-black mb-4"
             style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}
          >
            Giải phóng làn da
          </h3>
        </div>

        <div className="w-full max-w-6xl mx-auto md:min-h-[500px] bg-white rounded-none border border-[#e5e5e5] flex relative overflow-hidden shadow-2xl">
          
          <AnimatePresence mode='wait'>
            {currentStage === 'start' && (
              <motion.div 
                key="start"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col md:flex-row items-stretch bg-white"
              >
                {/* Left side info */}
                <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[#e5e5e5] p-8 md:p-12 flex flex-col justify-center bg-[#fafafa] z-20">
                   <span className="text-[10px] uppercase tracking-widest text-[var(--babe-green)] mb-6 font-bold border border-[var(--babe-green)] px-3 py-1 rounded inline-block w-max">Khởi động</span>
                   <h4 className="text-2xl font-light uppercase tracking-widest mb-4">Nhiệm Vụ</h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed mb-12">
                     Điều khiển các hoạt chất để giải cứu gốc nang lông khỏi bụi bẩn PM2.5 và dầu thừa. Hoàn thành 3 vòng để kích hoạt màng bảo vệ vô hình.
                   </p>
                   <button 
                     onClick={() => setCurrentStage('round1')}
                     className="bg-black text-white text-[10px] uppercase tracking-[0.2em] font-bold py-5 px-8 hover:bg-[var(--babe-green)] transition-colors w-full text-center shadow-lg"
                   >
                     Vào Trận Ngay
                   </button>
                </div>

                {/* Right side Visual - BIG MASCOT */}
                <div className="w-full md:w-2/3 flex items-center justify-center p-8 bg-white relative overflow-hidden">
                   {/* Clean Grid pattern */}
                   <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                   
                   <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-[1px] border-[var(--babe-green)] scale-[0.6] opacity-20 animate-[ping_4s_ease-out_infinite]"></div>
                      <div className="absolute inset-0 rounded-full border-[1px] border-[var(--babe-green)] scale-[0.8] opacity-10 animate-[ping_6s_ease-out_infinite]"></div>
                      
                      <motion.img 
                        initial={{ y: 20 }}
                        animate={{ y: -20 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "reverse" }}
                        src="/images/mascot.png" 
                        alt="Mascot" 
                        className="w-[300px] md:w-[450px] lg:w-[500px] h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(89,178,138,0.3)] relative z-20" 
                      />
                   </div>
                   
                   {/* Data points */}
                   <div className="absolute right-8 top-8 font-mono text-[10px] text-gray-300 text-right uppercase z-30">
                     <div className="text-[var(--babe-green)]">System: Online</div>
                     <div>Target: Clogged Pores</div>
                     <div>Difficulty: Auto-Adjusting</div>
                   </div>
                </div>
              </motion.div>
            )}

            {/* KEEPING ROUND 1, 2, 3 the same as they were already tech-styled, just tweaked border and padding */}
            {currentStage === 'round1' && (
              <motion.div 
                key="round1"
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col bg-black text-white p-8"
              >
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="font-mono text-xs uppercase tracking-widest text-[var(--babe-green)]">Mission 1 // Escape</div>
                  <div className="font-mono text-xs uppercase tracking-widest">Score <span className="text-white">00450</span></div>
                </div>

                <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex justify-center items-end" style={{ perspective: '800px' }}>
                    <div className="w-[200%] h-[150%] border-x border-[var(--babe-green)]/20" style={{ transform: 'rotateX(75deg)' }}>
                      {Array.from({length: 10}).map((_, i) => (
                        <div key={i} className="w-full border-t border-[var(--babe-green)]/20" style={{ height: '10%' }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="w-16 h-16 border border-[var(--babe-green)] bg-[var(--babe-green)]/10 rounded-sm animate-pulse z-10 shadow-[0_0_30px_var(--babe-green)] flex items-center justify-center">
                    <span className="text-[8px] font-mono text-[var(--babe-green)]">PLAYER</span>
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentStage('round2')}
                  className="mt-4 border border-[var(--babe-green)]/30 text-[var(--babe-green)] text-[10px] uppercase tracking-[0.2em] font-bold py-5 hover:bg-[var(--babe-green)] hover:text-white hover:border-[var(--babe-green)] transition-all w-full text-center"
                >
                  Xác nhận hoàn thành &rarr;
                </button>
              </motion.div>
            )}

            {currentStage === 'round2' && (
              <motion.div 
                key="round2"
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col bg-white p-8"
              >
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div className="font-mono text-xs uppercase tracking-widest text-[var(--babe-green)]">Mission 2 // Logic Maze</div>
                  <div className="flex gap-2">
                    <span className="text-[10px] uppercase font-bold text-[var(--babe-green)] border border-[var(--babe-green)]/30 px-3 py-1">Clean Bomb [1]</span>
                  </div>
                </div>

                <div className="flex-1 relative flex items-center justify-center py-8">
                  {/* Clean Grid maze with green highlights */}
                  <div className="w-full max-w-md aspect-square grid grid-cols-4 grid-rows-4 gap-2 bg-gray-50 border border-gray-100 p-2">
                    {Array.from({length: 16}).map((_, i) => (
                      <div 
                        key={i} 
                        className={`bg-white border border-gray-100 shadow-sm flex items-center justify-center font-mono text-[10px] text-gray-300
                        ${i === 5 ? 'bg-orange-50 border-orange-200 text-orange-400' : ''} 
                        ${i === 10 ? 'bg-[var(--babe-green)] text-white shadow-lg animate-pulse border-transparent' : ''}`}
                      >
                        {i === 10 ? 'YOU' : i === 5 ? 'DIRT' : '01'}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentStage('round3')}
                  className="mt-4 border border-[var(--text-dark)] bg-white text-[var(--text-dark)] text-[10px] uppercase tracking-[0.2em] font-bold py-5 hover:bg-[var(--text-dark)] hover:text-white transition-all w-full text-center"
                >
                  Xác nhận hoàn thành &rarr;
                </button>
              </motion.div>
            )}

            {currentStage === 'round3' && (
              <motion.div 
                key="round3"
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col bg-black text-white p-8"
              >
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#ff4b4b] animate-pulse">Critical: Boss Area</div>
                  <div className="w-48 h-1 bg-white/10"><div className="h-full w-1/4 bg-[#ff4b4b] shadow-[0_0_10px_#ff4b4b]"></div></div>
                </div>

                <div className="flex-1 relative flex flex-col items-center justify-center py-8">
                  <div className="relative w-56 h-56 border-2 border-[#ff4b4b] flex flex-col gap-2 items-center justify-center text-[#ff4b4b] font-mono text-sm tracking-widest bg-black/50 shadow-[0_0_80px_rgba(255,75,75,0.15)] z-20 backdrop-blur-sm">
                    <span className="text-2xl">[ ACNE KING ]</span>
                    <span className="text-[10px] text-gray-500">HP: 250,000</span>
                    <div className="absolute -inset-8 border border-[#ff4b4b]/30 rounded-full border-dashed animate-[spin_8s_linear_infinite]"></div>
                    <div className="absolute -inset-16 border border-[var(--babe-green)]/20 animate-[spin_12s_linear_infinite_reverse]"></div>
                  </div>
                  
                  {/* Huge laser attack mockup */}
                  <div className="absolute bottom-10 w-[2px] h-32 bg-[var(--babe-green)] opacity-50 blur-[2px] animate-pulse"></div>

                  <p className="mt-20 text-[10px] uppercase tracking-widest text-[var(--babe-green)] font-mono text-center">
                    Initiating Combo Attack...<br/>
                    Deploying Purifying Gel Core
                  </p>
                </div>

                <button 
                  onClick={() => setCurrentStage('start')}
                  className="mt-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold py-5 hover:bg-[var(--babe-green)] hover:text-white transition-colors w-full text-center shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Terminate Boss
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MiniGameSystem;
