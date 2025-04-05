
import React from 'react';
import StyleguidePreview from './StyleguidePreview';

interface Props {
  theme: 'default' | 'eco';
}

const StyleguideSection: React.FC<Props> = ({ theme }) => {
  return (
    <section id="styleguide" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Brand, Captured in a Styleguide
          </h2>
          <p className="text-xl text-gray-600">
            Brandable extracts your visual and verbal identity from just a URL and a few messages.
          </p>
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
    </section>
  );
};

export default StyleguideSection;
