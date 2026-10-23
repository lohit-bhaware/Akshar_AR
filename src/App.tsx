/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScriptChallengeSection } from './components/ScriptChallengeSection';
import { InteractiveSyllableSimulator } from './components/InteractiveSyllableSimulator';
import { ARViewfinderShowcase } from './components/ARViewfinderShowcase';
import { OnboardingSlateShowcase } from './components/OnboardingSlateShowcase';
import { SystemArchitectureSection } from './components/SystemArchitectureSection';
import { ProjectSpecifications } from './components/ProjectSpecifications';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B14] text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ScriptChallengeSection />
        <InteractiveSyllableSimulator />
        <ARViewfinderShowcase />
        <OnboardingSlateShowcase />
        <SystemArchitectureSection />
        <ProjectSpecifications />
      </main>
      <Footer />
    </div>
  );
}
