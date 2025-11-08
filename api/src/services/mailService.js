import nodemailer from "nodemailer";
import { EMAIL_ID, EMAIL_PASS, SMTP_HOST, SMTP_PORT } from "../config/index.js";


function buildEmailTemplate({ farmerName, product, quantity, deliveryDate, notes }) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f8f3; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 3px 8px rgba(0,0,0,0.08);">
        
        <div style="background-color: #2f855a; color: #ffffff; text-align: center; padding: 18px 0;">
          <h2 style="margin: 0; font-weight: 600;">🌿 Agri Marketplace</h2>
        </div>
        
        <div style="padding: 25px 30px; color: #333333;">
          <p style="font-size: 16px; margin-bottom: 12px;">Hi <strong>${farmerName}</strong>,</p>
          
          <p style="font-size: 15px; line-height: 1.6;">
            A buyer has requested <strong style="color: #2f855a;">${product}</strong>
            (Quantity: <strong>${quantity}</strong>) to be delivered by 
            <strong>${deliveryDate}</strong>.
          </p>

          ${notes
      ? `<p style="margin-top: 10px; background: #f9fafb; border-left: 4px solid #2f855a; padding: 10px 12px; border-radius: 5px;">
                   <em>Note from buyer:</em> ${notes}
                 </p>`
      : ""
    }

          <p style="margin-top: 24px; font-size: 15px;">Please reply or reach out if you can fulfill this order.</p>

          <div style="margin-top: 30px; text-align: center;">
            <a href="#" style="display: inline-block; background-color: #2f855a; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: 600;">View Details</a>
          </div>
        </div>

        <div style="background-color: #f0f4f0; padding: 15px 20px; text-align: center; font-size: 13px; color: #666;">
          <p style="margin: 0;">© ${new Date().getFullYear()} Agri Marketplace. All rights reserved.</p>
          <p style="margin: 4px 0 0;">Built with for smarter agriculture.</p>
        </div>
      </div>
    </div>
  `;
}


export async function sendMail({ to, subject, farmerName, product, quantity, deliveryDate, notes }) {
  try {
    console.log("here")
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS,
      },
      tls: {
           ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });


    const htmlTemplate = buildEmailTemplate({ farmerName, product, quantity, deliveryDate, notes });

    const mailOptions = {
      from: `Agri Marketplace <${EMAIL_ID}>`,
      to,
      subject,
      html: htmlTemplate,
      text: `Hi ${farmerName}, A buyer needs ${product} (${quantity}) by ${deliveryDate}. Notes: ${notes || "N/A"}`,
    };

    const result = await transporter.sendMail(mailOptions);
    // await sendMailWithResend({ to, subject, html })
    console.log(`✅ Email sent to ${to}: ${subject}`);
    return result;
  } catch (error) {
    console.error("❌ mail error:", error.message);

  }
}
