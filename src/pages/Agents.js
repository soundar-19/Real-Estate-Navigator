import React from 'react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';


const Agents = () => {
    const agents = [
        {
            id: 1,
            name: 'Raj',
            phone: '+91 234567890',
            email: 'Raj@example.com',
            image: '/images/pic-1.png',
            specialty: 'Luxury Homes',
            deals: 127,
            rating: 4.9
        },
        {
            id: 2,
            name: 'Raji',
            phone: '+91 234567891',
            email: 'Raji@example.com',
            image: '/images/pic-2.png',
            specialty: 'Commercial',
            deals: 89,
            rating: 4.8
        },
        {
            id: 3,
            name: 'Soundar',
            phone: '+1 234 567 892',
            email: 'Soundar@example.com',
            image: '/images/pic-3.png',
            specialty: 'First-time Buyers',
            deals: 156,
            rating: 4.7
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                        Meet Our Dream Team
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Our expert agents are here to guide you through your real estate journey with personalized care and deep market insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agents.map(agent => (
                        <div key={agent.id} className="group relative">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="relative">
                                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                    <img 
                                        src={agent.image} 
                                        alt={agent.name} 
                                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white object-cover"
                                    />
                                </div>

                                <div className="pt-20 p-6 text-center">
                                    <h3 className="text-2xl font-bold mb-1">{agent.name}</h3>
                                    <p className="text-purple-600 font-medium mb-4">{agent.specialty}</p>
                                    
                                    <div className="flex justify-center space-x-4 mb-6">
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-gray-800">{agent.deals}</p>
                                            <p className="text-sm text-gray-500">Deals</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-gray-800">{agent.rating}</p>
                                            <p className="text-sm text-gray-500">Rating</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-3">
                                        <a href={`mailto:${agent.email}`} className="flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                                            <Mail size={18} />
                                            <span>{agent.email}</span>
                                        </a>
                                        <a href={`tel:${agent.phone}`} className="flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                                            <Phone size={18} />
                                            <span>{agent.phone}</span>
                                        </a>
                                    </div>

                                    <div className="flex justify-center space-x-4 mt-6">
                                        <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                                            <Instagram size={20} />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                                            <Linkedin size={20} />

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agents;
