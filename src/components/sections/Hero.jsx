/* eslint-disable react/no-unescaped-entities -- apostrophes are intentional literal characters in the rendered code snippet and copy */
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import {
  SiOpenjdk, SiSpringboot, SiReact, SiJavascript, SiMysql, SiMongodb, SiGit, SiGithub, SiHtml5, SiCss,
} from 'react-icons/si';
import { PROFILE, SOCIAL_LINKS } from '../../constants/data';
import MagneticButton from '../common/MagneticButton';
import Reveal from '../common/Reveal';

const TECH_CHIPS = [
  { Icon: SiOpenjdk, label: 'Java', top: '2%', left: '4%', color: '#EA2D2E', duration: 6 },
  { Icon: SiSpringboot, label: 'Spring Boot', top: '18%', left: '76%', color: '#6DB33F', duration: 7 },
  { Icon: SiReact, label: 'React', top: '58%', left: '2%', color: '#61DAFB', duration: 5.5 },
  { Icon: SiJavascript, label: 'JavaScript', top: '78%', left: '70%', color: '#F1E05A', duration: 6.5 },
  { Icon: SiMysql, label: 'MySQL', top: '4%', left: '42%', color: '#4479A1', duration: 7.5 },
  { Icon: SiMongodb, label: 'MongoDB', top: '82%', left: '38%', color: '#47A248', duration: 6 },
  { Icon: SiGit, label: 'Git', top: '38%', left: '86%', color: '#F05032', duration: 5 },
  { Icon: SiGithub, label: 'GitHub', top: '46%', left: '-6%', color: '#E7E9F5', duration: 6.8 },
  { Icon: SiHtml5, label: 'HTML', top: '-4%', left: '68%', color: '#E34C26', duration: 7.2 },
  { Icon: SiCss, label: 'CSS', top: '68%', left: '92%', color: '#264DE4', duration: 5.8 },
];

const CODE_LINES = [
  { indent: 0, text: <><span className="tk-kw">const</span> <span className="tk-var">developer</span> = {'{'}</> },
  { indent: 1, text: <><span className="tk-key">name:</span> <span className="tk-str">'Shafrin M'</span>,</> },
  { indent: 1, text: <><span className="tk-key">role:</span> <span className="tk-str">'Full Stack Developer'</span>,</> },
  { indent: 1, text: <><span className="tk-key">stack:</span> [<span className="tk-str">'Java'</span>, <span className="tk-str">'Spring'</span>, <span className="tk-str">'React'</span>],</> },
  { indent: 1, text: <><span className="tk-key">shipping:</span> <span className="tk-bool">true</span></> },
  { indent: 0, text: <>{'}'}</> },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container-section hero-grid">
        <div className="hero-copy">
          <Reveal index={0}>
            <span className="section-eyebrow">Portfolio</span>
          </Reveal>

          <Reveal index={1} as={motion.h1} className="hero-heading">
            Hi, I'm <span className="gradient-text brand-font">{PROFILE.name}</span>
          </Reveal>

          <Reveal index={2} className="hero-role">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Java Developer', 2000,
                'React Developer', 2000,
                'Spring Boot Engineer', 2000,
              ]}
              wrapper="h2"
              speed={45}
              deletionSpeed={60}
              repeat={Infinity}
              cursor
            />
          </Reveal>

          <Reveal index={3}>
            <p className="hero-tagline">{PROFILE.tagline}</p>
          </Reveal>

          <Reveal index={4} className="hero-actions">
            <MagneticButton as="a" href={PROFILE.resumeUrl} download className="btn-gradient">
              <i className="bi bi-download me-2" /> Resume
            </MagneticButton>
            <MagneticButton as="a" href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="btn-glass d-inline-flex">
              <i className="bi bi-github me-2" /> GitHub
            </MagneticButton>
            <MagneticButton as="a" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="btn-glass d-inline-flex">
              <i className="bi bi-linkedin me-2" /> LinkedIn
            </MagneticButton>
            <ScrollLink to="contact" smooth duration={500} offset={-90}>
              <MagneticButton as="span" className="btn-glass d-inline-flex">
                <i className="bi bi-chat-dots me-2" /> Contact
              </MagneticButton>
            </ScrollLink>
          </Reveal>
        </div>

        <Reveal
          index={2}
          className="hero-visual"
          variants={{ hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
        >
          <div className="hero-visual__glow" />

          <div className="hero-code-panel glass-panel-strong" role="img" aria-label="Code snippet describing Shafrin M as a full stack developer">
            <div className="hero-code-panel__topbar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="hero-code-panel__filename">developer.js</span>
            </div>
            <div className="hero-code-panel__body">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  className="hero-code-line"
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                >
                  {line.text}
                </motion.div>
              ))}
              <motion.span
                className="hero-code-cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>

          <div className="hero-chip-field" aria-hidden="true">
            {TECH_CHIPS.map((chip, i) => (
              <motion.div
                key={chip.label}
                className="hero-tech-chip glass-panel"
                style={{ top: chip.top, left: chip.left }}
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: chip.duration, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
              >
                <chip.Icon style={{ color: chip.color }} />
                <span>{chip.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="hero-chip-grid d-lg-none" aria-hidden="true">
            {TECH_CHIPS.map((chip) => (
              <div className="hero-tech-chip hero-tech-chip--static glass-panel" key={chip.label}>
                <chip.Icon style={{ color: chip.color }} />
                <span>{chip.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <ScrollLink to="about" smooth duration={500} offset={-70} className="hero-scroll-cue" aria-label="Scroll to About section">
        <span />
      </ScrollLink>
    </section>
  );
}
