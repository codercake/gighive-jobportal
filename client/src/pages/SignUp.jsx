import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';  // Assuming correct path
import signupImage from '../assets/sign-up-image.jpg';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Optionally, update user profile with full name
      navigate('/dashboard');  // Redirect to dashboard or welcome page
    } catch (error) {
      console.error("Error signing up with email and password:", error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');  // Redirect after sign-up
    } catch (error) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src={signupImage} alt="Signup Visual" style={styles.image} />
      </div>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Create Account</h2>
        <p style={styles.subHeading}>Find your next opportunity!</p>
        <button style={styles.googleBtn} onClick={handleGoogleSignUp}>
          <img
            src="https://cdn.dribbble.com/users/904380/screenshots/2230701/attachments/415076/google-logo-revised.png"
            alt="Google Logo"
            style={styles.googleIcon}
          />
          Sign up with Google
        </button>
        <div style={styles.divider}>or Sign up with Email</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={styles.input}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            minLength="8"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={styles.signUpBtn}>Sign Up</button>
        </form>
        <div style={styles.terms}>
          By continuing you accept our <a href="#">standard terms and conditions</a> and <a href="#">privacy policy</a>.
        </div>
        <div style={styles.loginLink}>
          Already have an account? <Link to="/login" style={styles.link}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  formContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '50px',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '3rem', // Larger heading
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  googleBtn: {
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    padding: '15px',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    cursor: 'pointer',
  },
  googleIcon: {
    width: '30px',
    marginRight: '10px',
  },
  divider: {
    margin: '20px 0',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    fontSize: '1.2rem',
    boxSizing: 'border-box',
  },
  signUpBtn: {
    width: '100%',
    padding: '15px',
    fontSize: '1.5rem',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  terms: {
    marginTop: '20px',
    fontSize: '1rem',
    color: '#555',
  },
  loginLink: {
    marginTop: '20px',
    fontSize: '1.2rem',
  },
  link: {
    color: '#4285F4',
    textDecoration: 'none',
  },
};

export default SignUp;
