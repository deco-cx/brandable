import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight, Server, Cloud } from 'lucide-react';
const DecoSection: React.FC = () => {
  return <section id="deco-section" className="py-20 bg-[#fcfbf6] text-[#1b401e]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <img src="/lovable-uploads/ccac7e82-bf5d-4376-87af-492aee896088.png" alt="deco.chat logo" className="h-16 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1b401e]">
              Powered by deco.chat — Open Source or Fully Managed
            </h2>
            <p className="text-xl text-[#1b401e]/80 max-w-2xl mx-auto">Brandable is built on deco.chat, the open platform where you can build your own AI agents like Lovable, Bolt, and thousands more!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Self-Host Option */}
            <div className="bg-white p-8 rounded-xl border border-[#1b401e]/10 flex flex-col h-full shadow-sm">
              <div className="mb-6">
                <div className="bg-[#1b401e]/5 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Server className="w-7 h-7 text-[#1b401e]" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1b401e]">Self-Host <span className="text-[#9eca50]">(Free Forever)</span></h3>
                <p className="text-[#1b401e]/80 mb-5">
                  Want full control? You can self-host the open source version of deco.chat — free forever.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start">
                  <div className="bg-[#9eca50]/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#9eca50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-[#1b401e]/80">Bring your own API keys</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#9eca50]/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#9eca50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-[#1b401e]/80">Run Brandable and other agents locally or on your own infra</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#9eca50]/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#9eca50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-[#1b401e]/80">Full transparency and auditability</p>
                </div>
              </div>
              
              <div>
                <a href="https://github.com/deco-cx/chat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b401e] focus-visible:ring-offset-2 disabled:opacity-50 border border-[#1b401e]/30 text-[#1b401e] hover:bg-[#1b401e]/5 h-10 px-4 py-2">
                  <Github className="mr-2 h-4 w-4" />
                  Self-host for Free
                </a>
              </div>
            </div>

            {/* Managed Platform Option */}
            <div className="bg-white p-8 rounded-xl border border-[#9eca50]/30 shadow-sm flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-[#9eca50]/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Cloud className="w-7 h-7 text-[#1b401e]" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1b401e]">Managed Platform</h3>
                <p className="text-[#1b401e]/80 mb-5">
                  Or go live instantly using our managed platform.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start">
                  <div className="bg-[#9eca50]/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#9eca50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-[#1b401e]/80">Use your own keys OR access our AI Gateway with 60+ models (OpenAI, Claude, Mistral, etc.)</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#9eca50]/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#9eca50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-[#1b401e]/80">Easily switch models per agent or use case</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#9eca50]/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#9eca50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-[#1b401e]/80">Built-in versioning, security, and scalability</p>
                </div>
              </div>
              
              <div>
                <a href="https://deco.chat/brandable" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#9eca50] to-[#8ab948] hover:from-[#8ab948] hover:to-[#79a53c] text-white font-medium px-5 py-2 rounded-md transition transform hover:scale-105 inline-flex items-center">
                  Create Agent Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-[#1b401e]/60">
            <p>Whatever your stack, Brandable adapts.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default DecoSection;