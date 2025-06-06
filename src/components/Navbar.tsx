
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToDecoSection = () => {
    document.getElementById('deco-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-brand-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-800">Brandable</span>
          </div>
          <Button variant="default" className="bg-brand-600 hover:bg-brand-700" onClick={scrollToDecoSection}>
            Build Yours Now
          </Button>
        </div>
      </div>
    </header>;
};

export default Navbar;
