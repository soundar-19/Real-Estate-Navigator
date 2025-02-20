import React from 'react';
import { Car, Wifi, Trees, Waves, ChefHat } from 'lucide-react';

const Amenities = ({ formData, handleAmenityChange }) => {
    const amenityOptions = [
        { id: 'parking', label: 'Parking', icon: <Car className="w-4 h-4" /> },
        { id: 'wifi', label: 'WiFi', icon: <Wifi className="w-4 h-4" /> },
        { id: 'garden', label: 'Garden', icon: <Trees className="w-4 h-4" /> },
        { id: 'pool', label: 'Swimming Pool', icon: <Waves className="w-4 h-4" /> },
        { id: 'kitchen', label: 'Modern Kitchen', icon: <ChefHat className="w-4 h-4" /> }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-gray-900">Amenities</h2>
                <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {amenityOptions.map(amenity => (
                    <button
                        key={amenity.id}
                        type="button"
                        onClick={() => handleAmenityChange(amenity.id)}
                        className={`flex items-center p-3 rounded-lg border-2 transition-colors
                            ${formData.amenities.includes(amenity.id)
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-blue-200'
                            }`}
                    >
                        {amenity.icon}
                        <span className="ml-2">{amenity.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Amenities;
