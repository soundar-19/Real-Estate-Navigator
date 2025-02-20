import React, { useState } from 'react';
import { Home, IndianRupee, FileText, Tags, MapPin, BedDouble, Bath, Maximize, Upload } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});


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
        images: []
    });

    const [dragActive, setDragActive] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'images') {
                    formData.images.forEach((file, index) => {
                        formDataToSend.append('images', file);
                    });
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            });

            const response = await api.post('/properties', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            
            if (response.status === 201) {
                navigate('/properties');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to add property');
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

                        {/* Basic Information */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-900">Basic Information</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                                <div>
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
                                        placeholder="e.g., Modern Downtown Apartment"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                        <IndianRupee className="w-4 h-4 mr-2" />
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., ₹45,00,000"
                                    />
                                </div>

                                <div className="md:col-span-2">
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
                                        placeholder="e.g., 123 Gandhi Road, Chennai, Tamil Nadu"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Property Details */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-900">Property Details</h2>
                            
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
                                        placeholder="e.g., 3"
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
                                        placeholder="e.g., 2"
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
                                        placeholder="e.g., 1500"
                                    />
                                </div>
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
                                    placeholder="Describe your property..."
                                />
                            </div>

                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                                    <Tags className="w-4 h-4 mr-2" />
                                    Features
                                </label>
                                <input
                                    type="text"
                                    name="features"
                                    value={formData.features}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., Pool, Garden, Garage (comma separated)"
                                />
                            </div>
                        </div>

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
                                            onChange={(e) => {
                                                const files = Array.from(e.target.files);
                                                setFormData(prev => ({
                                                    ...prev,
                                                    images: [...prev.images, ...files]
                                                }));
                                            }}
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
