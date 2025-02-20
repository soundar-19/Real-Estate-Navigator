import React from 'react';
import { Link } from 'react-router-dom';

const Properties = () => {
    const properties = [
        { id: 1, title: 'Luxury Villa in California', price: '$1,200,000' },
        { id: 2, title: 'Modern Apartment in New York', price: '$850,000' },
        { id: 3, title: 'Cozy Cottage in the Woods', price: '$450,000' },
        { id: 4, title: 'Beach House in Miami', price: '$2,000,000' },
        { id: 5, title: 'Penthouse in San Francisco', price: '$3,500,000' },
    ];


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Properties</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {properties.map(property => (
                    <div key={property.id} className="border rounded-lg p-4">
                        <h3 className="font-bold">
                            <Link to={`/property-details/${property.id}`}>{property.title}</Link>
                        </h3>
                        <p className="text-lg text-blue-600">{property.price}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};


export default Properties;
