import React, { useState } from 'react';
import { ExternalLink, Github, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080B14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-black text-white shadow-md shadow-blue-500/20 font-devanagari">
            अ
          </span>
          <span>AksharAR</span>
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#challenge" className="transition-colors hover:text-white whitespace-nowrap shrink-0">
            The Challenge
          </a>
          <a href="#syllable-engine" className="transition-colors hover:text-white whitespace-nowrap shrink-0">
            Syllable Engine
          </a>
          <a href="#ar-pipeline" className="transition-colors hover:text-white whitespace-nowrap shrink-0">
            AR Viewfinder
          </a>
          <a href="#reading-slate" className="transition-colors hover:text-white whitespace-nowrap shrink-0">
            Reading Slate
          </a>
        </nav>

        {/* Zone 3: 1 primary action & repo link */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/omawadhoot/AksharAR"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="#syllable-engine"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 active:scale-95 transition-all shadow-md shadow-blue-600/20 whitespace-nowrap shrink-0"
          >
            <span>Interactive Demo</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#0A0E1A] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            <a
              href="#challenge"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              The Challenge
            </a>
            <a
              href="#syllable-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Syllable Engine
            </a>
            <a
              href="#ar-pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              AR Viewfinder
            </a>
            <a
              href="#reading-slate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Reading Slate
            </a>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <a
                href="https://github.com/omawadhoot/AksharAR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>omawadhoot/AksharAR</span>
              </a>
              <a
                href="#syllable-engine"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-blue-400 font-semibold"
              >
                Test Demo →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
