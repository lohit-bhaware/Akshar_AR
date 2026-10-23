import React, { useState } from 'react';
import { Cpu, Scan, ShieldCheck, Terminal, Compass, Volume2, Sparkles, Layers } from 'lucide-react';
import archImg from '../assets/images/spatial_tracking_architecture_1792062432053.jpg';

const PIPELINE_STAGES = [
  {
    step: '01',
    title: 'Sensor Ingestion & Aspect Crop',
    source: 'ARPageScanController.cs',
    summary: 'Extracts raw XRCpuImage from ARCameraManager. Detects portrait vs. landscape sensor orientation and rotates 90° to prevent mirrored text.',
  },
  {
    step: '02',
    title: 'Raycast Physical Depth Estimation',
    source: 'ARPageScanController.cs',
    summary: 'Casts optical rays via ARRaycastManager. Calculates exact focal length and sensor field-of-view to compute true metric crop width in meters (0.06m - 0.35m).',
  },
  {
    step: '03',
    title: 'Secure Cloud Vision OCR Gateway',
    source: 'backend-proxy/server.js',
    summary: 'Forwards cropped base64 payload to Google Cloud Vision API (DOCUMENT_TEXT_DETECTION) via an Express microservice on Vercel, shielding API credentials.',
  },
  {
    step: '04',
    title: 'Devanagari Syllable Engine',
    source: 'DevanagariSyllableParser.cs',
    summary: 'Deterministic regex-free state machine tokenizes Devanagari glyphs, preserving unbroken conjunct ligatures (halants) and applying TextMesh Pro tags.',
  },
  {
    step: '05',
    title: 'Mutable ARCore Image Library',
    source: 'ARPageScanController.cs',
    summary: 'Schedules a background AddImageWithValidationJob into MutableRuntimeReferenceImageLibrary, dynamically anchoring the page in ARCore.',
  },
  {
    step: '06',
    title: 'World-Space Sub-Millimeter Canvas',
    source: 'ARWorldSpaceOverlayController.cs',
    summary: 'Locks a 2048px high-resolution canvas at exactly +0.001m (+1mm) elevation over the paper plane, stabilized with ARSpatialPoseFilter.',
  },
  {
    step: '07',
    title: 'Multisensory 0.9x Marathi TTS',
    source: 'MarathiTTSHelper.cs',
    summary: 'Bridges to Android native android.speech.tts.TextToSpeech (mr-IN / hi-IN) with 0.9x reading cadence, synchronized with word touch events.',
  },
];

export const SystemArchitectureSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="ar-pipeline" className="py-20 border-b border-slate-800/80 bg-[#070A12]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Engineering & Spatial Pipeline
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            End-to-End System Architecture
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            AksharAR unites Google ARCore 6DoF spatial tracking, high-fidelity optical depth estimation, Google Cloud Vision OCR, and deterministic Devanagari parsing into a sub-second assistive loop.
          </p>
        </div>

        {/* Marquee Technical Render */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/60 shadow-2xl">
          <img
            src={archImg}
            alt="Isometric architectural diagram showing mobile AR raycasting and sub-millimeter world-space canvas registration onto an open book"
            className="w-full h-auto object-cover aspect-[16/9]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Interactive 7-Stage Pipeline Navigator */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {PIPELINE_STAGES.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                  activeStep === idx
                    ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      activeStep === idx
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {stage.step}
                  </span>
                  <span className={`text-xs sm:text-sm font-semibold ${activeStep === idx ? 'text-white' : 'text-slate-300'}`}>
                    {stage.title}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 shrink-0">
                  {stage.source.split('/')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold">
                <span>STAGE {PIPELINE_STAGES[activeStep].step} OF 07</span>
                <span>·</span>
                <span className="text-slate-400 font-sans">{PIPELINE_STAGES[activeStep].source}</span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-md bg-blue-950 border border-blue-800 text-blue-300 font-mono">
                Sub-Second Loop
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              {PIPELINE_STAGES[activeStep].title}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {PIPELINE_STAGES[activeStep].summary}
            </p>

            <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-500">// Technical implementation highlight</div>
              {activeStep === 0 && (
                <div className="text-blue-300">
                  RotateLandscapeSensorToPortrait(XRCpuImage rawTexture) <br />
                  CropToScreenAspect(uprightTexture, targetAspect)
                </div>
              )}
              {activeStep === 1 && (
                <div className="text-blue-300">
                  trueCropWidth = 2.0f * measuredDepth * Mathf.Tan(fovH * 0.5f) * normWidth;<br />
                  trueCropWidth = Mathf.Clamp(trueCropWidth, 0.06f, 0.35f);
                </div>
              )}
              {activeStep === 2 && (
                <div className="text-emerald-300">
                  POST /api/ocr (Content-Type: application/json, limit: 10mb)<br />
                  Features: [&#123; type: 'DOCUMENT_TEXT_DETECTION' &#125;]
                </div>
              )}
              {activeStep === 3 && (
                <div className="text-amber-300">
                  List&lt;string&gt; akshars = SplitIntoAkshars(word);<br />
                  ColorizeSyllablesRichText(rawLine, colorA, colorB, alternate: true);
                </div>
              )}
              {activeStep === 4 && (
                <div className="text-purple-300">
                  mutableLibrary.ScheduleAddImageWithValidationJob(uncompressed, pageId, physicalWidthMeters);<br />
                  jobState.jobHandle.Complete();
                </div>
              )}
              {activeStep === 5 && (
                <div className="text-blue-300">
                  canvasRectTransform.localPosition = new Vector3(0f, 0.001f, 0f);<br />
                  canvasRectTransform.localRotation = Quaternion.Euler(90f, 0f, 0f);
                </div>
              )}
              {activeStep === 6 && (
                <div className="text-emerald-300">
                  ttsInstance.Call("setLanguage", new AndroidJavaObject("java.util.Locale", "mr", "IN"));<br />
                  ttsInstance.Call("setSpeechRate", 0.9f);
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
