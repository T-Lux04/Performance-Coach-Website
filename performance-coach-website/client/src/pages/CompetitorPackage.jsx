import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/service-3.webp";
import BgVideo from "../assets/videos/CompPackage_vid.mp4";
import Poster from "../assets/images/Comp_poster.webp";

// Clean, modern, full‑bleed layout (no side margins, no enquire button)
export default function CompetitorPackage() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
        e.preventDefault();
    try {
      // Simulate form submission
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        trainingDuration: formData.trainingDuration,
        competitiveLevel: formData.competitiveLevel,
        achievements: formData.achievements,
        shortTermGoals: formData.shortTermGoals,
        longTermGoals: formData.longTermGoals,
        whyPackage: formData.whyPackage,
        commitment: formData.commitment,
        additionalInfo: formData.additionalInfo,
        phaseClothing: formData.phaseClothing,
      }
      // Send payload to server
      const response = await fetch("https://performance-coach-website.onrender.com/api/competitor-package", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({});
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your application. Please try again later.");
      return;
    }
    console.log("Competitor Package Application:", formData);
    alert("Application submitted – we'll review and get back to you.");
  };

  // Ensure page always loads scrolled to the very top (prevents retained scroll on navigation/back)
  useEffect(() => {
    try { if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'; } catch (_) {}
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
  <div className="bg-[#0c0c09] text-white overflow-hidden font-sans">
      {/* HERO WITH BACKGROUND VIDEO */}
      <section className="relative min-h-[100dvh] w-full flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src={BgVideo}
          poster={Poster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/100" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 w-full max-w-5xl mx-auto text-center px-6 md:px-10 space-y-8"
        >
          <motion.img src={Logo} alt="Phase Logo" className="h-24 w-auto mx-auto drop-shadow-[0_0_20px_rgba(255,215,128,0.35)]" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} />
          <h1 className="emph text-4xl md:text-6xl font-semibold tracking-tight leading-tight">Phase Competitor Package</h1>
          <p className="text-base md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
            <span className="font-semibold text-[#f1deae]">Train, think, and compete like a champion.</span><br className="hidden md:block" />
            Invite‑only pathway for committed Phase athletes with proven foundations and clear competitive intent.
          </p>
        </motion.div>
      </section>

      {/* PACKAGE DETAILS */}
      <section className="mt-12 pb-16 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full max-w-5xl bg-[#0f0f0f] border border-yellow-500/25 rounded-3xl p-10 md:p-16 space-y-10 shadow-[0_0_45px_-14px_rgba(250,204,21,0.3)]">
          <h2 className="emph text-2xl md:text-4xl font-semibold text-center tracking-tight">Monthly Structure</h2>
          <ul className="space-y-4 text-base md:text-lg text-gray-200">
            {[
              ['👤','2× 1:1 coaching (technical & tactical focus) (Weekly)'],
              ['🎾','1× guided buddy hit (Subject to change)'],
              ['🏋️‍♂️','1× strength & athletic development session (Weekly)'],
              ['🗓️','1× monthly performance review'],
              ['🎥','1× 30‑min asynchronous video analysis'],
              ['🎯','1× targeted off‑court skill / mental block (Weekly)']
            ].map(([icon,label]) => (
              <li key={label} className="flex items-start gap-4"><span className="shrink-0 text-xl leading-none pt-0.5">{icon}</span><span>{label}</span></li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* EXPERIENCE / VALUE PROP */}
      <section className="pb-16 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full max-w-5xl grid md:grid-cols-2 gap-10">
          <div className="bg-[#101010] border border-yellow-500/20 rounded-2xl p-8 md:p-10 space-y-5">
            <h3 className="emph text-xl md:text-2xl font-semibold">High-Performance Experience</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Precision coaching, integrated physical development, tactical patterning, and mindset frameworks combined into a measurable progression system.
            </p>
            <ul className="text-base md:text-lg text-gray-300 space-y-2">
              {['Technical refinement loops','Tactical scenario rehearsal','Movement & load integration','Performance data touchpoints'].map(x => (
                <li key={x} className="flex gap-3"><span className="text-yellow-400">•</span><span>{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-[#101010] border border-yellow-500/20 rounded-2xl p-8 md:p-10 space-y-5">
            <h3 className="emph text-xl md:text-2xl font-semibold">Player Expectations</h3>
            <ul className="text-base md:text-lg text-gray-300 space-y-2">
              {['Consistent attendance & intent','Session reflection / journaling','Transparent competition calendar','Recovery & nutrition ownership','Growth mindset', 'Communication'].map(x => (
                <li key={x} className="flex gap-3"><span className="text-yellow-400">•</span><span>{x}</span></li>
              ))}
            </ul>
            <p className="text-xs md:text-sm text-gray-400 pt-1">Failure to maintain standards may result in removal from the program.</p>
          </div>
        </motion.div>
      </section>

      {/* CONDITIONS / ELIGIBILITY */}
      <section className="pb-20 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="w-full max-w-5xl bg-[#0f0f0f] border border-yellow-500/25 rounded-3xl p-10 md:p-14 space-y-8">
          <h3 className="emph text-2xl md:text-3xl font-semibold">Conditions & Eligibility</h3>
          <ul className="space-y-3 text-base md:text-lg text-gray-300 list-disc list-inside">
            <li>Must have previously trained with Phase Tennis Academy.</li>
            <li>Clear, measurable competitive goals (short & long term).</li>
            <li>Established technical foundation & physical readiness.</li>
            <li>Commitment to full block attendance & review process.</li>
            <li>Limited spaces – selection based on suitability.</li>
          </ul>
          <p className="text-sm text-gray-400">Selection is discretionary. Meeting criteria does not guarantee acceptance.</p>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="pb-28 flex justify-center">
        <motion.ol initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full max-w-5xl grid sm:grid-cols-3 gap-8">
          {[
            ['Apply','Submit detailed performance + goal info.'],
            ['Review','Coaching staff assess technical / readiness fit.'],
            ['Invitation','Successful players onboard & begin cycle.']
          ].map(([title,desc],i)=>(
            <li key={title} className="relative bg-[#101010] border border-yellow-500/25 rounded-2xl p-8 flex flex-col gap-3">
              <span className="absolute -top-4 -left-4 h-12 w-12 rounded-xl bg-yellow-400 text-black text-xl font-bold flex items-center justify-center shadow-lg shadow-yellow-500/30">{i+1}</span>
              <h4 className="emph text-base md:text-lg font-semibold tracking-wide mt-6">{title}</h4>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{desc}</p>
            </li>
          ))}
        </motion.ol>
      </section>

      {/* FORM */}
      <section id="application-form" className="pb-40 -mt-4 flex justify-center">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="w-full max-w-5xl bg-[#0f0f0f] border border-yellow-500/25 rounded-3xl p-10 md:p-16 space-y-14 shadow-[0_0_55px_-15px_rgba(250,204,21,0.35)]"
        >
          <div className="space-y-3 text-center">
            <h2 className="emph text-3xl md:text-5xl font-semibold tracking-tight">Join Waiting List</h2>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">Fill out every field carefully. We assess suitability based on readiness, intent and performance profile.</p>
          </div>

          <div className="grid gap-6">
            {/* Personal Details */}
            <div className="space-y-4">
              <h3 className="emph text-xl md:text-2xl font-semibold">Personal Details</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: "Full Name", name: "fullName", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone", name: "phone", type: "text" },
                  { label: "Age", name: "age", type: "number" }
                ].map(f => (
                  <input key={f.name} {...f} placeholder={f.label} required onChange={handleChange} className="rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 focus:ring-0 px-5 py-4 text-base" />
                ))}
              </div>
            </div>

            {/* Background */}
            <div className="space-y-4">
              <h3 className="emph text-xl md:text-2xl font-semibold">Tennis Background</h3>
              <input name="trainingDuration" placeholder="How long training with Phase?" onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base" />
              <select name="competitionLevel" onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base">
                <option value="">Competition Level</option>
                <option>Local club</option>
                <option>County</option>
                <option>Regional</option>
                <option>National</option>
              </select>
              <textarea name="achievements" placeholder="Key achievements" rows={3} onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base" />
            </div>

            {/* Goals */}
            <div className="space-y-4">
              <h3 className="emph text-xl md:text-2xl font-semibold">Goals & Commitment</h3>
              <textarea name="shortTermGoals" placeholder="Short-term goals (3–6 months)" rows={3} onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base" />
              <textarea name="longTermGoals" placeholder="Long-term goals (1–3 years)" rows={3} onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base" />
              <textarea name="whyPackage" placeholder="Why is this package right for you?" rows={3} onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base" />
              <select name="commitment" onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base">
                <option value="">Commitment readiness</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <textarea name="additionalInfo" placeholder="Injuries / constraints" rows={3} onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base" />
            </div>
            <div className="space-y-4">
              <h3 className="emph text-xl md:text-2xl font-semibold">Phase Clothing</h3>
              <select name="phaseClothing" onChange={handleChange} className="w-full rounded-lg bg-black/60 border border-gray-700 focus:border-yellow-500 px-5 py-4 text-base">
                <option value="">Would you be interested in Phase clothing?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

      <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} type="submit" className="w-full py-5 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/30 hover:bg-yellow-300 transition-colors">
            Submit Application
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
}
