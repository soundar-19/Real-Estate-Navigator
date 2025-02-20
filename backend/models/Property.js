const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({


  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    enum: ['Apartment', 'House', 'Villa', 'Commercial'],
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  area: {
    type: Number,
    required: true
  },
  images: [{
    type: String
  }],
  amenities: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }

});

// Static method for searching properties
propertySchema.statics.search = async function(query, filters = {}) {
  const searchQuery = {
    $text: { $search: query }
  };
  
  // Combine search with additional filters
  const finalQuery = Object.assign({}, searchQuery, filters);
  
  return this.find(finalQuery)
    .sort({ score: { $meta: 'textScore' } })
    .limit(20);
};

// Create text indexes for search functionality
propertySchema.index({ title: 'text', description: 'text', location: 'text' });

module.exports = mongoose.model('Property', propertySchema);
