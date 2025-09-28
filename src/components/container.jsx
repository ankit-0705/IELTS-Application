import React from 'react';
import HeroSection from './hero';
import Features from './features';
import Testimonials from './testimonials';
import Sections from './section';
import FooterSection from './footer';

const Container = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f7f9]">
      <HeroSection />
      {/* Features: float up w/ negative margin on desktop */}
      <div className="flex justify-center relative md:-mt-14 lg:-mt-24 z-20">
        <Features />
      </div>
      {/* Main Content */}
      <Testimonials />
      <Sections />
      <FooterSection />
    </div>
  );
};

export default Container;
