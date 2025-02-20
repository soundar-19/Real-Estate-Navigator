import React from 'react';
import { Home as HomeIcon, MapPin, Phone } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
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
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
