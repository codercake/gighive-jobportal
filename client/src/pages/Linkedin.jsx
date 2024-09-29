import React from 'react';
import LinkedIn from 'react-linkedin-login-oauth2';

const LinkedInLoginButton = () => {
  const handleSuccess = (data) => {
    console.log("Login Success:", data);
  };

  const handleFailure = (error) => {
    console.log("Login Failed:", error);
  };

  return (
    <div>
      <LinkedIn
        clientId="860vhtriry4npv"
        redirectUri="http://localhost:3000/auth/linkedin/callback"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
      >
        <img src="linkedin.png" alt="Log in with LinkedIn" />
      </LinkedIn>
    </div>
  );
};

export default LinkedInLoginButton;
