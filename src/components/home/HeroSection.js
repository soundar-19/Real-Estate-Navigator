import React from 'react';
import { motion } from 'framer-motion';
import AdvancedSearch from '../common/AdvancedSearch';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none'; // Hide video if it fails to load
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        <img src="/images/hero-bg-fallback.jpg" alt="Fallback" className="absolute inset-0 w-full h-full object-cover" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Search from over 100,000 properties across prime locations
          </p>
          <AdvancedSearch className="max-w-4xl mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
