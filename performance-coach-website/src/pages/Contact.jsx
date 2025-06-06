import QuoteForm from "../components/QuoteForm";
import RestringingSection from "../components/RestringingInfoSection";
import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" }); 
      }, []);
  return (
    <>
    <RestringingSection />
    <QuoteForm />
    </>
  )
}

export default Contact;
