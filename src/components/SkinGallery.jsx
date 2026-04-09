import React from 'react';

const SkinGallery = () => {
  return (
    <section id="gallery" className="relative">
      {/* Full width image banner */}
      <div 
        className="w-full h-[60vh] min-h-[400px] relative flex bg-black items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/ss_2592046955.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/80 mb-4 block drop-shadow-md">Diagnostic Phase</span>
          <h2 
            className="text-4xl md:text-6xl font-normal text-white drop-shadow-xl"
            style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}
          >
            Da bạn có đang thực sự thở?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SkinGallery;
