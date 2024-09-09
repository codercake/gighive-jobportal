import { Link } from 'react-router-dom';

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#282c34',
  color: 'white'
};

const logoStyle = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
};

const navLinksStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
};

const buttonStyle = {
  padding: '0.5rem 1.2rem',
  border: 'none',
  backgroundColor: '#61dafb',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#21a1f1',
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>GigHive</div>
      <ul style={navLinksStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/jobs" style={linkStyle}>Jobs</Link></li>
        <li><Link to="/about" style={linkStyle}>About Us</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        <li>
          <Link to="/signin">
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
              WELCOME BACK!
            </button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
              BEGIN YOUR JOURNEY!
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
