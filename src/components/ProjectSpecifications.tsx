import React from 'react';
import { Layers, Cpu, Globe, Shield, Terminal, Smartphone } from 'lucide-react';

export const ProjectSpecifications: React.FC = () => {
  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#070A12]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            System & Repository Specifications
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Technical Stack & Implementation Matrix
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Every layer in AksharAR is engineered for low latency, privacy compliance, and accessibility without medical gatekeeping.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-5 h-5 text-blue-400" />
              <h3 className="text-base font-semibold text-white">Unity 3D & XR Foundation</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• Unity Universal Render Pipeline (URP)</li>
              <li>• Google ARCore Extensions & AR Foundation</li>
              <li>• MutableRuntimeReferenceImageLibrary for live page anchoring</li>
              <li>• UI Toolkit with custom runtime themes</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-semibold text-white">OCR & Backend Gateway</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• Google Cloud Vision API (<code className="text-emerald-300">DOCUMENT_TEXT_DETECTION</code>)</li>
              <li>• Node.js & Express proxy deployed on Vercel</li>
              <li>• 10MB payload buffer for high-resolution page frames</li>
              <li>• Zero client-side API key exposure</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <Terminal className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-semibold text-white">Indic Linguistic Engine</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• Custom C# Devanagari Unicode syllable parser</li>
              <li>• Unbroken halant (<span className="font-devanagari text-slate-200">्</span>) samyuktakshar protection</li>
              <li>• TextMesh Pro SDF tracking (<code className="text-amber-300">&lt;cspace&gt;</code>) injection</li>
              <li>• Dual-tone alternating CVD-safe palette rendering</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-purple-400" />
              <h3 className="text-base font-semibold text-white">Multisensory Accessibility</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• Android Native <code className="text-purple-300">TextToSpeech</code> bridge (<code className="text-purple-300">mr_IN</code> / <code className="text-purple-300">hi_IN</code>)</li>
              <li>• 0.9x calibrated playback speed for auditory comprehension</li>
              <li>• Touch-to-read line isolation and word karaoke</li>
              <li>• Meares-Irlen visual stress substrate tinting (Mint & Cream)</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="w-5 h-5 text-sky-400" />
              <h3 className="text-base font-semibold text-white">Spatial Depth & Pose Filtering</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• ARRaycastManager surface depth metric estimation</li>
              <li>• Automatic camera sensor rotation & aspect crop</li>
              <li>• Sub-millimeter (+0.001m) world-space canvas registration</li>
              <li>• ARSpatialPoseFilter jitter reduction</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-3 mb-3">
              <Layers className="w-5 h-5 text-rose-400" />
              <h3 className="text-base font-semibold text-white">Repository Identity</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>• Repository: <a href="https://github.com/omawadhoot/AksharAR" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/omawadhoot/AksharAR</a></li>
              <li>• Primary Creator: Omawadhoot</li>
              <li>• Backend OCR Service: <span className="text-slate-300 font-mono">akshar-ar.vercel.app</span> (Express Vision API proxy)</li>
              <li>• Showcase Web App: Self-contained React SPA (Vite + Tailwind CSS)</li>
              <li>• License: Open Source Accessibility Initiative</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
