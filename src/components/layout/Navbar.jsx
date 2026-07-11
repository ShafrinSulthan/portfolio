import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { NAV_LINKS, PROFILE } from '../../constants/data';
import { useScrollProgress, useActiveSection } from '../../hooks/useScrollSpy';
import ThemeToggle from '../common/ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled } = useScrollProgress();
  const active = useActiveSection(NAV_LINKS.map((l) => l.to));

  return (
    <>
      <motion.header
        className={`glass-navbar ${scrolled ? 'glass-navbar--scrolled' : ''}`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ScrollLink to="hero" smooth duration={500} className="glass-navbar__logo" role="button" tabIndex={0}>
          <img src="/logo.png" alt="Shafrin logo" className="glass-navbar__logo-mark" width="38" height="38" />
          <span className="glass-navbar__logo-text brand-font d-none d-lg-inline">Shafrin</span>
        </ScrollLink>

        <nav className="glass-navbar__links d-none d-lg-flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-90}
              className={`glass-navbar__link ${active === link.to ? 'is-active' : ''}`}
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        <div className="glass-navbar__actions">
          <a
            href={PROFILE.resumeUrl}
            download
            className="btn-glass d-none d-md-inline-flex align-items-center gap-2"
          >
            <i className="bi bi-download" /> Resume
          </a>
          <ThemeToggle />
          <button
            className="glass-navbar__burger d-lg-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobile-drawer__links" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-70}
                    className={`mobile-drawer__link ${active === link.to ? 'is-active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                </motion.div>
              ))}
            </nav>
            <a href={PROFILE.resumeUrl} download className="btn-glass w-100 text-center mt-3">
              <i className="bi bi-download me-2" /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
