import { motion } from 'framer-motion';
const Button = ({ children, className = "", ...props }) => (
    <button className={className} {...props}>
      {children}
    </button>
  );

export default function NavbarComponent(){
    return(
        <>
        <div className="bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-black shadow-lg p-4 flex justify-between items-center z-50 border-b border-yellow-500">
                <motion.h1 className="text-3xl font-extrabold tracking-wide" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
                Ewan Hughes
                </motion.h1>
                <nav className="space-x-6">
                {["About", "Services", "Testimonials", "Contact"].map((item, index) => (
                    <motion.a                    
                    className="text-yellow-400 hover:text-yellow-500 hover:text-xl transition-colors duration-300 text-lg font-semibold"
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.5 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <Button className="bg-yellow-400 text-stone-400 px-6 py-3 rounded-xl shadow-xl text-lg font-bold tracking-wide hover:bg-yellow-500 transition-transform transform hover:scale-105">
                    Book a Session
                </Button>
                </nav>
            </header>
        </div>
        </>
    )
}