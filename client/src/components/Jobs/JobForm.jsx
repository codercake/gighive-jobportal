import React, { useState } from 'react';
import { applyForJob } from '../../services/jobService'; 
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const JobFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f2e6ff;
  color: #333;
  border-radius: 8px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #e6ccff;
`;

const ColorfulFileInput = styled.input`
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background: linear-gradient(135deg, #6a5acd, #836fff);
  color: white;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 15px 25px;
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #836fff;
  }
`;

const JobForm = () => {
  const { state } = useLocation();
  const job = state?.job;  // Get job data passed from JobDetail

  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    resume: null,
    qualification: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  const handleFileChange = (e) => {
    setApplicationData({ ...applicationData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (applicationData.resume && applicationData.resume.type !== "application/pdf") {
      alert('Please upload your resume in PDF format only.');
      return;
    }

    const formData = new FormData();
    formData.append('name', applicationData.name);
    formData.append('email', applicationData.email);
    formData.append('resume', applicationData.resume);
    formData.append('qualification', applicationData.qualification);

    await applyForJob(formData);  
    alert('Application submitted successfully!');
  };

  return (
    <JobFormContainer>
      <Title>Applying for {job ? job.company : 'this Job'}</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Your Name:</FormLabel>
          <FormInput
            type="text"
            name="name"
            placeholder="Your Name"
            value={applicationData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Your Email:</FormLabel>
          <FormInput
            type="email"
            name="email"
            placeholder="Your Email"
            value={applicationData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Highest Qualification:</FormLabel>
          <FormInput
            type="text"
            name="qualification"
            placeholder="Your Highest Qualification"
            value={applicationData.qualification}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Upload Resume (PDF only):</FormLabel>
          <ColorfulFileInput
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <SubmitButton type="submit">Submit Application</SubmitButton>
        </FormGroup>
      </Form>
    </JobFormContainer>
  );
};

export default JobForm;
