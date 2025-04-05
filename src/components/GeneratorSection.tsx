
import React from 'react';
import LandingPageGenerator from './LandingPageGenerator';

interface Props {
  theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty';
}

const GeneratorSection: React.FC<Props> = ({ theme }) => {
  return (
    <section id="generator" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <LandingPageGenerator theme={theme} />
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium mb-3">Complete Styleguide</h3>
            <p className="text-gray-600">
              Your brand's colors, typography, and design elements all in one place.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium mb-3">Brand-Focused AI</h3>
            <p className="text-gray-600">
              An AI assistant that knows your brand inside and out.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium mb-3">Instant Pages</h3>
            <p className="text-gray-600">
              Generate landing pages in seconds that stay true to your identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorSection;
