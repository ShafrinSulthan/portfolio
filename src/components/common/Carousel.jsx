import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const GAP = 24; // px — matches the 1.5rem gap used by the existing project grids

function useVisibleCount({ mobile, tablet, desktop }) {
  const getCount = useCallback(() => {
    if (typeof window === 'undefined') return desktop;
    const w = window.innerWidth;
    if (w <= 576) return mobile;
    if (w <= 991) return tablet;
    return desktop;
  }, [mobile, tablet, desktop]);

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    function handleResize() {
      setCount(getCount());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getCount]);

  return count;
}

/**
 * Horizontal carousel showing a responsive number of cards at once, with
 * circular glass prev/next buttons at the outer edges. Steps one item at a
 * time; new items appended to `items` automatically become navigable.
 */
export default function Carousel({ items, renderItem, visibleCounts, ariaLabel }) {
  const visible = useVisibleCount(visibleCounts);
  const [index, setIndex] = useState(0);
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    function measure() {
      if (viewportRef.current) setViewportWidth(viewportRef.current.offsetWidth);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [visible]);

  const maxIndex = Math.max(0, items.length - visible);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const slideWidth = visible > 0 ? (viewportWidth - GAP * (visible - 1)) / visible : 0;
  const step = slideWidth + GAP;

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <div className="carousel">
      {items.length > visible && (
        <button
          type="button"
          className="carousel__nav carousel__nav--prev"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={!canPrev}
          aria-label={`Previous ${ariaLabel}`}
        >
          <i className="bi bi-chevron-left" />
        </button>
      )}

      <div className="carousel__viewport" ref={viewportRef}>
        <motion.div
          className="carousel__track"
          style={{ gap: `${GAP}px` }}
          animate={{ x: -index * step }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {items.map((item, i) => (
            <div
              className="carousel__slide"
              key={item.id ?? i}
              style={{ flex: `0 0 ${slideWidth}px` }}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </motion.div>
      </div>

      {items.length > visible && (
        <button
          type="button"
          className="carousel__nav carousel__nav--next"
          onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
          disabled={!canNext}
          aria-label={`Next ${ariaLabel}`}
        >
          <i className="bi bi-chevron-right" />
        </button>
      )}
    </div>
  );
}
