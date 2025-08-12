import React, { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import StarRating from "./StarRating";

const testimonials = [
  {
    rating: 4,
    quote: "This coaching changed my life!",
    name: "Client One",
  },
  {
    rating: 5,
    quote: "I've achieved more than I thought possible.",
    name: "Client Two",
  },
  {
    rating: 5,
    quote: "Highly recommend to anyone serious about success.",
    name: "Client Three",
  },
  {
    rating: 4,
    quote: "Incredible journey with visible results.",
    name: "Client Four",
  },
  {
    rating: 5,
    quote: "A coach who really cares and delivers.",
    name: "Client Five",
  },
];

export default function TestimonialsSection() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 8,
    },
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 420px)": {
        slides: { perView: 1, spacing: 12 },
      },
      "(min-width: 480px)": {
        slides: { perView: 1.1, spacing: 14 },
      },
      "(min-width: 640px)": {
        slides: { perView: 1.3, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  // Autoplay logic
  const timeout = useRef();
  const mouseOver = useRef(false);

  const clearNextTimeout = () => clearTimeout(timeout.current);

  const nextTimeout = () => {
    clearNextTimeout();
    if (mouseOver.current) return;
    timeout.current = setTimeout(() => {
      slider.current?.next();
    }, 4000);
  };

  useEffect(() => {
    if (!slider) return;
    slider.current?.on("created", () => {
      slider.current?.container.addEventListener("mouseover", () => {
        mouseOver.current = true;
        clearNextTimeout();
      });
      slider.current?.container.addEventListener("mouseout", () => {
        mouseOver.current = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.current?.on("dragStarted", clearNextTimeout);
    slider.current?.on("animationEnded", nextTimeout);
    slider.current?.on("updated", nextTimeout);
  }, [slider]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 w-full overflow-x-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 emph">
          What They Say
        </h2>

        <div className="relative w-full">
          {/* Keen Slider Container */}
          <div className="overflow-hidden">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="keen-slider__slide"
                >
                  <div className="h-full min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] bg-black border border-gold-500 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg text-center flex flex-col justify-between">
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="mb-3 font-semibold text-gold-400 text-sm sm:text-base lg:text-lg">
                        {t.name}
                      </h4>              
                      <StarRating rating={t.rating}/>
                    </div>
                    <p className="italic mt-3 text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only visible on larger screens */}
          <button
            onClick={() => slider.current?.prev()}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-full bg-gold-400 text-black w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg hover:bg-gold-500 transition-all duration-200 hover:scale-110 items-center justify-center z-10"
          >
            <span className="text-sm lg:text-base">◀</span>
          </button>
          
          <button
            onClick={() => slider.current?.next()}
            aria-label="Next testimonial"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-full bg-gold-400 text-black w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg hover:bg-gold-500 transition-all duration-200 hover:scale-110 items-center justify-center z-10"
          >
            <span className="text-sm lg:text-base">▶</span>
          </button>

          {/* Touch/Swipe indicator for mobile */}
          <div className="md:hidden text-center mt-4">
            <p className="text-gray-400 text-xs">← Swipe to see more testimonials →</p>
          </div>
        </div>
      </div>
    </section>
  );
}



// CODE FOR TRUSTINDEX

// export default function ReviewsSection() {
//   return (
//     <section className="my-12 px-4 sm:px-6 lg:px-8">
//   <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 emph">
//     What Our Clients Say
//   </h2>
  
//   <div className="w-full max-w-6xl mx-auto">
//     <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
//       <iframe
//         src="https://widget.trustindex.io/XYZ"
//         title="Google Reviews"
//         loading="lazy"
//         className="w-full h-full border-0"
//         allow="fullscreen"
//       ></iframe>
//     </div>
//   </div>
// </section>

//   );
// }
