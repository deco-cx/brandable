
import React from 'react';
import { Sparkles, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5 text-brand-600" />
              <span className="text-lg font-bold">Brandable.chat</span>
            </div>
            <p className="text-gray-500 text-sm">Your landing pages — always on-brand</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Testimonials</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Brandable.chat. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://x.com/deco_cx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/getdeco/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
