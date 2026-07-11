import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

/**
 * Wraps children in a scroll-triggered fade+slide reveal.
 * `index` staggers multiple Reveal siblings when passed incrementally.
 */
export default function Reveal({
  children,
  index = 0,
  variants = fadeUp,
  className = '',
  as: Component = motion.div,
  once = true,
  amount = 0.2,
  ...rest
}) {
  return (
    <Component
      className={className}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      {...rest}
    >
      {children}
    </Component>
  );
}
