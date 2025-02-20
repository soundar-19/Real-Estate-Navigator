import React from 'react';
import { Home, IndianRupee, Clock } from 'lucide-react';

const BasicInformation = ({ formData, handleChange }) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-gray-900">Basic Information</h2>
                <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Home className="w-4 h-4 mr-2" />
                        Property Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Luxury Villa with Ocean View"
                    />
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Home className="w-4 h-4 mr-2" />
                        Property Type
                    </label>
                    <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">Select Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <IndianRupee className="w-4 h-4 mr-2" />
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Property price"
                    />
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <IndianRupee className="w-4 h-4 mr-2" />
                        Price per sq ft
                    </label>
                    <input
                        type="number"
                        name="pricePerSqft"
                        value={formData.pricePerSqft}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Price per square foot"
                    />
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Clock className="w-4 h-4 mr-2" />
                        Year Built
                    </label>
                    <input
                        type="number"
                        name="yearBuilt"
                        value={formData.yearBuilt}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., 2020"
                    />
                </div>
            </div>
        </div>
    );
};

export default BasicInformation;
