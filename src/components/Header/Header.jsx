import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo/logo2.png'; 


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/"><img src={logo} alt="Hair Consulting Logo" /></Link>
      </div>
      <div className="header__link">
        <Link to="/consultations" className="header__consultation-link">
          Request Consultation
        </Link>
      </div>
    </header>
  );
};

export default Header;
