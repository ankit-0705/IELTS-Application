import React, { useState, useEffect } from 'react';
import HeroSection from './hero';
import Features from './features';
import Testimonials from './testimonials';
import Sections from './section';
import FooterSection from './footer';

const Container = () => {
  // Trigger animation 100ms after mount for staggered effect possible
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen w-full bg-[#f5f7f9]
      transition-opacity duration-700 ease-out
      ${animate ? 'opacity-100' : 'opacity-0'}`}
    >
      <HeroSection />
      <div className="flex justify-center relative md:-mt-14 lg:-mt-24 z-20">
        <Features />
      </div>
      <Testimonials />
      <Sections />
      <FooterSection />
    </div>
  );
};

export default Container;
