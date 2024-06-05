import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo/logo2.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Hair Consulting Logo" />
      </div>
      <div className="header__link">
        <Link to="/consultation" className="header__consultation-link">
          Request Consultation
        </Link>
      </div>
    </header>
  );
};

export default Header;
