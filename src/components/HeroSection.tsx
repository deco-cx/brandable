import React from 'react';
import { Button } from '@/components/ui/button';
interface Props {
  onThemeChange: (theme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty') => void;
  currentTheme: 'eco' | 'tech' | 'luxury' | 'playful' | 'minimalist' | 'empty';
}
const HeroSection: React.FC<Props> = ({
  onThemeChange,
  currentTheme
}) => {
  return <section className="relative pt-32 pb-32 overflow-hidden">
      {/* Improved bottom gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-brand-50 to-white -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 h-64 w-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
      <div style={{
      animationDelay: "2s"
    }} className="absolute top-20 left-10 h-64 w-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-900 tracking-tight">
            Create a Lovable for your brand.
          </h1>
          <p className="text-xl font-semibold text-gray-700 mb-8">
            Brandable interviews you, captures your identity, and builds landing pages that are always on-brand. All in one agent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white rounded-md px-8 font-bold text-base" onClick={() => document.getElementById('styleguide')?.scrollIntoView()}>
              Build Yours Now
            </Button>
            <Button size="lg" variant="outline" className="border-brand-200 text-brand-700 hover:bg-brand-50 rounded-md px-8 font-bold text-base">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;