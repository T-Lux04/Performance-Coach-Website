import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(bodyParser.json());



app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, stringType, tension, description} = req.body;

console.log("Received form data:", req.body);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      // to: 'Coach@phasetennis.co.uk',
      to: ['luxtimothee@gmail.com'],
      reply_to: `${firstName} ${lastName} <${email}>`,
      subject: `Restringing Service:`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>String type:</strong> ${stringType}</p>
        <p><strong>Tension:</strong><br/> ${tension}</p>
        <p><strong>Description:</strong><br/> ${description}</p>

      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
