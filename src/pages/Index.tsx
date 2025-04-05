
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty'>('empty');
  const [api, setApi] = React.useState<CarouselApi>();
  const allThemes: Array<'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist'> = ['eco', 'tech', 'luxury', 'playful', 'minimalist'];
  
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
      
      // Sync carousel with theme
      if (api) {
        const themeIndex = allThemes.indexOf(theme as any);
        if (themeIndex >= 0) {
          api.scrollTo(themeIndex);
        }
      }
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection onThemeChange={handleThemeChange} currentTheme={currentTheme} />
        
        {/* Carousel moved to top, above both chat and styleguide */}
        <div className="container mx-auto px-4 mb-6 max-w-xl">
          <Carousel className="mx-auto" setApi={setApi}>
            <CarouselContent>
              {allThemes.map(themeStyle => <CarouselItem key={themeStyle} className="basis-1/3 md:basis-1/4">
                  <div className="p-1">
                    <button 
                      onClick={() => handleThemeChange(themeStyle)} 
                      className={`h-8 w-full rounded-md flex items-center justify-center p-1 transition-all duration-300 hover:scale-105 group 
                        ${themeStyle === currentTheme ? 'ring-2 ring-offset-1' : 'border border-gray-100'} 
                        ${themeStyle === 'eco' ? 'bg-gradient-to-r from-green-200 via-green-100 to-purple-200' : themeStyle === 'tech' ? 'bg-gradient-to-r from-slate-200 via-cyan-100 to-blue-100' : themeStyle === 'luxury' ? 'bg-gradient-to-r from-stone-200 via-amber-100 to-stone-100' : themeStyle === 'playful' ? 'bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100' : 'bg-gradient-to-r from-neutral-100 via-white to-neutral-100'}`}
                    >
                      <div className="text-center relative">
                        <div className="capitalize font-bold text-xs">{themeStyle}</div>
                      </div>
                    </button>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="-left-5 bg-white" />
            <CarouselNext className="-right-5 bg-white" />
          </Carousel>
        </div>
        
        {/* Side-by-side layout with chat on left, styleguide on right */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="md:order-1 flex items-stretch">
              <div className="w-full h-full flex">
                <ChatSimulation onThemeChange={handleThemeChange} currentTheme={currentTheme} />
              </div>
            </div>
            <div className="md:order-2 flex items-stretch">
              <div className="w-full h-full flex">
                <StyleguideSection theme={currentTheme} onThemeChange={handleThemeChange} />
              </div>
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
