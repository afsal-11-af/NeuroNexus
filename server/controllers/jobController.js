const Job = require('../models/Job');

// Create Job
const createJob = async (req, res) => {
  const { title, description, company, location } = req.body;

  try {
    const job = new Job({
      title,
      description,
      company,
      location,
      createdBy: req.user.id
    });

    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all Jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('createdBy', 'name email');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createJob, getJobs };
