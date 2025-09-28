import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNav = (id) => {
    setNavOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-30 bg-transparent transition-opacity duration-700 ease-out
        ${animate ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 sm:py-4">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNav("top")}
        >
          <img
            src={logo}
            alt="IELTS Logo"
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 mr-2 sm:mr-3"
          />
          <span className="text-lg sm:text-xl md:text-2xl text-white font-bold tracking-wide leading-tight">
            IELTS Application
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-9 text-white font-medium text-base lg:text-lg">
          <button
            onClick={() => handleNav("features")}
            className="transition hover:text-blue-500 cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => handleNav("footer")}
            className="transition hover:text-blue-500 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="flex md:hidden relative">
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Navigation"
            className="outline-none focus:outline-none relative w-8 h-8"
          >
            <span
              className={`absolute block h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out top-2 left-1 ${
                navOpen ? "rotate-45 translate-y-2 translate-x-1" : ""
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-white rounded transition-opacity duration-300 ease-in-out top-4 left-1 ${
                navOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out top-6 left-1 ${
                navOpen ? "-rotate-45 -translate-y-2 translate-x-1" : ""
              }`}
            />
          </button>

          {/* Right-aligned Dropdown */}
          {navOpen && (
            <div className="absolute top-12 right-0 bg-white/40 backdrop-blur-xl rounded-xl shadow-2xl p-3 w-40 flex flex-col gap-2 z-50">
              <button
                className="py-2 px-4 rounded text-base font-medium text-[#181f3b] hover:bg-white hover:bg-opacity-30 transition text-left"
                onClick={() => handleNav("features")}
              >
                Features
              </button>
              <button
                className="py-2 px-4 rounded text-base font-medium text-[#181f3b] hover:bg-white hover:bg-opacity-30 transition text-left"
                onClick={() => handleNav("footer")}
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
