import React, { useState, useEffect } from "react";
import studentBg from "../assets/student.png";
import Navbar from "./navbar";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative h-[520px] sm:h-[620px] md:h-[700px] lg:h-[740px] flex flex-col justify-center overflow-hidden
        transition-all duration-800 ease-out
        ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}
      `}
    >
      <Navbar />
      <img
        src={studentBg}
        alt="Student preparing for IELTS"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-10">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#181f3b] via-[#1c2655] to-transparent"
          style={{ opacity: 0.92 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 45% 60%, rgba(22,30,58,0.7) 0%, rgba(22,30,58,0.28) 70%, rgba(22,30,58,0) 100%)",
            zIndex: 2,
          }}
        />
      </div>
      <div className="relative z-20 flex items-center h-full px-5 md:pl-20 xl:pl-32 max-w-full md:max-w-2xl">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight text-left">
            Prepare for IELTS <br /> Success
          </h1>
          <p className="mb-8 lg:mb-10 text-base sm:text-lg lg:text-2xl text-white/85 font-light max-w-sm sm:max-w-lg lg:max-w-xl text-left">
            Achieve your IELTS goals with expert guidance, AI-driven assessment, and personalized practice.
          </p>
          <button
            className="bg-blue-800 hover:bg-blue-900 rounded-full px-6 py-2 lg:px-8 lg:py-3 font-semibold shadow-lg  text-white cursor-pointer text-base lg:text-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            onClick={() => alert("Registration starting soon!")}
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
