import React from 'react';
import { Linkedin } from 'lucide-react';




export const Footer: React.FC = () => {
  return (
    <footer className="bg-optarix-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-heading font-extrabold tracking-wider text-white mb-4">
              OPTARIX<span className="text-optarix-cyan">.</span>
            </h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Intelligence-Led Executive Search & Recruitment. 
              Predictable outcomes, scalable speed, and exceptional quality for modern enterprises
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sanjveen-singh-878715b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-optarix-cyan hover:text-optarix-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 Optarix Research. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a
              href="https://privacypolicy.optarixresearch.com/"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            {/* <a
              href="https://terms.optarixresearch.com/"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
