import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../constants/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-section site-footer__inner glass-panel-strong">
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Shafrin. All rights reserved.
        </p>

        <div className="site-footer__socials">
          <a href={SOCIAL_LINKS.email} aria-label="Email"><i className="bi bi-envelope-fill" /></a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github" /></a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
        </div>
      </div>

      <ScrollLink to="hero" smooth duration={500} className="back-to-top" aria-label="Back to top">
        <motion.span whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}>
          <i className="bi bi-arrow-up" />
        </motion.span>
      </ScrollLink>
    </footer>
  );
}
