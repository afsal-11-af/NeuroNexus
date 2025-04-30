// import React from 'react';
// import JobForm from './components/JobForm';
// import JobList from './components/JobList';

// function App() {
//   // Replace with your real JWT from login or manually paste from Postman testing
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTIyNjMxODYxYTU3N2E0MDRjNDM0YiIsImlhdCI6MTc0NjAyMDA0NSwiZXhwIjoxNzQ2NjI0ODQ1fQ.ap8O5E_kkYUFNqdBNOWghk-IpFLJ_Kn0skNS1XQkrgQ";

//   return (
//     <div className="App">
//       <h1>Job Board</h1>
//       <JobForm token={token} />
//       <hr />
//       <JobList />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import JobCard from './components/JobCard';
import ApplyForm from './components/ApplyForm';

function App() {
  const [jobs, setJobs] = useState([]);
  const [applyingTo, setApplyingTo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then((res) => res.json())
      .then(setJobs);
  }, []);

  return (
    <div className="App">
      <h1>Available Jobs</h1>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} onApply={(j) => setApplyingTo(j)} />
      ))}

      {applyingTo && (
        <ApplyForm job={applyingTo} onClose={() => setApplyingTo(null)} />
      )}
    </div>
  );
}

export default App;
