import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AISkinPage from './components/AISkinPage';
import MiniGamePage from './components/MiniGamePage';
import NewsletterPopup from './components/NewsletterPopup';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen text-[var(--text-dark)] font-sans antialiased overflow-x-hidden selection:bg-[var(--babe-green)] selection:text-white relative">
      
      {/* Rock-solid fixed background layer */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: "url('/images/ss_2720925879.jpg')" }}
      ></div>

      {/* Newsletter Popup */}
      <NewsletterPopup />
      
      {/* Scroll to Top on Route Change */}
      <ScrollToTop />
      
      <div className="relative z-10 w-full min-h-screen">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-skin" element={<AISkinPage />} />
          <Route path="/mini-game" element={<MiniGamePage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-white to-[var(--medical-white)] backdrop-blur-md py-16 px-4 border-t-2 border-[var(--babe-green)]/20 relative z-50">
          <div className="max-w-6xl mx-auto">
            {/* Newsletter Section */}
            <div className="mb-12 p-8 bg-gradient-to-r from-[var(--babe-green-light)]/10 to-[var(--babe-green)]/10 rounded-2xl border border-[var(--babe-green)]/20">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-[var(--babe-green-dark)] mb-2">Đăng ký nhận thông tin</h3>
                <p className="text-[var(--text-muted)] text-sm mb-6">Nhận cập nhật mới nhất về sản phẩm, ưu đãi và những thông tin chăm sóc da độc quyền</p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--babe-green)] text-sm transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-[#f6d365] to-[#fda085] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap hover:scale-105"
                  >
                    Đăng ký ngay
                  </button>
                </form>
              </div>
            </div>

            {/* Footer Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-200">
              {/* Logo & Description */}
              <div className="flex flex-col items-center md:items-start">
                <img src="/images/logo BABE.svg" alt="BABE Logo" className="h-10 mb-4 opacity-80 mix-blend-multiply" />
                <p className="text-[var(--text-muted)] text-xs tracking-widest uppercase leading-relaxed">
                  Da thở trong mọi nhịp sống
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-[var(--babe-green-dark)] mb-4 text-sm">Khám phá</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li><a href="/" className="hover:text-[var(--babe-green)] transition">Trang chủ</a></li>
                  <li><a href="/ai-skin" className="hover:text-[var(--babe-green)] transition">AI Skin Scan</a></li>
                  <li><a href="/mini-game" className="hover:text-[var(--babe-green)] transition">Mini Game</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-[var(--babe-green-dark)] mb-4 text-sm">Liên hệ</h4>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li>Email: info@babe.com</li>
                  <li>Điện thoại: 1900 xxxx</li>
                  <li>Địa chỉ: TP. Hồ Chí Minh</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-[var(--text-muted)] text-xs tracking-widest uppercase">
                &copy; 2026 BABÉ LABORATORIOS - DIGITAL CREATORY - CatchMeIfYouCan
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
