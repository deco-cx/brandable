
import React, { useEffect, useRef } from 'react';
import StyleguidePreview from './StyleguidePreview';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import ChatSimulation from './ChatSimulation';

interface Props {
  theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty';
  onThemeChange: (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => void;
}

const StyleguideSection: React.FC<Props> = ({
  theme,
  onThemeChange
}) => {
  const allThemes: Array<'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist'> = ['eco', 'tech', 'luxury', 'playful', 'minimalist'];
  const [api, setApi] = React.useState<CarouselApi>();
  const initialThemeSet = useRef(false);

  // Sync carousel position with current theme
  useEffect(() => {
    if (api && theme !== 'empty') {
      const themeIndex = allThemes.indexOf(theme as any);
      if (themeIndex >= 0) {
        api.scrollTo(themeIndex);
        initialThemeSet.current = true;
      }
    }
  }, [api, theme, allThemes]);
  
  return <section id="styleguide" className="py-12 pt-0 relative mx-0 my-0">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          
        </div>
        
        <div className="mb-12 max-w-4xl mx-auto">
          <ChatSimulation onThemeChange={onThemeChange} currentTheme={theme} />
        </div>
        
        {/* Carousel for theme selection */}
        <div className="mb-8 max-w-4xl mx-auto">
          <h3 className="text-center text-lg font-bold mb-4">Explore Different Brand Styles</h3>
          <Carousel className="mx-auto" setApi={setApi}>
            <CarouselContent>
              {allThemes.map(themeStyle => <CarouselItem key={themeStyle} className="basis-1/3 md:basis-1/4">
                  <div className="p-1">
                    <button 
                      onClick={() => onThemeChange(themeStyle)} 
                      className={`h-16 w-full rounded-md flex items-center justify-center p-2 transition-all duration-300 hover:scale-105 group 
                        ${themeStyle === theme ? 'ring-2 ring-offset-1' : 'border border-gray-100'} 
                        ${themeStyle === 'eco' ? 'bg-gradient-to-r from-green-200 via-green-100 to-purple-200' : themeStyle === 'tech' ? 'bg-gradient-to-r from-slate-200 via-cyan-100 to-blue-100' : themeStyle === 'luxury' ? 'bg-gradient-to-r from-stone-200 via-amber-100 to-stone-100' : themeStyle === 'playful' ? 'bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100' : 'bg-gradient-to-r from-neutral-100 via-white to-neutral-100'}`}
                    >
                      <div className="text-center relative">
                        <div className="capitalize font-bold">{themeStyle}</div>
                      </div>
                    </button>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="-left-5 bg-white" />
            <CarouselNext className="-right-5 bg-white" />
          </Carousel>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <StyleguidePreview theme={theme} />
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-600 font-bold">1</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Brand Analysis</h3>
            <p className="text-gray-600 text-sm">
              Brandable analyzes your existing brand assets and website.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-600 font-bold">2</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Style Extraction</h3>
            <p className="text-gray-600 text-sm">
              Colors, typography, and design elements are identified and extracted.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-600 font-bold">3</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Voice Matching</h3>
            <p className="text-gray-600 text-sm">
              Your brand's tone of voice is captured for consistent messaging.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default StyleguideSection;
