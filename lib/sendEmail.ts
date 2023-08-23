"use server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const msg = {
    to: process.env.EMAIL_ADDRESS!, // Change to your recipient
    from: process.env.EMAIL_ADDRESS!, // Change to your verified sender
    subject: `Hello from ${name}`,
    // text: "and easy to do anywhere, even with Node.js",
    html: `<strong>Name: ${name}</strong><br><strong>Email: ${email}</strong><br><strong>${message}</strong>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    throw error;
  }
}
