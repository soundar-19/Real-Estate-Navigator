import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home as HomeIcon } from 'lucide-react';

const FeaturedProperties = () => {
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
  );
};

export default FeaturedProperties;
