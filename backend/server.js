const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


// Connect to MongoDB
connectDB();

// Routes
const propertyRoutes = require('./routes/propertyRoutes');

app.use('/api/properties', propertyRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Real Estate API is running');
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
