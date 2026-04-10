import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { RefreshCw, Maximize, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AiSkinScan = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  const capture = useCallback(() => {
    if (!cameraActive) {
      setCameraActive(true);
      return;
    }
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setResult({
        score: Math.floor(Math.random() * 30 + 60), 
        levels: {
          oil: Math.floor(Math.random() * 40 + 50),
          acne: Math.floor(Math.random() * 35 + 40),
          hydration: Math.floor(Math.random() * 30 + 40),
          keratinization: Math.floor(Math.random() * 45 + 35)
        }
      });
    }, 4000);
  }, [webcamRef, cameraActive]);

  const reset = () => {
    setImgSrc(null);
    setResult(null);
    setCameraActive(false);
  };

  return (
    <section id="scan" className="py-0 px-4 relative overflow-hidden">
      {/* Background Image positioned extremely to the right */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/scan_bottom.jpg" 
          alt="Scan Background" 
          className="absolute -top-16 md:-top-24 -right-0 w-[160%] lg:w-[55%] h-[130%] object-cover object-[right_top] opacity-90 translate-x-[45%] md:translate-x-[55%] lg:translate-x-[70%] xl:translate-x-[65%]"
          style={{ maskImage: 'linear-gradient(to left, black 65%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 65%, transparent 100%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 backdrop-blur-sm bg-white/80 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[var(--text-muted)] mb-4 block">
            Clinical AI Diagnostics
          </span>
          <h2 
            className="text-4xl md:text-5xl font-normal text-black"
            style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}
          >
            Kiểm tra tình trạng da
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row border border-[#ebebeb] rounded-lg overflow-hidden shadow-sm bg-white">
          
          {/* Minimalist Camera Frame Container */}
          <div className="w-full lg:w-1/2 relative bg-white flex flex-col p-6 md:p-10 order-1 lg:order-none border-t lg:border-t-0 lg:border-r border-[#ebebeb]">
            <div className="flex justify-between text-gray-400 font-mono text-[10px] mb-4 tracking-widest uppercase relative z-20">
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isScanning ? 'bg-[var(--babe-green)] animate-pulse' : 'bg-gray-300'}`}></span>
                {isScanning ? 'Processing Image...' : 'Camera Ready'}
              </span>
              <span>Vision v2.0</span>
            </div>

            <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center min-h-[350px] md:min-h-[450px]">
              
              {!imgSrc ? (
                cameraActive ? (
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="w-full h-full object-cover"
                    videoConstraints={{ facingMode: "user" }}
                  />
                ) : (
                  <img src="/images/d433263fb9f7ec6fc785677e5c255170.jpg" alt="Placeholder" className="w-full h-full object-cover" />
                )
              ) : (
                <img src={imgSrc} alt="User Face" className="w-full h-full object-cover grayscale-[30%] contrast-110" />
              )}

              {/* Minimalist Scanning Overlay */}
              {isScanning && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-30 flex items-center justify-center">
                  
                  {/* Subtle Face Bounding Box */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-3/4 h-3/4 border-[1.5px] border-[var(--babe-green)] rounded-3xl relative"
                  >
                    {/* Scanner Line attached to box */}
                    <motion.div 
                      initial={{ top: '0%' }}
                      animate={{ top: '100%' }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 w-full h-[2px] bg-[var(--babe-green)] shadow-[0_4px_20px_var(--babe-green)]"
                    ></motion.div>
                  </motion.div>
                  
                  {/* Blur effect */}
                  <div className="absolute inset-0 backdrop-blur-[1px] bg-[var(--babe-green)]/5"></div>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center h-14 relative z-20">
              {!imgSrc ? (
                <button 
                  onClick={capture}
                  className="bg-black text-white rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold h-full px-12 hover:bg-[var(--babe-green)] transition-all"
                >
                  {cameraActive ? 'Chụp Ảnh' : 'Bắt đầu Quét'}
                </button>
              ) : (
                <button 
                  onClick={reset}
                  className="flex items-center gap-3 text-gray-500 hover:text-black text-[10px] uppercase tracking-widest font-bold transition-colors h-full px-8 rounded-full border border-gray-200 hover:border-gray-400 bg-white"
                >
                  <RefreshCw size={14} /> Chụp Lại Ảnh
                </button>
              )}
            </div>
          </div>

          {/* Results Panel */}
          <div className="w-full lg:w-1/2 p-8 lg:p-14 bg-white flex flex-col justify-center min-h-[400px] order-2 lg:order-none relative overflow-hidden">
            {/* Mascot in Bottom Right */}
            <img 
              src="/images/mascot.png" 
              alt="Mascot" 
              className="absolute -bottom-16 -right-20 w-40 md:w-48 lg:w-64 h-auto pointer-events-none z-20"
            />
            <AnimatePresence mode='wait'>
              {!result && !isScanning && (
                <motion.div 
                  key="idle"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center mx-auto mb-6">
                    <Maximize className="text-gray-300" size={20} />
                  </div>
                  <p className="text-gray-500 font-normal text-lg mb-2">Canh chuẩn khuôn mặt vào khung hình</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Đảm bảo đủ ánh sáng để kết quả chính xác nhất</p>
                </motion.div>
              )}

              {isScanning && (
                <motion.div 
                  key="scanning"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center w-full"
                >
                  <div className="font-mono text-xs tracking-widest text-gray-500 mb-8 flex flex-col items-center gap-4">
                    <div className="w-6 h-6 border-2 border-gray-200 border-t-[var(--babe-green)] rounded-full animate-spin"></div>
                    ĐANG PHÂN TÍCH...
                  </div>
                  <div className="space-y-4 max-w-xs mx-auto">
                    <div className="h-[2px] w-full bg-gray-100 overflow-hidden"><div className="h-full bg-gray-300 w-full animate-[pulse_1.5s_infinite]"></div></div>
                    <div className="h-[2px] w-full bg-gray-100 overflow-hidden"><div className="h-full bg-gray-300 w-2/3 animate-[pulse_1s_infinite]"></div></div>
                  </div>
                </motion.div>
              )}

              {result && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                  className="w-full"
                >
                  <div className="flex items-center gap-2 mb-8">
                     <CheckCircle2 size={16} className="text-[var(--babe-green)]" />
                     <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--babe-green)] font-bold">Hoàn tất chẩn đoán</h4>
                  </div>
                  
                  <div className="flex items-end gap-6 mb-10 pb-8 border-b border-gray-100">
                    <div className="relative">
                      <span className="text-6xl md:text-7xl font-normal text-black leading-none" style={{ fontFamily: "'SVN-Georgia', serif" }}>{result.score}<span className="text-2xl text-gray-400">%</span></span>
                    </div>
                    <div className="mb-2">
                       <span className="text-sm uppercase tracking-widest font-bold text-gray-800 block mb-1">Mức Độ Tắc Nghẽn</span>
                       <span className="text-[10px] uppercase tracking-widest text-red-500 font-mono">Báo động đỏ</span>
                    </div>
                  </div>

                  <div className="space-y-8 mb-12">
                    <div>
                      <div className="flex justify-between text-xs font-mono uppercase text-gray-500 mb-3">
                        <span>Độ dầu</span>
                        <span className="text-red-500 font-medium">{result.levels.oil}%</span>
                      </div>
                      <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${result.levels.oil}%` }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-red-400"></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono uppercase text-gray-500 mb-3">
                        <span>Tình trạng mụn</span>
                        <span className="text-orange-400 font-medium">{result.levels.acne}%</span>
                      </div>
                      <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${result.levels.acne}%` }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-orange-400"></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono uppercase text-gray-500 mb-3">
                        <span>Độ ẩm</span>
                        <span className="text-blue-400 font-medium">{result.levels.hydration}%</span>
                      </div>
                      <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${result.levels.hydration}%` }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-blue-400"></motion.div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono uppercase text-gray-500 mb-3">
                        <span>Dày sừng</span>
                        <span className="text-yellow-600 font-medium">{result.levels.keratinization}%</span>
                      </div>
                      <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${result.levels.keratinization}%` }} transition={{ duration: 1, delay: 0.8 }} className="h-full bg-yellow-600"></motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full text-center bg-black text-white text-[10px] rounded-full uppercase tracking-widest font-bold py-4 hover:bg-[var(--babe-green)] transition-all shadow-sm">
                    Sử Dụng Bộ Đôi Làm Sạch BABÉ
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiSkinScan;
