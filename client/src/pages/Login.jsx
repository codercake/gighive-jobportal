import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';  
import loginImage from '../assets/login-image.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in with email and password:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <p style={styles.subHeading}>Find the job made for you!</p>
        <button style={styles.googleBtn} onClick={handleGoogleSignIn}>
          <img
            src="https://cdn.dribbble.com/users/904380/screenshots/2230701/attachments/415076/google-logo-revised.png"
            alt="Google Logo"
            style={styles.googleIcon}
          />
          Log in with Google
        </button>
        <div style={styles.divider}>or Login with Email</div>
        <form onSubmit={handleSubmit}>
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
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={styles.loginBtn}>Log in</button>
        </form>
        <Link to="/forgot-password" style={styles.forgotLink}>Forgot password?</Link>
        <div style={styles.registerLink}>
          Not registered? <Link to="/signup" style={styles.link}>Create an Account</Link>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={loginImage} alt="Login" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    height: '100vh',
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
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  googleBtn: {
    backgroundColor: '#db4437',
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
  },
  googleIcon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  divider: {
    textAlign: 'center',
    margin: '20px 0',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  loginBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  forgotLink: {
    display: 'block',
    textAlign: 'center',
    margin: '10px 0',
  },
  registerLink: {
    textAlign: 'center',
    marginTop: '20px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  image: {
    width: '80%',
    borderRadius: '10px',
  },
};

export default Login;
