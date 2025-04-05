import React from 'react';
import StyleguidePreview from './StyleguidePreview';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface Props {
  theme: 'default' | 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist';
}

const StyleguideSection: React.FC<Props> = ({ theme }) => {
  const allThemes: Array<'default' | 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist'> = [
    'default', 'eco', 'tech', 'luxury', 'playful', 'minimalist'
  ];
  
  return (
    <section id="styleguide" className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Your Brand, Amplified for Everyone
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <StyleguidePreview theme={theme} />
        </div>
        
        <div className="mt-8 max-w-4xl mx-auto">
          <h3 className="text-center text-lg font-medium mb-4">Explore Different Brand Styles</h3>
          <Carousel className="mx-auto">
            <CarouselContent>
              {allThemes.map((themeStyle) => (
                <CarouselItem key={themeStyle} className="basis-1/3 md:basis-1/4">
                  <div className="p-1">
                    <div className={`h-24 w-full rounded-md flex items-center justify-center p-2 
                      ${themeStyle === 'default' ? 'bg-gradient-to-r from-brand-200 via-brand-100 to-brand-300' : 
                      themeStyle === 'eco' ? 'bg-gradient-to-r from-green-200 via-green-100 to-purple-200' :
                      themeStyle === 'tech' ? 'bg-gradient-to-r from-slate-200 via-cyan-100 to-blue-100' :
                      themeStyle === 'luxury' ? 'bg-gradient-to-r from-stone-200 via-amber-100 to-stone-100' :
                      themeStyle === 'playful' ? 'bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100' :
                      'bg-gradient-to-r from-neutral-100 via-white to-neutral-100'}`}
                    >
                      <div className="text-center">
                        <div className="capitalize font-medium">{themeStyle}</div>
                        <div className="text-xs opacity-70">Brand Style</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-5 bg-white" />
            <CarouselNext className="-right-5 bg-white" />
          </Carousel>
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
    </section>
  );
};

export default StyleguideSection;
