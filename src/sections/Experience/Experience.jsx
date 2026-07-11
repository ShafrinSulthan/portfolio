import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import GlassCard from '../../components/GlassCard/GlassCard.jsx';
import { EXPERIENCE } from '../../data/experience';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've applied what I've learned"
          subtitle="Internships, training programs, and virtual experiences that shaped how I build software."
        />

        <div className={styles.timeline}>
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.dot} />
              <GlassCard className={styles.card}>
                <span className={styles.badge}>{exp.type}</span>
                <h5>{exp.role}</h5>
                <div className={styles.meta}>
                  <span>{exp.company}</span>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
                <ul>
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className={styles.stackRow}>
                  {exp.stack.map((tech) => (
                    <span key={tech} className={styles.stackChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
