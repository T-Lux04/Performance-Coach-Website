import '../App.css'
import NavbarComponent from '../components/NavbarComponent'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import AnimateLeft from "../components/animateLeft";
import AnimateRight from "../components/animateRight";
import BrandPhilosophy from '../components/BrandPhilosophy'
function Home() {
  return (
    <>
      <NavbarComponent />      
      <HeroSection />      
      <BrandPhilosophy/>      
      <AnimateLeft>
        <ServicesSection />
      </AnimateLeft>
      <AnimateRight>
        <TestimonialsSection />
      </AnimateRight>
    
      <Footer />
    </>
  )
}

export default Home
