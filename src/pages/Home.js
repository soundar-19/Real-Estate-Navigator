import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Search, Home as HomeIcon, MapPin, Phone, IndianRupee } from 'lucide-react';

import Slider from '../components/ui/Slider';
import { Select, SelectContent, SelectItem } from '../components/ui/Select.jsx';


const Home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [propertyType, setPropertyType] = useState('');

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'IND',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSearch = () => {
    console.log('Searching with:', { location, priceRange, propertyType });
    navigate('/properties/2');
  };


  const featuredProperties = [
    { 
      id: 1, 
      title: 'Luxury Villa in Chennai', 
      price: 'Rs.1,200,000',
      image: '/images/img-1.jpg',
      beds: 4,
      baths: 3,
      sqft: '3,500',
      location: 'Adyar, Chennai'
    },
    { 
      id: 2, 
      title: 'Modern Apartment in Coimbatore', 
      price: 'Rs.850,000',
      image: '/images/img-2.jpg',
      beds: 2,
      baths: 2,
      sqft: '1,200',
      location: 'RS Puram, Coimbatore'
    },
    { 
      id: 3, 
      title: 'Cozy Cottage in Ooty', 
      price: 'Rs.450,000',
      image: '/images/img-3.jpg',
      beds: 3,
      baths: 2,
      sqft: '1,800',
      location: 'Ooty Hills'
    },

  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Explore our curated collection of premium properties across the globe
          </p>
          
          {/* Search Container */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Location Select */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Location
                  </label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectContent>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="coimbatore">Coimbatore</SelectItem>
                      <SelectItem value="madurai">Madurai</SelectItem>
                      <SelectItem value="trichy">Trichy</SelectItem>
                      <SelectItem value="salem">Salem</SelectItem>

                    </SelectContent>
                  </Select>
                </div>

                {/* Property Type Select */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <HomeIcon className="w4 h-4 mr-2" />
                    Property Type
                  </label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <IndianRupee className="w-4 h-4 mr-2" />

                    Price Range
                  </label>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onChange={setPriceRange}
                      min={0}
                      max={2000000}
                      step={50000}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button 
                    onClick={handleSearch}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm">
                  Popular
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm">

                  Recently Added
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm">
                  Price: Low to High
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm">
                  Price: High to Low
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4 text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{property.title}</h3>
                  <div className="flex justify-between mb-4 text-gray-600">
                    <span className="flex items-center"><HomeIcon size={18} className="mr-2" />{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                    <Link to="/property-types" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Property Types
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
          <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <HomeIcon size={48} className="text-blue-600" />,
                title: 'Premium Properties',
                description: 'Access to exclusive listings and luxury properties worldwide'
              },
              {
                icon: <MapPin size={48} className="text-blue-600" />,
                title: 'Prime Locations',
                description: 'Properties in the most sought-after neighborhoods and areas'
              },
              {
                icon: <Phone size={48} className="text-blue-600" />,
                title: '24/7 Support',
                description: 'Round-the-clock assistance from our dedicated team of experts'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
