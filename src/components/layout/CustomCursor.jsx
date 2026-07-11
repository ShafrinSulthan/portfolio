import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 400, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 40 });
  const glowX = useSpring(cursorX, { stiffness: 120, damping: 30 });
  const glowY = useSpring(cursorY, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouch(!hasFinePointer);
    if (!hasFinePointer) return;

    function handleMove(e) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target;
      setIsPointer(Boolean(target.closest('a, button, [role="button"], input, textarea')));
    }

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="cursor-glow"
        style={{ left: glowX, top: glowY }}
        aria-hidden="true"
      />
      <motion.div
        className="cursor-dot"
        style={{
          left: springX,
          top: springY,
          scale: isPointer ? 1.8 : 1,
        }}
        aria-hidden="true"
      />
    </>
  );
}
