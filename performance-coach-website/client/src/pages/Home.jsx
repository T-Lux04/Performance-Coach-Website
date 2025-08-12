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
    <div className="overflow-hidden">
      <NavbarComponent />
      
        <div className='w-full'>
          <HeroSection /></div>
        <main className="max-w-screen-xl mx-auto sm:px-4 lg:px-8">

        <BrandPhilosophy />

        <div className="mt-12">
          <AnimateLeft>
            <ServicesSection />
          </AnimateLeft>
        </div>
        <div className="mt-12">
            <TestimonialsSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
