import { Link as ScrollLink } from 'react-scroll';
import { PROFILE, STRENGTHS, LANGUAGES } from '../../constants/data';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import MagneticButton from '../common/MagneticButton';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container-section">
        <SectionHeading
          eyebrow="About Me"
          title="Building software that holds up under real use"
          subtitle="A quick look at how I think, what I value, and where I'm based."
        />

        <div className="about-grid">
          <Reveal index={0} className="about-copy glass-panel-strong">
            <p className="about-objective">{PROFILE.objective}</p>

            <div className="about-meta">
              <div className="about-meta__item">
                <i className="bi bi-geo-alt-fill" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="about-meta__item">
                <i className="bi bi-translate" />
                <span>{LANGUAGES.join(', ')}</span>
              </div>
              <div className="about-meta__item">
                <i className="bi bi-mortarboard-fill" />
                <span>CGPA {PROFILE.cgpa} / 10</span>
              </div>
            </div>

            <MagneticButton as="a" href={PROFILE.resumeUrl} download className="btn-gradient mt-1">
              <i className="bi bi-download me-2" /> Download Resume
            </MagneticButton>
          </Reveal>

          <div className="about-side">
            <Reveal index={1} className="about-card glass-panel">
              <h3 className="about-card__title">
                <i className="bi bi-lightning-charge-fill" /> Strengths
              </h3>
              <div className="about-strengths">
                {STRENGTHS.map((s) => (
                  <span key={s} className="about-strength-pill">{s}</span>
                ))}
              </div>
            </Reveal>

            <Reveal index={2} className="about-card glass-panel">
              <h3 className="about-card__title">
                <i className="bi bi-compass" /> Career Objective
              </h3>
              <p className="about-card__text">
                I am a passionate Full Stack Developer focused on building scalable, responsive
                and user-friendly web applications using Java, Spring Boot, React and modern web
                technologies. I am looking for opportunities where I can contribute to real-world
                products while continuously improving my software engineering skills.
              </p>
              <ScrollLink to="projects" smooth duration={500} offset={-90} className="about-card__link">
                See my projects <i className="bi bi-arrow-right" />
              </ScrollLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
