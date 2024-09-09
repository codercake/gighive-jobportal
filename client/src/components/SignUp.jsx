import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpWithEmailPassword, signUpWithGoogle } from '../../firebase.js';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmailPassword(email, password);
      navigate('/');
    } catch (error) {
      console.error("Sign-Up Error:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();
      navigate('/');
    } catch (error) {
      console.error("Google Sign-Up Error:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <hr />
      <button className="google-btn" onClick={handleGoogleSignUp}>
        Sign Up with Google
      </button>
      </div>
  );
};

export default SignUp;