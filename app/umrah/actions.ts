"use server";
import nodemailer from "nodemailer";

export async function sendMail({
  nomPrenom,
  email,
  tel,
  country,
  ville,
  numPeople,
}: {
  nomPrenom: string;
  email: string;
  tel: string;
  country: string;
  numPeople: number;
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
      from:"oceanconnecting@gmail.com",
      to: process.env.EMAIL_RECEIVER,
      subject: "Nouvelle inscription Hajj et Omra",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #4CAF50;">Nouvelle inscription Hajj et Omra</h2>
            <p><strong>Nom/Prénom:</strong> ${nomPrenom}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${tel}</p>
            <p><strong>Ville :</strong> ${country}</p>
            <p><strong>country :</strong> ${ville}</p>
            <p><strong>number of people :</strong> ${numPeople}</p>
          </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Erreur lors de l'envoi du mail");
  }
}
