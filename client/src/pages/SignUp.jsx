import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';
import signupImage from '../assets/sign-up-image.jpg'; 
import googleLogo from '../assets/google-logo.jpg'; 
function SignUp() {
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
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: '20px',
      }}>
        <img src={signupImage} alt="Signup Visual" style={{
          width: '70%',
          borderRadius: '50%',
        }} />
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '50px',
        boxSizing: 'border-box',
        borderRadius: '20px',
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Create Account</h2>
        <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Find your next opportunity!</p>
        <button style={{
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
        }} onClick={handleGoogleSignUp}>
          <img src={googleLogo} alt="Google Logo" style={{
            width: '35px',
            height: 'auto',
            marginRight: '10px',
          }} />
          Sign up with Google
        </button>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>or Sign up with Email</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            minLength="8"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Work status</label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                onClick={() => setWorkStatus('experienced')}
                style={{
                  flex: 1,
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  marginRight: '10px',
                  borderColor: workStatus === 'experienced' ? '#007bff' : '#ddd',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>I'm experienced</span>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  I have work experience (excluding internships)
                </p>
              </div>
              <div
                onClick={() => setWorkStatus('fresher')}
                style={{
                  flex: 1,
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  borderColor: workStatus === 'fresher' ? '#007bff' : '#ddd',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>I'm a fresher</span>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  I am a student/ Haven't worked after graduation
                </p>
              </div>
            </div>
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '15px',
            fontSize: '1.2rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}>Sign Up</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
