import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Split, EyeOff, Layers, BookOpen } from 'lucide-react';

export const ScriptChallengeSection: React.FC = () => {
  const [activeComparison, setActiveComparison] = useState<'naive' | 'akshar'>('akshar');

  return (
    <section id="challenge" className="py-20 border-b border-slate-800/80 bg-[#070A12]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            The Linguistic & Neurodivergent Reality
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Why Standard Dyslexia Tools Fail on Devanagari Script
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Assistive reading tools designed in the West assume the Latin alphabet—linear, single-baseline, and easily kerned. Applying Latin-centric spacing to Devanagari destroys words, detaches vowel matras, and renders Indian textbooks completely unreadable for dyslexic children.
          </p>
        </div>

        {/* Interactive Comparison Widget */}
        <div className="mt-12 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Linguistic Demonstration: <span className="font-devanagari text-white font-bold">विद्यार्थी</span> (Student)
              </div>
              <div className="text-sm text-slate-300 mt-0.5">
                Compare standard letter-spacing algorithms against AksharAR's cluster-aware segmentation.
              </div>
            </div>

            {/* Interactive Toggle Control */}
            <div className="inline-flex rounded-lg bg-slate-800/80 p-1 border border-slate-700/80 shrink-0">
              <button
                onClick={() => setActiveComparison('naive')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeComparison === 'naive'
                    ? 'bg-rose-950/80 text-rose-300 border border-rose-800/50 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Naive Spacing (Standard Tools)
              </button>
              <button
                onClick={() => setActiveComparison('akshar')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeComparison === 'akshar'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AksharAR Syllable Engine
              </button>
            </div>
          </div>

          {/* Visual Output Display */}
          <div className="py-10 flex flex-col items-center justify-center text-center">
            {activeComparison === 'naive' ? (
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-rose-300 bg-rose-950/50 border border-rose-800/40 rounded-full">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                  <span>Result: Broken Halants & Orphaned Matras</span>
                </div>

                <div className="font-devanagari text-4xl sm:text-5xl font-bold tracking-[0.45em] text-rose-300/80 py-4 select-none">
                  व िक द ् य ा र ् थ ी
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  When conventional Latin tools widen tracking indiscriminately, the virama (<span className="text-rose-400 font-mono font-bold">्</span>) separates from consonants, conjunct clusters collapse, and the child faces a string of unpronounceable disjointed fragments.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-950/50 border border-emerald-800/40 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AksharAR Result: Unbroken Phonological Akshars</span>
                </div>

                <div className="font-devanagari text-4xl sm:text-5xl font-bold py-4 flex items-center justify-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-800/50">
                    वि
                  </span>
                  <span className="text-slate-600 font-mono text-xl">·</span>
                  <span className="px-3 py-1 rounded-lg bg-amber-950/60 text-amber-300 border border-amber-800/50">
                    द्या
                  </span>
                  <span className="text-slate-600 font-mono text-xl">·</span>
                  <span className="px-3 py-1 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-800/50">
                    र्थी
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  The <code className="text-blue-300 font-mono">DevanagariSyllableParser</code> preserves the complex ligatures (<span className="font-devanagari text-white">द्या</span> and <span className="font-devanagari text-white">र्थी</span>) intact while alternating CVD-safe colors to give the child distinct visual anchors.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 3 Core Structural Obstacles of Devanagari */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60 font-bold text-sm">
                01
              </span>
              <h3 className="text-base font-semibold text-white">The Shirorekha Bar</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Devanagari words are anchored beneath a continuous top line (<span className="font-devanagari text-slate-200">शिरोरेषा</span>). For dyslexic eyes, individual character boundaries fuse into an intimidating solid block, triggering severe visual crowding.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-950 text-amber-400 border border-amber-800/60 font-bold text-sm">
                02
              </span>
              <h3 className="text-base font-semibold text-white">Multi-Directional Matras</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Vowel diacritics sprout above, below, before, or after the consonant stem. Scanning them requires multi-axis saccadic eye jumps, causing line skipping and cognitive overload in young readers.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-bold text-sm">
                03
              </span>
              <h3 className="text-base font-semibold text-white">Samyuktakshars & Halants</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Consonant conjuncts (<span className="font-devanagari text-slate-200">संयुक्ताक्षरे</span>) blend 2 to 3 glyphs into a single fused ligature. Without phonetic syllable segmentation, dyslexic children cannot decompose what sounds to pronounce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
