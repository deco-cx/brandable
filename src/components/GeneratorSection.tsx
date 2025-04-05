
import React from 'react';
import LandingPageGenerator from './LandingPageGenerator';
import { Palette, Sparkles, Rocket } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty';
}

const GeneratorSection: React.FC<Props> = ({ theme }) => {
  // Theme-specific styling
  const getThemeStyles = () => {
    switch (theme) {
      case 'eco':
        return {
          bgGradient: 'bg-gradient-to-br from-green-50 to-purple-50',
          iconColor: 'text-green-600',
          borderColor: 'border-green-200',
          hoverBg: 'hover:bg-green-50',
          headingColor: 'text-green-800'
        };
      case 'tech':
        return {
          bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
          iconColor: 'text-blue-600',
          borderColor: 'border-blue-200',
          hoverBg: 'hover:bg-blue-50',
          headingColor: 'text-blue-700'
        };
      case 'luxury':
        return {
          bgGradient: 'bg-gradient-to-br from-amber-50 to-stone-100',
          iconColor: 'text-yellow-700',
          borderColor: 'border-amber-200',
          hoverBg: 'hover:bg-amber-50',
          headingColor: 'text-yellow-800'
        };
      case 'playful':
        return {
          bgGradient: 'bg-gradient-to-br from-pink-50 to-yellow-50',
          iconColor: 'text-pink-500',
          borderColor: 'border-pink-200',
          hoverBg: 'hover:bg-pink-50',
          headingColor: 'text-pink-600'
        };
      case 'minimalist':
        return {
          bgGradient: 'bg-gradient-to-br from-neutral-50 to-neutral-100',
          iconColor: 'text-neutral-600',
          borderColor: 'border-neutral-200',
          hoverBg: 'hover:bg-neutral-50',
          headingColor: 'text-neutral-800'
        };
      default:
        return {
          bgGradient: 'bg-gradient-to-br from-brand-100 to-indigo-50',
          iconColor: 'text-brand-600',
          borderColor: 'border-brand-200',
          hoverBg: 'hover:bg-brand-50',
          headingColor: 'text-brand-700'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <section id="generator" className={`py-20 ${styles.bgGradient} relative`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <LandingPageGenerator theme={theme} />
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className={`bg-white/80 backdrop-blur-sm ${styles.borderColor} border shadow-lg hover:shadow-xl transition-all duration-300 ${styles.hoverBg} group`}>
            <CardContent className="p-6">
              <div className={`${styles.iconColor} mb-4 flex justify-center`}>
                <Palette size={32} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className={`text-lg font-medium mb-3 ${styles.headingColor}`}>Complete Styleguide</h3>
              <p className="text-gray-600">
                Your brand's colors, typography, and design elements all in one place.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`bg-white/80 backdrop-blur-sm ${styles.borderColor} border shadow-lg hover:shadow-xl transition-all duration-300 ${styles.hoverBg} group`}>
            <CardContent className="p-6">
              <div className={`${styles.iconColor} mb-4 flex justify-center`}>
                <Sparkles size={32} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className={`text-lg font-medium mb-3 ${styles.headingColor}`}>Brand-Focused AI</h3>
              <p className="text-gray-600">
                An AI assistant that knows your brand inside and out.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`bg-white/80 backdrop-blur-sm ${styles.borderColor} border shadow-lg hover:shadow-xl transition-all duration-300 ${styles.hoverBg} group`}>
            <CardContent className="p-6">
              <div className={`${styles.iconColor} mb-4 flex justify-center`}>
                <Rocket size={32} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className={`text-lg font-medium mb-3 ${styles.headingColor}`}>Instant Pages</h3>
              <p className="text-gray-600">
                Generate landing pages in seconds that stay true to your identity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GeneratorSection;
