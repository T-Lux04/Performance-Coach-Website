import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from './db/index.js';

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

const corsOrigin = process.env.CORS_ORIGIN || 'https://phasetennis.co.uk';
app.use(cors({
  origin: corsOrigin,
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

// --- Auth routes ---
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/auth/register', async (req, res) => {
  try {
    const email = String(req.body?.email || '').trim().toLowerCase();
    const password = String(req.body?.password || '');
    if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email' });
    if (password.length < 8) return res.status(400).json({ error: 'Password too short' });

    const passwordHash = await bcrypt.hash(password, 12);
    const result = await query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING RETURNING id',
      [email, passwordHash]
    );
    if (result.rowCount === 0) return res.status(409).json({ error: 'Email already registered' });
    return res.status(201).json({ success: true });
  } catch (err) {
    console.error('Register error', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.post('/auth/login', async (req, res) => {
  try {
    const email = String(req.body?.email || '').trim().toLowerCase();
    const password = String(req.body?.password || '');
    if (!emailRegex.test(email) || !password) return res.status(400).json({ error: 'Email and password required' });

    const { rows } = await query('SELECT id, email, password_hash FROM users WHERE email = $1', [email]);
    if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET || 'dev_secret_change_me', { expiresIn: '2h' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 1000 * 60 * 60 * 2,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Login error', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.post('/auth/logout', (req, res) => {
  res.clearCookie('token', { path: '/' });
  res.status(200).json({ success: true });
});

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
