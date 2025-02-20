import React from 'react';

const Favorites = () => {
    const favoriteProperties = [
        { id: 1, title: 'Luxury Villa in California', price: '$1,200,000' },
        { id: 2, title: 'Modern Apartment in New York', price: '$850,000' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Favorite Properties</h1>
            {favoriteProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {favoriteProperties.map(property => (
                        <div key={property.id} className="border rounded-lg p-4">
                            <h3 className="font-bold">{property.title}</h3>
                            <p className="text-lg text-blue-600">{property.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorite properties added yet.</p>
            )}
        </div>
    );
};


export default Favorites;
