/* ============================================================
   PROJECT DATA
   Each entry is a complete archive record.
   Replace placeholder values with your own content.
   Images: drop your mockup/screenshot into src/assets/images/
   and update the import + image field below.
   ============================================================ */

// Placeholder image — inline SVG data-URL so no external
// file is needed until you drop in the real mockups.
const placeholder = (label: string, accent = '#F5A94E') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#1A3B52"/>
      <rect width="800" height="500" fill="url(#grid)" opacity="0.18"/>
      <defs>
        <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#4DD9C0" stroke-width="0.5"/>
        </pattern>
      </defs>
      <polyline points="20,20 20,40 40,40" fill="none" stroke="${accent}" stroke-width="2"/>
      <polyline points="780,20 780,40 760,40" fill="none" stroke="${accent}" stroke-width="2"/>
      <polyline points="20,480 20,460 40,460" fill="none" stroke="${accent}" stroke-width="2"/>
      <polyline points="780,480 780,460 760,460" fill="none" stroke="${accent}" stroke-width="2"/>
      <text x="400" y="240" text-anchor="middle" dominant-baseline="middle"
            font-family="monospace" font-size="13" fill="${accent}" opacity="0.55"
            letter-spacing="4">[ MOCKUP PLACEHOLDER ]</text>
      <text x="400" y="265" text-anchor="middle" dominant-baseline="middle"
            font-family="monospace" font-size="18" fill="#EDE8DC" opacity="0.80"
            font-weight="bold" letter-spacing="1">${label}</text>
      <rect x="392" y="300" width="4" height="4" fill="${accent}" opacity="0.60"/>
      <rect x="400" y="300" width="4" height="4" fill="${accent}" opacity="0.35"/>
      <rect x="408" y="300" width="4" height="4" fill="${accent}" opacity="0.20"/>
    </svg>
  `
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/* ─── Types ──────────────────────────────────────────────── */

export type CollaborationKind =
  | 'Solo'
  | 'Collaborative'
  | 'Client'
  | 'Academic'
  | 'Open Source'

export type ProjectStatus = 'Completed' | 'In Progress' | 'Concept'

export interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  image: string
  category: string
  status: ProjectStatus
  year: string
  languages: string[]
  tools: string[]
  apis: string[]
  deployment: string[]
  collaboration: CollaborationKind
}

/* ─── Data ───────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    id: 'beautylinx',
    title: 'Beautylinx',
    shortDescription:
      `A modern website for a boutique beauty salon and training studio — bookings, services and brand identity in one place.`,
    longDescription:
      `Beautylinx required a full digital presence: a public-facing marketing site with service listings, a booking system backed by Supabase, and an animated brand experience that reflected the salon's visual identity. GSAP drove the page transitions and scroll animations; Tailwind CSS handled the responsive layout system.`,
    image: placeholder('Beautylinx', '#F5A94E'),
    category: 'Client Website',
    status: 'Completed',
    year: '2024',
    languages: ['TypeScript', 'HTML', 'CSS'],
    tools: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Figma'],
    apis: ['Supabase Auth', 'Supabase Database'],
    deployment: ['Vercel'],
    collaboration: 'Client',
  },

  {
    id: 'pokedex',
    title: 'Pokedex',
    shortDescription:
      `An interactive Pokemon explorer built with Python and Flask, pulling live data from the PokeAPI.`,
    longDescription:
      `A browser-based Pokedex that fetches, caches and presents Pokemon data from the public PokeAPI. The Flask backend handles routing and server-side rendering; Python manages data transformation and caching logic. The project was an exercise in REST API consumption, Python web development and designing information-dense interfaces.`,
    image: placeholder('Pokedex', '#4DD9C0'),
    category: 'Web Application',
    status: 'Completed',
    year: '2024',
    languages: ['Python', 'HTML', 'CSS', 'JavaScript'],
    tools: ['Flask', 'Jinja2'],
    apis: ['PokeAPI'],
    deployment: ['Render'],
    collaboration: 'Solo',
  },

  {
    id: 'portfolio',
    title: 'This Portfolio',
    shortDescription:
      `An experimental portfolio combining development, design and gothic fantasy digital-archive aesthetics.`,
    longDescription:
      `This website is itself a project — an exercise in treating a portfolio as a deliberate design artefact rather than a functional checkbox. Built on React, TypeScript and Vite with Tailwind CSS v4 for the design system. The gothic fantasy pixel-art aesthetic, 8-column grid, typography system and section compositions were each considered independently to avoid the generic AI-template feeling.`,
    image: placeholder('Portfolio', '#E0339E'),
    category: 'Personal Project',
    status: 'In Progress',
    year: '2025',
    languages: ['TypeScript', 'HTML', 'CSS'],
    tools: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Figma'],
    apis: [],
    deployment: ['Cloudflare Pages'],
    collaboration: 'Solo',
  },

  {
    id: 'project-four',
    title: 'Project Title',
    shortDescription:
      `Replace this with a short description of your fourth project — one or two sentences.`,
    longDescription:
      `Replace this with the full description of your fourth project. What problem did it solve? What decisions did you make? What did you learn? This text is easy to update in src/data/projects.ts.`,
    image: placeholder('Your Project', '#4A2669'),
    category: 'Category',
    status: 'Concept',
    year: '2025',
    languages: ['TypeScript', 'Python'],
    tools: ['React', 'Vite'],
    apis: [],
    deployment: ['Vercel'],
    collaboration: 'Solo',
  },
]
