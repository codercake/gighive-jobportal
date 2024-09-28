import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
