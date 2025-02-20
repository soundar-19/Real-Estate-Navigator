import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home as HomeIcon, IndianRupee } from 'lucide-react';
import Slider from '../ui/Slider';
import { Select, SelectItem } from '../ui/Select';
import { fetchLocations } from '../../lib/api';

const HeroSection = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [propertyType, setPropertyType] = useState('');
  const [locations, setLocations] = useState([]);
  const [loadingLocations, setLoadingLocations] = useState(true);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setLoadingLocations(false);
      }
    };
    
    getLocations();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'IND',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Discover Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Explore our curated collection of premium properties across the globe
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location
                </label>
                <Select
                  value={location}
                  onValueChange={setLocation}
                >
                  <SelectItem value="">All Locations</SelectItem>
                  {locations.map(loc => (
                    <SelectItem 
                      key={loc} 
                      value={loc.toLowerCase()}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      {loc}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <HomeIcon className="w4 h-4 mr-2" />
                  Property Type
                </label>
                <Select
                  value={propertyType}
                  onValueChange={setPropertyType}
                >
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </Select>
              </div>

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

              <div className="flex items-end">
                <button 
                  onClick={() => onSearch({ location, priceRange, propertyType })}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>

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
  );
};

export default HeroSection;
