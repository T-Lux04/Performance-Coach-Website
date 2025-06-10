import { motion } from "framer-motion";
import { useEffect } from "react";
import escLogo from '../assets/images/EscLogo.png';
import Footer from "../components/Footer";


function Booking() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" }); 
      }, []);
  return (
    <>
    <header className="top-0 left-0 w-full shadow-lg p-2 flex justify-center items-center z-50 border-b border-yellow-500 mb-6">
            <motion.img
                src={escLogo}
                alt="Every Step Counts Logo"
                className="w-auto h-auto object-cover object-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
                />
    </header>
    <section>
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <strong className="emph">Lock</strong> in your next session seamlessly. Select a time that works for you.
        </motion.p>

        <motion.div
  className="rounded-xl overflow-hidden border border-yellow-500 shadow-2xl max-w-6xl mx-auto w-full h-[60vh] sm:h-[60vh] md:h-[75vh] lg:h-[90vh]"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  viewport={{ once: true }}
>
  <iframe
    src="https://calendly.com/coach-phasetennis/30min"
    title="Schedule a Session"
    className="w-full h-full"
    style={{ backgroundColor: "#000" }}
  >Error connecting to calendar</iframe>
    </motion.div>


        <motion.p
          className="mt-12 text-lg sm:text-xl max-w-3xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          🗓️ <span className="italic">Sessions fill up <strong className="emph">fast</strong> — secure your slot and stay <strong className="emph">match-ready</strong>.</span>
        </motion.p>
      </div>
    </section>

    <Footer />
    </>
  );
}

export default Booking;
