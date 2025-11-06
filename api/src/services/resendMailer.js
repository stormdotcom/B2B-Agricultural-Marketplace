import { Resend } from 'resend';
import { RESEND_API_KEY } from '../config/index.js';

const resend = new Resend(RESEND_API_KEY);

export async function sendMailWithResend({ to, subject, html }) {
  try {
    const result = await resend.emails.send({
      from: 'mailer@ajmalnasumudeen.in',  
      to,
      subject,
      html,
    });

    console.log('✅ Mail sent:', result);
  } catch (err) {
    console.error('❌ Failed to send:', err);
  }
}
