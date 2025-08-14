import React from "react";
import Logo from "../assets/images/service-3.webp";
import { motion } from "framer-motion";
import comp_package_vid from "../assets/videos/CompPackage_vid.mp4";
import poster_vid from "../assets/images/poster_vid.webp";
import Footer from "../components/Footer";

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

function CompetitorPackage() {
  return (
    <>
      {/* Hero Section Full-Bleed */}
      <section className="full-bleed relative overflow-hidden bg-black h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen mb-32">
        {/* Video Layer */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={comp_package_vid}
          autoPlay
          muted
          loop
          playsInline
          poster={poster_vid}
        />
        <div className="absolute inset-0 bg-black/10 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center px-4 sm:px-6">
          <motion.h2
            className="text-4xl md:text-6xl font-bold emph tracking-wide drop-shadow-lg mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Coming Soon!
          </motion.h2>

          {/* Added detailed description */}
          <motion.div
            className="mt-6 max-w-3xl text-left text-gray-200 space-y-4 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              The Phase Competitor Package
            </h3>
            <p className="italic text-center text-sm md:text-base">
              For athletes who refuse to settle for “good enough.”
            </p>
            <p>
              This is our most{" "}
              <span className="emph font-semibold">exclusive, results‑driven program</span>
              — engineered for players who already train with us, have clear
              competitive goals, and are ready to unlock their full potential.
            </p>
            <p>
              Through a powerful integration of{" "}
              <span className="emph">precision coaching</span>, elite physical
              conditioning, tactical mastery, and mental edge development, this
              package delivers a complete high‑performance pathway. Every session
              is tailored. Every detail is measured. Every gain is tracked so you
              move relentlessly toward your competitive peak.
            </p>
           
            <p className="text-center">
              If you’re ready to{" "}
              <span className="emph">train, think, and compete like a champion</span>
              — welcome to the next phase.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default CompetitorPackage;
