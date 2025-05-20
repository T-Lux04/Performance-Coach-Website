import './App.css'
import NavbarComponent from './components/NavbarComponent'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import AnimateLeft from "./components/animateLeft";
import AnimateRight from "./components/animateRight";
function App() {
  return (
    <>
      <NavbarComponent />      

      <HeroSection />            
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

export default App
