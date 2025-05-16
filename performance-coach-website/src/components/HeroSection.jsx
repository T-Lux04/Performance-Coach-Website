import { motion } from 'framer-motion';
const Button = ({ children, ...props }) => (
    <button {...props}>{children}</button>
  );

export default function HeroSection(){
    return(
        <>
        {/* Hero Section */}
        {/* style={{ backgroundImage: "url('/hero-image.jpg')" }} */}
        <section className="h-screen flex flex-col justify-center items-center text-center bg-center relative overflow-hidden" >
            <motion.div className="absolute inset-0"></motion.div>
            <motion.h2 className="text-6xl font-extrabold text-gold-400 relative z-10 tracking-wider" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Unlock Your Full Potential
            </motion.h2>
            <motion.p className="text-lg mt-4 text-gray-300 relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
            Personalized coaching to achieve peak performance.
            </motion.p>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
            <Button className="mt-6 bg-gold-400 text-black px-8 py-4 text-xl font-bold rounded-full shadow-2xl hover:bg-gold-500 transition-transform transform hover:scale-110 relative z-10">
                Book a Free Consultation
            </Button>
            </motion.div>
        </section>
      </>
    )
}