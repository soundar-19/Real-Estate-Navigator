import React, { useState } from 'react';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import PropertyModal from '../components/PropertyModal';

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');

  const allProperties = [
    { 
      id: 1, 
      title: 'Luxury Villa in Chennai', 
      price: '₹8,00,00,000', 
      type: 'houses',
      image: '/images/img-1.jpg',
      beds: 4,
      baths: 3,
      sqft: '3,500',
      location: 'Adyar, Chennai',
      yearBuilt: 2020
    },
    { 
      id: 2, 
      title: 'Modern Apartment in Coimbatore', 
      price: '₹5,50,00,000', 
      type: 'apartments',
      image: '/images/img-2.jpg',
      beds: 2,
      baths: 2,
      sqft: '1,200',
      location: 'RS Puram, Coimbatore',
      yearBuilt: 2018
    },
    { 
      id: 3, 
      title: 'Cozy Cottage in Ooty', 
      price: '₹3,00,00,000', 
      type: 'houses',
      image: '/images/img-3.jpg',
      beds: 3,
      baths: 2,
      sqft: '1,800',
      location: 'Ooty Hills',
      yearBuilt: 2015
    }
  ];

  const properties = type ? allProperties.filter(property => property.type === type) : allProperties;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Properties</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <button
              key={property.id}
              onClick={() => setSelectedProperty(property)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedProperty(property);
                }
              }}
              className="w-full text-left bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
              aria-label={`View details of ${property.title}`}
            >
              <div className="relative">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full">
                  <span className="font-semibold text-blue-600">{property.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{property.title}</h3>
                <div className="flex gap-4 text-gray-600">
                  <div className="flex items-center">
                    <BedDouble className="w-4 h-4 mr-2" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-2" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-2" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedProperty && (
          <PropertyModal 
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Properties;
