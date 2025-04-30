import React from 'react';
import './JobCard.css'; // Add styling here

const JobCard = ({ job, onApply }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
      <button onClick={() => onApply(job)}>Apply Now</button>
    </div>
  );
};

export default JobCard;
