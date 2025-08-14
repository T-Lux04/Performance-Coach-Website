import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";
import QuoteForm from "../components/QuoteForm";
import RestringingSection from "../components/RestringingInfoSection";
import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" }); 
      }, []);
  return (
    <>
    <NavbarComponent/>
    <RestringingSection />
    <QuoteForm />
    <div className="mt-6"><Footer /></div>
    
    </>
  )
}

export default Contact;
