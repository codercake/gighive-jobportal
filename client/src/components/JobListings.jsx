const sectionStyle = {
  padding: '3rem',
  textAlign: 'center',
  backgroundColor: '#f4f4f4',
};

const jobContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
};

const jobCardStyle = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '250px',
};

const jobTitleStyle = {
  fontSize: '1.4rem',
  marginBottom: '0.5rem',
};

const jobTextStyle = {
  fontSize: '1rem',
  marginBottom: '0.5rem',
};

const applyBtnStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#61dafb',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const applyBtnHoverStyle = {
  backgroundColor: '#21a1f1',
};

function JobListings() {
  const jobs = [
    { title: "Frontend Developer", company: "Tech Co.", location: "Remote" },
    { title: "Backend Developer", company: "Innovate Ltd.", location: "New York" },
    { title: "Full Stack Engineer", company: "Code Solutions", location: "San Francisco" }
  ];

  return (
    <section style={sectionStyle} id="jobs">
      <h2>Job Listings</h2>
      <div style={jobContainerStyle}>
        {jobs.map((job, index) => (
          <div key={index} style={jobCardStyle}>
            <h3 style={jobTitleStyle}>{job.title}</h3>
            <p style={jobTextStyle}>{job.company}</p>
            <p style={jobTextStyle}>{job.location}</p>
            <button 
              style={applyBtnStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = applyBtnHoverStyle.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = applyBtnStyle.backgroundColor}
            >
              Apply Now!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobListings;
