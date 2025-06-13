import { motion } from "framer-motion";


function RestringingSection(){
    return(
        <section className="py-20 px-6 sm:px-16 ">
        <div className="max-w-5xl mx-auto text-center">
            <motion.h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-24 emph font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            🎾 Precision Starts at the Strings
            </motion.h2>
            <motion.p
            className="text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            >
            Your racket is an extension of your performance. At <strong className="emph">Phase</strong>, we offer <strong className="emph">elite-level restringing services</strong> tailored for athletes who demand precision, feel, and consistency. Whether you're a heavy hitter or a tactical grinder, the right string tension and setup can be the difference between <strong className="emph">winning a point</strong> or <strong className="emph">losing control</strong>.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            {[
                {
                title: "🎯 Custom Tension Tuning",
                text: "Tailored string tension optimized for your game style — control, power, or spin — delivered with professional precision."
                },
                {
                title: "⚡ Tour-Grade Strings",
                text: "We use premium poly and multifilament strings trusted by ATP & WTA professionals — giving you elite performance and durability."
                },
                {
                title: "🔁 Fast Turnaround",
                text: "Instant service available for those in season or training hard — no down time, just readiness."
                }
            ].map((item, i) => (
                <motion.div
                key={i}
                className="bg-gray-900 border border-yellow-500 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                >
                <h3 className="text-2xl font-semibold mb-2 emph">{item.title}</h3>
                <p className="text-sm sm:text-base">{item.text}</p>
                </motion.div>
            ))}
            </div>

            <motion.p
            className="mt-12 text-lg sm:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            >
            💡 <span className="italic">String choice and tension isn’t just preference — it’s performance engineering.</span><br />
            Book your custom restring today and feel the difference precision makes.
            </motion.p>
        </div>
        </section>

    )
}
export default RestringingSection