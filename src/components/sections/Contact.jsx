import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { sendContactEmail } from '../../services/emailService';
import { PROFILE, SOCIAL_LINKS } from '../../constants/data';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import MagneticButton from '../common/MagneticButton';

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email';
  if (!values.subject.trim()) errors.subject = 'Subject is required';
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const foundErrors = validate(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    setSending(true);
    try {
      await sendContactEmail(values);
      toast.success("Message sent — I'll get back to you soon!");
      setValues(EMPTY);
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container-section">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a role, project, or question in mind? Send a message and I'll reply as soon as I can."
        />

        <div className="contact-grid">
          <Reveal index={0} className="contact-info glass-panel-strong">
            <a href={SOCIAL_LINKS.email} className="contact-info__row">
              <i className="bi bi-envelope-fill" /> {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone}`} className="contact-info__row">
              <i className="bi bi-telephone-fill" /> {PROFILE.phone}
            </a>
            <span className="contact-info__row">
              <i className="bi bi-geo-alt-fill" /> {PROFILE.location}
            </span>
            <div className="contact-info__socials">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github" /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            </div>
          </Reveal>

          <Reveal index={1} as={motion.form} className="contact-form glass-panel-strong" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row">
              <div className="contact-field">
                <input name="name" value={values.name} onChange={handleChange} placeholder="Your Name" aria-label="Your Name" aria-invalid={!!errors.name} />
                {errors.name && <span className="contact-field__error">{errors.name}</span>}
              </div>
              <div className="contact-field">
                <input name="email" value={values.email} onChange={handleChange} placeholder="Your Email" aria-label="Your Email" aria-invalid={!!errors.email} />
                {errors.email && <span className="contact-field__error">{errors.email}</span>}
              </div>
            </div>
            <div className="contact-form__row">
              <div className="contact-field">
                <input name="phone" value={values.phone} onChange={handleChange} placeholder="Phone (optional)" aria-label="Phone (optional)" />
              </div>
              <div className="contact-field">
                <input name="subject" value={values.subject} onChange={handleChange} placeholder="Subject" aria-label="Subject" aria-invalid={!!errors.subject} />
                {errors.subject && <span className="contact-field__error">{errors.subject}</span>}
              </div>
            </div>
            <div className="contact-field">
              <textarea name="message" rows={5} value={values.message} onChange={handleChange} placeholder="Your Message" aria-label="Your Message" aria-invalid={!!errors.message} />
              {errors.message && <span className="contact-field__error">{errors.message}</span>}
            </div>

            <MagneticButton as="button" type="submit" className="btn-gradient" disabled={sending}>
              {sending ? (<><span className="spinner" /> Sending…</>) : (<><i className="bi bi-send-fill me-2" /> Send Message</>)}
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
