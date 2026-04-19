/**
 * Single source of truth for portfolio content.
 * Fill in the TODOs. Anything left as `""` or `[]` will render as empty.
 */

export const profile = {
  // ---- Identity ----
  name: "Quinn Welton", // e.g. "Quinn Welton"
  displayName: "Quinn Welton", // optional — what shows in the hero if different from `name`
  title: "Front-End Developer", // e.g. "Front-End Engineer", "Product Designer"
  pronouns: "", // optional, e.g. "he/him"
  location: "Vancouver, BC", // e.g. "Austin, TX" or "Remote"
  availability: "Open to work", // e.g. "Open to work", "Not looking", "Freelance only"

  // ---- Bio ----
  bio: {
    tagline: "I build fast, accessible web apps.", // 1 short line for the hero, e.g. "I build fast, accessible web apps."
    short:
      "Front-end developer passionate about creating intuitive user experiences.", // 1 sentence — used in meta description, social cards
    long: "I'm a front-end developer with a focus on creating performant and accessible web applications. I enjoy working with modern JavaScript frameworks and tools to bring ideas to life.", // 1-2 paragraphs — used on About page
  },

  // ---- Contact ----
  contact: {
    email: "quinn.welton@gmail.com",
    github: "https://github.com/QuinnWelton11", // full URL
    linkedin: "https://www.linkedin.com/in/quinn-w-335647341",
    x: "", // (Twitter)
    bluesky: "",
    mastodon: "",
    website: "https://quinnwelton-portfolio.vercel.app/", // this portfolio's canonical URL
    resume: "/quinnwelton-2026.pdf", // link to PDF/page
  },

  // ---- Stack / Skills ----
  stack: {
    primary: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
    ] as string[], // featured prominently, e.g. ["React", "TypeScript", "Next.js"]
    secondary: ["HTML5", "CSS3", "Sass", "PHP"] as string[], // supporting skills
    tools: ["Git", "VS Code", "Figma", "Claude Code"] as string[], // design, dev tools, etc.
    learning: ["Python"] as string[], // optional — what you're exploring now
  },

  // ---- Projects ----
  projects: [
    {
      slug: "mexaclean",
      name: "Mexaclean",
      tagline:
        "Marketing site with custom CMS for a Vancouver cleaning company.",
      description:
        "Client site for Mexaclean, a Vancouver-based cleaning service. Built a responsive marketing site in React and TypeScript with Tailwind CSS showcasing services, and developed a custom CMS backed by Supabase so the client can manage their content independently.",
      url: "https://mexaclean.ca",
      repo: "https://github.com/QuinnWelton11/mexaclean",
      stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      year: 2025,
      featured: true,
      image: "/projects/mexa1-1img.png",
    },

    {
      slug: "terrafamilia",
      name: "Terrafamilia",
      tagline: "A community forum for a client to connect with their audience.",
      description:
        "Terrafamilia is a forum-style community web app built for a client who wanted a dedicated space to interact with their online community and friends. Built in React and TypeScript with Tailwind CSS and Supabase handling auth and real-time data, the app supports threaded discussions and user profiles.",
      url: "https://terrafamilia.net",
      repo: "https://github.com/QuinnWelton11/terrafamilia",
      stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      year: 2025,
      featured: true,
      image: "/projects/terra1-1img.png",
    },

    {
      slug: "qraft-digital",
      name: "QRaft Digital",
      tagline: "Personal freelance brand and agency site.",
      description:
        "Qraft Digital is my freelance web development brand. Designed and built the site from scratch in React and JavaScript with Tailwind CSS to showcase services and attract clients — clean layout, fast performance, and a clear value proposition for small businesses.",
      url: "https://qraftdigital.ca",
      repo: "https://github.com/QuinnWelton11/qraft-digital",
      stack: ["React", "JavaScript", "Tailwind CSS"],
      year: 2025,
      featured: true,
      image: "/projects/qraft1-1img.png",
    },
    // {
    //   slug: "project-a",
    //   name: "Project A",
    //   tagline: "One-line hook",
    //   description: "Longer description shown on the detail page.",
    //   url: "https://...",
    //   repo: "https://github.com/...",
    //   stack: ["Next.js", "tRPC", "Postgres"],
    //   year: 2026,
    //   featured: true,
    //   image: "/projects/project-a.png",
    // },
  ] as Project[],

  // ---- Experience ----
  experience: [
    {
      role: "Freelance Web Developer / Designer",
      company: "Mexaclean",
      companyUrl: "https://mexaclean.ca",
      start: "2025-08",
      end: "2025-09",
      summary:
        "Designed and developed a responsive marketing site for a Vancouver cleaning company, including a custom Supabase-backed CMS so the client can manage content independently. Delivered a polished, mobile-first experience in React and TypeScript.",
    },
    {
      role: "Freelance Web Developer / Designer",
      company: "Terrafamilia",
      companyUrl: "https://terrafamilia.net",
      start: "2025-09",
      end: "2025-10",
      summary:
        "Built a forum-style community web app for a client wanting a dedicated space to engage with their online community. Implemented real-time data, auth, and threaded discussions using React, TypeScript, Tailwind CSS, and Supabase.",
    },
    {
      role: "Manager",
      company: "Trapped Coquitlam Escape Rooms",
      companyUrl: "https://trapped.com/locations/coquitlam",
      start: "2023-11",
      end: "2024-12",
      summary:
        "Managed daily operations, coordinated staff schedules, and ensured exceptional customer service at a popular escape room venue. Developed strong leadership and organizational skills while fostering a positive team environment.",
    },
    // {
    //   role: "Senior Front-End Engineer",
    //   company: "Acme",
    //   companyUrl: "https://acme.com",
    //   start: "2024-03",
    //   end: "present", // or "2025-10"
    //   summary: "What you did / shipped / impact.",
    // },
  ] as Experience[],

  // ---- Education / Credentials (optional) ----
  education: [
    {
      school: "British Columbia Institute of Technology",
      degree: "Certificate in Front-End Web Development",
      start: "2025-01-06",
      end: "2025-07-16",
      gpa: "83%",
    },
    {
      school: "freeCodeCamp",
      degree: "Responsive Web Design Certification",
      start: "2023-11-01",
      end: "2023-12-15",
      gpa: "",
    },
    // { school: "", degree: "", start: "", end: "" },
  ] as Education[],

  // ---- SEO / Meta ----
  seo: {
    siteName: "Quinn Welton - Portfolio", // e.g. "Quinn Welton"
    defaultTitle: "Quinn Welton — Front-End Engineer", // e.g. "Quinn Welton — Front-End Engineer"
    defaultDescription:
      "I build modern, accessible, and performant websites and web applications.", // falls back to bio.short if empty
    ogImage: "/portfolio-og-img.avif", // /og.png
    themeColor: "", // e.g. "#0b0b0b"
    locale: "en-US",
  },

  // ---- Design tone (informs visual direction) ----
  tone: {
    style: ["modern", "clean", "responsive"], // e.g. "minimalist", "playful", "editorial", "brutalist"
    vibe: ["friendly", "approachable", "Team-oriented"], // free-form descriptor, e.g. "calm, confident, typography-forward"
  },
} as const;

// ---- Types ----
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url?: string;
  repo?: string;
  stack: string[];
  year: number;
  featured?: boolean;
  image?: string;
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string | "present";
  summary: string;
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  gpa: string;
};

export type Profile = typeof profile;
