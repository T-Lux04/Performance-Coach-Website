import { motion } from 'framer-motion';
import bg_vid from '../assets/videos/bg_vid.mp4';
const Button = ({ children, ...props }) => (
    <button {...props}>{children}</button>
  );

export default function HeroSection(){
    return(
      <div>
        {/* Hero Section */}
        <section className="py-48 flex flex-col justify-center  items-center text-center bg-cover bg-center relative overflow-hidden">
        <video
        className="absolute min-w-full min-h-full w-auto h-auto object-cover"
        autoPlay
        muted
        loop
        playsInline
        >
          <source src={bg_vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>        
        <motion.div className="absolute inset-0"></motion.div>
            <motion.h2 className="text-6xl font-extrabold relative z-10 tracking-wider" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
            Unlock Your Full Potential
            </motion.h2>
            <motion.p className="text-lg mt-4 text-gray-300 relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2 }}>
            Personalized coaching to achieve peak performance.
            </motion.p>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
            <Button className="mt-6 bg-gold-400 text-black px-8 py-4 text-xl font-bold rounded-full shadow-2xl hover:bg-gold-500 transition-transform transform hover:scale-110 relative z-10">
                Book a Free Consultation
            </Button>
            </motion.div>
        </section>
      </div>
    )
}