import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login-image.jpg'; 
import { auth, googleProvider } from '../firebaseConfig';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <p style={styles.subHeading}>Find the job made for you!</p>
        <button style={styles.googleBtn}>
          <img
            src="https://cdn.dribbble.com/users/904380/screenshots/2230701/attachments/415076/google-logo-revised.png"
            alt="Google Logo"
            style={styles.googleIcon}
          />
          Log in with Google
        </button>
        <div style={styles.divider}>or Login with Email</div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required style={styles.input} />
          <input type="password" placeholder="Password" required style={styles.input} />
          <button type="submit" style={styles.loginBtn}>Log in</button>
        </form>
        <Link to="/forgot-password" style={styles.forgotLink}>Forgot password?</Link>
        <div style={styles.registerLink}>
          Not registered? <Link to="/signup" style={styles.link}>Create an Account</Link>
        </div>
      </div>

      {/* Right side: Image */}
      <div style={styles.imageContainer}>
        <img src={loginImage} alt="Login" style={styles.image} />
      </div>
    </div>
  );
}

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
  loginBtn: {
    width: '100%',
    padding: '15px',
    fontSize: '1.5rem',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  forgotLink: {
    display: 'block',
    marginTop: '10px',
    fontSize: '1.2rem',
    color: '#4285F4',
    textDecoration: 'none',
  },
  registerLink: {
    marginTop: '20px',
    fontSize: '1.2rem',
  },
  link: {
    color: '#4285F4',
    textDecoration: 'none',
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
};

export default Login;
