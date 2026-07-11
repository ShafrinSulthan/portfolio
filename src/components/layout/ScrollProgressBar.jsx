import { useScrollProgress } from '../../hooks/useScrollSpy';

export default function ScrollProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
