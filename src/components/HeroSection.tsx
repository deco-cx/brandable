
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ChatSimulation from './ChatSimulation';

interface Props {
  onThemeChange: (theme: 'default' | 'eco') => void;
}

const HeroSection: React.FC<Props> = ({ onThemeChange }) => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 h-64 w-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 h-64 w-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-900">
              Create a Lovable for your brand.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Brandable interviews you, captures your identity, and builds landing pages that are always on-brand. All in one agent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white rounded-full px-8" onClick={() => document.getElementById('styleguide')?.scrollIntoView()}>
                Build Yours Now
              </Button>
              <Button size="lg" variant="outline" className="border-brand-200 text-brand-700 hover:bg-brand-50 rounded-full px-8">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="transform transition-all duration-500 hover:scale-105">
              <ChatSimulation onThemeChange={onThemeChange} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
