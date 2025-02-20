import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import PropertyModal from '../components/PropertyModal';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await api.get('/properties', {
                    params: { type }
                });
                setProperties(response.data);
            } catch (err) {
                setError(err.response?.data?.error || 'Failed to fetch properties');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProperties();
    }, [type]);

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen">Loading properties...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-8">{error}</div>;
    }

    const filteredProperties = type ? properties.filter(property => property.propertyType === type) : properties;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Available Properties</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                    <div 
                        key={property._id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedProperty(property)}
                    >
                        {property.images && property.images.length > 0 && (
                            <img 
                                src={`http://localhost:5000/${property.images[0]}`}
                                alt={property.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-6">

                            <h2 className="text-xl font-semibold mb-2 truncate">{property.title}</h2>

                            <p className="text-gray-600 mb-4 flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                {property.location}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold">₹{property.price.toLocaleString()}</span>
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <span className="flex items-center">
                                        <BedDouble className="w-4 h-4 mr-1" />
                                        {property.bedrooms}
                                    </span>
                                    <span className="flex items-center">
                                        <Bath className="w-4 h-4 mr-1" />
                                        {property.bathrooms}
                                    </span>
                                    <span className="flex items-center">
                                        <Square className="w-4 h-4 mr-1" />
                                        {property.area} sqft
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProperty && (
                <PropertyModal 
                    property={selectedProperty}
                    onClose={() => setSelectedProperty(null)}
                />
            )}
        </div>
    );
};

export default Properties;
