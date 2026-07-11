import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../constants/data';

/**
 * Sends the contact form via EmailJS.
 * Requires EMAILJS_CONFIG in src/constants/data.js to be filled in with
 * your real Service ID, Template ID and Public Key from emailjs.com.
 */
export async function sendContactEmail(formValues) {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (
    serviceId.startsWith('YOUR_') ||
    templateId.startsWith('YOUR_') ||
    publicKey.startsWith('YOUR_')
  ) {
    throw new Error(
      'EmailJS is not configured yet. Add your Service ID, Template ID and Public Key in src/constants/data.js'
    );
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      from_name: formValues.name,
      from_email: formValues.email,
      subject: formValues.subject,
      message: formValues.message,
    },
    { publicKey }
  );
}
