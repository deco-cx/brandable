
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Terminal, Key, Bot, Code2, Database } from 'lucide-react';

const ModelSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              Bring Your Own Model. Use Your Own Keys.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Brandable gives you full control over your backend.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Bot className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Choose Any LLM Provider</h3>
                    <p className="text-gray-300">
                      Connect to OpenAI, Anthropic, Mistral, or your custom models. Brandable adapts to your preferred AI infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Key className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure API Integration</h3>
                    <p className="text-gray-300">
                      Plug in your own API keys securely. Your credentials stay under your control while Brandable handles the rest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise-Ready</h3>
                    <p className="text-gray-300">
                      Ideal for teams with custom infrastructure, security policies, or specific model behavior requirements.
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center space-x-2 px-6 py-2 rounded-md bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors text-sm">
                <span>Prefer Claude? Using Mistral? Brandable adapts.</span>
              </button>
            </div>

            <div className="lg:col-span-5">
              <Card className="bg-gray-800 border-gray-700 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-950 p-2 flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-400 ml-2">.env</span>
                  </div>
                  <div className="p-6 font-mono text-sm overflow-x-auto">
                    <div className="space-y-2 animate-pulse-slow">
                      <div className="flex">
                        <span className="text-purple-400">OPENAI_API_KEY</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-green-400">sk-**************************</span>
                      </div>
                      <div className="flex">
                        <span className="text-purple-400">ANTHROPIC_API_KEY</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-green-400">sk-ant-*********************</span>
                      </div>
                      <div className="flex">
                        <span className="text-purple-400">MISTRAL_API_KEY</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-green-400">********-****************</span>
                      </div>
                      <div className="flex">
                        <span className="text-purple-400">MODEL_PROVIDER</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-green-400">"anthropic"</span>
                      </div>
                      <div className="flex">
                        <span className="text-purple-400">PREFERRED_MODEL</span>
                        <span className="text-gray-400">=</span>
                        <span className="text-green-400">"claude-3-opus-20240229"</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center mt-8">
            <div className="flex items-center justify-center h-12 w-28 bg-gray-800 rounded-lg p-2">
              <img src="https://avatars.githubusercontent.com/u/14957082" alt="OpenAI" className="h-6 object-contain" />
            </div>
            <div className="flex items-center justify-center h-12 w-28 bg-gray-800 rounded-lg p-2">
              <img src="https://avatars.githubusercontent.com/u/67517744" alt="Anthropic" className="h-6 object-contain" />
            </div>
            <div className="flex items-center justify-center h-12 w-28 bg-gray-800 rounded-lg p-2">
              <img src="https://avatars.githubusercontent.com/u/119692456" alt="Mistral" className="h-6 object-contain" />
            </div>
            <div className="flex items-center justify-center h-12 w-28 bg-gray-800 rounded-lg p-2">
              <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" className="h-6 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
