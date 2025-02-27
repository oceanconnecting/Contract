"use server";
import nodemailer from "nodemailer";

export async function sendMail({
  nomPrenom,
  email,
  tel,
  ville,
}: {
  nomPrenom: string;
  email: string;
  tel: string;
  ville: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "Nouvelle inscription Hajj et Omra",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #4CAF50;">Nouvelle inscription Hajj et Omra</h2>
            <p><strong>Nom/Prénom:</strong> ${nomPrenom}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${tel}</p>
            <p><strong>Ville:</strong> ${ville}</p>
          </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
  } catch (error) {}
}
