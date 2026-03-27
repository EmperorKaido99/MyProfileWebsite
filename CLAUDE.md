# MyProfileWebsite — Developer Portfolio

## Project Overview
A premium developer portfolio website with 3D interactive elements and Apple-style scroll-driven frame animations. Built to showcase projects, skills, and personality with a high-end feel that stands out from generic AI-generated sites.

## Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **3D**: Three.js + React Three Fiber (@react-three/fiber, @react-three/drei)
- **Animation**: GSAP + ScrollTrigger (scroll-driven frame animations), Framer Motion (UI transitions)
- **Styling**: Tailwind CSS v3
- **Deployment**: Vercel

## Architecture Rules

### File Organisation
- All components go in `src/components/{section}/` — each section (hero, projects, about, skills, contact) gets its own folder
- Three.js scenes and R3F components go in `src/three/`
- GSAP scroll configs and frame animation loaders go in `src/animations/`
- Shared hooks go in `src/hooks/`
- Utility functions go in `src/lib/`
- TypeScript types go in `src/types/`
- Pre-generated WEBP frame sequences go in `public/frames/`

### Code Standards
- TypeScript strict mode — no `any` types
- All components are functional with hooks, no class components
- Use `'use client'` directive only on components that need browser APIs (Three.js, GSAP, intersection observers)
- Server components by default for everything else
- All props must have TypeScript interfaces defined
- Use absolute imports via `@/` path alias

### 3D Performance Rules
- Lazy-load all 3D scenes with `React.Suspense` + loading fallback
- Detect WebGL support — fall back to static images on unsupported devices
- Target 60fps desktop, 30fps minimum mobile
- Dispose geometries, materials, and textures in cleanup (`useEffect` return)
- Use `@react-three/drei` helpers (Environment, ContactShadows, Float) instead of raw Three.js where possible
- Compress all textures to WEBP, max 1024x1024

### Scroll Animation Rules
- Frame sequences stored as numbered WEBP files in `public/frames/{sequence-name}/`
- GSAP ScrollTrigger handles frame scrubbing — pin the canvas, update frame on scroll progress
- Preload frames progressively (first 10 immediately, rest on idle)
- Mobile: reduce frame count by 50% (use every other frame) or swap to a single static hero image on devices with <4GB RAM

### Responsive Design
- Mobile-first approach with Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Test at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1024px (laptop), 1440px (desktop)
- Navigation: hamburger menu on mobile, horizontal nav on desktop
- 3D hero section: full viewport height on all devices, simplified on mobile
- Touch interactions replace hover states on mobile

### Accessibility
- All images have descriptive alt text
- Keyboard navigation works throughout
- ARIA labels on interactive 3D elements
- Colour contrast ratio minimum 4.5:1
- Respect `prefers-reduced-motion` — disable all animations when set
- Skip-to-content link at top of page

### SEO
- Each page has unique title, description, and OG image
- JSON-LD structured data for Person schema
- Semantic HTML (header, main, section, article, footer)
- Sitemap generated at build time
- All images use Next.js `<Image>` component with proper sizing

## Content Sections (in scroll order)
1. **Hero** — Full-screen 3D interactive scene with name + title, scroll-driven frame animation transition
2. **Projects** — Grid/carousel of project cards with hover previews, links to live demos and GitHub
3. **About** — Personal bio with a photo, background, and what drives you
4. **Skills** — Visual representation of tech stack (interactive, not just a list)
5. **Contact** — Contact form + social links (GitHub, LinkedIn, email)

## Git Workflow
- Main branch is `main`
- Commit messages follow conventional commits: `feat:`, `fix:`, `style:`, `refactor:`, `docs:`
- No compiled files in git (node_modules, .next, out)
