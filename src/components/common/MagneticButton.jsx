import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Wraps a button/link so it gently "sticks" toward the cursor when hovered —
 * a small, premium micro-interaction rather than a full drag effect.
 */
export default function MagneticButton({ children, className = '', strength = 18, as = 'button', ...rest }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const Component = motion[as] || motion.button;

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <Component
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.4 }}
      {...rest}
    >
      {children}
    </Component>
  );
}
