import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import GlassCard from '../../components/GlassCard/GlassCard.jsx';
import { SERVICES } from '../../data/services';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-inner">
        <SectionTitle
          eyebrow="Services"
          title="What I can help you build"
          subtitle="From backend systems to polished interfaces — end-to-end product development."
        />

        <Row className="gy-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Col md={6} lg={4} key={service.id}>
                <GlassCard
                  as={motion.div}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className={styles.iconWrap}>
                    <Icon />
                  </div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </GlassCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
