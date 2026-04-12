import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-8 py-2 sm:py-3 md:py-4 flex justify-between items-center bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm gap-3">
      <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 pointer-events-auto flex-shrink-0">
        <span className="font-bold tracking-[0.1em] text-xs sm:text-base md:text-lg lg:text-xl text-white drop-shadow-md">BABÉ</span>
        <span className="w-[1px] h-2 sm:h-2.5 md:h-3 bg-white/50 drop-shadow-md flex-shrink-0"></span>
        <span className="tracking-[0.05em] text-[8px] sm:text-[10px] md:text-xs uppercase text-white/70 drop-shadow-md">Laboratorios</span>
      </div>
      
      <nav className="flex gap-1.5 sm:gap-3 md:gap-8 text-white/90 text-[10px] sm:text-xs md:text-sm tracking-[0.1em] uppercase font-bold pointer-events-auto drop-shadow-md">
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
