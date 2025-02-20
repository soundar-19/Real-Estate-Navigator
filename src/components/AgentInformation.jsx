import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

const AgentInformation = ({ formData, handleChange }) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-gray-900">Agent Information</h2>
                <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <User className="w-4 h-4 mr-2" />
                        Agent Name
                    </label>
                    <input
                        type="text"
                        name="agentName"
                        value={formData.agentName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Agent's name"
                    />
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Phone className="w-4 h-4 mr-2" />
                        Agent Phone
                    </label>
                    <input
                        type="text"
                        name="agentPhone"
                        value={formData.agentPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Agent's phone number"
                    />
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Mail className="w-4 h-4 mr-2" />
                        Agent Email
                    </label>
                    <input
                        type="email"
                        name="agentEmail"
                        value={formData.agentEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Agent's email address"
                    />
                </div>
            </div>
        </div>
    );
};

export default AgentInformation;
