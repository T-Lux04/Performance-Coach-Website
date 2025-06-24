import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
  origin: 'https://performance-coach-website-static-site.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(bodyParser.json());


app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Coach@phasetennis.co.uk',
      to: ['Coach@phasetennis.com'],
      to: ['luxtimothee@gmail.com'],
      replyTo: `${name} <${email}>`,
      subject: `Restringing Service Request`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Description:</strong><br/> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
    console.log("Email sent successfully.");
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
