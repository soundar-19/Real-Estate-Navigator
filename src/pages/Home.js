import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = ({ location, priceRange, propertyType }) => {
    if (!location || !propertyType) {
      alert('Please select both location and property type.');
      return;
    }
    navigate(`/properties?location=${location}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&type=${propertyType}`);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onSearch={handleSearch} />
      <FeaturedProperties />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
