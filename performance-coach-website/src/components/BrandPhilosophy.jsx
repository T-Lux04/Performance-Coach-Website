import React from "react";
import { motion } from 'framer-motion';

export default function BrandPhilosophy(){
    return(
        <>
            {/* Brand Philosophy Section */}
            <section id="philosophy" className="py-20 px-10 text-center">
            <motion.h2 
            className="text-4xl font-extrabold mb-6 tracking-wide emph"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            >
            Where Elite Tennis Begins With Precision.
            </motion.h2>

            <motion.p 
            className="max-w-3xl mx-auto text-lg leading-relaxed mb-12"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            >
            <strong className="emph">Phase</strong> is more than a name — it’s a system. A high-performance brand built for serious athletes ready to take their game to the next level.
            At Phase, we don’t chase trends. We build winners through two unshakable pillars:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-12 text-left">
            <motion.div 
                className="bg-gray-900 p-6 rounded-xl border"
                whileHover={{ scale: 1.03 }}
            >
                <h3 className="text-2xl font-bold mb-2 emph">⚡ Footwork Mastery</h3>
                <p className="">Because without movement, there is no tennis.</p>
            </motion.div>
            <motion.div 
                className="bg-gray-900 p-6 rounded-xl border"
                whileHover={{ scale: 1.03 }}
            >
                <h3 className="text-2xl font-bold mb-2 emph">🎯 Phase Recognition</h3>
                <p className="">Attack. Neutral. Defend. Tactical clarity at every moment.</p>
            </motion.div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 tracking-wide emph">Performance Principles</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {[
                {
                title: "🔺 Read the Phase",
                desc: "Recognize Attack, Neutral, or Defend before the ball is hit. Anticipation is everything.",
                },
                {
                title: "🔺 Move with Intention",
                desc: "Footwork, recovery, and spacing dictated by the phase. No wasted steps. No confusion.",
                },
                {
                title: "🔺 Execute Ruthlessly",
                desc: "Tactical execution that suits the phase. Precise. Relentless. Zero hesitation.",
                },
            ].map((item, idx) => (
                <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-xl border"
                whileHover={{ scale: 1.03 }}
                >
                <h4 className="text-xl font-bold mb-2 emph">{item.title}</h4>
                <p className="">{item.desc}</p>
                </motion.div>
            ))}
            </div>

            <motion.p 
            className="mt-16 max-w-2xl mx-auto text-lg italic leading-relaxed"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            >
            This is <span className="font-bold emph">Phase</span>. Where decision-making meets discipline. Where footwork meets force. Where talent becomes unstoppable.
            </motion.p>
            </section>

        </>
    )
}