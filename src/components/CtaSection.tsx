
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="get-started" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-blue-900 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 h-64 w-64 bg-brand-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="h-12 w-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Try Brandable.chat and ship your next page in your brand's voice.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join hundreds of brands who are creating consistent, on-brand experiences with Brandable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100 rounded-full px-8">
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3min</div>
              <div className="text-white/70 text-sm">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/70 text-sm">On Brand</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">∞</div>
              <div className="text-white/70 text-sm">Pages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
