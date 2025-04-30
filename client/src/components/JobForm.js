import React, { useState } from 'react';

const JobForm = ({ token }) => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    company: '',
    location: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify(job)
      });

      const data = await res.json();
      alert('Job posted successfully!');
      console.log(data);
    } catch (err) {
      console.error('Error posting job:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a Job</h2>
      <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
      <input type="text" name="company" placeholder="Company Name" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
      <textarea name="description" placeholder="Job Description" onChange={handleChange} required />
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobForm;
