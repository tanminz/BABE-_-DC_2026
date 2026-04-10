import React from 'react';
import Hero from './Hero';
import ProductCombo from './ProductCombo';
import TechnologyVideo from './TechnologyVideo';
import SkinGallery from './SkinGallery';
import AiSkinScan from './AiSkinScan';
import UvHeatmap from './UvHeatmap';
import Banner from './Banner';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCombo />
      <TechnologyVideo />
      <SkinGallery />
      <AiSkinScan />
      <UvHeatmap />
      <Banner />
    </div>
  );
}
