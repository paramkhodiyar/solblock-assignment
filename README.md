# Fractional Property Ownership UI - C-Stake

Welcome to the frontend repository for the **C-Stake Property Investment Platform**, developed as part of an frontend assignment.

## 👨‍💻 Introduction
Hi, I'm **Param Khodiyar**. I built this high-fidelity landing page to demonstrate a commanding grasp of modern frontend engineering, strict adherence to UI/UX design mockups, and an overarching focus on a distinctly premium and professional aesthetic. 

My goal with this repository was to seamlessly execute a pristine layout while bringing the interface to life through meticulous, highly creative macro/micro-animations that strike exact balances between engaging flow and severe professionalism.

## ✨ Frontend Features & Architecture

This project is built using bleeding-edge stack implementations: **Next.js 15+ (App Router)** & **Tailwind CSS v4**. 

### 1. Mathematical Geometric Brand Rendering
Instead of relying on lossy PNG/JPEG images for the header UI lockup which could pixelate across high-resolution retina screens, the "C-Stake" brand logo was algorithmically reconstructed utilizing native React SVGs and exact mathematical arcs. This guarantees infinite, razor-sharp scalability on all devices.

### 2. High-Performance Fluid Animations
Creativity was expressed specifically through the feeling of "fluidity/aliveness" rather than flashy or amateur noise:
- **Progressive Flow Arrows**: Engineered a 3-stage animated SVG chevron sequencer mapping via pure CSS keyframes (`slideFadeFlow`).
- **Glassmorphism Dynamics**: Jigsaw blocks actively render with slow independent Y-axis translation offsets to enforce a deeply 3D space effect.
- **Micro-interactions**: Components seamlessly respond to hover/engagement mapping via transition-delays mapped exactly across Tailwind properties while completely isolating noisy elements.

### 3. Responsive Mobile Mapping
- Fully implemented cross-browser fluid layout boundaries relying exclusively on structurally secure `flex` configurations.
- The platform breaks down mathematically across `md:` and `lg:` Tailwind viewports.
- Integrated an entirely custom, smooth-sliding mobile Hamburger navigation overlay. The menu handles touch interactions transparently mapping clean geometric transitions (sandwich-to-X line rotations) without clipping or relying on third-party modal libraries.

### 4. Custom 404 Routing Infrastructure
Instead of leaving invalid edge-case routes to the Next.js generic gray fallback, I built a dedicated `app/not-found.tsx` handler mapping perfectly onto the brand's aesthetic, ensuring users are carefully and elegantly guided back into the primary onboarding funnel if they get lost.

## 🚀 Running Locally

Ensure you have Node.js installed, then execute:

```bash
# Install required dependencies
npm install

# Start the Turbopack development server
npm run dev
```

The server will initialize instantly at `http://localhost:3000`.
