
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {
  theme: 'default' | 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty';
}

const StyleguidePreview: React.FC<Props> = ({ theme }) => {
  // Theme-specific styling
  let colorPalette = [];
  let brandName = '';
  let fontFamily = '';
  let headingClass = '';
  let buttonClass = '';
  let brandVoice = '';
  let buttonLabel = '';
  let backgroundClass = '';
  
  switch(theme) {
    case 'eco':
      colorPalette = [
        { color: '#2d6a4f', name: 'Primary Green', hex: '#2d6a4f' },
        { color: '#40916c', name: 'Secondary Green', hex: '#40916c' },
        { color: '#52b788', name: 'Accent Green', hex: '#52b788' },
        { color: '#8a5cf7', name: 'Primary Purple', hex: '#8a5cf7' },
        { color: '#c8b6ff', name: 'Light Purple', hex: '#c8b6ff' }
      ];
      brandName = "Amazonian Rainforest Eco Beauty";
      fontFamily = "font-serif";
      headingClass = "text-green-800";
      buttonClass = "bg-green-700 hover:bg-green-800 text-white";
      backgroundClass = "bg-gradient-to-r from-green-200 via-green-100 to-purple-200";
      brandVoice = "We believe in sustainable beauty that nurtures both you and the planet.";
      buttonLabel = "Shop Now";
      break;
    
    case 'tech':
      colorPalette = [
        { color: '#0f172a', name: 'Dark Blue', hex: '#0f172a' },
        { color: '#1e293b', name: 'Navy Blue', hex: '#1e293b' },
        { color: '#3b82f6', name: 'Primary Blue', hex: '#3b82f6' },
        { color: '#22d3ee', name: 'Cyan', hex: '#22d3ee' },
        { color: '#f1f5f9', name: 'Light Gray', hex: '#f1f5f9' }
      ];
      brandName = "Quantum Tech Solutions";
      fontFamily = "font-mono";
      headingClass = "text-blue-600";
      buttonClass = "bg-blue-600 hover:bg-blue-700 text-white";
      backgroundClass = "bg-gradient-to-r from-slate-200 via-cyan-100 to-blue-100";
      brandVoice = "Advancing the future through innovative technology solutions.";
      buttonLabel = "Explore Solutions";
      break;
    
    case 'luxury':
      colorPalette = [
        { color: '#44403c', name: 'Dark Brown', hex: '#44403c' },
        { color: '#78716c', name: 'Medium Brown', hex: '#78716c' },
        { color: '#d6d3d1', name: 'Light Gray', hex: '#d6d3d1' },
        { color: '#ca8a04', name: 'Gold', hex: '#ca8a04' },
        { color: '#fef3c7', name: 'Cream', hex: '#fef3c7' }
      ];
      brandName = "Elegance Luxury Watches";
      fontFamily = "font-serif";
      headingClass = "text-yellow-700";
      buttonClass = "bg-yellow-700 hover:bg-yellow-800 text-white";
      backgroundClass = "bg-gradient-to-r from-stone-200 via-amber-100 to-stone-100";
      brandVoice = "Timeless craftsmanship that defines distinction and sophistication.";
      buttonLabel = "View Collection";
      break;
    
    case 'playful':
      colorPalette = [
        { color: '#f43f5e', name: 'Pink', hex: '#f43f5e' },
        { color: '#fb923c', name: 'Orange', hex: '#fb923c' },
        { color: '#facc15', name: 'Yellow', hex: '#facc15' },
        { color: '#4ade80', name: 'Green', hex: '#4ade80' },
        { color: '#818cf8', name: 'Purple', hex: '#818cf8' }
      ];
      brandName = "FunTime Kids Academy";
      fontFamily = "font-comic";
      headingClass = "text-pink-600";
      buttonClass = "bg-orange-500 hover:bg-orange-600 text-white";
      backgroundClass = "bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100";
      brandVoice = "Where learning is a joyful adventure full of discovery!";
      buttonLabel = "Start Playing";
      break;
    
    case 'minimalist':
      colorPalette = [
        { color: '#262626', name: 'Black', hex: '#262626' },
        { color: '#525252', name: 'Dark Gray', hex: '#525252' },
        { color: '#a3a3a3', name: 'Medium Gray', hex: '#a3a3a3' },
        { color: '#e5e5e5', name: 'Light Gray', hex: '#e5e5e5' },
        { color: '#ffffff', name: 'White', hex: '#ffffff' }
      ];
      brandName = "Mono Design Studio";
      fontFamily = "font-sans";
      headingClass = "text-neutral-800";
      buttonClass = "bg-neutral-800 hover:bg-neutral-900 text-white";
      backgroundClass = "bg-gradient-to-r from-neutral-100 via-white to-neutral-100";
      brandVoice = "Less is more. Clarity through simplicity.";
      buttonLabel = "Our Work";
      break;
    
    case 'empty':
      // Empty state - neutral colors and placeholders
      colorPalette = [
        { color: '#f8f9fa', name: 'White', hex: '#f8f9fa' },
        { color: '#e9ecef', name: 'Light Gray 1', hex: '#e9ecef' },
        { color: '#dee2e6', name: 'Light Gray 2', hex: '#dee2e6' },
        { color: '#ced4da', name: 'Light Gray 3', hex: '#ced4da' },
        { color: '#adb5bd', name: 'Medium Gray', hex: '#adb5bd' }
      ];
      brandName = "Waiting for brand input...";
      fontFamily = "font-sans";
      headingClass = "text-gray-400";
      buttonClass = "bg-gray-200 hover:bg-gray-300 text-gray-500";
      backgroundClass = "bg-gradient-to-r from-gray-50 via-white to-gray-50";
      brandVoice = "Your brand voice will appear here after analysis...";
      buttonLabel = "Generate";
      break;
      
    default: // 'default' - should be very similar to empty but keep for backward compatibility
      colorPalette = [
        { color: '#0ea5e9', name: 'Primary Blue', hex: '#0ea5e9' },
        { color: '#38bdf8', name: 'Secondary Blue', hex: '#38bdf8' },
        { color: '#7dd3fc', name: 'Accent Blue', hex: '#7dd3fc' },
        { color: '#0f172a', name: 'Dark Blue', hex: '#0f172a' },
        { color: '#e0f2fe', name: 'Light Blue', hex: '#e0f2fe' }
      ];
      brandName = "Brandable.chat";
      fontFamily = "font-sans";
      headingClass = "text-brand-700";
      buttonClass = "bg-brand-600 hover:bg-brand-700 text-white";
      backgroundClass = "bg-gradient-to-r from-brand-200 via-brand-100 to-brand-300";
      brandVoice = "Building beautiful brand experiences, one conversation at a time.";
      buttonLabel = "Get Started";
      break;
  }

  return (
    <div className={`glass-card p-6 transition-all duration-1000 ${backgroundClass}`}>
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold ${headingClass} mb-2 transition-colors duration-700`}>
          {brandName}
        </h3>
        <div className={`inline-block h-1 w-10 ${headingClass} rounded transition-colors duration-700`}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-3">Color Palette</h4>
            <div className="flex flex-wrap gap-2 mb-4">
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
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Brand Voice</h4>
            <div className={`p-3 rounded-lg bg-white/50 ${fontFamily} transition-all duration-700`}>
              <p className={`${headingClass} text-sm`}>{brandVoice}</p>
            </div>
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
      
      <div className="mt-6 flex justify-center">
        <div className={`h-10 px-6 ${buttonClass} rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-700`}>
          {buttonLabel}
        </div>
      </div>

      <div className="mt-5 border-t pt-5">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Landing Page Generator</h4>
        <Textarea 
          placeholder="Describe the landing page you want to generate with this brand style..."
          className={`${fontFamily} mb-3 bg-white/50 transition-all duration-700`}
          rows={3}
        />
        <div className="flex justify-center">
          <Button 
            className={`${buttonClass} font-medium px-6 py-2 rounded-full transition-colors duration-700`}
          >
            Generate Landing Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StyleguidePreview;
