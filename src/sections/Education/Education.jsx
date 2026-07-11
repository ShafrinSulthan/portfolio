import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsMortarboard } from 'react-icons/bs';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import { EDUCATION } from '../../data/education';
import styles from './Education.module.scss';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Education"
          title="Academic background"
          subtitle="Formal education that built my foundation in computer science."
        />

        <Row className="gy-4">
          {EDUCATION.map((edu, i) => (
            <Col md={4} key={edu.id}>
              <motion.div
                className={styles.eduCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.iconTop}>
                  <BsMortarboard />
                </div>
                <span className={styles.duration}>{edu.duration}</span>
                <h5>{edu.degree}</h5>
                <p className={styles.institution}>{edu.institution}</p>
                <span className={styles.score}>{edu.score}</span>
                {edu.description && <p className={styles.desc}>{edu.description}</p>}
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
