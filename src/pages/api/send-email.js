import nodemailer from "nodemailer";
import cors from "cors";
import axios from "axios";

const corsMiddleware = cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 200,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

async function sendEmail(mailOptions) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter.sendMail(mailOptions);
}

export default async function handler(req, res) {
  await runMiddleware(req, res, corsMiddleware);

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { name, email, phone, subject, message, token } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  // Optional: Verify reCAPTCHA token if you want this security layer
  if (token) {
    try {
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
      const response = await axios.post(verificationUrl);
      if (!response.data.success) {
        return res.status(400).json({ message: "reCAPTCHA verification failed." });
      }
    } catch (error) {
      return res.status(500).json({ message: "Error verifying reCAPTCHA.", error: error.message });
    }
  }

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL, // Your email
    subject: subject || "New Contact Form Submission",
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}
Message: ${message}
    `,
  };

  try {
    await sendEmail(adminMailOptions);
    // await sendEmail(userMailOptions); // uncomment if you want to send user confirmation email
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email.", error: error.message });
  }
}
