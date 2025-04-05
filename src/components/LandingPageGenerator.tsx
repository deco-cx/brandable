
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  theme: 'default' | 'eco';
}

const LandingPageGenerator: React.FC<Props> = ({ theme }) => {
  const [showCode, setShowCode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  useEffect(() => {
    const codeTimer = setTimeout(() => {
      setShowCode(true);
    }, 1000);
    
    const previewTimer = setTimeout(() => {
      setShowPreview(true);
    }, 2500);
    
    return () => {
      clearTimeout(codeTimer);
      clearTimeout(previewTimer);
    };
  }, []);

  const isEcoTheme = theme === 'eco';
  const textColor = isEcoTheme ? 'text-green-800' : 'text-brand-700';
  const bgColor = isEcoTheme ? 'bg-green-100' : 'bg-brand-100';
  const accentColor = isEcoTheme ? 'text-green-600' : 'text-brand-600';
  const buttonClass = isEcoTheme 
    ? "bg-green-700 hover:bg-green-800 text-white" 
    : "bg-brand-600 hover:bg-brand-700 text-white";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h3 className={`text-2xl md:text-3xl font-bold ${textColor}`}>
          From Chat to Page — Instantly.
        </h3>
        <p className="text-gray-600">
          Once your brand is captured, Brandable can generate entire landing pages for products, 
          launches, or experiments — all perfectly on-brand.
        </p>
        
        <div className={`${bgColor} p-4 rounded-lg font-mono text-sm opacity-0 ${showCode ? 'animate-fade-in' : ''}`}>
          <div className="flex items-center space-x-2 mb-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="text-gray-500">Generating landing page...</span>
          </div>
          <div className={accentColor}>
            <span>{'{'}</span> <br />
            <span className="ml-4">"name": "{isEcoTheme ? 'Amazonian Beauty' : 'Brandable'}"</span> <br />
            <span className="ml-4">"style": {isEcoTheme ? '"eco-friendly"' : '"modern"'}</span> <br />
            <span className="ml-4">"components": ["hero", "features", "testimonials", "cta"]</span> <br />
            <span>{'}'}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className={`px-6 py-2 rounded-full ${buttonClass} transition-colors duration-700`}>
            Generate a Page
          </button>
          <button className="text-gray-600 hover:text-gray-900 flex items-center space-x-1 transition-colors">
            <span>Learn how it works</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className={`bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-500 ${showPreview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="h-8 bg-gray-100 flex items-center px-4 space-x-1">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-gray-500">Preview: {isEcoTheme ? 'rainforestbeauty.co' : 'brandable.chat'}</div>
        </div>
        <div className="relative">
          <div className={`p-6 ${isEcoTheme ? 'bg-gradient-to-br from-green-50 to-purple-50' : 'bg-gradient-to-br from-blue-50 to-indigo-50'} transition-colors duration-700`}>
            <h3 className={`text-2xl font-bold ${isEcoTheme ? 'text-green-800' : 'text-brand-700'} mb-4 transition-colors duration-700`}>
              {isEcoTheme ? 'Natural Beauty, Sustainably Sourced' : 'Your brand. Your style. Your voice.'}
            </h3>
            <p className="text-gray-600 mb-6">
              {isEcoTheme 
                ? 'Discover our collection of eco-friendly beauty products from the Amazon rainforest.' 
                : 'Brandable interviews you, captures your identity, and builds landing pages that are always on-brand.'}
            </p>
            <button className={`px-6 py-2 rounded-full ${buttonClass} transition-colors duration-700`}>
              {isEcoTheme ? 'Shop Collection' : 'Get Started'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageGenerator;
