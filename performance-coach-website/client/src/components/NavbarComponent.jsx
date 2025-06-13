import { motion } from 'framer-motion';
import Logo from '../assets/images/Logo.png';


export default function NavbarComponent(){
    return(
        <>
        {/* Header with logo only */}
          <header className="top-0 left-0 w-full shadow-lg p-2 flex justify-center items-center z-50">
            <motion.img  src={Logo} alt="Phase Tennis Academy Logo" style={{width: '1500px',height: '350px',objectFit: 'cover',objectPosition: 'center',}} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}/>
          </header>
        </>
    )
}