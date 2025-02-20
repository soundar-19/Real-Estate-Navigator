import React from 'react';

const Home = () => {
  const featuredProperties = [
    { 
      id: 1, 
      title: 'Luxury Villa in California', 
      price: '$1,200,000',
      image: '/images/img-1.jpg', // Updated image path
      beds: 4,
      baths: 3,
      sqft: '3,500'
    },
    { 
      id: 2, 
      title: 'Modern Apartment in New York', 
      price: '$850,000',
      image: '/images/img-2.jpg', // Updated image path
      beds: 2,
      baths: 2,
      sqft: '1,200'
    },
    { 
      id: 3, 
      title: 'Cozy Cottage in the Woods', 
      price: '$450,000',
      image: '/images/img-3.jpg', 
      beds: 3,
      baths: 2,
      sqft: '1,800'
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the perfect home from our curated selection of premium properties
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Properties
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              List Your Property
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-2xl text-blue-600 font-semibold mb-4">{property.price}</p>
                <div className="flex justify-between text-gray-600">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50 -mx-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trusted Platform',
                description: 'Over 10 years of experience in real estate market'
              },
              {
                title: 'Premium Properties',
                description: 'Carefully curated selection of high-quality properties'
              },
              {
                title: 'Expert Support',
                description: '24/7 support from our experienced real estate agents'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
