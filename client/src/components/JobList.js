import React, { useEffect, useState } from 'react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('http://localhost:5000/api/jobs');
      const data = await res.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
