import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebaseConfig'; 
import styled from 'styled-components';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AuthInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AuthButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
  cursor: pointer;
`;

const GoogleSignInButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const GoogleIcon = styled.svg`
  margin-right: 10px;
`;

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate(user.metadata.creationTime === user.metadata.lastSignInTime ? '/signup' : '/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  const handleSignup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
      navigate('/signup'); 
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Logged in with Google!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in with Google:', error);
      alert('Error logging in with Google. Please try again.');
    }
  };

  return (
    <AuthContainer>
      <h2>Login / Signup</h2>
      <AuthForm>
        <AuthInput type="email" placeholder="Email" id="email" />
        <AuthInput type="password" placeholder="Password" id="password" />
        <AuthButton onClick={() => handleLogin(document.getElementById('email').value, document.getElementById('password').value)}>Login</AuthButton>
        <AuthButton onClick={() => handleSignup(document.getElementById('email').value, document.getElementById('password').value)}>Signup</AuthButton>
      </AuthForm>
      <GoogleSignInButton onClick={handleGoogleSignIn}>
        <GoogleIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
          <path d="M23.76 12.27c0-.83-.07-1.62-.19-2.38H12v4.76h6.21c-2.77 2.56-6.51 4.19-10.21 4.19-6.65 0-12.14-5.5-12.14-12.14S5.91.01 12.56.01c3.62 0 6.93 1.29 9.55 3.41l6.73-6.73C22.39 1.14 17.53.02 12.56.02 5.63.02.01 5.91.01 12.56c0 6.26 5.07 11.33 11.33 11.33 1.56 0 3.05-.14 4.5-.39l-3.43-3.43z" fill="#4285F4"/>
          <path d="M12 2.5C7.4 2.5 3.29 5.37.85 9.64l-3.7-.02C1.85 4.2 6.87 1.1 12 1.1c5.24 0 9.77 2.18 13.07 5.69l-6.6 6.6C16.15 9.54 14.23 8.37 12 8.37c-3.74 0-6.86 3.1-6.86 6.86 0 .52.05 1.03.13 1.53h-4.67C.05 13.35 0 13.18 0 13c0-5.07 4.09-9.2 9.2-9.2 4.57 0 8.49 2.43 10.46 5.9l-3.86 3.86C14.79 10.9 13.52 9.6 12 9.6c-2.89 0-5.27 2.38-5.27 5.27 0 .73.07 1.45.21 2.14h-4.72c-.12-.65-.21-1.31-.21-2 0-4.21 3.42-7.64 7.64-7.64 2.12 0 4.06.85 5.51 2.21l6.04-6.04c-3.16-3.1-7.6-4.86-12.15-4.86z" fill="#34A853"/>
          <path d="M12 22.66c-2.57 0-4.9-.88-6.78-2.35l-5.8 5.8c-1.09-1.41-1.77-3.21-1.77-5.21 0-4.21 3.42-7.64 7.64-7.64 2.12 0 4.06.85 5.51 2.21l5.88-5.88C16.99 6.7 14.1 4.85 12 4.85c-5.07 0-9.2 4.13-9.2 9.2 0 .84.1 1.67.27 2.48h-4.7c-.53-2.29-.82-4.77-.82-7.23C.47 7.1 4.54 3 9.68 3c4.47 0 8.47 2.08 11.09 5.32l-6.11 6.11c-1.27-1.31-2.94-2.2-4.76-2.2-3.29 0-5.95 2.66-5.95 5.95 0 .84.1 1.67.27 2.48H12c-.67-1.01-1.08-2.12-1.08-3.26 0-2.75 2.25-5 5-5 1.38 0 2.67.51 3.68 1.35l5.91-5.91c-3.56-3.2-8.19-5.07-13.27-5.07z" fill="#FBBC05"/>
        </GoogleIcon>
        Sign in with Google
      </GoogleSignInButton>
    </AuthContainer>
  );
};

export default Auth;
