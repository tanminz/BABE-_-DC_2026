import React from 'react';
import Hero from './components/Hero';
import ProductCombo from './components/ProductCombo';
import TechnologyVideo from './components/TechnologyVideo';
import AiSkinScan from './components/AiSkinScan';
import UvHeatmap from './components/UvHeatmap';
import SkinGallery from './components/SkinGallery';
import MiniGameSystem from './components/MiniGameSystem';

function App() {
  return (
    <div className="min-h-screen text-[var(--text-dark)] font-sans antialiased overflow-x-hidden selection:bg-[var(--babe-green)] selection:text-white relative">
      
      {/* Rock-solid fixed background layer */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: "url('/images/ss_2720925879.jpg')" }}
      ></div>

      {/* Semi-transparent overlay to ensure text remains readable globally */}
      <div className="fixed inset-0 w-full h-full bg-white/60 pointer-events-none z-0"></div>
      
      <div className="relative z-10 w-full min-h-screen">
        <Hero />
        <ProductCombo />
        <TechnologyVideo />
        
        {/* Swapped order: Banner (SkinGallery) is now ABOVE AI Scan */}
        <SkinGallery />
        <AiSkinScan />
        <UvHeatmap />
        
        <MiniGameSystem />

        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur-md py-12 px-4 border-t border-gray-100 text-center relative z-50">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <img src="/images/logo BABE.svg" alt="BABE Logo" className="h-8 mb-6 opacity-80 mix-blend-multiply" />
            <p className="text-[var(--text-muted)] text-sm tracking-widest uppercase">&copy; 2026 BABÉ Laboratorios. "Da thở trong mọi nhịp sống"</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
