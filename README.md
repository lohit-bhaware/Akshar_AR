# AksharAR Showcase Website

A modern, responsive showcase website for **AksharAR** (अक्षर AR) — an assistive Augmented Reality reading companion built for children and readers with dyslexia in Devanagari script (Marathi and Hindi).

---

## Quick Start (Run Locally)

No API keys, `.env` files, or AI credentials are required. The showcase runs completely standalone and offline-capable in modern browsers.

### Prerequisites

- **Node.js**: v18+ or v20+ recommended
- **npm**: v9+ or v10+

### Installation & Run

1. **Extract the ZIP file** into your project directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Launch the development server**:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the local Vite development server on port 3000. |
| `npm run build` | Builds the optimized production static bundle to the `dist/` folder. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs TypeScript type checking with zero emit (`tsc --noEmit`). |

---

## Key Features in This Showcase

- **Interactive Devanagari Syllable Engine**: A browser-side implementation of the project's C# `DevanagariSyllableParser`, tokenizing words into phonological Akshars while preserving unbroken halant conjuncts (`संयुक्ताक्षरे`).
- **CVD-Safe Color Palettes**: Dual-tone alternating syllable colors (Classic Cobalt, Warm Amber, Violet Iris, Monochrome) with WCAG AAA compliant contrast calculations.
- **Glare-Reducing Substrate Tints**: Simulates Warm Cream (#FAF8F2) for 35% glare reduction and Mint Ice (#F0FDF4) for Meares-Irlen visual stress mitigation.
- **Accessible Speech Synthesis (TTS)**: Built-in 0.9x calibrated rate speech player with real-time word highlight karaoke using the standard Web Speech API.
- **Spatial AR Viewfinder & Architecture**: Visualizes the mobile AR HUD, Google ARCore raycast depth estimation, and 6DoF sub-millimeter world-space canvas registration (+0.001m elevation).
- **"वाचन पाटी" (Reading Slate) Onboarding Showcase**: Details the non-stigmatizing 4-step calibration wizard.

---

## Project Ecosystem Architecture

AksharAR comprises three distinct components:

1. **Frontend Showcase Website** (This Project):
   - Built with React 19, Vite, and Tailwind CSS v4.
   - Showcases the application's UX, problem statement, and algorithm sandbox.
   - Runs with zero server or API key dependencies.

2. **Unity Android AR Mobile Application** (in `omawadhoot/AksharAR`):
   - Built in Unity 2022 LTS with Universal Render Pipeline (URP).
   - Uses Google ARCore (`ARTrackedImageManager`, `MutableRuntimeReferenceImageLibrary`) and Android native `TextToSpeech` (`mr_IN`).
   - Distributed as an Android APK.

3. **Backend OCR Proxy** (`backend-proxy/`):
   - An Express microservice that forwards camera frames to Google Cloud Vision API (`DOCUMENT_TEXT_DETECTION`).
   - Deployed on Vercel at `https://akshar-ar.vercel.app` to protect Google Cloud Vision credentials from exposure in client APKs.

---

## Deploying This Showcase Website to Vercel

To deploy this frontend showcase website to Vercel:

### Option A: Using the Vercel CLI
```bash
npm install -g vercel
vercel
```
Accept the default prompts (Framework preset: `Vite`, build command: `npm run build`, output directory: `dist`).

### Option B: Using GitHub & Vercel Dashboard
1. Push this project to your GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel will automatically detect `Vite`.
4. Click **Deploy**. Your custom frontend domain (e.g., `akshar-ar-showcase.vercel.app`) will be generated.
