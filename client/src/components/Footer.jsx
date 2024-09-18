import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 GigHive. All Rights Reserved.</p>
      <div>
        <a href="#" style={styles.link}>Privacy Policy</a> | 
        <a href="#" style={styles.link}> Terms of Service</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 5px',
  },
};

export default Footer;
