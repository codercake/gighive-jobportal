import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a registration API call
    localStorage.setItem('registeredUser', JSON.stringify(user)); 
    navigate('/profile'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={user.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
