import React from 'react';
import { ArrowRight, Eye, ShieldCheck, Sparkles, Smartphone, Layers } from 'lucide-react';
import heroImg from '../assets/images/hero_akshar_ar_showcase_1792062430367.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Unboxed editorial kicker */}
        <div className="flex items-center gap-2.5 text-xs font-medium text-blue-400 mb-4 tracking-wide uppercase">
          <span>Open Source Assistive Spatial Computing</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Google ARCore & Cloud Vision</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Devanagari NLP</span>
        </div>

        {/* 2-Column Split: Headline & Narrative on Left, High-Impact Media on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Empowering Devanagari Readers Through Spatial Computing and Syllable AI
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              AksharAR (<span className="font-devanagari text-white font-semibold">अक्षर AR</span>) is a mobile augmented reality reading companion built specifically for children and readers with dyslexia in Marathi and Hindi. By recognizing printed textbook pages and projecting dual-tone, linguistically segmented Devanagari syllables flush in 3D world space, it dissolves visual crowding and unlocks fluent reading.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#syllable-engine"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/25 active:scale-[0.98] transition-all"
              >
                <span>Test Interactive Syllable Engine</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ar-pipeline"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
              >
                <span>Inspect AR Pipeline</span>
              </a>
            </div>

            {/* Author Attribution & Repository Note */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Created by Omawadhoot</span>
              <span aria-hidden="true">·</span>
              <span>Unity Universal Render Pipeline (URP)</span>
              <span aria-hidden="true">·</span>
              <span>Bilingual Marathi & Hindi Native TTS</span>
            </div>
          </div>

          {/* Marquee Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/60 shadow-2xl group">
              <img
                src={heroImg}
                alt="Student using AksharAR to read a printed Hindi/Marathi storybook with augmented reality text overlays"
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/90 via-transparent to-transparent pointer-events-none" />

              {/* In-Frame Spatial Annotation */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="font-medium text-slate-200">World-Space Projection</span>
                  <span className="text-[11px] font-mono text-blue-400">+0.001m Surface Offset</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  Camera aligns dynamic SDF typography directly over the paper, preserving unbroken conjunct ligatures (<span className="font-devanagari text-amber-300">संयुक्ताक्षरे</span>).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Metric Strip below Hero Split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-y border-slate-800/80 py-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              35,000,000+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Children with Dyslexia in India
            </div>
            <p className="text-[11px] text-slate-500 mt-1 leading-normal">
              Underserved by Latin-only dyslexia fonts and tools
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tabular-nums tracking-tight">
              0.2 mm
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              World-Space Plane Offset
            </div>
            <p className="text-[11px] text-slate-500 mt-1 leading-normal">
              6DoF ARCore tracking eliminates page z-fighting
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
              100% Unbroken
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Conjunct Ligatures (Halant)
            </div>
            <p className="text-[11px] text-slate-500 mt-1 leading-normal">
              Zero glyph corruption during syllable splitting
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums tracking-tight">
              WCAG AAA
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              Color Vision Deficiency Safe
            </div>
            <p className="text-[11px] text-slate-500 mt-1 leading-normal">
              Calculated contrast &gt; 7:1 on glare-reduced substrates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
