import React from 'react';
import { useParams } from 'react-router-dom';


const PropertyDetails = () => {
    const { id } = useParams();
    
    // Sample property data (in a real application, this would come from an API)
    const property = {
        id: id,
        title: 'Luxury Villa in California',
        description: 'A beautiful luxury villa located in California with stunning views.',
        price: '$1,200,000',
        features: ['4 Bedrooms', '3 Bathrooms', 'Swimming Pool', 'Garden'],
        contact: {
            phone: '+1 234 567 890',
            email: 'contact@example.com',
        },
        location: '123 California St, Los Angeles, CA',
        ratings: 4.5,
        reviews: [
            { user: 'Alice', comment: 'Amazing place!', rating: 5 },
            { user: 'Bob', comment: 'Loved the view!', rating: 4 },
        ],
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <p className="text-lg text-blue-600 mb-4">{property.price}</p>
            <p className="mb-4">{property.description}</p>
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside">
                {property.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>Phone: {property.contact.phone}</p>
            <p>Email: {property.contact.email}</p>
            <h2 className="text-2xl font-semibold mb-2">Location</h2>
            <p>{property.location}</p>
            {/* Map integration can be added here */}
            <h2 className="text-2xl font-semibold mb-2">Ratings</h2>
            <p>Average Rating: {property.ratings} / 5</p>
            <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
            <ul>
                {property.reviews.map((review, index) => (
                    <li key={index}>
                        <strong>{review.user}</strong>: {review.comment} (Rating: {review.rating})
                    </li>
                ))}
            </ul>

        </div>
    );
};


export default PropertyDetails;
