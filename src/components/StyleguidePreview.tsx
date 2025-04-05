
import React from 'react';

interface Props {
  theme: 'default' | 'eco';
}

const StyleguidePreview: React.FC<Props> = ({ theme }) => {
  const isEcoTheme = theme === 'eco';
  
  // Color palette based on the current theme
  const colorPalette = isEcoTheme 
    ? [
        { color: '#2d6a4f', name: 'Primary Green', hex: '#2d6a4f' },
        { color: '#40916c', name: 'Secondary Green', hex: '#40916c' },
        { color: '#52b788', name: 'Accent Green', hex: '#52b788' },
        { color: '#8a5cf7', name: 'Primary Purple', hex: '#8a5cf7' },
        { color: '#c8b6ff', name: 'Light Purple', hex: '#c8b6ff' }
      ]
    : [
        { color: '#0ea5e9', name: 'Primary Blue', hex: '#0ea5e9' },
        { color: '#38bdf8', name: 'Secondary Blue', hex: '#38bdf8' },
        { color: '#7dd3fc', name: 'Accent Blue', hex: '#7dd3fc' },
        { color: '#0f172a', name: 'Dark Blue', hex: '#0f172a' },
        { color: '#e0f2fe', name: 'Light Blue', hex: '#e0f2fe' }
      ];
      
  const brandName = isEcoTheme ? "Amazonian Rainforest Eco Beauty" : "Brandable.chat";
  
  const fontFamily = isEcoTheme ? "font-serif" : "font-sans";
  const headingClass = isEcoTheme ? "text-green-800" : "text-brand-700";
  const buttonClass = isEcoTheme 
    ? "bg-green-700 hover:bg-green-800 text-white" 
    : "bg-brand-600 hover:bg-brand-700 text-white";
    
  const gradientClass = isEcoTheme 
    ? "bg-gradient-to-r from-green-800 to-purple-700" 
    : "bg-gradient-to-r from-brand-600 to-brand-800";

  return (
    <div className={`glass-card p-8 transition-all duration-1000 ${isEcoTheme ? 'eco-background' : 'gradient-background'}`}>
      <div className="text-center mb-10">
        <h3 className={`text-2xl font-bold ${headingClass} mb-2 transition-colors duration-700`}>
          {brandName}
        </h3>
        <div className={`inline-block h-1 w-10 ${isEcoTheme ? 'bg-green-600' : 'bg-brand-600'} rounded transition-colors duration-700`}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-3">Color Palette</h4>
          <div className="flex flex-wrap gap-2">
            {colorPalette.map((color, index) => (
              <div key={index} className="text-center">
                <div 
                  className="h-8 w-8 rounded-full mb-1 mx-auto transition-colors duration-700" 
                  style={{ backgroundColor: color.color }}
                ></div>
                <span className="text-xs block">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-3">Typography</h4>
          <div className={`${fontFamily} transition-all duration-700`}>
            <p className="text-xl font-bold mb-2">Heading Font</p>
            <p className="text-sm mb-4">Body Font</p>
            <div className={`h-8 ${buttonClass} text-sm rounded-md flex items-center justify-center transition-colors duration-700`}>
              Button Style
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-sm font-medium text-gray-500 mb-3">Brand Voice</h4>
        <div className={`p-4 rounded-lg bg-white/50 ${fontFamily} transition-all duration-700`}>
          {isEcoTheme ? (
            <p className="text-green-800">We believe in sustainable beauty that nurtures both you and the planet.</p>
          ) : (
            <p className="text-brand-700">Building beautiful brand experiences, one conversation at a time.</p>
          )}
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <div className={`h-10 px-6 ${buttonClass} rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-700`}>
          {isEcoTheme ? "Shop Now" : "Get Started"}
        </div>
      </div>
    </div>
  );
};

export default StyleguidePreview;
