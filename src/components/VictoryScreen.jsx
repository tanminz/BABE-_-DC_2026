import React from 'react';
import { Share2, Trophy, Award } from 'lucide-react';

const VictoryScreen = () => {
  const leaderboard = [
    { rank: 1, name: "Nguyễn V. A", score: 9850, avatar: "https://i.pravatar.cc/150?u=1" },
    { rank: 2, name: "Trần T. B", score: 9200, avatar: "https://i.pravatar.cc/150?u=2" },
    { rank: 3, name: "Lê H.", score: 8900, avatar: "https://i.pravatar.cc/150?u=3" },
    { rank: 4, name: "Phạm K.", score: 8550, avatar: "https://i.pravatar.cc/150?u=4" },
    { rank: 5, name: "Hoàng M.", score: 8100, avatar: "https://i.pravatar.cc/150?u=5" },
  ];

  return (
    <section id="leaderboard" className="py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-[var(--babe-green-dark)]">Vinh Danh Skin Hero</h2>
          <p className="text-xl text-[var(--text-muted)]">Chia sẻ thành tích để nhận phác đồ điều trị chuyên sâu từ BABÉ</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Shareable Photo Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 flex flex-col items-center">
              
              {/* Virtual Card */}
              <div className="w-full aspect-[4/5] bg-[var(--medical-white)] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center p-8 border-4 border-white shadow-inner">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--babe-green-light)] rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fda085] rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
                
                <img src="/images/logo BABE.svg" alt="BABE Logo" className="h-10 mb-8 opacity-80" />
                
                <div className="relative z-10 w-32 h-32 lg:w-48 lg:h-48 rounded-full border-8 border-white overflow-hidden shadow-xl mb-6">
                  {/* Mock user face or product */}
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Victory" className="w-full h-full object-cover filter contrast-125" />
                </div>

                <div className="relative z-10 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg w-full">
                  <p className="text-sm font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">SCORE: 8550</p>
                  <h3 className="text-2xl lg:text-3xl font-black text-[var(--text-dark)] leading-tight mb-2">
                    Da đã thở lại.<br/>Còn bạn?
                  </h3>
                  <p className="text-xs text-[var(--babe-green)] font-bold">#dathotrongmoignhipsong #BABE #SkinHero</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-4 w-full">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white py-3 rounded-xl font-bold hover:bg-[#166fe5] transition-colors">
                  Facebook
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                  Instagram
                </button>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="w-full lg:w-1/2 bg-[var(--medical-white)] rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 text-[var(--babe-green)] opacity-10">
              <Trophy size={160} />
            </div>

            <h3 className="text-2xl font-bold mb-8 relative z-10">Bảng Xếp Hạng Tuần</h3>
            
            <div className="space-y-4 relative z-10">
              {leaderboard.map((user, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white
                      ${idx === 0 ? 'bg-yellow-400' : idx === 1 ? 'bg-gray-400' : idx === 2 ? 'bg-yellow-700' : 'bg-gray-200 text-gray-500'}`}
                    >
                      {idx < 3 ? <Award size={20} /> : user.rank}
                    </div>
                    <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                    <span className="font-bold text-lg">{user.name}</span>
                  </div>
                  <div className="font-mono font-bold text-xl text-[var(--babe-green)]">
                    {user.score.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 text-[var(--babe-green)] font-bold text-center w-full hover:underline">
              Xem Top 25 (Nhận Box Quà) &rarr;
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VictoryScreen;
