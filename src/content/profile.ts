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
    website: "", // this portfolio's canonical URL
    resume: "", // link to PDF/page
  },

  // ---- Stack / Skills ----
  stack: {
    primary: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Claude Code",
    ] as string[], // featured prominently, e.g. ["React", "TypeScript", "Next.js"]
    secondary: ["HTML5", "CSS3", "Sass"] as string[], // supporting skills
    learning: ["Python"] as string[], // optional — what you're exploring now
  },

  // ---- Projects ----
  projects: [
    {
      slug: "mexaclean",
      name: "Mexaclean",
      tagline:
        "A cleaning service website built with Next.js and Tailwind CSS.",
      description:
        "Mexaclean is a modern cleaning service website designed to provide users with an easy and efficient way to book cleaning services. Built with Next.js for server-side rendering and Tailwind CSS for styling, Mexaclean offers a seamless user experience across all devices.",
      url: "https://mexaclean.ca",
      repo: "https://github.com/QuinnWelton11/mexaclean",
      stack: ["React", "Tailwind CSS", "JavaScript"],
      year: 2025,
      featured: true,
      image: "/projects/mexa1-1img.png",
    },

    {
      slug: "terrafamilia",
      name: "Terrafamilia",
      tagline: "A family tree visualization tool built with React and D3.js.",
      description:
        "Terrafamilia is an interactive family tree visualization tool that allows users to create and explore their family history. Built with React for the user interface and D3.js for data visualization, Terrafamilia provides a dynamic and engaging way to discover and share family stories.",
      url: "https://terrafamilia.net",
      repo: "https://github.com/QuinnWelton11/terrafamilia",
      stack: ["React", "Tailwind CSS", "JavaScript", "Supabase"],
      year: 2025,
      featured: true,
      image: "/projects/terra1-1img.png",
    },

    {
      slug: "qraft-digital",
      name: "Qraft Digital",
      tagline:
        "A digital marketing agency website built with Next.js and Tailwind CSS.",
      description:
        "Qraft Digital is a sleek and modern website for a digital marketing agency. Built with Next.js for server-side rendering and Tailwind CSS for styling, the Qraft Digital website offers a professional and user-friendly experience for potential clients to learn about the agency's services and portfolio.",
      url: "https://qraftdigital.ca",
      repo: "https://github.com/QuinnWelton11/qraft-digital",
      stack: ["React", "Tailwind CSS", "JavaScript"],
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
        "I work with clients to build custom websites and web applications that are fast, accessible, and visually appealing. I specialize in front-end development using modern JavaScript frameworks and tools.",
    },
    {
      role: "Freelance Web Developer / Designer",
      company: "Terrafamilia",
      companyUrl: "https://terrafamilia.net",
      start: "2025-09",
      end: "2025-10",
      summary:
        "At Terrafamilia, I collaborate with a talented team to create engaging and effective family tree visualization tools for our clients. I focus on building responsive and user-friendly interfaces that help our clients achieve their business goals.",
    },
    {
      role: "Manager",
      company: "Trapped Coquitlam Escape Rooms",
      companyUrl: "https://trapped.com/locations/coquitlam",
      start: "2020-02",
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
    // { school: "", degree: "", start: "", end: "" },
  ] as Education[],

  // ---- SEO / Meta ----
  seo: {
    siteName: "Quinn Welton - Portfolio", // e.g. "Quinn Welton"
    defaultTitle: "Quinn Welton — Front-End Engineer", // e.g. "Quinn Welton — Front-End Engineer"
    defaultDescription:
      "I build modern, accessible, and performant websites and web applications.", // falls back to bio.short if empty
    ogImage: "/og.png", // /og.png
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
