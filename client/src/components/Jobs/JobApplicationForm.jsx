import React, { useState } from 'react';
import { applyForJob } from '../../services/applicationService'; 
const JobApplicationForm = ({ jobId, companyName }) => {
  const [qualification, setQualification] = useState('');
  const [resume, setResume] = useState(null);

  const handleQualificationChange = (e) => setQualification(e.target.value);
  const handleFileChange = (e) => setResume(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!qualification || !resume) {
      return alert('Please fill in all fields and upload a resume.');
    }

    // Send the application data
    const formData = new FormData();
    formData.append('qualification', qualification);
    formData.append('resume', resume);
    formData.append('jobId', jobId);

    try {
      await applyForJob(formData);
      alert('Your application has been submitted successfully!');
    } catch (error) {
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Qualification:
        <input type="text" value={qualification} onChange={handleQualificationChange} required />
      </label>

      <label>
        Upload Resume (PDF):
        <input type="file" accept=".pdf" onChange={handleFileChange} required />
      </label>

      <button type="submit">Apply for Job at {companyName}</button>
    </form>
  );
};

export default JobApplicationForm;
