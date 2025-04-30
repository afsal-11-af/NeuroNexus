const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes (authentication required)
router.post('/jobs', authMiddleware, createJob);
router.get('/jobs', getJobs);

module.exports = router;
