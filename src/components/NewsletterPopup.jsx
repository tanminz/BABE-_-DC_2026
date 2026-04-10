import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Hiện popup sau 1 giây khi vào web
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset sau 2 giây
    setTimeout(() => {
      setIsOpen(false);
      setEmail('');
      setIsSubmitted(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-gradient-to-br from-[var(--babe-green-dark)] to-[var(--babe-green)] rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
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

        {/* Header Label */}
        <div className="text-center mb-4">
          <p className="text-white/80 text-xs font-semibold tracking-widest uppercase">
            Đăng ký nhận thông tin
          </p>
        </div>

        {/* Title */}
        <h2 className="text-white text-2xl font-bold text-center mb-2">
          Nhận cập nhật mới nhất
        </h2>
        <p className="text-white/80 text-center text-sm mb-6">
          Thông tin chăm sóc da và ưu đãi độc quyền từ BABÉ
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#f6d365] to-[#fda085] text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Đăng ký ngay
            </button>
          </form>
        ) : (
          <div className="py-6 text-center">
            <p className="text-white font-semibold text-lg">✓ Cảm ơn bạn!</p>
            <p className="text-white/70 text-sm mt-2">
              Email của bạn đã được ghi lại
            </p>
          </div>
        )}

        {/* Footer text */}
        <p className="text-white/60 text-xs text-center mt-4">
          Chúng tôi không gửi spam. Cam kết bảo mật thông tin
        </p>
      </div>
    </div>
  );
}
