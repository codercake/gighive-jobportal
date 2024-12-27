import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';
import signupImage from '../assets/sign-up-image.webp'; 
import googleLogo from '../assets/google-logo.jpg';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [workStatus, setWorkStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error signing up with email and password:", error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={imageContainerStyle}>
        <img src={signupImage} alt="Signup Visual" style={imageStyle} loading="lazy" />
      </div>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Create Account</h2>
        <p style={subHeadingStyle}>Find your next opportunity!</p>
        <button style={oauthBtnStyle} onClick={handleGoogleSignUp}>
          <img src={googleLogo} alt="Google Logo" style={oauthIconStyle} />
          Sign up with Google
        </button>
        <div style={dividerStyle}>or Sign up with Email</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={inputStyle}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={signUpBtnStyle}>Create Account</button>
        </form>
        <div style={loginLinkStyle}>
          Already have an account? <Link to="/login" style={linkStyle}>Log In</Link>
        </div>
      </div>
    </div>
  );
};

const imageContainerStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '400px', 
  width: 'auto',
  height: 'auto',
  borderRadius: '20px',
  objectFit: 'cover',
};


const formContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '50px',
  boxSizing: 'border-box',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '20px',
};

const subHeadingStyle = {
  fontSize: '1.5rem',
  marginBottom: '20px',
};

const oauthBtnStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  marginBottom: '20px',
};

const oauthIconStyle = {
  width: '35px',
  height: '35px',
  marginRight: '10px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const dividerStyle = {
  textAlign: 'center',
  margin: '20px 0',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const signUpBtnStyle = {
  width: '100%',
  padding: '15px',
  fontSize: '1.5rem',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const loginLinkStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

export default SignUp;
