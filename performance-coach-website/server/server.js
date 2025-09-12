import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
  origin: 'https://phasetennis.co.uk',
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
app.post('/api/consultation', async (req, res) => {
  const { name, dob, email, phone, experience, Goals, additionalInfo, howDidYouHear, otherSource} = req.body;

  try {
    await resend.emails.send({
      from: 'Coach@phasetennis.co.uk',
      to: ['Coach@phasetennis.com'],
      replyTo: `${name} <${email}>`,
      subject: `One-on-one Consultation Request`,
      html: `
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Mobile Number: </strong> ${phone}</p>
        <p><strong>Date of Birth: </strong> ${dob}</p>
        <p><strong>Experience Level: </strong> ${experience}</p>
        <p><strong>Goals: <br/></strong> ${Goals}</p>
        <p><strong>Additional Information: <br/></strong> ${additionalInfo}</p>
        <p><strong>How Did You Hear About Us: </strong> ${howDidYouHear}</p>
        <p><strong>Other Source: </strong> ${otherSource}</p>
      `,
    });

    res.status(200).json({ success: true });
    console.log("Email sent successfully.");
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.post('/api/competitor-package', async (req, res) => {
  const { name, email, phone, age, trainingDuration, competitiveLevel, achievements, shortTermGoals, longTermGoals, whyPackage, commitment, additionalInfo, phaseClothing } = req.body;

  try {
    await resend.emails.send({
      from: 'Coach@phasetennis.co.uk',
      to: ['Coach@phasetennis.com'],
      replyTo: `${name} <${email}>`,
      subject: `Competitor Waiting list`,
      html: `
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Mobile Number: </strong> ${phone}</p>
        <p><strong>Age: </strong> ${age}</p>
        <p><strong>Training Duration: </strong> ${trainingDuration}</p>
        <p><strong>Competitive Level: </strong> ${competitiveLevel}</p>
        <p><strong>Achievements: <br/></strong> ${achievements}</p>
        <p><strong>Short-Term Goals: <br/></strong> ${shortTermGoals}</p>
        <p><strong>Long-Term Goals: <br/></strong> ${longTermGoals}</p>
        <p><strong>Why This Package: <br/></strong> ${whyPackage}</p>
        <p><strong>Commitment Level: </strong> ${commitment}</p>
        <p><strong>Additional Information: <br/></strong> ${additionalInfo}</p>
        <p><strong>Interested in Phase Clothing?: </strong> ${phaseClothing}</p> 
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
