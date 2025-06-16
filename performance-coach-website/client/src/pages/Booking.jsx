import { motion } from "framer-motion";
import { useEffect } from "react";
import escLogo from '../assets/images/EscLogo.png';
import Logo from '../assets/images/Logo.png'
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

function Booking() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <NavbarComponent/>
        <motion.h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-12 emph font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            Book Your Sessions Now
        </motion.h2>
      {/* </header> */}

      {/* Main Content */}
      <main className="flex-1 px-6 mt-12 sm:px-10 md:px-20 text-center max-w-6xl mx-auto">
        <motion.p
          className="text-lg sm:text-xl leading-relaxed max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <strong className="emph">Book</strong> in your next session seamlessly. Select a time that works for you, and get ready to elevate your <strong className="emph">performance</strong>.
        </motion.p>

        {/* Embedded Calendar */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-yellow-500 shadow-xl max-w-6xl mx-auto w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[100vh]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://calendly.com/coach-phasetennis"
            title="Schedule a Session"
            className="w-full h-full"
            style={{ backgroundColor: "#000" }}
          >
            Error connecting to calendar
          </iframe>
        </motion.div>

        {/* CTA Message */}
        <motion.p
          className="mt-12 text-lg sm:text-xl max-w-6xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🗓️ <span className="italic">Sessions fill up <strong className="emph">fast</strong> — secure your slot and stay <strong className="emph">match-ready</strong>.</span>
        </motion.p>
      </main>

      <Footer />
    </div>
  );
}

export default Booking;
