import { motion } from "framer-motion";
import { useEffect} from "react";
import ConsultationForm from "../components/ConsultationForm";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

function Booking() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  console.log('Type is: '+type);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <NavbarComponent/>
      {type === "one-on-one" ? (
        <motion.h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-12 emph font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            Book Your 1-on-1 Coaching Consultation
        </motion.h2>
      ) : (
        <motion.h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-12 emph font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            Book Your Sessions Now
        </motion.h2>
      )}
      {/* </header> */}

      {/* Main Content */}
      <main className="flex-1 px-6 mt-12 sm:px-10 md:px-20 text-center max-w-6xl mx-auto">
        {type === "one-on-one" ? (<motion.p
          className="text-lg sm:text-xl leading-relaxed max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
        <strong className="emph">Help us</strong> understand your game. Fill in your details, skill level, and <strong className="emph">training goals</strong> to shape your one-on-one sessions.
        </motion.p>) : (
          <motion.p
            className="text-lg sm:text-xl leading-relaxed max-w-6xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <strong className="emph">Book</strong> your session now and take the first step towards unlocking your full potential.
          </motion.p>
        )}

        {/* Embedded Calendar */}
        
          {type === "one-on-one" && (
            <>
              <ConsultationForm />
            </>
          )}
          {type === "iq-test" && (
                <div
              className="rounded-2xl overflow-hidden border border-yellow-500 shadow-xl max-w-6xl mx-auto w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[100vh]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
            <iframe
              loading="lazy"
              src="https://calendly.com/coach-phasetennis/phase-movement-iq-test"
              title="Schedule an IQ Movement Test"
              allow="fullscreen; payment; camera; microphone; autoplay; clipboard-write"
              className="w-full h-full"
              style={{ backgroundColor: "#000" }}
            />
            </div>
          )}
        {/* CTA Message */}
        {type !== "one-on-one" && (
          <motion.p
            className="mt-12 text-lg sm:text-xl max-w-6xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🗓️ <span className="italic">Sessions fill up <strong className="emph">fast</strong> — secure your slot and stay <strong className="emph">match-ready</strong>.</span>
          </motion.p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Booking;
