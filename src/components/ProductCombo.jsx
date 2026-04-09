import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, X } from 'lucide-react';

const ProductCombo = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [currentImage, setCurrentImage] = useState('/images/product-2.png');

  const products = {
    cleansing: {
      title: 'Purifying Cleansing Gel',
      subtitle: 'Sữa rửa mặt BABE Stop AKN',
      type: 'Da dầu, da hỗn hợp, da mụn',
      description: 'Sữa rửa mặt BABE Stop AKN Purifying Cleansing Gel 200ml giúp làm sạch sâu, dưỡng ẩm và giúp da trông mịn màng hơn',
      images: ['/images/product-2.png', '/images/product-1.jpg', '/images/product-3.webp'],
      indication: ['Da dầu, da hỗn hợp thiên dầu', 'Da mụn', 'Dày sừng, bít tắc lỗ chân lông', 'Mụn do đeo khẩu trang'],
      benefit: ['Làm sạch sâu, loại bỏ dầu thừa và bụi bẩn', 'Hỗ trợ làm giảm mụn trên da', 'Giúp dưỡng da mềm mại mịn màng'],
      ingredients: ['SALICYLIC ACID 0.5%', 'SUCCINIC ACID 1%', 'ZINC PCA 0,02%', 'PANTHENOL'],
      usage: ['Bước 1: Lấy lượng sản phẩm vừa đủ vào lòng bàn tay, tạo bọt và thoa lên mặt ướt.', 'Bước 2: Massage nhẹ nhàng khoảng 30 giây – 1 phút.', 'Bước 3: Rửa lại với nước sạch và lau khô.']
    },
    pads: {
      title: 'AHA/BHA Oil Control Pads',
      subtitle: 'STOP AKN OIL CONTROL PADS',
      type: 'Da dầu mụn, da dày sừng, da hỗn hợp',
      description: 'Miếng tẩy tế bào chết kết hợp AHA/BHA giúp cân bằng dầu và làm sạch sâu cho da dầu mụn',
      images: ['/images/Gemini_Generated_Image_kanbaskanbaskanb.png', '/images/241004_STOPAKN_PADS_CENITAL_01_fondo_gris.jpg', '/images/241004_BABE_STOPAKN_DISCOS_04.jpg'],
      indication: ['Da dầu mụn', 'Da dày sừng', 'Da hỗn hợp'],
      benefit: ['Giúp cân bằng lượng dầu trên da', 'Giúp làm sạch các tế bào da chết trên da', 'Giúp dưỡng ẩm cho da, cho làn da mềm mại, mịn màng'],
      ingredients: ['Niacinamide', 'Salicylic Acid 0.5%', 'Succinic Acid 0.5%', 'ZnPCA 1%', 'Lactobacillus Ferment', 'Panthenol'],
      usage: ['Mặt dập nổi, nhẹ nhàng lau trên vùng chữ T (vùng Trán, mũi, cằm) làm sạch và tẩy tế bào chết nhẹ nhàng', 'Với mặt mịn, nhẹ nhàng lau khắp mặt thêm một lần nữa']
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImage(products[product].images[0]);
    setExpandedSections({});
    setShowModal(true);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      indication: false,
      benefit: false,
      ingredients: false,
      usage: false,
      [section]: !prev[section]
    }));
  };

  const ProductDetailModal = () => {
    if (!selectedProduct) return null;
    const product = products[selectedProduct];
    
    return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[85vh] shadow-2xl overflow-hidden">
        {/* Close Button - TOP RIGHT */}
        <button 
          onClick={() => setShowModal(false)} 
          className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 rounded-full transition z-10 shadow-md"
        >
          <X size={28} />
        </button>

        {/* Content - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 h-full">
          
          {/* LEFT SIDE - Image + Thumbnails */}
          <div className="flex flex-col items-center justify-start gap-3">
            {/* Main Image */}
            <div className="w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-[var(--babe-green)]">
              <img src={currentImage} alt="Product" className="w-full h-full object-cover object-center" />
            </div>
            
            {/* Thumbnail Carousel - Below Image */}
            <div className="flex gap-3 justify-center w-full">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImage(img)}
                  className={`w-16 h-16 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition border-2 ${currentImage === img ? 'border-[var(--babe-green)] bg-[var(--babe-green)]' : 'border-transparent bg-green-100'}`}
                >
                  <img src={img} alt={`pic${idx}`} className="w-full h-full object-contain p-1 rounded-lg" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Product Info + All Sections */}
          <div className="flex flex-col gap-3 overflow-y-auto pr-2">
            {/* Product Name */}
            <div>
              <h2 className="text-2xl font-light mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-dark)', fontStyle: 'italic' }}>
                {product.title}
              </h2>
              <p className="text-xs text-[var(--babe-green)] font-semibold tracking-widest uppercase" style={{ fontFamily: "'Brandon Text', sans-serif" }}>{product.subtitle}</p>
              <p className="text-xs text-gray-500 mt-1">{product.type}</p>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed border-b pb-3">
              {product.description}
            </p>

            {/* CHỈ ĐỊNH */}
            <div>
              <button 
                onClick={() => toggleSection('indication')}
                className="w-full flex items-center justify-between py-2 px-2 hover:bg-green-50 rounded transition"
              >
                <span className="font-semibold text-xs text-[var(--babe-green)] uppercase tracking-widest">Chỉ định</span>
              </button>
              {expandedSections.indication && (
                <div className="px-2 py-2 text-xs text-gray-600 space-y-1 bg-green-50 rounded">
                  {product.indication.map((item, idx) => (
                    <p key={idx}>• {item}</p>
                  ))}
                </div>
              )}
            </div>

            {/* CÔNG DỤNG */}
            <div>
              <button 
                onClick={() => toggleSection('benefit')}
                className="w-full flex items-center justify-between py-2 px-2 hover:bg-green-50 rounded transition"
              >
                <span className="font-semibold text-xs text-[var(--babe-green)] uppercase tracking-widest">Công dụng</span>
              </button>
              {expandedSections.benefit && (
                <div className="px-2 py-2 text-xs text-gray-600 space-y-1 bg-green-50 rounded">
                  {product.benefit.map((item, idx) => (
                    <p key={idx}>• {item}</p>
                  ))}
                </div>
              )}
            </div>

            {/* THÀNH PHẦN */}
            <div>
              <button 
                onClick={() => toggleSection('ingredients')}
                className="w-full flex items-center justify-between py-2 px-2 hover:bg-green-50 rounded transition"
              >
                <span className="font-semibold text-xs text-[var(--babe-green)] uppercase tracking-widest">Thành phần chính</span>
              </button>
              {expandedSections.ingredients && (
                <div className="px-2 py-2 text-xs text-gray-600 space-y-1 bg-green-50 rounded">
                  {product.ingredients.map((item, idx) => (
                    <p key={idx}>• {item}</p>
                  ))}
                </div>
              )}
            </div>

            {/* CÁCH SỬ DỤNG */}
            <div>
              <button 
                onClick={() => toggleSection('usage')}
                className="w-full flex items-center justify-between py-2 px-2 hover:bg-green-50 rounded transition"
              >
                <span className="font-semibold text-xs text-[var(--babe-green)] uppercase tracking-widest">Cách sử dụng</span>
              </button>
              {expandedSections.usage && (
                <div className="px-2 py-2 text-xs text-gray-600 space-y-2 bg-green-50 rounded">
                  {product.usage.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  return (
    <section id="products" className="py-24 md:py-32 px-4 relative bg-transparent overflow-hidden">
      
      {/* Giant Background Text watermark */}
      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-10">
         <span className="text-[12vw] font-black tracking-tighter text-black uppercase leading-none whitespace-nowrap">
           COMBO BABE
         </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 lg:mb-24">
           <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--babe-green)] mb-4 block">Hè này, để Babé</span>
           <h2 
             className="text-4xl md:text-6xl font-normal text-black mb-6"
             style={{ fontFamily: "'SVN-Georgia', serif", fontStyle: "italic" }}
           >
             Cấp cứu làn da mụn
           </h2>
           <p className="text-sm uppercase tracking-[0.1em] text-gray-600 max-w-2xl mx-auto font-medium shadow-sm">Bộ đôi làm sạch sâu & Giải phóng nang lông PM2.5</p>
        </div>

        {/* Clean, perfectly sized grid with overlapping glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative px-4 max-w-5xl mx-auto">
          
          {/* Cleansing Gel */}
          <div className="w-full flex flex-col items-center">
            
            {/* Pill Tags loosely floating on top */}
            <div className="flex gap-2 w-full max-w-[400px] mb-[-20px] relative z-20 px-2 pl-4">
              <span className="bg-white/80 backdrop-blur-md border border-white text-gray-600 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Deep Cleanse</span>
              <span className="bg-gray-200/50 backdrop-blur-md border border-gray-100 text-gray-500 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Comfort</span>
              <span className="bg-gray-200/50 backdrop-blur-md border border-gray-100 text-gray-500 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Care</span>
            </div>

            <div className="w-full max-w-[400px] h-[550px] relative rounded-3xl overflow-hidden shadow-2xl border border-white group bg-white">
              {/* Background extension */}
              <img 
                src="/images/1.webp" 
                alt="" 
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-80"
              />
              {/* Product Image Shifted Up */}
              <img 
                src="/images/1.webp" 
                alt="Purifying Cleansing Gel" 
                className="absolute top-0 left-0 w-full h-[85%] object-contain object-top p-6 pb-0 transition-transform duration-1000 ease-out group-hover:scale-105 z-10"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              />
              
              {/* Glassmorphism Product Card at bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/80 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 mb-1 block">( Oily Skin )</span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                      Purifying Cleansing <br/> Gel BABÉ
                    </h3>
                  </div>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-black hover:bg-[var(--babe-green)] hover:text-white transition-colors flex-shrink-0">
                    <ArrowUpRight strokeWidth={2.5} size={20} />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  {/* Removed Price as requested */}
                  <button 
                    onClick={() => openModal('cleansing')}
                    className="w-full border border-gray-300 bg-white/50 text-gray-800 hover:border-black hover:text-white hover:bg-black font-semibold text-xs px-5 py-3 rounded-full transition-all backdrop-blur-sm">
                    Khám phá ngay
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Control Pads */}
          <div className="w-full flex flex-col items-center">
            
            {/* Pill Tags loosely floating on top */}
            <div className="flex gap-2 w-full max-w-[400px] mb-[-20px] relative z-20 px-2 pl-4">
              <span className="bg-white/80 backdrop-blur-md border border-white text-gray-600 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Exfoliate</span>
              <span className="bg-gray-200/50 backdrop-blur-md border border-gray-100 text-gray-500 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Comfort</span>
              <span className="bg-gray-200/50 backdrop-blur-md border border-gray-100 text-gray-500 text-[10px] px-4 py-2 rounded-full font-medium shadow-sm hover:translate-y-[-2px] transition-transform cursor-pointer">Care</span>
            </div>

            <div className="w-full max-w-[400px] h-[550px] relative rounded-3xl overflow-hidden shadow-2xl border border-white group bg-white">
              {/* Background extension */}
              <img 
                src="/images/2.jpg" 
                alt="" 
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-80"
              />
              {/* Product Image Shifted Up */}
              <img 
                src="/images/2.jpg" 
                alt="Oil Control Pads" 
                className="absolute top-0 left-0 w-full h-[85%] object-contain object-top p-6 pb-0 transition-transform duration-1000 ease-out group-hover:scale-105 z-10"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              />
              
              {/* Glassmorphism Product Card at bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/80 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 mb-1 block">( Acne Care )</span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                      AHA/BHA Oil Control <br/> Pads BABÉ
                    </h3>
                  </div>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-black hover:bg-[var(--babe-green)] hover:text-white transition-colors flex-shrink-0">
                    <ArrowUpRight strokeWidth={2.5} size={20} />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  {/* Removed Price as requested */}
                  <button 
                    onClick={() => openModal('pads')}
                    className="w-full border border-gray-300 bg-white/50 text-gray-800 hover:border-black hover:text-white hover:bg-black font-semibold text-xs px-5 py-3 rounded-full transition-all backdrop-blur-sm">
                    Khám phá ngay
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      {showModal && <ProductDetailModal />}
    </section>
  );
};

export default ProductCombo;
