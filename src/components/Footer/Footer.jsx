import React from 'react';
import './Footer.scss';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__hours">
        <h2>Hours of Operation</h2>
        <p>Monday to Friday: 8 AM - 5 PM</p>
        <p>Saturday: 10 AM - 6 PM</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 Hair Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
