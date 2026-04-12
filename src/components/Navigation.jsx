import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
        <span className="font-bold tracking-[0.2em] text-base sm:text-xl text-white drop-shadow-md">BABÉ</span>
        <span className="w-[1px] h-3 sm:h-4 bg-white/50 drop-shadow-md"></span>
        <span className="tracking-widest text-[10px] sm:text-sm uppercase text-white/70 drop-shadow-md">Laboratorios</span>
      </div>
      
      <nav className="flex gap-4 sm:gap-10 text-white/90 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold pointer-events-auto drop-shadow-md">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `transition-colors ${
              isActive 
                ? 'text-[var(--babe-green)]' 
                : 'hover:text-[var(--babe-green)]'
            }`
          }
        >
          Sản Phẩm
        </NavLink>
        
        <NavLink 
          to="/ai-skin" 
          className={({ isActive }) => 
            `transition-colors ${
              isActive 
                ? 'text-[var(--babe-green)]' 
                : 'hover:text-[var(--babe-green)]'
            }`
          }
        >
          AI Scan
        </NavLink>
        
        <NavLink 
          to="/mini-game" 
          className={({ isActive }) => 
            `transition-colors ${
              isActive 
                ? 'text-[var(--babe-green)]' 
                : 'hover:text-[var(--babe-green)]'
            }`
          }
        >
          Mini Game
        </NavLink>
      </nav>
    </header>
  );
}
