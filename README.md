# WhisperFlow

[![IT Fest 2026](https://img.shields.io/badge/IT_Fest_2026-Competition_Submission-c084fc?style=flat-square)](https://github.com/agissugandi7203-ops/WhisperFlow)
[![Build Status](https://img.shields.io/badge/Build-Passing-22c55e?style=flat-square)](https://github.com/agissugandi7203-ops/WhisperFlow)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170.0-black?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Rapier Physics](https://img.shields.io/badge/Rapier_3D-v1.5.0-amber?style=flat-square)](https://rapier.rs/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

Next-generation streaming speech intelligence platform with sub-30ms acoustic dictation, real-time 32-speaker diarization, interactive 3D WebGL physics, and sovereign zero-data retention architecture.

Developed as an official submission for the **IT Fest 2026 Landing Page Competition** under the theme **"Beyond Innovation, Towards The Future"**.

---

## Architecture Overview

```
+───────────────────────────────────────────────────────────────────────────+
│                           WHISPERFLOW PIPELINE                            │
│                                                                           │
│  [Audio Ingress]  ──>  [Aestra 2.1 Engine]  ──>  [Pulse Diarization]     │
│   (16kHz/48kHz)         (< 28ms Latency)          (32 Concurrent Voices)  │
│                                                          │                │
│                                                          v                │
│  [Zero-Data Retention] <── [Semantic Reasoning] <── [Token Stream]        │
│   (Ephemeral Vault)         (Action Registries)      (Real-Time PCM)      │
+───────────────────────────────────────────────────────────────────────────+
```

---

## Core Capabilities

### 1. Interactive 3D WebGL Physics Lanyard
- **Physics Engine**: Continuous Verlet rope integration and dynamic Catmull-Rom spline band utilizing `@react-three/rapier` 3D rigid body dynamics.
- **Downward Gravitational Equilibrium**: Downward gravity simulation with angular damping stabilization for realistic hanging and swing dynamics.
- **Full Touchscreen Compatibility**: Native touch gesture interception (`touch-action: none`) for mobile and desktop displays without viewport collision or scale degradation.
- **Material Pipeline**: Photo ID badge composite texturing with metallic clip and swivel hardware.

### 2. Sub-30ms Acoustic Streaming Engine
- **Aestra 2.1 Sonic**: Proprietary streaming acoustic transformer with `< 28ms` Time to First Token (TTFT).
- **Pulse Diarize Pro**: 32-speaker voiceprint separation with continuous biometric clustering and `2.8%` Diarization Error Rate (DER).
- **Claude Speech Omniverse**: Multi-turn conversational reasoning and automated decision registry synthesis.
- **Titan Sovereign**: Containerized VPC-native inference pods for private cloud (AWS, GCP, Azure, on-premise DGX).

### 3. Design System & Frontend Performance
- **Typography**: Paired serif hierarchy with *Instrument Serif Italic* and *Inter*.
- **ScrollReveal**: Viewport-triggered word-stagger blur reveal engine.
- **BorderGlow**: Cursor-following conic lightform cards with dynamic opacity.
- **Lenis Smooth Scroll**: Inertial momentum-based scroll orchestration.
- **ROI Consolidation Calculator**: Real-time stack savings calculation versus legacy transcription providers.

---

## Route Directory

| Path | Component | Description |
|---|---|---|
| `/` | `MainLandingPage` | Video Hero, Partner Marquee, Unified Showcase, Quote Engine, Interactive Footer |
| `/product` | `ProductPage` | 4-Stage Acoustic Pipeline Architecture, Technical Capabilities, Telemetry Matrix |
| `/solutions` | `SolutionsPage` | Accordion Gallery, Multi-Domain Drift Wall, Enterprise Workspaces |
| `/models` | `ModelsPage` | MorphSlider Model Explorer, DepthCarousel Benchmark Gallery, Vector Acoustic Specs |
| `/pricing` | `PricingPage` | 4 Transparent Plans (Starter, Pro, Enterprise, Sovereign), Interactive ROI Calculator |
| `/contact` | `ContactPage` | About The Creator, 3D WebGL Physics Lanyard, IT Fest 2026 Story, Direct Mailbox |
| `/*` | `NotFound` | 404 Error Recovery and Navigation Route Fallbacks |

---

## Technology Stack

| Category | Technologies |
|---|---|
| **Core Framework** | React 18.3.1, TypeScript 5.8.2, Vite 6.4.3 |
| **3D & Physics** | Three.js 0.170.0, @react-three/fiber 8.17.10, @react-three/drei 9.117.0, @react-three/rapier 1.5.0, meshline 3.3.1 |
| **Motion & Scroll** | Lenis 1.3.26, Framer Motion 13.0.0, GSAP 3.15.0 |
| **Icons & Design** | Lucide React 0.475.0, React Icons 5.7.0, TailwindCSS 3.4.17 |

---

## Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/agissugandi7203-ops/WhisperFlow.git
cd WhisperFlow

# Install dependencies
npm install --legacy-peer-deps
```

### Development

```bash
# Start local development server
npm run dev
```

### Production Build

```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Railway & Cloud Deployment

WhisperFlow is configured for instant deployment on **Railway**, **Vercel**, **Netlify**, or standard container platforms.

### Railway Quick Deploy
1. Connect your GitHub repository to [Railway](https://railway.app/).
2. Railway automatically detects Vite and executes:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start` (or `npx vite preview --host 0.0.0.0 --port $PORT`)
3. Set the root directory to `/` and deploy.

---

## Performance Benchmarks

| Metric | WhisperFlow | Industry Standard (Whisper v3) | Delta |
|---|---|---|---|
| Streaming Latency (TTFT) | **< 28 ms** | ~450 ms | **16x Faster** |
| Word Error Rate (WER) | **2.9%** | 4.8% | **+39.5% Accuracy** |
| Diarization Error Rate (DER) | **2.8%** | 8.4% | **3x Lower Collision** |
| Max Concurrent Speakers | **32 Voices** | 8 Voices | **4x Capacity** |
| Data Retention Footprint | **0 KB (Ephemeral)** | 30-day retention | **Zero Data Storage** |

---

## Project Structure

```
WhisperFlow/
├── public/
│   ├── assets/logos/          # Brand vector assets
│   ├── images/                # High-resolution textures, models, benchmarks
│   └── videos/                # WebM/MP4 background video assets
├── src/
│   ├── components/            # UI components and 3D WebGL scenes
│   │   ├── Lanyard.tsx        # 3D Verlet rope physics lanyard
│   │   ├── Lanyard.css        # Responsive touch-enabled stylesheet
│   │   ├── Navbar.tsx         # 5-link navigation component
│   │   ├── Footer.tsx         # Concave brand mark footer and modal popups
│   │   ├── Hero.tsx           # Fullscreen hero component
│   │   ├── VideoHero.tsx      # Video canvas wrapper
│   │   ├── ScrollReveal.tsx   # Word-stagger blur reveal engine
│   │   ├── BorderGlow.tsx     # Conic cursor-following glowing card
│   │   ├── MorphSlider.tsx    # Acoustic model visualizer
│   │   ├── DepthCarousel.tsx  # 3D benchmark depth carousel
│   │   ├── DriftWall.tsx      # Multi-dimensional solution grid
│   │   ├── PartnerLogos.tsx   # Infinite marquee logo loop
│   │   └── AgentSection.tsx   # Voice intelligence showcase
│   ├── pages/
│   │   ├── ProductPage.tsx    # Acoustic pipeline and telemetry specifications
│   │   ├── SolutionsPage.tsx  # Enterprise solutions and discovery workspaces
│   │   ├── ModelsPage.tsx     # Model catalog and benchmark evaluations
│   │   ├── PricingPage.tsx    # Pricing tiers and ROI consolidation calculator
│   │   ├── ContactPage.tsx    # About The Creator, 3D Lanyard, IT Fest story
│   │   └── NotFound.tsx       # 404 error page
│   ├── context/               # Theme context provider
│   ├── hooks/                 # Custom scroll and animation hooks
│   ├── App.tsx                # Client-side router and Lenis provider
│   ├── main.tsx               # Application entry point
│   ├── index.css              # Design tokens and global styles
│   └── vite-env.d.ts          # TypeScript declarations (.glb, .png, meshline)
├── package.json               # Dependencies and scripts (dev, build, preview, start)
├── vite.config.ts             # Vite configuration with assetsInclude
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

---

## Competition Information & Credits

- **Competition**: IT Fest 2026 — Landing Page Competition
- **Theme**: Beyond Innovation, Towards The Future
- **Lead Architect & Developer**: Arief Fajar Marhas
- **Contact**: [arieffajarmarhas@gmail.com](mailto:arieffajarmarhas@gmail.com)
- **Component References**: React Bits (`Lanyard`, `ScrollReveal`, `BorderGlow`, `MorphSlider`, `DepthCarousel`, `DriftWall`, `LogoLoop`)

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
