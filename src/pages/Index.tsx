
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StyleguideSection from '../components/StyleguideSection';
import GeneratorSection from '../components/GeneratorSection';
import ModelSection from '../components/ModelSection';
import DecoSection from '../components/DecoSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty'>('empty');
  const [autoSwitchTheme, setAutoSwitchTheme] = useState(true);
  const [transitionInProgress, setTransitionInProgress] = useState(false);
  
  // Auto-switching theme for the demonstration
  useEffect(() => {
    if (!autoSwitchTheme) return;
    
    const themes: Array<'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist'> = [
      'eco', 'tech', 'luxury', 'playful', 'minimalist'
    ];
    
    const interval = setInterval(() => {
      if (!transitionInProgress) {
        setTransitionInProgress(true);
        
        setCurrentTheme(prevTheme => {
          // If we're currently in empty state, stay in it (will be managed by chat)
          if (prevTheme === 'empty') return 'empty';
          
          const currentIndex = themes.indexOf(prevTheme as any);
          const nextIndex = (currentIndex + 1) % themes.length;
          return themes[nextIndex];
        });
        
        // Allow time for transition to complete
        setTimeout(() => {
          setTransitionInProgress(false);
        }, 1000);
      }
    }, 8000); // Switch theme every 8 seconds
    
    return () => clearInterval(interval);
  }, [autoSwitchTheme, transitionInProgress]);
  
  const handleThemeChange = (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => {
    if (transitionInProgress) return;
    
    setTransitionInProgress(true);
    setCurrentTheme(theme);
    
    // Only stop auto switching when user manually selects a non-empty theme
    if (theme !== 'empty') {
      setAutoSwitchTheme(false);
      
      // Update URL with theme parameter for bookmarking/sharing
      const url = new URL(window.location.href);
      url.searchParams.set('theme', theme);
      window.history.replaceState({}, '', url.toString());
    }
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setTransitionInProgress(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection onThemeChange={handleThemeChange} />
        <StyleguideSection theme={currentTheme} onThemeChange={handleThemeChange} />
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
