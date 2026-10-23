import React from 'react';
import { Github, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060810] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-black text-white shadow-md shadow-blue-500/20 font-devanagari">
              अ
            </span>
            <div>
              <span className="text-base font-bold text-white tracking-tight">AksharAR</span>
              <span className="text-xs text-slate-500 block">तुमचा जादूई वाचन सोबती</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400">
            <a href="#challenge" className="hover:text-white transition-colors">The Challenge</a>
            <a href="#syllable-engine" className="hover:text-white transition-colors">Syllable Engine</a>
            <a href="#ar-pipeline" className="hover:text-white transition-colors">AR Architecture</a>
            <a href="#reading-slate" className="hover:text-white transition-colors">Reading Slate</a>
            <a
              href="https://github.com/omawadhoot/AksharAR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
            <a
              href="#syllable-engine"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Interactive Simulator</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Built to showcase the open-source AksharAR project created by <strong className="text-slate-300">Omawadhoot</strong>.
          </div>
          <div className="flex items-center gap-1">
            <span>Grounding: WCAG AAA Contrast & Indic Abugida Orthography</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
