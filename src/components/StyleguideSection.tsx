
import React, { useEffect, useRef } from 'react';
import StyleguidePreview from './StyleguidePreview';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

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
        
        <div className="max-w-4xl mx-auto">
          <StyleguidePreview theme={theme} />
        </div>
      </div>
    </section>;
};
export default StyleguideSection;
