import { SKILL_GROUPS } from '../../constants/data';
import { TECH_ICONS } from '../../constants/techIcons';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import TiltCard from '../common/TiltCard';
import { slideInLeft, slideInRight } from '../../animations/variants';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container-section">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with day to day"
          subtitle="A practical toolkit across the stack."
        />

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal
              key={group.category}
              variants={gi % 2 === 0 ? slideInLeft : slideInRight}
              className="skill-card-wrap"
            >
              <TiltCard className="skill-card">
                <div className="skill-card__head">
                  <span className="skill-card__icon">
                    <i className={`bi ${group.icon}`} />
                  </span>
                  <h3>{group.category}</h3>
                </div>

                <div className="skill-card__chips">
                  {group.skills.map((skill) => {
                    const tech = TECH_ICONS[skill];
                    return (
                      <span key={skill} className="skill-chip">
                        {tech?.Icon && <tech.Icon style={{ color: tech.color }} />}
                        {tech?.bi && <i className={`bi ${tech.bi}`} style={{ color: tech.color }} />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
