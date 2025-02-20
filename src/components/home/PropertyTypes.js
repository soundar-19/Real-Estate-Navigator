import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Warehouse, Hotel } from 'lucide-react';
import { Link } from 'react-router-dom';

const propertyTypes = [
  {
    icon: Home,
    title: 'Houses',
    count: '12,345',
    color: 'bg-blue-500',
  },
  {
    icon: Building,
    title: 'Apartments',
    count: '8,765',
    color: 'bg-green-500',
  },
  {
    icon: Warehouse,
    title: 'Commercial',
    count: '3,456',
    color: 'bg-purple-500',
  },
  {
    icon: Hotel,
    title: 'Vacation Homes',
    count: '2,345',
    color: 'bg-orange-500',
  },
];

const PropertyTypes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="text-center">Loading property types...</div>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Property Type
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of properties across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
                <Link
                to={`/property-details?type=${type.title.toLowerCase()}`}
                className="block group"
              >

                <div className={`bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105`}>
                  <div className={`${type.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {type.count} listings
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
