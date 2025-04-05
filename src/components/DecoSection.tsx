
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight, Server, Cloud } from 'lucide-react';

const DecoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">
              Powered by deco.chat — Open Source or Fully Managed
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Brandable is built on deco.chat, the open platform for internal AI agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Self-Host Option */}
            <div className="bg-gray-800/60 p-8 rounded-xl border border-gray-700 flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-gray-700/50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Server className="w-7 h-7 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Self-Host <span className="text-green-400">(Free Forever)</span></h3>
                <p className="text-gray-300 mb-5">
                  Want full control? You can self-host the open source version of deco.chat — free forever.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start">
                  <div className="bg-green-500/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Bring your own API keys</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Run Brandable and other agents locally or on your own infra</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Full transparency and auditability</p>
                </div>
              </div>
              
              <div>
                <a 
                  href="https://github.com/deco-cx/chat" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border border-gray-400 text-gray-100 hover:bg-gray-700/50 h-10 px-4 py-2"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Self-host for Free
                </a>
              </div>
            </div>

            {/* Managed Platform Option */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-800/20 p-8 rounded-xl border border-green-700/30 flex flex-col h-full">
              <div className="mb-6">
                <div className="bg-green-500/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Cloud className="w-7 h-7 text-green-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Managed Platform</h3>
                <p className="text-gray-300 mb-5">
                  Or go live instantly using our managed platform.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start">
                  <div className="bg-green-500/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Use your own keys OR access our AI Gateway with 60+ models (OpenAI, Claude, Mistral, etc.)</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Easily switch models per agent or use case</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/20 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Built-in versioning, security, and scalability</p>
                </div>
              </div>
              
              <div>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium px-5 py-2 rounded-md transition transform hover:scale-105 inline-flex items-center">
                  Create Agent Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-400">
            <p>Whatever your stack, Brandable adapts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecoSection;
