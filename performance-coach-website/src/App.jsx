import './App.css'
import NavbarComponent from './components/NavbarComponent'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import AnimatedSection from "./components/AnimatedSections";

function App() {
  return (
    <>
      <NavbarComponent />      

      <HeroSection />            
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      <TestimonialsSection />
      <Footer />
    </>
  )
}

export default App
