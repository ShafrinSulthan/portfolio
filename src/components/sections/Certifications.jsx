import { CERTIFICATIONS } from '../../constants/data';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import TiltCard from '../common/TiltCard';
import Carousel from '../common/Carousel';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container-section">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified learning"
          subtitle="Credentials that back up the skills listed above."
        />

        <Carousel
          items={CERTIFICATIONS}
          ariaLabel="certificate"
          visibleCounts={{ desktop: 3, tablet: 2, mobile: 1 }}
          renderItem={(cert, i) => (
            <Reveal index={i % 3} className="cert-card-wrap">
              <TiltCard className="cert-card">
                <span className="cert-card__ribbon">
                  <i className="bi bi-patch-check-fill" />
                </span>
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer} &middot; {cert.date}</p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-card__link"
                >
                  View Certificate <i className="bi bi-box-arrow-up-right" />
                </a>
              </TiltCard>
            </Reveal>
          )}
        />
      </div>
    </section>
  );
}
