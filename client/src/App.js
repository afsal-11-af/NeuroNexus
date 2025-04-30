import React from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  // Replace with your real JWT from login or manually paste from Postman testing
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTIyNjMxODYxYTU3N2E0MDRjNDM0YiIsImlhdCI6MTc0NjAyMDA0NSwiZXhwIjoxNzQ2NjI0ODQ1fQ.ap8O5E_kkYUFNqdBNOWghk-IpFLJ_Kn0skNS1XQkrgQ";

  return (
    <div className="App">
      <h1>Job Board</h1>
      <JobForm token={token} />
      <hr />
      <JobList />
    </div>
  );
}

export default App;
