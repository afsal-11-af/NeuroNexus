const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());  // Only need this once
app.use(express.json()); // Parse incoming JSON requests

// Routes
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');

// API routes
app.use('/api', authRoutes);
app.use('/api', jobRoutes);  // Ensure this line is placed after `authRoutes`

// Connect to MongoDB using the MONGO_URI from your .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
  const Application = require('./models/Application');

app.post('/api/apply', async (req, res) => {
  try {
    const newApp = new Application(req.body);
    await newApp.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to apply' });
  }
});

