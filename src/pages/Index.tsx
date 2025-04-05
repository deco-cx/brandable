
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StyleguideSection from '../components/StyleguideSection';
import GeneratorSection from '../components/GeneratorSection';
import ModelSection from '../components/ModelSection';
import DecoSection from '../components/DecoSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<'default' | 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist'>('default');
  
  const handleThemeChange = (theme: 'default' | 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist') => {
    setCurrentTheme(theme);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection onThemeChange={handleThemeChange} />
        <StyleguideSection theme={currentTheme} />
        <GeneratorSection theme={currentTheme} />
        <ModelSection />
        <DecoSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
