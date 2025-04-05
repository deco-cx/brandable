
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StyleguideSection from '../components/StyleguideSection';
import GeneratorSection from '../components/GeneratorSection';
import ModelSection from '../components/ModelSection';
import DecoSection from '../components/DecoSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import ChatSimulation from '../components/ChatSimulation';

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty'>('empty');
  
  // Check for theme in URL on initial load
  useEffect(() => {
    const currentThemeParam = new URLSearchParams(window.location.search).get('theme') as 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty' | null;
    
    if (currentThemeParam) {
      const validThemes = ['eco', 'tech', 'luxury', 'playful', 'minimalist'];
      if (validThemes.includes(currentThemeParam)) {
        handleThemeChange(currentThemeParam as any);
      }
    }
  }, []);
  
  const handleThemeChange = (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => {
    setCurrentTheme(theme);
    
    // Update URL with theme parameter for bookmarking/sharing, but only for non-empty themes
    if (theme !== 'empty') {
      const url = new URL(window.location.href);
      url.searchParams.set('theme', theme);
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection onThemeChange={handleThemeChange} currentTheme={currentTheme} />
        
        {/* Changed to side-by-side layout with chat on left, styleguide on right */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:order-1">
              <ChatSimulation onThemeChange={handleThemeChange} currentTheme={currentTheme} />
            </div>
            <div className="md:order-2">
              <StyleguideSection theme={currentTheme} onThemeChange={handleThemeChange} />
            </div>
          </div>
        </div>
        
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
