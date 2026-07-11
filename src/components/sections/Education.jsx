import { EDUCATION } from '../../constants/data';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import TiltCard from '../common/TiltCard';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container-section">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="The formal foundation behind the practical skills."
        />

        <div className="education-grid">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} index={i} className="education-card-wrap">
              <TiltCard className="education-card">
                <span className="education-card__icon">
                  <i className="bi bi-mortarboard-fill" />
                </span>
                <h3 className="education-card__degree">{edu.degree}</h3>
                <p className="education-card__institution">{edu.institution}</p>
                <div className="education-card__meta">
                  <span><i className="bi bi-calendar3" /> {edu.duration}</span>
                  <span><i className="bi bi-award" /> {edu.score}</span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
