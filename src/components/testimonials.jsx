import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    designation: "IELTS Success Mentor",
    quote:
      "IELTS Application gave me the confidence to excel in speaking, and the practice tests felt just like the real exam. Highly recommended for focused, guided learning.",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Rodriguez",
    designation: "Certified IELTS Coach",
    quote:
      "The AI band score predictions and tutor feedback accelerated my students' improvements. The seamless experience makes prep engaging and personalized.",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  const [hovered, setHovered] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-10 sm:py-16 bg-[#f5f7f9]">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-black">Testimonials</h2>
        <span className="block w-10 h-1 mx-auto bg-gray-300 rounded"></span>
      </div>
      <div
        className={`flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 max-w-4xl mx-auto 
          transition-all duration-700 ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-5 sm:p-7 flex flex-col items-center w-full max-w-xs sm:max-w-sm min-w-0 relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <div
              className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-white shadow cursor-pointer"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{ backgroundImage: `url(${testimonial.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
              aria-label={`Photo of ${testimonial.name}`}
            />
            {hovered === idx && (
              <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 bg-white text-gray-800 rounded-xl shadow-lg p-3 max-w-xs w-[90vw] sm:w-auto z-50 text-center">
                <span className="block font-semibold">{testimonial.name}</span>
                <span className="text-xs text-gray-500">{testimonial.designation}</span>
              </div>
            )}
            <p className="text-gray-600 text-sm sm:text-base mt-1 text-center">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
