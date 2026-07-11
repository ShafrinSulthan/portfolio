import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="notfound-section">
      <motion.div
        className="glass-panel-strong notfound-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="gradient-text notfound-code">404</span>
        <h1>Page not found</h1>
        <p>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <Link to="/" className="btn-gradient">
          <i className="bi bi-house-door-fill me-2" /> Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
