import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { 
  MapPin, 
  Phone, 
  Calendar, 
  BedDouble, 
  Bath, 
  Square, 
  Heart,
  Share2,
  Car,
  Wifi,
  Trees,
  Waves,
  ChefHat,
  ShowerHead,
  Clock,
  X
} from 'lucide-react';

const PropertyModal = ({ property, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  // Sample property images
  const images = [
    '/images/img-1.jpg',
    '/images/img-2.jpg',
    '/images/img-3.jpg',
    '/images/img-4.jpg'
  ];



  // Sample amenities
  const amenities = [
    { icon: <Car className="w-5 h-5" />, label: 'Parking' },
    { icon: <Wifi className="w-5 h-5" />, label: 'Free WiFi' },
    { icon: <Trees className="w-5 h-5" />, label: 'Garden' },
    { icon: <Waves className="w-5 h-5" />, label: 'Swimming Pool' },


    { icon: <ChefHat className="w-5 h-5" />, label: 'Modern Kitchen' },
    { icon: <ShowerHead className="w-5 h-5" />, label: 'Hot Water' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <button
        className="fixed inset-0 bg-black/70 backdrop-blur-sm w-full h-full"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        aria-label="Close modal"
      />



      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left side - Images */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img 
                  src={images[selectedImage]}
                  alt="Property view"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                <button 
                  className="bg-white p-2 rounded-lg shadow hover:bg-gray-100"
                  aria-label="Add to favorites"
                >
                  <Heart className="w-5 h-5 text-red-500" />
                </button>
                <button 
                  className="bg-white p-2 rounded-lg shadow hover:bg-gray-100"
                  aria-label="Share property"
                >
                  <Share2 className="w-5 h-5 text-blue-500" />
                </button>

                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={img} // Using image URL as unique key
                    onClick={() => setSelectedImage(idx)}
                    className={`relative rounded-lg overflow-hidden h-20 
                      ${selectedImage === idx ? 'ring-2 ring-blue-500' : 'opacity-70'}`}
                    aria-label={`Select image ${idx + 1}`}
                    aria-pressed={selectedImage === idx}
                  >


                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />

                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Luxury Villa with Ocean View</h2>
                <div className="flex items-center mt-2 text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>123 Rs Puram, Coimbatore, TN 641022</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div className="text-center">
                  <BedDouble className="w-6 h-6 mx-auto text-blue-600" />
                  <span className="block mt-1 font-medium">4 Beds</span>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 mx-auto text-blue-600" />
                  <span className="block mt-1 font-medium">3 Baths</span>
                </div>
                <div className="text-center">
                  <Square className="w-6 h-6 mx-auto text-blue-600" />
                  <span className="block mt-1 font-medium">3,500 sqft</span>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 mx-auto text-blue-600" />
                  <span className="block mt-1 font-medium">Built 2020</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Price</h3>
                <div className="text-3xl font-bold text-blue-600">Rs.2,500,000</div>
                <div className="text-sm text-gray-600 mt-1">Rs.714 per sqft</div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stunning contemporary villa offering panoramic ocean views, featuring high-end finishes, 
                  an infinity pool, and smart home technology. The open-concept living space seamlessly 
                  connects to outdoor entertainment areas. Perfect for luxury living and entertaining.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity.label} className="flex items-center space-x-2 text-gray-700">

                      {amenity.icon}
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 
                    transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Agent</span>
                </button>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg 
                  hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Viewing</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form Modal */}
          {showContactForm && (
            <div className="absolute inset-0 bg-white/95 rounded-2xl p-6">
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="max-w-md mx-auto pt-8">
                <h3 className="text-2xl font-bold text-center mb-6">Contact Agent</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input id="name" type="text" className="w-full p-3 border rounded-lg" />

                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input id="email" type="email" className="w-full p-3 border rounded-lg" />

                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                    <input id="phone" type="tel" className="w-full p-3 border rounded-lg" />

                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea id="message" className="w-full p-3 border rounded-lg" rows="4"></textarea>

                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg 
                    hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PropertyModal.propTypes = {
  property: PropTypes.shape({
    // Define property shape here
  }),
  onClose: PropTypes.func.isRequired
};

export default PropertyModal;
