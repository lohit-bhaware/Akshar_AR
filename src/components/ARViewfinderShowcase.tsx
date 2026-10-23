import React, { useState } from 'react';
import { Camera, Scan, Sparkles, Volume2, Maximize2, Compass } from 'lucide-react';
import viewfinderImg from '../assets/images/ar_viewfinder_mobile_mockup_1792062431665.jpg';

export const ARViewfinderShowcase: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'poem' | 'chapter'>('poem');

  return (
    <section id="ar-pipeline" className="py-20 border-b border-slate-800/80 bg-[#070A14]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Mobile Viewfinder Graphic */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/60 shadow-2xl group">
              <img
                src={viewfinderImg}
                alt="AksharAR Mobile HUD Viewfinder showing AR overlay with cobalt blue syllables on printed storybook"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/90 via-transparent to-transparent pointer-events-none" />

              {/* AR HUD Telemetry Callout */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Scan className="w-3.5 h-3.5 text-blue-400" />
                    <span>Live ARCore Tracking</span>
                  </span>
                  <span className="font-mono text-emerald-400 text-[11px]">
                    Pose Filter: 60 FPS Locked
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Dynamic metric width: <span className="font-mono text-slate-100">0.220m</span> · Depth: <span className="font-mono text-slate-100">0.25m</span> · ARTrackedImageManager synchronized.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Architecture & Dual Reading Modes */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                Spatial User Experience
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
                The In-Situ AR Viewfinder & Reading Modes
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Rather than forcing children to read off disjointed screens, AksharAR overlays directly onto their existing physical classroom textbooks using Google ARCore and Unity Universal Render Pipeline (URP).
              </p>
            </div>

            {/* Mode Switcher Demo */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Select Active Reading Mode
                </span>
                <div className="inline-flex rounded-lg bg-slate-800/80 p-0.5 border border-slate-700/80">
                  <button
                    onClick={() => setActiveMode('poem')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeMode === 'poem'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    कविता (Poem Mode)
                  </button>
                  <button
                    onClick={() => setActiveMode('chapter')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeMode === 'chapter'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    धडा / पाठ (Chapter Mode)
                  </button>
                </div>
              </div>

              {activeMode === 'poem' ? (
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                    <strong>Poem Mode (कविता):</strong> Tailored for rhythmic stanzas. Widens vertical line gaps by 1.65x and highlights rhyming end-syllables to assist phonological recall.
                  </div>
                  <div className="font-devanagari text-lg text-slate-200 p-4 bg-slate-950/60 rounded-lg border border-slate-800 space-y-2">
                    <p>
                      <span className="text-slate-100">सुं</span>
                      <span className="text-blue-400">दर</span>{' '}
                      <span className="text-slate-100">फु</span>
                      <span className="text-blue-400">ले</span>{' '}
                      <span className="text-slate-100">उ</span>
                      <span className="text-blue-400">म</span>
                      <span className="text-slate-100">ल</span>
                      <span className="text-blue-400">ली</span>{' '}
                      <span className="text-slate-100">बा</span>
                      <span className="text-blue-400">गे</span>
                      <span className="text-slate-100">त</span>{' '}
                      <span className="text-amber-300 font-bold">छान</span>
                    </p>
                    <p>
                      <span className="text-slate-100">ह</span>
                      <span className="text-blue-400">ळू</span>
                      <span className="text-slate-100">च</span>{' '}
                      <span className="text-slate-100">वा</span>
                      <span className="text-blue-400">रा</span>{' '}
                      <span className="text-slate-100">सां</span>
                      <span className="text-blue-400">गे</span>{' '}
                      <span className="text-slate-100">आ</span>
                      <span className="text-blue-400">नं</span>
                      <span className="text-slate-100">दा</span>
                      <span className="text-blue-400">चे</span>{' '}
                      <span className="text-amber-300 font-bold">गाण</span>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200">
                    <strong>Chapter Mode (धडा):</strong> Designed for dense narrative passages. Implements paragraph reflow, line bounding guides, and touch-to-speak sentence isolation.
                  </div>
                  <div className="font-devanagari text-base leading-relaxed text-slate-200 p-4 bg-slate-950/60 rounded-lg border border-slate-800">
                    <span className="text-slate-100">एक</span>{' '}
                    <span className="text-blue-400">दा</span>{' '}
                    <span className="text-slate-100">जं</span>
                    <span className="text-blue-400">ग</span>
                    <span className="text-slate-100">ला</span>
                    <span className="text-blue-400">त</span>{' '}
                    <span className="text-slate-100">मो</span>
                    <span className="text-blue-400">ठा</span>{' '}
                    <span className="text-slate-100">सिं</span>
                    <span className="text-blue-400">ह</span>{' '}
                    <span className="text-slate-100">झा</span>
                    <span className="text-blue-400">डा</span>
                    <span className="text-slate-100">खा</span>
                    <span className="text-blue-400">ली</span>{' '}
                    <span className="text-slate-100">झां</span>
                    <span className="text-blue-400">प</span>
                    <span className="text-slate-100">ला</span>{' '}
                    <span className="text-blue-400">हो</span>
                    <span className="text-slate-100">ता.</span>{' '}
                    <span className="text-slate-100">ते</span>
                    <span className="text-blue-400">व</span>
                    <span className="text-slate-100">ढ्या</span>
                    <span className="text-blue-400">त</span>{' '}
                    <span className="text-slate-100">ए</span>
                    <span className="text-blue-400">क</span>{' '}
                    <span className="text-slate-100">ल</span>
                    <span className="text-blue-400">हा</span>
                    <span className="text-slate-100">न</span>{' '}
                    <span className="text-slate-100">उं</span>
                    <span className="text-blue-400">दी</span>
                    <span className="text-slate-100">र</span>{' '}
                    <span className="text-slate-100">ति</span>
                    <span className="text-blue-400">थे</span>{' '}
                    <span className="text-slate-100">आ</span>
                    <span className="text-blue-400">ला.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Raycast Depth Math</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Calculates physical metric crop width in meters based on real camera plane raycasts.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Volume2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Touch-to-Read Audio</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Native Android Marathi TTS at 0.9x speed triggers on word or line taps.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
