

import distillationFlask from "../assets/images/obj-distillation-flask.webp";
import testTubeRack from "../assets/images/obj-test-tube-rack.webp";
import roundPotionFlask from "../assets/images/obj-round-potion-flask.webp";
import smallVial from "../assets/images/obj-small-vial.webp";
import erlenmeyer from "../assets/images/obj-erlenmeyer.webp";
import apothecaryBottles from "../assets/images/obj-apothecary-bottles.webp";
import tallTubeRack from "../assets/images/obj-tall-tube-rack.webp";
import specimenJar from "../assets/images/obj-specimen-jar.webp";


export type LabObject = {
  id: string;
  name: string;
  kind: string;
  contents: string;
  detail: string;
  image: string;
  /** Hotspot rectangle in percentages of the scene image. */
  area: { left: number; top: number; width: number; height: number };
};

export const labObjects: LabObject[] = [

  {
    id: "distillation-flask",
    name: "Languages",
    kind: "Programming & web languages",
    contents: "HTML • CSS • JavaScript • TypeScript • Python • Delphi",
    detail:
      "The foundational languages of the workshop. HTML and CSS form the structure and visual layer, JavaScript and TypeScript drive modern web applications, while Python and Delphi represent earlier programming experience and experimentation beyond the browser.",
    image: distillationFlask,
    area: { left: 2.5, top: 27, width: 12, height: 45 },
  },

  {
    id: "test-tube-rack",
    name: "Frameworks",
    kind: "Frontend application development",
    contents: "React • React TS • Flask • Django",
    detail:
      "A collection of frameworks used to turn code into functioning applications. React and TypeScript form the primary frontend stack, while Flask and Django have been explored through backend and application experiments.",
    image: testTubeRack,
    area: { left: 16, top: 22, width: 14, height: 40 },
  },

  {
    id: "round-potion-flask",
    name: "Styling",
    kind: "Interface design & responsive systems",
    contents: "Tailwind CSS • CSS • Responsive Design",
    detail:
      "The visual chemistry of the workshop. Used to construct responsive layouts, establish design systems, control typography and spacing, and translate visual concepts into polished interfaces across different screen sizes.",
    image: roundPotionFlask,
    area: { left: 30, top: 20, width: 13, height: 42 },
  },

  {
    id: "small-vial",
    name: "Animation",
    kind: "Motion & interaction",
    contents: "GSAP • Lenis • Scroll-based interaction",
    detail:
      "The movement layer of the interface. GSAP and Lenis are used to create controlled motion, smooth scrolling, transitions, scroll-driven effects, and interactive experiences that make a website feel less like a document and more like an environment.",
    image: smallVial,
    area: { left: 43, top: 30, width: 9, height: 34 },
  },

  {
    id: "erlenmeyer",
    name: "Backend",
    kind: "Application infrastructure",
    contents: "Supabase • PostgreSQL • REST APIs",
    detail:
      "The machinery beneath the interface. Used to connect frontend applications to persistent data, authentication, APIs, and database functionality without losing sight of the user experience happening above it.",
    image: erlenmeyer,
    area: { left: 52, top: 24, width: 13, height: 40 },
  },

  {
    id: "apothecary-bottles",
    name: "Development",
    kind: "Frontend development environment",
    contents: "Vite • Node.js • npm • React TypeScript",
    detail:
      "The working environment where ideas become applications. Used to scaffold projects, manage dependencies, run development servers, build production applications, and maintain a fast iteration cycle while developing.",
    image: apothecaryBottles,
    area: { left: 65, top: 26, width: 16, height: 40 },
  },

  {
    id: "tall-tube-rack",
    name: "Deployment",
    kind: "Web application delivery",
    contents: "Vercel • Cloudflare • GitHub",
    detail:
      "The final stage of the process, moving projects from a local development environment onto the public web. Used for hosting, deployment, version control, and maintaining projects throughout their development lifecycle.",
    image: tallTubeRack,
    area: { left: 80, top: 20, width: 15, height: 38 },
  },

  {
    id: "specimen-jar",
    name: "Tools",
    kind: "Development & creative workflow",
    contents: "Git • GitHub • VS Code • APIs • Web Scraping",
    detail:
      "The everyday instruments scattered across the workshop. Used for version control, code editing, experimentation, integrating external services, working with APIs, and extracting information from the web when a project calls for it.",
    image: specimenJar,
    area: { left: 88, top: 15, width: 11, height: 46 },
  },

];