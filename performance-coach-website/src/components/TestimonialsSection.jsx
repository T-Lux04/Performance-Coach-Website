import { motion } from 'framer-motion';
import React, { useState } from 'react';
const Button = ({ children, ...props }) => (
    <button {...props}>{children}</button>
  );
  
export default function TestimonialsSection(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
        image: "/testimonial-1.jpg",
        quote: "“This coaching changed my life!”",
        name: "Client One",
        },
        {
        image: "/testimonial-2.jpg",
        quote: "“I've achieved more than I thought possible.”",
        name: "Client Two",
        },
        {
        image: "/testimonial-3.jpg",
        quote: "“Highly recommend to anyone serious about success.”",
        name: "Client Three",
        },
        {
        image: "/testimonial-4.jpg",
        quote: "“Incredible journey with visible results.”",
        name: "Client Four",
        },
        {
        image: "/testimonial-5.jpg",
        quote: "“A coach who really cares and delivers.”",
        name: "Client Five",
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 1));
    };
    return(
        <>
        {/* Testimonials Section - Carousel */}
        <section id="testimonials" className="bg-black py-20 px-10 text-center">
            <h2 className="text-4xl font-bold text-gold-400 mb-10">Success Stories</h2>
            <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 justify-center">
                {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                <motion.div key={index} id="testimonials" className="p-6 bg-gray-900 border  shadow-lg rounded-xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <img src={testimonial.image} alt="Client" className="rounded-full w-20 h-20 mx-auto mb-4" />
                    <p className="text-gray-300 italic">{testimonial.quote}</p>
                    <h4 className="mt-4 font-semibold text-gold-400">{testimonial.name}</h4>
                </motion.div>
                ))}
            </div>
            <div className="flex justify-center gap-6 mt-10">
                <Button onClick={handlePrev} className="bg-yellow-400 text-stone-950 px-6 py-2 rounded shadow hover:bg-yellow-500 transition-transform transform hover:scale-105">Prev</Button>
                <Button onClick={handleNext} className="bg-yellow-400 text-stone-950 px-6 py-2 rounded shadow hover:bg-yellow-500 transition-transform transform hover:scale-105">Next</Button>
            </div>
            </div>
        </section>
      </>
    )
}