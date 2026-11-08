# Agnes Monyeke — Portfolio

Personal portfolio website built with Next.js 15, Tailwind CSS 3, and TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Deploy — no config needed

Your site will be live at `agnes-profile.vercel.app` (or your custom domain).

### GitHub Pages

1. Add `output: 'export'` to `next.config.ts`
2. Run `npm run build` — static files appear in `out/`
3. Push to a repo named `maipato10.github.io`

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Hosting:** Vercel (free tier)

## Structure

```
app/
  layout.tsx          # Root layout, SEO metadata, dark mode init
  page.tsx            # Main page composing all sections
  globals.css         # Tailwind directives, CSS variables, animations
components/
  Navbar.tsx          # Fixed nav with dark mode toggle & mobile menu
  Hero.tsx            # Hero section with photo and CTAs
  About.tsx           # About me in first person
  Experience.tsx      # Timeline of roles
  Projects.tsx        # Client project cards
  Skills.tsx          # Grouped skill badges
  Education.tsx       # Degrees and qualifications
  Contact.tsx         # Email, LinkedIn, GitHub links
  Footer.tsx          # Site footer
public/
  agnes.jpg           # Profile photo
  Agnes_Monyeke_CV.pdf  # Downloadable CV
```
