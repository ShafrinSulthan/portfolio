import {
  DiReact, DiJavascript1, DiHtml5, DiCss3, DiBootstrap,
  DiJava, DiNodejs, DiMysql, DiMongodb, DiPostgresql,
  DiGit, DiGithub, DiDocker, DiAws,
} from 'react-icons/di';
import { SiSpringboot, SiPostman, SiGooglegemini } from 'react-icons/si';

// Lookup by skill name (as used in SKILL_GROUPS). Devicons gives the more
// recognizable, official multi-detail brand marks for most of these; Simple
// Icons fills in Spring Boot and Postman, which aren't in the Devicons set.
// Falls back to a generic Bootstrap Icon glyph only where no official brand
// mark is available in either library (REST APIs, Claude, ChatGPT).
export const TECH_ICONS = {
  React: { Icon: DiReact, color: '#61DAFB' },
  JavaScript: { Icon: DiJavascript1, color: '#F7DF1E' },
  HTML5: { Icon: DiHtml5, color: '#E34C26' },
  CSS3: { Icon: DiCss3, color: '#264DE4' },
  Bootstrap: { Icon: DiBootstrap, color: '#7952B3' },

  Java: { Icon: DiJava, color: '#007396' },
  'Spring Boot': { Icon: SiSpringboot, color: '#6DB33F' },
  'Node.js': { Icon: DiNodejs, color: '#339933' },
  'REST APIs': { bi: 'bi-diagram-3-fill', color: 'var(--accent-cyan)' },

  MySQL: { Icon: DiMysql, color: '#00758F' },
  MongoDB: { Icon: DiMongodb, color: '#47A248' },
  PostgreSQL: { Icon: DiPostgresql, color: '#336791' },

  Git: { Icon: DiGit, color: '#F05032' },
  GitHub: { Icon: DiGithub, color: 'var(--text-primary)' },
  Docker: { Icon: DiDocker, color: '#2496ED' },
  AWS: { Icon: DiAws, color: '#FF9900' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },

  Claude: { bi: 'bi-stars', color: 'var(--accent-violet)' },
  ChatGPT: { bi: 'bi-stars', color: 'var(--accent-cyan)' },
  Gemini: { Icon: SiGooglegemini, color: '#8E75B2' },
  'GitHub Copilot': { Icon: DiGithub, color: 'var(--text-primary)' },
};
