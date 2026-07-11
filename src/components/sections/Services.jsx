import { SERVICES } from '../../constants/data';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import TiltCard from '../common/TiltCard';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container-section">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          subtitle="Core areas I can help a team or project with, end to end."
        />

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} index={i} className="service-card-wrap">
              <TiltCard className="service-card">
                <span className="service-card__icon"><i className={`bi ${s.icon}`} /></span>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
