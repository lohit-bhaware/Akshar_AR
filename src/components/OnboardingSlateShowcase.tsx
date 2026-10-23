import React from 'react';
import { Sparkles, Sliders, Palette, CheckCircle, BarChart3, HeartHandshake } from 'lucide-react';
import slateImg from '../assets/images/reading_slate_onboarding_1792062431992.jpg';

export const OnboardingSlateShowcase: React.FC = () => {
  return (
    <section id="reading-slate" className="py-20 border-b border-slate-800/80 bg-[#080C16]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Non-Stigmatizing Calibration
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            The 4-Step "वाचन पाटी" (Reading Slate) Onboarding Wizard
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Dyslexic children often feel anxiety around medical questionnaires and diagnostic tests. AksharAR replaces clinical evaluations with an interactive, playful digital slate where children simply tap what looks clear and comfortable to their eyes.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/60 shadow-2xl group">
              <img
                src={slateImg}
                alt="AksharAR Reading Slate onboarding tablet displaying Devanagari calligraphy on pastel substrate tints"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs">
                <div className="flex items-center justify-between text-slate-300 font-medium mb-1">
                  <span>Interactive Sample Slate</span>
                  <span className="text-emerald-400 font-mono">Step 04 Live Preview</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  "सुंदर फुले उमलली बागेत छान / हळूच वारा सांगे आनंदाचे गाण" dynamically reflects changes in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Steps */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-950 text-blue-400 border border-blue-800 text-xs font-bold font-mono">
                  01
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Spacing & Letter Tracking</h3>
                  <div className="text-xs text-blue-400 font-devanagari">
                    तुम्हाला कोणते वाचन अंतर योग्य वाटते?
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-400 pl-10">
                Chooses between Mild (1.15x), Moderate (1.38x), and Intensive (1.65x) spacing using TextMesh Pro SDF tracking to eliminate character crowding.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-950 text-amber-400 border border-amber-800 text-xs font-bold font-mono">
                  02
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Dual-Tone CVD Color Contrast</h3>
                  <div className="text-xs text-amber-400 font-devanagari">
                    कोणता अक्षरांचा रंग वाचायला सोपा वाटतो?
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-400 pl-10">
                Calibrates alternating syllable colors (Classic Cobalt, Warm Amber, Violet Iris, or Monochrome) with mathematically guaranteed WCAG AAA contrast ratios.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold font-mono">
                  03
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Substrate Glare Reduction</h3>
                  <div className="text-xs text-emerald-400 font-devanagari">
                    कोणता कागदाचा रंग वाचायला सोपा वाटतो?
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-400 pl-10">
                Selects Warm Cream (35% glare reduction) or Mint Ice (Meares-Irlen visual stress filter) to replace bleached harsh paper backgrounds.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-950 text-purple-400 border border-purple-800 text-xs font-bold font-mono">
                  04
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Multisensory Confirmation & Telemetry</h3>
                  <div className="text-xs text-purple-400 font-devanagari">
                    वाचन पूर्वावलोकन  •  Reading Preview
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-400 pl-10">
                The child listens to a warm spoken greeting in Marathi (<span className="font-devanagari">अक्षर ए आर मध्ये तुमचे स्वागत आहे</span>), while privacy-first telemetry logs dwell times without personal profiling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
