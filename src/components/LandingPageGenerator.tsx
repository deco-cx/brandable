import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
interface Props {
  theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty';
}
const LandingPageGenerator: React.FC<Props> = ({
  theme
}) => {
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

  // Theme-specific styling
  const getThemeStyles = () => {
    switch (theme) {
      case 'eco':
        return {
          text: 'text-green-800',
          bg: 'bg-green-100',
          accent: 'text-green-600',
          button: 'bg-green-700 hover:bg-green-800 text-white',
          name: 'Amazonian Beauty',
          style: 'eco-friendly',
          headline: 'Natural Beauty, Sustainably Sourced',
          description: 'Discover our collection of eco-friendly beauty products from the Amazon rainforest.',
          preview: 'rainforestbeauty.co',
          ctaLabel: 'Shop Collection',
          gradientBg: 'bg-gradient-to-br from-green-50 to-purple-50'
        };
      case 'tech':
        return {
          text: 'text-blue-800',
          bg: 'bg-blue-100',
          accent: 'text-blue-600',
          button: 'bg-blue-700 hover:bg-blue-800 text-white',
          name: 'Quantum Tech',
          style: 'modern-tech',
          headline: 'Next-Gen Cloud Solutions',
          description: 'Enterprise-grade AI and cloud infrastructure for the digital transformation era.',
          preview: 'quantumtech.io',
          ctaLabel: 'Get Started',
          gradientBg: 'bg-gradient-to-br from-blue-50 to-cyan-50'
        };
      case 'luxury':
        return {
          text: 'text-yellow-800',
          bg: 'bg-amber-100',
          accent: 'text-yellow-700',
          button: 'bg-yellow-700 hover:bg-yellow-800 text-white',
          name: 'Elegance Watches',
          style: 'premium-luxury',
          headline: 'Timeless Elegance, Unparalleled Craftsmanship',
          description: 'Exquisite timepieces crafted for those who appreciate the finer things in life.',
          preview: 'elegancewatches.com',
          ctaLabel: 'View Collection',
          gradientBg: 'bg-gradient-to-br from-amber-50 to-stone-100'
        };
      case 'playful':
        return {
          text: 'text-pink-600',
          bg: 'bg-pink-100',
          accent: 'text-orange-500',
          button: 'bg-orange-500 hover:bg-orange-600 text-white',
          name: 'FunTime Kids',
          style: 'playful-energetic',
          headline: 'Learn Through Play, Grow Every Day!',
          description: 'Educational activities that make learning fun for children of all ages.',
          preview: 'funtimekids.edu',
          ctaLabel: 'Join the Fun',
          gradientBg: 'bg-gradient-to-br from-pink-50 to-yellow-50'
        };
      case 'minimalist':
        return {
          text: 'text-neutral-800',
          bg: 'bg-neutral-100',
          accent: 'text-neutral-600',
          button: 'bg-neutral-800 hover:bg-neutral-900 text-white',
          name: 'Mono Design',
          style: 'minimalist',
          headline: 'Less Is More',
          description: 'Clean, purposeful design that focuses on what truly matters.',
          preview: 'monodesign.studio',
          ctaLabel: 'See Our Work',
          gradientBg: 'bg-gradient-to-br from-neutral-50 to-neutral-100'
        };
      default:
        // 'empty'
        return {
          text: 'text-brand-700',
          bg: 'bg-brand-100',
          accent: 'text-brand-600',
          button: 'bg-brand-600 hover:bg-brand-700 text-white',
          name: 'Brandable',
          style: 'modern',
          headline: 'Your brand. Your style. Your voice.',
          description: 'Brandable interviews you, captures your identity, and builds landing pages that are always on-brand.',
          preview: 'brandable.chat',
          ctaLabel: 'Get Started',
          gradientBg: 'bg-gradient-to-br from-blue-50 to-indigo-50'
        };
    }
  };
  const styles = getThemeStyles();
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h3 className={`text-2xl md:text-3xl font-bold ${styles.text}`}>
          From Chat to Page — Instantly.
        </h3>
        <p className="text-gray-600">
          Once your brand is captured, Brandable can generate entire landing pages for products, 
          launches, or experiments — all perfectly on-brand.
        </p>
        
        <div className={`${styles.bg} p-4 rounded-lg font-mono text-sm opacity-0 ${showCode ? 'animate-fade-in' : ''}`}>
          <div className="flex items-center space-x-2 mb-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="text-gray-500">Generating landing page...</span>
          </div>
          <div className={styles.accent}>
            <span>{'{'}</span> <br />
            <span className="ml-4">"name": "{styles.name}"</span> <br />
            <span className="ml-4">"style": "{styles.style}"</span> <br />
            <span className="ml-4">"components": ["hero", "features", "testimonials", "cta"]</span> <br />
            <span>{'}'}</span>
          </div>
        </div>
        
        
      </div>
      
      <div className={`bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-500 ${showPreview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="h-8 bg-gray-100 flex items-center px-4 space-x-1">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-gray-500">Preview: {styles.preview}</div>
        </div>
        <div className="relative">
          <div className={`p-6 ${styles.gradientBg} transition-colors duration-700`}>
            <h3 className={`text-2xl font-bold ${styles.text} mb-4 transition-colors duration-700`}>
              {styles.headline}
            </h3>
            <p className="text-gray-600 mb-6">
              {styles.description}
            </p>
            <button className={`px-6 py-2 rounded-full ${styles.button} transition-colors duration-700`}>
              {styles.ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default LandingPageGenerator;