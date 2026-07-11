import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <motion.span
        className="theme-toggle__thumb"
        animate={{ x: isDark ? 0 : 22 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <i className={isDark ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill'} />
      </motion.span>
    </button>
  );
}
