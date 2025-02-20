import React from 'react';

const Agents = () => {
    const agents = [
        { id: 1, name: 'John Doe', phone: '+1 234 567 890', email: 'john@example.com', image: '/images/pic-1.png' },
        { id: 2, name: 'Jane Smith', phone: '+1 234 567 891', email: 'jane@example.com', image: '/images/pic-2.png' },
        { id: 3, name: 'Alice Johnson', phone: '+1 234 567 892', email: 'alice@example.com', image: '/images/pic-3.png' },
    ];



    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Our Agents</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {agents.map(agent => (
                    <div key={agent.id} className="border rounded-lg p-4">
                        <img src={agent.image} alt={agent.name} className="w-full h-32 object-cover rounded mb-2" />
                        <img src={agent.image} alt={agent.name} className="w-24 h-24 object-cover rounded-full mb-2" />
                        <h3 className="font-bold">{agent.name}</h3>


                        <p className="text-gray-600">Phone: {agent.phone}</p>
                        <p className="text-gray-600">Email: {agent.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Agents;
