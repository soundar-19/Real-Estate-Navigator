const express = require('express');
const multer = require('multer');
const path = require('path');
const Property = require('../models/Property');
const Location = require('../models/Location');
const router = express.Router();

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Ensure uploads directory exists
const fs = require('fs');
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Initialize upload
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG and PNG images are allowed'), false);
    }
  }
});

// Create a new property
router.post('/', upload.array('images', 5), async (req, res) => {
  try {
    console.log('Received POST request to /api/properties');
    console.log('Request body:', req.body);
    console.log('Uploaded files:', req.files);
    
    const propertyData = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      features: req.body.features,
      location: req.body.location,
      propertyType: req.body.propertyType,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      area: req.body.area
    };
    
    // Validate images
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'At least one image is required' });
    }

    propertyData.images = req.files.map(file => file.path);

    // Validate required fields
    const requiredFields = [
      'title', 'price', 'description', 'location', 
      'propertyType', 'bedrooms', 'bathrooms', 'area'
    ];
    
    const missingFields = requiredFields.filter(field => !propertyData[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        missingFields,
        message: `Please provide: ${missingFields.join(', ')}`
      });
    }

    // Validate property type
    const validPropertyTypes = ['Apartment', 'House', 'Villa', 'Commercial'];
    if (!validPropertyTypes.includes(propertyData.propertyType)) {
      return res.status(400).json({ 
        error: 'Invalid property type',
        validTypes: validPropertyTypes
      });
    }

    // Validate numeric fields
    const numericFields = ['price', 'bedrooms', 'bathrooms', 'area'];
    const numericErrors = numericFields.filter(field => {
      const value = propertyData[field];
      return isNaN(Number(value)) || value < 0;
    });
    
    if (numericErrors.length > 0) {
      return res.status(400).json({
        error: 'Invalid numeric values',
        invalidFields: numericErrors,
        message: `Please provide valid numbers for: ${numericErrors.join(', ')}`
      });
    }

    const property = new Property(propertyData);
    await property.save();
    console.log('Property saved successfully:', property);

    // Add location to unique locations if it doesn't exist
    try {
      const locationExists = await Location.findOne({ name: propertyData.location });
      if (!locationExists) {
        const newLocation = new Location({ name: propertyData.location });
        await newLocation.save();
        console.log(`New location added: ${propertyData.location}`);
      }
    } catch (error) {
      console.error('Error saving location:', error);
      // Continue with property creation even if location save fails
    }

    res.status(201).json(property);

  } catch (error) {
    console.error('Error in property creation:', error);
    res.status(400).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all unique locations
router.get('/locations', async (req, res) => {
  try {
    console.log('Fetching locations...');
    const locations = await Location.find().sort({ name: 1 });
    console.log('Locations found:', locations);
    res.json(locations.map(loc => loc.name));
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});


// Add new location
router.post('/locations', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Location name is required' });
    }
    
    const location = new Location({ name });
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single property
router.get('/:id', async (req, res) => {

  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search properties
router.get('/search', async (req, res) => {
  try {
    const { q, propertyType, minPrice, maxPrice, bedrooms, bathrooms, location } = req.query;
    
    const filters = {};
    if (propertyType) filters.propertyType = propertyType;
    if (location) filters.location = location;

    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.$gte = Number(minPrice);
      if (maxPrice) filters.price.$lte = Number(maxPrice);
    }
    if (bedrooms) filters.bedrooms = Number(bedrooms);
    if (bathrooms) filters.bathrooms = Number(bathrooms);
    
    const properties = await Property.search(q || '', filters);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Update a property
router.put('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a property
router.delete('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
