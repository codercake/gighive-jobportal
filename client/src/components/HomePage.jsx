const heroStyle = {
  backgroundImage: 'https://as1.ftcdn.net/v2/jpg/01/66/02/22/1000_F_166022278_haMiH978jQG7ksFecK3L0ZB8ffijP3mw.jpg',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
};

const heroTextStyle = {
  fontSize: '4rem',
  marginBottom: '1rem',
};

const subTextStyle = {
  fontSize: '1.5rem',
  marginBottom: '2rem',
};

const ctaBtnStyle = {
  padding: '0.8rem 1.6rem',
  backgroundColor: '#61dafb',
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
};

const ctaBtnHoverStyle = {
  backgroundColor: '#21a1f1',
};

function HomePage() {
  return (
    <div style={heroStyle}>
      <div>
        <h1 style={heroTextStyle}>Welcome to GigHive</h1>
        <p style={subTextStyle}>Find your next gig or hire top talent for your projects.</p>
        <a 
          href="#jobs" 
          style={ctaBtnStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = ctaBtnHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = ctaBtnStyle.backgroundColor}
        >
          Explore Jobs
        </a>
      </div>
    </div>
  );
}

export default HomePage;
