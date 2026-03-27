# Claude Code Setup Prompt for Portfolio Website
# ================================================
# 
# STEP 1: Copy the .claude/agents/ folder and CLAUDE.md into your repo first
# STEP 2: Open Claude Code in your repo directory  
# STEP 3: Paste the prompt below into Claude Code terminal
#
# ================================================

PASTE THIS INTO CLAUDE CODE:
---

Scaffold my developer portfolio project. Here's what I need you to do in order:

1. **Initialise Next.js 14** with TypeScript, Tailwind CSS, App Router, and src/ directory:
   ```
   npx create-next-app@latest . --typescript --tailwind --app --src-dir --use-npm --import-alias "@/*"
   ```
   (Use `.` since we're already in the repo directory. If it asks to overwrite, say yes.)

2. **Install all dependencies**:
   ```
   npm install three @react-three/fiber @react-three/drei @types/three gsap @gsap/react framer-motion
   ```

3. **Create the folder structure** (don't create any component code yet, just empty directories and placeholder index.ts files):
   ```
   src/components/hero/
   src/components/projects/
   src/components/about/
   src/components/skills/
   src/components/contact/
   src/components/ui/
   src/three/
   src/animations/
   src/hooks/
   src/lib/
   src/types/
   public/frames/
   ```

4. **Create these utility files**:

   a. `src/hooks/useWebGLDetect.ts` — a hook that returns boolean for WebGL2 support
   b. `src/hooks/useReducedMotion.ts` — a hook that checks prefers-reduced-motion media query
   c. `src/hooks/useMediaQuery.ts` — a generic media query hook for responsive logic
   d. `src/types/index.ts` — shared types: Project interface (title, description, image, tags, liveUrl, githubUrl), Skill interface (name, icon, category, proficiency)
   e. `src/lib/utils.ts` — cn() classname merge utility using clsx + tailwind-merge (install both: `npm install clsx tailwind-merge`)

5. **Set up the root layout** (`src/app/layout.tsx`):
   - Import a distinctive Google Font via next/font/google (pick something like "Syne" for headings + "Inter" for body, or "Space Grotesk" + "DM Sans" — something with character)
   - Add basic metadata export with title and description placeholders
   - Set up dark mode class on html element
   - Wrap children in a main tag with min-h-screen

6. **Set up the home page** (`src/app/page.tsx`):
   - Import placeholder sections (Hero, Projects, About, Skills, Contact) as empty components for now
   - Each section gets a `<section id="section-name">` wrapper
   - Add a simple placeholder text in each section so we can see the page structure

7. **Update tailwind.config.ts**:
   - Add custom colours for the portfolio theme
   - Extend fonts with the Google fonts from the layout
   - Add custom animation keyframes for common transitions (fadeIn, slideUp, scaleIn)

8. **Update next.config.ts**:
   - Add webpack config to handle GLSL shader files if needed
   - Configure images domains if using external image sources

9. **Create a .gitignore** that includes: node_modules, .next, out, .env*, *.tsbuildinfo

10. **Verify it works**: Run `npm run dev` briefly to confirm no errors, then kill the dev server.

Read CLAUDE.md before starting — it has all the project conventions. Don't write any actual section content yet, just the scaffolding. We'll use the sub-agents to build each section after this.
