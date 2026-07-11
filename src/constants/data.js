// ==========================================================================
// SINGLE SOURCE OF TRUTH — edit this file to customize the entire portfolio.
// Anything marked "PLACEHOLDER" should be replaced with your real info.
// ==========================================================================

export const GITHUB_USERNAME = 'ShafrinSulthan';

export const PROFILE = {
  name: 'Shafrin',
  title: 'Full Stack Developer | Java & React Developer',
  tagline: 'I build fast, reliable web products end to end — from Spring Boot APIs to polished React interfaces.',
  location: 'Madurai, Tamil Nadu, India',
  email: 'shafrinmunavarsulthan@gmail.com',
  phone: '+91 6381741303',
  resumeUrl: '/Shafrin_M_Resume.pdf', // PLACEHOLDER — drop your real PDF in /public
  cgpa: '8.12',
  objective:
    'I am a final-year B.Tech Computer Science Engineering (Artificial Intelligence and Data Science) student at Hindustan Institute of Technology and Science, Chennai. I enjoy developing modern web applications with Java, Spring Boot, React, MySQL and REST APIs. I enjoy solving real-world problems, learning new technologies and building clean, maintainable software.',
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${GITHUB_USERNAME}`,
  linkedin: 'https://www.linkedin.com/in/shafrin-m-40321b259/',
  email: `mailto:${PROFILE.email}`,
};

export const STRENGTHS = [
  'Problem Solving',
  'Full Stack Development',
  'Java',
  'Spring Boot',
  'React',
  'REST APIs',
  'Database Design',
  'Responsive UI',
  'Team Collaboration',
  'Continuous Learning',
];

export const LANGUAGES = ['Tamil (Native)', 'English (Professional Working Proficiency)'];

export const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: 'bi-window-stack',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: 'bi-hdd-network',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Node.js'],
  },
  {
    category: 'Database',
    icon: 'bi-database',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools & Cloud',
    icon: 'bi-cloud-arrow-up',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Postman'],
  },
  {
    category: 'AI Tools',
    icon: 'bi-stars',
    skills: ['Claude', 'ChatGPT', 'Gemini', 'GitHub Copilot'],
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science Engineering (AI & Data Science)',
    institution: 'Hindustan Institute of Technology and Science, Chennai',
    duration: '2022 — 2026',
    score: 'CGPA: 8.12 / 10',
  },
  {
    degree: 'Higher Secondary (12th Grade) — Computer Science with Mathematics',
    institution: 'Madurai Crescent Matriculation Higher Secondary School',
    duration: '2020 — 2022',
    score: 'Percentage: 63%',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Development of Digital Civic Engagement & Petition Platform',
    issuer: 'Infosys Springboard — Internship 6.0 (B 11)',
    date: 'Issued Apr 8, 2026',
    credentialUrl: '/certificates/infosys-internship-6.0.pdf',
    verifyUrl: 'https://verify.onwingspan.com',
  },
  {
    title: 'Advanced Full-Stack Web Development',
    issuer: 'NLearn · authorized by Navikshaa',
    date: 'Issued Jul 8, 2025 · ID F1T3C11YU',
    credentialUrl: '/certificates/nlearn-fullstack-web-development.pdf',
    verifyUrl: 'https://navikshaa.com/verify/F1T3C11YU',
  },
  {
    title: 'Integrating AI into Full Stack Development Workflows',
    issuer: 'Credo Systemz',
    date: 'Issued May 9, 2026',
    credentialUrl: '/certificates/credo-systemz-ai-fullstack-workflows.png',
  },
  {
  title: 'JavaScript (Intermediate)',
  issuer: 'HackerRank',
  date: 'Issued Jul 10, 2026',
  credentialUrl: '/certificates/javascript_intermediate certificate.pdf',
  },
];

export const SERVICES = [
  {
    icon: 'bi-code-slash',
    title: 'Frontend Development',
    description: 'Responsive, accessible interfaces built with React and modern CSS that feel fast and look premium.',
  },
  {
    icon: 'bi-server',
    title: 'Backend Development',
    description: 'Robust APIs and services with Java & Spring Boot, designed around clear data models and clean endpoints.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'REST API Design',
    description: 'Well-documented, versioned REST APIs that are easy for other teams to integrate against.',
  },
  // {
  //   icon: 'bi-palette',
  //   title: 'UI / UX Design',
  //   description: 'Interfaces designed with intent — spacing, hierarchy and motion that guide the user, not distract them.',
  // },
];

export const EMAILJS_CONFIG = {
  serviceId: 'service_m679pjv',
  templateId: 'template_32iio1t',
  publicKey: 'BqQbbfViMEVGWIm7I',
};

export const NAV_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

/**
 * Manual overrides for specific GitHub repos, matched by a case-insensitive
 * substring of the repo name. Projects are fetched live from the GitHub API,
 * so this is the mechanism for correcting/adding a live demo URL or attaching
 * a local demo video without hardcoding the whole project list.
 *
 * videoUrl should point to a file in /public (e.g. '/demos/ems.mp4') once
 * you upload the actual demo videos — none are uploaded yet, so this stays
 * empty until then.
 */
export const PROJECT_OVERRIDES = [
  {
    matchSubstring: 'ems',
    liveUrl: 'https://ems-lime-seven.vercel.app/login',
    videoUrl: '/demos/ems.mp4',
  },
  {
    matchSubstring: 'readify',
    liveUrl: 'https://readify-smoky-mu.vercel.app/',
    videoUrl: '/demos/readify.mp4',
  },
  {
     matchSubstring: 'portfolio',
     liveUrl: 'https://portfolio-seven-xi-2ol7pjv3vq.vercel.app/',
     videoUrl: '/demos/portfolio.mp4',
   },
];
