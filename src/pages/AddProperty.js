import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicInformation from '../components/BasicInformation';
import PropertyDetails from '../components/PropertyDetails';
import Amenities from '../components/Amenities';
import AgentInformation from '../components/AgentInformation';
import { Upload } from 'lucide-react';
import { api } from '../lib/api';


const AddProperty = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        features: '',
        location: '',
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        amenities: [],
        agentName: '',
        agentPhone: '',
        agentEmail: '',
        images: []
    });

    const [dragActive, setDragActive] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAmenityChange = (amenityId) => {
        setFormData(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenityId)
                ? prev.amenities.filter(id => id !== amenityId)
                : [...prev.amenities, amenityId]
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({ ...prev, images: files }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Validate required fields
            const requiredFields = ['title', 'price', 'location', 'propertyType'];
            const missingFields = requiredFields.filter(field => !formData[field]);
            if (missingFields.length > 0) {
                throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
            }

            // Validate at least one image
            if (formData.images.length === 0) {
                throw new Error('At least one image is required');
            }

            const formDataToSend = new FormData();
            for (const [key, value] of Object.entries(formData)) {
                if (key === 'images') {
                    value.forEach(file => formDataToSend.append('images', file));
                } else {
                    formDataToSend.append(key, value);
                }
            }

            const response = await api.post('/properties', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });


            navigate('/properties');
        } catch (err) {
            console.error('Submission error:', err);
            setError(err.message || 'An error occurred while submitting the form');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        List Your Property
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Let's get your property in front of thousands of potential buyers. 
                        Fill in the details below to create an engaging listing.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                {error}
                            </div>
                        )}

                        <BasicInformation formData={formData} handleChange={handleChange} />
                        <PropertyDetails formData={formData} handleChange={handleChange} />
                        <Amenities formData={formData} handleAmenityChange={handleAmenityChange} />
                        <AgentInformation formData={formData} handleChange={handleChange} />

                        {/* Image Upload */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-900">Property Images</h2>
                            
                            <div 
                                className={`border-2 border-dashed rounded-lg p-8 text-center ${
                                    dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                                }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                            >
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600">
                                        Drag and drop your images here, or{' '}
                                        <input 
                                            type="file"
                                            id="fileInput"
                                            className="hidden"
                                            multiple
                                            onChange={handleFileChange}
                                        />
                                        <label 
                                            htmlFor="fileInput" 
                                            className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer"
                                        >
                                            browse
                                        </label>
                                    </p>
                                    {formData.images.length > 0 && (
                                        <div className="mt-4">
                                            <h3 className="text-sm font-medium mb-2">Selected Files:</h3>
                                            <div className="space-y-1">
                                                {formData.images.map((file, index) => (
                                                    <div key={index} className="text-sm text-gray-600">
                                                        {file.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Listing Property...' : 'List Property'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;
