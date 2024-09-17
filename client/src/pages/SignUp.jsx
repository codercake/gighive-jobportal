import React from 'react';
import { Link } from 'react-router-dom';
import signupImage from '../assets/sign-up-image.jpg'; // Import your image here

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={styles.wrapper}>
      {/* Left side: Image */}
      <div style={styles.imageContainer}>
        <img src={signupImage} alt="Signup Visual" style={styles.image} />
      </div>

      {/* Right side: Sign-up Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Create Account</h2>
        <p style={styles.subHeading}>Find your next opportunity!</p>
        <button style={styles.googleBtn}>
          <img
            src="https://cdn.dribbble.com/users/904380/screenshots/2230701/attachments/415076/google-logo-revised.png"
            alt="Google Logo"
            style={styles.googleIcon}
          />
          Sign up with Google
        </button>
        <div style={styles.divider}>or Sign up with Email</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required style={styles.input} />
          <input type="email" placeholder="Email" required style={styles.input} />
          <input type="password" placeholder="Password" required minLength="8" style={styles.input} />
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
