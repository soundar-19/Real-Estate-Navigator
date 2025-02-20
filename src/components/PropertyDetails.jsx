import React from 'react';
import { BedDouble, Bath, Maximize, MapPin, FileText } from 'lucide-react';

const PropertyDetails = ({ formData, handleChange }) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-gray-900">Property Details</h2>
                <div className="ml-4 h-px bg-gray-200 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <BedDouble className="w-4 h-4 mr-2" />
                        Bedrooms
                    </label>
                    <input
                        type="number"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Number of bedrooms"
                    />
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Bath className="w-4 h-4 mr-2" />
                        Bathrooms
                    </label>
                    <input
                        type="number"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Number of bathrooms"
                    />
                </div>
                <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        <Maximize className="w-4 h-4 mr-2" />
                        Area (sq ft)
                    </label>
                    <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Total area in square feet"
                    />
                </div>
            </div>
            <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    Location
                </label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full property address"
                />
            </div>
            <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Description
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Provide a detailed description of your property..."
                />
            </div>
        </div>
    );
};

export default PropertyDetails;
