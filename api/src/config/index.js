import "dotenv/config";

export const PORT = process.env.PORT;


export const EMAIL_ID = process.env.EMAIL_ID;
export const EMAIL_PASS = process.env.EMAIL_PASS;
export const SMTP_HOST = process.env.SMTP_HOST || "smtp.hostinger.com";
export const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);

export const RESEND_API_KEY = process.env.RESEND_API_KEY;


