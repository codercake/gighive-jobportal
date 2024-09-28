import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';  
import loginImage from '../assets/login-image.jpg';  
import googleLogo from '../assets/google-logo.jpg'; 
import linkedinLogo from '../assets/linkedin.png';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in with email and password:", error.message);
      
      if (error.code === 'auth/wrong-password') {
        alert('Invalid password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        alert('User not found. Please check your email.');
      } else {
        alert('Error logging in. Please try again later.');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
      alert('Error logging in with Google. Please try again later.');
    }
  };

  const handleLinkedInSignIn = async () => {
    // LinkedIn OAuth logic should be implemented here
    try {
      // Assuming LinkedIn sign-in logic
      // await signInWithPopup(auth, linkedinProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in with LinkedIn:", error.message);
      alert('Error logging in with LinkedIn. Please try again later.');
    }
  };

  const assessPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 1; 
    if (/[A-Z]/.test(password)) strength += 1; 
    if (/[0-9]/.test(password)) strength += 1; 
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    const strength = assessPasswordStrength(pwd);
    setPasswordStrength(strength);
  };

  return (
    <div style={wrapperStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Login</h2>
        <p style={subHeadingStyle}>Find the job made for you!</p>
        
        {/* Google Login */}
        <button style={oauthBtnStyle} onClick={handleGoogleSignIn}>
          <img
            src={googleLogo}
            alt="Google Logo"
            style={oauthIconStyle}
          />
          Log in with Google
        </button>
        
        {/* LinkedIn Login */}
        <button style={oauthBtnStyle} onClick={handleLinkedInSignIn}>
          <img
            src={linkedinLogo}
            alt="LinkedIn Logo"
            style={oauthIconStyle}
          />
          Log in with LinkedIn
        </button>
        
        <div style={dividerStyle}>or Login with Email</div>
        <form onSubmit={handleSubmit}>
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
            onChange={handlePasswordChange} 
          />
          
          <div style={sliderContainerStyle}>
            <input
              type="range"
              min="0"
              max="4"
              value={passwordStrength}
              readOnly
              style={sliderStyle}
            />
            <div style={strengthLabelStyle}>
              {['Weak', 'Fair', 'Good', 'Strong'][passwordStrength]}
            </div>
          </div>
          <button type="submit" style={loginBtnStyle}>Log in</button>
        </form>
        <Link to="/forgot-password" style={forgotLinkStyle}>Forgot password?</Link>
        <div style={registerLinkStyle}>
          Not registered? <Link to="/signup" style={linkStyle}>Create an Account</Link>
        </div>
      </div>
      <div style={imageContainerStyle}>
        <img src={loginImage} alt="Login" style={imageStyle} />
      </div>
    </div>
  );
};

// Styles defined outside JSX for readability
const wrapperStyle = {
  display: 'flex',
  height: '100vh',
};

const formContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '50px',
  boxSizing: 'border-box',
  borderRadius: '20px', // Circular edges for the form container
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
  height: 'auto', 
  marginRight: '10px',
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

const sliderContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const sliderStyle = {
  flex: 1,
  marginRight: '10px',
};

const strengthLabelStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
};

const loginBtnStyle = {
  width: '100%',
  padding: '15px',
  fontSize: '1.5rem',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const forgotLinkStyle = {
  display: 'block',
  textAlign: 'center',
  margin: '10px 0',
};

const registerLinkStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

const imageContainerStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
  padding: '20px',
};

const imageStyle = {
  width: '70%', 
  borderRadius: '50%', // Circular edges for the image
};

export default Login;
