import { useState } from "react";
import studentBg from "../assets/student.png";
import Navbar from "./navbar";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative h-[520px] sm:h-[620px] md:h-[700px] lg:h-[740px] flex flex-col justify-center overflow-hidden">
      <Navbar />
      <img
        src={studentBg}
        alt="Student preparing for IELTS"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#181f3b] via-[#1c2655] to-transparent" style={{ opacity: 0.92 }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 45% 60%, rgba(22,30,58,0.7) 0%, rgba(22,30,58,0.28) 70%, rgba(22,30,58,0) 100%)",
          zIndex: 2
        }} />
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
            onClick={() => setModalOpen(true)}
          >
            Start Learning
          </button>
        </div>
      </div>
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-xs sm:max-w-md w-full text-center">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3">Registration Coming Soon!</h2>
            <p className="text-gray-600 mb-5 text-sm sm:text-base">
              Thanks for your interest. Registration for IELTS Application will open shortly. Stay tuned!
            </p>
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
