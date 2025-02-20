import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PropertyDetails = () => {
    const [searchParams] = useSearchParams();
    const propertyType = searchParams.get('type');

    // Sample property types data
    const propertyTypes = {
        houses: {
            title: 'Houses',
            description: 'Explore our wide selection of houses',
            count: '12,345',
            icon: '🏠'
        },
        apartments: {
            title: 'Apartments',
            description: 'Find your perfect apartment',
            count: '8,765',
            icon: '🏢'
        },
        commercial: {
            title: 'Commercial',
            description: 'Discover commercial properties',
            count: '3,456',
            icon: '🏭'
        },
        'vacation-homes': {
            title: 'Vacation Homes',
            description: 'Find your dream vacation home',
            count: '2,345',
            icon: '🏖️'
        }
    };

    const property = propertyTypes[propertyType] || {
        title: 'Unknown Property Type',
        description: 'Please select a valid property type',
        count: '0',
        icon: '❓'
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">{property.icon} {property.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{property.description}</p>
                <div className="bg-blue-50 p-6 rounded-lg inline-block">
                    <p className="text-xl font-semibold text-blue-700">
                        {property.count} Listings Available
                    </p>
                </div>
            </div>
        </div>
    );

};

export default PropertyDetails;
