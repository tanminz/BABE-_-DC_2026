import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, X, CheckCircle2 } from 'lucide-react';

const MiniGameSystem = () => {
  const [currentStage, setCurrentStage] = useState('start'); // start, round1, round2, round3
  const [selectedCharacter, setSelectedCharacter] = useState(1); // 1 or 2
  const [showGameRegisterModal, setShowGameRegisterModal] = useState(false);
  const [gameEmail, setGameEmail] = useState('');
  const [gameEmailSubmitted, setGameEmailSubmitted] = useState(false);
  const [showRoundRulesModal, setShowRoundRulesModal] = useState(null); // null, 'round1', 'round2', 'round3'

  // Dữ liệu leaderboard - các thành viên và điểm của họ
  const [leaderboard] = useState([
    { id: 1, name: 'Tô Tùng Khôi', score: 12500, rank: 1 },
    { id: 2, name: 'Võ Linh Lam', score: 11200, rank: 2 },
    { id: 3, name: 'Nguyễn Minh Huy', score: 10800, rank: 3 },
    { id: 4, name: 'Trần Anh Kiên', score: 9500, rank: 4 },
    { id: 5, name: 'Phạm Duy Nam', score: 8900, rank: 5 },
    { id: 6, name: 'Hoàng Long Vũ', score: 7800, rank: 6 },
    { id: 7, name: 'Lê Hà Phương', score: 7200, rank: 7 },
    { id: 8, name: 'Đặng Hồng Vy', score: 6500, rank: 8 },
  ]);

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

        {/* ROUNDS INTRODUCTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {/* Round 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => setShowRoundRulesModal('round1')}
            className="relative group overflow-hidden rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="relative w-full h-64 overflow-hidden bg-gray-100">
              <img 
                src="/images/round1.jpg" 
                alt="Vòng 1" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-bold mb-1">Vòng 1</h4>
              <p className="text-sm text-gray-200" style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}>Dầu 0 rầu</p>
            </div>
          </motion.div>

          {/* Round 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => setShowRoundRulesModal('round2')}
            className="relative group overflow-hidden rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="relative w-full h-64 overflow-hidden bg-gray-100">
              <img 
                src="/images/round2.jpg" 
                alt="Vòng 2" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-bold mb-1">Vòng 2</h4>
              <p className="text-sm text-gray-200" style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}>Húc bụi</p>
            </div>
          </motion.div>

          {/* Round 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => setShowRoundRulesModal('round3')}
            className="relative group overflow-hidden rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="relative w-full h-64 overflow-hidden bg-gray-100">
              <img 
                src="/images/round3.png" 
                alt="Vòng 3" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-bold mb-1">Vòng 3</h4>
              <p className="text-sm text-gray-200" style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}>Gặp mụn là trụng</p>
            </div>
          </motion.div>
        </div>

        <div className="w-full max-w-6xl mx-auto bg-white rounded-none border border-[#e5e5e5] flex relative overflow-hidden shadow-2xl min-h-[600px] md:min-h-[500px]">
          
          <AnimatePresence mode='wait'>
            {currentStage === 'start' && (
              <motion.div 
                key="start"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col md:flex-row items-stretch bg-white w-full"
              >
                {/* Left side info */}
                <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[#e5e5e5] p-6 md:p-12 flex flex-col justify-center bg-[#fafafa] z-20">
                   <span className="text-[9px] uppercase tracking-widest text-[var(--babe-green)] mb-4 md:mb-6 font-bold border border-[var(--babe-green)] px-3 py-1 rounded inline-block w-max">Khởi động</span>
                   <h4 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-3 md:mb-4">Nhiệm Vụ</h4>
                   <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed mb-6 md:mb-12">
                     Người chơi chọn 1 trong 2 nhân vật Babé và sẽ đi qua 3 vòng thử thách với cách chơi khác nhau tương ứng với 3 con quái vật lần lượt là: oil monster (dầu), dirt monster (bụi) và acne monster (mụn). Xuyên suốt 3 vòng, người chơi sẽ nhặt được các tính năng cũng như sản phẩm và sẽ thắng khi hoàn thành cả 3 vòng
                   </p>
                   <button 
                     onClick={() => setShowGameRegisterModal(true)}
                     className="bg-black text-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold py-3 md:py-5 px-6 md:px-8 hover:bg-[var(--babe-green)] transition-colors w-full text-center shadow-lg"
                   >
                     Vào Trận Ngay
                   </button>
                </div>

                {/* Right side Visual - CHARACTER SELECTION */}
                <div className="w-full md:w-2/3 flex items-center justify-center p-4 md:p-8 bg-white relative overflow-hidden">
                   {/* Clean Grid pattern */}
                   <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                   
                   <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-[1px] border-[var(--babe-green)] scale-[0.6] opacity-20 animate-[ping_4s_ease-out_infinite]"></div>
                      <div className="absolute inset-0 rounded-full border-[1px] border-[var(--babe-green)] scale-[0.8] opacity-10 animate-[ping_6s_ease-out_infinite]"></div>
                      
                      {/* Character Selection */}
                      <div className="mb-3 md:mb-6">
                        <p className="text-xs text-gray-400 font-mono uppercase tracking-widest text-center mb-2 md:mb-4">Chọn nhân vật</p>
                        <div className="flex gap-2 md:gap-4 items-center justify-center">
                          {/* Character 1 */}
                          <motion.button
                            onClick={() => setSelectedCharacter(1)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative transition-all ${selectedCharacter === 1 ? 'ring-2 ring-[var(--babe-green)]' : 'opacity-50 hover:opacity-75'}`}
                          >
                            <img 
                              src="/images/character1.png" 
                              alt="Character 1" 
                              className="w-[80px] md:w-[120px] h-auto object-contain drop-shadow-lg" 
                            />
                          </motion.button>
                          
                          {/* Character 2 */}
                          <motion.button
                            onClick={() => setSelectedCharacter(2)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative transition-all ${selectedCharacter === 2 ? 'ring-2 ring-[var(--babe-green)]' : 'opacity-50 hover:opacity-75'}`}
                          >
                            <img 
                              src="/images/character2.png" 
                              alt="Character 2" 
                              className="w-[80px] md:w-[120px] h-auto object-contain drop-shadow-lg" 
                            />
                          </motion.button>
                        </div>
                      </div>
                      
                      {/* Selected Character Display */}
                      <motion.div
                        key={selectedCharacter}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex-1 flex items-center justify-center min-h-0"
                      >
                        <img 
                          src={selectedCharacter === 1 ? "/images/character1.png" : "/images/character2.png"} 
                          alt={`Character ${selectedCharacter}`} 
                          className="w-[120px] md:w-[280px] h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(89,178,138,0.3)]" 
                        />
                      </motion.div>
                   </div>
                   
                   {/* Data points */}
                   <div className="absolute right-4 md:right-8 top-4 md:top-8 font-mono text-[8px] md:text-[10px] text-gray-300 text-right uppercase z-30">
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

        {/* LEADERBOARD SECTION */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-[var(--babe-green)]" />
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-[var(--text-muted)]">Top Players</span>
              <Trophy className="w-6 h-6 text-[var(--babe-green)]" />
            </div>
            <h4 
              className="text-3xl md:text-4xl font-normal text-black"
              style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}
            >
              Điểm Số Các Thành Viên
            </h4>
          </div>

          {/* Leaderboard Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-gradient-to-br from-[#1a4d2e] to-[#0f3d1f] rounded-3xl border-4 border-[#71ac48] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#71ac48] via-[#71ac48] to-[#5a9138] px-6 py-4 border-b-4 border-[#71ac48] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#71ac48] px-8 py-2 rounded-full">
                <h5 className="text-[#0f3d1f] font-bold text-center text-lg uppercase tracking-wider">SKIN HERO LEADERBOARD</h5>
              </div>
              <div className="h-6"></div>
            </div>

            {/* Leaderboard Rows */}
            <div className="space-y-2 p-4">
              {leaderboard.map((player, index) => {
                const starCount = Math.max(1, 6 - player.rank); // 5 stars for rank 1, 4 for rank 2, etc.
                const getRankDisplay = (rank) => {
                  if (rank === 1) return '①';
                  if (rank === 2) return '②';
                  if (rank === 3) return '③';
                  return rank;
                };

                return (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 px-5 py-3 rounded-xl bg-[#2d5a3d]/60 border-2 border-[#71ac48]/40 hover:bg-[#2d5a3d]/80 hover:border-[#71ac48]/70 transition-all"
                  >
                    {/* Rank with Medal Icon */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#71ac48] text-[#0f3d1f] font-bold text-lg min-w-fit">
                      {player.rank === 1 && '🥇'}
                      {player.rank === 2 && '🥈'}
                      {player.rank === 3 && '🥉'}
                      {player.rank > 3 && player.rank}
                    </div>

                    {/* Avatar Placeholder */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80">
                      <span className="text-lg">👤</span>
                    </div>

                    {/* Player Name */}
                    <div className="flex-1 text-white font-medium text-sm truncate min-w-0">
                      {player.name}
                    </div>

                    {/* Stars Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < starCount
                              ? 'text-[#71ac48]'
                              : 'text-gray-600'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Score */}
                    <div className="text-[#71ac48] font-bold text-lg min-w-fit">
                      {player.score.toLocaleString('vi-VN')}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="bg-[#0f3d1f] border-t-4 border-[#71ac48] px-6 py-3 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#71ac48] font-medium">
                Cập nhật hàng ngày • Top 100 thành viên
              </p>
            </div>
          </motion.div>

          {/* GIFT SET SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 md:mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center order-2 md:order-1"
              >
                <img 
                  src="/images/babe_gift_set.png" 
                  alt="BABE Gift Set" 
                  className="w-full max-w-sm md:max-w-md h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--babe-green-dark)] mb-4 leading-tight"
                  style={{ fontFamily: "'SVN-Georgia', serif" }}
                >
                  Vô vàn phần quà hấp dẫn đang chờ những người thắng cuộc!!
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                  Những giải thưởng độc quyền từ BABE LABORATORIOS dành cho những người chiến thắng. Bộ sản phẩm chăm sóc da cao cấp chờ đón bạn!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Game Registration Modal */}
        {showGameRegisterModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-[var(--babe-green-dark)] to-[var(--babe-green)] rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowGameRegisterModal(false);
                  setGameEmail('');
                  setGameEmailSubmitted(false);
                }}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src="/images/logo BABE.svg"
                  alt="BABE Logo"
                  className="h-10 brightness-0 invert"
                />
              </div>

              {!gameEmailSubmitted ? (
                <>
                  <h3 className="text-white text-2xl font-bold text-center mb-3">Tham Gia Trận Đấu</h3>
                  <p className="text-white/80 text-center text-sm mb-6">
                    Đăng ký email để tiếp tục chơi game
                  </p>

                  <form onSubmit={(e) => {
                    e.preventDefault();
                    setGameEmailSubmitted(true);
                    setTimeout(() => {
                      setShowGameRegisterModal(false);
                      setGameEmail('');
                      setGameEmailSubmitted(false);
                    }, 2000);
                  }} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Nhập email của bạn"
                      value={gameEmail}
                      onChange={(e) => setGameEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-[var(--babe-green-dark)] font-bold py-3 rounded-lg hover:bg-white/90 transition-colors uppercase tracking-widest text-sm"
                    >
                      Tham Gia Ngay
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-lg">Tuyệt vời!</p>
                  <p className="text-white/80 text-sm">Chuẩn bị vào trận đấu...</p>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* ROUND RULES MODALS */}
        {showRoundRulesModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9998] p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowRoundRulesModal(null)}
                className="sticky top-4 right-4 fixed z-10 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={28} />
              </button>

              {/* Round 1 Rules */}
              {showRoundRulesModal === 'round1' && (
                <div>
                  {/* Image */}
                  <img 
                    src="/images/round1.jpg" 
                    alt="Vòng 1" 
                    className="w-full h-64 md:h-80 object-cover"
                  />

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--babe-green-dark)] mb-6">
                      Vòng 1: Dầu 0 Rầu
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">📖 Câu chuyện</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Chạy trốn "quái vật dầu" trong thành phố nóng ẩm để thu thập tính năng sản phẩm và né chướng ngại vật.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">🎮 Gameplay:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Di chuyển trái, phải, nhảy để né chướng ngại vật (mụn dầu)</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Thu thập bong bóng nước để tính điểm</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Mỗi 1000m nhận 1 tính năng của Action 360 (tổng 6)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-[var(--babe-green)]/10 to-transparent p-4 rounded-lg border-l-4 border-[var(--babe-green)]">
                        <h4 className="text-lg font-bold text-[var(--babe-green-dark)] mb-2">🏆 Điều kiện thắng</h4>
                        <p className="text-gray-700 font-semibold">
                          Đủ 6000m + Đủ 6 tính năng → Thắng
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Round 2 Rules */}
              {showRoundRulesModal === 'round2' && (
                <div>
                  {/* Image */}
                  <img 
                    src="/images/round2.jpg" 
                    alt="Vòng 2" 
                    className="w-full h-64 md:h-80 object-cover"
                  />

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--babe-green-dark)] mb-6">
                      Vòng 2: Húc Bụi
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">📖 Concept</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Tiêu diệt các "quái vật bụi bẩn" trong mê cung bằng cách đặt skincare bombs trong thời gian cố định để tính điểm.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">🎮 Gameplay:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Đặt bomb để tiêu diệt quái</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span><strong>2 phút:</strong> diệt càng nhiều → điểm càng cao</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Chạm quái/bom → thua ngay</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Nhặt sản phẩm sữa rửa mặt hay oil control pad để tăng điểm và nhận khiên 1 lần</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-[var(--babe-green)]/10 to-transparent p-4 rounded-lg border-l-4 border-[var(--babe-green)]">
                        <h4 className="text-lg font-bold text-[var(--babe-green-dark)] mb-2">⏱️ Thời gian</h4>
                        <p className="text-gray-700 font-semibold">
                          2 phút để diệt càng nhiều quái vật bụi càng tốt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Round 3 Rules */}
              {showRoundRulesModal === 'round3' && (
                <div>
                  {/* Image */}
                  <img 
                    src="/images/round3.png" 
                    alt="Vòng 3" 
                    className="w-full h-64 md:h-80 object-cover"
                  />

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--babe-green-dark)] mb-6">
                      Vòng 3: Gặp Mụn Là Trụng
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">📖 Concept</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Đối đầu trực tiếp với quái vật mụn, né đòn tấn công và phản công để giành chiến thắng.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">🎮 Gameplay:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Đấu với quái vật mụn, di chuyển qua lại, lên xuống để né</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Ấn vào màn hình để tấn công</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span>Bị trúng đòn → Clean Level giảm</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[var(--babe-green)] font-bold">•</span>
                            <span><strong>Không giới hạn thời gian,</strong> đánh hết máu quái vật → thắng</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-[var(--babe-green)]/10 to-transparent p-4 rounded-lg border-l-4 border-[var(--babe-green)]">
                        <h4 className="text-lg font-bold text-[var(--babe-green-dark)] mb-2">🏆 Tính Điểm</h4>
                        <p className="text-gray-700 font-semibold">
                          Thắng với Clean Level càng cao và tiêu diệt quái càng nhanh → điểm càng cao
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MiniGameSystem;
