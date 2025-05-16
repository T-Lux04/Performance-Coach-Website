import { motion } from "framer-motion";
const Button = ({ children, ...props }) => (
    <button {...props}>{children}</button>
  );

export default function ServicesSection(){
    return(
        <>
        {/* Services Section */}
        <section id="services" className="py-20 px-10">
            <h2 className="text-4xl font-bold text-center text-gold-400">What I Offer</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
            {["1-on-1 Coaching", "Group Sessions", "Online Courses"].map((service, index) => (
                <motion.div key={index} className="p-8 bg-black shadow-lg rounded-xl text-center border border-gold-500" whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.7)" }}>
                <img src={`/service-${index + 1}.jpg`} alt={service} className="rounded-lg mb-4 w-full h-40 object-cover" />
                <h3 className="text-2xl font-semibold text-gold-400">{service}</h3>
                <p className="mt-2 text-gray-400">A short description of the service.</p>
                <Button className="mt-6 bg-gold-400 text-black px-6 py-3 rounded-lg shadow-lg text-lg font-bold tracking-wide hover:bg-gold-500 transition-transform transform hover:scale-105">
                    Learn More
                </Button>
                </motion.div>
            ))}
            </div>
        </section>
      </>
    )
}