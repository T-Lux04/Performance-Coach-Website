import { motion } from "framer-motion";
import service1 from '../assets/images/service-1.webp';
import service2 from '../assets/images/service-2.webp';
import service3 from '../assets/images/service-3.webp';

import { Link } from "react-router-dom";

const Button = ({ children, ...props }) => (
    <button {...props}>{children}</button>
  );

export default function ServicesSection(){
    const serviceImages = [service1, service2, service3];
    const serviceDescription = ["Our 1-1 coaching sessions are designed to elevate your game, refine your technique, and sharpen your mindset.","We offer elite-level restringing services tailored for athletes who demand precision, feel, and consistency." ,"A 1-to-1 performance session where we assess 5 key footwork patterns that define your game."]
    const serviceLink = ["/booking?type=one-on-one", "/Restringing", "/booking?type=iq-test"];
    const linkDescription = ["Book a session at Phase Tennis Academy", "Learn more about restringing and our services", "Book an IQ Movement Test"]

    return(
        <>
        {/* Services Section */}
        <section id="services" className="py-20 px-10">
            <h2 className="text-4xl font-bold text-center emph">What I Offer</h2>
            <div className="grid md:grid-cols-2 gap-8 justify-center mt-12">
            {["1-on-1 Coaching", "Restringing Service", "Phase Movement IQ Test"].map((service, index) => (
                <motion.div key={index} id="services" className="p-8 bg-black shadow-lg rounded-xl text-center border border-gold-500" whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.7)" }}>
                <div className="rounded-xl overflow-hidden mb-4 w-full h-80 flex items-center justify-center bg-black">
                    <img
                        src={serviceImages[index]}
                        alt={service}
                        className="max-h-full max-w-full object-contain rounded-xl"
                    />
                </div>              
                <h3 className="text-2xl font-semibold text-gold-400">{service}</h3>
                <p className="mt-2 text-gray-400">{serviceDescription[index]}</p>
                <Link to={serviceLink[index]}>
                    <Button className="mt-6 bg-gold-400 text-black px-6 py-3 rounded-lg shadow-lg text-lg font-bold tracking-wide hover:bg-gold-500 transition-transform transform hover:scale-105" aria-label={linkDescription[index]}>
                        {linkDescription[index]}                      
                    </Button>
                </Link>
                </motion.div>
            ))}
            </div>
        </section>
      </>
    )
}