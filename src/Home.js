import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('../components/home/HeroSection'));
const FeaturedProperties = lazy(() => import('../components/home/FeaturedProperties'));
const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'));
const PropertyTypes = lazy(() => import('../components/home/PropertyTypes'));
const TopLocations = lazy(() => import('../components/home/TopLocations'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const DownloadApp = lazy(() => import('../components/home/DownloadApp'));

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <PropertyTypes />
        <FeaturedProperties />
        <WhyChooseUs />
        <TopLocations />
        <Testimonials />
        <DownloadApp />
      </Suspense>
    </div>
  );
};

export default Home;
