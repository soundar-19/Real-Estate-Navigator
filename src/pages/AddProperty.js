import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

const AddProperty = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        features: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Property added:', formData);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Add Property</h1>
            <Card>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Title"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Price"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Description"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        as="textarea"
                    />
                    <Input
                        label="Features (comma separated)"
                        id="features"
                        name="features"
                        value={formData.features}
                        onChange={handleChange}
                    />
                    <Button type="submit">Add Property</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddProperty;
